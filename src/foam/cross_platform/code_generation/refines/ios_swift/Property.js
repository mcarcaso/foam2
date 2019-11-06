foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines.ios_swift',
  name: 'PropertyJavaRefinement',
  refines: 'foam.core.Property',
  flags: ['swift'],
  properties: [
    {
      class: 'BooleanProperty',
      name: 'swiftOptional',
      expression: function(required) {
        return !required;
      },
    },
    {
      class: 'foam.swift.SwiftTypeProperty',
      expression: function(type, swiftOptional) {
        return foam.swift.toSwiftType(type, swiftOptional)
      },
    },
    {
      class: 'StringProperty',
      name: 'swiftValueType',
      expression: function(swiftType) {
        return swiftType + (foam.swift.isNullable(swiftType) ? '' : '!')
      },
    },
  ],
  methods: [
    function buildSwiftClass(cls, parentCls) {
      if ( ! parentCls.hasOwnAxiom(this.name) ) return;
      var override = !! parentCls.getSuperClass().getAxiomByName(this.name);

      cls.field({
        visibility: 'private',
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
        type: 'foam_core_Slot?',
        name: this.crossPlatformSlotVarName,
        defaultValue: 'nil'
      });

      cls.method({
        override: override,
        visibility: 'public',
        type: 'foam_core_Slot',
        name: this.crossPlatformSlotGetterName,
        body: `
        fatalError()
        /*
          if ( ${this.crossPlatformSlotVarName} == null ) {
            ${this.crossPlatformSlotVarName} = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
              .setObj(this)
              .setProp(${this.crossPlatformAxiomName})
              .build();
          }
          return ${this.crossPlatformSlotVarName};
          */
        `
      });

      return cls;
    }
  ]
});
