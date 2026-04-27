import type { IR } from '../schema/ir.js';

// Tree-walking interpreter for IR. Used by:
//   - validate() for assertValue
//   - DynamicClass (live runtime mode) for expression / postSet / actions
// The codegen emitter is the "static" alternative — same IR, two consumers.

export interface EvalEnv {
  readonly self: any;                       // the record value (`self.<get>`)
  readonly args?: Record<string, unknown>;  // function-style args (`expr.arg(name)`)
  readonly modules?: Record<string, Record<string, (...a: any[]) => any>>;
  readonly emit?: (topic: string, payload: unknown) => void;
}

export function evalIR(ir: IR, env: EvalEnv): any {
  switch (ir.kind) {
    case 'lit': return ir.value;
    case 'get': return (env.self as any)?.[ir.name];
    case 'set': {
      const v = evalIR(ir.value, env);
      (env.self as any)[ir.name] = v;
      return v;
    }
    case 'arg': return env.args?.[ir.name];
    case 'call': {
      const [mod, fn] = ir.target.split('.');
      const m = env.modules?.[mod ?? ''];
      const f = m?.[fn ?? ''];
      if (!f) throw new Error(`call: no module function ${ir.target}`);
      return f(...ir.args.map((a) => evalIR(a, env)));
    }
    case 'concat': return ir.parts.map((p) => evalIR(p, env)).join('');

    case 'add': return evalIR(ir.left, env) +  evalIR(ir.right, env);
    case 'sub': return evalIR(ir.left, env) -  evalIR(ir.right, env);
    case 'mul': return evalIR(ir.left, env) *  evalIR(ir.right, env);
    case 'div': return evalIR(ir.left, env) /  evalIR(ir.right, env);

    case 'eq':  return evalIR(ir.left, env) === evalIR(ir.right, env);
    case 'ne':  return evalIR(ir.left, env) !== evalIR(ir.right, env);
    case 'lt':  return evalIR(ir.left, env) <   evalIR(ir.right, env);
    case 'le':  return evalIR(ir.left, env) <=  evalIR(ir.right, env);
    case 'gt':  return evalIR(ir.left, env) >   evalIR(ir.right, env);
    case 'ge':  return evalIR(ir.left, env) >=  evalIR(ir.right, env);

    case 'and': return ir.args.every((a) => !!evalIR(a, env));
    case 'or':  return ir.args.some((a)  => !!evalIR(a, env));
    case 'not': return !evalIR(ir.arg, env);

    case 'if':
      if (evalIR(ir.cond, env)) return evalIR(ir.then, env);
      return ir.else ? evalIR(ir.else, env) : undefined;

    case 'seq': {
      let last: unknown = undefined;
      for (const s of ir.stmts) last = evalIR(s, env);
      return last;
    }
    case 'pub': {
      const payload = ir.payload ? evalIR(ir.payload, env) : undefined;
      env.emit?.(ir.topic, payload);
      return undefined;
    }
    case 'contains': {
      const h = String(evalIR(ir.haystack, env) ?? '');
      const n = String(evalIR(ir.needle,   env) ?? '');
      return ir.ignoreCase ? h.toLowerCase().includes(n.toLowerCase()) : h.includes(n);
    }
    case 'startsWith': {
      const h = String(evalIR(ir.haystack, env) ?? '');
      const n = String(evalIR(ir.needle,   env) ?? '');
      return ir.ignoreCase ? h.toLowerCase().startsWith(n.toLowerCase()) : h.startsWith(n);
    }
    case 'endsWith': {
      const h = String(evalIR(ir.haystack, env) ?? '');
      const n = String(evalIR(ir.needle,   env) ?? '');
      return ir.ignoreCase ? h.toLowerCase().endsWith(n.toLowerCase()) : h.endsWith(n);
    }
    case 'in': {
      const v  = evalIR(ir.value, env);
      const vs = ir.values.map((x) => evalIR(x, env));
      return vs.some((x) => x === v);
    }
  }
}
