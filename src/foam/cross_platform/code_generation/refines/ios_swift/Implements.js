foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines.android_java',
  name: 'ImplementsRefinement',
  refines: 'foam.core.Implements',
  flags: ['swift'],
  methods: [
    function buildSwiftClass(cls, parentCls) {
      if ( ! parentCls.getOwnAxioms().find(a => a.name == this.name) ) {
        return;
      }
      cls.implements = cls.implements
        .concat(foam.lookup(this.path).model_.swiftName);
    }
  ]
});
