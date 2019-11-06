foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines.ios_swift',
  name: 'AbstractInterfaceRefinement',
  refines: 'foam.core.AbstractInterface',
  flags: ['swift'],
  axioms: [
    {
      class: 'foam.core.AnonymousAxiom',
      installInClass: function(cls) {
        cls.buildSwiftClass = function(cls) {
          cls = cls || foam.swift.Protocol.create();

          cls.name = this.model_.swiftName;

          //this.addStaticClassInfo(cls);

          this.getAxioms()
            .filter(foam.util.flagFilter(['swift']))
            .filter(a => a.buildSwiftClass)
            .forEach(a => a.buildSwiftClass(cls, this));

          return cls;
        };
      }
    }
  ]
});
