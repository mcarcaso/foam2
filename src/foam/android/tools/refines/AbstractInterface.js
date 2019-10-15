foam.CLASS({
  package: 'foam.android.tools',
  name: 'AbstractInterfaceJavaRefinement',
  refines: 'foam.core.AbstractInterface',
  flags: ['android'],
  axioms: [
    {
      class: 'foam.core.AnonymousAxiom',
      installInClass: function(cls) {
        cls.buildAndroidClass = function(cls) {
          cls = cls || foam.java.Interface.create();

          cls.name = this.model_.name;
          cls.package = this.model_.package;
          cls.documentation = this.model_.documentation;

          this.addStaticClassInfo(cls);

          this.getAxioms()
            .filter(foam.util.flagFilter(['android']))
            .filter(a => a.buildAndroidClass)
            .forEach(a => a.buildAndroidClass(cls));

          return cls;
        };
      }
    }
  ]
});

