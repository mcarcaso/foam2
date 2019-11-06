foam.LIB({
  name: 'foam.core.FObject',
  flags: ['android'],
  methods: [
    function buildAndroidClass(cls) {
      cls = cls || foam.java.Class.create();

      cls.name = this.model_.name;
      cls.package = this.model_.package;
      cls.abstract = this.model_.abstract;
      cls.documentation = this.model_.documentation;
      cls.extends = this.model_.crossPlatformExtends;

      var flagFilter = foam.util.flagFilter(['android']);

      this.getAxioms()
        .filter(flagFilter)
        .filter(a => a.buildAndroidClass)
        .forEach(a => a.buildAndroidClass(cls, this));

      var genProperties = this.getAxiomsByClass(foam.core.Property)
        .filter(flagFilter)
        .filter(p => this.hasOwnAxiom(p.name));

      cls.method({
        visibility: 'public',
        type: 'void',
        name: 'clearProperty',
        args: [
          { type: 'String', name: 'name' }
        ],
        body: `
        switch(name) {
${
genProperties
  .map(a => `
          case "${a.name}":
            ${a.crossPlatformIsSetVarName} = false;
            Object[] ${a.name}Args = new Object[] { "propertyChange", "${a.name}", null };
            if ( hasListeners(${a.name}Args) ) {
              ${a.name}Args[2] = ${a.crossPlatformSlotGetterName}();
              pub(${a.name}Args);
            }
            return;
  `)
  .join('\n')
}
        }
${cls.extends ? `
        super.clearProperty(name);
` : ''}
        `
      });

      cls.method({
        visibility: 'public',
        type: 'Object',
        name: 'getProperty',
        args: [
          { type: 'String', name: 'name' }
        ],
        body: `
          switch(name) {
${
genProperties
  .map(a => `
            case "${a.name}":
              return ${a.crossPlatformGetterName}();
  `)
  .join('\n')
}
          }
          return ${cls.extends ? 'super.getProperty(name)' : 'null'};
        `
      });

      cls.method({
        visibility: 'public',
        type: 'foam.core.Slot',
        name: 'getSlot',
        args: [
          { type: 'String', name: 'name' }
        ],
        body: `
          switch(name) {
${
genProperties
  .map(a => `
            case "${a.name}":
              return ${a.crossPlatformSlotGetterName}();
  `)
  .join('\n')
}
          }
          return ${cls.extends ? 'super.getSlot(name)' : 'null'};
        `
      });

      cls.method({
        visibility: 'public',
        type: 'boolean',
        name: 'hasPropertySet',
        args: [
          { type: 'String', name: 'name' }
        ],
        body: `
          switch(name) {
${
genProperties
  .map(a => `
            case "${a.name}":
              return ${a.crossPlatformIsSetVarName};
  `)
  .join('\n')
}
          }
${cls.extends ? `
          return super.hasPropertySet(name);
` : `
          return false;
`}
        `
      });

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
              ${a.crossPlatformSetterName}((${a.androidType}) value);
              return;
  `)
  .join('\n')
}
          }
${cls.extends ? `
          super.setProperty(name, value);
` : ''}
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
      var builderProperties = this.getAxiomsByClass(foam.core.Property)
        .filter(flagFilter);
      builder.name = 'Builder';
      builder.innerClass = true;
      builder.static = true;
      builderProperties.forEach(p => {
        builder.field({
          visibility: 'private',
          type: 'boolean',
          name: p.crossPlatformIsSetVarName,
          initializer: 'false'
        });
        builder.field({
          visibility: 'private',
          type: p.androidType,
          name: p.crossPlatformPrivateVarName
        });
        builder.method({
          visibility: 'public',
          type: builder.name,
          name: p.crossPlatformSetterName,
          args: [
            { type: p.androidType, name: 'value' }
          ],
          body: `
            ${p.crossPlatformIsSetVarName} = true;
            ${p.crossPlatformPrivateVarName} = value;
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
${builderProperties.map(p => `
          if ( ${p.crossPlatformIsSetVarName} ) {
            o.${p.crossPlatformSetterName}(${p.crossPlatformPrivateVarName});
          }
`).join('')}
          o.init();
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
          parent: this.model_.crossPlatformParentClass,
          axioms: this.getOwnAxioms()
            .filter(a => a.forClass_ == this.id)
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
  package: 'foam.cross_platform.code_generation.refines',
  name: 'FObjectJavaRefinement',
  refines: 'foam.core.FObject',
  flags: ['android'],
  methods: [
    {
      name: 'asAndroidValue',
      code: function() {
        var body = `${this.cls_.id}.${this.model_.name}Builder(null) // TODO give context\n`;
        this.cls_.getAxiomsByClass(foam.core.Property)
          .filter(foam.util.flagFilter(['android']))
          .filter(p => this.hasOwnProperty(p.name))
          .forEach(p => {
            body += `  .${p.crossPlatformSetterName}(${p.androidFAsAndroidValue(this)})\n`;
          });
        body += `  .build()`;
        return body;
      },
    }
  ]
});
