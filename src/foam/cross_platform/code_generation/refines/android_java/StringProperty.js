foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines.android_java',
  name: 'StringPropertyJavaRefinement',
  refines: 'foam.core.StringProperty',
  flags: ['android'],
  properties: [
    {
      name: 'androidAdapt',
      value: `
        if ( newValue instanceof String ) return (String) newValue;
        return newValue != null ? newValue.toString() : null;
      `
    },
  ]
});
