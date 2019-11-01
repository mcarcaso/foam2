// WARNING: GENERATED CODE, DO NOT MODIFY BY HAND!
package foam.core.internal;


/**
*   A psedo-Property Axiom added to FObject which contains an object's validation errors.  Adds the following attributes to an Object:  <dl>  <dt>errors_</dt><dd>list 
* of current errors</dd>  <dt>errors_$</dt><dd>Slot representation of errors_</dd>  <dt>validateObject()</dt><dd>calls the validateObj() method of all property Axioms, allowing them to populate errors_</dd>  </dl>  
*  
*/
public class Errors extends foam.cross_platform.AbstractFObject {

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
      return "errors_";
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
      .setValue("errors_")
      .setForClass_("foam.core.internal.Errors")
      .build();
  }

  public void installInProto() {

    throw new RuntimeException("installInProto is not implemented");
  }

  public void toSlot() {

    throw new RuntimeException("toSlot is not implemented");
  }

  public void createErrorSlot_() {

    throw new RuntimeException("createErrorSlot_ is not implemented");
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

  protected Errors () {

  }

  public foam.cross_platform.FoamClass getCls_() {

    return CLS_;
  }

  public static foam.cross_platform.FoamClass initClassInfo_() {

    return foam.cross_platform.FoamClass.FoamClassBuilder(null) // TODO give context
      .setId("foam.core.internal.Errors")
      .setParent(foam.cross_platform.AbstractFObject.CLS_)
      .setAxioms(new Object[] {foam.core.internal.Errors.NAME, foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("installInProto")
      .setCode(null)
      .setForClass_("foam.core.internal.Errors")
      .setArgs(new foam.core.Argument[] {  })
      .build(), foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("toSlot")
      .setCode(null)
      .setForClass_("foam.core.internal.Errors")
      .setArgs(new foam.core.Argument[] {  })
      .build(), foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("createErrorSlot_")
      .setCode(null)
      .setForClass_("foam.core.internal.Errors")
      .setArgs(new foam.core.Argument[] {  })
      .build()})
      .build();
  }

  public static Builder ErrorsBuilder(foam.cross_platform.Context x) {

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

    public Errors build() {

      Errors o = new Errors();
      
      if ( name_isSet_ ) {
        o.setName(name_);
      }
      
      o.init();
      return o;
    }
  }
}