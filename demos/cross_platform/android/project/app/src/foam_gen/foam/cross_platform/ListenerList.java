// WARNING: GENERATED CODE, DO NOT MODIFY BY HAND!
package foam.cross_platform;


public class ListenerList extends foam.cross_platform.AbstractFObject {

  private foam.core.Slot children_$;

  protected foam.cross_platform.ListenerList prev_;

  private foam.core.Slot prev_$;

  public static foam.core.FObjectProperty PREV =
    init_PREV();

  protected foam.cross_platform.ListenerList next_;

  private boolean next_isSet_ =
    false;

  private foam.core.Slot next_$;

  public static foam.core.FObjectProperty NEXT =
    init_NEXT();

  protected java.util.Map children_;

  private boolean children_isSet_ =
    false;

  private boolean prev_isSet_ =
    false;

  public static foam.core.MapProperty CHILDREN =
    init_CHILDREN();

  protected foam.cross_platform.Listener listener_;

  private boolean listener_isSet_ =
    false;

  private foam.core.Slot listener_$;

  public static foam.core.FObjectProperty LISTENER =
    init_LISTENER();

  protected foam.core.Detachable subscription_;

  private boolean subscription_isSet_ =
    false;

  private foam.core.Slot subscription_$;

  public static foam.core.FObjectProperty SUBSCRIPTION =
    init_SUBSCRIPTION();

  public static foam.cross_platform.FoamClass CLS_ =
    initClassInfo_();


  public foam.core.Slot getPrev$() {

    if ( prev_$ == null ) {
      prev_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(PREV)
        .build();
    }
    return prev_$;
  }

  public foam.cross_platform.ListenerList getPrev() {

    if ( ! prev_isSet_ ) {
      return null;
    }
    return prev_;
  }

  private foam.cross_platform.ListenerList prev_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (foam.cross_platform.ListenerList) newValue;
  }

  public void setPrev(Object value) {

    boolean hasOldValue = hasPropertySet("prev");
    Object oldValue = hasOldValue ?
      getPrev() :
      null;
    foam.cross_platform.ListenerList castedValue = prev_adapt(oldValue, value, hasOldValue);
    
    prev_isSet_ = true;
    prev_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "prev", null };
    if ( hasListeners(args) ) {
      args[2] = getPrev$();
      pub(args);
    }
  }

  private static foam.core.FObjectProperty init_PREV() {

    return foam.core.FObjectProperty.FObjectPropertyBuilder(null) // TODO give context
      .setOf(foam.cross_platform.ListenerList.CLS_)
      .setType("foam.cross_platform.ListenerList")
      .setName("prev")
      .setForClass_("foam.cross_platform.ListenerList")
      .build();
  }

  public foam.core.Slot getNext$() {

    if ( next_$ == null ) {
      next_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(NEXT)
        .build();
    }
    return next_$;
  }

  public foam.cross_platform.ListenerList getNext() {

    if ( ! next_isSet_ ) {
      return null;
    }
    return next_;
  }

  private foam.cross_platform.ListenerList next_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (foam.cross_platform.ListenerList) newValue;
  }

  public void setNext(Object value) {

    boolean hasOldValue = hasPropertySet("next");
    Object oldValue = hasOldValue ?
      getNext() :
      null;
    foam.cross_platform.ListenerList castedValue = next_adapt(oldValue, value, hasOldValue);
    
    next_isSet_ = true;
    next_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "next", null };
    if ( hasListeners(args) ) {
      args[2] = getNext$();
      pub(args);
    }
  }

  private static foam.core.FObjectProperty init_NEXT() {

    return foam.core.FObjectProperty.FObjectPropertyBuilder(null) // TODO give context
      .setOf(foam.cross_platform.ListenerList.CLS_)
      .setType("foam.cross_platform.ListenerList")
      .setName("next")
      .setForClass_("foam.cross_platform.ListenerList")
      .build();
  }

  public foam.core.Slot getChildren$() {

    if ( children_$ == null ) {
      children_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(CHILDREN)
        .build();
    }
    return children_$;
  }

  protected java.util.Map children_factory_() {

    return new java.util.HashMap();
  }

  public java.util.Map getChildren() {

    if ( ! children_isSet_ ) {
      setProperty("children", children_factory_());
    }
    return children_;
  }

  public void setChildren(Object value) {

    children_isSet_ = true;
    children_ = (java.util.Map) value;
  }

  private static foam.core.MapProperty init_CHILDREN() {

    return foam.core.MapProperty.MapPropertyBuilder(null) // TODO give context
      .setName("children")
      .setForClass_("foam.cross_platform.ListenerList")
      .setAndroidSetter("\n        children_isSet_ = true;\n        children_ = (java.util.Map) value;\n      ")
      .build();
  }

  public foam.core.Slot getListener$() {

    if ( listener_$ == null ) {
      listener_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(LISTENER)
        .build();
    }
    return listener_$;
  }

  public foam.cross_platform.Listener getListener() {

    if ( ! listener_isSet_ ) {
      return null;
    }
    return listener_;
  }

  private foam.cross_platform.Listener listener_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (foam.cross_platform.Listener) newValue;
  }

  public void setListener(Object value) {

    boolean hasOldValue = hasPropertySet("listener");
    Object oldValue = hasOldValue ?
      getListener() :
      null;
    foam.cross_platform.Listener castedValue = listener_adapt(oldValue, value, hasOldValue);
    
    listener_isSet_ = true;
    listener_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "listener", null };
    if ( hasListeners(args) ) {
      args[2] = getListener$();
      pub(args);
    }
  }

  private static foam.core.FObjectProperty init_LISTENER() {

    return foam.core.FObjectProperty.FObjectPropertyBuilder(null) // TODO give context
      .setOf(foam.cross_platform.Listener.CLS_)
      .setType("foam.cross_platform.Listener")
      .setName("listener")
      .setForClass_("foam.cross_platform.ListenerList")
      .build();
  }

  public foam.core.Slot getSubscription$() {

    if ( subscription_$ == null ) {
      subscription_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(SUBSCRIPTION)
        .build();
    }
    return subscription_$;
  }

  public foam.core.Detachable getSubscription() {

    if ( ! subscription_isSet_ ) {
      return null;
    }
    return subscription_;
  }

  private foam.core.Detachable subscription_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (foam.core.Detachable) newValue;
  }

  public void setSubscription(Object value) {

    boolean hasOldValue = hasPropertySet("subscription");
    Object oldValue = hasOldValue ?
      getSubscription() :
      null;
    foam.core.Detachable castedValue = subscription_adapt(oldValue, value, hasOldValue);
    
    subscription_isSet_ = true;
    subscription_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "subscription", null };
    if ( hasListeners(args) ) {
      args[2] = getSubscription$();
      pub(args);
    }
  }

  private static foam.core.FObjectProperty init_SUBSCRIPTION() {

    return foam.core.FObjectProperty.FObjectPropertyBuilder(null) // TODO give context
      .setOf(foam.core.Detachable.CLS_)
      .setType("foam.core.Detachable")
      .setName("subscription")
      .setForClass_("foam.cross_platform.ListenerList")
      .build();
  }

  public void clearProperty(String name) {

    switch(name) {
    
      case "prev":
        prev_isSet_ = false;
        Object[] prevArgs = new Object[] { "propertyChange", "prev", null };
        if ( hasListeners(prevArgs) ) {
          prevArgs[2] = getPrev$();
          pub(prevArgs);
        }
        return;
    
    
      case "next":
        next_isSet_ = false;
        Object[] nextArgs = new Object[] { "propertyChange", "next", null };
        if ( hasListeners(nextArgs) ) {
          nextArgs[2] = getNext$();
          pub(nextArgs);
        }
        return;
    
    
      case "children":
        children_isSet_ = false;
        Object[] childrenArgs = new Object[] { "propertyChange", "children", null };
        if ( hasListeners(childrenArgs) ) {
          childrenArgs[2] = getChildren$();
          pub(childrenArgs);
        }
        return;
    
    
      case "listener":
        listener_isSet_ = false;
        Object[] listenerArgs = new Object[] { "propertyChange", "listener", null };
        if ( hasListeners(listenerArgs) ) {
          listenerArgs[2] = getListener$();
          pub(listenerArgs);
        }
        return;
    
    
      case "subscription":
        subscription_isSet_ = false;
        Object[] subscriptionArgs = new Object[] { "propertyChange", "subscription", null };
        if ( hasListeners(subscriptionArgs) ) {
          subscriptionArgs[2] = getSubscription$();
          pub(subscriptionArgs);
        }
        return;
    
    }
    
    super.clearProperty(name);
    
  }

  public Object getProperty(String name) {

    switch(name) {
    
      case "prev":
        return getPrev();
    
    
      case "next":
        return getNext();
    
    
      case "children":
        return getChildren();
    
    
      case "listener":
        return getListener();
    
    
      case "subscription":
        return getSubscription();
    
    }
    return super.getProperty(name);
  }

  public foam.core.Slot getSlot(String name) {

    switch(name) {
    
      case "prev":
        return getPrev$();
    
    
      case "next":
        return getNext$();
    
    
      case "children":
        return getChildren$();
    
    
      case "listener":
        return getListener$();
    
    
      case "subscription":
        return getSubscription$();
    
    }
    return super.getSlot(name);
  }

  public boolean hasPropertySet(String name) {

    switch(name) {
    
      case "prev":
        return prev_isSet_;
    
    
      case "next":
        return next_isSet_;
    
    
      case "children":
        return children_isSet_;
    
    
      case "listener":
        return listener_isSet_;
    
    
      case "subscription":
        return subscription_isSet_;
    
    }
    
    return super.hasPropertySet(name);
    
  }

  public void setProperty(String name, Object value) {

    switch(name) {
    
      case "prev":
        setPrev((foam.cross_platform.ListenerList) value);
        return;
    
    
      case "next":
        setNext((foam.cross_platform.ListenerList) value);
        return;
    
    
      case "children":
        setChildren((java.util.Map) value);
        return;
    
    
      case "listener":
        setListener((foam.cross_platform.Listener) value);
        return;
    
    
      case "subscription":
        setSubscription((foam.core.Detachable) value);
        return;
    
    }
    
    super.setProperty(name, value);
    
  }

  protected ListenerList () {

  }

  public foam.cross_platform.FoamClass getCls_() {

    return CLS_;
  }

  public static foam.cross_platform.FoamClass initClassInfo_() {

    return foam.cross_platform.FoamClass.FoamClassBuilder(null) // TODO give context
      .setId("foam.cross_platform.ListenerList")
      .setParent(foam.cross_platform.AbstractFObject.CLS_)
      .setAxioms(new Object[] {foam.cross_platform.ListenerList.PREV, foam.cross_platform.ListenerList.NEXT, foam.cross_platform.ListenerList.CHILDREN, foam.cross_platform.ListenerList.LISTENER, foam.cross_platform.ListenerList.SUBSCRIPTION})
      .build();
  }

  public static Builder ListenerListBuilder(foam.cross_platform.Context x) {

    return new Builder();
  }
  public static class Builder {

    private boolean prev_isSet_ =
      false;

    private foam.cross_platform.ListenerList prev_;

    private boolean next_isSet_ =
      false;

    private foam.cross_platform.ListenerList next_;

    private boolean children_isSet_ =
      false;

    private java.util.Map children_;

    private boolean listener_isSet_ =
      false;

    private foam.cross_platform.Listener listener_;

    private boolean subscription_isSet_ =
      false;

    private foam.core.Detachable subscription_;


    public Builder setPrev(foam.cross_platform.ListenerList value) {

      prev_isSet_ = true;
      prev_ = value;
      return this;
    }

    public Builder setNext(foam.cross_platform.ListenerList value) {

      next_isSet_ = true;
      next_ = value;
      return this;
    }

    public Builder setChildren(java.util.Map value) {

      children_isSet_ = true;
      children_ = value;
      return this;
    }

    public Builder setListener(foam.cross_platform.Listener value) {

      listener_isSet_ = true;
      listener_ = value;
      return this;
    }

    public Builder setSubscription(foam.core.Detachable value) {

      subscription_isSet_ = true;
      subscription_ = value;
      return this;
    }

    private Builder() {

    }

    public ListenerList build() {

      ListenerList o = new ListenerList();
      
      if ( prev_isSet_ ) {
        o.setPrev(prev_);
      }
      
      if ( next_isSet_ ) {
        o.setNext(next_);
      }
      
      if ( children_isSet_ ) {
        o.setChildren(children_);
      }
      
      if ( listener_isSet_ ) {
        o.setListener(listener_);
      }
      
      if ( subscription_isSet_ ) {
        o.setSubscription(subscription_);
      }
      
      o.init();
      return o;
    }
  }
}