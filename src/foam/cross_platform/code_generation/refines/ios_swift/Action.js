foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines.ios_swift',
  name: 'ActionRefine',
  refines: 'foam.core.Action',
  flags: ['swift'],
  properties: [
    {
      class: 'StringProperty',
      name: 'swiftGetProperty',
      expression: function(forClass_, name, crossPlatformFnGetterName) {
        return foam.lookup(forClass_).getSuperAxiomByName(name) ? '' :
          `return ${crossPlatformFnGetterName}();`
      }
    },
    {
      class: 'StringProperty',
      name: 'swiftCode',
      expression: function(crossPlatformCode) {
        return crossPlatformCode || 'fatalError();'
      }
    },
    {
      class: 'StringProperty',
      name: 'swiftIsEnabled'
    },
    {
      class: 'StringProperty',
      name: 'swiftIsAvailable'
    },
  ],
  methods: [
    function buildSwiftClass(cls, parentCls) {
      var superAxiom = parentCls.getSuperAxiomByName(this.name);
      if ( superAxiom === this ) return;
      var override = this.swiftIsOverride(parentCls);

      if ( ! superAxiom ) {
        cls.field({
          visibility: 'private',
          type: foam.cross_platform.GenericFunction.model_.swiftName + '?',
          name: this.crossPlatformFnVarName,
        });
        cls.method({
          override: override,
          visibility: 'public',
          type: foam.cross_platform.GenericFunction.model_.swiftName + '?',
          name: this.crossPlatformFnGetterName,
          body: `
            if ${this.crossPlatformFnVarName} == nil {
              ${this.crossPlatformFnVarName} = AnonymousGenericFunction_create()
                .setFn({[weak self] (_fnArgs_: [Any?]?) -> Any? in
                  if self == nil { return nil }
                  self!.\`${this.name}\`(_fnArgs_?[0] as? foam_cross_platform_Context);
                  return nil;
                })
                .build();
            }
            return ${this.crossPlatformFnVarName};
          `
        });
      }

      var isEnabledsAxiomSetter = '';
      var actionCode = this.swiftCode;
      if ( this.swiftIsEnabled ) {
        var args = this.isEnabledExpressionArgs.map(a => {
          a = a.split('$').filter(a => a);
          return {
            type: a.length == 1 ?
              parentCls.getAxiomByName(a).swiftType : 'Any?',
            localName: a.join('$')
          }
        });
        cls.method({
          visibility: 'public',
          override: override,
          type: 'Bool',
          name: this.name + '_isEnabled',
          args: args,
          body: foam.cpTemplate(this.swiftIsEnabled, 'swift')
        });
        isEnabledsAxiomSetter = `
          ${this.crossPlatformPrivateAxiom}!.setIsEnabledSlotInitializer(foam_swift_AnonymousGenericFunction.foam_swift_AnonymousGenericFunctionBuilder(nil)
            .setFn({(args: [Any?]?) -> Any? in
              let o = args?[0] as? ${parentCls.model_.swiftName};
              return foam_core_ExpressionSlot.foam_core_ExpressionSlotBuilder(nil)
                .setObj(o)
                .setCode(foam_swift_AnonymousGenericFunction.foam_swift_AnonymousGenericFunctionBuilder(nil)
                  .setFn({(args2: [Any?]?) -> Any? in
                    return o?.${this.name}_isEnabled(
                      ${args.map((a, i) => `args2![${i}] as! ${a.type}`).join(',')}
                    );
                  })
                  .build()
                )
                .setArgs([${args.map(a => `o?.getSlot("${a.localName}")`).join(',')}])
                .build();
            })
            .build());
        `;

        actionCode = `
          if !${this.name}_isEnabled(${args.map(a => `
            getSlot("${a.localName}")!.slotGet() as! ${a.type}
          `).join(',')}) {
            return;
          }
          ${actionCode}
        `;
      }

      cls.method({
        override: override,
        visibility: 'public',
        name: this.name,
        args: [{ type: 'foam_cross_platform_Context?', localName: 'x' }],
        body: foam.cpTemplate(actionCode, 'swift')
      });

      var isAvailableAxiomSetter = '';
      if ( this.swiftIsAvailable ) {
        var args = this.isAvailableExpressionArgs.map(a => {
          a = a.split('$').filter(a => a);
          return {
            type: a.length == 1 ?
              parentCls.getAxiomByName(a).swiftType : 'Any?',
            localName: a.join('$')
          }
        });
        cls.method({
          visibility: 'public',
          override: override,
          type: 'Bool',
          name: this.name + '_isAvailable',
          args: args.concat({
            localName: 'controllerMode', type: 'foam_u2_ControllerMode?'
          }),
          body: foam.cpTemplate(this.swiftIsAvailable, 'swift')
        });
        isAvailableAxiomSetter = `
          ${this.crossPlatformPrivateAxiom}!.setIsAvailableSlotInitializer(foam_swift_AnonymousGenericFunction.foam_swift_AnonymousGenericFunctionBuilder(nil)
            .setFn({(args: [Any?]?) -> Any? in
              let x = args?[0] as? foam_cross_platform_Context;
              let o = args?[1] as? ${parentCls.model_.swiftName};
              return foam_core_ExpressionSlot.foam_core_ExpressionSlotBuilder(nil)
                .setObj(o)
                .setCode(foam_swift_AnonymousGenericFunction.foam_swift_AnonymousGenericFunctionBuilder(nil)
                  .setFn({(args2: [Any?]?) -> Any? in
                    return o?.${this.name}_isAvailable(
                      ${args.map((a, i) => `args2![${i}] as! ${a.type}`).join(',')}${args.length ? ',' : ''}
                      args2![${args.length}] as? foam_u2_ControllerMode
                    );
                  })
                  .build()
                )
                .setArgs([${args.map(a => `o?.getSlot("${a.localName}")`).join(',')}${args.length ? ', ' : ''}x?.getXSlot("controllerMode")])
                .build();
            })
            .build());
        `;
      }

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
            ${isAvailableAxiomSetter}
            ${isEnabledsAxiomSetter}
            ${this.crossPlatformPrivateAxiom}!.setI18nLabel(NSLocalizedString(
              ${foam.swift.asSwiftValue(this.label)},
              comment: ${foam.swift.asSwiftValue(this.i18nLabelDescription)}));
            ${!this.help ? '' : `
            ${this.crossPlatformPrivateAxiom}!.setI18nHelp(NSLocalizedString(
              ${foam.swift.asSwiftValue(this.help)},
              comment: ${foam.swift.asSwiftValue(this.i18nHelpDescription)}));
            `}
          }
          return ${this.crossPlatformPrivateAxiom}!;
        `
      });

      return cls;
    },
    function swiftIsOverride(parentCls) {
      if ( parentCls.id == 'foam.cross_platform.AbstractFObject' ) {
        // AbstractFObject is the base class for everything so it doesn't
        // override anything.
        return false;
      }

      // If no parentMethod is found, check if one exists on the
      // foam.cross_platform.AbstractFObject because the parentCls will
      // ultimately extend that.
      var parentMethod = foam.cross_platform.AbstractFObject
        .getOwnAxioms()
        .find(a => a.name == this.name);

      if ( parentMethod ) return true;

      parentMethod = parentCls.getSuperAxiomByName(this.name);

      if ( parentMethod && parentMethod.forClass_ == 'foam.core.FObject' ) {
        // If the parentMethod comes from foam.core.FObject we ignore it because
        // everything generated extends foam.cross_platform.AbstractFObject and
        // it doesn't generate methods from foam.core.FObject.
        parentMethod = null;
      }

      return parentMethod;
    },
    function asSwiftValue() {
      return foam.lookup(this.forClass_).model_.swiftName + '.' + this.crossPlatformAxiomName + '()';
    }
  ],
});
