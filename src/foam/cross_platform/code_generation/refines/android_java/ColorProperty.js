foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines.android_java',
  name: 'LongPropertyJavaRefinement',
  refines: 'foam.core.ColorProperty',
  flags: ['android'],
  properties: [
    {
      name: 'androidValue',
      value: '0'
    },
    {
      name: 'androidType',
      value: 'int'
    },
    {
      name: 'androidAdapt',
      value: `
        if ( newValue instanceof String ) {
          return android.graphics.Color.parseColor((String) newValue);
        }
        return (int) newValue;
      `
    },
  ]
});
