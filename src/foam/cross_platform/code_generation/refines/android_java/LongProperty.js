foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines.android_java',
  name: 'LongPropertyJavaRefinement',
  refines: 'foam.core.LongProperty',
  flags: ['android'],
  properties: [
    {
      name: 'androidAdapt',
      value: `
        if ( newValue instanceof Long ) {
          return (long) newValue;
        }
        if ( newValue instanceof Number ) {
          return ((Number) newValue).longValue();
        }
        // Will throw runtime exception.
        return (long) newValue;
      `
    }
  ]
});
