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
      swiftValue: `foam_cross_platform_GlobalContext()`,
      androidValue: `new foam.cross_platform.GlobalContext()`,
    }
  ],
  axioms: [
    {
      class: 'foam.cross_platform.code_generation.Extras',
      androidCode: `
        private static android.content.Context ANDROID_CONTEXT = null;
      `
    }
  ],
  static: [
    {
      flags: ['android'],
      name: 'setGlobalAndroidContext',
      args: [{androidType: 'android.content.Context', name: 'ctx'}],
      androidCode: `
          ANDROID_CONTEXT = ctx;
          foam.cross_platform.GlobalContext x = (foam.cross_platform.GlobalContext) GLOBAL();
          x.setAndroidContext(ctx);
      `
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
      `,
      swiftCode: `
        getClassMap_()![id!] = cls;
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
      `,
      swiftCode: `
        var cls = getClassMap_()![id!] as? foam_cross_platform_FoamClass;
        if cls == nil && getParent_() != nil {
          cls = getParent_()!.lookup(id!);
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
      `,
      swiftCode: `
        let slotMap = NSMutableDictionary();
        for k in map!.allKeys {
          var value = map![k]!;
          if !foam_core_SlotInterfaceClass.CLS_().isInstance(value) {
            value = ConstantSlot_create()
              .setValue(value)
              .build();
          }
          slotMap[k] = value;
        }
        return Self.foam_cross_platform_ContextBuilder(nil)
          .setParent_(self)
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
      `,
      swiftCode: `
        var o = getSlotMap_()![name!] != nil;
        if !o && getParent_() != nil {
          o = getParent_()!.hasXProp(name);
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
      `,
      swiftCode: `
        let slot = getXSlot(name);
        return slot?.slotGet();
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
      `,
      swiftCode: `
        if getSlotMap_()![name!] != nil {
          return getSlotMap_()![name!] as? foam_core_SlotInterface;
        }
        return getParent_()?.getXSlot(name);
      `
    },
    {
      type: 'String',
      name: 'getLocalizedString',
      args: [
        { type: 'String', name: 'id' },
      ],
      flags: ['android'],
      androidCode: `
        android.content.Context actx = (android.content.Context) getXProp("androidContext");
        if ( actx == null ) actx = ANDROID_CONTEXT;
        int resId = actx.getResources().getIdentifier(id, "string", actx.getPackageName());
        if ( resId == 0 ) return id;
        return resId == 0 ? id : actx.getString(resId);
      `
    },
  ]
});
