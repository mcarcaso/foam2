foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines',
  name: 'RequiresRefinement',
  refines: 'foam.core.Requires',
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
