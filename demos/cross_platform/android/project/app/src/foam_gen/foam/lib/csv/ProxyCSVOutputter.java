// WARNING: GENERATED CODE, DO NOT MODIFY BY HAND!
package foam.lib.csv;


public class ProxyCSVOutputter extends foam.cross_platform.AbstractFObject implements foam.lib.csv.CSVOutputter {

  protected foam.lib.csv.CSVOutputter delegate_;

  private boolean delegate_isSet_ =
    false;

  private foam.core.Slot delegate_$;

  public static foam.core.Proxy DELEGATE =
    init_DELEGATE();

  public static foam.cross_platform.FoamClass CLS_ =
    initClassInfo_();


  public foam.core.Slot getDelegate$() {

    if ( delegate_$ == null ) {
      delegate_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(DELEGATE)
        .build();
    }
    return delegate_$;
  }

  public foam.lib.csv.CSVOutputter getDelegate() {

    if ( ! delegate_isSet_ ) {
      return null;
    }
    return delegate_;
  }

  private foam.lib.csv.CSVOutputter delegate_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (foam.lib.csv.CSVOutputter) newValue;
  }

  public void setDelegate(Object value) {

    boolean hasOldValue = hasPropertySet("delegate");
    Object oldValue = hasOldValue ?
      getDelegate() :
      null;
    foam.lib.csv.CSVOutputter castedValue = delegate_adapt(oldValue, value, hasOldValue);
    
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
      .setOf("foam.lib.csv.CSVOutputter")
      .setType("foam.lib.csv.CSVOutputter")
      .setTopics(new String[] {  })
      .setName("delegate")
      .setForClass_("foam.lib.csv.ProxyCSVOutputter")
      .build();
  }

  public void outputValue(Object value) {

    throw new RuntimeException("outputValue is not implemented");
  }

  public void outputFObject(foam.cross_platform.Context x, foam.cross_platform.FObject obj) {

    throw new RuntimeException("outputFObject is not implemented");
  }

  public void flush() {

    throw new RuntimeException("flush is not implemented");
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
        setDelegate((foam.lib.csv.CSVOutputter) value);
        return;
    
    }
    
    super.setProperty(name, value);
    
  }

  protected ProxyCSVOutputter () {

  }

  public foam.cross_platform.FoamClass getCls_() {

    return CLS_;
  }

  public static foam.cross_platform.FoamClass initClassInfo_() {

    return foam.cross_platform.FoamClass.FoamClassBuilder(null) // TODO give context
      .setId("foam.lib.csv.ProxyCSVOutputter")
      .setParent(foam.cross_platform.AbstractFObject.CLS_)
      .setAxioms(new Object[] {foam.core.Implements.ImplementsBuilder(null) // TODO give context
      .setPath("foam.lib.csv.CSVOutputter")
      .build(), foam.lib.csv.ProxyCSVOutputter.DELEGATE, foam.core.ProxiedMethod.ProxiedMethodBuilder(null) // TODO give context
      .setProperty("delegate")
      .setCode(null)
      .setName("outputValue")
      .setType("Void")
      .setForClass_("foam.lib.csv.ProxyCSVOutputter")
      .setArgs(new foam.core.Argument[] { foam.core.Argument.ArgumentBuilder(null) // TODO give context
      .setName("value")
      .setSwiftAnnotations(new String[] {  })
      .build() })
      .build(), foam.core.ProxiedMethod.ProxiedMethodBuilder(null) // TODO give context
      .setProperty("delegate")
      .setCode(null)
      .setName("outputFObject")
      .setType("Void")
      .setForClass_("foam.lib.csv.ProxyCSVOutputter")
      .setArgs(new foam.core.Argument[] { foam.core.Argument.ArgumentBuilder(null) // TODO give context
      .setName("x")
      .setType("Context")
      .setSwiftAnnotations(new String[] {  })
      .build(), foam.core.Argument.ArgumentBuilder(null) // TODO give context
      .setName("obj")
      .setType("FObject")
      .setSwiftAnnotations(new String[] {  })
      .build() })
      .build(), foam.core.ProxiedMethod.ProxiedMethodBuilder(null) // TODO give context
      .setProperty("delegate")
      .setCode(null)
      .setName("flush")
      .setType("Void")
      .setForClass_("foam.lib.csv.ProxyCSVOutputter")
      .setArgs(new foam.core.Argument[] {  })
      .build()})
      .build();
  }

  public static Builder ProxyCSVOutputterBuilder(foam.cross_platform.Context x) {

    return new Builder();
  }
  public static class Builder {

    private boolean delegate_isSet_ =
      false;

    private foam.lib.csv.CSVOutputter delegate_;


    public Builder setDelegate(foam.lib.csv.CSVOutputter value) {

      delegate_isSet_ = true;
      delegate_ = value;
      return this;
    }

    private Builder() {

    }

    public ProxyCSVOutputter build() {

      ProxyCSVOutputter o = new ProxyCSVOutputter();
      
      if ( delegate_isSet_ ) {
        o.setDelegate(delegate_);
      }
      
      o.init();
      return o;
    }
  }
}