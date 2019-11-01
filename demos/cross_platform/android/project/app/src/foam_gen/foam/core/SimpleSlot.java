// WARNING: GENERATED CODE, DO NOT MODIFY BY HAND!
package foam.core;


public class SimpleSlot extends foam.core.Slot implements foam.core.SlotInterface {

  protected Object value_;

  private boolean value_isSet_ =
    false;

  private foam.core.Slot value_$;

  public static foam.core.Property VALUE =
    init_VALUE();

  public static foam.cross_platform.FoamClass CLS_ =
    initClassInfo_();


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
      .setForClass_("foam.core.SimpleSlot")
      .build();
  }

  public void get() {

    throw new RuntimeException("get is not implemented");
  }

  public void set() {

    throw new RuntimeException("set is not implemented");
  }

  public void sub() {

    throw new RuntimeException("sub is not implemented");
  }

  public Object slotGet() {

    return getValue();
  }

  public void slotSet(Object value) {

    setValue(value);
  }

  public foam.core.Detachable slotSub(foam.cross_platform.Listener listener) {

    return getValue$().slotSub(listener);
  }

  protected foam.core.internal.SubSlot.Builder SubSlot_create() {

    return foam.core.internal.SubSlot.SubSlotBuilder(getSubX());
  }

  public void clearProperty(String name) {

    switch(name) {
    
      case "value":
        value_isSet_ = false;
        Object[] valueArgs = new Object[] { "propertyChange", "value", null };
        if ( hasListeners(valueArgs) ) {
          valueArgs[2] = getValue$();
          pub(valueArgs);
        }
        return;
    
    }
    
    super.clearProperty(name);
    
  }

  public Object getProperty(String name) {

    switch(name) {
    
      case "value":
        return getValue();
    
    }
    return super.getProperty(name);
  }

  public foam.core.Slot getSlot(String name) {

    switch(name) {
    
      case "value":
        return getValue$();
    
    }
    return super.getSlot(name);
  }

  public boolean hasPropertySet(String name) {

    switch(name) {
    
      case "value":
        return value_isSet_;
    
    }
    
    return super.hasPropertySet(name);
    
  }

  public void setProperty(String name, Object value) {

    switch(name) {
    
      case "value":
        setValue((Object) value);
        return;
    
    }
    
    super.setProperty(name, value);
    
  }

  protected SimpleSlot () {

  }

  public foam.cross_platform.FoamClass getCls_() {

    return CLS_;
  }

  public static foam.cross_platform.FoamClass initClassInfo_() {

    return foam.cross_platform.FoamClass.FoamClassBuilder(null) // TODO give context
      .setId("foam.core.SimpleSlot")
      .setParent(foam.core.Slot.CLS_)
      .setAxioms(new Object[] {foam.core.SimpleSlot.VALUE, foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("get")
      .setCode(null)
      .setForClass_("foam.core.SimpleSlot")
      .setArgs(new foam.core.Argument[] {  })
      .build(), foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("set")
      .setCode(null)
      .setForClass_("foam.core.SimpleSlot")
      .setArgs(new foam.core.Argument[] {  })
      .build()})
      .build();
  }

  public static Builder SimpleSlotBuilder(foam.cross_platform.Context x) {

    return new Builder();
  }
  public static class Builder {

    private boolean value_isSet_ =
      false;

    private Object value_;


    public Builder setValue(Object value) {

      value_isSet_ = true;
      value_ = value;
      return this;
    }

    private Builder() {

    }

    public SimpleSlot build() {

      SimpleSlot o = new SimpleSlot();
      
      if ( value_isSet_ ) {
        o.setValue(value_);
      }
      
      o.init();
      return o;
    }
  }
}