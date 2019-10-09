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
        var cls = this.__subContext__.lookup(this.of);
        deps[cls.id] = true;
        console.log(cls.id);
        cls.getDeps(flagFilter, deps);
      }
    }
  ]
});

