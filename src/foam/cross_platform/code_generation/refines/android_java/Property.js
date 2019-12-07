foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines.android_java',
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
      name: 'androidExpression'
    },
    { class: 'foam.android.tools.AndroidType' },
    {
      class: 'StringProperty',
      name: 'androidGetter',
      expression: function(javaGetter) {
        return javaGetter;
      }
    },
    {
      class: 'StringProperty',
      name: 'androidSetter'
    },
    {
      class: 'StringProperty',
      name: 'androidPreSet',
      expression: function(javaPreSet) {
        return javaPreSet;
      }
    },
    {
      class: 'StringProperty',
      name: 'androidPostSet',
      expression: function(javaPostSet) {
        return javaPostSet;
      }
    },
    {
      class: 'StringProperty',
      name: 'androidAdapt',
      expression: function(androidType) {
        return `return (${androidType}) newValue;`
      }
    },
    {
      class: 'StringProperty',
      name: 'androidFactory',
      expression: function(crossPlatformFactory, javaFactory) {
        return crossPlatformFactory || javaFactory;
      }
    },
    {
      class: 'FunctionProperty',
      name: 'androidFAsAndroidValue',
      expression: function() {
        return o => foam.android.tools.asAndroidValue(this.f(o));
      }
    },
    {
      class: 'StringProperty',
      name: 'androidComparePropertyValues',
      value: `
        new foam.cross_platform.GenericFunction() {
          public Object executeFunction(Object[] args) {
            return foam.cross_platform.Lib.compare(args[0], args[1]);
          }
        }
      `
    },
    {
      class: 'StringProperty',
      name: 'androidClearProperty',
      expression: function(
          androidExpression,
          androidType,
          crossPlatformExpressionSubName,
          crossPlatformIsSetVarName,
          crossPlatformPrivateVarName,
          crossPlatformSlotGetterName,
          name) {
        return `
          ${crossPlatformIsSetVarName} = false;
          ${foam.android.tools.isJavaPrimitive(androidType) ? '' :
          `${crossPlatformPrivateVarName} = null;`}
          Object[] ${name}Args = new Object[] { "propertyChange", "${name}", null };
          if ( hasListeners(${name}Args) ) {
            ${name}Args[2] = ${crossPlatformSlotGetterName}();
            pub(${name}Args);
          }
          ${androidExpression ? `
          if ( ${crossPlatformExpressionSubName} != null ) ${crossPlatformExpressionSubName}.detach();
          ${crossPlatformExpressionSubName} = null;
          ` : ``}
        `
      }
    },
    {
      class: 'StringProperty',
      name: 'androidSetProperty',
      expression: function(crossPlatformSetterName) {
        return `${crossPlatformSetterName}(value);`
      }
    },
    {
      class: 'StringProperty',
      name: 'androidGetSlot',
      expression: function(crossPlatformSlotGetterName) {
        return `return ${crossPlatformSlotGetterName}();`
      }
    },
    {
      class: 'StringProperty',
      name: 'androidHasPropertySet',
      expression: function(crossPlatformIsSetVarName) {
        return `return ${crossPlatformIsSetVarName};`
      }
    },
    {
      class: 'StringProperty',
      name: 'androidGetProperty',
      expression: function(crossPlatformGetterName) {
        return `return ${crossPlatformGetterName}();`
      }
    },
  ],
  methods: [
    function buildAndroidClass(cls, parentCls) {
      if ( ! parentCls.hasOwnAxiom(this.name) ) return;

      cls.field({
        visibility: 'private',
        type: this.androidType,
        name: this.crossPlatformPrivateVarName
      });

      cls.field({
        visibility: 'protected',
        type: 'boolean',
        name: this.crossPlatformIsSetVarName,
        initializer: 'false'
      });

      cls.field({
        visibility: 'private',
        type: 'foam.core.SlotInterface',
        name: this.crossPlatformSlotVarName
      });
      cls.method({
        visibility: 'public',
        type: 'foam.core.SlotInterface',
        name: this.crossPlatformSlotGetterName,
        body: `
          if ( ${this.crossPlatformSlotVarName} == null ) {
            ${this.crossPlatformSlotVarName} = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
              .setObj(this)
              .setProp(${this.crossPlatformAxiomName}())
              .build();
          }
          return ${this.crossPlatformSlotVarName};
        `
      });

      var getter = {
        visibility: 'public',
        type: this.androidType,
        name: this.crossPlatformGetterName
      };
      if ( this.androidGetter ) {
        getter.body = this.androidGetter;
      } else if ( this.androidFactory ) {
        var factoryName = this.name + '_factory_';
        cls.method({
          visibility: 'protected',
          type: this.androidType,
          name: factoryName,
          body: foam.cpTemplate(this.androidFactory, 'android')
        });
        getter.body = `
          if ( ! ${this.crossPlatformIsSetVarName} ) {
            setProperty("${this.name}", ${factoryName}());
          }
          return ${this.crossPlatformPrivateVarName};
        `;
      } else if ( this.androidExpression ) {
        var args = this.expressionArgs.map(a => {
          a = a.split('$').filter(a => a);
          return {
            type: a.length == 1 ?
              parentCls.getAxiomByName(a).androidType : 'Object',
            name: a.join('$')
          }
        });
        var subName = this.crossPlatformExpressionSubName;
        cls.field({
          visibility: 'private',
          type: 'foam.core.ExpressionSlot',
          name: subName
        });
        var expressionName = this.name + '_expression_';
        cls.method({
          visibility: 'protected',
          type: this.androidType,
          name: expressionName,
          args: args,
          body: `
            ${this.androidExpression}
          `
        });
        getter.body = `
          if ( ! ${this.crossPlatformIsSetVarName} && ${subName} == null ) {
            final ${parentCls.name} obj = this;
            ${subName} = foam.core.ExpressionSlot.ExpressionSlotBuilder(null)
              .setArgs(new foam.core.SlotInterface[] {
                ${args.map(a => `getSlot("${a.name}")`).join(',')}
              })
              .setCode(new foam.cross_platform.GenericFunction() {
                public Object executeFunction(Object[] args) {
                  return obj.${expressionName}(
                    ${args.map((a, i) => `(${a.type}) args[${i}]`).join(',')}
                  );
                }
              })
              .build();
            ${this.crossPlatformPrivateVarName} = (${this.androidType}) ${subName}.slotGet();

            onDetach(${subName}.slotSub(new foam.cross_platform.Listener() {
              public void executeListener(foam.core.Detachable sub, Object[] args) {
                if ( foam.cross_platform.Lib.compare(${subName}.slotGet(), obj.${this.crossPlatformPrivateVarName}) != 0 ) {
                  obj.${this.crossPlatformPrivateVarName} = (${this.androidType}) ${subName}.slotGet();
                  obj.pub(new Object[] { "propertyChange", "${this.name}", obj.${this.crossPlatformPrivateVarName} });
                }
              }
            }));
          }
          return ${this.crossPlatformPrivateVarName};
        `;
      } else if ( this.androidValue ) {
        getter.body = `
          if ( ! ${this.crossPlatformIsSetVarName} ) {
            return ${this.androidValue};
          }
          return ${this.crossPlatformPrivateVarName};
        `;
      } else {
        getter.body = `
          return ${this.crossPlatformPrivateVarName};
        `;
      }
      cls.method(getter);

      var setter = {
        visibility: 'public',
        type: 'void',
        name: this.crossPlatformSetterName,
        args: [
          { type: 'Object', name: 'value' }
        ]
      };
      if ( this.androidSetter ) {
        setter.body = this.androidSetter;
      } else {
        var adaptName = this.name + '_adapt';
        cls.method({
          visibility: 'private',
          type: this.androidType,
          name: adaptName,
          args: [
            { type: 'Object', name: 'oldValue' },
            { type: 'Object', name: 'newValue' },
            { type: 'boolean', name: 'oldValueSet' }
          ],
          body: this.androidAdapt
        });
        setter.body = `
boolean hasOldValue = hasPropertySet("${this.name}");
Object oldValue = hasOldValue ?
  ${this.crossPlatformGetterName}() :
  null;
${this.androidType} castedValue = ${adaptName}(oldValue, value, hasOldValue);
        `;

        if ( this.androidExpression ) {
          setter.body += `
if ( ${subName} != null ) ${subName}.detach();
${subName} = null;
          `;
        }

        if ( this.androidPreSet ) {
          var preSetName = this.name + '_preSet';
          cls.method({
            visibility: 'private',
            type: this.androidType,
            name: preSetName,
            args: [
              { type: 'Object', name: 'oldValue' },
              { type: this.androidType, name: 'newValue' },
              { type: 'boolean', name: 'oldValueSet' }
            ],
            body: this.androidPreSet
          });
          setter.body += `
castedValue = ${preSetName}(oldValue, castedValue, hasOldValue);
          `;
        }

        setter.body += `
${this.crossPlatformIsSetVarName} = true;
${this.crossPlatformPrivateVarName} = castedValue;
Object[] args = new Object[] { "propertyChange", "${this.name}", null };
if ( hasListeners(args) ) {
  args[2] = ${this.crossPlatformSlotGetterName}();
  pub(args);
}
        `;

        if ( this.androidPostSet ) {
          var postSetName = this.name + '_postSet';
          cls.method({
            visibility: 'private',
            type: 'void',
            name: postSetName,
            args: [
              { type: 'Object', name: 'oldValue' },
              { type: this.androidType, name: 'newValue' },
              { type: 'boolean', name: 'oldValueSet' }
            ],
            body: this.androidPostSet
          });
          setter.body += `
${postSetName}(oldValue, castedValue, hasOldValue);
          `;
        }
      }
      cls.method(setter);

      cls.field({
        visibility: 'private',
        static: true,
        type: this.cls_.id,
        name: this.crossPlatformPrivateAxiom
      });
      cls.method({
        visibility: 'public',
        static: true,
        type: this.cls_.id,
        name: this.crossPlatformAxiomName,
        body: `
          if ( ${this.crossPlatformPrivateAxiom} == null ) {
            ${this.crossPlatformPrivateAxiom} = ${foam.core.FObject.getAxiomByName('asAndroidValue').code.call(this)};
            ${this.crossPlatformPrivateAxiom}.setComparePropertyValues(${this.androidComparePropertyValues});
          }
          return ${this.crossPlatformPrivateAxiom};
        `
      });

      return cls;
    },
    function asAndroidValue() {
      return this.forClass_ + '.' + this.crossPlatformAxiomName + '()';
    }
  ]
});
