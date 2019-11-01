// WARNING: GENERATED CODE, DO NOT MODIFY BY HAND!
package foam.u2.view;


public class FnFormatter extends foam.cross_platform.AbstractFObject implements foam.u2.view.Formatter {

  protected foam.cross_platform.GenericFunction f_;

  private boolean f_isSet_ =
    false;

  private foam.core.Slot f_$;

  public static foam.core.FunctionProperty F =
    init_F();

  public static foam.cross_platform.FoamClass CLS_ =
    initClassInfo_();


  public foam.core.Slot getF$() {

    if ( f_$ == null ) {
      f_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(F)
        .build();
    }
    return f_$;
  }

  public foam.cross_platform.GenericFunction getF() {

    if ( ! f_isSet_ ) {
      return foam.cross_platform.NullFunction.NullFunctionBuilder(null).build();
    }
    return f_;
  }

  private foam.cross_platform.GenericFunction f_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (foam.cross_platform.GenericFunction) newValue;
  }

  public void setF(Object value) {

    boolean hasOldValue = hasPropertySet("f");
    Object oldValue = hasOldValue ?
      getF() :
      null;
    foam.cross_platform.GenericFunction castedValue = f_adapt(oldValue, value, hasOldValue);
    
    f_isSet_ = true;
    f_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "f", null };
    if ( hasListeners(args) ) {
      args[2] = getF$();
      pub(args);
    }
  }

  private static foam.core.FunctionProperty init_F() {

    return foam.core.FunctionProperty.FunctionPropertyBuilder(null) // TODO give context
      .setName("f")
      .setForClass_("foam.u2.view.FnFormatter")
      .build();
  }

  public void format(Object e, Object value, Object obj, Object axiom) {

    throw new RuntimeException("format is not implemented");
  }

  public void clearProperty(String name) {

    switch(name) {
    
      case "f":
        f_isSet_ = false;
        Object[] fArgs = new Object[] { "propertyChange", "f", null };
        if ( hasListeners(fArgs) ) {
          fArgs[2] = getF$();
          pub(fArgs);
        }
        return;
    
    }
    
    super.clearProperty(name);
    
  }

  public Object getProperty(String name) {

    switch(name) {
    
      case "f":
        return getF();
    
    }
    return super.getProperty(name);
  }

  public foam.core.Slot getSlot(String name) {

    switch(name) {
    
      case "f":
        return getF$();
    
    }
    return super.getSlot(name);
  }

  public boolean hasPropertySet(String name) {

    switch(name) {
    
      case "f":
        return f_isSet_;
    
    }
    
    return super.hasPropertySet(name);
    
  }

  public void setProperty(String name, Object value) {

    switch(name) {
    
      case "f":
        setF((foam.cross_platform.GenericFunction) value);
        return;
    
    }
    
    super.setProperty(name, value);
    
  }

  protected FnFormatter () {

  }

  public foam.cross_platform.FoamClass getCls_() {

    return CLS_;
  }

  public static foam.cross_platform.FoamClass initClassInfo_() {

    return foam.cross_platform.FoamClass.FoamClassBuilder(null) // TODO give context
      .setId("foam.u2.view.FnFormatter")
      .setParent(foam.cross_platform.AbstractFObject.CLS_)
      .setAxioms(new Object[] {foam.core.Implements.ImplementsBuilder(null) // TODO give context
      .setPath("foam.u2.view.Formatter")
      .build(), foam.u2.view.FnFormatter.F, foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("format")
      .setCode(null)
      .setForClass_("foam.u2.view.FnFormatter")
      .setArgs(new foam.core.Argument[] { foam.core.Argument.ArgumentBuilder(null) // TODO give context
      .setName("e")
      .build(), foam.core.Argument.ArgumentBuilder(null) // TODO give context
      .setName("value")
      .build(), foam.core.Argument.ArgumentBuilder(null) // TODO give context
      .setName("obj")
      .build(), foam.core.Argument.ArgumentBuilder(null) // TODO give context
      .setName("axiom")
      .build() })
      .build()})
      .build();
  }

  public static Builder FnFormatterBuilder(foam.cross_platform.Context x) {

    return new Builder();
  }
  public static class Builder {

    private boolean f_isSet_ =
      false;

    private foam.cross_platform.GenericFunction f_;


    public Builder setF(foam.cross_platform.GenericFunction value) {

      f_isSet_ = true;
      f_ = value;
      return this;
    }

    private Builder() {

    }

    public FnFormatter build() {

      FnFormatter o = new FnFormatter();
      
      if ( f_isSet_ ) {
        o.setF(f_);
      }
      
      o.init();
      return o;
    }
  }
}