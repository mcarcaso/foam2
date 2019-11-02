foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines',
  name: 'FObjectArrayPropertyJavaRefinement',
  refines: 'foam.core.FObjectArray',
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
          return `new ${this.of}[] { ${v.map(s => foam.android.tools.asAndroidValue(s)).join(', ')} }`;
        }
      }
    }
  ],
  methods: [
    {
      name: 'getDeps',
      code: function(flagFilter, deps) {
        if ( ! flagFilter(this) ) return;
        if ( ! this.of ) return;
        deps[this.of] = true;
      }
    }
  ]
});
