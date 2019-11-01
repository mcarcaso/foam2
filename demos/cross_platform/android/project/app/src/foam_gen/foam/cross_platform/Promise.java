// WARNING: GENERATED CODE, DO NOT MODIFY BY HAND!
package foam.cross_platform;


public class Promise extends foam.cross_platform.AbstractFObject {

  protected java.util.concurrent.Semaphore semaphore__;

  protected Object error__;

  private foam.core.Slot error__$;

  public static foam.core.Property ERROR_ =
    init_ERROR_();

  protected Object value_;

  private boolean value_isSet_ =
    false;

  private foam.core.Slot value_$;

  public static foam.core.Property VALUE =
    init_VALUE();

  private boolean error__isSet_ =
    false;

  private boolean semaphore__isSet_ =
    false;

  private foam.core.Slot semaphore__$;

  public static foam.core.Property SEMAPHORE_ =
    init_SEMAPHORE_();

  protected int numWaiting__;

  private boolean numWaiting__isSet_ =
    false;

  private foam.core.Slot numWaiting__$;

  public static foam.core.IntProperty NUM_WAITING_ =
    init_NUM_WAITING_();

  public static foam.cross_platform.FoamClass CLS_ =
    initClassInfo_();


  public foam.core.Slot getError_$() {

    if ( error__$ == null ) {
      error__$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(ERROR_)
        .build();
    }
    return error__$;
  }

  public Object getError_() {

    if ( ! error__isSet_ ) {
      return null;
    }
    return error__;
  }

  private Object error__adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setError_(Object value) {

    boolean hasOldValue = hasPropertySet("error_");
    Object oldValue = hasOldValue ?
      getError_() :
      null;
    Object castedValue = error__adapt(oldValue, value, hasOldValue);
    
    error__isSet_ = true;
    error__ = castedValue;
    Object[] args = new Object[] { "propertyChange", "error_", null };
    if ( hasListeners(args) ) {
      args[2] = getError_$();
      pub(args);
    }
  }

  private static foam.core.Property init_ERROR_() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("error_")
      .setForClass_("foam.cross_platform.Promise")
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
      .setForClass_("foam.cross_platform.Promise")
      .build();
  }

  public foam.core.Slot getSemaphore_$() {

    if ( semaphore__$ == null ) {
      semaphore__$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(SEMAPHORE_)
        .build();
    }
    return semaphore__$;
  }

  public java.util.concurrent.Semaphore getSemaphore_() {

    if ( ! semaphore__isSet_ ) {
      return null;
    }
    return semaphore__;
  }

  private java.util.concurrent.Semaphore semaphore__adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (java.util.concurrent.Semaphore) newValue;
  }

  public void setSemaphore_(Object value) {

    boolean hasOldValue = hasPropertySet("semaphore_");
    Object oldValue = hasOldValue ?
      getSemaphore_() :
      null;
    java.util.concurrent.Semaphore castedValue = semaphore__adapt(oldValue, value, hasOldValue);
    
    semaphore__isSet_ = true;
    semaphore__ = castedValue;
    Object[] args = new Object[] { "propertyChange", "semaphore_", null };
    if ( hasListeners(args) ) {
      args[2] = getSemaphore_$();
      pub(args);
    }
  }

  private static foam.core.Property init_SEMAPHORE_() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("semaphore_")
      .setForClass_("foam.cross_platform.Promise")
      .setAndroidType("java.util.concurrent.Semaphore")
      .build();
  }

  public foam.core.Slot getNumWaiting_$() {

    if ( numWaiting__$ == null ) {
      numWaiting__$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(NUM_WAITING_)
        .build();
    }
    return numWaiting__$;
  }

  public int getNumWaiting_() {

    if ( ! numWaiting__isSet_ ) {
      return 0;
    }
    return numWaiting__;
  }

  private int numWaiting__adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (int) newValue;
  }

  public void setNumWaiting_(Object value) {

    boolean hasOldValue = hasPropertySet("numWaiting_");
    Object oldValue = hasOldValue ?
      getNumWaiting_() :
      null;
    int castedValue = numWaiting__adapt(oldValue, value, hasOldValue);
    
    numWaiting__isSet_ = true;
    numWaiting__ = castedValue;
    Object[] args = new Object[] { "propertyChange", "numWaiting_", null };
    if ( hasListeners(args) ) {
      args[2] = getNumWaiting_$();
      pub(args);
    }
  }

  private static foam.core.IntProperty init_NUM_WAITING_() {

    return foam.core.IntProperty.IntPropertyBuilder(null) // TODO give context
      .setName("numWaiting_")
      .setForClass_("foam.cross_platform.Promise")
      .build();
  }

  public Object get() {

    // TODO!
    return null;
  }

  public void set(Object value) {

  }

  public void error(Object value) {

  }

  public void clearProperty(String name) {

    switch(name) {
    
      case "error_":
        error__isSet_ = false;
        Object[] error_Args = new Object[] { "propertyChange", "error_", null };
        if ( hasListeners(error_Args) ) {
          error_Args[2] = getError_$();
          pub(error_Args);
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
    
    
      case "semaphore_":
        semaphore__isSet_ = false;
        Object[] semaphore_Args = new Object[] { "propertyChange", "semaphore_", null };
        if ( hasListeners(semaphore_Args) ) {
          semaphore_Args[2] = getSemaphore_$();
          pub(semaphore_Args);
        }
        return;
    
    
      case "numWaiting_":
        numWaiting__isSet_ = false;
        Object[] numWaiting_Args = new Object[] { "propertyChange", "numWaiting_", null };
        if ( hasListeners(numWaiting_Args) ) {
          numWaiting_Args[2] = getNumWaiting_$();
          pub(numWaiting_Args);
        }
        return;
    
    }
    
    super.clearProperty(name);
    
  }

  public Object getProperty(String name) {

    switch(name) {
    
      case "error_":
        return getError_();
    
    
      case "value":
        return getValue();
    
    
      case "semaphore_":
        return getSemaphore_();
    
    
      case "numWaiting_":
        return getNumWaiting_();
    
    }
    return super.getProperty(name);
  }

  public foam.core.Slot getSlot(String name) {

    switch(name) {
    
      case "error_":
        return getError_$();
    
    
      case "value":
        return getValue$();
    
    
      case "semaphore_":
        return getSemaphore_$();
    
    
      case "numWaiting_":
        return getNumWaiting_$();
    
    }
    return super.getSlot(name);
  }

  public boolean hasPropertySet(String name) {

    switch(name) {
    
      case "error_":
        return error__isSet_;
    
    
      case "value":
        return value_isSet_;
    
    
      case "semaphore_":
        return semaphore__isSet_;
    
    
      case "numWaiting_":
        return numWaiting__isSet_;
    
    }
    
    return super.hasPropertySet(name);
    
  }

  public void setProperty(String name, Object value) {

    switch(name) {
    
      case "error_":
        setError_((Object) value);
        return;
    
    
      case "value":
        setValue((Object) value);
        return;
    
    
      case "semaphore_":
        setSemaphore_((java.util.concurrent.Semaphore) value);
        return;
    
    
      case "numWaiting_":
        setNumWaiting_((int) value);
        return;
    
    }
    
    super.setProperty(name, value);
    
  }

  protected Promise () {

  }

  public foam.cross_platform.FoamClass getCls_() {

    return CLS_;
  }

  public static foam.cross_platform.FoamClass initClassInfo_() {

    return foam.cross_platform.FoamClass.FoamClassBuilder(null) // TODO give context
      .setId("foam.cross_platform.Promise")
      .setParent(foam.cross_platform.AbstractFObject.CLS_)
      .setAxioms(new Object[] {foam.cross_platform.Promise.ERROR_, foam.cross_platform.Promise.VALUE, foam.cross_platform.Promise.SEMAPHORE_, foam.cross_platform.Promise.NUM_WAITING_, foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("get")
      .setType("Any")
      .setForClass_("foam.cross_platform.Promise")
      .setArgs(new foam.core.Argument[] {  })
      .setAndroidCode("\n        // TODO!\n        return null;\n      ")
      .build(), foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("set")
      .setForClass_("foam.cross_platform.Promise")
      .setArgs(new foam.core.Argument[] { foam.core.Argument.ArgumentBuilder(null) // TODO give context
      .setName("value")
      .setType("Any")
      .build() })
      .setAndroidCode("\n      ")
      .build(), foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("error")
      .setForClass_("foam.cross_platform.Promise")
      .setArgs(new foam.core.Argument[] { foam.core.Argument.ArgumentBuilder(null) // TODO give context
      .setName("value")
      .setType("Any")
      .build() })
      .setAndroidCode("\n      ")
      .build()})
      .build();
  }

  public static Builder PromiseBuilder(foam.cross_platform.Context x) {

    return new Builder();
  }
  public static class Builder {

    private boolean error__isSet_ =
      false;

    private Object error__;

    private boolean value_isSet_ =
      false;

    private Object value_;

    private boolean semaphore__isSet_ =
      false;

    private java.util.concurrent.Semaphore semaphore__;

    private boolean numWaiting__isSet_ =
      false;

    private int numWaiting__;


    public Builder setError_(Object value) {

      error__isSet_ = true;
      error__ = value;
      return this;
    }

    public Builder setValue(Object value) {

      value_isSet_ = true;
      value_ = value;
      return this;
    }

    public Builder setSemaphore_(java.util.concurrent.Semaphore value) {

      semaphore__isSet_ = true;
      semaphore__ = value;
      return this;
    }

    public Builder setNumWaiting_(int value) {

      numWaiting__isSet_ = true;
      numWaiting__ = value;
      return this;
    }

    private Builder() {

    }

    public Promise build() {

      Promise o = new Promise();
      
      if ( error__isSet_ ) {
        o.setError_(error__);
      }
      
      if ( value_isSet_ ) {
        o.setValue(value_);
      }
      
      if ( semaphore__isSet_ ) {
        o.setSemaphore_(semaphore__);
      }
      
      if ( numWaiting__isSet_ ) {
        o.setNumWaiting_(numWaiting__);
      }
      
      o.init();
      return o;
    }
  }
}