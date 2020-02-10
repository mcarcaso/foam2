foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines',
  name: 'MultiPartID',
  refines: 'foam.core.MultiPartID',
  flags: ['swift'],
  properties: [
    {
      name: 'swiftGetter',
      value: `
        fatalError()
      `
    }
  ]
});
