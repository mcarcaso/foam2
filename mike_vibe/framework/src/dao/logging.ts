import type { Ctx } from '../index.js';
import type { Dao, Module, OrderSpec, Predicate, Sink } from './types.js';

// Decorator pattern — wraps any Dao<T>, logs each call, delegates.
// Demonstrates the "stack of DAOs" composition that FOAM uses for
// caching, journaling, timing, etc.
export class LoggingDao<T> implements Dao<T> {
  constructor(
    private readonly inner: Dao<T>,
    private readonly label: string = inner.module.model.name,
    private readonly log: (...a: unknown[]) => void = console.log,
  ) {}

  get module(): Module<T> { return this.inner.module; }

  async put(ctx: Ctx, value: T): Promise<T> {
    this.log(`[${this.label}] put`, this.module.idOf(value));
    return this.inner.put(ctx, value);
  }
  async find(ctx: Ctx, id: string): Promise<T | undefined> {
    this.log(`[${this.label}] find`, id);
    return this.inner.find(ctx, id);
  }
  async remove(ctx: Ctx, id: string): Promise<void> {
    this.log(`[${this.label}] remove`, id);
    return this.inner.remove(ctx, id);
  }
  async removeAll(ctx: Ctx): Promise<void> {
    this.log(`[${this.label}] removeAll`);
    return this.inner.removeAll(ctx);
  }
  async select(ctx: Ctx, sink?: Sink<T>): Promise<T[]> {
    this.log(`[${this.label}] select`);
    return this.inner.select(ctx, sink);
  }
  where(p: Predicate<T>):       Dao<T> { return new LoggingDao(this.inner.where(p),       this.label, this.log); }
  orderBy(...s: OrderSpec<T>[]): Dao<T> { return new LoggingDao(this.inner.orderBy(...s),  this.label, this.log); }
  limit(n: number):             Dao<T> { return new LoggingDao(this.inner.limit(n),       this.label, this.log); }
  skip(n: number):              Dao<T> { return new LoggingDao(this.inner.skip(n),        this.label, this.log); }
}
