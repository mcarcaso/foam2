// Symbol-keyed identity. Invisible to JSON.stringify, Object.keys,
// React, form libraries. Visible to the runtime.
//
// Use Symbol.for so the same logical Symbol is shared across modules,
// realms, and (within a process) duplicate framework copies.

import type { Model } from '../schema/model.js';
import { lookup } from '../schema/define.js';

export const KIND: unique symbol = Symbol.for('mike_vibe.kind') as never;

// A `Tagged` value is a record with the KIND symbol attached.
// Authoring as POJO, gets the tag at parse boundaries.
export type Tagged<T> = T & { readonly [KIND]?: string };

export function tag<T extends object>(o: T, fqn: string): Tagged<T> {
  Object.defineProperty(o, KIND, {
    value: fqn,
    enumerable: false,
    configurable: true,
    writable: false,
  });
  return o as Tagged<T>;
}

export function kindOf(o: unknown): string | undefined {
  if (typeof o !== 'object' || o === null) return undefined;
  return (o as any)[KIND];
}

export function modelOf(o: unknown): Model | undefined {
  const fqn = kindOf(o);
  return fqn ? lookup(fqn) : undefined;
}

// Generic property iteration — works for any Tagged value, since the
// KIND lets us look up the schema.
export interface PropertyView {
  readonly name:  string;
  readonly value: unknown;
}

export function properties(o: unknown): PropertyView[] | undefined {
  const m = modelOf(o);
  if (!m) return undefined;
  return Object.entries(m.properties)
    .filter(([, p]) => !(p as any).expression)
    .map(([name]) => ({ name, value: (o as any)[name] }));
}
