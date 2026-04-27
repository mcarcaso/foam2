import type { Ctx } from '../index.js';
import { evalIR } from '../runtime/ir-eval.js';
import { ArraySink } from './sinks.js';
import type { Dao, Module, OrderSpec, Predicate, Sink } from './types.js';

// In-memory DAO backed by a Map<id, T>.
// `where`/`orderBy`/`limit`/`skip` return wrapped views that share the
// same store; mutating ops always operate on the canonical store.
export class InMemoryDao<T extends object> implements Dao<T> {
  readonly module: Module<T>;
  private readonly store: Map<string, T>;
  private readonly predicate?: Predicate<T>;
  private readonly order:     readonly OrderSpec<T>[];
  private readonly limitN:    number;
  private readonly skipN:     number;

  constructor(
    module: Module<T>,
    opts: {
      store?:     Map<string, T>;
      predicate?: Predicate<T>;
      order?:     readonly OrderSpec<T>[];
      limit?:     number;
      skip?:      number;
    } = {},
  ) {
    this.module    = module;
    this.store     = opts.store     ?? new Map<string, T>();
    this.predicate = opts.predicate;
    this.order     = opts.order     ?? [];
    this.limitN    = opts.limit     ?? Infinity;
    this.skipN     = opts.skip      ?? 0;
  }

  private spawn(patch: {
    predicate?: Predicate<T>;
    order?: readonly OrderSpec<T>[];
    limit?: number;
    skip?:  number;
  }): InMemoryDao<T> {
    return new InMemoryDao<T>(this.module, {
      store:     this.store,
      predicate: patch.predicate ?? this.predicate,
      order:     patch.order     ?? this.order,
      limit:     patch.limit     ?? this.limitN,
      skip:      patch.skip      ?? this.skipN,
    });
  }

  async put(_ctx: Ctx, value: T): Promise<T> {
    const id = this.module.idOf(value);
    if (!id) throw new Error(`DAO ${this.module.model.fqn}: missing primary key on put`);
    this.store.set(id, value);
    return value;
  }

  async find(_ctx: Ctx, id: string): Promise<T | undefined> {
    return this.store.get(id);
  }

  async remove(_ctx: Ctx, id: string): Promise<void> {
    this.store.delete(id);
  }

  async removeAll(_ctx: Ctx): Promise<void> {
    // Honor the current predicate — only remove matching rows.
    if (!this.predicate) {
      this.store.clear();
      return;
    }
    for (const [id, row] of this.store) {
      if (this.matches(row)) this.store.delete(id);
    }
  }

  async select(ctx: Ctx, sink?: Sink<T>): Promise<T[]> {
    const target: Sink<T> = sink ?? new ArraySink<T>();

    let rows: T[] = [];
    for (const row of this.store.values()) {
      if (this.matches(row)) rows.push(row);
    }
    if (this.order.length) rows = rows.sort(this.compare);

    const start = this.skipN;
    const end   = Math.min(rows.length, start + this.limitN);
    const out: T[] = [];
    for (let i = start; i < end; i++) {
      const r = rows[i]!;
      target.put(ctx, r);
      out.push(r);
    }
    target.eof?.(ctx);
    return out;
  }

  where(p: Predicate<T>):       Dao<T> { return this.spawn({ predicate: p }); }
  orderBy(...s: OrderSpec<T>[]): Dao<T> { return this.spawn({ order: s }); }
  limit(n: number):             Dao<T> { return this.spawn({ limit: n }); }
  skip(n: number):              Dao<T> { return this.spawn({ skip:  n }); }

  // ---------- internals ----------

  private matches(row: T): boolean {
    if (!this.predicate) return true;
    return !!evalIR(this.predicate, { self: row });
  }

  private readonly compare = (a: T, b: T): number => {
    for (const { field, dir } of this.order) {
      const av = (a as any)[field.name];
      const bv = (b as any)[field.name];
      if (av === bv) continue;
      const cmp =
        av === undefined ? -1 :
        bv === undefined ?  1 :
        av  <  bv         ? -1 :
        av  >  bv         ?  1 : 0;
      return dir === 'asc' ? cmp : -cmp;
    }
    return 0;
  };
}
