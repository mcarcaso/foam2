foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines.ios_swift',
  name: 'MapRefinement',
  refines: 'foam.core.MapProperty',
  flags: ['swift'],
  properties: [
    ['swiftFactory', 'return [:];']
  ]
});
