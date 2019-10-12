foam.CLASS({
  package: 'foam.android.tools',
  name: 'RequiresRefinement',
  refines: 'foam.core.Requires',
  flags: ['android'],
  methods: [
    {
      name: 'getDeps',
      code: function(flagFilter, deps) {
        if ( ! flagFilter(this) ) return;
        deps[this.path] = true;
      }
    }
  ]
});
