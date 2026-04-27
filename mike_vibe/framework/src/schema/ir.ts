// IR — the language-agnostic expression/statement tree.
// Authors build IR via `expr.*` and `stmt.*` helpers. Codegen emits it.
// The runtime can also tree-walk it directly for live/dynamic models.

export type IR =
  | { kind: 'lit';    value: string | number | boolean | null }
  | { kind: 'get';    name: string }                              // self.<name>
  | { kind: 'set';    name: string; value: IR }                   // self.<name> = value
  | { kind: 'arg';    name: string }                              // function parameter
  | { kind: 'call';   target: string; args: IR[] }                // module-qualified call, e.g. 'User.fullName'
  | { kind: 'concat'; parts: IR[] }                               // string concatenation
  | { kind: 'add' | 'sub' | 'mul' | 'div'; left: IR; right: IR }
  | { kind: 'eq' | 'ne' | 'lt' | 'le' | 'gt' | 'ge'; left: IR; right: IR }
  | { kind: 'and' | 'or'; args: IR[] }
  | { kind: 'not';    arg: IR }
  | { kind: 'if';     cond: IR; then: IR; else?: IR }
  | { kind: 'seq';    stmts: IR[] }
  | { kind: 'pub';    topic: string; payload?: IR };              // emit a topic event

export const expr = {
  lit:    (v: string | number | boolean | null): IR => ({ kind: 'lit', value: v }),
  get:    (name: string): IR                       => ({ kind: 'get', name }),
  set:    (name: string, value: IR): IR            => ({ kind: 'set', name, value }),
  arg:    (name: string): IR                       => ({ kind: 'arg', name }),
  call:   (target: string, ...args: IR[]): IR     => ({ kind: 'call', target, args }),
  concat: (...parts: IR[]): IR                     => ({ kind: 'concat', parts }),

  add: (l: IR, r: IR): IR => ({ kind: 'add', left: l, right: r }),
  sub: (l: IR, r: IR): IR => ({ kind: 'sub', left: l, right: r }),
  mul: (l: IR, r: IR): IR => ({ kind: 'mul', left: l, right: r }),
  div: (l: IR, r: IR): IR => ({ kind: 'div', left: l, right: r }),

  eq: (l: IR, r: IR): IR => ({ kind: 'eq', left: l, right: r }),
  ne: (l: IR, r: IR): IR => ({ kind: 'ne', left: l, right: r }),
  lt: (l: IR, r: IR): IR => ({ kind: 'lt', left: l, right: r }),
  le: (l: IR, r: IR): IR => ({ kind: 'le', left: l, right: r }),
  gt: (l: IR, r: IR): IR => ({ kind: 'gt', left: l, right: r }),
  ge: (l: IR, r: IR): IR => ({ kind: 'ge', left: l, right: r }),

  and: (...args: IR[]): IR => ({ kind: 'and', args }),
  or:  (...args: IR[]): IR => ({ kind: 'or',  args }),
  not: (a: IR): IR         => ({ kind: 'not', arg: a }),

  if:  (cond: IR, then: IR, _else?: IR): IR => ({ kind: 'if', cond, then, else: _else }),
  seq: (...stmts: IR[]): IR                  => ({ kind: 'seq', stmts }),
  pub: (topic: string, payload?: IR): IR     => ({ kind: 'pub', topic, payload }),
};
