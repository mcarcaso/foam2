foam.CLASS({
  package: 'foam.cross_platform.ui.stack.dao',
  name: 'CustomBrowseTitleAxiom',
  implements: [
    'foam.cross_platform.ui.TitleSlotCreator'
  ],
  properties: [
    {
      class: 'StringProperty',
      name: 'name',
      value: 'CustomBrowseTitleAxiom'
    },
    {
      class: 'StringProperty',
      name: 'androidCode'
    },
    {
      class: 'StringProperty',
      name: 'swiftCode'
    },
    {
      class: 'FunctionProperty',
      name: 'fn_'
    },
    {
      class: 'StringProperty',
      name: 'crossPlatformAxiomName',
      expression: function (name) {
        return foam.String.constantize(name);
      }
    },
    {
      class: 'StringProperty',
      name: 'crossPlatformPrivateAxiom',
      expression: function (crossPlatformAxiomName) {
        return crossPlatformAxiomName + '_var_';
      }
    },
  ],
  methods: [
    function buildAndroidClass(cls, parentCls) {
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
            ${this.crossPlatformPrivateAxiom}.setFn_((foam.cross_platform.GenericFunction) (args) -> {
              foam.cross_platform.Context x = (foam.cross_platform.Context) args[0];
              ${this.androidCode}
            });
          }
          return ${this.crossPlatformPrivateAxiom};
        `
      });
    },
    function buildSwiftClass(cls, parentCls) {
      cls.field({
        visibility: 'private',
        static: true,
        type: this.cls_.model_.swiftName + '?',
        name: this.crossPlatformPrivateAxiom
      });
      cls.method({
        visibility: 'public',
        class: true,
        type: this.cls_.model_.swiftName,
        name: this.crossPlatformAxiomName,
        body: `
          if ${this.crossPlatformPrivateAxiom} == nil {
            ${this.crossPlatformPrivateAxiom} = ${foam.core.FObject.getAxiomByName('asSwiftValue').code.call(this)};
            ${this.crossPlatformPrivateAxiom}!.setFn_(foam_swift_AnonymousGenericFunction.foam_swift_AnonymousGenericFunctionBuilder(nil)
              .setFn({(args: [Any?]?) -> Any? in
                let x = args![0] as! foam_cross_platform_Context;
                ${this.swiftCode}
              })
              .build());
          }
          return ${this.crossPlatformPrivateAxiom}!;
        `
      });

    },
    function asAndroidValue() {
      return this.forClass_ + '.' + this.crossPlatformAxiomName + '()';
    },
    function asSwiftValue() {
      return this.sourceCls_.model_.swiftName + '.' + this.crossPlatformAxiomName + '()';
    },
    {
      name: 'createTitleSlot',
      androidCode: `
        Object o = getFn_().executeFunction(new Object[] {x});
        if ( o instanceof foam.core.SlotInterface ) {
          return (foam.core.SlotInterface) o;
        }
        return foam.core.ConstantSlot.ConstantSlotBuilder(null)
          .setValue(o)
          .build();
      `,
      swiftCode: `
        let o = getFn_()?.executeFunction([x]);
        if ( o is foam_core_SlotInterface ) {
          return o as? foam_core_SlotInterface;
        }
        return foam_core_ConstantSlot.foam_core_ConstantSlotBuilder(nil)
          .setValue(o)
          .build();
      `
    }
  ]
});