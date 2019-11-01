// WARNING: GENERATED CODE, DO NOT MODIFY BY HAND!
package foam.core.internal;


/**
* For internal use only. Is used to implement the Slot.dot() method. 
*/
public class SubSlot extends foam.core.Slot implements foam.core.SlotInterface {

  public static foam.core.StringProperty NAME =
    init_NAME();

  protected foam.cross_platform.FoamClass of_;

  private foam.core.Slot of_$;

  public static foam.core.ClassProperty OF =
    init_OF();

  protected foam.core.Slot parent_;

  private boolean parent_isSet_ =
    false;

  private foam.core.Slot parent_$;

  public static foam.core.FObjectProperty PARENT =
    init_PARENT();

  protected String name_;

  private boolean name_isSet_ =
    false;

  private foam.core.Slot name_$;

  private boolean of_isSet_ =
    false;

  protected Object value_;

  private boolean value_isSet_ =
    false;

  private foam.core.Slot value_$;

  public static foam.core.Property VALUE =
    init_VALUE();

  protected foam.core.Detachable prevSub_;

  private boolean prevSub_isSet_ =
    false;

  private foam.core.Slot prevSub_$;

  public static foam.core.FObjectProperty PREV_SUB =
    init_PREV_SUB();

  private foam.cross_platform.Listener parentChange_listener_var;

  private foam.cross_platform.Listener valueChange_listener_var;

  public static foam.cross_platform.FoamClass CLS_ =
    initClassInfo_();


  public foam.core.Slot getOf$() {

    if ( of_$ == null ) {
      of_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(OF)
        .build();
    }
    return of_$;
  }

  public foam.cross_platform.FoamClass getOf() {

    if ( ! of_isSet_ ) {
      return null;
    }
    return of_;
  }

  private foam.cross_platform.FoamClass of_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (foam.cross_platform.FoamClass) newValue;
  }

  public void setOf(Object value) {

    boolean hasOldValue = hasPropertySet("of");
    Object oldValue = hasOldValue ?
      getOf() :
      null;
    foam.cross_platform.FoamClass castedValue = of_adapt(oldValue, value, hasOldValue);
    
    of_isSet_ = true;
    of_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "of", null };
    if ( hasListeners(args) ) {
      args[2] = getOf$();
      pub(args);
    }
  }

  private static foam.core.ClassProperty init_OF() {

    return foam.core.ClassProperty.ClassPropertyBuilder(null) // TODO give context
      .setName("of")
      .setForClass_("foam.core.internal.SubSlot")
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

  public foam.core.Slot getParent() {

    if ( ! parent_isSet_ ) {
      return null;
    }
    return parent_;
  }

  private foam.core.Slot parent_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (foam.core.Slot) newValue;
  }

  public void setParent(Object value) {

    boolean hasOldValue = hasPropertySet("parent");
    Object oldValue = hasOldValue ?
      getParent() :
      null;
    foam.core.Slot castedValue = parent_adapt(oldValue, value, hasOldValue);
    
    parent_isSet_ = true;
    parent_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "parent", null };
    if ( hasListeners(args) ) {
      args[2] = getParent$();
      pub(args);
    }
  }

  private static foam.core.FObjectProperty init_PARENT() {

    return foam.core.FObjectProperty.FObjectPropertyBuilder(null) // TODO give context
      .setOf(foam.core.Slot.CLS_)
      .setType("foam.core.Slot")
      .setName("parent")
      .setForClass_("foam.core.internal.SubSlot")
      .build();
  }

  public foam.core.Slot getName$() {

    if ( name_$ == null ) {
      name_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(NAME)
        .build();
    }
    return name_$;
  }

  public String getName() {

    if ( ! name_isSet_ ) {
      return "";
    }
    return name_;
  }

  private String name_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setName(Object value) {

    boolean hasOldValue = hasPropertySet("name");
    Object oldValue = hasOldValue ?
      getName() :
      null;
    String castedValue = name_adapt(oldValue, value, hasOldValue);
    
    name_isSet_ = true;
    name_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "name", null };
    if ( hasListeners(args) ) {
      args[2] = getName$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_NAME() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("name")
      .setForClass_("foam.core.internal.SubSlot")
      .build();
  }

  public foam.core.Slot getValue$() {

    if ( value_$ == null ) {
      value_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(VALUE)
        .build();
    }
    return value_$;
  }

  public Object getValue() {

    if ( ! value_isSet_ ) {
      return null;
    }
    return value_;
  }

  private Object value_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setValue(Object value) {

    boolean hasOldValue = hasPropertySet("value");
    Object oldValue = hasOldValue ?
      getValue() :
      null;
    Object castedValue = value_adapt(oldValue, value, hasOldValue);
    
    value_isSet_ = true;
    value_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "value", null };
    if ( hasListeners(args) ) {
      args[2] = getValue$();
      pub(args);
    }
  }

  private static foam.core.Property init_VALUE() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("value")
      .setForClass_("foam.core.internal.SubSlot")
      .build();
  }

  public foam.core.Slot getPrevSub$() {

    if ( prevSub_$ == null ) {
      prevSub_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(PREV_SUB)
        .build();
    }
    return prevSub_$;
  }

  public foam.core.Detachable getPrevSub() {

    if ( ! prevSub_isSet_ ) {
      return null;
    }
    return prevSub_;
  }

  private foam.core.Detachable prevSub_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (foam.core.Detachable) newValue;
  }

  public void setPrevSub(Object value) {

    boolean hasOldValue = hasPropertySet("prevSub");
    Object oldValue = hasOldValue ?
      getPrevSub() :
      null;
    foam.core.Detachable castedValue = prevSub_adapt(oldValue, value, hasOldValue);
    
    prevSub_isSet_ = true;
    prevSub_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "prevSub", null };
    if ( hasListeners(args) ) {
      args[2] = getPrevSub$();
      pub(args);
    }
  }

  private static foam.core.FObjectProperty init_PREV_SUB() {

    return foam.core.FObjectProperty.FObjectPropertyBuilder(null) // TODO give context
      .setOf(foam.core.Detachable.CLS_)
      .setType("foam.core.Detachable")
      .setName("prevSub")
      .setForClass_("foam.core.internal.SubSlot")
      .build();
  }

  public void init() {

    getParent().sub(null, parentChange_listener());
    parentChange(null, null);
  }

  public void get() {

    throw new RuntimeException("get is not implemented");
  }

  public void set() {

    throw new RuntimeException("set is not implemented");
  }

  public void getPrev() {

    throw new RuntimeException("getPrev is not implemented");
  }

  public void setPrev() {

    throw new RuntimeException("setPrev is not implemented");
  }

  public void sub() {

    throw new RuntimeException("sub is not implemented");
  }

  public void isDefined() {

    throw new RuntimeException("isDefined is not implemented");
  }

  public void clear() {

    throw new RuntimeException("clear is not implemented");
  }

  public String toString() {

    throw new RuntimeException("toString is not implemented");
  }

  public void parentChange(foam.core.Detachable sub, Object[] args) {

    if ( getPrevSub() != null ) getPrevSub().detach();
    foam.cross_platform.FObject o =
      (foam.cross_platform.FObject) getParent().slotGet();
    
    if ( getOf() == null && o != null ) setOf(o.getCls_());
    
    setPrevSub(o != null && o.getSlot(getName()) != null ?
      o.getSlot(getName()).slotSub(valueChange_listener()) : null);
    valueChange(null, null);
  }

  public foam.cross_platform.Listener parentChange_listener() {

    if ( parentChange_listener_var == null ) {
      final SubSlot obj = this;
      parentChange_listener_var = new foam.cross_platform.Listener() {
        public void executeListener(foam.core.Detachable sub, Object[] args) {
          obj.parentChange(sub, args);
        }
      };
    }
    return parentChange_listener_var;
  }

  public void valueChange(foam.core.Detachable sub, Object[] args) {

    foam.cross_platform.FObject parentValue =
      (foam.cross_platform.FObject) getParent().slotGet();
    setValue(parentValue != null ? parentValue.getProperty(getName()) : null);
  }

  public foam.cross_platform.Listener valueChange_listener() {

    if ( valueChange_listener_var == null ) {
      final SubSlot obj = this;
      valueChange_listener_var = new foam.cross_platform.Listener() {
        public void executeListener(foam.core.Detachable sub, Object[] args) {
          obj.valueChange(sub, args);
        }
      };
    }
    return valueChange_listener_var;
  }

  public Object slotGet() {

    foam.cross_platform.FObject o =
      (foam.cross_platform.FObject) getParent().slotGet();
    return o != null ? o.getProperty(getName()) : null;
  }

  public void slotSet(Object value) {

    foam.cross_platform.FObject o =
      (foam.cross_platform.FObject) getParent().slotGet();
    if ( o != null ) o.setProperty(getName(), value);
  }

  public foam.core.Detachable slotSub(foam.cross_platform.Listener listener) {

    return getValue$().slotSub(listener);
  }

  protected foam.core.internal.SubSlot.Builder SubSlot_create() {

    return foam.core.internal.SubSlot.SubSlotBuilder(getSubX());
  }

  public void clearProperty(String name) {

    switch(name) {
    
      case "of":
        of_isSet_ = false;
        Object[] ofArgs = new Object[] { "propertyChange", "of", null };
        if ( hasListeners(ofArgs) ) {
          ofArgs[2] = getOf$();
          pub(ofArgs);
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
    
    
      case "name":
        name_isSet_ = false;
        Object[] nameArgs = new Object[] { "propertyChange", "name", null };
        if ( hasListeners(nameArgs) ) {
          nameArgs[2] = getName$();
          pub(nameArgs);
        }
        return;
    
    
      case "value":
        value_isSet_ = false;
        Object[] valueArgs = new Object[] { "propertyChange", "value", null };
        if ( hasListeners(valueArgs) ) {
          valueArgs[2] = getValue$();
          pub(valueArgs);
        }
        return;
    
    
      case "prevSub":
        prevSub_isSet_ = false;
        Object[] prevSubArgs = new Object[] { "propertyChange", "prevSub", null };
        if ( hasListeners(prevSubArgs) ) {
          prevSubArgs[2] = getPrevSub$();
          pub(prevSubArgs);
        }
        return;
    
    }
    
    super.clearProperty(name);
    
  }

  public Object getProperty(String name) {

    switch(name) {
    
      case "of":
        return getOf();
    
    
      case "parent":
        return getParent();
    
    
      case "name":
        return getName();
    
    
      case "value":
        return getValue();
    
    
      case "prevSub":
        return getPrevSub();
    
    }
    return super.getProperty(name);
  }

  public foam.core.Slot getSlot(String name) {

    switch(name) {
    
      case "of":
        return getOf$();
    
    
      case "parent":
        return getParent$();
    
    
      case "name":
        return getName$();
    
    
      case "value":
        return getValue$();
    
    
      case "prevSub":
        return getPrevSub$();
    
    }
    return super.getSlot(name);
  }

  public boolean hasPropertySet(String name) {

    switch(name) {
    
      case "of":
        return of_isSet_;
    
    
      case "parent":
        return parent_isSet_;
    
    
      case "name":
        return name_isSet_;
    
    
      case "value":
        return value_isSet_;
    
    
      case "prevSub":
        return prevSub_isSet_;
    
    }
    
    return super.hasPropertySet(name);
    
  }

  public void setProperty(String name, Object value) {

    switch(name) {
    
      case "of":
        setOf((foam.cross_platform.FoamClass) value);
        return;
    
    
      case "parent":
        setParent((foam.core.Slot) value);
        return;
    
    
      case "name":
        setName((String) value);
        return;
    
    
      case "value":
        setValue((Object) value);
        return;
    
    
      case "prevSub":
        setPrevSub((foam.core.Detachable) value);
        return;
    
    }
    
    super.setProperty(name, value);
    
  }

  protected SubSlot () {

  }

  public foam.cross_platform.FoamClass getCls_() {

    return CLS_;
  }

  public static foam.cross_platform.FoamClass initClassInfo_() {

    return foam.cross_platform.FoamClass.FoamClassBuilder(null) // TODO give context
      .setId("foam.core.internal.SubSlot")
      .setParent(foam.core.Slot.CLS_)
      .setAxioms(new Object[] {foam.core.internal.SubSlot.OF, foam.core.internal.SubSlot.PARENT, foam.core.internal.SubSlot.NAME, foam.core.internal.SubSlot.VALUE, foam.core.internal.SubSlot.PREV_SUB, foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("get")
      .setCode(null)
      .setForClass_("foam.core.internal.SubSlot")
      .setArgs(new foam.core.Argument[] {  })
      .build(), foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("set")
      .setCode(null)
      .setForClass_("foam.core.internal.SubSlot")
      .setArgs(new foam.core.Argument[] {  })
      .build(), foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("getPrev")
      .setCode(null)
      .setForClass_("foam.core.internal.SubSlot")
      .setArgs(new foam.core.Argument[] {  })
      .build(), foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("setPrev")
      .setCode(null)
      .setForClass_("foam.core.internal.SubSlot")
      .setArgs(new foam.core.Argument[] {  })
      .build(), foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("isDefined")
      .setCode(null)
      .setForClass_("foam.core.internal.SubSlot")
      .setArgs(new foam.core.Argument[] {  })
      .build(), foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("clear")
      .setCode(null)
      .setForClass_("foam.core.internal.SubSlot")
      .setArgs(new foam.core.Argument[] {  })
      .build(), foam.core.Listener.ListenerBuilder(null) // TODO give context
      .setArgs(new foam.core.Argument[] { foam.core.Argument.ArgumentBuilder(null) // TODO give context
      .setName("sub")
      .setType("Detachable")
      .build(), foam.core.Argument.ArgumentBuilder(null) // TODO give context
      .setName("args")
      .setType("Object[]")
      .build() })
      .setName("parentChange")
      .setCode(null)
      .setForClass_("foam.core.internal.SubSlot")
      .setAndroidCode("\n        if ( getPrevSub() != null ) getPrevSub().detach();\n        foam.cross_platform.FObject o =\n          (foam.cross_platform.FObject) getParent().slotGet();\n\n        if ( getOf() == null && o != null ) setOf(o.getCls_());\n\n        setPrevSub(o != null && o.getSlot(getName()) != null ?\n          o.getSlot(getName()).slotSub(valueChange_listener()) : null);\n        valueChange(null, null);\n      ")
      .build(), foam.core.Listener.ListenerBuilder(null) // TODO give context
      .setArgs(new foam.core.Argument[] { foam.core.Argument.ArgumentBuilder(null) // TODO give context
      .setName("sub")
      .setType("Detachable")
      .build(), foam.core.Argument.ArgumentBuilder(null) // TODO give context
      .setName("args")
      .setType("Object[]")
      .build() })
      .setName("valueChange")
      .setCode(null)
      .setForClass_("foam.core.internal.SubSlot")
      .setAndroidCode("\n        foam.cross_platform.FObject parentValue =\n          (foam.cross_platform.FObject) getParent().slotGet();\n        setValue(parentValue != null ? parentValue.getProperty(getName()) : null);\n      ")
      .build()})
      .build();
  }

  public static Builder SubSlotBuilder(foam.cross_platform.Context x) {

    return new Builder();
  }
  public static class Builder {

    private boolean of_isSet_ =
      false;

    private foam.cross_platform.FoamClass of_;

    private boolean parent_isSet_ =
      false;

    private foam.core.Slot parent_;

    private boolean name_isSet_ =
      false;

    private String name_;

    private boolean value_isSet_ =
      false;

    private Object value_;

    private boolean prevSub_isSet_ =
      false;

    private foam.core.Detachable prevSub_;


    public Builder setOf(foam.cross_platform.FoamClass value) {

      of_isSet_ = true;
      of_ = value;
      return this;
    }

    public Builder setParent(foam.core.Slot value) {

      parent_isSet_ = true;
      parent_ = value;
      return this;
    }

    public Builder setName(String value) {

      name_isSet_ = true;
      name_ = value;
      return this;
    }

    public Builder setValue(Object value) {

      value_isSet_ = true;
      value_ = value;
      return this;
    }

    public Builder setPrevSub(foam.core.Detachable value) {

      prevSub_isSet_ = true;
      prevSub_ = value;
      return this;
    }

    private Builder() {

    }

    public SubSlot build() {

      SubSlot o = new SubSlot();
      
      if ( of_isSet_ ) {
        o.setOf(of_);
      }
      
      if ( parent_isSet_ ) {
        o.setParent(parent_);
      }
      
      if ( name_isSet_ ) {
        o.setName(name_);
      }
      
      if ( value_isSet_ ) {
        o.setValue(value_);
      }
      
      if ( prevSub_isSet_ ) {
        o.setPrevSub(prevSub_);
      }
      
      o.init();
      return o;
    }
  }
}