foam.CLASS({
  package: 'foam.cross_platform.code_generation.android_java',
  name: 'BuilderInterface',
  methods: [
    {
      name: 'buildBuilderClass',
      args: [
        { type: 'foam.java.Class', name: 'cls' }
      ]
    },
  ]
});

foam.CLASS({
  package: 'foam.cross_platform.code_generation.android_java',
  name: 'BuilderClass',
  extends: 'foam.java.Class',
  requires: [
    'foam.cross_platform.code_generation.android_java.DefaultBuilder'
  ],
  properties: [
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.code_generation.android_java.BuilderInterface',
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
      name: 'innerClass',
      value: true
    },
    {
      name: 'static',
      value: true
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
    function outputJava(o) {
      this.builder.buildBuilderClass(this);
      this.SUPER(o);
    }
  ]
});

foam.CLASS({
  package: 'foam.cross_platform.code_generation.android_java',
  name: 'DefaultBuilder',
  implements: [
    'foam.cross_platform.code_generation.android_java.BuilderInterface'
  ],
  methods: [
    function buildBuilderClass(cls) {
      cls.method({
        static: true,
        visibility: 'public',
        type: cls.name,
        name: 'getInstance',
        args: [
          { type: 'foam.cross_platform.Context', name: 'x' }
        ],
        body: `
          return new ${cls.name}(x);
        `
      });
      cls.field({
        visibility: 'private',
        type: 'foam.cross_platform.Context',
        name: '_x_',
        initializer: 'null'
      });
      cls.properties.forEach(p => {
        cls.field({
          visibility: 'private',
          type: 'boolean',
          name: p.crossPlatformIsSetVarName,
          initializer: 'false'
        });
        cls.field({
          visibility: 'private',
          type: 'Object',
          name: p.crossPlatformPrivateVarName
        });
        cls.method({
          visibility: 'public',
          type: cls.name,
          name: p.crossPlatformSetterName,
          args: [
            { type: 'Object', name: 'value' }
          ],
          body: `
            ${p.crossPlatformIsSetVarName} = true;
            ${p.crossPlatformPrivateVarName} = value;
            return this;
          `
        });
      });
      cls.method({
        visibility: 'private',
        name: cls.name,
        type: '',
        args: [
          { type: 'foam.cross_platform.Context', name: 'x' }
        ],
        body: `_x_ = x;`
      });
      cls.method({
        visibility: 'public',
        name: 'build',
        type: cls.clsName,
        body: `
          ${cls.clsName} o = new ${cls.clsName}();
          o.setX(_x_);
${cls.properties.map(p => `
          if ( ${p.crossPlatformIsSetVarName} ) {
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
          { type: cls.clsName, name: 'o' }
        ],
        body: `
          o.init();
        `
      });
    }
  ]
});

foam.CLASS({
  package: 'foam.cross_platform.code_generation.android_java',
  name: 'ProxyBuilder',
  implements: [
    'foam.cross_platform.code_generation.android_java.BuilderInterface'
  ],
  properties: [
    {
      class: 'Proxy',
      of: 'foam.cross_platform.code_generation.android_java.BuilderInterface',
      name: 'delegate'
    }
  ],
});

foam.CLASS({
  package: 'foam.cross_platform.code_generation.android_java',
  name: 'PostObjInitBuilder',
  extends: 'foam.cross_platform.code_generation.android_java.ProxyBuilder',
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
      m.body.data += '\n' + this.body;
    }
  ]
});

foam.CLASS({
  package: 'foam.cross_platform.code_generation.android_java',
  name: 'SingletonBuilder',
  extends: 'foam.cross_platform.code_generation.android_java.ProxyBuilder',
  methods: [
    function buildBuilderClass(cls) {
      this.SUPER(cls);

      var buildMethod = cls.getMethod('build');

      var buildSingletonMethod = buildMethod.clone();
      buildSingletonMethod.name = 'buildSingleton';
      cls.method(buildSingletonMethod);

      buildMethod.body.data = `
        if ( singleton == null ) {
          singleton = buildSingleton();
        }
        return singleton;
      `;

      cls.field({
        static: true,
        type: buildMethod.type,
        name: 'singleton'
      });
    }
  ]
});
