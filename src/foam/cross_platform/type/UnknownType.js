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
      androidCode: `
        if ( o1 instanceof Comparable ) {
          return ((Comparable) o1).compareTo(o2);
        }
        int diff = o1.hashCode() - o2.hashCode();
        return diff > 0 ? 1 : diff < 0 ? -1 : 0;
      `,
      swiftCode: `
        return ((o1 as AnyObject).hash ?? 0) - ((o2 as AnyObject).hash ?? 0)
      `,
    },
  ],
});
