foam.CLASS({
  package: 'foam.android.tools',
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
