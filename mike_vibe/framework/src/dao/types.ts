import type { IR } from '../schema/ir.js';
import type { Model } from '../schema/model.js';
import type { Ctx } from '../index.js';

// A Field is a typed IR get-node that knows the row type it indexes into
// and the value type at that position. Codegen emits one per stored property.
//
//   const f = User.fields.email;
//   f satisfies Field<User, 'email', string>;
//   f.kind === 'get'  // so it can be used as IR directly
export interface Field<TRow, TKey extends string, TVal> extends Readonly<{
  kind: 'get';
  name: TKey;
}> {
  readonly _row?: TRow;   // phantom
  readonly _val?: TVal;   // phantom
}

// A Predicate is an IR tree branded with the row type it filters.
export type Predicate<T> = IR & { readonly _row?: T };

// Order specification for `orderBy(...)`.
export interface OrderSpec<T> {
  readonly field: Field<T, any, any>;
  readonly dir:   'asc' | 'desc';
}

export const asc  = <T, K extends string, V>(f: Field<T, K, V>): OrderSpec<T> => ({ field: f, dir: 'asc'  });
export const desc = <T, K extends string, V>(f: Field<T, K, V>): OrderSpec<T> => ({ field: f, dir: 'desc' });

// The minimal contract a generated namespace must satisfy to be usable
// as a DAO row module. Codegen emits everything here.
export interface Module<T> {
  readonly model: Model;
  is(o: unknown): o is T;
  fromJSON(j: unknown): T;
  toJSON(self: T): unknown;
  create(init: any): T;
  properties(self: T): Array<{ name: string; value: unknown }>;
  idOf(self: T): string;
  readonly fields: Readonly<Record<string, Field<T, any, any>>>;
}

// A streaming results sink — DAOs push rows into it. Compatible with
// FOAM's Sink shape; ArraySink is the default when callers want results
// as a plain array.
export interface Sink<T> {
  put(ctx: Ctx, value: T): void;
  eof?(ctx: Ctx): void;
  error?(ctx: Ctx, err: unknown): void;
}

// The DAO interface itself. All ops are async; in-memory just resolves.
export interface Dao<T> {
  readonly module: Module<T>;

  put(ctx: Ctx, value: T): Promise<T>;
  find(ctx: Ctx, id: string): Promise<T | undefined>;
  remove(ctx: Ctx, id: string): Promise<void>;
  removeAll(ctx: Ctx): Promise<void>;

  /** Streams matching rows into the sink and returns a flat array too. */
  select(ctx: Ctx, sink?: Sink<T>): Promise<T[]>;

  // Composable views — each returns a new DAO sharing the underlying store.
  where(predicate: Predicate<T>): Dao<T>;
  orderBy(...specs: OrderSpec<T>[]): Dao<T>;
  limit(n: number): Dao<T>;
  skip(n: number):  Dao<T>;
}
