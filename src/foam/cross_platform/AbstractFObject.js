foam.CLASS({
  package: 'foam.cross_platform',
  name: 'AbstractFObject',
  crossPlatformExtends: '',
  crossPlatformParentClass: null,
  implements: [
    'foam.cross_platform.FObject'
  ],
  requires: [
    'foam.core.ArraySlot',
    'foam.core.internal.PropertySlot',
    'foam.cross_platform.ListenerList',
    'foam.cross_platform.ZeroFunction',
    {
      path: 'foam.swift.AnonymousGenericFunction',
      flags: ['swift']
    },
    {
      path: 'foam.swift.AnonymousListener',
      flags: ['swift']
    },
    {
      path: 'foam.core.AnonymousDetachable',
      flags: ['swift']
    }
  ],
  properties: [
    {
      class: 'StringArrayProperty',
      name: 'errors_',
      hidden: true,
      transient: true,
      androidComparePropertyValues: `null`,
      swiftComparePropertyValues: `nil`,
      androidFactory: `
        foam.core.SlotInterface slot = ArraySlot_create()
          .setSlots(java.util.Arrays.stream(getCls_().getAxiomsByClass(foam.core.Property.CLS_()))
            .map(p -> ((foam.core.Property) p).createValidationSlot(this))
            .filter(p -> p != null)
            .toArray(foam.core.SlotInterface[]::new))
          .build()
          .map((args -> {
            return java.util.Arrays.stream((Object[])args[0])
              .filter(s -> s != null)
              .map(s -> s.toString())
              .toArray(String[]::new);
          }));
        errors__isSet_ = true;
        errors__ = (String[]) slot.slotGet();
        onDetach(getErrors_$().follow(slot));
        return errors__;
      `,
      swiftFactory: `
        let slot = ArraySlot_create()
          .setSlots(getCls_()!.getAxiomsByClass(foam_core_Property.CLS_())!
            .map({ ($0 as! foam_core_Property).createValidationSlot(self) })
            .filter({ $0 != nil; }))
          .build()
          .map(AnonymousGenericFunction_create()
            .setFn({(args: [Any?]?) -> Any? in
              return (args![0] as! [String?])
                .filter({$0 != nil})
                .map({String(describing: $0)});
            })
            .build())!;
        errors__isSet_ = true;
        errors__ = slot.slotGet() as? [String];
        onDetach(getErrors_$().follow(slot));
        return errors__;
      `
    },
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.ListenerList',
      name: 'listeners__',
      hidden: true,
      androidComparePropertyValues: `null`,
      swiftComparePropertyValues: 'nil',
      androidFactory: `
        return ListenerList_create().build();
      `,
      swiftFactory: `
        return ListenerList_create().build();
      `,
      androidSetter: `
        listeners___isSet_ = true;
        listeners___ = (foam.cross_platform.ListenerList) value;
      `,
      swiftSetter: `
        listeners___isSet_ = true;
        listeners___ = value as! foam_cross_platform_ListenerList?;
      `
    },
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.Context',
      swiftOptional: false,
      name: 'x',
      hidden: true,
      androidSetter: `
        x_ = value instanceof foam.cross_platform.Context ?
          (foam.cross_platform.Context) value : null;
        clearProperty("subX");
      `,
      swiftSetter: `
        x_ = value as? foam_cross_platform_Context;
        clearProperty("subX");
      `,
      androidComparePropertyValues: `null`,
      swiftComparePropertyValues: `nil`,
      androidGetter: `
        if ( x_ == null ) {
          return foam.cross_platform.Context.GLOBAL();
        }
        return x_;
      `,
      swiftGetter: `
        if x_ == nil {
          return foam_cross_platform_Context.GLOBAL();
        }
        return x_;
      `,
    },
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.Context',
      name: 'subX',
      hidden: true,
      swiftOptional: false,
      androidComparePropertyValues: `null`,
      swiftComparePropertyValues: `
        foam_cross_platform_ZeroFunction.foam_cross_platform_ZeroFunctionBuilder(nil).build()
      `,
      androidFactory: `
        Object[] exports = getCls_().getAxiomsByClass(foam.core.Export.CLS_());
        if ( exports.length == 0 ) return getX();
        foam.cross_platform.type.StringType st = foam.cross_platform.type.StringType.INSTANCE();

        java.util.Map exportMap = new java.util.HashMap();
        for ( Object eO : exports ) {
          foam.core.Export e = (foam.core.Export) eO;
          exportMap.put(e.getExportName(), st.isEmpty(e.getKey()) ?
            this : getSlot(e.getKey()));
        }

        return getX().createSubContext(exportMap);
      `,
      swiftFactory: `
        let exports = getCls_()!.getAxiomsByClass(foam_core_Export.CLS_())!;
        if exports.count == 0 { return getX(); }
        let st = foam_cross_platform_type_StringType.INSTANCE();

        var exportMap: [AnyHashable:Any?] = [:];
        for eO in exports {
          let e = eO as! foam_core_Export;
          exportMap[e.getExportName()!] = st.isEmpty(e.getKey()) ?
            self : getSlot(e.getKey());
        }

        return getX().createSubContext(exportMap)!;
      `
    },
  ],
  axioms: [
    {
      class: 'foam.cross_platform.code_generation.Extras',
      swiftCode: `
        deinit {
          detach();
        }
      `,
      androidCode: `
        public void finalize() {
          detach();
        }
      `
    }
  ],
  methods: [
    {
      name: 'init',
      documentation: `
        Overwritten by any class that cares to. This is called when an object is
        constructed.
      `,
      swiftCode: `// NOOP`,
      androidCode: `// NOOP`
    },
    {
      name: 'onDetach',
      androidCode: `
        final foam.core.Detachable d = detachable;
        sub(new String[] {"detach"}, <%=listener(\`
          sub.detach();
          d.detach();
        \`)%>);
      `,
      swiftCode: `
        _ = sub(["detach"], <%=listener(\`
          sub?.detach();
          detachable?.detach();
        \`)%>);
      `
    },
    {
      name: 'detach',
      androidCode: `
        pub(new Object[] {"detach"});
        if ( hasPropertySet("listeners__") ) {
          detachListeners_(getListeners__());
        }
      `,
      swiftCode: `
        _ = pub(["detach"]);
        if hasPropertySet("listeners__") {
          detachListeners_(getListeners__());
        }
      `
    },
    {
      name: 'detachListeners_',
      args: [
        { type: 'foam.cross_platform.ListenerList', name: 'listeners' }
      ],
      androidCode: `
        foam.cross_platform.ListenerList l = listeners;
        while ( l != null ) {
          if ( l.getSubscription() != null ) l.getSubscription().detach();
          for ( Object child : l.getChildren().values() ) {
            detachListeners_((foam.cross_platform.ListenerList) child);
          }
          l = l.getNext();
        }
      `,
      swiftCode: `
        var l = listeners;
        while l != nil {
          l!.getSubscription()?.detach();
          for (_, child) in l!.getChildren()! {
            detachListeners_(child as! foam_cross_platform_ListenerList?);
          }
          l = l!.getNext();
        }
      `
    },
    {
      name: 'toString',
      androidCode: `
        // TODO: JSONify
        return super.toString();
      `,
      swiftCode: `
        // TODO: JSONify
        return String(describing: self)
      `
    },
    {
      name: 'notify',
      type: 'Integer',
      args: [
        { type: 'foam.cross_platform.ListenerList', name: 'listeners' },
        { type: 'Any[]', name: 'args' }
      ],
      androidCode: `
        int count = 0;
        foam.cross_platform.ListenerList l = listeners;
        while ( l != null ) {
          foam.cross_platform.Listener listener = l.getListener();
          foam.core.Detachable sub = l.getSubscription();
          l = l.getNext();
          listener.executeListener(sub, args);
          count += 1;
        }
        return count;
      `,
      swiftCode: `
        var count = 0;
        var l = listeners;
        while l != nil {
          let listener = l!.getListener();
          let sub = l!.getSubscription();
          l = l!.getNext();
          listener?.executeListener(sub, args);
          count += 1;
        }
        return count;
      `
    },
    {
      type: 'Boolean',
      name: 'hasListeners',
      args: [
        { type: 'Any[]', name: 'args' }
      ],
      androidCode: `
        if ( ! hasPropertySet("listeners__") ) return false;
        foam.cross_platform.ListenerList listeners = getListeners__();
        int i = 0;
        while ( listeners != null ) {
          if ( listeners.getNext() != null ) return true;
          if ( i == args.length ) return false;
          if ( ! ( args[i] instanceof String ) ) break;
          listeners = (foam.cross_platform.ListenerList) listeners.getChildren().get(args[i]);
          i++;
        }
        return false;
      `,
      swiftCode: `
        if !hasPropertySet("listeners__") { return false; }
        var listeners = getListeners__();
        var i = 0;
        while listeners != nil {
          if listeners!.getNext() != nil { return true; }
          if i == args!.count { return false; }
          if !(args![i] is String) { break; }
          listeners = listeners!.getChildren()![args![i] as! AnyHashable]
            as? foam_cross_platform_ListenerList;
          i += 1;
        }
        return false;
      `
    },
    {
      name: 'pub',
      androidCode: `
        if ( ! hasPropertySet("listeners__") ) return 0;
        foam.cross_platform.ListenerList listeners = getListeners__();
        int count = notify(listeners.getNext(), args);
        if ( args == null ) return count;
        for ( Object arg : args ) {
          if ( arg instanceof String == false ) break;
          if ( ! listeners.getChildren().containsKey(arg) ) break;
          listeners = (foam.cross_platform.ListenerList) listeners.getChildren().get(arg);
          count += notify(listeners.getNext(), args);
        }
        return count;
      `,
      swiftCode: `
        if !hasPropertySet("listeners__") { return 0; }
        var listeners = getListeners__();
        var count = notify(listeners!.getNext(), args);
        if args == nil { return count; }
        for arg in args! {
          if !(arg is String) { break; }
          if !listeners!.getChildren()!.keys.contains(arg as! AnyHashable) { break; }
          listeners = listeners!.getChildren()![arg as! AnyHashable]
            as? foam_cross_platform_ListenerList;
          count += notify(listeners!.getNext(), args);
        }
        return count;
      `
    },
    {
      name: 'sub',
      androidCode: `
        foam.cross_platform.ListenerList listeners = getListeners__();
        if ( topics != null ) {
          for ( String topic : topics ) {
            if ( ! listeners.getChildren().containsKey(topic) ) {
              listeners.getChildren().put(topic, ListenerList_create().build());
            }
            listeners = (foam.cross_platform.ListenerList)
              listeners.getChildren().get(topic);
          }
        }

        foam.cross_platform.ListenerList node = ListenerList_create()
          .setNext(listeners.getNext())
          .setPrev(listeners)
          .setListener(listener)
          .build();
        node.setSubscription(new foam.core.Detachable() {
          public void detach() {
            if ( node.getNext() != null ) node.getNext().setPrev(node.getPrev());
            if ( node.getPrev() != null ) node.getPrev().setNext(node.getNext());
            node.clearProperty("listener");
            node.clearProperty("next");
            node.clearProperty("prev");
            node.clearProperty("subscription");
          }
        });

        if ( listeners.getNext() != null ) listeners.getNext().setPrev(node);
        listeners.setNext(node);

        return node.getSubscription();
      `,
      swiftCode: `
        var listeners = getListeners__();
        if topics != nil {
          for topic in topics! {
            if !listeners!.getChildren()!.keys.contains(topic) {
              var children = listeners!.getChildren()!
              children[topic] = ListenerList_create().build()
              listeners!.setChildren(children)
            }
            listeners = listeners!.getChildren()![topic]
              as? foam_cross_platform_ListenerList
          }
        }

        let node = ListenerList_create()
          .setNext(listeners!.getNext())
          .setPrev(listeners)
          .setListener(listener)
          .build();
        node.setSubscription(AnonymousDetachable_create()
          .setDetachFn({ [weak node] () -> Void in
            node?.getNext()?.setPrev(node?.getPrev());
            node?.getPrev()?.setNext(node?.getNext());
            node?.clearProperty("listener");
            node?.clearProperty("next");
            node?.clearProperty("prev");
            node?.clearProperty("subscription");
          })
          .build()
        );

        listeners!.getNext()?.setPrev(node);
        listeners!.setNext(node);

        return node.getSubscription();
      `
    },
    {
      name: 'compareTo',
      androidCode: `
        if ( o == null ) return 1;
        if ( this == o ) return 0;
        foam.cross_platform.FObject data = (foam.cross_platform.FObject) o;
        if ( getCls_() != data.getCls_() ) {
          return foam.cross_platform.Lib.compare(getCls_().getId(), data.getCls_().getId());
        }
        for ( Object a : data.getCls_().getAxiomsByClass(foam.core.Property.CLS_()) ) {
          foam.core.Property p = (foam.core.Property) a;
          if ( p.getComparePropertyValues() == null ) continue;
          int diff = (int) p.getComparePropertyValues().executeFunction(new Object[] {p.f(this), p.f(data)});
          if ( diff != 0 ) return diff;
        }
        return 0;
      `,
      swiftCode: `
        if o == nil { return 1 }
        if self === o as AnyObject { return 0 }
        let data = o as! foam_cross_platform_FObject
        if getCls_() !== data.getCls_() {
          return foam_cross_platform_Lib.compare(getCls_()!.getId(), data.getCls_()!.getId());
        }
        for a in data.getCls_()!.getAxiomsByClass(foam_core_Property.CLS_())! {
          let p = a as! foam_core_Property
          if p.getComparePropertyValues() == nil { continue; }
          let diff = p.getComparePropertyValues()!.executeFunction([p.f(self), p.f(data)]) as! Int;
          if diff != 0 { return diff; }
        }
        return 0
      `
    }
  ]
});
