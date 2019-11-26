foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines.ios_swift',
  name: 'RequiresRefinement',
  refines: 'foam.core.Requires',
  flags: ['swift'],
  methods: [
    function buildSwiftClass(cls, parentCls) {
      if ( ! parentCls.hasOwnAxiom(this.name) ) return;
      if ( foam.cross_platform.AbstractFObject != parentCls &&
           foam.cross_platform.AbstractFObject.hasOwnAxiom(this.name) ) return;

      var model = this.__subContext__.lookup(this.path).model_;
      if ( ! foam.util.flagFilter(['swift'])(model) ) return cls;

      cls.method({
        visibility: 'public',
        type: model.swiftName + '.' + model.swiftName + 'Builder_',
        args: [
          { type: 'foam_cross_platform_Context', localName: 'x' }
        ],
        name: this.name + '_create',
        body: `return ${model.swiftName}.${model.swiftName}Builder(x);`
      });
      cls.method({
        visibility: 'public',
        type: model.swiftName + '.' + model.swiftName + 'Builder_',
        name: this.name + '_create',
        body: `return ${this.name}_create(getSubX());`
      });

      return cls;
    }
  ]
});

