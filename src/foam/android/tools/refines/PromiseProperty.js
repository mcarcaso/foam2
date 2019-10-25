foam.CLASS({
  package: 'foam.android.tools',
  name: 'PromisePropertyJavaRefinement',
  refines: 'foam.core.PromiseProperty',
  flags: ['android'],
  requires: [
    'foam.cross_platform.Promise'
  ],
  properties:[
    {
      name: 'androidType',
      value: 'foam.cross_platform.Promise'
    }
  ]
});
