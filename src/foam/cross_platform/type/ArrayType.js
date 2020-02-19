/**
 * @license
 * Copyright 2019 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'foam.cross_platform.type',
  name: 'ArrayType',
  implements: ['foam.cross_platform.type.Type'],
  axioms: [ { class: 'foam.pattern.Singleton' } ],
  properties: [
    { class: 'IntProperty', name: 'ordinal', value: 4 },
  ],
  methods: [
    {
      name: 'concat',
      type: 'Any[]',
      args: [
        { type: 'Any', name: 'a' },
        { type: 'Any', name: 'b' },
      ],
      androidCode: `
        Object[] a1 = isInstance(a) ? toObjectArray(a) : new Object[] {a};
        Object[] a2 = isInstance(b) ? toObjectArray(b) : new Object[] {b};
        Object[] ret = new Object[a1.length + a2.length];
        for ( int i = 0 ; i < a1.length ; i++ ) { ret[i] = a1[i]; }
        for ( int i = 0 ; i < a2.length ; i++ ) { ret[a1.length + i] = a2[i]; }
        return ret;
      `,
    },
    {
      name: 'isInstance',
      androidCode: `
        // Horribly innefficient
        return toObjectArray(o) != null;
      `,
      swiftCode: `
        return o is [Any?]
      `,
    },
    {
      name: 'compare',
      androidCode: `
        Object[] a = toObjectArray(o1);
        Object[] b = toObjectArray(o2);
        if ( b == null ) return 1;
        int l = Math.min(a.length, b.length);
        for ( int i = 0 ; i < l ; i++ ) {
          int c = foam.cross_platform.Lib.compare(a[i], b[i]);
          if ( c != 0 ) return c;
        }
        return a.length == b.length ? 0 : a.length < b.length ? -1 : 1;
      `,
      swiftCode: `
        let a = o1 as! [Any?]
        guard let b = o2 as? [Any?] else { return 1 }
        let l = min(a.count, b.count)
        for i in 0..<l {
          let c = foam_cross_platform_Lib.compare(a[i], b[i])
          if ( c != 0 ) { return c }
        }
        return a.count == b.count ? 0 : a.count < b.count ? -1 : 1
      `,
    },
    {
      name: 'toObjectArray',
      type: 'Any[]',
      args: [
        { type: 'Any', name: 'o' }
      ],
      androidCode: `
        Object[] a = null;
${[
  'byte',
  'short',
  'int',
  'long',
  'float',
  'double',
  'char',
  'boolean',
].map(t => `
        if ( o instanceof ${t}[] ) {
          ${t}[] casted = (${t}[]) o;
          a = new Object[casted.length];
          for ( int i = 0 ; i < a.length ; i++ ) {
            a[i] = casted[i];
          }
        }
`).join('\n')}
        if ( o instanceof java.util.List ) {
          a = ((java.util.List) o).toArray();
        }
        if ( o instanceof Object[] ) {
          a = (Object[]) o;
        }
        return a;
      `
    },
  ],
});
