import type { IR } from './ir.js';
import type { Property } from './property.js';

// Everything in a Model is an Axiom. The `properties:`, `actions:`, etc.
// keys on a defineClass literal are typed sugar that funnel into one
// `axioms` array — same architecture as FOAM, just typed and immutable.

export type AxiomKind =
  | 'property'
  | 'method'
  | 'action'
  | 'listener'
  | 'topic'
  | 'import'
  | 'export';

export interface AxiomBase {
  readonly kind: AxiomKind;
  readonly name: string;
}

export interface PropertyAxiom extends AxiomBase {
  readonly kind: 'property';
  readonly property: Property;
}

export interface ActionAxiom extends AxiomBase {
  readonly kind: 'action';
  readonly isEnabled?:   IR;
  readonly isAvailable?: IR;
  readonly code:         IR;
  readonly label?:       string;
  readonly help?:        string;
}

export interface MethodAxiom extends AxiomBase {
  readonly kind: 'method';
  readonly params: readonly { name: string; type: TypeRef }[];
  readonly returns: TypeRef;
  readonly code: IR;
}

export interface ListenerAxiom extends AxiomBase {
  readonly kind: 'listener';
  readonly code: IR;
  readonly framed?: boolean;
  readonly merged?: boolean;
}

export interface TopicAxiom extends AxiomBase {
  readonly kind: 'topic';
}

export interface ImportAxiom extends AxiomBase {
  readonly kind: 'import';
}

export interface ExportAxiom extends AxiomBase {
  readonly kind: 'export';
}

export type Axiom =
  | PropertyAxiom
  | ActionAxiom
  | MethodAxiom
  | ListenerAxiom
  | TopicAxiom
  | ImportAxiom
  | ExportAxiom;

export type TypeRef =
  | { kind: 'string' | 'int' | 'float' | 'bool' | 'datetime' | 'void' | 'any' }
  | { kind: 'list'; of: TypeRef }
  | { kind: 'ref'; to: string };

export interface Model {
  readonly fqn:       string;                       // 'app.Task'
  readonly package?:  string;
  readonly name:      string;
  readonly extends?:  string;
  readonly refines?:  string;
  readonly axioms:    readonly Axiom[];

  // sugar accessors — filtered views over `axioms`
  readonly properties: Readonly<Record<string, Property>>;
  readonly actions:    Readonly<Record<string, ActionAxiom>>;
  readonly methods:    Readonly<Record<string, MethodAxiom>>;
  readonly listeners:  Readonly<Record<string, ListenerAxiom>>;
  readonly topics:     readonly string[];
  readonly imports:    readonly string[];
  readonly exports:    readonly string[];
}
