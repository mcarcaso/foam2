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
    }
  ]
});
