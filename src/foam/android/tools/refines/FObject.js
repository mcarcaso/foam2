foam.LIB({
  name: 'foam.core.FObject',
  flags: ['android'],
  methods: [
    function buildAndroidClass(cls) {
      cls = cls || foam.java.Class.create();

      cls.name = this.model_.name;
      cls.package = this.model_.androidPackage;
      cls.abstract = this.model_.abstract;
      cls.documentation = this.model_.documentation;
      cls.extends = this.model_.androidExtends;

      var flagFilter = foam.util.flagFilter(['android']);

      this.getAxioms().filter(flagFilter).forEach(function(axiom) {
        if ( axiom.buildAndroidClass ) axiom.buildAndroidClass(cls, this);
      }.bind(this));

      var genProperties = this.getAxiomsByClass(foam.core.Property)
        .filter(flagFilter)
        .filter(a => a.generateAndroid);

      cls.method({
        visibility: 'public',
        type: 'void',
        name: 'setProperty',
        args: [
          { type: 'String', name: 'name' },
          { type: 'Object', name: 'value' }
        ],
        body: `
        switch(name) {
${
genProperties
  .map(a => `
          case "${a.name}":
            ${a.androidPrivateVarName} = (${a.androidType}) value;
            break;
  `)
  .join('\n')
}
        }
        `
      });

      return cls;
    },
    function getDeps(flagFilter, deps) {
      if ( ! flagFilter(this.model_) ) return;
      if ( deps[this.id] ) return;
      this.model_.getDeps(flagFilter, deps);
      this.getAxioms().forEach(a => {
        if ( flagFilter(a) ) {
          if ( a.name == '__context__' ) return;
          deps[a.cls_.id] = true;
          a.getDeps && a.getDeps(flagFilter, deps);
        }
      });
    }
  ]
});
