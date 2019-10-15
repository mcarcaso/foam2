foam.CLASS({
  package: 'foam.android.tools',
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

