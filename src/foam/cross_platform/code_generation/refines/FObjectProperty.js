foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines',
  name: 'FObjectPropertyJavaRefinement',
  refines: 'foam.core.FObjectProperty',
  methods: [
    {
      name: 'getDeps',
      code: function(flagFilter, deps) {
        if ( ! flagFilter(this) ) return;
        if ( ! this.of ) return;
        deps[this.of.id] = true;
        this.of.getDeps(flagFilter, deps);
      }
    }
  ]
});
