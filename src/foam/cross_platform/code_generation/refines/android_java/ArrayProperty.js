foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines.ios_swift',
  name: 'ArrayPropertyJavaRefinement',
  refines: 'foam.core.ArrayProperty',
  properties: [
    {
      name: 'androidFactory',
      value: 'return new Object[0];'
    },
    {
      name: 'androidAdapt',
      value: `
        return foam.cross_platform.type.ArrayType
          .ArrayTypeBuilder(null)
          .build()
          .toObjectArray(newValue);
      `
    }
  ]
});
