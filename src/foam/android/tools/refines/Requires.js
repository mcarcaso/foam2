foam.CLASS({
  package: 'foam.android.tools',
  name: 'RequiresRefinement',
  refines: 'foam.core.Requires',
  flags: ['android'],
  properties: [
  ],
  methods: [
    function buildAndroidClass(cls) {
      // TODO: create a method for creating a builder with the current context.
      return cls;
    },
    {
      name: 'getDeps',
      code: function(flagFilter, deps) {
        if ( ! flagFilter(this) ) return;
        deps[this.path] = true;
      }
    }
  ]
});
