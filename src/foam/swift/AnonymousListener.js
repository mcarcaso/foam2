foam.CLASS({
  package: 'foam.swift',
  name: 'AnonymousListener',
  flags: ['swift'],
  implements: [
    'foam.cross_platform.Listener'
  ],
  properties: [
    {
      name: 'fn',
      swiftType: '((foam_core_Detachable?, [Any?]?) -> Void)'
    }
  ],
  methods: [
    {
      name: 'executeListener',
      swiftCode: `getFn()(sub, args);`
    }
  ]
});
