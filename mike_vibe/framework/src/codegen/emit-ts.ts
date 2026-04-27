import type { IR } from '../schema/ir.js';
import type { Model } from '../schema/model.js';
import type { Property } from '../schema/property.js';

// Emits a single .ts file per Model in the data + namespace style:
//   - `export type User = { ... }`  (pure record)
//   - `export const User = { model, is, fromJSON, properties, ...computed, ...actions }`
//
// Static functions take (ctx, self, ...args) and return either a value
// (computed) or a new self (actions/setters) for immutable update.

export function emitTS(model: Model): string {
  const N = model.name;
  const fqn = model.fqn;

  const out: string[] = [];
  out.push(banner());
  out.push(`import { KIND, type Tagged } from '@mike_vibe/framework/runtime';`);
  out.push(`import { register, type Ctx, type Model } from '@mike_vibe/framework';`);
  out.push(`import type { Field } from '@mike_vibe/framework/dao';`);
  out.push(``);

  // 1) the record type
  out.push(`export type ${N} = Tagged<{`);
  for (const [name, p] of Object.entries(model.properties)) {
    if (p.expression) continue;   // computed — exposed as a function, not a field
    out.push(`  ${name}: ${tsType(p)};`);
  }
  out.push(`}>;`);
  out.push(``);

  // 2) the model literal — embedded as data so reflection works.
  //    Register on import so runtime modelOf()/properties() can find it.
  out.push(`const MODEL = ${stringifyModel(model)} as unknown as Model;`);
  out.push(`register(MODEL);`);
  out.push(``);

  // 3) the namespace (operations)
  out.push(`export const ${N} = {`);
  out.push(`  model: MODEL,`);
  out.push(``);
  out.push(`  is(o: unknown): o is ${N} {`);
  out.push(`    return typeof o === 'object' && o !== null && (o as any)[KIND] === ${j(fqn)};`);
  out.push(`  },`);
  out.push(``);
  out.push(`  fromJSON(json: unknown): ${N} {`);
  out.push(`    if (typeof json !== 'object' || json === null) throw new Error('invalid JSON for ${N}');`);
  out.push(`    const v = { ...(json as object) } as ${N};`);
  out.push(`    Object.defineProperty(v, KIND, { value: ${j(fqn)}, enumerable: false });`);
  out.push(`    return v;`);
  out.push(`  },`);
  out.push(``);
  out.push(`  toJSON(self: ${N}): unknown {`);
  // Symbols are skipped by JSON.stringify, so we can return self directly.
  out.push(`    return { ...self };`);
  out.push(`  },`);
  out.push(``);
  out.push(`  create(init: Omit<${N}, never>): ${N} {`);
  out.push(`    const v = { ...init } as ${N};`);
  out.push(`    Object.defineProperty(v, KIND, { value: ${j(fqn)}, enumerable: false });`);
  out.push(`    return v;`);
  out.push(`  },`);
  out.push(``);
  out.push(`  // Iterates stored properties only — computed properties are`);
  out.push(`  // exposed as functions on this namespace.`);
  out.push(`  properties(self: ${N}): Array<{ name: string; value: unknown }> {`);
  out.push(`    return Object.entries(MODEL.properties)`);
  out.push(`      .filter(([, p]) => !(p as any).expression)`);
  out.push(`      .map(([name]) => ({ name, value: (self as any)[name] }));`);
  out.push(`  },`);
  out.push(``);

  // ID extraction — for DAO use. Fall back to .id by convention if no
  // property is flagged. Throws at runtime if there's no id field.
  const idProp = findIdProperty(model);
  out.push(`  // Primary key extraction — used by DAOs.`);
  if (idProp) {
    out.push(`  idOf(self: ${N}): string {`);
    out.push(`    return String((self as any).${idProp});`);
    out.push(`  },`);
  } else {
    out.push(`  idOf(_self: ${N}): string {`);
    out.push(`    throw new Error('${fqn} has no primary key declared (use prop.*({ id: true }) or name a property "id")');`);
    out.push(`  },`);
  }
  out.push(``);

  // Field references — typed IR nodes used by mLang predicates and ordering.
  out.push(`  // Typed field references for queries: User.fields.email`);
  out.push(`  fields: {`);
  for (const [name, p] of Object.entries(model.properties)) {
    if (p.expression) continue;
    out.push(`    ${name}: { kind: 'get', name: ${j(name)} } as Field<${N}, ${j(name)}, ${tsType(p)}>,`);
  }
  out.push(`  } as const,`);
  out.push(``);

  // 4) generated immutable setters per stored property
  for (const [name, p] of Object.entries(model.properties)) {
    if (p.expression) continue;
    out.push(`  set${cap(name)}(_ctx: Ctx, self: ${N}, value: ${tsType(p)}): ${N} {`);
    out.push(`    return ${N}.create({ ...self, ${name}: value });`);
    out.push(`  },`);
    out.push(``);
  }

  // 5) computed (expression) properties as functions
  for (const [name, p] of Object.entries(model.properties)) {
    if (!p.expression) continue;
    out.push(`  ${name}(_ctx: Ctx, self: ${N}): ${tsType(p)} {`);
    out.push(`    return ${emitIRExpr(p.expression, 'self')};`);
    out.push(`  },`);
    out.push(``);
  }

  // 6) actions
  for (const [name, a] of Object.entries(model.actions)) {
    out.push(`  ${name}(_ctx: Ctx, self: ${N}): ${N} {`);
    if (a.isEnabled) {
      out.push(`    if (!(${emitIRExpr(a.isEnabled, 'self')})) return self;`);
    }
    out.push(`    const _self = { ...self };`);
    emitIRStatement(a.code, '    ', out, '_self');
    out.push(`    return ${N}.create(_self);`);
    out.push(`  },`);
    out.push(``);

    // also emit an isEnabled helper for UIs
    if (a.isEnabled) {
      out.push(`  ${name}_isEnabled(_ctx: Ctx, self: ${N}): boolean {`);
      out.push(`    return ${emitIRExpr(a.isEnabled, 'self')};`);
      out.push(`  },`);
      out.push(``);
    }
  }

  out.push(`} as const;`);
  out.push(``);

  return out.join('\n');
}

// ---------- helpers ----------

function banner(): string {
  return [
    `// AUTO-GENERATED by @mike_vibe/framework — do not edit by hand.`,
    `// Edit the .model.ts source instead and re-run the generator.`,
    ``,
  ].join('\n');
}

function tsType(p: Property): string {
  switch (p.kind) {
    case 'string':   return 'string';
    case 'int':
    case 'float':    return 'number';
    case 'bool':     return 'boolean';
    case 'datetime': return 'string';
    case 'enum': {
      const ep = p as Extract<Property, { kind: 'enum' }>;
      return ep.values.map(v => JSON.stringify(v)).join(' | ');
    }
    case 'list': {
      const lp = p as Extract<Property, { kind: 'list' }>;
      return `${tsType(lp.of)}[]`;
    }
    case 'ref': {
      const rp = p as Extract<Property, { kind: 'ref' }>;
      // emit as a string id reference for simplicity v1
      return `string /* ref ${rp.to} */`;
    }
  }
}

function j(s: unknown): string { return JSON.stringify(s); }
function cap(s: string): string { return s[0]!.toUpperCase() + s.slice(1); }

// Returns the property name flagged with `id: true`, or 'id' if such a
// property exists, otherwise undefined.
function findIdProperty(model: Model): string | undefined {
  for (const [name, p] of Object.entries(model.properties)) {
    if ((p as any).id === true) return name;
  }
  if ('id' in model.properties) return 'id';
  return undefined;
}

// IR -> TS expression. `selfVar` controls how `get`/`set` resolve;
// pure expressions read from `self`, action bodies read/write `_self`.
function emitIRExpr(ir: IR, selfVar: string): string {
  const E = (n: IR) => emitIRExpr(n, selfVar);
  switch (ir.kind) {
    case 'lit':    return j(ir.value);
    case 'get':    return `(${selfVar} as any).${ir.name}`;
    case 'arg':    return `(/* arg */ ${ir.name})`;
    case 'concat': return `[${ir.parts.map(E).join(', ')}].join('')`;
    case 'add':    return `((${E(ir.left)}) + (${E(ir.right)}))`;
    case 'sub':    return `((${E(ir.left)}) - (${E(ir.right)}))`;
    case 'mul':    return `((${E(ir.left)}) * (${E(ir.right)}))`;
    case 'div':    return `((${E(ir.left)}) / (${E(ir.right)}))`;
    case 'eq':     return `((${E(ir.left)}) === (${E(ir.right)}))`;
    case 'ne':     return `((${E(ir.left)}) !== (${E(ir.right)}))`;
    case 'lt':     return `((${E(ir.left)}) <   (${E(ir.right)}))`;
    case 'le':     return `((${E(ir.left)}) <=  (${E(ir.right)}))`;
    case 'gt':     return `((${E(ir.left)}) >   (${E(ir.right)}))`;
    case 'ge':     return `((${E(ir.left)}) >=  (${E(ir.right)}))`;
    case 'and':    return ir.args.length ? ir.args.map(a => `(${E(a)})`).join(' && ') : 'true';
    case 'or':     return ir.args.length ? ir.args.map(a => `(${E(a)})`).join(' || ') : 'false';
    case 'not':    return `!(${E(ir.arg)})`;
    case 'set':    return `((${selfVar} as any).${ir.name} = ${E(ir.value)})`;
    case 'if':     return `((${E(ir.cond)}) ? (${E(ir.then)}) : (${ir.else ? E(ir.else) : 'undefined'}))`;
    case 'seq':    return `(${ir.stmts.map(E).join(', ')})`;
    case 'call':   return `${ir.target}(${ir.args.map(E).join(', ')})`;
    case 'pub':    return `/* pub:${ir.topic} */ undefined`;
    case 'contains':   return `String(${E(ir.haystack)} ?? '')${ir.ignoreCase ? '.toLowerCase()' : ''}.includes(String(${E(ir.needle)} ?? '')${ir.ignoreCase ? '.toLowerCase()' : ''})`;
    case 'startsWith': return `String(${E(ir.haystack)} ?? '')${ir.ignoreCase ? '.toLowerCase()' : ''}.startsWith(String(${E(ir.needle)} ?? '')${ir.ignoreCase ? '.toLowerCase()' : ''})`;
    case 'endsWith':   return `String(${E(ir.haystack)} ?? '')${ir.ignoreCase ? '.toLowerCase()' : ''}.endsWith(String(${E(ir.needle)} ?? '')${ir.ignoreCase ? '.toLowerCase()' : ''})`;
    case 'in':         return `[${ir.values.map(E).join(', ')}].includes(${E(ir.value)})`;
  }
}

// IR -> TS statements (used inside actions for sequence + side effects)
function emitIRStatement(ir: IR, indent: string, out: string[], selfVar: string): void {
  if (ir.kind === 'seq') {
    for (const s of ir.stmts) emitIRStatement(s, indent, out, selfVar);
    return;
  }
  if (ir.kind === 'set') {
    out.push(`${indent}(${selfVar} as any).${ir.name} = ${emitIRExpr(ir.value, selfVar)};`);
    return;
  }
  if (ir.kind === 'if') {
    out.push(`${indent}if (${emitIRExpr(ir.cond, selfVar)}) {`);
    emitIRStatement(ir.then, indent + '  ', out, selfVar);
    out.push(`${indent}}${ir.else ? ' else {' : ''}`);
    if (ir.else) {
      emitIRStatement(ir.else, indent + '  ', out, selfVar);
      out.push(`${indent}}`);
    }
    return;
  }
  if (ir.kind === 'pub') {
    out.push(`${indent}/* TODO emit topic ${ir.topic} */`);
    return;
  }
  // default: evaluate as expression for side effects
  out.push(`${indent}${emitIRExpr(ir, selfVar)};`);
}

// Inline the model as a literal so reflection survives without runtime deps.
function stringifyModel(model: Model): string {
  // Strip phantom `_ts` (which is undefined anyway) and reify in a stable order.
  const safe = JSON.parse(JSON.stringify(model, (_k, v) => v));
  return JSON.stringify(safe, null, 2);
}
