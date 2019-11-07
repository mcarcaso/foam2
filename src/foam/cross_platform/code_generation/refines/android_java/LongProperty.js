foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines.android_java',
  name: 'LongPropertyJavaRefinement',
  refines: 'foam.core.LongProperty',
  flags: ['android'],
  properties: [
    {
      name: 'androidNumberObjType',
      value: 'Long'
    },
    {
      name: 'androidNumberToValueMethod',
      value: 'longValue'
    }
  ]
});
