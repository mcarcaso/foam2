/**
 * @license
 * Copyright 2019 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'foam.swift.type',
  name: 'Array',
  implements: ['foam.swift.type.Type'],
  axioms: [ { class: 'foam.pattern.Singleton' } ],
  properties: [
    { name: 'ordinal', value: 4 },
  ],
  methods: [
    {
      name: 'isInstance',
      swiftCode_DELETE: `
        return o is [Any?]
      `,
    },
    {
      name: 'compare',
      swiftCode_DELETE: `
        let a = o1 as! [Any?]
        guard let b = o2 as? [Any?] else { return 1 }
        let l = min(a.count, b.count)
        for i in 0..<l {
          let c = FOAM_utils.compare(a[i], b[i])
          if ( c != 0 ) { return c }
        }
        return a.count == b.count ? 0 : a.count < b.count ? -1 : 1
      `,
    },
  ],
});
