foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines.ios_swift',
  name: 'PropertyJavaRefinement',
  refines: 'foam.core.Property',
  flags: ['swift'],
  properties: [
    {
      class: 'BooleanProperty',
      name: 'swiftOptional',
      expression: function(required) {
        return !required;
      },
    },
    {
      class: 'foam.swift.SwiftTypeProperty',
      expression: function(type, swiftOptional) {
        return foam.swift.toSwiftType(type, swiftOptional)
      },
    },
    {
      class: 'StringProperty',
      name: 'swiftValueType',
      expression: function(swiftType) {
        return swiftType + (foam.swift.isNullable(swiftType) ? '' : '!')
      },
    },
    {
      class: 'StringProperty',
      name: 'swiftAdapt2',
      expression: function(swiftType) {
        return `return newValue as! ${swiftType};`
      }
    },
    {
      class: 'FunctionProperty',
      name: 'swiftFAsSwiftValue',
      expression: function() {
        return o => foam.swift.asSwiftValue(this.f(o));
      }
    }
  ],
  methods: [
    function buildSwiftClass(cls, parentCls) {
      if ( ! parentCls.hasOwnAxiom(this.name) ) return;
      var superAxiom = parentCls.getSuperClass().getAxiomByName(this.name);
      var override = !! superAxiom;

      cls.field({
        visibility: 'private',
        type: this.swiftValueType,
        name: this.crossPlatformPrivateVarName,
        defaultValue: 'nil'
      });

      cls.field({
        visibility: 'private',
        type: 'Bool',
        name: this.crossPlatformIsSetVarName,
        defaultValue: 'false'
      });

      cls.field({
        visibility: 'private',
        type: 'foam_core_Slot?',
        name: this.crossPlatformSlotVarName,
        defaultValue: 'nil'
      });

      cls.method({
        override: override,
        visibility: 'public',
        type: 'foam_core_Slot',
        name: this.crossPlatformSlotGetterName,
        body: `
        fatalError()
        /*
          if ( ${this.crossPlatformSlotVarName} == null ) {
            ${this.crossPlatformSlotVarName} = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
              .setObj(this)
              .setProp(${this.crossPlatformAxiomName}())
              .build();
          }
          return ${this.crossPlatformSlotVarName};
          */
        `
      });

      var getter = {
        override: superAxiom && superAxiom.swiftType == this.swiftType,
        visibility: 'public',
        type: this.swiftType,
        name: this.crossPlatformGetterName
      };
      if ( this.swiftGetter ) {
        getter.body = this.androidGetter;
      } else if ( this.swiftFactory ) {
        var factoryName = this.name + '_factory_';
        cls.method({
          visibility: 'protected',
          type: this.androidType,
          name: factoryName,
          body: this.androidFactory
        });
        getter.body = `
          if ( ! ${this.crossPlatformIsSetVarName} ) {
            setProperty("${this.name}", ${factoryName}());
          }
          return ${this.crossPlatformPrivateVarName};
        `;
      } else if ( this.swiftExpression ) {
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
          args: this.expressionArgs.map(a => {
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
          if ( ! ${this.crossPlatformIsSetVarName} && ${subName} == null ) {
            final ${parentCls.name} obj = this;
            final foam.core.ExpressionSlot eSlot = foam.core.ExpressionSlot.ExpressionSlotBuilder(getSubX())
              .setArgs(new foam.core.Slot[] {
                ${this.expressionArgs.map(a => `getSlot("${a}")`).join(',')}
              })
              .setCode(new foam.cross_platform.GenericFunction() {
                public Object executeFunction(Object[] args) {
                  return obj.${expressionName}(
                    ${this.expressionArgs.map((a, i) => `
                      (${parentCls.getAxiomByName(a).androidType}) args[${i}]
                    `).join(',')}
                  );
                }
              })
              .build();
            ${this.crossPlatformPrivateVarName} = (${this.androidType}) eSlot.slotGet();
            ${subName} = eSlot.slotSub(new foam.cross_platform.Listener() {
              public void executeListener(foam.core.Detachable sub, Object[] args) {
                if ( foam.cross_platform.Lib.compare(eSlot.slotGet(), obj.${this.crossPlatformPrivateVarName}) != 0 ) {
                  obj.${this.crossPlatformPrivateVarName} = (${this.androidType}) eSlot.slotGet();
                  obj.pub(new Object[] { "propertyChange", "${this.name}", obj.${this.crossPlatformPrivateVarName} });
                }
              }
            });
          }
          return ${this.crossPlatformPrivateVarName};
        `;
      } else if ( this.swiftValue ) {
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
        override: override,
        visibility: 'public',
        type: 'Void',
        name: this.crossPlatformSetterName,
        args: [
          { type: 'Any?', localName: 'value' }
        ]
      };
      if ( this.swiftSetter ) {
        setter.body = this.androidSetter;
      } else {
        var adaptName = this.name + '_adapt';
        cls.method({
          visibility: 'private',
          type: this.swiftType,
          name: adaptName,
          args: [
            { type: 'Any?', localName: 'oldValue' },
            { type: 'Any?', localName: 'newValue' },
            { type: 'Bool', localName: 'oldValueSet' }
          ],
          body: this.swiftAdapt2
        });
        setter.body = `
        /*
boolean hasOldValue = hasPropertySet("${this.name}");
Object oldValue = hasOldValue ?
  ${this.crossPlatformGetterName}() :
  null;
${this.androidType} castedValue = ${adaptName}(oldValue, value, hasOldValue);
        */
        `;

        if ( this.swiftExpression ) {
          setter.body += `
if ( ${subName} != null ) ${subName}.detach();
          `;
        }

        if ( this.swiftPreSet ) {
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
        /*
${this.crossPlatformIsSetVarName} = true;
${this.crossPlatformPrivateVarName} = castedValue;
Object[] args = new Object[] { "propertyChange", "${this.name}", null };
if ( hasListeners(args) ) {
  args[2] = ${this.crossPlatformSlotGetterName}();
  pub(args);
}
        */
        `;

        if ( this.swiftPostSet ) {
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
        type: this.cls_.model_.swiftName + '?',
        name: this.crossPlatformPrivateAxiom
      });
      cls.method({
        override: override,
        visibility: 'public',
        class: true,
        type: this.cls_.model_.swiftName,
        name: this.crossPlatformAxiomName,
        body: `
          if ${this.crossPlatformPrivateAxiom} == nil {
            ${this.crossPlatformPrivateAxiom} = ${foam.core.FObject.getAxiomByName('asSwiftValue').code.call(this)};
          }
          return ${this.crossPlatformPrivateAxiom}!;
        `
      });

      return cls;
    }
  ]
});
