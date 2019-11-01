// WARNING: GENERATED CODE, DO NOT MODIFY BY HAND!
package foam.java;


public class JavaImplements extends foam.cross_platform.AbstractFObject {

  protected String name_;

  private boolean name_isSet_ =
    false;

  private foam.core.Slot name_$;

  public static foam.core.StringProperty NAME =
    init_NAME();

  public static foam.cross_platform.FoamClass CLS_ =
    initClassInfo_();


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
      .setForClass_("foam.java.JavaImplements")
      .build();
  }

  public void buildJavaClass() {

    throw new RuntimeException("buildJavaClass is not implemented");
  }

  public void clearProperty(String name) {

    switch(name) {
    
      case "name":
        name_isSet_ = false;
        Object[] nameArgs = new Object[] { "propertyChange", "name", null };
        if ( hasListeners(nameArgs) ) {
          nameArgs[2] = getName$();
          pub(nameArgs);
        }
        return;
    
    }
    
    super.clearProperty(name);
    
  }

  public Object getProperty(String name) {

    switch(name) {
    
      case "name":
        return getName();
    
    }
    return super.getProperty(name);
  }

  public foam.core.Slot getSlot(String name) {

    switch(name) {
    
      case "name":
        return getName$();
    
    }
    return super.getSlot(name);
  }

  public boolean hasPropertySet(String name) {

    switch(name) {
    
      case "name":
        return name_isSet_;
    
    }
    
    return super.hasPropertySet(name);
    
  }

  public void setProperty(String name, Object value) {

    switch(name) {
    
      case "name":
        setName((String) value);
        return;
    
    }
    
    super.setProperty(name, value);
    
  }

  protected JavaImplements () {

  }

  public foam.cross_platform.FoamClass getCls_() {

    return CLS_;
  }

  public static foam.cross_platform.FoamClass initClassInfo_() {

    return foam.cross_platform.FoamClass.FoamClassBuilder(null) // TODO give context
      .setId("foam.java.JavaImplements")
      .setParent(foam.cross_platform.AbstractFObject.CLS_)
      .setAxioms(new Object[] {foam.java.JavaImplements.NAME, foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("buildJavaClass")
      .setCode(null)
      .setForClass_("foam.java.JavaImplements")
      .setArgs(new foam.core.Argument[] {  })
      .build()})
      .build();
  }

  public static Builder JavaImplementsBuilder(foam.cross_platform.Context x) {

    return new Builder();
  }
  public static class Builder {

    private boolean name_isSet_ =
      false;

    private String name_;


    public Builder setName(String value) {

      name_isSet_ = true;
      name_ = value;
      return this;
    }

    private Builder() {

    }

    public JavaImplements build() {

      JavaImplements o = new JavaImplements();
      
      if ( name_isSet_ ) {
        o.setName(name_);
      }
      
      o.init();
      return o;
    }
  }
}