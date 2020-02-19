foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines.android_java',
  name: 'StringArrayPropertyJavaRefinement',
  refines: 'foam.core.StringArrayProperty',
  properties: [
    {
      name: 'androidFactory',
      value: 'return new String[0];'
    },
    {
      name: 'androidAdapt',
      value: `
        if ( newValue instanceof String[] ) return (String[]) newValue;
        Object[] oa = foam.cross_platform.type.ArrayType
          .ArrayTypeBuilder(null)
          .build()
          .toObjectArray(newValue);
        String[] sa = new String[oa.length];
        for ( int i = 0 ; i < oa.length ; i++ ) {
          sa[i] = oa[i].toString();
        }
        return sa;
      `
    }
  ]
});
