/**
 * @license
 * Copyright 2019 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'foam.cross_platform.type',
  name: 'UnknownType',
  implements: ['foam.cross_platform.type.Type'],
  axioms: [ { class: 'foam.pattern.Singleton' } ],
  properties: [
    { class: 'IntProperty', name: 'ordinal', value: 10 },
  ],
  methods: [
    {
      name: 'isInstance',
      androidCode: `return true;`,
      swiftCode: `return true`,
    },
    {
      name: 'compare',
      androidCode: `return 0;`,
      swiftCode: `return 0`,
    },
  ],
});
