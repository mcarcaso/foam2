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
    {
      class: 'StringProperty',
      name: 'swiftViewFactory'
    },
  ],
  methods: [
    function buildSwiftClass(cls, parentCls) {
      var superAxiom = parentCls.getSuperAxiomByName(this.name);
      if ( superAxiom === this ) return;
      var override = this.swiftIsOverride(parentCls);

      cls.method({
        override: override,
        visibility: 'public',
        name: this.name,
        body: foam.cpTemplate(this.swiftCode, 'swift')
      });

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
                  self!.\`${this.name}\`();
                  return nil;
                })
                .build();
            }
            return ${this.crossPlatformFnVarName};
          `
        });
      }

      var expressionData = [
          'isEnabled',
          'isAvailable'
        ]
        .map(name => {
          var Name = foam.String.capitalize(name);
          if ( ! this['swift' + Name] ) return;
          var args = this[name + 'ExpressionArgs'].map(a => {
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
            name: this.name + '_' + name,
            args: args,
            body: foam.cpTemplate(`
              ${this['swift' + Name]}
            `, 'swift')
          });
          return {
            axiomSetter: `
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
              .build());
            `,
            actionPreBody: `
              if !${this.name}_${name}(${args.map(a => `
                getSlot("${a.localName}").slotGet() as! ${a.type}
              `).join(',')}) {
                return;
              }
            `
          }
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
            ${this.crossPlatformPrivateAxiom} = ${foam.core.FObject.getAxiomByName('asSwiftValue').code.call(this)};
            ${expressionData.map(d => d.axiomSetter).join('\n')}
            ${this.swiftViewFactory ? `
            ${this.crossPlatformPrivateAxiom}.setViewInitializer(foam_swift_AnonymousGenericFunction.foam_swift_AnonymousGenericFunctionBuilder(nil)
              .setFn({(args: [Any?]?) -> Any? in
                foam.cross_platform.Context x = (foam.cross_platform.Context) args[0];
                ${this.swiftViewFactory}
              })
              .build()
            );
            ` : ''}
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
