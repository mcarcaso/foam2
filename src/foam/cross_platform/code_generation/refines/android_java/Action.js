foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines.android_java',
  name: 'ActionRefine',
  refines: 'foam.core.Action',
  flags: ['android'],
  properties: [
    {
      class: 'StringProperty',
      name: 'androidGetProperty',
      expression: function(forClass_, name, crossPlatformFnGetterName) {
        return foam.lookup(forClass_).getSuperAxiomByName(name) ? '' :
          `return ${crossPlatformFnGetterName}();`
      }
    },
    {
      class: 'StringProperty',
      name: 'androidCode',
      expression: function(crossPlatformCode) {
        return crossPlatformCode || 'throw new RuntimeException();'
      }
    },
    {
      class: 'StringProperty',
      name: 'androidIsEnabled'
    },
    {
      class: 'StringProperty',
      name: 'androidIsAvailable'
    },
  ],
  methods: [
    function buildAndroidClass(cls, parentCls) {
      var superAxiom = parentCls.getSuperAxiomByName(this.name);
      if ( superAxiom === this ) return;

      if ( ! superAxiom ) {
        cls.field({
          visibility: 'private',
          type: foam.cross_platform.GenericFunction.id,
          name: this.crossPlatformFnVarName,
        });
        cls.method({
          visibility: 'public',
          type: foam.cross_platform.GenericFunction.id,
          name: this.crossPlatformFnGetterName,
          body: `
            if ( ${this.crossPlatformFnVarName} == null ) {
              final ${parentCls.id} self = this;
              ${this.crossPlatformFnVarName} = (foam.cross_platform.GenericFunction) _fnArgs_ -> {
                self.${this.name}((foam.cross_platform.Context) _fnArgs_[0]);
                return null;
              };
            }
            return ${this.crossPlatformFnVarName};
          `
        });
      }

      var isEnabledsAxiomSetter = '';
      var actionCode = this.androidCode;
      if ( this.androidIsEnabled ) {
        var args = this.isEnabledExpressionArgs.map(a => {
          a = a.split('$').filter(a => a);
          return {
            type: a.length == 1 ?
              parentCls.getAxiomByName(a).androidType : 'Object',
            name: a.join('$')
          }
        });
        cls.method({
          visibility: 'public',
          type: 'boolean',
          name: this.name + '_isEnabled',
          args: args,
          body: foam.cpTemplate(this.androidIsEnabled, 'android')
        });
        isEnabledsAxiomSetter = `
          ${this.crossPlatformPrivateAxiom}.setIsEnabledSlotInitializer((foam.cross_platform.GenericFunction) args -> {
            ${parentCls.id} o = (${parentCls.id}) args[0];
            return foam.core.ExpressionSlot.ExpressionSlotBuilder(null)
              .setObj(o)
              .setCode((foam.cross_platform.GenericFunction) args2 -> {
                return o.${this.name}_isEnabled(
                  ${args.map((a, i) => `(${a.type}) args2[${i}]`).join(',')}
                );
              })
              .setArgs(new foam.core.SlotInterface[] {
                ${args.map(a => `o.getSlot("${a.name}")`).join(',')}
              })
              .build();
          });
        `;
        actionCode = `
          if ( ! ${this.name}_isEnabled(${args.map(a => `
            (${a.type})getSlot("${a.name}").slotGet()
          `).join(',')}) ) {
            return;
          }
          ${actionCode}
        `;
      }

      cls.method({
        visibility: 'public',
        name: this.name,
        args: [
          { type: 'foam.cross_platform.Context', name: 'x' }
        ],
        body: foam.cpTemplate(actionCode, 'android')
      });

      var isAvailableAxiomSetter = '';
      if ( this.androidIsAvailable ) {
        var args = this.isAvailableExpressionArgs.map(a => {
          a = a.split('$').filter(a => a);
          return {
            type: a.length == 1 ?
              parentCls.getAxiomByName(a).androidType : 'Object',
            name: a.join('$')
          }
        });
        cls.method({
          visibility: 'public',
          type: 'boolean',
          name: this.name + '_isAvailable',
          args: args.concat({
            type: 'foam.u2.ControllerMode',
            name: 'controllerMode'
          }),
          body: foam.cpTemplate(this.androidIsAvailable, 'android')
        });
        isAvailableAxiomSetter = `
          ${this.crossPlatformPrivateAxiom}.setIsAvailableSlotInitializer((foam.cross_platform.GenericFunction) args -> {
            foam.cross_platform.Context x2 = (foam.cross_platform.Context) args[0];
            ${parentCls.id} o = (${parentCls.id}) args[1];
            return foam.core.ExpressionSlot.ExpressionSlotBuilder(null)
              .setObj(o)
              .setCode((foam.cross_platform.GenericFunction) args2 -> {
                return o.${this.name}_isAvailable(
                  ${args.map((a, i) => `(${a.type}) args2[${i}]`).join(',')}${args.length ? ',' : ''}
                  (foam.u2.ControllerMode) args2[${args.length}]
                );
              })
              .setArgs(new foam.core.SlotInterface[] {
                ${args.map(a => `o.getSlot("${a.name}")`).join(',')}${args.length ? ', ' : ''}x2.getXSlot("controllerMode")
              })
              .build();
          });
        `;
      }

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
            foam.cross_platform.Context x = foam.cross_platform.Context.GLOBAL();
            ${this.crossPlatformPrivateAxiom} = ${foam.core.FObject.getAxiomByName('asAndroidValue').code.call(this)};
            ${this.crossPlatformPrivateAxiom}.setI18nLabel(x.getLocalizedString("${this.forClass_.replace(/\./g, '_')}_${this.name}_Label"));
            ${isEnabledsAxiomSetter}
            ${isAvailableAxiomSetter}
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
