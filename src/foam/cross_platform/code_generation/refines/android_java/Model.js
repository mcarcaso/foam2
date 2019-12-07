foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines.android_java',
  name: 'ModelJavaRefinement',
  refines: 'foam.core.Model',
  flags: ['android'],
  properties: [
    {
      class: 'StringArrayProperty',
      name: 'androidImplements'
    }
  ],
});
