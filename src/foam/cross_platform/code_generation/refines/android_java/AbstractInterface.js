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
          this.getAxioms()
            .filter(foam.util.flagFilter(['android']))
            .filter(a => a.buildAndroidClass)
            .forEach(a => a.buildAndroidClass(javaInterface, this));

          return javaInterface;
        };
      }
    }
  ]
});
