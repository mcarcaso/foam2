foam.LIB({
  name: 'foam.core.FObject',
  flags: ['swift'],
  methods: [
    function buildSwiftResources() {
      var resources = {
        tests: [],
        sources: []
      };
      var flagFilter = foam.util.flagFilter(['swift']);
      this.getAxioms()
        .filter(flagFilter)
        .filter(a => a.buildSwiftResources)
        .forEach(a => a.buildSwiftResources(resources, this));
      resources.sources.push(this.buildSwiftClass());
      return resources;
    },
    function buildSwiftClass(cls) {
      cls = cls || foam.swift.SwiftClass.create();

      cls.visibility = 'public';
      cls.name = this.model_.swiftName;
      cls.extends = this.model_.swiftExtends;
      cls.documentation = this.model_.documentation;
      cls.imports.push('Foundation');

      var flagFilter = foam.util.flagFilter(['swift']);

      var builder = foam.cross_platform.code_generation.ios_swift.Builder.create({
        clsName: cls.name,
        properties: this.getAxiomsByClass(foam.core.Property)
          .filter(flagFilter)
      });
      cls.classes.push(builder);
      builder.addBuilderMethod(cls);

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
          { type: 'String?', localName: 'name' }
        ],
        body: `
        switch name {
${
genProperties
  .map(a => `
          case "${a.name}":
            ${a.crossPlatformIsSetVarName} = false;
            ${a.crossPlatformPrivateVarName} = nil;
            var ${a.name}Args: [Any?] = ["propertyChange", "${a.name}", nil];
            if hasListeners(${a.name}Args) {
              ${a.name}Args[2] = ${a.crossPlatformSlotGetterName}();
              _ = pub(${a.name}Args);
            }
            ${a.swiftExpression ? `
            ${a.crossPlatformExpressionSubName}?.detach();
            ${a.crossPlatformExpressionSubName} = nil;
            ` : ``}
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
          { type: 'String?', localName: 'name' }
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
        type: foam.core.SlotInterface.model_.swiftName + '?',
        name: 'getSlot',
        args: [
          { type: 'String?', localName: 'name' }
        ],
        body: `
          if name?.contains("$") ?? false {
            let names = name!.components(separatedBy: "$");
            var slot = getSlot(names[0]);
            for i in 1..<names.count {
              slot = slot?.dot(names[i]);
            }
            return slot;
          }

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
          { type: 'String?', localName: 'name' }
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
          { type: 'String?', localName: 'name' },
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
        type: foam.cross_platform.FoamClass.model_.swiftName + '?',
        name: 'getCls_',
        body: 'return Self.CLS_()'
      });

      this.addSwiftStaticClassInfo(cls);

      return cls;
    },
    function addSwiftStaticClassInfo(cls) {
      var flagFilter = foam.util.flagFilter(['swift']);
      var cInfo = this.toCrossPlatformClass(flagFilter);
      cls.method({
        override: !! cls.extends,
        visibility: 'public',
        class: true,
        type: foam.cross_platform.FoamClass.model_.swiftName,
        name: 'CLS_',
        body: `
          if initClassInfo_ == nil {
            initClassInfo_ = foam_cross_platform_FoamClass
              .foam_cross_platform_FoamClassBuilder(nil)
              .build();
            ${cInfo.cls_.getAxiomsByClass(foam.core.Property)
                .filter(flagFilter)
                .map(a => `
            initClassInfo_!.${a.crossPlatformSetterName}(${foam.swift.asSwiftValue(cInfo[a.name])});
                `)
                .join('\n')
            }
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
