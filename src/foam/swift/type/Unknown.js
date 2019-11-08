/**
 * @license
 * Copyright 2019 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'foam.swift.type',
  name: 'Unknown',
  implements: ['foam.swift.type.Type'],
  axioms: [ { class: 'foam.pattern.Singleton' } ],
  properties: [
    { name: 'ordinal', value: 10 },
  ],
  methods: [
    {
      name: 'isInstance',
      swiftCode_DELETE: `return true`,
    },
    {
      name: 'compare',
      swiftCode_DELETE: `return 0`,
    },
  ],
});
