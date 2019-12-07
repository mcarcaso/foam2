foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines.ios_swift',
  name: 'PropertyRefinement',
  refines: 'foam.core.Property',
  flags: ['swift'],
  properties: [
    {
      class: 'BooleanProperty',
      name: 'swiftOptional',
      value: true
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
      name: 'swiftFactory',
      expression: function(crossPlatformFactory) {
        return crossPlatformFactory;
      }
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
      class: 'StringProperty',
      name: 'swiftGetter',
    },
    {
      class: 'FunctionProperty',
      name: 'swiftFAsSwiftValue',
      expression: function() {
        return o => foam.swift.asSwiftValue(this.f(o));
      }
    },
    {
      class: 'StringProperty',
      name: 'swiftComparePropertyValues',
      value: `
        foam_swift_AnonymousGenericFunction.foam_swift_AnonymousGenericFunctionBuilder(nil)
          .setFn({(args: [Any?]?) -> Any? in
            return foam_cross_platform_Lib.compare(args![0], args![1]);
          })
          .build()
      `
    },
    {
      class: 'StringProperty',
      name: 'swiftClearProperty',
      expression: function(
          swiftExpression,
          swiftType,
          crossPlatformExpressionSubName,
          crossPlatformIsSetVarName,
          crossPlatformPrivateVarName,
          crossPlatformSlotGetterName,
          name) {
        return `
          ${crossPlatformIsSetVarName} = false;
          ${crossPlatformPrivateVarName} = nil;
          var ${name}Args: [Any?] = ["propertyChange", "${name}", nil];
          if hasListeners(${name}Args) {
            ${name}Args[2] = ${crossPlatformSlotGetterName}();
            _ = pub(${name}Args);
          }
          ${swiftExpression ? `
          ${crossPlatformExpressionSubName}?.detach();
          ${crossPlatformExpressionSubName} = nil;
          ` : ``}
        `
      }
    },
    {
      class: 'StringProperty',
      name: 'swiftSetProperty',
      expression: function(crossPlatformSetterName) {
        return `${crossPlatformSetterName}(value);`
      }
    },
    {
      class: 'StringProperty',
      name: 'swiftGetSlot',
      expression: function(crossPlatformSlotGetterName) {
        return `return ${crossPlatformSlotGetterName}();`
      }
    },
    {
      class: 'StringProperty',
      name: 'swiftHasPropertySet',
      expression: function(crossPlatformIsSetVarName) {
        return `return ${crossPlatformIsSetVarName};`
      }
    },
    {
      class: 'StringProperty',
      name: 'swiftGetProperty',
      expression: function(crossPlatformGetterName) {
        return `return ${crossPlatformGetterName}();`
      }
    },
  ],
  methods: [
    function buildSwiftClass(cls, parentCls) {
      if ( ! parentCls.hasOwnAxiom(this.name) ) return;
      var superAxiom = parentCls.getSuperClass().getAxiomByName(this.name);
      var override = !! superAxiom;

      cls.field({
        visibility: 'private',
        weak: this.weak,
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
        type: 'foam_core_SlotInterface?',
        name: this.crossPlatformSlotVarName,
        defaultValue: 'nil'
      });

      cls.method({
        override: override,
        visibility: 'public',
        type: 'foam_core_SlotInterface',
        name: this.crossPlatformSlotGetterName,
        body: `
          if ${this.crossPlatformSlotVarName} == nil {
            ${this.crossPlatformSlotVarName} = foam_core_internal_PropertySlot.foam_core_internal_PropertySlotBuilder(getX())
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
        getter.body = this.swiftGetter;
      } else if ( this.swiftFactory ) {
        var factoryName = this.name + '_factory_';
        cls.method({
          visibility: 'private',
          type: this.swiftType,
          name: factoryName,
          body: foam.cpTemplate(this.swiftFactory, 'swift')
        });
        getter.body = `
          if !${this.crossPlatformIsSetVarName} {
            setProperty("${this.name}", ${factoryName}());
          }
          return ${this.crossPlatformPrivateVarName};
        `;
      } else if ( this.swiftExpression ) {
        var args = this.expressionArgs.map(a => {
          a = a.split('$').filter(a => a);
          return {
            type: a.length == 1 ?
              parentCls.getAxiomByName(a).swiftType: 'Any?',
            localName: a.join('$')
          }
        });
        var subName = this.crossPlatformExpressionSubName;
        cls.field({
          visibility: 'private',
          type: foam.core.ExpressionSlot.model_.swiftName + '?',
          name: subName
        });
        var expressionName = this.name + '_expression_';
        cls.method({
          type: this.swiftType,
          name: expressionName,
          args: args,
          body: `
            ${this.swiftExpression}
          `
        });
        getter.body = `
          if !${this.crossPlatformIsSetVarName} && ${subName} == nil {
            ${subName} = foam_core_ExpressionSlot.foam_core_ExpressionSlotBuilder(getSubX())
              .setArgs([
                ${args.map(a => `getSlot("${a.localName}")`).join(',')}
              ])
              .setCode(AnonymousGenericFunction_create()
                .setFn({[weak self] (args: [Any?]?) -> Any? in
                  if self == nil { return nil; }
                  return self!.${expressionName}(
                    ${args.map((a, i) => `
                      args![${i}]${a.type == 'Any?'? '' : `as! ${a.type}`}
                    `).join(',')})
                })
                .build()
              )
              .build();
            ${this.crossPlatformPrivateVarName} = ${subName}!.slotGet() as${this.swiftType.endsWith('?') ? '!' : '?'} ${this.swiftType};

            onDetach(${subName}!.slotSub(AnonymousListener_create()
              .setFn({[weak self] (sub: foam_core_Detachable?, args: [Any?]?) -> Void in
                if self == nil { return }
                if foam_cross_platform_Lib.compare(self!.${subName}!.slotGet(), self!.${this.crossPlatformPrivateVarName}) != 0 {
                  self!.${this.crossPlatformPrivateVarName} = self!.${subName}!.slotGet() as${this.swiftType.endsWith('?') ? '!' : '?'} ${this.swiftType};
                  _ = self!.pub(["propertyChange", "${this.name}", self!.${this.crossPlatformPrivateVarName}]);
                }
              })
              .build()
            ));
          }
          return ${this.crossPlatformPrivateVarName};
        `;
      } else if ( this.swiftValue ) {
        getter.body = `
          ${this.required ? '' : `
          if !${this.crossPlatformIsSetVarName} {
            ${this.required && this.swiftValue == 'nil' ? 'fatalError()' : `
            return ${this.swiftValue};
            `}
          }
          `}
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
${subName} = nil;
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
            ${this.crossPlatformPrivateAxiom} = ${foam.core.FObject
              .getAxiomByName('asSwiftValue')
              .code.call(this)};
            ${this.crossPlatformPrivateAxiom}!.setComparePropertyValues(${this.swiftComparePropertyValues});
          }
          return ${this.crossPlatformPrivateAxiom}!;
        `
      });

      return cls;
    },
    function asSwiftValue() {
      return this.sourceCls_.model_.swiftName + '.' + this.crossPlatformAxiomName + '()';
    }
  ]
});
