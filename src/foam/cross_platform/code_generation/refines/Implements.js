foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines',
  name: 'ImplementsRefinement',
  refines: 'foam.core.Implements',
  flags: ['android'],
  methods: [
    {
      name: 'getDeps',
      code: function(flagFilter, deps) {
        if ( ! flagFilter(this) ) return;
        deps[this.path] = true;
      }
    },
    function buildAndroidClass(cls) {
      cls.implements = cls.implements.concat(this.path);
    }
  ]
});
