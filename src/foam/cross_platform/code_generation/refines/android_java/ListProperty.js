foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines.android_java',
  name: 'ArrayPropertyJavaRefinement',
  refines: 'foam.core.ListProperty',
  properties: [
    {
      name: 'androidFactory',
      value: 'return new java.util.ArrayList();'
    },
    {
      name: 'androidAdapt',
      value: `
        if ( newValue instanceof java.util.List) return (java.util.List) newValue;
        return java.util.Arrays.asList(foam.cross_platform.type.ArrayType
          .ArrayTypeBuilder(null)
          .build()
          .toObjectArray(newValue));
      `
    }
  ]
});
