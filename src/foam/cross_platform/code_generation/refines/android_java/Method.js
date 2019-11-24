foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines.android_java',
  name: 'AbstractMethodJavaRefinement',
  refines: 'foam.core.AbstractMethod',
  flags: ['android'],
  properties: [
    {
      class: 'StringProperty',
      name: 'androidCode',
      expression: function(crossPlatformCode, name) {
        return crossPlatformCode || `throw new RuntimeException("${name} is not implemented");`;
      }
    },
    { class: 'foam.android.tools.AndroidType' },
    {
      class: 'StringProperty',
      name: 'androidGetProperty',
      expression: function(forClass_, name, crossPlatformFnGetterName, crossPlatformIsStatic) {
        return foam.lookup(forClass_).getSuperAxiomByName(name) ||
               crossPlatformIsStatic ? '' :
          `return ${crossPlatformFnGetterName}();`
      }
    },
  ],
  methods: [
    function buildAndroidClass(cls, parentCls) {
      var superAxiom = parentCls.getSuperAxiomByName(this.name);
      if ( superAxiom === this ) return;

      cls.method({
        visibility: 'public',
        static: this.crossPlatformIsStatic,
        type: this.androidType,
        name: this.name,
        args: this.args.map(a => ({
          name: a.name,
          type: a.androidType
        })),
        body: foam.cpTemplate(this.androidCode, 'android')
      });

      if ( ! superAxiom &&
           ! this.crossPlatformIsStatic &&
           ! foam.core.internal.InterfaceMethod.isInstance(this) ) {
        cls.field({
          visibility: 'private',
          type: 'foam.cross_platform.GenericFunction',
          name: this.crossPlatformFnVarName,
        });
        var methodCall =
          `self.${this.name}(${this.args.map(a => a.name).join(', ')})`;
        cls.method({
          visibility: 'public',
          type: 'foam.cross_platform.GenericFunction',
          name: this.crossPlatformFnGetterName,
          body: `
            if ( ${this.crossPlatformFnVarName} == null ) {
              final ${parentCls.id} self = this;
              ${this.crossPlatformFnVarName} = new foam.cross_platform.GenericFunction() {
                public Object executeFunction(Object[] _fnArgs_) {
                  ${this.args.map((a, i) => `
                  ${a.androidType} ${a.name} = (${a.androidType}) _fnArgs_[${i}];
                  `).join('\n')}
                  ${this.androidType == 'void' ? `
                  ${methodCall};
                  return null;
                  ` : `
                  return ${methodCall};
                  `}
                }
              };
            }
            return ${this.crossPlatformFnVarName};
          `
        });
      }

      return cls;
    }
  ]
});

foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines.android_java',
  name: 'ArgumentJavaRefinement',
  refines: 'foam.core.Argument',
  flags: ['android'],
  properties: [
    { class: 'foam.android.tools.AndroidType' }
  ]
});

