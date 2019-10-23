foam.INTERFACE({
  package: 'foam.core',
  name: 'SlotInterface',
  methods: [
    {
      type: 'Any',
      name: 'slotGet'
    },
    {
      type: 'foam.core.Detachable',
      name: 'slotSub',
      args: [
        { type: 'foam.cross_platform.Listener', name: 'listener' }
      ]
    }
  ]
});

foam.CLASS({
  package: 'foam.android.tools.refines',
  name: 'SlotRefines',
  refines: 'foam.core.Slot',
  implements: [
    'foam.core.SlotInterface'
  ],
  methods: [
    {
      name: 'slotGet',
      code: function() { return this.get() }
    },
    {
      name: 'slotSub',
      code: function(l) { return this.sub(l) },
    }
  ],
});

foam.CLASS({
  package: 'foam.android.tools.refines',
  name: 'PropertySlotRefines',
  refines: 'foam.core.internal.PropertySlot',
  properties: [
    {
      class: 'FObjectProperty',
      name: 'obj',
      androidSetter: `
        obj_isSet_ = true;
        obj_ = value;
      `
    },
    {
      class: 'FObjectProperty',
      of: 'foam.core.Property',
      name: 'prop',
      androidSetter: `
        prop_isSet_ = true;
        prop_ = value;
      `
    },
  ],
  methods: [
    {
      name: 'slotSub',
      androidCode: `
        return getObj().sub(
          new String[] {
            "propertyChange",
            getProp().getName()
          },
          listener);
      `
    }
  ]
});
