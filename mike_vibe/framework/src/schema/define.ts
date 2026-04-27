import type { IR } from './ir.js';
import type { Property } from './property.js';
import type {
  Axiom, ActionAxiom, MethodAxiom, ListenerAxiom, TypeRef, Model,
} from './model.js';

// User-facing input shape for defineClass.
// `properties` is a record (not an array) so the key IS the name —
// matches FOAM's principle that property axiom name == declaration key.

export interface DefineClassInput<P extends Record<string, Property>> {
  readonly package?: string;
  readonly name:     string;
  readonly extends?: string;
  readonly refines?: string;

  readonly properties?: P;
  readonly actions?:    Record<string, Omit<ActionAxiom,   'kind' | 'name'>>;
  readonly methods?:    Record<string, Omit<MethodAxiom,   'kind' | 'name'>>;
  readonly listeners?:  Record<string, Omit<ListenerAxiom, 'kind' | 'name'>>;
  readonly topics?:     readonly string[];
  readonly imports?:    readonly string[];
  readonly exports?:    readonly string[];

  // raw escape hatch — same role as FOAM's `axioms:`
  readonly axioms?: readonly Axiom[];
}

// Project a Property record into its TS instance shape.
export type InstanceOf<P extends Record<string, Property>> = {
  -readonly [K in keyof P]: P[K]['_ts'];
};

// Augmented Model that carries its TS shape on the type side. `_ts` is
// phantom — only used for inference at codegen and consumer call-sites.
export interface TypedModel<T> extends Model {
  readonly _ts: T;
}

// ---------- the registry ----------

const REGISTRY = new Map<string, Model>();

export function register(model: Model): void {
  REGISTRY.set(model.fqn, model);
}

export function lookup(fqn: string): Model | undefined {
  return REGISTRY.get(fqn);
}

export function allModels(): readonly Model[] {
  return [...REGISTRY.values()];
}

export function clearRegistry(): void {
  REGISTRY.clear();
}

// ---------- defineClass ----------

export function defineClass<P extends Record<string, Property>>(
  input: DefineClassInput<P>,
): TypedModel<InstanceOf<P>> {
  const fqn = input.package ? `${input.package}.${input.name}` : input.name;

  const axioms: Axiom[] = [];

  // properties → property axioms
  if (input.properties) {
    for (const [name, p] of Object.entries(input.properties)) {
      // Stamp the name onto the property — frozen, with name set.
      const stamped: Property = { ...(p as any), name } as Property;
      axioms.push({ kind: 'property', name, property: stamped });
    }
  }

  if (input.actions) {
    for (const [name, a] of Object.entries(input.actions)) {
      axioms.push({ kind: 'action', name, ...a });
    }
  }

  if (input.methods) {
    for (const [name, m] of Object.entries(input.methods)) {
      axioms.push({ kind: 'method', name, ...m });
    }
  }

  if (input.listeners) {
    for (const [name, l] of Object.entries(input.listeners)) {
      axioms.push({ kind: 'listener', name, ...l });
    }
  }

  for (const t of input.topics ?? []) axioms.push({ kind: 'topic',  name: t });
  for (const i of input.imports ?? []) axioms.push({ kind: 'import', name: i });
  for (const e of input.exports ?? []) axioms.push({ kind: 'export', name: e });

  if (input.axioms) axioms.push(...input.axioms);

  // sugar views (filtered indexes) — built once, frozen
  const properties: Record<string, Property>     = {};
  const actions:    Record<string, ActionAxiom>  = {};
  const methods:    Record<string, MethodAxiom>  = {};
  const listeners:  Record<string, ListenerAxiom> = {};
  const topics:  string[] = [];
  const imports: string[] = [];
  const exports_: string[] = [];

  for (const a of axioms) {
    switch (a.kind) {
      case 'property': properties[a.name] = a.property; break;
      case 'action':   actions[a.name]    = a;          break;
      case 'method':   methods[a.name]    = a;          break;
      case 'listener': listeners[a.name]  = a;          break;
      case 'topic':    topics.push(a.name);             break;
      case 'import':   imports.push(a.name);            break;
      case 'export':   exports_.push(a.name);           break;
    }
  }

  const model: TypedModel<InstanceOf<P>> = {
    fqn,
    package:    input.package,
    name:       input.name,
    extends:    input.extends,
    refines:    input.refines,
    axioms:     Object.freeze(axioms),
    properties: Object.freeze(properties),
    actions:    Object.freeze(actions),
    methods:    Object.freeze(methods),
    listeners:  Object.freeze(listeners),
    topics:     Object.freeze(topics),
    imports:    Object.freeze(imports),
    exports:    Object.freeze(exports_),
    _ts:        undefined as unknown as InstanceOf<P>,
  };

  // If this is a refinement, merge into the existing model and keep
  // its FQN as the canonical key.
  if (input.refines) {
    const base = REGISTRY.get(input.refines);
    if (!base) throw new Error(`refines: unknown class ${input.refines}`);
    const merged = mergeModels(base, model);
    REGISTRY.set(base.fqn, merged);
    return merged as TypedModel<InstanceOf<P>>;
  }

  REGISTRY.set(fqn, model);
  return model;
}

function mergeModels(base: Model, patch: Model): Model {
  // axiom-level merge: same-name axioms in patch replace base's
  const byName = new Map<string, Axiom>();
  for (const a of base.axioms)  byName.set(`${a.kind}:${a.name}`, a);
  for (const a of patch.axioms) byName.set(`${a.kind}:${a.name}`, a);
  const axioms = [...byName.values()];

  // rebuild sugar views
  const properties: Record<string, Property>      = {};
  const actions:    Record<string, ActionAxiom>   = {};
  const methods:    Record<string, MethodAxiom>   = {};
  const listeners:  Record<string, ListenerAxiom> = {};
  const topics:  string[] = [];
  const imports: string[] = [];
  const exports_: string[] = [];

  for (const a of axioms) {
    switch (a.kind) {
      case 'property': properties[a.name] = a.property; break;
      case 'action':   actions[a.name]    = a;          break;
      case 'method':   methods[a.name]    = a;          break;
      case 'listener': listeners[a.name]  = a;          break;
      case 'topic':    topics.push(a.name);             break;
      case 'import':   imports.push(a.name);            break;
      case 'export':   exports_.push(a.name);           break;
    }
  }

  return {
    ...base,
    axioms:     Object.freeze(axioms),
    properties: Object.freeze(properties),
    actions:    Object.freeze(actions),
    methods:    Object.freeze(methods),
    listeners:  Object.freeze(listeners),
    topics:     Object.freeze(topics),
    imports:    Object.freeze(imports),
    exports:    Object.freeze(exports_),
  };
}

// Convenience type-ref builders for method signatures.
export const t = {
  string:   { kind: 'string'   } as TypeRef,
  int:      { kind: 'int'      } as TypeRef,
  float:    { kind: 'float'    } as TypeRef,
  bool:     { kind: 'bool'     } as TypeRef,
  datetime: { kind: 'datetime' } as TypeRef,
  void:     { kind: 'void'     } as TypeRef,
  any:      { kind: 'any'      } as TypeRef,
  list:     (of: TypeRef): TypeRef => ({ kind: 'list', of }),
  ref:      (to: string): TypeRef  => ({ kind: 'ref', to }),
};

export type { IR };
