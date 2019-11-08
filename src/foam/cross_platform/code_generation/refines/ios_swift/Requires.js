foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines.ios_swift',
  name: 'RequiresRefinement',
  refines: 'foam.core.Requires',
  flags: ['swift'],
  methods: [
    function buildSwiftClass(cls, parentCls) {
      if ( ! parentCls.hasOwnAxiom(this.name) ) return;

      var model = this.__subContext__.lookup(this.path).model_;
      if ( ! foam.util.flagFilter(['swift'])(model) ) return cls;

      cls.method({
        type: model.swiftName + '.' + model.swiftName + 'Builder_',
        name: this.name + '_create',
        body: `return ${model.swiftName}.${model.swiftName}Builder(getSubX());`
      });

      return cls;
    }
  ]
});

