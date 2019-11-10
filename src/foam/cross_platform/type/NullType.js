/**
 * @license
 * Copyright 2019 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'foam.cross_platform.type',
  name: 'NullType',
  implements: ['foam.cross_platform.type.Type'],
  axioms: [ { class: 'foam.pattern.Singleton' } ],
  properties: [
    { class: 'IntProperty', name: 'ordinal', value: 8 },
  ],
  methods: [
    {
      name: 'isInstance',
      androidCode: `
        return o == null;
      `,
      swiftCode: `
        return o == nil
      `,
    },
    {
      name: 'compare',
      androidCode: `
        return o2 == null ? 0 : 1;
      `,
      swiftCode: `
        return o2 == nil ? 0 : 1
      `,
    },
  ],
});
