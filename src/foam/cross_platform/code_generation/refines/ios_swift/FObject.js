foam.LIB({
  name: 'foam.core.FObject',
  flags: ['swift'],
  methods: [
    function buildSwiftClass(cls) {
      cls = cls || foam.swift.SwiftClass.create();

      cls.visibility = 'public';
      cls.name = this.model_.swiftName;
      cls.extends = this.model_.swiftExtends;
      cls.documentation = this.model_.documentation;

      var flagFilter = foam.util.flagFilter(['swift']);

      this.getAxioms()
        .filter(flagFilter)
        .filter(a => a.buildSwiftClass)
        .forEach(a => a.buildSwiftClass(cls, this));

      var genProperties = this.getAxiomsByClass(foam.core.Property)
        .filter(flagFilter)
        .filter(p => this.hasOwnAxiom(p.name));

      cls.method({
        override: !! cls.extends,
        visibility: 'public',
        type: 'Void',
        name: 'clearProperty',
        args: [
          { type: 'String', localName: 'name' }
        ],
        body: `
        switch name {
${
genProperties
  .map(a => `
          case "${a.name}":
            ${a.crossPlatformIsSetVarName} = false;
            var searchViewArgs: [Any?] = ["propertyChange", "${a.name}", nil];
            /*
            if ( hasListeners(${a.name}Args) ) {
              ${a.name}Args[2] = ${a.crossPlatformSlotGetterName}();
              pub(${a.name}Args);
            }
            */
            return;
  `)
  .join('\n')
}
          default:
            break;
        }
${cls.extends ? `
        super.clearProperty(name);
` : ''}
        `
      });

      cls.method({
        override: !! cls.extends,
        visibility: 'public',
        type: 'Any?',
        name: 'getProperty',
        args: [
          { type: 'String', localName: 'name' }
        ],
        body: `
          switch name {
${
genProperties
  .map(a => `
            case "${a.name}":
              return ${a.crossPlatformGetterName}();
  `)
  .join('\n')
}
            default:
              break;
          }
          return ${cls.extends ? 'super.getProperty(name)' : 'nil'};
        `
      });

      cls.method({
        override: !! cls.extends,
        visibility: 'public',
        type: foam.core.Slot.model_.swiftName + '?',
        name: 'getSlot',
        args: [
          { type: 'String', localName: 'name' }
        ],
        body: `
          switch name {
${
genProperties
  .map(a => `
            case "${a.name}":
              return ${a.crossPlatformSlotGetterName}();
  `)
  .join('\n')
}
            default:
              break;
          }
          return ${cls.extends ? 'super.getSlot(name)' : 'nil'};
        `
      });

      cls.method({
        override: !! cls.extends,
        visibility: 'public',
        type: 'Bool',
        name: 'hasPropertySet',
        args: [
          { type: 'String', localName: 'name' }
        ],
        body: `
          switch name {
${
genProperties
  .map(a => `
            case "${a.name}":
              return ${a.crossPlatformIsSetVarName};
  `)
  .join('\n')
}
            default:
              break;
          }
${cls.extends ? `
          return super.hasPropertySet(name);
` : `
          return false;
`}
        `
      });

      cls.method({
        override: !! cls.extends,
        visibility: 'public',
        type: 'Void',
        name: 'setProperty',
        args: [
          { type: 'String', localName: 'name' },
          { type: 'Any?', localName: 'value' }
        ],
        body: `
          switch name {
${
genProperties
  .map(a => `
            case "${a.name}":
              ${a.crossPlatformSetterName}(value);
              return;
  `)
  .join('\n')
}
            default:
              break;
          }
${cls.extends ? `
          super.setProperty(name, value);
` : ''}
        `
      });

      cls.method({
        override: !! cls.extends,
        visibility: 'public',
        type: foam.cross_platform.FoamClass.model_.swiftName,
        name: 'getCls_',
        body: 'return Self.CLS_()'
      });

      this.addSwiftStaticClassInfo(cls);

      var builder = foam.swift.SwiftClass.create();
      var builderProperties = this.getAxiomsByClass(foam.core.Property)
        .filter(flagFilter);
      builder.name = cls.name + 'Builder_';
      builder.visibility = 'public';
      builderProperties.forEach(p => {
        builder.field({
          visibility: 'private',
          type: 'Bool',
          name: p.crossPlatformIsSetVarName,
          defaultValue: 'false'
        });
        builder.field({
          visibility: 'private',
          type: 'Any?',
          name: p.crossPlatformPrivateVarName
        });
        builder.method({
          visibility: 'public',
          type: builder.name,
          name: p.crossPlatformSetterName,
          args: [
            { type: 'Any?', localName: 'value' }
          ],
          body: `
            ${p.crossPlatformIsSetVarName} = true;
            ${p.crossPlatformPrivateVarName} = value;
            return self;
          `
        });
      });
      builder.method({
        visibility: 'public',
        name: 'build',
        type: cls.name,
        body: `
          let o = ${cls.name}();
${builderProperties.map(p => `
          if ${p.crossPlatformIsSetVarName} {
            o.${p.crossPlatformSetterName}(${p.crossPlatformPrivateVarName});
          }
`).join('')}
          o.\`init\`();
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
          { type: foam.cross_platform.Context.model_.swiftName + '?', localName: 'x' }
        ],
        body: `
          return Self.${builder.name}();
        `
      });

      return cls;
    },
    function addSwiftStaticClassInfo(cls) {
      var flagFilter = foam.util.flagFilter(['swift']);
      cls.method({
        override: !! cls.extends,
        visibility: 'public',
        class: true,
        type: foam.cross_platform.FoamClass.model_.swiftName,
        name: 'CLS_',
        body: `
          if initClassInfo_ == nil {
            initClassInfo_ = ${this.toCrossPlatformClass(flagFilter).asSwiftValue()};
          }
          return initClassInfo_!
        `
      });
      cls.field({
        visibility: 'private',
        static: true,
        type: foam.cross_platform.FoamClass.model_.swiftName + '?',
        name: 'initClassInfo_',
      });
    }
  ]
});

foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines',
  name: 'FObjectJavaRefinement',
  refines: 'foam.core.FObject',
  flags: ['swift'],
  methods: [
    {
      name: 'asSwiftValue',
      code: function () {
        var body = `${this.model_.swiftName}.${this.model_.swiftName}Builder(nil) // TODO give context\n`;
        this.cls_.getAxiomsByClass(foam.core.Property)
          .filter(foam.util.flagFilter(['swift']))
          .filter(p => this.hasOwnProperty(p.name))
          .forEach(p => {
            body += `  .${p.crossPlatformSetterName}(${p.swiftFAsSwiftValue(this)})\n`;
          });
        body += `  .build()`;
        return body;
      },
    }
  ]
});
