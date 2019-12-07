foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines.ios_swift',
  name: 'ListPropertyRefine',
  refines: 'foam.core.ListProperty',
  flags: ['swift'],
  properties: [
    {
      name: 'swiftFactory',
      value: 'return []'
    }
  ]
});
