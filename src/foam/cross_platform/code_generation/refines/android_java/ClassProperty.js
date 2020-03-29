foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines',
  name: 'ClassPropertyJavaRefinement',
  refines: 'foam.core.ClassProperty',
  flags: ['android'],
  properties: [
    {
      name: 'androidAdapt',
      value: `
        if ( newValue instanceof String ) {
          return getX().lookup((String) newValue);
        }
        return (foam.cross_platform.FoamClass) newValue;
      `
    },
    {
      name: 'androidType',
      value: 'foam.cross_platform.FoamClass'
    },
    {
      name: 'androidValue',
      expression: function(value) {
        var cls = foam.String.isInstance(value) ? foam.lookup(value) : value;
        return foam.android.tools.asAndroidValue(cls);
      }
    }
  ]
});
