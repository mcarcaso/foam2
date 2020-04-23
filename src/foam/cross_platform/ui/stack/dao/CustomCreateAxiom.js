foam.CLASS({
  package: 'foam.cross_platform.ui.stack.dao',
  name: 'CustomCreateAxiom',
  implements: [
    'foam.cross_platform.BuilderFactory'
  ],
  properties: [
    {
      class: 'StringProperty',
      name: 'name',
      value: 'CustomCreateAxiom'
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
              ${this.androidCode}
            });
          }
          return ${this.crossPlatformPrivateAxiom};
        `
      });
    },
    function buildSwiftClass(cls, parentCls) {
      if (!parentCls.hasOwnAxiom(this.name)) return;
      var superAxiom = parentCls.getSuperClass().getAxiomByName(this.name);
      var override = !!superAxiom;

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
            ${this.crossPlatformPrivateAxiom}!.setFn_(foam_swift_AnonymousGenericFunction.foam_swift_AnonymousGenericFunctionBuilder(nil)
              .setFn({(args: [Any?]?) -> Any? in
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
      name: 'createBuilder',
      androidCode: `
        return ((foam.cross_platform.BuilderFactory) getFn_().executeFunction(null)).createBuilder(x);
      `,
      swiftCode: `
        return (getFn_()?.executeFunction(nil) as? foam_cross_platform_BuilderFactory)?.createBuilder(x);
      `
    }
  ]
});