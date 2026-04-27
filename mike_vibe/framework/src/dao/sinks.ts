import type { Ctx } from '../index.js';
import type { Sink } from './types.js';

export class ArraySink<T> implements Sink<T> {
  readonly values: T[] = [];
  put(_ctx: Ctx, v: T): void { this.values.push(v); }
}

export class CountSink<T> implements Sink<T> {
  count = 0;
  put(_ctx: Ctx, _v: T): void { this.count++; }
}

export function arraySink<T>(): ArraySink<T> { return new ArraySink<T>(); }
export function countSink<T>(): CountSink<T> { return new CountSink<T>(); }
