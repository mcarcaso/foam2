foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines.android_java',
  name: 'IntPropertyJavaRefinement',
  refines: 'foam.core.IntProperty',
  flags: ['android'],
  properties: [
    {
      name: 'androidAdapt',
      value: `
        if ( newValue instanceof Integer ) {
          return (int) newValue;
        }
        if ( newValue instanceof Number ) {
          return (int) Math.max(
            Integer.MIN_VALUE,
            Math.min(
              ((Number) newValue).longValue(),
              Integer.MAX_VALUE
            )
          );
        }
        // Will throw runtime exception.
        return (int) newValue;
      `
    }
  ]
});