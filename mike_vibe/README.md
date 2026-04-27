# mike_vibe

A small, TS-native take on FOAM. Models are declarative data; the framework
generates plain TS records + namespaces of pure functions. Every value is a
POJO that plays naturally with the rest of the TypeScript ecosystem, but the
runtime can still identify, validate, and reflect on values via a
Symbol-keyed identity.

## Layout

```
mike_vibe/
  framework/        the package — schema, IR, runtime, codegen
    src/
      schema/       prop, defineClass, IR, Model, Property, Axiom
      runtime/      KIND, modelOf, properties, validate, IR interpreter
      codegen/      TS emitter (data + namespace)
      index.ts      public entry
  example-app/      a consumer of the framework
    models/         author your schemas here
    scripts/
      generate.ts   reads models -> emits gen/*.ts
    gen/            generated TS modules (don't hand-edit)
    src/main.ts     demo using generated modules
```

## Try it

```sh
cd mike_vibe
npm install
npm --workspace example-app run demo
```

`demo` runs the generator, then runs `src/main.ts`.

## What a model looks like

```ts
// example-app/models/task.model.ts
import { defineClass, prop, expr } from '@mike_vibe/framework';

export const TaskModel = defineClass({
  package: 'app',
  name:    'Task',
  properties: {
    id:       prop.string({ required: true }),
    title:    prop.string({ required: true, min: 1 }),
    priority: prop.int({ value: 0, min: 0, max: 10 }),
    done:     prop.bool({ value: false }),
    summary:  prop.string({
      expression: expr.concat(expr.get('title'), expr.lit(' (P'),
                              expr.get('priority'), expr.lit(')')),
    }),
  },
  actions: {
    complete: {
      isEnabled: expr.not(expr.get('done')),
      code:      expr.set('done', expr.lit(true)),
    },
  },
});
```

## What the codegen emits

```ts
// example-app/gen/Task.ts (generated)
export type Task = Tagged<{
  id: string;
  title: string;
  priority: number;
  done: boolean;
}>;

export const Task = {
  model: MODEL,
  is(o): o is Task { ... },
  fromJSON(json): Task { ... },
  create(init): Task { ... },
  properties(self) { ... },

  setTitle   (ctx, self, value): Task { ... },
  setPriority(ctx, self, value): Task { ... },
  // ...

  summary (ctx, self): string { ... },         // from `expression:`
  complete(ctx, self): Task   { ... },         // from `actions:`
} as const;
```

## Design notes (why this shape)

- **Data, not classes.** Generated values are plain records; operations live
  in a static namespace alongside. Plays naturally with React, Drizzle, Zod,
  JSON.stringify, structural typing.
- **Symbol-keyed identity.** Each value carries a `KIND` symbol pointing to
  its FQN. Invisible to JSON/Object.keys; visible to the runtime for
  reflection, generic iteration, polymorphic dispatch.
- **Everything is an axiom.** `properties:`, `actions:`, `methods:`,
  `listeners:`, `topics:`, `imports:`, `exports:` are all sugar that funnel
  into one `axioms[]` array on the resulting Model. Adding a new axiom kind
  means adding a builder + an emitter — no kernel surgery.
- **IR for logic.** Expressions (`expression:`, `code:`, `isEnabled:`) are
  built from `expr.*` combinators that produce a serializable IR tree. The
  same IR can be (a) emitted as TS, (b) emitted as Java/SQL/Swift later,
  or (c) tree-walked by `evalIR()` for live/dynamic models.
- **Per-instance reflection without per-instance metadata.** `Module.model`
  is on the namespace; `Module.properties(self)` walks the schema and
  projects values out of the record. No prototype hacks, no per-object
  bookkeeping.
```
