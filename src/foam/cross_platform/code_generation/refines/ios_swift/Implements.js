foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines.android_java',
  name: 'ImplementsRefinement',
  refines: 'foam.core.Implements',
  flags: ['swift'],
  properties: [
    {
      name: 'name',
      swiftGetter: 'return "implements_" + getPath()!;'
    }
  ],
  methods: [
    function buildSwiftClass(cls, parentCls) {
      if ( parentCls.getSuperAxiomByName(this.name) ) return;
      if ( parentCls != foam.cross_platform.FObject &&
           foam.cross_platform.FObject.getAxiomByName(this.name) ) return;
      var model = foam.lookup(this.path).model_
      cls.imports = cls.imports.concat(model.swiftImports);
      cls.implements = cls.implements.concat(model.swiftName);
    }
  ]
});
