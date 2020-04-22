foam.LIB({
  name: 'foam.core.FObject',
  flags: ['swift'],
  methods: [
    function buildSwiftResources(resources) {
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

      var initImports = function (model) {
        if (!model) return [];
        var parent = foam.lookup(model.extends).model_;
        if (parent.id == model.id) return [];
        return model.swiftImports.concat(initImports(parent));
      };

      cls.visibility = 'public';
      cls.name = this.model_.swiftName;
      cls.extends = this.model_.swiftExtends;
      cls.implements = this.model_.swiftImplements;
      cls.documentation = this.model_.documentation;
      cls.imports = cls.imports.concat(
        'Foundation',
        initImports(this.model_)
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

      var override = cls.extends != 'NSObject';
      cls.method({
        override: override,
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
${override ? `
        super.clearProperty(name);
` : ''}
        `
      });

      cls.method({
        override: override,
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
          return ${override ? 'super.getProperty(name)' : 'nil'};
        `
      });

      cls.method({
        override: override,
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
          return ${override ? 'super.getSlot(name)' : 'nil'};
        `
      });

      cls.method({
        override: override,
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
${override ? `
          return super.hasPropertySet(name);
` : `
          return false;
`}
        `
      });

      cls.method({
        override: override,
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
  .filter(a => a.swiftSetPropertyMap)
  .map(a => Object.keys(a.swiftSetPropertyMap).map(k => `
          case "${k}":
            ${a.swiftSetPropertyMap[k]}
            return;
  `))
  .flat()
  .join('\n')
}
            default:
              break;
          }
${override ? `
          super.setProperty(name, value);
` : ''}
        `
      });

      cls.method({
        override: override,
        visibility: 'public',
        type: foam.cross_platform.FoamClass.model_.swiftName + '?',
        name: 'getCls_',
        body: 'return Self.CLS_()'
      });

      this.addSwiftStaticClassInfo(cls);

      return cls;
    },
    function swiftBuilderString(cls) {
      return this.model_.abstract ? '' : `
        initClassInfo_!.setBuilderFactory_(foam_swift_AnonymousGenericFunction  .foam_swift_AnonymousGenericFunctionBuilder(nil)
          .setFn({(args: [Any?]?) -> Any? in
            return ${cls.name}Builder_.getInstance(args![0] as? foam_cross_platform_Context);
          })
          .build()
        );
      `
    },
    function addSwiftStaticClassInfo(cls) {
      var flagFilter = foam.util.flagFilter(['swift']);
      var cInfo = this.toCrossPlatformClass(flagFilter);
      var override = cls.extends && cls.extends != 'NSObject';
      cls.method({
        override: override,
        visibility: 'public',
        class: true,
        type: foam.cross_platform.FoamClass.model_.swiftName,
        name: 'CLS_',
        body: `
          if initClassInfo_ == nil {
            initClassInfo_ = foam_cross_platform_FoamClass
              .foam_cross_platform_FoamClassBuilder(nil)
              .build();
            initClassInfo_!.setI18nLabel(NSLocalizedString(
              ${foam.swift.asSwiftValue(this.model_.label)},
              comment: ${foam.swift.asSwiftValue(this.model_.i18nLabelDescription)}
            ))
            ${this.model_.description ? `
            initClassInfo_!.setI18nDescription(NSLocalizedString(
              ${foam.swift.asSwiftValue(this.model_.description)},
              comment: ${foam.swift.asSwiftValue(this.model_.i18nDescriptionDescription)}
            ))
            ` : ''}
            initClassInfo_!.setI18nPlural(NSLocalizedString(
              ${foam.swift.asSwiftValue(this.model_.plural)},
              comment: ${foam.swift.asSwiftValue(this.model_.i18nPluralDescription)}
            ))
            ${this.swiftBuilderString(cls)}
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
      code: function (x) {
        x = x || 'nil'
        var body = `${this.model_.swiftName}.${this.model_.swiftName}Builder(${x})\n`;
        this.cls_.getAxiomsByClass(foam.core.Property)
          .filter(foam.util.flagFilter(['swift']))
          .filter(p => this.hasOwnProperty(p.name))
          .forEach(p => {
            body += `  .${p.crossPlatformSetterName}(${p.swiftFAsSwiftValue(this, p.swiftType, x)})\n`;
          });
        body += `  .build()`;
        return body;
      },
    }
  ]
});
