foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines.android_java',
  name: 'AbstractInterfaceJavaRefinement',
  refines: 'foam.core.AbstractInterface',
  flags: ['android'],
  axioms: [
    {
      class: 'foam.core.AnonymousAxiom',
      installInClass: function(cls) {
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

          var staticCls = foam.java.Class.create();
          staticCls.package = javaInterface.package;
          staticCls.name = javaInterface.name + 'Class';
          this.addAndroidStaticClassInfo(staticCls);

          return foam.swift.ArraySwiftSource.create({
            sources: [javaInterface, staticCls]
          });
        };
      }
    }
  ]
});
