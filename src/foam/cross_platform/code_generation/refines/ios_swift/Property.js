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
      name: 'swiftValidationExpression',
    },
    {
      class: 'StringProperty',
      name: 'swiftVisibilityExpression',
      factory: function() {
        var v = this.visibility;
        return `
          return foam_u2_Visibility.${v ? v.name : 'RW'}
        `
      }
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
      expression: function(crossPlatformFactoryValue, crossPlatformFactory, swiftType) {
        return foam.Undefined.isInstance(crossPlatformFactoryValue) ? crossPlatformFactory :
          foam.swift.asSwiftValue(foam.json.parse(crossPlatformFactoryValue), swiftType, 'getSubX()')
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
        return (o, t, x) => foam.swift.asSwiftValue(this.f(o), t, x);
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
      name: 'swiftSetPropertyMap',
      expression: function(name, crossPlatformSetterName, crossPlatformSlotSetterName) {
        var m = {};
        m[name] = `${crossPlatformSetterName}(value);`;
        m[name + '$'] = `onDetach(${crossPlatformSlotSetterName}(value));`;
        return m;
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
    {
      class: 'StringProperty',
      name: 'swiftCloneProperty'
    },
  ],
  methods: [
    function buildSwiftClass(cls, parentCls) {
      if ( ! parentCls.hasOwnAxiom(this.name) ) return;
      var superAxiom = parentCls.getSuperClass().getAxiomByName(this.name);
      if ( superAxiom && superAxiom.forClass_ == 'foam.core.FObject' ) {
        // All generated classes extend foam.cross_platform.AbstractFObject so
        // if an axiom comes from foam.core.FObject, don't consider it an
        // override unless it's in the extended class.
        superAxiom = parentCls == foam.cross_platform.AbstractFObject ?
          null : foam.cross_platform.AbstractFObject.getAxiomByName(this.name);
      }
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
      cls.method({
        override: override,
        visibility: 'public',
        type: 'foam_core_Detachable?',
        name: this.crossPlatformSlotSetterName,
        args: [{ type: 'Any?', localName: 'slot' }],
        body: `
          return ${this.crossPlatformSlotGetterName}().linkFrom(slot as? foam_core_SlotInterface);
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
        var privateVarCast = this.swiftType == 'Any?' ? '' :
          ` as${this.swiftType.endsWith('?') ? '!' : '?'} ${this.swiftType}`
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
            ${this.crossPlatformPrivateVarName} = ${subName}!.slotGet()${privateVarCast};

            onDetach(${subName}!.slotSub(AnonymousListener_create()
              .setFn({[weak self] (sub: foam_core_Detachable?, args: [Any?]?) -> Void in
                if self == nil { return }
                if foam_cross_platform_Lib.compare(self!.${subName}!.slotGet(), self!.${this.crossPlatformPrivateVarName}) != 0 {
                  self!.${this.crossPlatformPrivateVarName} = self!.${subName}!.slotGet()${privateVarCast};
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
            body: foam.cpTemplate(this.swiftPostSet, 'swift')
          });
          setter.body += `
${postSetName}(oldValue, castedValue, hasOldValue);
          `;
        }
      }
      cls.method(setter);

      var expressionData = [
          ['visibility', 'foam_u2_Visibility'],
          ['validation', 'String?'],
        ]
        .map(p => {
          var name = p[0];
          var type = p[1];
          var Name = foam.String.capitalize(name);
          var value = this['swift' + Name + 'Expression'];
          if ( ! value ) return;
          var args = this[name + 'ExpressionArgs'].map(a => {
            a = a.split('$').filter(a => a);
            return {
              type: a.length != 1 ? 'Any?' : (
                  foam.cross_platform.AbstractFObject.getAxiomByName(a[0]) ||
                  parentCls.getAxiomByName(a[0])
                ).swiftType,
              localName: a.join('$')
            }
          });
          cls.method({
            visibility: 'public',
            override: override,
            type: type,
            name: this.name + '_' + name,
            args: args,
            body: foam.cpTemplate(`
              ${value}
            `, 'swift')
          });
          return `
            ${this.crossPlatformPrivateAxiom}!.set${Name}SlotInitializer(foam_swift_AnonymousGenericFunction.foam_swift_AnonymousGenericFunctionBuilder(nil)
              .setFn({(args: [Any?]?) -> Any? in
                let o = args?[0] as? ${parentCls.model_.swiftName};
                return foam_core_ExpressionSlot.foam_core_ExpressionSlotBuilder(nil)
                  .setObj(o)
                  .setCode(foam_swift_AnonymousGenericFunction.foam_swift_AnonymousGenericFunctionBuilder(nil)
                    .setFn({(args2: [Any?]?) -> Any? in
                      return o?.${this.name}_${name}(
                        ${args.map((a, i) => `args2![${i}] as! ${a.type}`).join(',')}
                      );
                    })
                    .build()
                  )
                  .setArgs([${args.map(a => `o?.getSlot("${a.localName}")`).join(',')}])
                  .build();
              })
              .build())
          `;
        })
        .filter(o => o);

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
            ${this.crossPlatformPrivateAxiom}!.setI18nLabel(NSLocalizedString(
              ${foam.swift.asSwiftValue(this.label)},
              comment: ${foam.swift.asSwiftValue(this.i18nLabelDescription)}));
            ${!this.help ? '' : `
            ${this.crossPlatformPrivateAxiom}!.setI18nHelp(NSLocalizedString(
              ${foam.swift.asSwiftValue(this.help)},
              comment: ${foam.swift.asSwiftValue(this.i18nHelpDescription)}));
            `}
            ${this.swiftCloneProperty ? `${this.crossPlatformPrivateAxiom}!.setCpCloneProperty(${this.swiftCloneProperty});` : ''}
            ${expressionData.join('\n')}
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
