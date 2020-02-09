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
  constants: [
    {
      type: 'foam.cross_platform.type.StringType',
      name: 'INSTANCE',
      factory: function() {
        return foam.cross_platform.type.StringType.create();
      }
    }
  ],
  properties: [
    { class: 'IntProperty', name: 'ordinal', value: 5 },
  ],
  methods: [
    {
      type: 'String',
      name: 'toStringValue',
      args: [
        { type: 'Any', name: 's' }
      ],
      swiftCode: `
        return s == nil ? "" : s as? String ?? String(describing: s!);
      `
    },
    {
      type: 'Boolean',
      name: 'isEmpty',
      args: [
        { type: 'String', name: 's' }
      ],
      androidCode: `
        return s == null || s.trim().isEmpty();
      `,
      swiftCode: `
        return s?.isEmpty ?? false;
      `
    },
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
        return Math.max(-1, Math.min(1, a.compareTo(b)));
      `,
      swiftCode: `
        let a = o1 as! String
        guard let b = o2 as? String else { return 1 }
        return a.compare(b).rawValue
      `,
    },
  ],
});