// WARNING: GENERATED CODE, DO NOT MODIFY BY HAND!
package foam.lib.csv;


public class PrefixedCSVOutputter extends foam.lib.csv.ProxyCSVOutputter implements foam.lib.csv.CSVOutputter {

  protected String prefix_;

  private boolean prefix_isSet_ =
    false;

  private foam.core.Slot prefix_$;

  public static foam.core.StringProperty PREFIX =
    init_PREFIX();

  protected foam.lib.csv.CSVOutputter delegate_;

  private boolean delegate_isSet_ =
    false;

  private foam.core.Slot delegate_$;

  public static foam.core.Proxy DELEGATE =
    init_DELEGATE();

  public static foam.cross_platform.FoamClass CLS_ =
    initClassInfo_();


  public foam.core.Slot getPrefix$() {

    if ( prefix_$ == null ) {
      prefix_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(PREFIX)
        .build();
    }
    return prefix_$;
  }

  public String getPrefix() {

    if ( ! prefix_isSet_ ) {
      return "";
    }
    return prefix_;
  }

  private String prefix_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setPrefix(Object value) {

    boolean hasOldValue = hasPropertySet("prefix");
    Object oldValue = hasOldValue ?
      getPrefix() :
      null;
    String castedValue = prefix_adapt(oldValue, value, hasOldValue);
    
    prefix_isSet_ = true;
    prefix_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "prefix", null };
    if ( hasListeners(args) ) {
      args[2] = getPrefix$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_PREFIX() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("prefix")
      .setForClass_("foam.lib.csv.PrefixedCSVOutputter")
      .build();
  }

  public void outputValue(Object value) {

    throw new RuntimeException("outputValue is not implemented");
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

  public void clearProperty(String name) {

    switch(name) {
    
      case "prefix":
        prefix_isSet_ = false;
        Object[] prefixArgs = new Object[] { "propertyChange", "prefix", null };
        if ( hasListeners(prefixArgs) ) {
          prefixArgs[2] = getPrefix$();
          pub(prefixArgs);
        }
        return;
    
    
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
    
      case "prefix":
        return getPrefix();
    
    
      case "delegate":
        return getDelegate();
    
    }
    return super.getProperty(name);
  }

  public foam.core.Slot getSlot(String name) {

    switch(name) {
    
      case "prefix":
        return getPrefix$();
    
    
      case "delegate":
        return getDelegate$();
    
    }
    return super.getSlot(name);
  }

  public boolean hasPropertySet(String name) {

    switch(name) {
    
      case "prefix":
        return prefix_isSet_;
    
    
      case "delegate":
        return delegate_isSet_;
    
    }
    
    return super.hasPropertySet(name);
    
  }

  public void setProperty(String name, Object value) {

    switch(name) {
    
      case "prefix":
        setPrefix((String) value);
        return;
    
    
      case "delegate":
        setDelegate((foam.lib.csv.CSVOutputter) value);
        return;
    
    }
    
    super.setProperty(name, value);
    
  }

  protected PrefixedCSVOutputter () {

  }

  public foam.cross_platform.FoamClass getCls_() {

    return CLS_;
  }

  public static foam.cross_platform.FoamClass initClassInfo_() {

    return foam.cross_platform.FoamClass.FoamClassBuilder(null) // TODO give context
      .setId("foam.lib.csv.PrefixedCSVOutputter")
      .setParent(foam.lib.csv.ProxyCSVOutputter.CLS_)
      .setAxioms(new Object[] {foam.lib.csv.PrefixedCSVOutputter.PREFIX})
      .build();
  }

  public static Builder PrefixedCSVOutputterBuilder(foam.cross_platform.Context x) {

    return new Builder();
  }
  public static class Builder {

    private boolean prefix_isSet_ =
      false;

    private String prefix_;

    private boolean delegate_isSet_ =
      false;

    private foam.lib.csv.CSVOutputter delegate_;


    public Builder setPrefix(String value) {

      prefix_isSet_ = true;
      prefix_ = value;
      return this;
    }

    public Builder setDelegate(foam.lib.csv.CSVOutputter value) {

      delegate_isSet_ = true;
      delegate_ = value;
      return this;
    }

    private Builder() {

    }

    public PrefixedCSVOutputter build() {

      PrefixedCSVOutputter o = new PrefixedCSVOutputter();
      
      if ( prefix_isSet_ ) {
        o.setPrefix(prefix_);
      }
      
      if ( delegate_isSet_ ) {
        o.setDelegate(delegate_);
      }
      
      o.init();
      return o;
    }
  }
}