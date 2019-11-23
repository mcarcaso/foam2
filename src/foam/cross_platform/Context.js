foam.CLASS({
  package: 'foam.cross_platform',
  name: 'Context',
  requires: [
    'foam.core.ConstantSlot'
  ],
  constants: [
    {
      type: 'Context',
      name: 'GLOBAL',
    }
  ],
  properties: [
    {
      class: 'MapProperty',
      name: 'classMap_'
    },
    {
      class: 'MapProperty',
      name: 'slotMap_'
    },
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.Context',
      name: 'parent_'
    },
  ],
  methods: [
    {
      name: 'registerClass',
      args: [
        { type: 'String', name: 'id' },
        { type: 'foam.cross_platform.FoamClass', name: 'cls' },
      ],
      androidCode: `
        getClassMap_().put(id, cls);
      `
    },
    {
      type: 'foam.cross_platform.FoamClass',
      name: 'lookup',
      args: [
        { type: 'String', name: 'id' },
      ],
      androidCode: `
        foam.cross_platform.FoamClass cls = (foam.cross_platform.FoamClass) getClassMap_().get(id);
        if ( cls == null && getParent_() != null ) {
          cls = getParent_().lookup(id);
        }
        return cls;
      `
    },
    {
      type: 'Context',
      name: 'createSubContext',
      args: [
        { type: 'Map', name: 'map' },
      ],
      androidCode: `
        java.util.Map slotMap = new java.util.HashMap<>();
        for ( Object k : map.keySet() ) {
          Object value = map.get(k);
          if ( ! foam.core.SlotInterfaceClass.CLS_().isInstance(value) ) {
            value = ConstantSlot_create()
              .setValue(value)
              .build();
          }
          slotMap.put(k, value);
        }
        return ContextBuilder(null)
          .setParent_(this)
          .setSlotMap_(slotMap)
          .build();
      `
    },
    {
      type: 'Boolean',
      name: 'hasXProp',
      args: [
        { type: 'String', name: 'name' },
      ],
      androidCode: `
        boolean o = getSlotMap_().containsKey(name);
        if ( ! o && getParent_() != null ) {
          o = getParent_().hasXProp(name);
        }
        return o;
      `
    },
    {
      type: 'Any',
      name: 'getXProp',
      args: [
        { type: 'String', name: 'name' },
      ],
      androidCode: `
        foam.core.SlotInterface slot = getXSlot(name);
        return slot == null ? null : slot.slotGet();
      `
    },
    {
      type: 'foam.core.SlotInterface',
      name: 'getXSlot',
      args: [
        { type: 'String', name: 'name' },
      ],
      androidCode: `
        if ( getSlotMap_().containsKey(name) ) {
          return (foam.core.SlotInterface) getSlotMap_().get(name);
        }
        return getParent_() == null ? null : getParent_().getXSlot(name);
      `
    },
  ]
});
