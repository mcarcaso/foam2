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
      cls.implements = this.model_.androidImplements;

      var flagFilter = foam.util.flagFilter(['android']);

      this.getAxioms().filter(flagFilter).forEach(function(axiom) {
        if ( axiom.buildAndroidClass ) axiom.buildAndroidClass(cls, this);
      }.bind(this));

      var genProperties = this.getAxiomsByClass(foam.core.Property)
        .filter(flagFilter);

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
            ${a.androidSetterName}((${a.androidType}) value);
            break;
  `)
  .join('\n')
}
        }
        `
      });

      cls.method({
        visibility: 'protected',
        type: cls.name,
        name: '',
        body: ''
      });

      cls.method({
        visibility: 'public',
        type: 'foam.cross_platform.FoamClass',
        name: 'getCls_',
        body: 'return CLS_;'
      });

      this.addStaticClassInfo(cls);

      var builder = foam.java.Class.create();
      builder.name = 'Builder';
      builder.innerClass = true;
      builder.static = true;
      genProperties.forEach(p => {
        builder.field({
          visibility: 'private',
          type: 'boolean',
          name: p.androidIsSetVarName,
          initializer: 'false'
        });
        builder.field({
          visibility: 'private',
          type: p.androidType,
          name: p.androidPrivateVarName
        });
        builder.method({
          visibility: 'public',
          type: builder.name,
          name: p.androidSetterName,
          args: [
            { type: p.androidType, name: 'value' }
          ],
          body: `
            ${p.androidIsSetVarName} = true;
            ${p.androidPrivateVarName} = value;
            return this;
          `
        });
      });
      builder.method({
        visibility: 'private',
        name: builder.name,
        type: '',
        body: ``
      });
      builder.method({
        visibility: 'public',
        name: 'build',
        type: cls.name,
        body: `
          ${cls.name} o = new ${cls.name}();
${genProperties.map(p => `
          if ( ${p.androidIsSetVarName} ) {
            o.${p.androidSetterName}(${p.androidPrivateVarName});
          }
`).join('')}
          return o;
        `
      });
      cls.classes.push(builder);
      cls.method({
        visibility: 'public',
        static: true,
        type: builder.name,
        name: cls.name + 'Builder',
        args: [
          { type: 'foam.cross_platform.Context', name: 'x' }
        ],
        body: `
          return new ${builder.name}();
        `
      });

      return cls;
    },
    function addStaticClassInfo(cls) {
      var flagFilter = foam.util.flagFilter(['android']);
      cls.field({
        visibility: 'public',
        static: true,
        type: 'foam.cross_platform.FoamClass',
        name: 'CLS_',
        initializer: 'initClassInfo_()'
      });

      cls.method({
        visibility: 'public',
        static: true,
        type: 'foam.cross_platform.FoamClass',
        name: 'initClassInfo_',
        body: `return ${foam.cross_platform.FoamClass.create({
          id: this.id,
          parent: this.model_.androidParentClass,
          axioms: this.getOwnAxioms()
            .filter(flagFilter)
        }).asAndroidValue()};`
      });
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

foam.CLASS({
  package: 'foam.android.tools',
  name: 'FObjectJavaRefinement',
  refines: 'foam.core.FObject',
  flags: ['java'],
  methods: [
    {
      name: 'asAndroidValue',
      code: function() {
        var body = `${this.cls_.id}.${this.model_.name}Builder(null) // TODO give context\n`;
        this.cls_.getAxiomsByClass(foam.core.Property)
          .filter(foam.util.flagFilter(['android']))
          .filter(p => this.hasOwnProperty(p.name))
          .forEach(p => {
            body += `  .${p.androidSetterName}(${foam.android.tools.asAndroidValue(p.f(this), p)})\n`;
          });
        body += `  .build()`;
        return body;
      },
    }
  ]
});
