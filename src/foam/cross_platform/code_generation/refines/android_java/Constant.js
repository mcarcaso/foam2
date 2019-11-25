foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines',
  name: 'ConstantRefine',
  refines: 'foam.core.Constant',
  flags: ['android'],
  properties: [
    { class: 'foam.android.tools.AndroidType' },
    {
      class: 'StringProperty',
      name: 'androidValue',
      expression: function(value) {
        return foam.android.tools.asAndroidValue(value);
      }
    },
  ],
  methods: [
    function buildAndroidClass(cls, parentCls) {
      var superAxiom = parentCls.getSuperAxiomByName(this.name);
      if ( superAxiom === this ) return;

      cls.field({
        visibility: 'private',
        static: true,
        type: this.androidType,
        name: this.crossPlatformVarName,
        initializer: null
      });
      cls.method({
        visibility: 'public',
        static: true,
        type: this.androidType,
        name: this.crossPlatformAxiomName,
        body: `
          if ( ${this.crossPlatformVarName} == null ) {
            ${this.crossPlatformVarName} = ${this.androidValue};
          }
          return ${this.crossPlatformVarName};
        `
      });
      return cls;
    }
  ]
});

