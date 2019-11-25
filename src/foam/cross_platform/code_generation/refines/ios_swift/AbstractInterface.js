foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines.ios_swift',
  name: 'AbstractInterfaceRefinement',
  refines: 'foam.core.AbstractInterface',
  flags: ['swift'],
  axioms: [
    {
      class: 'foam.core.AnonymousAxiom',
      installInClass: function(cls) {
        var superBuildSwiftResources = cls.buildSwiftResources;
        cls.buildSwiftResources = function(resources, parentCls) {
          resources = superBuildSwiftResources.call(this, resources, parentCls);

          var name = this.model_.swiftName;
          var staticCls = foam.swift.SwiftClass.create();
          staticCls.name = name + 'Class';
          this.addSwiftStaticClassInfo(staticCls);
          resources.sources.push(staticCls);

          // This allows "abstract" classes because that's not a thing in swift.
          var extension = foam.swift.SwiftClass.create({
            type: 'extension',
            name: name,
            path: name + 'Extension.swift'
          });
          parentCls
            .getAxiomsByClass(foam.core.internal.InterfaceMethod)
            .filter(foam.util.flagFilter(['swift']))
            .forEach(m => {
              extension.method({
                visibility: 'public',
                type: m.swiftType,
                name: m.name,
                args: m.args.map(a => a.toSwiftArg()),
                body: `fatalError()`
              });
            });
          resources.sources.push(extension);

          return resources;
        };
        cls.buildSwiftClass = function(cls) {
          if ( cls ) debugger; // Does this happen?

          var protocol = foam.swift.Protocol.create();
          protocol.name = this.model_.swiftName;
          this.getAxioms()
            .filter(foam.util.flagFilter(['swift']))
            .filter(a => a.buildSwiftClass)
            .forEach(a => a.buildSwiftClass(protocol, this));
          if ( ! protocol.implements.length ) protocol.implements = ['class'];

          return protocol;
        };
      }
    }
  ]
});
