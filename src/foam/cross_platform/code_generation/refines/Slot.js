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
  package: 'foam.cross_platform.code_generation.refines',
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
  package: 'foam.cross_platform.code_generation.refines',
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
      name: 'slotGet',
      androidCode: `return getProp().f(getObj());`
    },
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
  package: 'foam.cross_platform.code_generation.refines',
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
  package: 'foam.cross_platform.code_generation.refines',
  name: 'SimpleSlotRefines',
  refines: 'foam.core.SimpleSlot',
  methods: [
    {
      name: 'slotGet',
      code: function() { return this.get(); },
      androidCode: `return getValue();`
    },
    {
      name: 'slotSet',
      code: function(value) { return this.set(value); },
      androidCode: `setValue(value);`
    },
    {
      name: 'slotSub',
      androidCode: `return getValue$().slotSub(listener);`
    }
  ]
});

foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines',
  name: 'PromiseSlotRefines',
  refines: 'foam.core.PromiseSlot',
  requires: [
    'foam.cross_platform.AsyncFunction'
  ],
  properties: [
    {
      name: 'promise',
      androidPostSet: `
        if ( newValue == null ) return;
        final PromiseSlot self = this;
        final foam.cross_platform.Promise p = newValue;
        AsyncFunction_create()
          .setDelegate(new foam.cross_platform.GenericFunction() {
            public Object executeFunction(Object[] args) {
              if ( self.getPromise() != p ) return null;
              self.setValue(self.getPromise().get());
              return null;
            }
          })
          .build()
          .executeFunction(null);
      `
    }
  ],
  methods: [
    {
      name: 'slotSet',
      androidCode: `
        throw new RuntimeException(getCls_().getId() + " does not support setting.");
      `
    }
  ]
});

foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines',
  name: 'ExpressionSlotRefines',
  refines: 'foam.core.ExpressionSlot',
  properties: [
    {
      name: 'value',
      androidPreSet: `
        if ( newValue instanceof foam.cross_platform.Promise ) {
          setPromise((foam.cross_platform.Promise) newValue);
          newValue = oldValue;
        } else {
          setPromise(null);
        }
        return newValue;
      `,
      androidFactory: `
        Object[] args = new Object[getArgs().length];
        for ( int i = 0 ; i < args.length ; i++ ) {
          args[i] = getArgs()[i].slotGet();
        }
        return getCode().executeFunction(args);
      `
    },
    {
      name: 'args',
      androidAdapt: `
        if ( newValue instanceof String[] == false ) {
          return (foam.core.Slot[]) newValue;
        }
        String[] propNames = (String[]) newValue;
        foam.core.Slot[] slots = new foam.core.Slot[propNames.length];
        for ( int i = 0; i < slots.length ; i++ ) {
          slots[i] = getObj().getSlot(propNames[i]);
        }
        return slots;
      `,
      androidPostSet: `subToArgs_(newValue);`
    }
  ],
  methods: [
    {
      name: 'init',
      androidCode: `
        final foam.cross_platform.Listener l = cleanup_listener();
        onDetach(new foam.core.Detachable() {
          public void detach() { l.executeListener(null, null); }
        });
      `
    },
    {
      name: 'subToArgs_',
      args: [
        { type: 'foam.core.Slot[]', name: 'args' }
      ],
      androidCode: `
        cleanup(null, null);
        final foam.core.Detachable[] subs = new foam.core.Detachable[args.length];
        for ( int i = 0; i < args.length; i++ ) {
          subs[i] = args[i].slotSub(invalidate_listener());
        }
        setCleanup_(new foam.core.Detachable() {
          public void detach() {
            for ( foam.core.Detachable sub : subs ) sub.detach();
          }
        });
      `
    }
  ],
  listeners: [
    {
      name: 'cleanup',
      androidCode: `
        if ( getCleanup_() != null ) getCleanup_().detach();
      `
    },
    {
      name: 'invalidate',
      androidCode: `
        clearProperty("value");
      `
    }
  ]
});
