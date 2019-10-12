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

          return cls;
          cls.implements = (this.implements || [])
            .concat(this.model_.javaExtends || []);

          var axioms = this.getAxioms().filter(foam.util.flagFilter(['java']));

          for ( var i = 0 ; i < axioms.length ; i++ ) {
            axioms[i].buildAndroidClass && axioms[i].buildAndroidClass(cls);
          }

          return cls;
        };
      }
    }
  ]
});

