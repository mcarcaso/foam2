// WARNING: GENERATED CODE, DO NOT MODIFY BY HAND!
package foam.core;


public class EventProxy extends foam.cross_platform.AbstractFObject {

  public static foam.core.Property PARENT =
    init_PARENT();

  protected Object dest_;

  private foam.core.Slot dest_$;

  public static foam.core.Property DEST =
    init_DEST();

  protected String[] topic_;

  private boolean topic_isSet_ =
    false;

  private foam.core.Slot topic_$;

  public static foam.core.StringArrayProperty TOPIC =
    init_TOPIC();

  protected boolean active_;

  private boolean active_isSet_ =
    false;

  private foam.core.Slot active_$;

  public static foam.core.BooleanProperty ACTIVE =
    init_ACTIVE();

  protected Object parent_;

  private boolean parent_isSet_ =
    false;

  private foam.core.Slot parent_$;

  private boolean dest_isSet_ =
    false;

  protected Object children_;

  private boolean children_isSet_ =
    false;

  private foam.core.Slot children_$;

  public static foam.core.Property CHILDREN =
    init_CHILDREN();

  protected Object src_;

  private boolean src_isSet_ =
    false;

  private foam.core.Slot src_$;

  public static foam.core.Property SRC =
    init_SRC();

  protected Object subscription_;

  private boolean subscription_isSet_ =
    false;

  private foam.core.Slot subscription_$;

  public static foam.core.Property SUBSCRIPTION =
    init_SUBSCRIPTION();

  private foam.cross_platform.Listener onEvent_listener_var;

  public static foam.cross_platform.FoamClass CLS_ =
    initClassInfo_();


  public foam.core.Slot getDest$() {

    if ( dest_$ == null ) {
      dest_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(DEST)
        .build();
    }
    return dest_$;
  }

  public Object getDest() {

    if ( ! dest_isSet_ ) {
      return null;
    }
    return dest_;
  }

  private Object dest_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setDest(Object value) {

    boolean hasOldValue = hasPropertySet("dest");
    Object oldValue = hasOldValue ?
      getDest() :
      null;
    Object castedValue = dest_adapt(oldValue, value, hasOldValue);
    
    dest_isSet_ = true;
    dest_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "dest", null };
    if ( hasListeners(args) ) {
      args[2] = getDest$();
      pub(args);
    }
  }

  private static foam.core.Property init_DEST() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("dest")
      .setForClass_("foam.core.EventProxy")
      .build();
  }

  public foam.core.Slot getTopic$() {

    if ( topic_$ == null ) {
      topic_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(TOPIC)
        .build();
    }
    return topic_$;
  }

  protected String[] topic_factory_() {

    return new String[0];
  }

  public String[] getTopic() {

    if ( ! topic_isSet_ ) {
      setProperty("topic", topic_factory_());
    }
    return topic_;
  }

  private String[] topic_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String[]) newValue;
  }

  public void setTopic(Object value) {

    boolean hasOldValue = hasPropertySet("topic");
    Object oldValue = hasOldValue ?
      getTopic() :
      null;
    String[] castedValue = topic_adapt(oldValue, value, hasOldValue);
    
    topic_isSet_ = true;
    topic_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "topic", null };
    if ( hasListeners(args) ) {
      args[2] = getTopic$();
      pub(args);
    }
  }

  private static foam.core.StringArrayProperty init_TOPIC() {

    return foam.core.StringArrayProperty.StringArrayPropertyBuilder(null) // TODO give context
      .setFactory(null)
      .setName("topic")
      .setForClass_("foam.core.EventProxy")
      .build();
  }

  public foam.core.Slot getActive$() {

    if ( active_$ == null ) {
      active_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(ACTIVE)
        .build();
    }
    return active_$;
  }

  public boolean getActive() {

    if ( ! active_isSet_ ) {
      return false;
    }
    return active_;
  }

  private boolean active_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (boolean) newValue;
  }

  public void setActive(Object value) {

    boolean hasOldValue = hasPropertySet("active");
    Object oldValue = hasOldValue ?
      getActive() :
      null;
    boolean castedValue = active_adapt(oldValue, value, hasOldValue);
    
    active_isSet_ = true;
    active_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "active", null };
    if ( hasListeners(args) ) {
      args[2] = getActive$();
      pub(args);
    }
  }

  private static foam.core.BooleanProperty init_ACTIVE() {

    return foam.core.BooleanProperty.BooleanPropertyBuilder(null) // TODO give context
      .setValue(false)
      .setName("active")
      .setPostSet(null)
      .setForClass_("foam.core.EventProxy")
      .setSwiftPostSet("\nfor child in children.values {\n  child.active = !newValue\n}\n\nif (oldValue as? Bool ?? false) != newValue {\n  if newValue {\n    self.doSub()\n  } else {\n    self.doUnsub()\n  }\n}\n      ")
      .build();
  }

  public foam.core.Slot getParent$() {

    if ( parent_$ == null ) {
      parent_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(PARENT)
        .build();
    }
    return parent_$;
  }

  public Object getParent() {

    if ( ! parent_isSet_ ) {
      return null;
    }
    return parent_;
  }

  private Object parent_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setParent(Object value) {

    boolean hasOldValue = hasPropertySet("parent");
    Object oldValue = hasOldValue ?
      getParent() :
      null;
    Object castedValue = parent_adapt(oldValue, value, hasOldValue);
    
    parent_isSet_ = true;
    parent_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "parent", null };
    if ( hasListeners(args) ) {
      args[2] = getParent$();
      pub(args);
    }
  }

  private static foam.core.Property init_PARENT() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("parent")
      .setForClass_("foam.core.EventProxy")
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

  public Object getChildren() {

    if ( ! children_isSet_ ) {
      return null;
    }
    return children_;
  }

  private Object children_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setChildren(Object value) {

    boolean hasOldValue = hasPropertySet("children");
    Object oldValue = hasOldValue ?
      getChildren() :
      null;
    Object castedValue = children_adapt(oldValue, value, hasOldValue);
    
    children_isSet_ = true;
    children_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "children", null };
    if ( hasListeners(args) ) {
      args[2] = getChildren$();
      pub(args);
    }
  }

  private static foam.core.Property init_CHILDREN() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("children")
      .setFactory(null)
      .setForClass_("foam.core.EventProxy")
      .setSwiftFactory("return [:]")
      .build();
  }

  public foam.core.Slot getSrc$() {

    if ( src_$ == null ) {
      src_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(SRC)
        .build();
    }
    return src_$;
  }

  public Object getSrc() {

    if ( ! src_isSet_ ) {
      return null;
    }
    return src_;
  }

  private Object src_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setSrc(Object value) {

    boolean hasOldValue = hasPropertySet("src");
    Object oldValue = hasOldValue ?
      getSrc() :
      null;
    Object castedValue = src_adapt(oldValue, value, hasOldValue);
    
    src_isSet_ = true;
    src_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "src", null };
    if ( hasListeners(args) ) {
      args[2] = getSrc$();
      pub(args);
    }
  }

  private static foam.core.Property init_SRC() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("src")
      .setPostSet(null)
      .setForClass_("foam.core.EventProxy")
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

  public Object getSubscription() {

    if ( ! subscription_isSet_ ) {
      return null;
    }
    return subscription_;
  }

  private Object subscription_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setSubscription(Object value) {

    boolean hasOldValue = hasPropertySet("subscription");
    Object oldValue = hasOldValue ?
      getSubscription() :
      null;
    Object castedValue = subscription_adapt(oldValue, value, hasOldValue);
    
    subscription_isSet_ = true;
    subscription_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "subscription", null };
    if ( hasListeners(args) ) {
      args[2] = getSubscription$();
      pub(args);
    }
  }

  private static foam.core.Property init_SUBSCRIPTION() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("subscription")
      .setForClass_("foam.core.EventProxy")
      .build();
  }

  public void init() {

    throw new RuntimeException("init is not implemented");
  }

  public void doSub() {

    throw new RuntimeException("doSub is not implemented");
  }

  public void doUnsub() {

    throw new RuntimeException("doUnsub is not implemented");
  }

  public void removeChild(foam.core.EventProxy c) {

    throw new RuntimeException("removeChild is not implemented");
  }

  public foam.core.EventProxy getChild(String key) {

    throw new RuntimeException("getChild is not implemented");
  }

  public void addProxy(String[] topics) {

    throw new RuntimeException("addProxy is not implemented");
  }

  public void onEvent(foam.core.Detachable sub, Object[] args) {

    throw new RuntimeException("onEvent is not implemented");
  }

  public foam.cross_platform.Listener onEvent_listener() {

    if ( onEvent_listener_var == null ) {
      final EventProxy obj = this;
      onEvent_listener_var = new foam.cross_platform.Listener() {
        public void executeListener(foam.core.Detachable sub, Object[] args) {
          obj.onEvent(sub, args);
        }
      };
    }
    return onEvent_listener_var;
  }

  public void clearProperty(String name) {

    switch(name) {
    
      case "dest":
        dest_isSet_ = false;
        Object[] destArgs = new Object[] { "propertyChange", "dest", null };
        if ( hasListeners(destArgs) ) {
          destArgs[2] = getDest$();
          pub(destArgs);
        }
        return;
    
    
      case "topic":
        topic_isSet_ = false;
        Object[] topicArgs = new Object[] { "propertyChange", "topic", null };
        if ( hasListeners(topicArgs) ) {
          topicArgs[2] = getTopic$();
          pub(topicArgs);
        }
        return;
    
    
      case "active":
        active_isSet_ = false;
        Object[] activeArgs = new Object[] { "propertyChange", "active", null };
        if ( hasListeners(activeArgs) ) {
          activeArgs[2] = getActive$();
          pub(activeArgs);
        }
        return;
    
    
      case "parent":
        parent_isSet_ = false;
        Object[] parentArgs = new Object[] { "propertyChange", "parent", null };
        if ( hasListeners(parentArgs) ) {
          parentArgs[2] = getParent$();
          pub(parentArgs);
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
    
    
      case "src":
        src_isSet_ = false;
        Object[] srcArgs = new Object[] { "propertyChange", "src", null };
        if ( hasListeners(srcArgs) ) {
          srcArgs[2] = getSrc$();
          pub(srcArgs);
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
    
      case "dest":
        return getDest();
    
    
      case "topic":
        return getTopic();
    
    
      case "active":
        return getActive();
    
    
      case "parent":
        return getParent();
    
    
      case "children":
        return getChildren();
    
    
      case "src":
        return getSrc();
    
    
      case "subscription":
        return getSubscription();
    
    }
    return super.getProperty(name);
  }

  public foam.core.Slot getSlot(String name) {

    switch(name) {
    
      case "dest":
        return getDest$();
    
    
      case "topic":
        return getTopic$();
    
    
      case "active":
        return getActive$();
    
    
      case "parent":
        return getParent$();
    
    
      case "children":
        return getChildren$();
    
    
      case "src":
        return getSrc$();
    
    
      case "subscription":
        return getSubscription$();
    
    }
    return super.getSlot(name);
  }

  public boolean hasPropertySet(String name) {

    switch(name) {
    
      case "dest":
        return dest_isSet_;
    
    
      case "topic":
        return topic_isSet_;
    
    
      case "active":
        return active_isSet_;
    
    
      case "parent":
        return parent_isSet_;
    
    
      case "children":
        return children_isSet_;
    
    
      case "src":
        return src_isSet_;
    
    
      case "subscription":
        return subscription_isSet_;
    
    }
    
    return super.hasPropertySet(name);
    
  }

  public void setProperty(String name, Object value) {

    switch(name) {
    
      case "dest":
        setDest((Object) value);
        return;
    
    
      case "topic":
        setTopic((String[]) value);
        return;
    
    
      case "active":
        setActive((boolean) value);
        return;
    
    
      case "parent":
        setParent((Object) value);
        return;
    
    
      case "children":
        setChildren((Object) value);
        return;
    
    
      case "src":
        setSrc((Object) value);
        return;
    
    
      case "subscription":
        setSubscription((Object) value);
        return;
    
    }
    
    super.setProperty(name, value);
    
  }

  protected EventProxy () {

  }

  public foam.cross_platform.FoamClass getCls_() {

    return CLS_;
  }

  public static foam.cross_platform.FoamClass initClassInfo_() {

    return foam.cross_platform.FoamClass.FoamClassBuilder(null) // TODO give context
      .setId("foam.core.EventProxy")
      .setParent(foam.cross_platform.AbstractFObject.CLS_)
      .setAxioms(new Object[] {foam.core.EventProxy.DEST, foam.core.EventProxy.TOPIC, foam.core.EventProxy.ACTIVE, foam.core.EventProxy.PARENT, foam.core.EventProxy.CHILDREN, foam.core.EventProxy.SRC, foam.core.EventProxy.SUBSCRIPTION, foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("doSub")
      .setCode(null)
      .setForClass_("foam.core.EventProxy")
      .setArgs(new foam.core.Argument[] {  })
      .setSwiftCode("\nsubscription?.detach()\nif let src = src as? Topic {\n  subscription = src.sub(topics: topic, listener: onEvent_listener)\n}\n      ")
      .build(), foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("doUnsub")
      .setCode(null)
      .setForClass_("foam.core.EventProxy")
      .setArgs(new foam.core.Argument[] {  })
      .setSwiftCode("subscription?.detach()")
      .build(), foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("removeChild")
      .setCode(null)
      .setForClass_("foam.core.EventProxy")
      .setArgs(new foam.core.Argument[] { foam.core.Argument.ArgumentBuilder(null) // TODO give context
      .setName("c")
      .setType("foam.core.EventProxy")
      .build() })
      .setSwiftCode("\nfor (key, child) in children {\n  if child === c {\n    children.removeValue(forKey: key)\n    return\n  }\n}\n      ")
      .build(), foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("getChild")
      .setCode(null)
      .setType("foam.core.EventProxy")
      .setForClass_("foam.core.EventProxy")
      .setArgs(new foam.core.Argument[] { foam.core.Argument.ArgumentBuilder(null) // TODO give context
      .setName("key")
      .setType("String")
      .build() })
      .setSwiftCode("\nlet key = key!\nif children[key] == nil {\n  children[key] = __context__.create(foam_core_EventProxy.self, args: [\n    \"parent\": self,\n    \"dest\": dest,\n    \"src\": src,\n    \"topic\": topic + [key],\n  ])!\n}\nreturn children[key]!\n      ")
      .build(), foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("addProxy")
      .setCode(null)
      .setForClass_("foam.core.EventProxy")
      .setArgs(new foam.core.Argument[] { foam.core.Argument.ArgumentBuilder(null) // TODO give context
      .setName("topics")
      .setType("String[]")
      .build() })
      .setSwiftCode("\nlet topics = topics!\nvar c = self\nvar active = true\nfor t in topics {\n  active = active && !c.active\n  c = c.getChild(t)!\n}\n\nc.active = active;\n      ")
      .build(), foam.core.Listener.ListenerBuilder(null) // TODO give context
      .setArgs(new foam.core.Argument[] { foam.core.Argument.ArgumentBuilder(null) // TODO give context
      .setName("sub")
      .setType("Detachable")
      .build(), foam.core.Argument.ArgumentBuilder(null) // TODO give context
      .setName("args")
      .setType("Object[]")
      .build() })
      .setName("onEvent")
      .setCode(null)
      .setForClass_("foam.core.EventProxy")
      .setSwiftCode("\nif active {\n  let c = dest.pub(args);\n  if c == 0 { detach() }\n}\n      ")
      .build()})
      .build();
  }

  public static Builder EventProxyBuilder(foam.cross_platform.Context x) {

    return new Builder();
  }
  public static class Builder {

    private Object parent_;

    private boolean dest_isSet_ =
      false;

    private boolean topic_isSet_ =
      false;

    private String[] topic_;

    private boolean active_isSet_ =
      false;

    private boolean active_;

    private boolean parent_isSet_ =
      false;

    private Object dest_;

    private boolean children_isSet_ =
      false;

    private Object children_;

    private boolean src_isSet_ =
      false;

    private Object src_;

    private boolean subscription_isSet_ =
      false;

    private Object subscription_;


    public Builder setDest(Object value) {

      dest_isSet_ = true;
      dest_ = value;
      return this;
    }

    public Builder setTopic(String[] value) {

      topic_isSet_ = true;
      topic_ = value;
      return this;
    }

    public Builder setActive(boolean value) {

      active_isSet_ = true;
      active_ = value;
      return this;
    }

    public Builder setParent(Object value) {

      parent_isSet_ = true;
      parent_ = value;
      return this;
    }

    public Builder setChildren(Object value) {

      children_isSet_ = true;
      children_ = value;
      return this;
    }

    public Builder setSrc(Object value) {

      src_isSet_ = true;
      src_ = value;
      return this;
    }

    public Builder setSubscription(Object value) {

      subscription_isSet_ = true;
      subscription_ = value;
      return this;
    }

    private Builder() {

    }

    public EventProxy build() {

      EventProxy o = new EventProxy();
      
      if ( dest_isSet_ ) {
        o.setDest(dest_);
      }
      
      if ( topic_isSet_ ) {
        o.setTopic(topic_);
      }
      
      if ( active_isSet_ ) {
        o.setActive(active_);
      }
      
      if ( parent_isSet_ ) {
        o.setParent(parent_);
      }
      
      if ( children_isSet_ ) {
        o.setChildren(children_);
      }
      
      if ( src_isSet_ ) {
        o.setSrc(src_);
      }
      
      if ( subscription_isSet_ ) {
        o.setSubscription(subscription_);
      }
      
      o.init();
      return o;
    }
  }
}