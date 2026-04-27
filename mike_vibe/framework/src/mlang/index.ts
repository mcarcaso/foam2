// mLang — typed predicate builders.
// Produces IR-as-data: predicates are JSON-serializable, can be evaluated
// in memory via evalIR, codegen-emitted via emit-ts, or shipped over the
// wire to a remote DAO.

import { expr } from '../schema/ir.js';
import type { Field, Predicate } from '../dao/types.js';

// ---- comparison ----

export const EQ = <T, K extends string, V>(f: Field<T, K, V>, v: V): Predicate<T> =>
  expr.eq(f, expr.lit(v as any)) as Predicate<T>;

export const NEQ = <T, K extends string, V>(f: Field<T, K, V>, v: V): Predicate<T> =>
  expr.ne(f, expr.lit(v as any)) as Predicate<T>;

export const GT = <T, K extends string, V>(f: Field<T, K, V>, v: V): Predicate<T> =>
  expr.gt(f, expr.lit(v as any)) as Predicate<T>;

export const GTE = <T, K extends string, V>(f: Field<T, K, V>, v: V): Predicate<T> =>
  expr.ge(f, expr.lit(v as any)) as Predicate<T>;

export const LT = <T, K extends string, V>(f: Field<T, K, V>, v: V): Predicate<T> =>
  expr.lt(f, expr.lit(v as any)) as Predicate<T>;

export const LTE = <T, K extends string, V>(f: Field<T, K, V>, v: V): Predicate<T> =>
  expr.le(f, expr.lit(v as any)) as Predicate<T>;

export const IN = <T, K extends string, V>(f: Field<T, K, V>, vs: readonly V[]): Predicate<T> =>
  expr.in(f, ...vs.map((v) => expr.lit(v as any))) as Predicate<T>;

// ---- string ----

export const CONTAINS = <T, K extends string>(
  f: Field<T, K, string>, v: string, ignoreCase = false,
): Predicate<T> =>
  expr.contains(f, expr.lit(v), ignoreCase) as Predicate<T>;

export const STARTS_WITH = <T, K extends string>(
  f: Field<T, K, string>, v: string, ignoreCase = false,
): Predicate<T> =>
  expr.startsWith(f, expr.lit(v), ignoreCase) as Predicate<T>;

export const ENDS_WITH = <T, K extends string>(
  f: Field<T, K, string>, v: string, ignoreCase = false,
): Predicate<T> =>
  expr.endsWith(f, expr.lit(v), ignoreCase) as Predicate<T>;

// ---- logical ----

export const AND = <T>(...ps: Predicate<T>[]): Predicate<T> =>
  expr.and(...ps) as Predicate<T>;

export const OR = <T>(...ps: Predicate<T>[]): Predicate<T> =>
  expr.or(...ps) as Predicate<T>;

export const NOT = <T>(p: Predicate<T>): Predicate<T> =>
  expr.not(p) as Predicate<T>;

export const TRUE  = <T>(): Predicate<T> => expr.lit(true)  as Predicate<T>;
export const FALSE = <T>(): Predicate<T> => expr.lit(false) as Predicate<T>;
