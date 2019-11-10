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
      name: 'swiftValue',
      expression: function(value) {
        return foam.Undefined.isInstance(value) ? '' : foam.swift.asSwiftValue(value);
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
      name: 'swiftAdapt',
      expression: function(swiftType) {
        if ( swiftType == 'Any?' ) return 'return newValue;';
        return `return newValue as! ${swiftType};`
      }
    },
    {
      class: 'StringProperty',
      name: 'swiftExpression'
    },
    {
      class: 'StringProperty',
      name: 'swiftFactory'
    },
    {
      class: 'StringProperty',
      name: 'swiftPreSet'
    },
    {
      class: 'StringProperty',
      name: 'swiftPostSet'
    },
    {
      class: 'StringProperty',
      name: 'swiftSetter',
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
          if ${this.crossPlatformSlotVarName} == nil {
            ${this.crossPlatformSlotVarName} = PropertySlot_create()
              .setObj(self)
              .setProp(Self.${this.crossPlatformAxiomName}())
              .build();
          }
          return ${this.crossPlatformSlotVarName}!;
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
          type: this.swiftType,
          name: factoryName,
          body: this.swiftFactory
        });
        getter.body = `
          if !${this.crossPlatformIsSetVarName} {
            setProperty("${this.name}", ${factoryName}());
          }
          return ${this.crossPlatformPrivateVarName};
        `;
      } else if ( this.swiftExpression ) {
        var subName = this.name + '_expression_sub_';
        cls.field({
          visibility: 'private',
          type: foam.core.Detachable.model_.swiftName + '?',
          name: subName
        });
        var expressionName = this.name + '_expression_';
        cls.method({
          type: this.swiftType,
          name: expressionName,
          args: this.expressionArgs.map(a => {
            return {
              type: parentCls.getAxiomByName(a).swiftType,
              localName: a
            }
          }),
          body: `
            ${this.swiftExpression}
          `
        });
        getter.body = `
          if !${this.crossPlatformIsSetVarName} && ${subName} == nil {
            let eSlot = foam_core_ExpressionSlot.foam_core_ExpressionSlotBuilder(getSubX())
              .setArgs([
                ${this.expressionArgs.map(a => `getSlot("${a}")`).join(',')}
              ])
              .setCode(AnonymousGenericFunction_create()
                .setFn({(args: [Any?]?) -> Any? in
                  return self.${expressionName}(
                    ${this.expressionArgs.map((a, i) => `
                      args![${i}] as! ${parentCls.getAxiomByName(a).swiftType}
                    `).join(',')})
                })
                .build()
              )
              .build();
            ${this.crossPlatformPrivateVarName} = eSlot.slotGet() as! ${this.swiftType};
            
            ${subName} = eSlot.slotSub(AnonymousListener_create()
              .setFn({(sub: foam_core_Detachable?, args: [Any?]?) -> Void in
                if foam_cross_platform_Lib.compare(eSlot.slotGet(), self.${this.crossPlatformPrivateVarName}) != 0 {
                  self.${this.crossPlatformPrivateVarName} = eSlot.slotGet() as! ${this.swiftType};
                  _ = self.pub(["propertyChange", "${this.name}", self.${this.crossPlatformPrivateVarName}]);
                }
              })
              .build()
            );
          }
          return ${this.crossPlatformPrivateVarName};
        `;
      } else if ( this.swiftValue ) {
        getter.body = `
          if !${this.crossPlatformIsSetVarName} {
            return ${this.swiftValue};
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
        setter.body = this.swiftSetter;
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
          body: this.swiftAdapt
        });
        setter.body = `
let hasOldValue = hasPropertySet("${this.name}");
let oldValue = hasOldValue ?
  ${this.crossPlatformGetterName}() :
  nil;
${this.swiftPreSet ? 'var' : 'let'} castedValue = ${adaptName}(oldValue, value, hasOldValue);
        `;

        if ( this.swiftExpression ) {
          setter.body += `
${subName}?.detach();
          `;
        }

        if ( this.swiftPreSet ) {
          var preSetName = this.name + '_preSet';
          cls.method({
            visibility: 'private',
            type: this.swiftType,
            name: preSetName,
            args: [
              { type: 'Any?', localName: 'oldValue' },
              { type: this.swiftType, localName: 'newValue' },
              { type: 'Bool', localName: 'oldValueSet' }
            ],
            body: this.swiftPreSet
          });
          setter.body += `
castedValue = ${preSetName}(oldValue, castedValue, hasOldValue);
          `;
        }

        setter.body += `
${this.crossPlatformIsSetVarName} = true;
${this.crossPlatformPrivateVarName} = castedValue;
var args: [Any?] = ["propertyChange", "${this.name}", nil];
if hasListeners(args) {
  args[2] = ${this.crossPlatformSlotGetterName}();
  _ = pub(args);
}
        `;

        if ( this.swiftPostSet ) {
          var postSetName = this.name + '_postSet';
          cls.method({
            visibility: 'private',
            type: 'Void',
            name: postSetName,
            args: [
              { type: 'Any?', localName: 'oldValue' },
              { type: this.swiftType, localName: 'newValue' },
              { type: 'Bool', localName: 'oldValueSet' }
            ],
            body: this.swiftPostSet
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
