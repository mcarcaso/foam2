foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines',
  name: 'EnumPropertyJavaRefinement',
  refines: 'foam.core.Enum',
  flags: ['android'],
  methods: [
    {
      name: 'getDeps',
      code: function(flagFilter, deps) {
        if ( ! flagFilter(this) ) return;
        if ( ! this.of ) return;
        deps[this.of.id] = true;
      }
    }
  ]
});

foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines',
  name: 'EnumValueAxiom',
  refines: 'foam.core.internal.EnumValueAxiom',
  properties: [
    {
      name: 'name',
      androidGetter: `
        return getDefinition().get("name");
      `,
      swiftGetter: `
        return getDefinition()!["name"]!;
      `
    }
  ]
});
