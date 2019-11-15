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
          if ( cls ) debugger; // Does this happen?

          var protocol = foam.swift.Protocol.create();
          protocol.name = this.model_.swiftName;
          this.getAxioms()
            .filter(foam.util.flagFilter(['swift']))
            .filter(a => a.buildSwiftClass)
            .forEach(a => a.buildSwiftClass(protocol, this));

          var staticCls = foam.swift.SwiftClass.create();
          staticCls.name = protocol.name + 'Class';
          this.addSwiftStaticClassInfo(staticCls);

          return foam.swift.ArraySwiftSource.create({
            sources: [protocol, staticCls]
          });
        };
      }
    }
  ]
});
