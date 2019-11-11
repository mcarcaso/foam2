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
        java.util.Map a = (java.util.Map) o1;
        if ( o2 == null || o2 instanceof java.util.Map == false ) return 1;
        java.util.Map b = (java.util.Map) o2;
        
        Object[] aKeys = java.util.Arrays
          .stream(a.keySet().toArray())
          .sorted(new java.util.Comparator<Object>() {
            public int compare(Object o1, Object o2) {
              return foam.cross_platform.Lib.compare(o1, o2);
            }
          })
          .toArray();
        
        Object[] bKeys = java.util.Arrays
          .stream(b.keySet().toArray())
          .sorted(new java.util.Comparator<Object>() {
            public int compare(Object o1, Object o2) {
              return foam.cross_platform.Lib.compare(o1, o2);
            }
          })
          .toArray();
        
        int c = foam.cross_platform.Lib.compare(aKeys, bKeys);
        if ( c != 0 ) return c;
        
        for ( Object k : aKeys ) {
          c = foam.cross_platform.Lib.compare(
            a.containsKey(k) ? a.get(k) : null,
            b.containsKey(k) ? b.get(k) : null);
          if ( c != 0 ) return c;
        }
        
        return 0;
      `,
      swiftCode: `
        let a = o1 as! [AnyHashable:Any?]
        if !(o2 is [AnyHashable:Any?]) { return 1 }
        let b = o2 as! [AnyHashable:Any?]

        var aKeys = Array(a.keys);
        aKeys.sort(by: { (o1, o2) -> Bool in
          foam_cross_platform_Lib.compare(o1, o2) == -1
        })
        var bKeys = Array(b.keys);
        bKeys.sort(by: { (o1, o2) -> Bool in
          foam_cross_platform_Lib.compare(o1, o2) == -1
        })

        var c = foam_cross_platform_Lib.compare(aKeys, bKeys);
        if c != 0 { return c; }

        for k in aKeys {
          c = foam_cross_platform_Lib.compare(a[k] ?? nil, b[k] ?? nil);
          if ( c != 0 ) { return c; }
        }

        return 0;
      `,
    },
  ],
});
