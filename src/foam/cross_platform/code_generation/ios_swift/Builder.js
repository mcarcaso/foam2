foam.CLASS({
  package: 'foam.cross_platform.code_generation.ios_swift',
  name: 'Builder',
  extends: 'foam.swift.SwiftClass',
  properties: [
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
      class: 'StringArrayProperty',
      name: 'postBuild',
      factory: function() {
        return [
          'o.`init`();'
        ]
      }
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
      this.field({
        visibility: 'private',
        type: foam.cross_platform.Context.model_.swiftName + '?',
        name: '_x_',
        defaultValue: 'nil'
      });
      this.properties.forEach(p => {
        this.field({
          visibility: 'private',
          type: 'Bool',
          name: p.crossPlatformIsSetVarName,
          defaultValue: 'false'
        });
        this.field({
          visibility: 'private',
          type: 'Any?',
          name: p.crossPlatformPrivateVarName
        });
        this.method({
          visibility: 'public',
          type: this.name,
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
      this.method(foam.swift.Initializer.create({
        args: [
          { type: foam.cross_platform.Context.model_.swiftName + '?', localName: 'x' }
        ],
        body: `_x_ = x;`
      }));
      this.method({
        visibility: 'public',
        name: 'build',
        type: this.clsName,
        body: `
          let o = ${this.clsName}();
          o.setX(_x_);
${this.properties.map(p => `
          if ${p.crossPlatformIsSetVarName} {
            o.${p.crossPlatformSetterName}(${p.crossPlatformPrivateVarName});
          }
`).join('')}
${this.postBuild.map(c => `
          ${c}
`).join('\n')}
          return o;
        `
      });
      this.SUPER(o);
    },
    function addBuilderMethod(cls) {
      cls.method({
        visibility: 'public',
        static: true,
        type: this.name,
        name: cls.name + 'Builder',
        args: [
          { type: foam.cross_platform.Context.model_.swiftName + '?', localName: 'x' }
        ],
        body: `
          return Self.${this.name}(x);
        `
      });
    }
  ]
});

