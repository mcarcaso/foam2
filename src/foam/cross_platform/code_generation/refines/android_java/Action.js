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
      value: 'throw new RuntimeException("Not impl");'
    },
    {
      class: 'StringProperty',
      name: 'androidIsEnabled'
    },
    {
      class: 'StringProperty',
      name: 'androidIsAvailable'
    },
    {
      class: 'StringProperty',
      name: 'androidViewFactory'
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

      var addExpressionBits = name => {
        var Name = foam.String.capitalize(name);
        if ( ! this['android' + Name] ) return;
        var args = this[name + 'ExpressionArgs'].map(a => {
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
          name: this.name + '_' + name,
          args: args,
          body: foam.cpTemplate(`
            ${this['android' + Name]}
          `, 'android')
        });
        return {
          axiomSetter: `
          ${this.crossPlatformPrivateAxiom}.set${Name}SlotInitializer((foam.cross_platform.GenericFunction) args -> {
            ${parentCls.id} o = (${parentCls.id}) args[0];
            return foam.core.ExpressionSlot.ExpressionSlotBuilder(null)
              .setObj(o)
              .setCode((foam.cross_platform.GenericFunction) args2 -> {
                return o.${this.name}_${name}(
                  ${args.map((a, i) => `(${a.type}) args2[${i}]`).join(',')}
                );
              })
              .setArgs(new foam.core.SlotInterface[] {
                ${args.map(a => `o.getSlot("${a.name}")`).join(',')}
              })
              .build();
          });
          `,
          actionPreBody: `
            if ( ! ${this.name}_${name}(${args.map(a => `
              (${a.type})getSlot("${a.name}").slotGet()
            `).join(',')}) ) {
              return;
            }
          `
        }
      };

      var expressionData = [
        'isEnabled',
        'isAvailable'
      ]
        .map(p => addExpressionBits(p))
        .filter(o => o);

      cls.method({
        visibility: 'public',
        name: this.name,
        args: [
          { type: 'foam.cross_platform.Context', name: 'x' }
        ],
        body: foam.cpTemplate(`
          ${expressionData.map(d => d.actionPreBody).join('\n')}
          ${this.androidCode}
        `, 'android')
      });

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
            ${expressionData.map(d => d.axiomSetter).join('\n')}
            ${this.androidViewFactory ? `
            ${this.crossPlatformPrivateAxiom}.setViewInitializer((foam.cross_platform.GenericFunction) args -> {
              foam.cross_platform.Context x = (foam.cross_platform.Context) args[0];
              ${this.androidViewFactory}
            });
            ` : ''}
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
