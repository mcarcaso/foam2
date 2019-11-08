/**
 * @license
 * Copyright 2019 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'foam.swift.type',
  name: 'FObject',
  implements: ['foam.swift.type.Type'],
  axioms: [ { class: 'foam.pattern.Singleton' } ],
  properties: [
    { name: 'ordinal', value: 0 },
  ],
  methods: [
    {
      name: 'isInstance',
      swiftCode_DELETE: `return o is foam_core_FObject`,
    },
    {
      name: 'compare',
      swiftCode_DELETE: `
        let a = o1 as! foam_core_FObject
        guard let b = o2 as? foam_core_FObject else { return 1 }
        return a.compareTo(b)
      `,
    },
  ],
});
