import type { IR } from './ir.js';

// Phantom-typed Property: carries its TS type as `_ts` for inference,
// and its codegen-relevant metadata as actual fields.
//
// `prop.*` builders return these. `InstanceOf<>` projects them into a record type.

export type PropKind =
  | 'string'
  | 'int'
  | 'float'
  | 'bool'
  | 'enum'
  | 'list'
  | 'ref'
  | 'datetime';

export interface PropertyBase<T> {
  readonly _ts:        T;                 // phantom — never set, only inferred
  readonly kind:       PropKind;
  readonly name?:      string;            // filled in by defineClass from the record key
  readonly id?:        boolean;           // marks this property as the primary key
  readonly required?:  boolean;
  readonly hidden?:    boolean;
  readonly label?:     string;
  readonly help?:      string;
  readonly value?:     T;                 // default value
  readonly factory?:   IR;                // IR producing the default
  readonly expression?: IR;               // computed from other props
  readonly assertValue?: IR;              // returns boolean
  readonly preSet?:    IR;                // returns the value to actually set
  readonly postSet?:   IR;                // side-effects after set
  readonly view?:      string;            // codegen hint for UIs
  readonly meta?:      Readonly<Record<string, unknown>>;
}

export interface StringProperty extends PropertyBase<string> {
  kind: 'string';
  min?: number;
  max?: number;
  pattern?: string;
}

export interface IntProperty extends PropertyBase<number> {
  kind: 'int';
  min?: number;
  max?: number;
}

export interface FloatProperty extends PropertyBase<number> {
  kind: 'float';
  min?: number;
  max?: number;
}

export interface BoolProperty extends PropertyBase<boolean> {
  kind: 'bool';
}

export interface EnumProperty<V extends string> extends PropertyBase<V> {
  kind: 'enum';
  values: readonly V[];
}

export interface ListProperty<P extends Property<any>> extends PropertyBase<P['_ts'][]> {
  kind: 'list';
  of: P;
}

export interface RefProperty<N extends string> extends PropertyBase<RefMarker<N>> {
  kind: 'ref';
  to: N;            // FQN of target class
}

// Brand for refs so two refs to different classes are distinguishable types.
export type RefMarker<N extends string> = { readonly __ref: N };

export interface DateTimeProperty extends PropertyBase<string> {
  kind: 'datetime';
}

export type Property<T = unknown> =
  | StringProperty
  | IntProperty
  | FloatProperty
  | BoolProperty
  | EnumProperty<any>
  | ListProperty<any>
  | RefProperty<any>
  | DateTimeProperty;

// ---------- builders ----------

const undef = undefined as never;

type StringOpts = Omit<StringProperty,   '_ts' | 'kind'>;
type IntOpts    = Omit<IntProperty,      '_ts' | 'kind'>;
type FloatOpts  = Omit<FloatProperty,    '_ts' | 'kind'>;
type BoolOpts   = Omit<BoolProperty,     '_ts' | 'kind'>;
type DTOpts     = Omit<DateTimeProperty, '_ts' | 'kind'>;

export const prop = {
  string: (opts: StringOpts = {}): StringProperty => ({ _ts: undef, kind: 'string', ...opts }),
  int:    (opts: IntOpts    = {}): IntProperty    => ({ _ts: undef, kind: 'int',    ...opts }),
  float:  (opts: FloatOpts  = {}): FloatProperty  => ({ _ts: undef, kind: 'float',  ...opts }),
  bool:   (opts: BoolOpts   = {}): BoolProperty   => ({ _ts: undef, kind: 'bool',   ...opts }),
  datetime: (opts: DTOpts   = {}): DateTimeProperty => ({ _ts: undef, kind: 'datetime', ...opts }),

  enum<V extends string>(
    values: readonly V[],
    opts: Omit<EnumProperty<V>, '_ts' | 'kind' | 'values'> = {},
  ): EnumProperty<V> {
    return { _ts: undef, kind: 'enum', values, ...opts };
  },

  list<P extends Property<any>>(
    of: P,
    opts: Omit<ListProperty<P>, '_ts' | 'kind' | 'of'> = {},
  ): ListProperty<P> {
    return { _ts: undef, kind: 'list', of, ...opts };
  },

  ref<N extends string>(
    to: N,
    opts: Omit<RefProperty<N>, '_ts' | 'kind' | 'to'> = {},
  ): RefProperty<N> {
    return { _ts: undef, kind: 'ref', to, ...opts };
  },
};
