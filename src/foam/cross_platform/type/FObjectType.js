/**
 * @license
 * Copyright 2019 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'foam.cross_platform.type',
  name: 'FObjectType',
  implements: ['foam.cross_platform.type.Type'],
  axioms: [ { class: 'foam.pattern.Singleton' } ],
  properties: [
    { class: 'IntProperty', name: 'ordinal', value: 0 },
  ],
  methods: [
    {
      name: 'isInstance',
      androidCode: `return o instanceof foam.cross_platform.FObject;`,
      swiftCode: `return o is foam_cross_platform_FObject`,
    },
    {
      name: 'compare',
      androidCode: `
        foam.cross_platform.FObject a = (foam.cross_platform.FObject) o1;
        if ( o2 instanceof foam.cross_platform.FObject == false ) return 1;
        foam.cross_platform.FObject b = (foam.cross_platform.FObject) o2;
        return a.compareTo(b);
      `,
      swiftCode: `
        let a = o1 as! foam_cross_platform_FObject
        guard let b = o2 as? foam_cross_platform_FObject else { return 1 }
        return a.compareTo(b)
      `,
    },
  ],
});
