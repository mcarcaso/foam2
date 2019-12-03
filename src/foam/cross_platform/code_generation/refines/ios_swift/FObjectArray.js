foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines.ios_swift',
  name: 'FObjectArrayPropertyJavaRefinement',
  refines: 'foam.core.FObjectArray',
  flags: ['swift'],
  properties: [
    {
      name: 'swiftFactory',
      value: 'return []'
    }
  ]
});
