foam.CLASS({
  package: 'foam.android.tools',
  name: 'StringArrayPropertyJavaRefinement',
  refines: 'foam.core.StringArrayProperty',
  flags: ['android'],
  methods: [
    function fToAndroidValue(o) {
      var v = this.f(o);
      if ( ! foam.Array.isInstance(v) ) return this.SUPER(o);
      return `new String[] { ${v.map(s => `"${s}"`).join(', ')} }`;
    }
  ]
});
