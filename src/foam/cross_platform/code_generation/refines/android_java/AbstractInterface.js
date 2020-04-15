foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines.android_java',
  name: 'AbstractInterfaceJavaRefinement',
  refines: 'foam.core.AbstractInterface',
  flags: ['android'],
  axioms: [
    {
      class: 'foam.core.AnonymousAxiom',
      installInClass: function(cls) {
        var superBuildAndroidResources = cls.buildAndroidResources;
        cls.buildAndroidResources = function(resources, parentCls) {
          superBuildAndroidResources.call(this, resources, parentCls);

          var staticCls = foam.java.Class.create();
          staticCls.package = parentCls.model_.package;
          staticCls.name = parentCls.model_.name + 'Class';
          this.addAndroidStaticClassInfo(staticCls);
          resources.sources.push(staticCls);

          return resources;
        };
        cls.buildAndroidClass = function(cls) {
          if ( cls ) debugger; // Does this happen?

          var javaInterface = foam.java.Interface.create();
          javaInterface.package = this.model_.package;
          javaInterface.name = this.model_.name;
          javaInterface.documentation = this.model_.documentation;
          javaInterface.implements = this.model_.androidImplements;
          this.getAxioms()
            .filter(foam.util.flagFilter(['android']))
            .filter(a => a.buildAndroidClass)
            .forEach(a => a.buildAndroidClass(javaInterface, this));

          return javaInterface;
        };

        cls.androidBuilderString = function(cls) {
          var facet = this.getAxiomsByClass(foam.cross_platform.code_generation.Faceted)[0];
          if ( ! facet ) return '';
          return `
            initClassInfo_.setBuilderFactory_(new foam.cross_platform.GenericFunction() {
              public Object executeFunction(Object[] args) {
                return foam.cross_platform.FacetedBuilder
                  .FacetedBuilderBuilder((foam.cross_platform.Context) args[0])
                  .setName("${this.model_.name}")
                  .setOfProperty("${facet.property}")
                  .setDefaultImpl("${facet.defaultImpl}")
                  .build();
              }
            });
          `;
        }
      }
    }
  ]
});
