foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines.android_java',
  name: 'ImplementsRefinement',
  refines: 'foam.core.Implements',
  flags: ['swift'],
  methods: [
    function buildSwiftClass(cls, parentCls) {
      if ( ! parentCls.hasOwnAxiom(this.name) ) return;
      cls.implements = cls.implements
        .concat(foam.lookup(this.path).model_.swiftName);
    }
  ]
});
