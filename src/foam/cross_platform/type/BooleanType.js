/**
 * @license
 * Copyright 2019 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'foam.cross_platform.type',
  name: 'BooleanType',
  implements: ['foam.cross_platform.type.Type'],
  axioms: [ { class: 'foam.pattern.Singleton' } ],
  constants: [
    {
      type: 'foam.cross_platform.type.BooleanType',
      name: 'INSTANCE',
      factory: function () {
        return foam.cross_platform.type.BooleanType.create();
      }
    }
  ],
  properties: [
    { class: 'IntProperty', name: 'ordinal', value: 7 },
  ],
  methods: [
    {
      name: 'isInstance',
      androidCode: `
        return o instanceof Boolean;
      `,
      swiftCode: `
        return o is Bool
      `,
    },
    {
      name: 'compare',
      androidCode: `
        boolean a = (boolean) o1;
        if ( o2 instanceof Boolean == false ) return 1;
        boolean b = (boolean) o2;
        return a ? (b ? 0 : 1) : (b ? -1 : 0);
      `,
      swiftCode: `
        let a = o1 as! Bool
        guard let b = o2 as? Bool else { return 1 }
        return a ? (b ? 0 : 1) : (b ? -1 : 0)
      `,
    },
  ],
});
