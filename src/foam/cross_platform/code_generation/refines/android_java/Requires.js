foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines.android_java',
  name: 'RequiresRefinement',
  refines: 'foam.core.Requires',
  flags: ['android'],
  methods: [
    function buildAndroidClass(cls, parentCls) {
      if ( ! parentCls.hasOwnAxiom(this.name) ) return;
      if ( foam.cross_platform.AbstractFObject != parentCls &&
           foam.cross_platform.AbstractFObject.hasOwnAxiom(this.name) ) return;

      var model = this.__subContext__.lookup(this.path).model_;
      if ( ! foam.util.flagFilter(['android'])(model) ) return cls;

      cls.method({
        visibility: 'public',
        type: this.path + '.' + model.name + 'Builder_',
        args: [
          { type: 'foam.cross_platform.Context', name: 'x' }
        ],
        name: this.name + '_create',
        body: `return ${this.path}.${model.name}Builder(x);`
      });
      cls.method({
        visibility: 'public',
        type: this.path + '.' + model.name + 'Builder_',
        name: this.name + '_create',
        body: `return ${this.name}_create(getSubX());`
      });

      return cls;
    }
  ]
});
