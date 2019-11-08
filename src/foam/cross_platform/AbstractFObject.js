foam.CLASS({
  package: 'foam.cross_platform',
  name: 'AbstractFObject',
  crossPlatformExtends: '',
  crossPlatformParentClass: null,
  implements: [
    'foam.cross_platform.FObject'
  ],
  requires: [
    'foam.cross_platform.ListenerList'
  ],
  properties: [
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.ListenerList',
      name: 'listeners__',
      androidFactory: `
        return ListenerList_create().build();
      `,
      androidSetter: `
        listeners___isSet_ = true;
        listeners___ = (foam.cross_platform.ListenerList) value;
      `,
      swiftSetter: `
        listeners___isSet_ = true;
        listeners___ = value as! foam_cross_platform_ListenerList;
      `
    },
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.Context',
      name: 'x'
    },
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.Context',
      name: 'subX'
    },
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
        sub(new String[] {"detach"}, new foam.cross_platform.Listener() {
          public void executeListener(foam.core.Detachable sub, Object[] args) {
            sub.detach();
            d.detach();
          }
        });
      `
    },
    {
      name: 'detach',
      androidCode: `
        pub(new Object[] {"detach"});
        detachListeners_(getListeners__());
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
      `
    },
    {
      name: 'toString',
      androidCode: `
        // TODO: JSONify
        return super.toString();
      `
    },
    {
      name: 'notify',
      type: 'Integer',
      args: [
        { type: 'foam.cross_platform.ListenerList', name: 'listeners' },
        { type: 'Object[]', name: 'args' }
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

      `
    },
    {
      type: 'Boolean',
      name: 'hasListeners',
      args: [
        { type: 'Any[]', name: 'args' }
      ],
      androidCode: `
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
      `
    },
    {
      name: 'pub',
      androidCode: `
        foam.cross_platform.ListenerList listeners = getListeners__();
        int count = notify(listeners.getNext(), args);
        for ( Object arg : args ) {
          if ( arg instanceof String == false ) break;
          if ( ! listeners.getChildren().containsKey(arg) ) break;
          listeners = (foam.cross_platform.ListenerList) listeners.getChildren().get(arg);
          count += notify(listeners.getNext(), args);
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
      `
    },
  ]
});
