// WARNING: GENERATED CODE, DO NOT MODIFY BY HAND!
package foam.pattern;


/**
*   A Singleton Axiom, when added to a Class, makes it implement  the Singleton Pattern, meaning that all calls to create()  will return 
* the same (single) instance.   
*/
public class Singleton extends foam.cross_platform.AbstractFObject {

  protected Object name_;

  private boolean name_isSet_ =
    false;

  private foam.core.Slot name_$;

  public static foam.core.Property NAME =
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

  public Object getName() {

    if ( ! name_isSet_ ) {
      return "create";
    }
    return name_;
  }

  private Object name_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setName(Object value) {

    boolean hasOldValue = hasPropertySet("name");
    Object oldValue = hasOldValue ?
      getName() :
      null;
    Object castedValue = name_adapt(oldValue, value, hasOldValue);
    
    name_isSet_ = true;
    name_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "name", null };
    if ( hasListeners(args) ) {
      args[2] = getName$();
      pub(args);
    }
  }

  private static foam.core.Property init_NAME() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("name")
      .setValue("create")
      .setForClass_("foam.pattern.Singleton")
      .build();
  }

  public void installInClass() {

    throw new RuntimeException("installInClass is not implemented");
  }

  public void installInProto() {

    throw new RuntimeException("installInProto is not implemented");
  }

  public void writeToSwiftClass() {

    throw new RuntimeException("writeToSwiftClass is not implemented");
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
        setName((Object) value);
        return;
    
    }
    
    super.setProperty(name, value);
    
  }

  protected Singleton () {

  }

  public foam.cross_platform.FoamClass getCls_() {

    return CLS_;
  }

  public static foam.cross_platform.FoamClass initClassInfo_() {

    return foam.cross_platform.FoamClass.FoamClassBuilder(null) // TODO give context
      .setId("foam.pattern.Singleton")
      .setParent(foam.cross_platform.AbstractFObject.CLS_)
      .setAxioms(new Object[] {foam.pattern.Singleton.NAME, foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("installInClass")
      .setCode(null)
      .setForClass_("foam.pattern.Singleton")
      .setArgs(new foam.core.Argument[] {  })
      .build(), foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("installInProto")
      .setCode(null)
      .setForClass_("foam.pattern.Singleton")
      .setArgs(new foam.core.Argument[] {  })
      .build(), foam.pattern.Singleton.SingletonBuilder(null) // TODO give context
      .build(), foam.core.Requires.RequiresBuilder(null) // TODO give context
      .setName("Field")
      .setPath("foam.swift.Field")
      .build(), foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("writeToSwiftClass")
      .setCode(null)
      .setForClass_("foam.pattern.Singleton")
      .setArgs(new foam.core.Argument[] {  })
      .build()})
      .build();
  }

  public static Builder SingletonBuilder(foam.cross_platform.Context x) {

    return new Builder();
  }
  public static class Builder {

    private boolean name_isSet_ =
      false;

    private Object name_;


    public Builder setName(Object value) {

      name_isSet_ = true;
      name_ = value;
      return this;
    }

    private Builder() {

    }

    public Singleton build() {

      Singleton o = new Singleton();
      
      if ( name_isSet_ ) {
        o.setName(name_);
      }
      
      o.init();
      return o;
    }
  }
}