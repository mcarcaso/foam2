foam.CLASS({
  package: 'foam.swift',
  name: 'AnonymousDetachable',
  flags: ['swift'],
  properties: [
    {
      name: 'fn',
      swiftType: '(() -> Void)'
    }
  ],
  methods: [
    {
      name: 'detach',
      swiftCode: `
        getFn()();
        super.detach();
      `
    }
  ]
});
