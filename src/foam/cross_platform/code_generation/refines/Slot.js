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
    },
    {
      type: 'foam.core.Detachable',
      name: 'follow',
      args: [
        { type: 'foam.core.SlotInterface', name: 'other' }
      ]
    },
    {
      type: 'foam.core.SlotInterface',
      name: 'dot',
      args: [
        { type: 'String', name: 'name' }
      ]
    },
    {
      type: 'foam.core.Detachable',
      name: 'linkFrom',
      args: [
        { type: 'foam.core.SlotInterface', name: 'slot' }
      ]
    },
    {
      type: 'foam.core.Detachable',
      name: 'linkTo',
      args: [
        { type: 'foam.core.SlotInterface', name: 'slot' }
      ]
    },
    {
      type: 'foam.core.SlotInterface',
      name: 'map',
      args: [
        { type: 'foam.cross_platform.GenericFunction', name: 'fn' }
      ]
    },
    {
      documentation: `
        Relate one slot to another:
        When "this" changes, set "slot" to result of f().
        When "slot" changes, set "this" to result of fPrime().
        On initialization, calls slot.set(f(this.get())).
      `,
      type: 'foam.core.Detachable',
      name: 'relateTo',
      args: [
        { type: 'foam.core.SlotInterface', name: 'slot' },
        { type: 'foam.cross_platform.GenericFunction', name: 'f' },
        { type: 'foam.cross_platform.GenericFunction', name: 'fPrime' }
      ]
    },
  ]
});

foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines',
  name: 'SlotRefines',
  refines: 'foam.core.Slot',
  implements: [
    'foam.core.SlotInterface'
  ],
  requires: [
    'foam.util.ArrayDetachable',
  ],
  methods: [
    {
      type: 'Boolean',
      name: 'isDifferent',
      documentation: `
        Checks that it's the same object if it's an FObject, otherwise uses
        the Lib to compare so primitives are properly handled.
      `,
      args: [
        { type: 'Any', name: 'o1' },
        { type: 'Any', name: 'o2' },
      ],
      androidCode: `
        foam.cross_platform.type.FObjectType ft = foam.cross_platform.type.FObjectType.INSTANCE();
        if ( ft.isInstance(o1) ) return o1 != o2;
        return ! foam.cross_platform.Lib.equals(o1, o2);
      `,
      swiftCode: `
        let ft = foam_cross_platform_type_FObjectType.INSTANCE();
        if ( ft.isInstance(o1) ) { return (o1 as AnyObject) !== (o2 as AnyObject); }
        return !foam_cross_platform_Lib.equals(o1, o2);
      `
    },
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
    },
    {
      name: 'dot',
      androidCode: `
        return SubSlot_create()
          .setParent(this)
          .setName(name)
          .build();
      `,
      swiftCode: `
        return SubSlot_create()
          .setParent(self)
          .setName(name)
          .build();
      `
    },
    {
      name: 'linkFrom',
      androidCode: `
        foam.core.SlotInterface s1 = this;
        foam.core.SlotInterface s2 = slot;
        foam.cross_platform.Listener l1 = new foam.cross_platform.Listener() {
          boolean feedback1 = false;
          public void executeListener(foam.core.Detachable sub, Object[] args) {
            if ( feedback1 ) return;
            if ( isDifferent(s1.slotGet(), s2.slotGet()) ) {
              feedback1 = true;
              s2.slotSet(s1.slotGet());
              if ( isDifferent(s1.slotGet(), s2.slotGet()) ) {
                s1.slotSet(s2.slotGet());
              }
              feedback1 = false;
            }
          }
        };
        foam.cross_platform.Listener l2 = new foam.cross_platform.Listener() {
          boolean feedback2 = false;
          public void executeListener(foam.core.Detachable sub, Object[] args) {
            if ( feedback2 ) return;
            if ( isDifferent(s1.slotGet(), s2.slotGet()) ) {
              feedback2 = true;
              s1.slotSet(s2.slotGet());
              if ( isDifferent(s1.slotGet(), s2.slotGet()) ) {
                s2.slotSet(s1.slotGet());
              }
              feedback2 = false;
            }
          }
        };

        foam.core.Detachable sub1 = s1.slotSub(l1);
        foam.core.Detachable sub2 = s2.slotSub(l2);

        l2.executeListener(null, null);

        return new foam.core.Detachable() {
          foam.core.Detachable sub1 = null;
          foam.core.Detachable sub2 = null;
          foam.core.Detachable init(foam.core.Detachable s1, foam.core.Detachable s2) {
            sub1 = s1;
            sub2 = s2;
            return this;
          }
          public void detach() {
            if ( sub1 != null ) sub1.detach();
            if ( sub2 != null ) sub2.detach();
            sub1 = null;
            sub2 = null;
          }
        }.init(sub1, sub2);
      `,
      swiftCode: `
        let s1 = self;
        let s2 = slot!;
        var feedback1 = false;
        var feedback2 = false;
        let l1 = <%=listener(\`
          if feedback1 { return; }
          if ( self!.isDifferent(s1.slotGet(), s2.slotGet()) ) {
            feedback1 = true;
            s2.slotSet(s1.slotGet());
            if ( self!.isDifferent(s1.slotGet(), s2.slotGet()) ) {
              s1.slotSet(s2.slotGet());
            }
            feedback1 = false;
          }
        \`)%>
        let l2 = <%=listener(\`
          if feedback2 { return; }
          if ( self!.isDifferent(s1.slotGet(), s2.slotGet()) ) {
            feedback2 = true;
            s1.slotSet(s2.slotGet());
            if ( self!.isDifferent(s1.slotGet(), s2.slotGet()) ) {
              s2.slotSet(s1.slotGet());
            }
            feedback2 = false;
          }
        \`)%>

        var sub1 = s1.slotSub(l1);
        var sub2 = s2.slotSub(l2);

        l2.executeListener(nil, nil);

        return AnonymousDetachable_create()
          .setDetachFn({() -> Void in
            sub1?.detach();
            sub2?.detach();
            sub1 = nil;
            sub2 = nil;
          })
          .build();
      `
    },
    {
      name: 'linkTo',
      androidCode: `
        return slot.linkFrom(this);
      `,
      swiftCode: `
        return slot!.linkFrom(self);
      `
    },
    {
      name: 'map',
      androidCode: `
        return foam.core.ExpressionSlot.ExpressionSlotBuilder(null)
          .setCode(fn)
          .setArgs(new foam.core.SlotInterface[] {this})
          .build();
      `,
      swiftCode: `
        return foam_core_ExpressionSlot.foam_core_ExpressionSlotBuilder(nil)
          .setCode(fn)
          .setArgs([self])
          .build();
      `
    },
    {
      name: 'follow',
      androidCode: `
        final foam.core.SlotInterface self = this;
        final foam.core.SlotInterface finalOther = other;
        foam.cross_platform.Listener l = new foam.cross_platform.Listener() {
          public void executeListener(foam.core.Detachable sub, Object[] args) {
            if ( isDifferent(self.slotGet(), finalOther.slotGet()) ) {
              self.slotSet(finalOther.slotGet());
            }
          }
        };
        l.executeListener(null, null);
        return other.slotSub(l);
      `,
      swiftCode: `
        let l = <%=listener(\`
          if ( self!.isDifferent(self!.slotGet(), other!.slotGet()) ) {
            self!.slotSet(other!.slotGet());
          }
        \`)%>
        l.executeListener(nil, nil)
        return other!.slotSub(l);
      `
    },
    {
      name: 'relateTo',
      androidCode: `
        final boolean[] feedback = { false };
        foam.cross_platform.Listener l1 = (sub, args) -> {
          if ( feedback[0] ) return;
          feedback[0] = true;
          slot.slotSet(f.executeFunction(new Object[]{slotGet()}));
          feedback[0] = false;
        };
        foam.cross_platform.Listener l2 = (sub, args) -> {
          if ( feedback[0] ) return;
          feedback[0] = true;
          slotSet(f.executeFunction(new Object[]{slot.slotGet()}));
          feedback[0] = false;
        };
        foam.core.Detachable sub = ArrayDetachable_create()
          .setArray(new foam.core.Detachable[] {
            slotSub(l1),
            slot.slotSub(l2)
          })
          .build();
        l1.executeListener(null, null);
        return sub;
      `
    },
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
      weak: true,
      androidSetter: `
        obj_isSet_ = true;
        obj_ = new java.lang.ref.WeakReference<>((foam.cross_platform.FObject) value);
      `,
      swiftSetter: `
        obj_isSet_ = true;
        obj_ = value as! foam_cross_platform_FObject? ;
      `
    },
    {
      class: 'FObjectProperty',
      of: 'foam.core.Property',
      name: 'prop',
      androidSetter: `
        prop_isSet_ = true;
        prop_ = (foam.core.Property) value;
      `,
      swiftSetter: `
        prop_isSet_ = true;
        prop_ = value as! foam_core_Property?;
      `
    },
  ],
  methods: [
    {
      name: 'slotGet',
      androidCode: `return getProp().f(getObj());`,
      swiftCode: `return getProp()!.f(getObj());`
    },
    {
      name: 'slotSet',
      androidCode: `getObj().setProperty(getProp().getName(), value);`,
      swiftCode: `getObj()!.setProperty(getProp()!.getName(), value);`
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
      `,
      swiftCode: `
        return getObj()!.sub(
          [
            "propertyChange",
            getProp()!.getName()!
          ],
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
      type: 'foam.cross_platform.FObject',
      name: 'getParentAsFObj',
      androidCode: `
        Object o = getParent().slotGet();
        return o instanceof foam.cross_platform.FObject ?
          (foam.cross_platform.FObject) o : null;
      `,
      swiftCode: `
        let o = getParent()!.slotGet();
        return o as? foam_cross_platform_FObject;
      `,
    },
    {
      name: 'init',
      androidCode: `
        getParent().slotSub(parentChange_listener());
        parentChange(null, null);
      `,
      swiftCode: `
        _ = getParent()!.slotSub(parentChange_listener());
        parentChange(nil, nil);
      `
    },
    {
      name: 'slotGet',
      androidCode: `
        foam.cross_platform.FObject o = getParentAsFObj();
        return o != null ? o.getProperty(getName()) : null;
      `,
      swiftCode: `
        let o = getParentAsFObj();
        return o != nil ? o!.getProperty(getName()) : nil;
      `
    },
    {
      name: 'slotSet',
      androidCode: `
        foam.cross_platform.FObject o = getParentAsFObj();
        if ( o != null ) o.setProperty(getName(), value);
      `,
      swiftCode: `
        let o = getParentAsFObj();
        o?.setProperty(getName(), value);
      `
    },
    {
      name: 'slotSub',
      androidCode: `
        return getValue$().slotSub(listener);
      `,
      swiftCode: `
        return getValue$().slotSub(listener);
      `
    }
  ],
  listeners: [
    {
      name: 'parentChange',
      androidCode: `
        if ( getPrevSub() != null ) getPrevSub().detach();
        foam.cross_platform.FObject o = getParentAsFObj();

        if ( getOf() == null && o != null ) setOf(o.getCls_());

        setPrevSub(o != null && o.getSlot(getName()) != null ?
          o.getSlot(getName()).slotSub(valueChange_listener()) : null);
        valueChange(null, null);
      `,
      swiftCode: `
        getPrevSub()?.detach();
        let o = getParentAsFObj();

        if getOf() == nil && o != nil { setOf(o!.getCls_()); }

        setPrevSub(o != nil && o!.getSlot(getName()) != nil ?
          o!.getSlot(getName())!.slotSub(valueChange_listener()) : nil);
        valueChange(nil, nil);
      `
    },
    {
      name: 'valueChange',
      androidCode: `
        foam.cross_platform.FObject parentValue = getParentAsFObj();
        setValue(parentValue != null ? parentValue.getProperty(getName()) : null);
      `,
      swiftCode: `
        let parentValue = getParentAsFObj();
        setValue(parentValue != nil ? parentValue!.getProperty(getName()) : nil);
      `
    }
  ]
});

foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines',
  name: 'ConstantSlotRefines',
  refines: 'foam.core.ConstantSlot',
  methods: [
    {
      name: 'slotGet',
      code: function() { return this.get(); },
      androidCode: `return getValue();`,
      swiftCode: `return getValue();`
    },
    {
      name: 'slotSet',
      code: function(value) { return this.set(value); },
      androidCode: `throw new RuntimeException("Cannot set ConstantSlot");`,
      swiftCode: `fatalError("Cannot set ConstantSlot");`
    },
    {
      name: 'slotSub',
      androidCode: `return <%=detachable('')%>;`,
      swiftCode: `return <%=detachable('')%>;`
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
      androidCode: `return getValue();`,
      swiftCode: `return getValue();`
    },
    {
      name: 'slotSet',
      code: function(value) { return this.set(value); },
      androidCode: `setValue(value);`,
      swiftCode: `setValue(value);`
    },
    {
      name: 'slotSub',
      androidCode: `return getValue$().slotSub(listener);`,
      swiftCode: `return getValue$().slotSub(listener);`
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
      `,
      swiftPostSet: `
        if newValue == nil { return; }
        _ = AsyncFunction_create()
          .setDelegate(AnonymousGenericFunction_create()
            .setFn({(args: [Any?]?) -> Any? in
              if self.getPromise() !== newValue { return nil; }
              self.setValue(self.getPromise()!.get());
              return nil;
            })
            .build()
          )
          .build()
          .executeFunction(nil);
      `
    }
  ],
  methods: [
    {
      name: 'slotSet',
      androidCode: `
        throw new RuntimeException(getCls_().getId() + " does not support setting.");
      `,
      swiftCode: `
        fatalError(getCls_()!.getId()! + " does not support setting.");
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
          return oldValue;
        }
        setPromise(null);
        return newValue;
      `,
      swiftPreSet: `
        if newValue is foam_cross_platform_Promise {
          setPromise(newValue);
          return oldValue;
        }
        setPromise(nil);
        return newValue;
      `,
      androidFactory: `
        Object[] args = new Object[getArgs().length];
        for ( int i = 0 ; i < args.length ; i++ ) {
          args[i] = getArgs()[i].slotGet();
        }
        return getCode().executeFunction(args);
      `,
      swiftFactory: `
        var args = [Any?](repeating: nil, count: getArgs()!.count);
        for i in 0..<args.count {
          args[i] = getArgs()![i].slotGet();
        }
        return getCode()!.executeFunction(args);
      `
    },
    {
      name: 'args',
      androidAdapt: `
        if ( newValue instanceof String[] == false ) {
          return (foam.core.SlotInterface[]) newValue;
        }
        String[] propNames = (String[]) newValue;
        foam.core.SlotInterface[] slots = new foam.core.SlotInterface[propNames.length];
        for ( int i = 0; i < slots.length ; i++ ) {
          slots[i] = getObj().getSlot(propNames[i]);
        }
        return slots;
      `,
      swiftAdapt: `
        if !(newValue is [String]) {
          return newValue as! [foam_core_SlotInterface]?;
        }
        let propNames = newValue as! [String];
        var slots = [foam_core_SlotInterface?](repeating: nil, count: propNames.count);
        for i in 0..<slots.count {
          slots[i] = getObj()!.getSlot(propNames[i]);
        }
        return slots as? [foam_core_SlotInterface];
      `,
      androidPostSet: `subToArgs_(newValue);`,
      swiftPostSet: `subToArgs_(newValue);`
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
      `,
      swiftCode: `
        let l = cleanup_listener();
        onDetach(AnonymousDetachable_create()
          .setDetachFn({() -> Void in
            l.executeListener(nil, nil);
          })
          .build()
        );
      `
    },
    {
      name: 'subToArgs_',
      args: [
        { type: 'foam.core.SlotInterface[]', name: 'args' }
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
      `,
      swiftCode: `
        cleanup(nil, nil);
        var subs = [foam_core_Detachable?](repeating: nil, count: args!.count);
        for i in 0..<args!.count {
          subs[i] = args![i].slotSub(invalidate_listener());
        }
        setCleanup_(AnonymousDetachable_create()
          .setDetachFn({() -> Void in
            for sub in subs { sub?.detach(); }
          })
          .build()
        );
      `
    }
  ],
  listeners: [
    {
      name: 'cleanup',
      androidCode: `
        if ( getCleanup_() != null ) getCleanup_().detach();
      `,
      swiftCode: `
        getCleanup_()?.detach();
      `
    },
    {
      name: 'invalidate',
      androidCode: `
        clearProperty("value");
      `,
      swiftCode: `
        clearProperty("value");
      `
    }
  ]
});

foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines',
  name: 'ArraySlotRefine',
  refines: 'foam.core.ArraySlot',
  methods: [
    {
      name: 'slotGet',
      androidCode: `
        return java.util.Arrays.stream(getSlots())
          .map(s -> s.slotGet())
          .toArray();
      `,
      swiftCode: `
        return getSlots()!
          .map({$0.slotGet()});
      `,
    },
    {
      name: 'slotSub',
      androidCode: `
        foam.core.Detachable[] subs = java.util.Arrays.stream(getSlots())
          .map(s -> s.slotSub(listener))
          .toArray(foam.core.Detachable[]::new);
        return ArrayDetachable_create().setArray(subs).build();
      `,
      swiftCode: `
        let subs = getSlots()!
          .map({$0.slotSub(listener)})
        return ArrayDetachable_create().setArray(subs).build();
      `,
    },
  ]
});
