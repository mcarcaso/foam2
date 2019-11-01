// WARNING: GENERATED CODE, DO NOT MODIFY BY HAND!
package foam.cross_platform;


public class AsyncFunction extends foam.cross_platform.ProxyFunction implements foam.cross_platform.GenericFunction {

  protected foam.cross_platform.GenericFunction delegate_;

  private boolean delegate_isSet_ =
    false;

  private foam.core.Slot delegate_$;

  public static foam.core.Proxy DELEGATE =
    init_DELEGATE();

  public static foam.cross_platform.FoamClass CLS_ =
    initClassInfo_();


  protected foam.cross_platform.Promise.Builder Promise_create() {

    return foam.cross_platform.Promise.PromiseBuilder(getSubX());
  }

  public Object executeFunction(Object[] args) {

    final foam.cross_platform.Promise p = Promise_create().build();
    
    // TODO: Do this async!
    p.set(getDelegate().executeFunction(args));
    
    return p;
  }

  public foam.core.Slot getDelegate$() {

    if ( delegate_$ == null ) {
      delegate_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(DELEGATE)
        .build();
    }
    return delegate_$;
  }

  public foam.cross_platform.GenericFunction getDelegate() {

    if ( ! delegate_isSet_ ) {
      return null;
    }
    return delegate_;
  }

  private foam.cross_platform.GenericFunction delegate_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (foam.cross_platform.GenericFunction) newValue;
  }

  public void setDelegate(Object value) {

    boolean hasOldValue = hasPropertySet("delegate");
    Object oldValue = hasOldValue ?
      getDelegate() :
      null;
    foam.cross_platform.GenericFunction castedValue = delegate_adapt(oldValue, value, hasOldValue);
    
    delegate_isSet_ = true;
    delegate_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "delegate", null };
    if ( hasListeners(args) ) {
      args[2] = getDelegate$();
      pub(args);
    }
  }

  private static foam.core.Proxy init_DELEGATE() {

    return foam.core.Proxy.ProxyBuilder(null) // TODO give context
      .setOf("foam.cross_platform.GenericFunction")
      .setType("foam.cross_platform.GenericFunction")
      .setTopics(new String[] {  })
      .setName("delegate")
      .setForClass_("foam.cross_platform.ProxyFunction")
      .build();
  }

  public void clearProperty(String name) {

    switch(name) {
    
      case "delegate":
        delegate_isSet_ = false;
        Object[] delegateArgs = new Object[] { "propertyChange", "delegate", null };
        if ( hasListeners(delegateArgs) ) {
          delegateArgs[2] = getDelegate$();
          pub(delegateArgs);
        }
        return;
    
    }
    
    super.clearProperty(name);
    
  }

  public Object getProperty(String name) {

    switch(name) {
    
      case "delegate":
        return getDelegate();
    
    }
    return super.getProperty(name);
  }

  public foam.core.Slot getSlot(String name) {

    switch(name) {
    
      case "delegate":
        return getDelegate$();
    
    }
    return super.getSlot(name);
  }

  public boolean hasPropertySet(String name) {

    switch(name) {
    
      case "delegate":
        return delegate_isSet_;
    
    }
    
    return super.hasPropertySet(name);
    
  }

  public void setProperty(String name, Object value) {

    switch(name) {
    
      case "delegate":
        setDelegate((foam.cross_platform.GenericFunction) value);
        return;
    
    }
    
    super.setProperty(name, value);
    
  }

  protected AsyncFunction () {

  }

  public foam.cross_platform.FoamClass getCls_() {

    return CLS_;
  }

  public static foam.cross_platform.FoamClass initClassInfo_() {

    return foam.cross_platform.FoamClass.FoamClassBuilder(null) // TODO give context
      .setId("foam.cross_platform.AsyncFunction")
      .setParent(foam.cross_platform.ProxyFunction.CLS_)
      .setAxioms(new Object[] {foam.core.Requires.RequiresBuilder(null) // TODO give context
      .setName("Promise")
      .setPath("foam.cross_platform.Promise")
      .build()})
      .build();
  }

  public static Builder AsyncFunctionBuilder(foam.cross_platform.Context x) {

    return new Builder();
  }
  public static class Builder {

    private boolean delegate_isSet_ =
      false;

    private foam.cross_platform.GenericFunction delegate_;


    public Builder setDelegate(foam.cross_platform.GenericFunction value) {

      delegate_isSet_ = true;
      delegate_ = value;
      return this;
    }

    private Builder() {

    }

    public AsyncFunction build() {

      AsyncFunction o = new AsyncFunction();
      
      if ( delegate_isSet_ ) {
        o.setDelegate(delegate_);
      }
      
      o.init();
      return o;
    }
  }
}