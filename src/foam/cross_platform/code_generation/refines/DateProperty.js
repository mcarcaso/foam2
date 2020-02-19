foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines',
  name: 'FObjectArrayPropertyJavaRefinement',
  refines: 'foam.core.DateProperty',
  properties: [
    {
      name: 'androidAdapt',
      value: `
        if ( newValue instanceof Number ) {
          return new java.util.Date(((Number) newValue).longValue());
        }
        return (java.util.Date) newValue;
      `
    },
  ]
});
