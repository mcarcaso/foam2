/**
 * @license
 * Copyright 2019 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'foam.swift.type',
  name: 'Boolean',
  implements: ['foam.swift.type.Type'],
  axioms: [ { class: 'foam.pattern.Singleton' } ],
  properties: [
    { name: 'ordinal', value: 7 },
  ],
  methods: [
    {
      name: 'isInstance',
      swiftCode_DELETE: `
        return o is Bool
      `,
    },
    {
      name: 'compare',
      swiftCode_DELETE: `
        let a = o1 as! Bool
        guard let b = o2 as? Bool else { return 1 }
        return a ? (b ? 0 : 1) : (b ? -1 : 0)
      `,
    },
  ],
});
