foam.CLASS({
  package: 'foam.android.tools',
  name: 'RequiresRefinement',
  refines: 'foam.core.Requires',
  flags: ['android'],
  methods: [
    function buildAndroidClass(cls) {
      var model = this.__subContext__.lookup(this.path).model_;
      if ( ! foam.util.flagFilter(['android'])(model) ) return cls;

      cls.method({
        visibility: 'protected',
        type: this.path + '.' + 'Builder',
        name: this.name + '_create',
        body: `return ${this.path}.${model.name}Builder(getSubX());`
      });

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
