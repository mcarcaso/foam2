foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines.ios_swift',
  name: 'ArrayPropertyJavaRefinement',
  refines: 'foam.core.ArrayProperty',
  flags: ['swift'],
  properties: [
    {
      name: 'swiftFactory',
      value: 'return []'
    }
  ]
});
