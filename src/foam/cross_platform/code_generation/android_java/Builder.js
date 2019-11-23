foam.CLASS({
  package: 'foam.cross_platform.code_generation.android_java',
  name: 'Builder',
  extends: 'foam.java.Class',
  properties: [
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
      class: 'StringArrayProperty',
      name: 'postBuild',
      factory: function() {
        return [
          'o.init();'
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
    function outputJava(o) {
      this.field({
        visibility: 'private',
        type: 'foam.cross_platform.Context',
        name: '_x_',
        initializer: 'null'
      });
      this.properties.forEach(p => {
        this.field({
          visibility: 'private',
          type: 'boolean',
          name: p.crossPlatformIsSetVarName,
          initializer: 'false'
        });
        this.field({
          visibility: 'private',
          type: 'Object',
          name: p.crossPlatformPrivateVarName
        });
        this.method({
          visibility: 'public',
          type: this.name,
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
      this.method({
        visibility: 'private',
        name: this.name,
        type: '',
        args: [
          { type: 'foam.cross_platform.Context', name: 'x' }
        ],
        body: `_x_ = x;`
      });
      this.method({
        visibility: 'public',
        name: 'build',
        type: this.clsName,
        body: `
          ${this.clsName} o = new ${this.clsName}();
          o.setX(_x_);
${this.properties.map(p => `
          if ( ${p.crossPlatformIsSetVarName} ) {
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
          { type: 'foam.cross_platform.Context', name: 'x' }
        ],
        body: `
          return new ${this.name}(x);
        `
      });
    }
  ]
});
