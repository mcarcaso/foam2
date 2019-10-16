foam.CLASS({
  package: 'foam.android.tools',
  name: 'PropertyJavaRefinement',
  refines: 'foam.core.Property',
  flags: ['android'],
  properties: [
    {
      class: 'StringProperty',
      name: 'androidValue',
      expression: function(value) {
        return foam.android.tools.asAndroidValue(value);
      }
    },
    {
      class: 'StringProperty',
      name: 'androidType',
      expression: function(javaType) {
        return javaType;
      }
    },
    {
      class: 'StringProperty',
      name: 'androidAxiomName',
      expression: function(name) {
        return foam.String.constantize(name);
      }
    },
    {
      class: 'StringProperty',
      name: 'androidAxiomInitializerName',
      expression: function(androidAxiomName) {
        return 'init_' + androidAxiomName;
      }
    },
    {
      class: 'StringProperty',
      name: 'androidGetter',
      expression: function(javaGetter) {
        return javaGetter;
      }
    },
    {
      class: 'StringProperty',
      name: 'androidPrivateVarName',
      expression: function(name) {
        return `${name}_`;
      }
    },
    {
      class: 'StringProperty',
      name: 'androidFactory',
      expression: function(javaFactory) {
        return javaFactory;
      }
    },
    {
      class: 'StringProperty',
      name: 'androidIsSetVarName',
      expression: function(name) {
        return `${name}_isSet_`;
      }
    },
    {
      class: 'StringProperty',
      name: 'androidGetterName',
      expression: function(name) {
        return `get${foam.String.capitalize(name)}`;
      }
    },
    {
      class: 'StringProperty',
      name: 'androidSetterName',
      expression: function(name) {
        return `set${foam.String.capitalize(name)}`;
      }
    }
  ],
  methods: [
    function buildAndroidClass(cls) {
      cls.field({
        visibility: 'protected',
        type: this.androidType,
        name: this.androidPrivateVarName
      });

      cls.field({
        visibility: 'private',
        type: 'boolean',
        name: this.androidIsSetVarName,
        initializer: 'false'
      });

      var getter = {
        visibility: 'public',
        type: this.androidType,
        name: this.androidGetterName
      };
      if ( this.androidGetter ) {
        getter.body = this.androidGetter;
      } else if ( this.androidFactory ) {
        var factoryName = this.name + '_factory_';
        cls.method({
          visibility: 'protected',
          type: this.androidType,
          name: factoryName,
          body: this.androidFactory
        });
        getter.body = `
          if ( ! ${this.androidIsSetVarName} ) {
            setProperty("${this.name}", ${factoryName}());
          }
          return ${this.androidPrivateVarName};
        `;
      } else if ( this.androidValue ) {
        getter.body = `
          if ( ! ${this.androidIsSetVarName} ) {
            return ${this.androidValue};
          }
          return ${this.androidPrivateVarName};
        `;
      } else {
        getter.body = `
          return ${this.androidPrivateVarName};
        `;
      }
      cls.method(getter);

      cls.method({
        visibility: 'public',
        type: 'void',
        name: this.androidSetterName,
        args: [
          { type: this.androidType, name: 'value' }
        ],
        body: `
          ${this.androidIsSetVarName} = true;
          ${this.androidPrivateVarName} = value;
        `
      });

      cls.field({
        visibility: 'public',
        static: true,
        type: this.cls_.id,
        name: this.androidAxiomName,
        initializer: this.androidAxiomInitializerName + '()'
      });
      cls.method({
        visibility: 'private',
        static: true,
        type: this.cls_.id,
        name: this.androidAxiomInitializerName,
        body: `return ${foam.core.FObject.getAxiomByName('asAndroidValue').code.call(this)};`
      });

      return cls;
    },
    function asAndroidValue() {
      return this.forClass_ + '.' + this.androidAxiomName;
    },
    function fToAndroidValue(o) {
      return foam.android.tools.asAndroidValue(this.f(o));
    }
  ]
});
