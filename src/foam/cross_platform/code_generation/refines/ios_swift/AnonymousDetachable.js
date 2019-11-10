foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines.ios_swift',
  name: 'AnonymousDetachableRefine',
  refines: 'foam.core.AnonymousDetachable',
  properties: [
    {
      name: 'detachFn',
      swiftType: '(() -> Void)?'
    }
  ],
  methods: [
    {
      name: 'detach',
      swiftCode: `
        getDetachFn()?();
        super.detach();
      `
    }
  ]
});