/**
 * @license
 * Copyright 2019 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'foam.cross_platform.type',
  name: 'NumberType',
  implements: ['foam.cross_platform.type.Type'],
  axioms: [ { class: 'foam.pattern.Singleton' } ],
  constants: [
    {
      type: 'foam.cross_platform.type.NumberType',
      name: 'INSTANCE',
      factory: function () {
        return foam.cross_platform.type.NumberType.create();
      }
    }
  ],
  properties: [
    { class: 'IntProperty', name: 'ordinal', value: 6 },
  ],
  methods: [
    {
      name: 'isInstance',
      androidCode: `
        return o instanceof Number;
      `,
      swiftCode: `
        return o is NSNumber
      `,
    },
    {
      name: 'compare',
      androidCode: `
        Number a = (Number) o1;
        if ( o2 instanceof Number == false ) return 1;
        Number b = (Number) o2;
        double d1 = ((Number) o1).doubleValue();
        double d2 = ((Number) o2).doubleValue();
        if ( d1 == d2 ) return  0;
        if ( d1  > d2 ) return  1;
        return -1;
      `,
      swiftCode: `
        let a = o1 as! NSNumber
        guard let b = o2 as? NSNumber else { return 1 }
        return a.compare(b).rawValue
      `,
    },
  ],
});
