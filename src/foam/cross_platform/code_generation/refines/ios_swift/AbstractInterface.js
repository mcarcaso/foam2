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
          staticCls.imports.push('Foundation');
          this.addSwiftStaticClassInfo(staticCls);
          resources.sources.push(staticCls);

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
          protocol.imports = protocol.imports.concat(
            'Foundation',
            this.model_.swiftImports
          );
          return protocol;
        };

        cls.swiftBuilderString = function (cls) {
          var facet = this.getAxiomsByClass(foam.cross_platform.code_generation.Faceted)[0];
          if ( !facet ) return '';
          return `
            initClassInfo_!.setBuilderFactory_(foam_swift_AnonymousGenericFunction
              .foam_swift_AnonymousGenericFunctionBuilder(nil)
              .setFn({(args: [Any?]?) -> Any? in
                return foam_cross_platform_FacetedBuilder
                  .foam_cross_platform_FacetedBuilderBuilder(args?[0] as? foam_cross_platform_Context)
                  .setName("${this.model_.name}")
                  .setOfProperty("${facet.property}")
                  .setDefaultImpl("${facet.defaultImpl}")
                  .build();
              })
              .build());
          `;
        }
      }
    }
  ]
});
