foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines',
  name: 'ClassPropertyJavaRefinement',
  refines: 'foam.core.ClassProperty',
  flags: ['android'],
  properties: [
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