foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines',
  name: 'ConstantRefine',
  refines: 'foam.core.Constant',
  flags: ['swift'],
  properties: [
    {
      class: 'foam.swift.SwiftTypeProperty',
      expression: function(type) {
        return foam.swift.toSwiftType(type, false);
      },
    },
    {
      class: 'StringProperty',
      name: 'swiftValue',
      expression: function(value) {
        return foam.swift.asSwiftValue(value);
      }
    },
  ],
  methods: [
    function buildSwiftClass(cls) {
      cls.field({
        visibility: 'private',
        static: true,
        type: this.swiftType + '?',
        name: this.crossPlatformVarName,
        defaultValue: 'nil'
      });
      cls.method({
        visibility: 'public',
        class: true,
        type: this.swiftType,
        name: this.crossPlatformAxiomName,
        body: `
          if ${this.crossPlatformVarName} == nil {
            ${this.crossPlatformVarName} = ${this.swiftValue};
          }
          return ${this.crossPlatformVarName}!;
        `
      });
      return cls;
    }
  ]
});
