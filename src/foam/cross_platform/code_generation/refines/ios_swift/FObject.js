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
      cls.imports = cls.imports.concat(
        'Foundation',
        this.model_.swiftImports
      );

      var flagFilter = foam.util.flagFilter(['swift']);

      if ( ! this.model_.abstract ) {
        var builder = foam.cross_platform.code_generation.ios_swift.BuilderClass.create({
          clsName: cls.name,
          properties: this.getAxiomsByClass(foam.core.Property)
            .filter(flagFilter)
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
            return ${builder.name}.getInstance(x);
          `
        });
      }

      this.getAxioms()
        .filter(flagFilter)
        .filter(a => a.buildSwiftClass)
        .forEach(a => a.buildSwiftClass(cls, this));

      var genAxioms = this.getOwnAxioms()
        .filter(flagFilter);

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
genAxioms
  .filter(a => a.swiftClearProperty)
  .map(a => `
          case "${a.name}":
            ${a.swiftClearProperty}
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
genAxioms
  .filter(a => a.swiftGetProperty)
  .map(a => `
          case "${a.name}":
            ${a.swiftGetProperty}
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
genAxioms
  .filter(a => a.swiftGetSlot)
  .map(a => `
          case "${a.name}":
            ${a.swiftGetSlot}
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
genAxioms
  .filter(a => a.swiftHasPropertySet)
  .map(a => `
          case "${a.name}":
            ${a.swiftHasPropertySet}
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
genAxioms
  .filter(a => a.swiftSetProperty)
  .map(a => `
          case "${a.name}":
            ${a.swiftSetProperty}
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
                .filter(p => cInfo.hasOwnProperty(p.name))
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
        var body = `${this.model_.swiftName}.${this.model_.swiftName}Builder(nil)\n`;
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
