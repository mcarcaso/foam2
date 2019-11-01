// WARNING: GENERATED CODE, DO NOT MODIFY BY HAND!
package foam.pattern;


public class Multiton extends foam.cross_platform.AbstractFObject {

  protected Object javaName_;

  protected Object name_;

  private foam.core.Slot name_$;

  public static foam.core.Property NAME =
    init_NAME();

  protected String property_;

  private boolean property_isSet_ =
    false;

  private foam.core.Slot property_$;

  public static foam.core.StringProperty PROPERTY =
    init_PROPERTY();

  private boolean name_isSet_ =
    false;

  private boolean javaName_isSet_ =
    false;

  private foam.core.Slot javaName_$;

  public static foam.core.Property JAVA_NAME =
    init_JAVA_NAME();

  protected Object javaInfoName_;

  private boolean javaInfoName_isSet_ =
    false;

  private foam.core.Slot javaInfoName_$;

  public static foam.core.Property JAVA_INFO_NAME =
    init_JAVA_INFO_NAME();

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
      .setForClass_("foam.pattern.Multiton")
      .build();
  }

  public foam.core.Slot getProperty$() {

    if ( property_$ == null ) {
      property_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(PROPERTY)
        .build();
    }
    return property_$;
  }

  public String getProperty() {

    if ( ! property_isSet_ ) {
      return "";
    }
    return property_;
  }

  private String property_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setProperty(Object value) {

    boolean hasOldValue = hasPropertySet("property");
    Object oldValue = hasOldValue ?
      getProperty() :
      null;
    String castedValue = property_adapt(oldValue, value, hasOldValue);
    
    property_isSet_ = true;
    property_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "property", null };
    if ( hasListeners(args) ) {
      args[2] = getProperty$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_PROPERTY() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("property")
      .setForClass_("foam.pattern.Multiton")
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

  public foam.core.Slot getJavaName$() {

    if ( javaName_$ == null ) {
      javaName_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(JAVA_NAME)
        .build();
    }
    return javaName_$;
  }

  public Object getJavaName() {

    if ( ! javaName_isSet_ ) {
      return "Multiton";
    }
    return javaName_;
  }

  private Object javaName_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setJavaName(Object value) {

    boolean hasOldValue = hasPropertySet("javaName");
    Object oldValue = hasOldValue ?
      getJavaName() :
      null;
    Object castedValue = javaName_adapt(oldValue, value, hasOldValue);
    
    javaName_isSet_ = true;
    javaName_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "javaName", null };
    if ( hasListeners(args) ) {
      args[2] = getJavaName$();
      pub(args);
    }
  }

  private static foam.core.Property init_JAVA_NAME() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("javaName")
      .setValue("Multiton")
      .setForClass_("foam.pattern.Multiton")
      .build();
  }

  public foam.core.Slot getJavaInfoName$() {

    if ( javaInfoName_$ == null ) {
      javaInfoName_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(JAVA_INFO_NAME)
        .build();
    }
    return javaInfoName_$;
  }

  public Object getJavaInfoName() {

    if ( ! javaInfoName_isSet_ ) {
      return null;
    }
    return javaInfoName_;
  }

  private Object javaInfoName_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setJavaInfoName(Object value) {

    boolean hasOldValue = hasPropertySet("javaInfoName");
    Object oldValue = hasOldValue ?
      getJavaInfoName() :
      null;
    Object castedValue = javaInfoName_adapt(oldValue, value, hasOldValue);
    
    javaInfoName_isSet_ = true;
    javaInfoName_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "javaInfoName", null };
    if ( hasListeners(args) ) {
      args[2] = getJavaInfoName$();
      pub(args);
    }
  }

  private static foam.core.Property init_JAVA_INFO_NAME() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("javaInfoName")
      .setExpression(null)
      .setForClass_("foam.pattern.Multiton")
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
    
    
      case "property":
        property_isSet_ = false;
        Object[] propertyArgs = new Object[] { "propertyChange", "property", null };
        if ( hasListeners(propertyArgs) ) {
          propertyArgs[2] = getProperty$();
          pub(propertyArgs);
        }
        return;
    
    
      case "javaName":
        javaName_isSet_ = false;
        Object[] javaNameArgs = new Object[] { "propertyChange", "javaName", null };
        if ( hasListeners(javaNameArgs) ) {
          javaNameArgs[2] = getJavaName$();
          pub(javaNameArgs);
        }
        return;
    
    
      case "javaInfoName":
        javaInfoName_isSet_ = false;
        Object[] javaInfoNameArgs = new Object[] { "propertyChange", "javaInfoName", null };
        if ( hasListeners(javaInfoNameArgs) ) {
          javaInfoNameArgs[2] = getJavaInfoName$();
          pub(javaInfoNameArgs);
        }
        return;
    
    }
    
    super.clearProperty(name);
    
  }

  public Object getProperty(String name) {

    switch(name) {
    
      case "name":
        return getName();
    
    
      case "property":
        return getProperty();
    
    
      case "javaName":
        return getJavaName();
    
    
      case "javaInfoName":
        return getJavaInfoName();
    
    }
    return super.getProperty(name);
  }

  public foam.core.Slot getSlot(String name) {

    switch(name) {
    
      case "name":
        return getName$();
    
    
      case "property":
        return getProperty$();
    
    
      case "javaName":
        return getJavaName$();
    
    
      case "javaInfoName":
        return getJavaInfoName$();
    
    }
    return super.getSlot(name);
  }

  public boolean hasPropertySet(String name) {

    switch(name) {
    
      case "name":
        return name_isSet_;
    
    
      case "property":
        return property_isSet_;
    
    
      case "javaName":
        return javaName_isSet_;
    
    
      case "javaInfoName":
        return javaInfoName_isSet_;
    
    }
    
    return super.hasPropertySet(name);
    
  }

  public void setProperty(String name, Object value) {

    switch(name) {
    
      case "name":
        setName((Object) value);
        return;
    
    
      case "property":
        setProperty((String) value);
        return;
    
    
      case "javaName":
        setJavaName((Object) value);
        return;
    
    
      case "javaInfoName":
        setJavaInfoName((Object) value);
        return;
    
    }
    
    super.setProperty(name, value);
    
  }

  protected Multiton () {

  }

  public foam.cross_platform.FoamClass getCls_() {

    return CLS_;
  }

  public static foam.cross_platform.FoamClass initClassInfo_() {

    return foam.cross_platform.FoamClass.FoamClassBuilder(null) // TODO give context
      .setId("foam.pattern.Multiton")
      .setParent(foam.cross_platform.AbstractFObject.CLS_)
      .setAxioms(new Object[] {foam.pattern.Multiton.NAME, foam.pattern.Multiton.PROPERTY, foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("installInClass")
      .setCode(null)
      .setForClass_("foam.pattern.Multiton")
      .setArgs(new foam.core.Argument[] {  })
      .build(), foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("installInProto")
      .setCode(null)
      .setForClass_("foam.pattern.Multiton")
      .setArgs(new foam.core.Argument[] {  })
      .build(), foam.core.Requires.RequiresBuilder(null) // TODO give context
      .setName("Field")
      .setPath("foam.swift.Field")
      .build(), foam.core.Requires.RequiresBuilder(null) // TODO give context
      .setName("Method")
      .setPath("foam.swift.Method")
      .build(), foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("writeToSwiftClass")
      .setCode(null)
      .setForClass_("foam.pattern.Multiton")
      .setArgs(new foam.core.Argument[] {  })
      .build(), foam.pattern.Multiton.JAVA_NAME, foam.pattern.Multiton.JAVA_INFO_NAME, foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("buildJavaClass")
      .setCode(null)
      .setForClass_("foam.pattern.Multiton")
      .setArgs(new foam.core.Argument[] {  })
      .build()})
      .build();
  }

  public static Builder MultitonBuilder(foam.cross_platform.Context x) {

    return new Builder();
  }
  public static class Builder {

    private boolean name_isSet_ =
      false;

    private Object name_;

    private boolean property_isSet_ =
      false;

    private String property_;

    private boolean javaName_isSet_ =
      false;

    private Object javaName_;

    private boolean javaInfoName_isSet_ =
      false;

    private Object javaInfoName_;


    public Builder setName(Object value) {

      name_isSet_ = true;
      name_ = value;
      return this;
    }

    public Builder setProperty(String value) {

      property_isSet_ = true;
      property_ = value;
      return this;
    }

    public Builder setJavaName(Object value) {

      javaName_isSet_ = true;
      javaName_ = value;
      return this;
    }

    public Builder setJavaInfoName(Object value) {

      javaInfoName_isSet_ = true;
      javaInfoName_ = value;
      return this;
    }

    private Builder() {

    }

    public Multiton build() {

      Multiton o = new Multiton();
      
      if ( name_isSet_ ) {
        o.setName(name_);
      }
      
      if ( property_isSet_ ) {
        o.setProperty(property_);
      }
      
      if ( javaName_isSet_ ) {
        o.setJavaName(javaName_);
      }
      
      if ( javaInfoName_isSet_ ) {
        o.setJavaInfoName(javaInfoName_);
      }
      
      o.init();
      return o;
    }
  }
}