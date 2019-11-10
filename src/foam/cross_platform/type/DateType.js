/**
 * @license
 * Copyright 2019 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'foam.cross_platform.type',
  name: 'DateType',
  implements: ['foam.cross_platform.type.Type'],
  axioms: [ { class: 'foam.pattern.Singleton' } ],
  properties: [
    { class: 'IntProperty', name: 'ordinal', value: 1 },
  ],
  methods: [
    {
      name: 'isInstance',
      androidCode: `return o instanceof java.util.Date;`,
      swiftCode: `return o is Date`,
    },
    {
      name: 'compare',
      androidCode: `
        java.util.Date a = (java.util.Date) o1;
        if ( ! isInstance(o2) ) return 1;
        return foam.cross_platform.Lib.compare(
          a.getTime(), ((java.util.Date)o2).getTime());
      `,
      swiftCode: `
        let a = o1 as! Date
        guard let b = o2 as? Date else { return 1 }
        return foam_cross_platform_Lib.compare(
          a.timeIntervalSince1970, b.timeIntervalSince1970)
      `,
    },
  ],
});
