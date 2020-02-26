foam.CLASS({
  refines: 'foam.core.Trait',
  package: 'foam.cross_platform.code_generation.refines',
  name: 'TraitRefine',
  methods: [
    {
      name: 'getDeps',
      code: function(flagFilter, deps) {
        if ( ! flagFilter(this) ) return;
        deps[this.path] = true;
      }
    }
  ],
});
