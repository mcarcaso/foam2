foam.INTERFACE({
  package: 'foam.core',
  name: 'SlotInterface',
  methods: [
    {
      type: 'Any',
      name: 'slotGet'
    },
    {
      name: 'slotSet',
      args: [
        { type: 'Any', name: 'value' }
      ]
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
      name: 'slotSet',
      code: function(o) { return this.set(o) }
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
        obj_ = (foam.cross_platform.FObject) value;
      `
    },
    {
      class: 'FObjectProperty',
      of: 'foam.core.Property',
      name: 'prop',
      androidSetter: `
        prop_isSet_ = true;
        prop_ = (foam.core.Property) value;
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

foam.CLASS({
  package: 'foam.android.tools.refines',
  name: 'SubSlotRefines',
  refines: 'foam.core.internal.SubSlot',
  methods: [
    {
      name: 'init',
      androidCode: `
        getParent().sub(null, parentChange_listener());
        parentChange(null, null);
      `
    },
    {
      name: 'slotGet',
      androidCode: `
        foam.cross_platform.FObject o =
          (foam.cross_platform.FObject) getParent().slotGet();
        return o != null ? o.getProperty(getName()) : null;
      `
    },
    {
      name: 'slotSet',
      androidCode: `
        foam.cross_platform.FObject o =
          (foam.cross_platform.FObject) getParent().slotGet();
        if ( o != null ) o.setProperty(getName(), value);
      `
    },
    {
      name: 'slotSub',
      androidCode: `
        return getValue$().slotSub(listener);
      `
    }
  ],
  listeners: [
    {
      name: 'parentChange',
      androidCode: `
        if ( getPrevSub() != null ) getPrevSub().detach();
        foam.cross_platform.FObject o =
          (foam.cross_platform.FObject) getParent().slotGet();

        if ( getOf() == null && o != null ) setOf(o.getCls_());

        setPrevSub(o != null && o.getSlot(getName()) != null ?
          o.getSlot(getName()).slotSub(valueChange_listener()) : null);
        valueChange(null, null);
      `
    },
    {
      name: 'valueChange',
      androidCode: `
        foam.cross_platform.FObject parentValue =
          (foam.cross_platform.FObject) getParent().slotGet();
        setValue(parentValue != null ? parentValue.getProperty(getName()) : null);
      `
    }
  ]
});

foam.CLASS({
  package: 'foam.android.tools.refines',
  name: 'ExpressionSlotRefines',
  refines: 'foam.core.ExpressionSlot',
  properties: [
    {
      name: 'args',
    }
  ]
});
