// Public entry — schema authoring + types most consumers need.
// Runtime and codegen are sub-paths so apps don't pay for them unless used.

export * from './schema/index.js';
export type { ValidationError } from './runtime/validate.js';

// A minimal Ctx — apps extend this via declaration merging.
export interface Ctx {
  readonly logger?: { log(...a: unknown[]): void };
}

// Tiny pipe helper so the data + module style chains nicely.
export function pipe<A>(a: A): A;
export function pipe<A, B>(a: A, ab: (a: A) => B): B;
export function pipe<A, B, C>(a: A, ab: (a: A) => B, bc: (b: B) => C): C;
export function pipe<A, B, C, D>(a: A, ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D): D;
export function pipe<A, B, C, D, E>(a: A, ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D, de: (d: D) => E): E;
export function pipe(a: unknown, ...fns: Array<(x: unknown) => unknown>): unknown {
  return fns.reduce((v, f) => f(v), a);
}
