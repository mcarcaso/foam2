// WARNING: GENERATED CODE, DO NOT MODIFY BY HAND!
package foam.parse;


public class ParserDecorator extends foam.cross_platform.AbstractFObject {

  protected Object p_;

  private boolean p_isSet_ =
    false;

  private foam.core.Slot p_$;

  public static foam.parse.ParserProperty P =
    init_P();

  public static foam.cross_platform.FoamClass CLS_ =
    initClassInfo_();


  public foam.core.Slot getP$() {

    if ( p_$ == null ) {
      p_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(P)
        .build();
    }
    return p_$;
  }

  public Object getP() {

    if ( ! p_isSet_ ) {
      return null;
    }
    return p_;
  }

  private Object p_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setP(Object value) {

    boolean hasOldValue = hasPropertySet("p");
    Object oldValue = hasOldValue ?
      getP() :
      null;
    Object castedValue = p_adapt(oldValue, value, hasOldValue);
    
    p_isSet_ = true;
    p_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "p", null };
    if ( hasListeners(args) ) {
      args[2] = getP$();
      pub(args);
    }
  }

  private static foam.parse.ParserProperty init_P() {

    return foam.parse.ParserProperty.ParserPropertyBuilder(null) // TODO give context
      .setName("p")
      .setFinal(true)
      .setForClass_("foam.parse.ParserDecorator")
      .build();
  }

  public String toString() {

    throw new RuntimeException("toString is not implemented");
  }

  public void clearProperty(String name) {

    switch(name) {
    
      case "p":
        p_isSet_ = false;
        Object[] pArgs = new Object[] { "propertyChange", "p", null };
        if ( hasListeners(pArgs) ) {
          pArgs[2] = getP$();
          pub(pArgs);
        }
        return;
    
    }
    
    super.clearProperty(name);
    
  }

  public Object getProperty(String name) {

    switch(name) {
    
      case "p":
        return getP();
    
    }
    return super.getProperty(name);
  }

  public foam.core.Slot getSlot(String name) {

    switch(name) {
    
      case "p":
        return getP$();
    
    }
    return super.getSlot(name);
  }

  public boolean hasPropertySet(String name) {

    switch(name) {
    
      case "p":
        return p_isSet_;
    
    }
    
    return super.hasPropertySet(name);
    
  }

  public void setProperty(String name, Object value) {

    switch(name) {
    
      case "p":
        setP((Object) value);
        return;
    
    }
    
    super.setProperty(name, value);
    
  }

  protected ParserDecorator () {

  }

  public foam.cross_platform.FoamClass getCls_() {

    return CLS_;
  }

  public static foam.cross_platform.FoamClass initClassInfo_() {

    return foam.cross_platform.FoamClass.FoamClassBuilder(null) // TODO give context
      .setId("foam.parse.ParserDecorator")
      .setParent(foam.cross_platform.AbstractFObject.CLS_)
      .setAxioms(new Object[] {foam.parse.ParserDecorator.P})
      .build();
  }

  public static Builder ParserDecoratorBuilder(foam.cross_platform.Context x) {

    return new Builder();
  }
  public static class Builder {

    private boolean p_isSet_ =
      false;

    private Object p_;


    public Builder setP(Object value) {

      p_isSet_ = true;
      p_ = value;
      return this;
    }

    private Builder() {

    }

    public ParserDecorator build() {

      ParserDecorator o = new ParserDecorator();
      
      if ( p_isSet_ ) {
        o.setP(p_);
      }
      
      o.init();
      return o;
    }
  }
}