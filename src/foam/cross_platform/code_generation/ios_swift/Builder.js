foam.INTERFACE({
  package: 'foam.cross_platform.code_generation.ios_swift',
  name: 'BuilderInterface',
  methods: [
    {
      name: 'buildBuilderClass',
      args: [
        { type: 'foam.swift.SwiftClass', name: 'cls' }
      ]
    },
  ]
});

foam.CLASS({
  package: 'foam.cross_platform.code_generation.ios_swift',
  name: 'BuilderClass',
  extends: 'foam.swift.SwiftClass',
  requires: [
    'foam.cross_platform.code_generation.ios_swift.DefaultBuilder'
  ],
  properties: [
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.code_generation.ios_swift.BuilderInterface',
      name: 'builder',
      factory: function() { return this.DefaultBuilder.create() }
    },
    {
      name: 'name',
      expression: function(clsName) {
        return clsName + 'Builder_';
      }
    },
    {
      name: 'visibility',
      value: 'public'
    },
    {
      class: 'StringProperty',
      name: 'clsName'
    },
    {
      class: 'FObjectArray',
      of: 'foam.core.Property',
      name: 'properties'
    }
  ],
  methods: [
    function outputSwift(o) {
      this.builder.buildBuilderClass(this);
      this.SUPER(o);
    }
  ]
});

foam.CLASS({
  package: 'foam.cross_platform.code_generation.ios_swift',
  name: 'DefaultBuilder',
  implements: [
    'foam.cross_platform.code_generation.ios_swift.BuilderInterface'
  ],
  methods: [
    function buildBuilderClass(cls) {
      cls.implements.push('foam_cross_platform_Builder');
      cls.method({
        visibility: 'public',
        type: 'foam_cross_platform_Builder?',
        name: 'setBuilderProperty',
        args: [
          { type: 'String?', localName: 'name' },
          { type: 'Any?', localName: 'value' },
        ],
        body: `
          switch(name) {
          ${cls.properties.map(p => `
            case "${p.name}":
              _ = ${p.crossPlatformSetterName}(value);
              break;
          `).join('\n')}
            default:
              break;
          }
          return self;
        `
      });
      cls.method({
        visibility: 'public',
        type: 'foam_cross_platform_FObject?',
        name: 'builderBuild',
        body: `
          return build();
        `
      });
      cls.method({
        static: true,
        visibility: 'public',
        type: cls.name,
        name: 'getInstance',
        args: [
          { type: foam.cross_platform.Context.model_.swiftName + '?', localName: 'x' }
        ],
        body: `
          return ${cls.name}(x);
        `
      });
      cls.field({
        visibility: 'private',
        type: foam.cross_platform.Context.model_.swiftName + '?',
        name: '_x_',
        defaultValue: 'nil'
      });
      cls.properties.forEach(p => {
        cls.field({
          visibility: 'private',
          type: 'Bool',
          name: p.crossPlatformIsSetVarName,
          defaultValue: 'false'
        });
        cls.field({
          visibility: 'private',
          type: 'Any?',
          name: p.crossPlatformPrivateVarName
        });
        cls.method({
          visibility: 'public',
          type: cls.name,
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
      cls.method(foam.swift.Initializer.create({
        args: [
          { type: foam.cross_platform.Context.model_.swiftName + '?', localName: 'x' }
        ],
        body: `_x_ = x;`
      }));
      cls.method({
        visibility: 'public',
        name: 'build',
        type: cls.clsName,
        body: `
          let o = ${cls.clsName}();
          o.setX(_x_);
${cls.properties.map(p => `
          if ${p.crossPlatformIsSetVarName} {
            o.${p.crossPlatformSetterName}(${p.crossPlatformPrivateVarName});
          }
`).join('')}
          initObj(o);
          return o;
        `
      });
      cls.method({
        visibility: 'private',
        name: 'initObj',
        args: [
          { type: cls.clsName, localName: 'o' }
        ],
        body: `
          o.\`init\`();
        `
      });
    }
  ]
});

foam.CLASS({
  package: 'foam.cross_platform.code_generation.ios_swift',
  name: 'ProxyBuilder',
  implements: [
    'foam.cross_platform.code_generation.ios_swift.BuilderInterface'
  ],
  properties: [
    {
      class: 'Proxy',
      of: 'foam.cross_platform.code_generation.ios_swift.BuilderInterface',
      name: 'delegate'
    }
  ],
});

foam.CLASS({
  package: 'foam.cross_platform.code_generation.ios_swift',
  name: 'PostObjInitBuilder',
  extends: 'foam.cross_platform.code_generation.ios_swift.ProxyBuilder',
  properties: [
    {
      class: 'StringProperty',
      name: 'body'
    }
  ],
  methods: [
    function buildBuilderClass(cls) {
      this.SUPER(cls);
      var m = cls.getMethod('initObj');
      m.body += '\n' + this.body;
    }
  ]
});

foam.CLASS({
  package: 'foam.cross_platform.code_generation.ios_swift',
  name: 'SingletonBuilder',
  extends: 'foam.cross_platform.code_generation.ios_swift.ProxyBuilder',
  methods: [
    function buildBuilderClass(cls) {
      this.SUPER(cls);

      var buildMethod = cls.getMethod('build');

      var buildSingletonMethod = buildMethod.clone();
      buildSingletonMethod.name = 'buildSingleton';
      cls.method(buildSingletonMethod);

      buildMethod.body = `
        if Self.singleton == nil {
          Self.singleton = buildSingleton();
        }
        return Self.singleton!;
      `;

      cls.field({
        static: true,
        type: buildMethod.type + '?',
        name: 'singleton'
      });
    }
  ]
});
