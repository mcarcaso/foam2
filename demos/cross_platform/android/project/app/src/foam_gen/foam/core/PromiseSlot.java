// WARNING: GENERATED CODE, DO NOT MODIFY BY HAND!
package foam.core;


/**
*   A slot that takes a promise and sets its value to its value when it  resolves.   
*/
public class PromiseSlot extends foam.core.SimpleSlot implements foam.core.SlotInterface {

  protected foam.cross_platform.Promise promise_;

  private boolean promise_isSet_ =
    false;

  private foam.core.Slot promise_$;

  public static foam.core.PromiseProperty PROMISE =
    init_PROMISE();

  protected Object value_;

  private boolean value_isSet_ =
    false;

  private foam.core.Slot value_$;

  public static foam.core.Property VALUE =
    init_VALUE();

  public static foam.cross_platform.FoamClass CLS_ =
    initClassInfo_();


  public foam.core.Slot getPromise$() {

    if ( promise_$ == null ) {
      promise_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(PROMISE)
        .build();
    }
    return promise_$;
  }

  public foam.cross_platform.Promise getPromise() {

    if ( ! promise_isSet_ ) {
      return null;
    }
    return promise_;
  }

  private foam.cross_platform.Promise promise_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (foam.cross_platform.Promise) newValue;
  }

  private void promise_postSet(Object oldValue, foam.cross_platform.Promise newValue, boolean oldValueSet) {

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
  }

  public void setPromise(Object value) {

    boolean hasOldValue = hasPropertySet("promise");
    Object oldValue = hasOldValue ?
      getPromise() :
      null;
    foam.cross_platform.Promise castedValue = promise_adapt(oldValue, value, hasOldValue);
    
    promise_isSet_ = true;
    promise_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "promise", null };
    if ( hasListeners(args) ) {
      args[2] = getPromise$();
      pub(args);
    }
    
    promise_postSet(oldValue, castedValue, hasOldValue);
  }

  private static foam.core.PromiseProperty init_PROMISE() {

    return foam.core.PromiseProperty.PromisePropertyBuilder(null) // TODO give context
      .setName("promise")
      .setPostSet(null)
      .setForClass_("foam.core.PromiseSlot")
      .setAndroidPostSet("\n        if ( newValue == null ) return;\n        final PromiseSlot self = this;\n        final foam.cross_platform.Promise p = newValue;\n        AsyncFunction_create()\n          .setDelegate(new foam.cross_platform.GenericFunction() {\n            public Object executeFunction(Object[] args) {\n              if ( self.getPromise() != p ) return null;\n              self.setValue(self.getPromise().get());\n              return null;\n            }\n          })\n          .build()\n          .executeFunction(null);\n      ")
      .build();
  }

  public void set() {

    throw new RuntimeException("set is not implemented");
  }

  protected foam.cross_platform.AsyncFunction.Builder AsyncFunction_create() {

    return foam.cross_platform.AsyncFunction.AsyncFunctionBuilder(getSubX());
  }

  public void slotSet(Object value) {

    throw new RuntimeException(getCls_().getId() + " does not support setting.");
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
      .setForClass_("foam.core.SimpleSlot")
      .build();
  }

  protected foam.core.internal.SubSlot.Builder SubSlot_create() {

    return foam.core.internal.SubSlot.SubSlotBuilder(getSubX());
  }

  public void clearProperty(String name) {

    switch(name) {
    
      case "promise":
        promise_isSet_ = false;
        Object[] promiseArgs = new Object[] { "propertyChange", "promise", null };
        if ( hasListeners(promiseArgs) ) {
          promiseArgs[2] = getPromise$();
          pub(promiseArgs);
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
    
    }
    
    super.clearProperty(name);
    
  }

  public Object getProperty(String name) {

    switch(name) {
    
      case "promise":
        return getPromise();
    
    
      case "value":
        return getValue();
    
    }
    return super.getProperty(name);
  }

  public foam.core.Slot getSlot(String name) {

    switch(name) {
    
      case "promise":
        return getPromise$();
    
    
      case "value":
        return getValue$();
    
    }
    return super.getSlot(name);
  }

  public boolean hasPropertySet(String name) {

    switch(name) {
    
      case "promise":
        return promise_isSet_;
    
    
      case "value":
        return value_isSet_;
    
    }
    
    return super.hasPropertySet(name);
    
  }

  public void setProperty(String name, Object value) {

    switch(name) {
    
      case "promise":
        setPromise((foam.cross_platform.Promise) value);
        return;
    
    
      case "value":
        setValue((Object) value);
        return;
    
    }
    
    super.setProperty(name, value);
    
  }

  protected PromiseSlot () {

  }

  public foam.cross_platform.FoamClass getCls_() {

    return CLS_;
  }

  public static foam.cross_platform.FoamClass initClassInfo_() {

    return foam.cross_platform.FoamClass.FoamClassBuilder(null) // TODO give context
      .setId("foam.core.PromiseSlot")
      .setParent(foam.core.SimpleSlot.CLS_)
      .setAxioms(new Object[] {foam.core.PromiseSlot.PROMISE, foam.core.Requires.RequiresBuilder(null) // TODO give context
      .setName("AsyncFunction")
      .setPath("foam.cross_platform.AsyncFunction")
      .build()})
      .build();
  }

  public static Builder PromiseSlotBuilder(foam.cross_platform.Context x) {

    return new Builder();
  }
  public static class Builder {

    private boolean promise_isSet_ =
      false;

    private foam.cross_platform.Promise promise_;

    private boolean value_isSet_ =
      false;

    private Object value_;


    public Builder setPromise(foam.cross_platform.Promise value) {

      promise_isSet_ = true;
      promise_ = value;
      return this;
    }

    public Builder setValue(Object value) {

      value_isSet_ = true;
      value_ = value;
      return this;
    }

    private Builder() {

    }

    public PromiseSlot build() {

      PromiseSlot o = new PromiseSlot();
      
      if ( promise_isSet_ ) {
        o.setPromise(promise_);
      }
      
      if ( value_isSet_ ) {
        o.setValue(value_);
      }
      
      o.init();
      return o;
    }
  }
}