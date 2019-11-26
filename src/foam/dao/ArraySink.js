/**
 * @license
 * Copyright 2018 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'foam.dao',
  name: 'ArraySink',
  extends: 'foam.dao.AbstractSink',
  properties: [
    {
      class: 'ListProperty',
      name: 'array',
      swiftOptional: false,
      factory: function() { return []; },
      javaFactory: `return new java.util.ArrayList();`,
      swiftFactory: `return [];`
    }
  ],
  methods: [
    {
      name: 'put',
      code: function(o, sub) {
        this.array.push(o);
      },
      androidCode: `
        java.util.List a = getArray();
        a.add(obj);
        setArray(a);
      `,
      swiftCode: `
        var a = getArray();
        a.append(obj);
        setArray(a);
      `,
    },
    {
      name: 'remove',
      swiftCode: `
        setArray(getArray().filter({ (o) -> Bool in
          return !foam_cross_platform_Lib.equals(obj, o)
        }));
      `,
      androidCode: `
        setArray(getArray()
          .stream()
          .filter(o -> !foam.cross_platform.Lib.equals(obj, o))
          .collect(java.util.stream.Collectors.toList()));
      `,
    },
    {
      name: 'reset',
      crossPlatformCode: `
        clearProperty("array");
      `,
    },
  ]
});
