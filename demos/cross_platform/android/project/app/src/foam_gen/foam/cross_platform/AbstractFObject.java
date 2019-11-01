// WARNING: GENERATED CODE, DO NOT MODIFY BY HAND!
package foam.cross_platform;


public class AbstractFObject implements foam.cross_platform.FObject, foam.core.Detachable {

  private foam.core.Slot x_$;

  protected foam.cross_platform.ListenerList listeners__;

  private foam.core.Slot listeners__$;

  public static foam.core.FObjectProperty LISTENERS_ =
    init_LISTENERS_();

  protected foam.cross_platform.Context x_;

  private boolean x_isSet_ =
    false;

  private boolean listeners__isSet_ =
    false;

  public static foam.core.FObjectProperty X =
    init_X();

  protected foam.cross_platform.Context subX_;

  private boolean subX_isSet_ =
    false;

  private foam.core.Slot subX_$;

  public static foam.core.FObjectProperty SUB_X =
    init_SUB_X();

  public static foam.cross_platform.FoamClass CLS_ =
    initClassInfo_();


  protected foam.cross_platform.ListenerList.Builder ListenerList_create() {

    return foam.cross_platform.ListenerList.ListenerListBuilder(getSubX());
  }

  public foam.core.Slot getListeners_$() {

    if ( listeners__$ == null ) {
      listeners__$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(LISTENERS_)
        .build();
    }
    return listeners__$;
  }

  protected foam.cross_platform.ListenerList listeners__factory_() {

    return ListenerList_create().build();
  }

  public foam.cross_platform.ListenerList getListeners_() {

    if ( ! listeners__isSet_ ) {
      setProperty("listeners_", listeners__factory_());
    }
    return listeners__;
  }

  public void setListeners_(Object value) {

    listeners__isSet_ = true;
    listeners__ = (foam.cross_platform.ListenerList) value;
  }

  private static foam.core.FObjectProperty init_LISTENERS_() {

    return foam.core.FObjectProperty.FObjectPropertyBuilder(null) // TODO give context
      .setOf(foam.cross_platform.ListenerList.CLS_)
      .setType("foam.cross_platform.ListenerList")
      .setName("listeners_")
      .setForClass_("foam.cross_platform.AbstractFObject")
      .setAndroidSetter("\n        listeners__isSet_ = true;\n        listeners__ = (foam.cross_platform.ListenerList) value;\n      ")
      .setAndroidFactory("\n        return ListenerList_create().build();\n      ")
      .build();
  }

  public foam.core.Slot getX$() {

    if ( x_$ == null ) {
      x_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(X)
        .build();
    }
    return x_$;
  }

  public foam.cross_platform.Context getX() {

    if ( ! x_isSet_ ) {
      return null;
    }
    return x_;
  }

  private foam.cross_platform.Context x_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (foam.cross_platform.Context) newValue;
  }

  public void setX(Object value) {

    boolean hasOldValue = hasPropertySet("x");
    Object oldValue = hasOldValue ?
      getX() :
      null;
    foam.cross_platform.Context castedValue = x_adapt(oldValue, value, hasOldValue);
    
    x_isSet_ = true;
    x_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "x", null };
    if ( hasListeners(args) ) {
      args[2] = getX$();
      pub(args);
    }
  }

  private static foam.core.FObjectProperty init_X() {

    return foam.core.FObjectProperty.FObjectPropertyBuilder(null) // TODO give context
      .setOf(foam.cross_platform.Context.CLS_)
      .setType("foam.cross_platform.Context")
      .setName("x")
      .setForClass_("foam.cross_platform.AbstractFObject")
      .build();
  }

  public foam.core.Slot getSubX$() {

    if ( subX_$ == null ) {
      subX_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(SUB_X)
        .build();
    }
    return subX_$;
  }

  public foam.cross_platform.Context getSubX() {

    if ( ! subX_isSet_ ) {
      return null;
    }
    return subX_;
  }

  private foam.cross_platform.Context subX_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (foam.cross_platform.Context) newValue;
  }

  public void setSubX(Object value) {

    boolean hasOldValue = hasPropertySet("subX");
    Object oldValue = hasOldValue ?
      getSubX() :
      null;
    foam.cross_platform.Context castedValue = subX_adapt(oldValue, value, hasOldValue);
    
    subX_isSet_ = true;
    subX_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "subX", null };
    if ( hasListeners(args) ) {
      args[2] = getSubX$();
      pub(args);
    }
  }

  private static foam.core.FObjectProperty init_SUB_X() {

    return foam.core.FObjectProperty.FObjectPropertyBuilder(null) // TODO give context
      .setOf(foam.cross_platform.Context.CLS_)
      .setType("foam.cross_platform.Context")
      .setName("subX")
      .setForClass_("foam.cross_platform.AbstractFObject")
      .build();
  }

  public void init() {

    // NOOP
  }

  public void onDetach(foam.core.Detachable detachable) {

    final foam.core.Detachable d = detachable;
    sub(new String[] {"detach"}, new foam.cross_platform.Listener() {
      public void executeListener(foam.core.Detachable sub, Object[] args) {
        sub.detach();
        d.detach();
      }
    });
  }

  public void detach() {

    pub(new Object[] {"detach"});
    detachListeners_(getListeners_());
  }

  public void detachListeners_(foam.cross_platform.ListenerList listeners) {

    foam.cross_platform.ListenerList l = listeners;
    while ( l != null ) {
      if ( l.getSubscription() != null ) l.getSubscription().detach();
      for ( Object child : l.getChildren().values() ) {
        detachListeners_((foam.cross_platform.ListenerList) child);
      }
      l = l.getNext();
    }
  }

  public String toString() {

    // TODO: JSONify
    return super.toString();
  }

  public int notify(foam.cross_platform.ListenerList listeners, Object[] args) {

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
    
  }

  public boolean hasListeners(Object[] args) {

    foam.cross_platform.ListenerList listeners = getListeners_();
    int i = 0;
    while ( listeners != null ) {
      if ( listeners.getNext() != null ) return true;
      if ( i == args.length ) return false;
      if ( ! ( args[i] instanceof String ) ) break;
      listeners = (foam.cross_platform.ListenerList) listeners.getChildren().get(args[i]);
      i++;
    }
    return false;
  }

  public int pub(Object[] args) {

    foam.cross_platform.ListenerList listeners = getListeners_();
    int count = notify(listeners.getNext(), args);
    for ( Object arg : args ) {
      if ( arg instanceof String == false ) break;
      if ( ! listeners.getChildren().containsKey(arg) ) break;
      listeners = (foam.cross_platform.ListenerList) listeners.getChildren().get(arg);
      count += notify(listeners.getNext(), args);
    }
    return count;
  }

  public foam.core.Detachable sub(String[] topics, foam.cross_platform.Listener listener) {

    foam.cross_platform.ListenerList listeners = getListeners_();
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
  }

  public void clearProperty(String name) {

    switch(name) {
    
      case "listeners_":
        listeners__isSet_ = false;
        Object[] listeners_Args = new Object[] { "propertyChange", "listeners_", null };
        if ( hasListeners(listeners_Args) ) {
          listeners_Args[2] = getListeners_$();
          pub(listeners_Args);
        }
        return;
    
    
      case "x":
        x_isSet_ = false;
        Object[] xArgs = new Object[] { "propertyChange", "x", null };
        if ( hasListeners(xArgs) ) {
          xArgs[2] = getX$();
          pub(xArgs);
        }
        return;
    
    
      case "subX":
        subX_isSet_ = false;
        Object[] subXArgs = new Object[] { "propertyChange", "subX", null };
        if ( hasListeners(subXArgs) ) {
          subXArgs[2] = getSubX$();
          pub(subXArgs);
        }
        return;
    
    }
    
  }

  public Object getProperty(String name) {

    switch(name) {
    
      case "listeners_":
        return getListeners_();
    
    
      case "x":
        return getX();
    
    
      case "subX":
        return getSubX();
    
    }
    return null;
  }

  public foam.core.Slot getSlot(String name) {

    switch(name) {
    
      case "listeners_":
        return getListeners_$();
    
    
      case "x":
        return getX$();
    
    
      case "subX":
        return getSubX$();
    
    }
    return null;
  }

  public boolean hasPropertySet(String name) {

    switch(name) {
    
      case "listeners_":
        return listeners__isSet_;
    
    
      case "x":
        return x_isSet_;
    
    
      case "subX":
        return subX_isSet_;
    
    }
    
    return false;
    
  }

  public void setProperty(String name, Object value) {

    switch(name) {
    
      case "listeners_":
        setListeners_((foam.cross_platform.ListenerList) value);
        return;
    
    
      case "x":
        setX((foam.cross_platform.Context) value);
        return;
    
    
      case "subX":
        setSubX((foam.cross_platform.Context) value);
        return;
    
    }
    
  }

  protected AbstractFObject () {

  }

  public foam.cross_platform.FoamClass getCls_() {

    return CLS_;
  }

  public static foam.cross_platform.FoamClass initClassInfo_() {

    return foam.cross_platform.FoamClass.FoamClassBuilder(null) // TODO give context
      .setId("foam.cross_platform.AbstractFObject")
      .setParent(null)
      .setAxioms(new Object[] {foam.core.Implements.ImplementsBuilder(null) // TODO give context
      .setPath("foam.cross_platform.FObject")
      .build(), foam.core.Requires.RequiresBuilder(null) // TODO give context
      .setName("ListenerList")
      .setPath("foam.cross_platform.ListenerList")
      .build(), foam.cross_platform.AbstractFObject.LISTENERS_, foam.cross_platform.AbstractFObject.X, foam.cross_platform.AbstractFObject.SUB_X, foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("onDetach")
      .setForClass_("foam.cross_platform.AbstractFObject")
      .setArgs(new foam.core.Argument[] { foam.core.Argument.ArgumentBuilder(null) // TODO give context
      .setName("detachable")
      .setType("foam.core.Detachable")
      .build() })
      .setAndroidCode("\n        final foam.core.Detachable d = detachable;\n        sub(new String[] {\"detach\"}, new foam.cross_platform.Listener() {\n          public void executeListener(foam.core.Detachable sub, Object[] args) {\n            sub.detach();\n            d.detach();\n          }\n        });\n      ")
      .build(), foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("detach")
      .setType("Void")
      .setAsync(true)
      .setForClass_("foam.cross_platform.AbstractFObject")
      .setArgs(new foam.core.Argument[] {  })
      .setAndroidCode("\n        pub(new Object[] {\"detach\"});\n        detachListeners_(getListeners_());\n      ")
      .build(), foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("detachListeners_")
      .setForClass_("foam.cross_platform.AbstractFObject")
      .setArgs(new foam.core.Argument[] { foam.core.Argument.ArgumentBuilder(null) // TODO give context
      .setName("listeners")
      .setType("foam.cross_platform.ListenerList")
      .build() })
      .setAndroidCode("\n        foam.cross_platform.ListenerList l = listeners;\n        while ( l != null ) {\n          if ( l.getSubscription() != null ) l.getSubscription().detach();\n          for ( Object child : l.getChildren().values() ) {\n            detachListeners_((foam.cross_platform.ListenerList) child);\n          }\n          l = l.getNext();\n        }\n      ")
      .build(), foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("notify")
      .setType("Integer")
      .setForClass_("foam.cross_platform.AbstractFObject")
      .setArgs(new foam.core.Argument[] { foam.core.Argument.ArgumentBuilder(null) // TODO give context
      .setName("listeners")
      .setType("foam.cross_platform.ListenerList")
      .build(), foam.core.Argument.ArgumentBuilder(null) // TODO give context
      .setName("args")
      .setType("Object[]")
      .build() })
      .setAndroidCode("\n        int count = 0;\n        foam.cross_platform.ListenerList l = listeners;\n        while ( l != null ) {\n          foam.cross_platform.Listener listener = l.getListener();\n          foam.core.Detachable sub = l.getSubscription();\n          l = l.getNext();\n          listener.executeListener(sub, args);\n          count += 1;\n        }\n        return count;\n\n      ")
      .build(), foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("pub")
      .setType("Integer")
      .setForClass_("foam.cross_platform.AbstractFObject")
      .setArgs(new foam.core.Argument[] { foam.core.Argument.ArgumentBuilder(null) // TODO give context
      .setName("args")
      .setType("Object[]")
      .build() })
      .setAndroidCode("\n        foam.cross_platform.ListenerList listeners = getListeners_();\n        int count = notify(listeners.getNext(), args);\n        for ( Object arg : args ) {\n          if ( arg instanceof String == false ) break;\n          if ( ! listeners.getChildren().containsKey(arg) ) break;\n          listeners = (foam.cross_platform.ListenerList) listeners.getChildren().get(arg);\n          count += notify(listeners.getNext(), args);\n        }\n        return count;\n      ")
      .build(), foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("sub")
      .setType("foam.core.Detachable")
      .setForClass_("foam.cross_platform.AbstractFObject")
      .setArgs(new foam.core.Argument[] { foam.core.Argument.ArgumentBuilder(null) // TODO give context
      .setName("topics")
      .setType("String[]")
      .build(), foam.core.Argument.ArgumentBuilder(null) // TODO give context
      .setName("listener")
      .setType("foam.cross_platform.Listener")
      .build() })
      .setAndroidCode("\n        foam.cross_platform.ListenerList listeners = getListeners_();\n        if ( topics != null ) {\n          for ( String topic : topics ) {\n            if ( ! listeners.getChildren().containsKey(topic) ) {\n              listeners.getChildren().put(topic, ListenerList_create().build());\n            }\n            listeners = (foam.cross_platform.ListenerList)\n              listeners.getChildren().get(topic);\n          }\n        }\n\n        foam.cross_platform.ListenerList node = ListenerList_create()\n          .setNext(listeners.getNext())\n          .setPrev(listeners)\n          .setListener(listener)\n          .build();\n        node.setSubscription(new foam.core.Detachable() {\n          public void detach() {\n            if ( node.getNext() != null ) node.getNext().setPrev(node.getPrev());\n            if ( node.getPrev() != null ) node.getPrev().setNext(node.getNext());\n            node.clearProperty(\"listener\");\n            node.clearProperty(\"next\");\n            node.clearProperty(\"prev\");\n            node.clearProperty(\"subscription\");\n          }\n        });\n\n        if ( listeners.getNext() != null ) listeners.getNext().setPrev(node);\n        listeners.setNext(node);\n\n        return node.getSubscription();\n      ")
      .build()})
      .build();
  }

  public static Builder AbstractFObjectBuilder(foam.cross_platform.Context x) {

    return new Builder();
  }
  public static class Builder {

    private boolean listeners__isSet_ =
      false;

    private foam.cross_platform.ListenerList listeners__;

    private boolean x_isSet_ =
      false;

    private foam.cross_platform.Context x_;

    private boolean subX_isSet_ =
      false;

    private foam.cross_platform.Context subX_;


    public Builder setListeners_(foam.cross_platform.ListenerList value) {

      listeners__isSet_ = true;
      listeners__ = value;
      return this;
    }

    public Builder setX(foam.cross_platform.Context value) {

      x_isSet_ = true;
      x_ = value;
      return this;
    }

    public Builder setSubX(foam.cross_platform.Context value) {

      subX_isSet_ = true;
      subX_ = value;
      return this;
    }

    private Builder() {

    }

    public AbstractFObject build() {

      AbstractFObject o = new AbstractFObject();
      
      if ( listeners__isSet_ ) {
        o.setListeners_(listeners__);
      }
      
      if ( x_isSet_ ) {
        o.setX(x_);
      }
      
      if ( subX_isSet_ ) {
        o.setSubX(subX_);
      }
      
      o.init();
      return o;
    }
  }
}