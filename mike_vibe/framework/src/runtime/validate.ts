import type { Model } from '../schema/model.js';
import type { Property } from '../schema/property.js';
import { evalIR } from './ir-eval.js';

export interface ValidationError {
  readonly property: string;
  readonly message:  string;
}

export function validate(value: unknown, model: Model): ValidationError[] {
  const errors: ValidationError[] = [];
  if (typeof value !== 'object' || value === null) {
    errors.push({ property: '', message: 'value is not an object' });
    return errors;
  }
  const v = value as Record<string, unknown>;

  for (const [name, p] of Object.entries(model.properties)) {
    const x = v[name];
    const err = validateOne(name, x, p, value);
    if (err) errors.push(...err);
  }
  return errors;
}

function validateOne(
  name: string,
  x: unknown,
  p: Property,
  self: unknown,
): ValidationError[] | undefined {
  const errs: ValidationError[] = [];
  const missing = x === undefined || x === null;

  if (missing) {
    if (p.required) errs.push({ property: name, message: 'required' });
    return errs.length ? errs : undefined;
  }

  switch (p.kind) {
    case 'string': {
      if (typeof x !== 'string') {
        errs.push({ property: name, message: 'expected string' }); break;
      }
      const sp = p as Extract<Property, { kind: 'string' }>;
      if (sp.min !== undefined && x.length < sp.min)
        errs.push({ property: name, message: `min length ${sp.min}` });
      if (sp.max !== undefined && x.length > sp.max)
        errs.push({ property: name, message: `max length ${sp.max}` });
      if (sp.pattern && !new RegExp(sp.pattern).test(x))
        errs.push({ property: name, message: `pattern mismatch` });
      break;
    }
    case 'int': {
      if (typeof x !== 'number' || !Number.isInteger(x)) {
        errs.push({ property: name, message: 'expected int' }); break;
      }
      const ip = p as Extract<Property, { kind: 'int' }>;
      if (ip.min !== undefined && x < ip.min)
        errs.push({ property: name, message: `min ${ip.min}` });
      if (ip.max !== undefined && x > ip.max)
        errs.push({ property: name, message: `max ${ip.max}` });
      break;
    }
    case 'float': {
      if (typeof x !== 'number')
        errs.push({ property: name, message: 'expected number' });
      break;
    }
    case 'bool': {
      if (typeof x !== 'boolean')
        errs.push({ property: name, message: 'expected bool' });
      break;
    }
    case 'enum': {
      const ep = p as Extract<Property, { kind: 'enum' }>;
      if (typeof x !== 'string' || !ep.values.includes(x))
        errs.push({ property: name, message: `expected one of ${ep.values.join('|')}` });
      break;
    }
    case 'list': {
      if (!Array.isArray(x))
        errs.push({ property: name, message: 'expected array' });
      break;
    }
    case 'ref':
    case 'datetime':
      // structural checks only for now
      break;
  }

  if (p.assertValue) {
    const ok = evalIR(p.assertValue, { self, args: { value: x } });
    if (ok === false) errs.push({ property: name, message: 'assertValue failed' });
  }

  return errs.length ? errs : undefined;
}
