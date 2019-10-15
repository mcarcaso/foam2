foam.CLASS({
  package: 'foam.android.tools',
  name: 'FObjectArrayPropertyJavaRefinement',
  refines: 'foam.core.FObjectArray',
  flags: ['android'],
  methods: [
    {
      name: 'getDeps',
      code: function(flagFilter, deps) {
        if ( ! flagFilter(this) ) return;
        if ( ! this.of ) return;
        deps[this.of] = true;
      }
    },
    function fToAndroidValue(o) {
      var v = this.f(o);
      if ( ! foam.Array.isInstance(v) ) return this.SUPER(o);
      return `new ${this.of}[] { ${v.map(s => foam.android.tools.asAndroidValue(s)).join(', ')} }`;
    }
  ]
});
