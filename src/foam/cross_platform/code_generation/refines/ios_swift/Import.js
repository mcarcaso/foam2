foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines.ios_swift',
  name: 'ImportRefine',
  refines: 'foam.core.Import',
  flags: ['swift'],
  properties: [
    {
      class: 'foam.swift.SwiftTypeProperty',
      expression: function(type) {
        return foam.swift.toSwiftType(type, true);
      },
    },
    {
      class: 'StringProperty',
      name: 'swiftSetProperty',
      expression: function(crossPlatformSetterName) {
        return `${crossPlatformSetterName}(value);`
      }
    },
    {
      class: 'StringProperty',
      name: 'swiftGetSlot',
      expression: function(crossPlatformSlotGetterName) {
        return `return ${crossPlatformSlotGetterName}();`
      }
    },
    {
      class: 'StringProperty',
      name: 'swiftGetProperty',
      expression: function(crossPlatformGetterName) {
        return `return ${crossPlatformGetterName}();`
      }
    },
  ],
  methods: [
    function buildSwiftClass(cls, parentCls) {
      if ( ! parentCls.hasOwnAxiom(this.name) ) return;
      var superAxiom = parentCls.getSuperClass().getAxiomByName(this.name);
      var override = !! superAxiom;

      cls.method({
        override: override,
        name: this.crossPlatformSlotGetterName,
        type: foam.core.SlotInterface.model_.swiftName + '?',
        visibility: 'public',
        body: `return getSubX().getXSlot("${this.name}");`
      });
      cls.method({
        override: override,
        name: this.crossPlatformGetterName,
        type: this.swiftType,
        visibility: 'public',
        body: `
          let o = ${this.crossPlatformSlotGetterName}()?.slotGet();
          return o${foam.swift.requiresCast(this.swiftType) ?
            ` as! ${this.swiftType}` : ''};
        `
      });
      cls.method({
        override: override,
        name: this.crossPlatformSetterName,
        visibility: 'public',
        args: [
          { type: 'Any?', localName: 'value' }
        ],
        body: `
          ${this.crossPlatformSlotGetterName}()?.slotSet(value);
        `
      });
    }
  ]
});
