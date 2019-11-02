foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines',
  name: 'StringArrayPropertyJavaRefinement',
  refines: 'foam.core.StringArrayProperty',
  flags: ['android'],
  properties: [
    {
      name: 'androidFAsAndroidValue',
      expression: function() {
        return o => {
          var v = this.f(o);
          if ( ! foam.Array.isInstance(v) ) {
            return foam.android.tools.asAndroidValue(v);
          }
          return `new String[] { ${v.map(s => `"${s}"`).join(', ')} }`;
        }
      }
    }
  ]
});
