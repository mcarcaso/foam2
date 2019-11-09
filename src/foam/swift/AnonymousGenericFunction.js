foam.CLASS({
  package: 'foam.swift',
  name: 'AnonymousGenericFunction',
  flags: ['swift'],
  implements: [
    'foam.cross_platform.GenericFunction'
  ],
  properties: [
    {
      name: 'fn',
      swiftType: '(([Any?]?) -> Any?)'
    }
  ],
  methods: [
    {
      name: 'executeFunction',
      swiftCode: `return getFn()(args);`
    }
  ]
});
