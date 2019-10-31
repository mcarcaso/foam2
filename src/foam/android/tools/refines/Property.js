foam.CLASS({
  package: 'foam.android.tools',
  name: 'PropertyJavaRefinement',
  refines: 'foam.core.Property',
  flags: ['android'],
  requires: [
    'foam.cross_platform.Lib',
    'foam.core.ExpressionSlot'
  ],
  properties: [
    {
      class: 'StringProperty',
      name: 'androidValue',
      expression: function(value) {
        return foam.android.tools.asAndroidValue(value);
      }
    },
    {
      class: 'StringArrayProperty',
      name: 'androidExpressionArgs'
    },
    {
      class: 'StringProperty',
      name: 'androidExpression'
    },
    { class: 'foam.android.tools.AndroidType' },
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
      name: 'androidSlotVarName',
      expression: function(androidPrivateVarName) {
        return androidPrivateVarName + '$';
      }
    },
    {
      class: 'StringProperty',
      name: 'androidSlotGetterName',
      expression: function(androidGetterName) {
        return androidGetterName + '$';
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
    },
    {
      class: 'FunctionProperty',
      name: 'androidFAsAndroidValue',
      expression: function() {
        return o => foam.android.tools.asAndroidValue(this.f(o));
      }
    }
  ],
  methods: [
    {
      name: 'f',
      type: 'Any',
      args: [
        { type: 'Any', name: 'o' }
      ],
      androidCode: `
        return ((foam.cross_platform.FObject) o).getProperty(getName());
      `
    },
    function buildAndroidClass(cls, parentCls) {
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

      cls.field({
        visibility: 'private',
        type: 'foam.core.Slot',
        name: this.androidSlotVarName
      });
      cls.method({
        visibility: 'public',
        type: 'foam.core.Slot',
        name: this.androidSlotGetterName,
        body: `
          if ( ${this.androidSlotVarName} == null ) {
            ${this.androidSlotVarName} = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
              .setObj(this)
              .setProp(${this.androidAxiomName})
              .build();
          }
          return ${this.androidSlotVarName};
        `
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
      } else if ( this.androidExpression ) {
        var subName = this.name + '_expression_sub_';
        cls.field({
          visibility: 'private',
          type: 'foam.core.Detachable',
          name: subName
        });
        var expressionName = this.name + '_expression_';
        cls.method({
          visibility: 'protected',
          type: this.androidType,
          name: expressionName,
          args: this.androidExpressionArgs.map(a => {
            return {
              type: parentCls.getAxiomByName(a).androidType,
              name: a
            }
          }),
          body: `
            ${this.androidExpression}
          `
        });
        getter.body = `
          if ( ! ${this.androidIsSetVarName} && ${subName} == null ) {
            final ${parentCls.name} obj = this;
            final foam.core.ExpressionSlot eSlot = foam.core.ExpressionSlot.ExpressionSlotBuilder(getSubX())
              .setArgs(new foam.core.Slot[] {
                ${this.androidExpressionArgs.map(a => `getSlot("${a}")`).join(',')}
              })
              .setCode(new foam.cross_platform.GenericFunction() {
                public Object executeFunction(Object[] args) {
                  return obj.${expressionName}(
                    ${this.androidExpressionArgs.map((a, i) => `
                      (${parentCls.getAxiomByName(a).androidType}) args[${i}]
                    `).join(',')}
                  );
                }
              })
              .build();
            ${this.androidPrivateVarName} = (${this.androidType}) eSlot.slotGet();
            ${subName} = eSlot.slotSub(new foam.cross_platform.Listener() {
              public void executeListener(foam.core.Detachable sub, Object[] args) {
                if ( foam.cross_platform.Lib.compare(eSlot.slotGet(), obj.${this.androidPrivateVarName}) != 0 ) {
                  obj.${this.androidPrivateVarName} = (${this.androidType}) eSlot.slotGet();
                  obj.pub(new Object[] { "propertyChange", "${this.name}", obj.${this.androidPrivateVarName} });
                }
              }
            });
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

      var setter = {
        visibility: 'public',
        type: 'void',
        name: this.androidSetterName,
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
  ${this.androidGetterName}() :
  null;
${this.androidType} castedValue = ${adaptName}(oldValue, value, hasOldValue);
        `;

        if ( this.androidExpression ) {
          setter.body += `
if ( ${subName} != null ) ${subName}.detach();
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
${this.androidIsSetVarName} = true;
${this.androidPrivateVarName} = castedValue;
Object[] args = new Object[] { "propertyChange", "${this.name}", null };
if ( hasListeners(args) ) {
  args[2] = ${this.androidSlotGetterName}();
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
    }
  ]
});
