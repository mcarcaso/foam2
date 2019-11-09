foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines.android_java',
  name: 'PromisePropertyJavaRefinement',
  refines: 'foam.core.PromiseProperty',
  flags: ['android'],
  properties:[
    {
      name: 'androidType',
      value: 'foam.cross_platform.Promise'
    }
  ]
});
