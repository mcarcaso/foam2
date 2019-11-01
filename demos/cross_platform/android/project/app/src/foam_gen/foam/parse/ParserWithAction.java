// WARNING: GENERATED CODE, DO NOT MODIFY BY HAND!
package foam.parse;


public class ParserWithAction extends foam.parse.ParserDecorator {

  protected Object action_;

  private boolean action_isSet_ =
    false;

  private foam.core.Slot action_$;

  public static foam.core.Property ACTION =
    init_ACTION();

  protected Object p_;

  private boolean p_isSet_ =
    false;

  private foam.core.Slot p_$;

  public static foam.parse.ParserProperty P =
    init_P();

  public static foam.cross_platform.FoamClass CLS_ =
    initClassInfo_();


  public foam.core.Slot getAction$() {

    if ( action_$ == null ) {
      action_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(ACTION)
        .build();
    }
    return action_$;
  }

  public Object getAction() {

    if ( ! action_isSet_ ) {
      return null;
    }
    return action_;
  }

  private Object action_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setAction(Object value) {

    boolean hasOldValue = hasPropertySet("action");
    Object oldValue = hasOldValue ?
      getAction() :
      null;
    Object castedValue = action_adapt(oldValue, value, hasOldValue);
    
    action_isSet_ = true;
    action_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "action", null };
    if ( hasListeners(args) ) {
      args[2] = getAction$();
      pub(args);
    }
  }

  private static foam.core.Property init_ACTION() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("action")
      .setForClass_("foam.parse.ParserWithAction")
      .build();
  }

  public void parse() {

    throw new RuntimeException("parse is not implemented");
  }

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

  public void clearProperty(String name) {

    switch(name) {
    
      case "action":
        action_isSet_ = false;
        Object[] actionArgs = new Object[] { "propertyChange", "action", null };
        if ( hasListeners(actionArgs) ) {
          actionArgs[2] = getAction$();
          pub(actionArgs);
        }
        return;
    
    
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
    
      case "action":
        return getAction();
    
    
      case "p":
        return getP();
    
    }
    return super.getProperty(name);
  }

  public foam.core.Slot getSlot(String name) {

    switch(name) {
    
      case "action":
        return getAction$();
    
    
      case "p":
        return getP$();
    
    }
    return super.getSlot(name);
  }

  public boolean hasPropertySet(String name) {

    switch(name) {
    
      case "action":
        return action_isSet_;
    
    
      case "p":
        return p_isSet_;
    
    }
    
    return super.hasPropertySet(name);
    
  }

  public void setProperty(String name, Object value) {

    switch(name) {
    
      case "action":
        setAction((Object) value);
        return;
    
    
      case "p":
        setP((Object) value);
        return;
    
    }
    
    super.setProperty(name, value);
    
  }

  protected ParserWithAction () {

  }

  public foam.cross_platform.FoamClass getCls_() {

    return CLS_;
  }

  public static foam.cross_platform.FoamClass initClassInfo_() {

    return foam.cross_platform.FoamClass.FoamClassBuilder(null) // TODO give context
      .setId("foam.parse.ParserWithAction")
      .setParent(foam.parse.ParserDecorator.CLS_)
      .setAxioms(new Object[] {foam.parse.ParserWithAction.ACTION, foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("parse")
      .setCode(null)
      .setForClass_("foam.parse.ParserWithAction")
      .setArgs(new foam.core.Argument[] {  })
      .build()})
      .build();
  }

  public static Builder ParserWithActionBuilder(foam.cross_platform.Context x) {

    return new Builder();
  }
  public static class Builder {

    private boolean action_isSet_ =
      false;

    private Object action_;

    private boolean p_isSet_ =
      false;

    private Object p_;


    public Builder setAction(Object value) {

      action_isSet_ = true;
      action_ = value;
      return this;
    }

    public Builder setP(Object value) {

      p_isSet_ = true;
      p_ = value;
      return this;
    }

    private Builder() {

    }

    public ParserWithAction build() {

      ParserWithAction o = new ParserWithAction();
      
      if ( action_isSet_ ) {
        o.setAction(action_);
      }
      
      if ( p_isSet_ ) {
        o.setP(p_);
      }
      
      o.init();
      return o;
    }
  }
}