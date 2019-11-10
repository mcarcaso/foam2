/**
 * @license
 * Copyright 2019 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'foam.cross_platform.type',
  name: 'StringType',
  implements: ['foam.cross_platform.type.Type'],
  axioms: [ { class: 'foam.pattern.Singleton' } ],
  properties: [
    { class: 'IntProperty', name: 'ordinal', value: 5 },
  ],
  methods: [
    {
      name: 'isInstance',
      androidCode: `
        return o instanceof String;
      `,
      swiftCode: `
        return o is String
      `,
    },
    {
      name: 'compare',
      androidCode: `
        String a = (String) o1;
        if ( o2 instanceof String == false ) return 1;
        String b = (String) o2;
        return a.compareTo(b);
      `,
      swiftCode: `
        let a = o1 as! String
        guard let b = o2 as? String else { return 1 }
        return a.compare(b).rawValue
      `,
    },
  ],
});
