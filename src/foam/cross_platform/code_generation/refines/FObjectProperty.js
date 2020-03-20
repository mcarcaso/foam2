foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines',
  name: 'FObjectPropertyJavaRefinement',
  refines: 'foam.core.FObjectProperty',
  methods: [
    {
      name: 'fromJson',
      androidCode: `
        return foam.cross_platform.deserialize.JSON.parse(o, getOf(), x);
      `
    },
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
