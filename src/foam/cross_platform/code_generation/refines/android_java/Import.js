foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines.android_java',
  name: 'ImportRefine',
  refines: 'foam.core.Import',
  flags: ['android'],
  properties: [
    { class: 'foam.android.tools.AndroidType' },
    {
      class: 'StringProperty',
      name: 'androidSetPropertyMap',
      expression: function(name, crossPlatformSetterName) {
        var m = {};
        m[name] = `${crossPlatformSetterName}(value);`;
        return m;
      }
    },
    {
      class: 'StringProperty',
      name: 'androidGetSlot',
      expression: function(crossPlatformSlotGetterName) {
        return `return ${crossPlatformSlotGetterName}();`
      }
    },
    {
      class: 'StringProperty',
      name: 'androidGetProperty',
      expression: function(crossPlatformGetterName) {
        return `return ${crossPlatformGetterName}();`
      }
    },
  ],
  methods: [
    function buildAndroidClass(cls, parentCls) {
      if ( ! parentCls.hasOwnAxiom(this.name) ) return;

      cls.method({
        name: this.crossPlatformSlotGetterName,
        type: 'foam.core.SlotInterface',
        visibility: 'public',
        body: `return getX().getXSlot("${this.key}");`
      });
      cls.method({
        name: this.crossPlatformGetterName,
        type: this.androidType,
        visibility: 'public',
        body: `
          Object o = ${this.crossPlatformSlotGetterName}().slotGet();
          return o instanceof ${this.androidType} == false ? null :
            (${this.androidType}) o;
        `
      });
      cls.method({
        name: this.crossPlatformSetterName,
        type: 'void',
        visibility: 'public',
        args: [
          { type: 'Object', name: 'value' }
        ],
        body: `
          ${this.crossPlatformSlotGetterName}().slotSet(value);
        `
      });
    }
  ]
});
