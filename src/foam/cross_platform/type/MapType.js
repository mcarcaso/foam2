/**
 * @license
 * Copyright 2019 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'foam.cross_platform.type',
  name: 'MapType',
  implements: ['foam.cross_platform.type.Type'],
  axioms: [ { class: 'foam.pattern.Singleton' } ],
  properties: [
    { class: 'IntProperty', name: 'ordinal', value: 2 },
  ],
  methods: [
    {
      name: 'isInstance',
      androidCode: `
        return o instanceof java.util.Map;
      `,
      swiftCode: `
        return o is [String:Any?]
      `,
    },
    {
      name: 'compare',
      androidCode: `
        throw new RuntimeException("TODO");
      /*
        let a = o1 as! [String:Any?]
        guard let b = o2 as? [String:Any?] else { return 1 }

        var aKeys = Array(a.keys)
        aKeys.sort()
        var bKeys = Array(b.keys)
        bKeys.sort()
        var c = FOAM_utils.compare(aKeys, bKeys)
        if c != 0 { return c }

        for k in aKeys {
          c = FOAM_utils.compare(a[k] ?? nil, b[k] ?? nil)
          if ( c != 0 ) { return c }
        }
        return 0
        */
      `,
      swiftCode: `
        fatalError("TODO")
      /*
        let a = o1 as! [String:Any?]
        guard let b = o2 as? [String:Any?] else { return 1 }

        var aKeys = Array(a.keys)
        aKeys.sort()
        var bKeys = Array(b.keys)
        bKeys.sort()
        var c = FOAM_utils.compare(aKeys, bKeys)
        if c != 0 { return c }

        for k in aKeys {
          c = FOAM_utils.compare(a[k] ?? nil, b[k] ?? nil)
          if ( c != 0 ) { return c }
        }
        return 0
        */
      `,
    },
  ],
});
