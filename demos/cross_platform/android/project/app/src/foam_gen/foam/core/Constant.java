// WARNING: GENERATED CODE, DO NOT MODIFY BY HAND!
package foam.core;


/**
* An Axiom for defining class constants. 
*/
public class Constant extends foam.cross_platform.AbstractFObject {

  private foam.core.Slot swiftName_$;

  protected Object name_;

  private foam.core.Slot name_$;

  public static foam.core.Property NAME =
    init_NAME();

  protected foam.cross_platform.FoamClass of_;

  private boolean of_isSet_ =
    false;

  private foam.core.Slot of_$;

  public static foam.core.ClassProperty OF =
    init_OF();

  protected Object type_;

  private boolean type_isSet_ =
    false;

  private foam.core.Slot type_$;

  public static foam.core.Property TYPE =
    init_TYPE();

  protected String[] flags_;

  private boolean flags_isSet_ =
    false;

  private foam.core.Slot flags_$;

  public static foam.core.StringArrayProperty FLAGS =
    init_FLAGS();

  protected Object value_;

  private boolean value_isSet_ =
    false;

  private foam.core.Slot value_$;

  public static foam.core.Property VALUE =
    init_VALUE();

  protected Object factory_;

  private boolean factory_isSet_ =
    false;

  private foam.core.Slot factory_$;

  public static foam.core.Property FACTORY =
    init_FACTORY();

  protected Object documentation_;

  private boolean documentation_isSet_ =
    false;

  private foam.core.Slot documentation_$;

  public static foam.core.Property DOCUMENTATION =
    init_DOCUMENTATION();

  protected String swiftName_;

  private boolean swiftName_isSet_ =
    false;

  private boolean name_isSet_ =
    false;

  public static foam.core.StringProperty SWIFT_NAME =
    init_SWIFT_NAME();

  protected String swiftFactory_;

  private boolean swiftFactory_isSet_ =
    false;

  private foam.core.Slot swiftFactory_$;

  public static foam.core.StringProperty SWIFT_FACTORY =
    init_SWIFT_FACTORY();

  protected String swiftValue_;

  private boolean swiftValue_isSet_ =
    false;

  private foam.core.Slot swiftValue_$;

  public static foam.core.StringProperty SWIFT_VALUE =
    init_SWIFT_VALUE();

  protected Object javaValue_;

  private boolean javaValue_isSet_ =
    false;

  private foam.core.Slot javaValue_$;

  public static foam.core.Property JAVA_VALUE =
    init_JAVA_VALUE();

  protected String androidType_;

  private boolean androidType_isSet_ =
    false;

  private foam.core.Slot androidType_$;

  public static foam.android.tools.AndroidType ANDROID_TYPE =
    init_ANDROID_TYPE();

  protected String androidValue_;

  private boolean androidValue_isSet_ =
    false;

  private foam.core.Slot androidValue_$;

  public static foam.core.StringProperty ANDROID_VALUE =
    init_ANDROID_VALUE();

  protected String androidAxiomName_;

  private boolean androidAxiomName_isSet_ =
    false;

  private foam.core.Slot androidAxiomName_$;

  public static foam.core.StringProperty ANDROID_AXIOM_NAME =
    init_ANDROID_AXIOM_NAME();

  protected String androidAxiomInitializerName_;

  private boolean androidAxiomInitializerName_isSet_ =
    false;

  private foam.core.Slot androidAxiomInitializerName_$;

  public static foam.core.StringProperty ANDROID_AXIOM_INITIALIZER_NAME =
    init_ANDROID_AXIOM_INITIALIZER_NAME();

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
      return null;
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
      .setForClass_("foam.core.Constant")
      .build();
  }

  public foam.core.Slot getOf$() {

    if ( of_$ == null ) {
      of_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(OF)
        .build();
    }
    return of_$;
  }

  public foam.cross_platform.FoamClass getOf() {

    if ( ! of_isSet_ ) {
      return null;
    }
    return of_;
  }

  private foam.cross_platform.FoamClass of_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (foam.cross_platform.FoamClass) newValue;
  }

  public void setOf(Object value) {

    boolean hasOldValue = hasPropertySet("of");
    Object oldValue = hasOldValue ?
      getOf() :
      null;
    foam.cross_platform.FoamClass castedValue = of_adapt(oldValue, value, hasOldValue);
    
    of_isSet_ = true;
    of_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "of", null };
    if ( hasListeners(args) ) {
      args[2] = getOf$();
      pub(args);
    }
  }

  private static foam.core.ClassProperty init_OF() {

    return foam.core.ClassProperty.ClassPropertyBuilder(null) // TODO give context
      .setName("of")
      .setForClass_("foam.core.Constant")
      .build();
  }

  public foam.core.Slot getType$() {

    if ( type_$ == null ) {
      type_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(TYPE)
        .build();
    }
    return type_$;
  }

  public Object getType() {

    if ( ! type_isSet_ ) {
      return null;
    }
    return type_;
  }

  private Object type_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setType(Object value) {

    boolean hasOldValue = hasPropertySet("type");
    Object oldValue = hasOldValue ?
      getType() :
      null;
    Object castedValue = type_adapt(oldValue, value, hasOldValue);
    
    type_isSet_ = true;
    type_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "type", null };
    if ( hasListeners(args) ) {
      args[2] = getType$();
      pub(args);
    }
  }

  private static foam.core.Property init_TYPE() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("type")
      .setForClass_("foam.core.Constant")
      .build();
  }

  public foam.core.Slot getFlags$() {

    if ( flags_$ == null ) {
      flags_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(FLAGS)
        .build();
    }
    return flags_$;
  }

  protected String[] flags_factory_() {

    return new String[0];
  }

  public String[] getFlags() {

    if ( ! flags_isSet_ ) {
      setProperty("flags", flags_factory_());
    }
    return flags_;
  }

  private String[] flags_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String[]) newValue;
  }

  public void setFlags(Object value) {

    boolean hasOldValue = hasPropertySet("flags");
    Object oldValue = hasOldValue ?
      getFlags() :
      null;
    String[] castedValue = flags_adapt(oldValue, value, hasOldValue);
    
    flags_isSet_ = true;
    flags_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "flags", null };
    if ( hasListeners(args) ) {
      args[2] = getFlags$();
      pub(args);
    }
  }

  private static foam.core.StringArrayProperty init_FLAGS() {

    return foam.core.StringArrayProperty.StringArrayPropertyBuilder(null) // TODO give context
      .setName("flags")
      .setForClass_("foam.core.Constant")
      .build();
  }

  public foam.core.Slot getValue$() {

    if ( value_$ == null ) {
      value_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(VALUE)
        .build();
    }
    return value_$;
  }

  public Object getValue() {

    if ( ! value_isSet_ ) {
      return null;
    }
    return value_;
  }

  private Object value_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setValue(Object value) {

    boolean hasOldValue = hasPropertySet("value");
    Object oldValue = hasOldValue ?
      getValue() :
      null;
    Object castedValue = value_adapt(oldValue, value, hasOldValue);
    
    value_isSet_ = true;
    value_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "value", null };
    if ( hasListeners(args) ) {
      args[2] = getValue$();
      pub(args);
    }
  }

  private static foam.core.Property init_VALUE() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("value")
      .setExpression(null)
      .setForClass_("foam.core.Constant")
      .build();
  }

  public foam.core.Slot getFactory$() {

    if ( factory_$ == null ) {
      factory_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(FACTORY)
        .build();
    }
    return factory_$;
  }

  public Object getFactory() {

    if ( ! factory_isSet_ ) {
      return null;
    }
    return factory_;
  }

  private Object factory_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setFactory(Object value) {

    boolean hasOldValue = hasPropertySet("factory");
    Object oldValue = hasOldValue ?
      getFactory() :
      null;
    Object castedValue = factory_adapt(oldValue, value, hasOldValue);
    
    factory_isSet_ = true;
    factory_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "factory", null };
    if ( hasListeners(args) ) {
      args[2] = getFactory$();
      pub(args);
    }
  }

  private static foam.core.Property init_FACTORY() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("factory")
      .setForClass_("foam.core.Constant")
      .build();
  }

  public foam.core.Slot getDocumentation$() {

    if ( documentation_$ == null ) {
      documentation_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(DOCUMENTATION)
        .build();
    }
    return documentation_$;
  }

  public Object getDocumentation() {

    if ( ! documentation_isSet_ ) {
      return null;
    }
    return documentation_;
  }

  private Object documentation_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setDocumentation(Object value) {

    boolean hasOldValue = hasPropertySet("documentation");
    Object oldValue = hasOldValue ?
      getDocumentation() :
      null;
    Object castedValue = documentation_adapt(oldValue, value, hasOldValue);
    
    documentation_isSet_ = true;
    documentation_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "documentation", null };
    if ( hasListeners(args) ) {
      args[2] = getDocumentation$();
      pub(args);
    }
  }

  private static foam.core.Property init_DOCUMENTATION() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("documentation")
      .setForClass_("foam.core.Constant")
      .build();
  }

  public void installInClass() {

    throw new RuntimeException("installInClass is not implemented");
  }

  public void installInProto() {

    throw new RuntimeException("installInProto is not implemented");
  }

  public foam.core.Slot getSwiftName$() {

    if ( swiftName_$ == null ) {
      swiftName_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(SWIFT_NAME)
        .build();
    }
    return swiftName_$;
  }

  public String getSwiftName() {

    if ( ! swiftName_isSet_ ) {
      return "";
    }
    return swiftName_;
  }

  private String swiftName_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setSwiftName(Object value) {

    boolean hasOldValue = hasPropertySet("swiftName");
    Object oldValue = hasOldValue ?
      getSwiftName() :
      null;
    String castedValue = swiftName_adapt(oldValue, value, hasOldValue);
    
    swiftName_isSet_ = true;
    swiftName_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "swiftName", null };
    if ( hasListeners(args) ) {
      args[2] = getSwiftName$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_SWIFT_NAME() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("swiftName")
      .setExpression(null)
      .setForClass_("foam.core.Constant")
      .build();
  }

  public foam.core.Slot getSwiftFactory$() {

    if ( swiftFactory_$ == null ) {
      swiftFactory_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(SWIFT_FACTORY)
        .build();
    }
    return swiftFactory_$;
  }

  public String getSwiftFactory() {

    if ( ! swiftFactory_isSet_ ) {
      return "";
    }
    return swiftFactory_;
  }

  private String swiftFactory_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setSwiftFactory(Object value) {

    boolean hasOldValue = hasPropertySet("swiftFactory");
    Object oldValue = hasOldValue ?
      getSwiftFactory() :
      null;
    String castedValue = swiftFactory_adapt(oldValue, value, hasOldValue);
    
    swiftFactory_isSet_ = true;
    swiftFactory_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "swiftFactory", null };
    if ( hasListeners(args) ) {
      args[2] = getSwiftFactory$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_SWIFT_FACTORY() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("swiftFactory")
      .setForClass_("foam.core.Constant")
      .build();
  }

  public foam.core.Slot getSwiftValue$() {

    if ( swiftValue_$ == null ) {
      swiftValue_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(SWIFT_VALUE)
        .build();
    }
    return swiftValue_$;
  }

  public String getSwiftValue() {

    if ( ! swiftValue_isSet_ ) {
      return "";
    }
    return swiftValue_;
  }

  private String swiftValue_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setSwiftValue(Object value) {

    boolean hasOldValue = hasPropertySet("swiftValue");
    Object oldValue = hasOldValue ?
      getSwiftValue() :
      null;
    String castedValue = swiftValue_adapt(oldValue, value, hasOldValue);
    
    swiftValue_isSet_ = true;
    swiftValue_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "swiftValue", null };
    if ( hasListeners(args) ) {
      args[2] = getSwiftValue$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_SWIFT_VALUE() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("swiftValue")
      .setExpression(null)
      .setForClass_("foam.core.Constant")
      .build();
  }

  public void writeToSwiftClass() {

    throw new RuntimeException("writeToSwiftClass is not implemented");
  }

  public foam.core.Slot getJavaValue$() {

    if ( javaValue_$ == null ) {
      javaValue_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(JAVA_VALUE)
        .build();
    }
    return javaValue_$;
  }

  public Object getJavaValue() {

    if ( ! javaValue_isSet_ ) {
      return null;
    }
    return javaValue_;
  }

  private Object javaValue_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setJavaValue(Object value) {

    boolean hasOldValue = hasPropertySet("javaValue");
    Object oldValue = hasOldValue ?
      getJavaValue() :
      null;
    Object castedValue = javaValue_adapt(oldValue, value, hasOldValue);
    
    javaValue_isSet_ = true;
    javaValue_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "javaValue", null };
    if ( hasListeners(args) ) {
      args[2] = getJavaValue$();
      pub(args);
    }
  }

  private static foam.core.Property init_JAVA_VALUE() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("javaValue")
      .setExpression(null)
      .setForClass_("foam.core.Constant")
      .build();
  }

  public void buildJavaClass() {

    throw new RuntimeException("buildJavaClass is not implemented");
  }

  public foam.core.Slot getAndroidType$() {

    if ( androidType_$ == null ) {
      androidType_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(ANDROID_TYPE)
        .build();
    }
    return androidType_$;
  }

  public String getAndroidType() {

    if ( ! androidType_isSet_ ) {
      return "";
    }
    return androidType_;
  }

  private String androidType_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setAndroidType(Object value) {

    boolean hasOldValue = hasPropertySet("androidType");
    Object oldValue = hasOldValue ?
      getAndroidType() :
      null;
    String castedValue = androidType_adapt(oldValue, value, hasOldValue);
    
    androidType_isSet_ = true;
    androidType_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "androidType", null };
    if ( hasListeners(args) ) {
      args[2] = getAndroidType$();
      pub(args);
    }
  }

  private static foam.android.tools.AndroidType init_ANDROID_TYPE() {

    return foam.android.tools.AndroidType.AndroidTypeBuilder(null) // TODO give context
      .setForClass_("foam.core.Constant")
      .build();
  }

  public foam.core.Slot getAndroidValue$() {

    if ( androidValue_$ == null ) {
      androidValue_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(ANDROID_VALUE)
        .build();
    }
    return androidValue_$;
  }

  public String getAndroidValue() {

    if ( ! androidValue_isSet_ ) {
      return "";
    }
    return androidValue_;
  }

  private String androidValue_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setAndroidValue(Object value) {

    boolean hasOldValue = hasPropertySet("androidValue");
    Object oldValue = hasOldValue ?
      getAndroidValue() :
      null;
    String castedValue = androidValue_adapt(oldValue, value, hasOldValue);
    
    androidValue_isSet_ = true;
    androidValue_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "androidValue", null };
    if ( hasListeners(args) ) {
      args[2] = getAndroidValue$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_ANDROID_VALUE() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("androidValue")
      .setExpression(null)
      .setForClass_("foam.core.Constant")
      .build();
  }

  public foam.core.Slot getAndroidAxiomName$() {

    if ( androidAxiomName_$ == null ) {
      androidAxiomName_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(ANDROID_AXIOM_NAME)
        .build();
    }
    return androidAxiomName_$;
  }

  public String getAndroidAxiomName() {

    if ( ! androidAxiomName_isSet_ ) {
      return "";
    }
    return androidAxiomName_;
  }

  private String androidAxiomName_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setAndroidAxiomName(Object value) {

    boolean hasOldValue = hasPropertySet("androidAxiomName");
    Object oldValue = hasOldValue ?
      getAndroidAxiomName() :
      null;
    String castedValue = androidAxiomName_adapt(oldValue, value, hasOldValue);
    
    androidAxiomName_isSet_ = true;
    androidAxiomName_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "androidAxiomName", null };
    if ( hasListeners(args) ) {
      args[2] = getAndroidAxiomName$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_ANDROID_AXIOM_NAME() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("androidAxiomName")
      .setExpression(null)
      .setForClass_("foam.core.Constant")
      .build();
  }

  public foam.core.Slot getAndroidAxiomInitializerName$() {

    if ( androidAxiomInitializerName_$ == null ) {
      androidAxiomInitializerName_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(ANDROID_AXIOM_INITIALIZER_NAME)
        .build();
    }
    return androidAxiomInitializerName_$;
  }

  public String getAndroidAxiomInitializerName() {

    if ( ! androidAxiomInitializerName_isSet_ ) {
      return "";
    }
    return androidAxiomInitializerName_;
  }

  private String androidAxiomInitializerName_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setAndroidAxiomInitializerName(Object value) {

    boolean hasOldValue = hasPropertySet("androidAxiomInitializerName");
    Object oldValue = hasOldValue ?
      getAndroidAxiomInitializerName() :
      null;
    String castedValue = androidAxiomInitializerName_adapt(oldValue, value, hasOldValue);
    
    androidAxiomInitializerName_isSet_ = true;
    androidAxiomInitializerName_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "androidAxiomInitializerName", null };
    if ( hasListeners(args) ) {
      args[2] = getAndroidAxiomInitializerName$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_ANDROID_AXIOM_INITIALIZER_NAME() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("androidAxiomInitializerName")
      .setExpression(null)
      .setForClass_("foam.core.Constant")
      .build();
  }

  public void buildAndroidClass() {

    throw new RuntimeException("buildAndroidClass is not implemented");
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
    
    
      case "of":
        of_isSet_ = false;
        Object[] ofArgs = new Object[] { "propertyChange", "of", null };
        if ( hasListeners(ofArgs) ) {
          ofArgs[2] = getOf$();
          pub(ofArgs);
        }
        return;
    
    
      case "type":
        type_isSet_ = false;
        Object[] typeArgs = new Object[] { "propertyChange", "type", null };
        if ( hasListeners(typeArgs) ) {
          typeArgs[2] = getType$();
          pub(typeArgs);
        }
        return;
    
    
      case "flags":
        flags_isSet_ = false;
        Object[] flagsArgs = new Object[] { "propertyChange", "flags", null };
        if ( hasListeners(flagsArgs) ) {
          flagsArgs[2] = getFlags$();
          pub(flagsArgs);
        }
        return;
    
    
      case "value":
        value_isSet_ = false;
        Object[] valueArgs = new Object[] { "propertyChange", "value", null };
        if ( hasListeners(valueArgs) ) {
          valueArgs[2] = getValue$();
          pub(valueArgs);
        }
        return;
    
    
      case "factory":
        factory_isSet_ = false;
        Object[] factoryArgs = new Object[] { "propertyChange", "factory", null };
        if ( hasListeners(factoryArgs) ) {
          factoryArgs[2] = getFactory$();
          pub(factoryArgs);
        }
        return;
    
    
      case "documentation":
        documentation_isSet_ = false;
        Object[] documentationArgs = new Object[] { "propertyChange", "documentation", null };
        if ( hasListeners(documentationArgs) ) {
          documentationArgs[2] = getDocumentation$();
          pub(documentationArgs);
        }
        return;
    
    
      case "swiftName":
        swiftName_isSet_ = false;
        Object[] swiftNameArgs = new Object[] { "propertyChange", "swiftName", null };
        if ( hasListeners(swiftNameArgs) ) {
          swiftNameArgs[2] = getSwiftName$();
          pub(swiftNameArgs);
        }
        return;
    
    
      case "swiftFactory":
        swiftFactory_isSet_ = false;
        Object[] swiftFactoryArgs = new Object[] { "propertyChange", "swiftFactory", null };
        if ( hasListeners(swiftFactoryArgs) ) {
          swiftFactoryArgs[2] = getSwiftFactory$();
          pub(swiftFactoryArgs);
        }
        return;
    
    
      case "swiftValue":
        swiftValue_isSet_ = false;
        Object[] swiftValueArgs = new Object[] { "propertyChange", "swiftValue", null };
        if ( hasListeners(swiftValueArgs) ) {
          swiftValueArgs[2] = getSwiftValue$();
          pub(swiftValueArgs);
        }
        return;
    
    
      case "javaValue":
        javaValue_isSet_ = false;
        Object[] javaValueArgs = new Object[] { "propertyChange", "javaValue", null };
        if ( hasListeners(javaValueArgs) ) {
          javaValueArgs[2] = getJavaValue$();
          pub(javaValueArgs);
        }
        return;
    
    
      case "androidType":
        androidType_isSet_ = false;
        Object[] androidTypeArgs = new Object[] { "propertyChange", "androidType", null };
        if ( hasListeners(androidTypeArgs) ) {
          androidTypeArgs[2] = getAndroidType$();
          pub(androidTypeArgs);
        }
        return;
    
    
      case "androidValue":
        androidValue_isSet_ = false;
        Object[] androidValueArgs = new Object[] { "propertyChange", "androidValue", null };
        if ( hasListeners(androidValueArgs) ) {
          androidValueArgs[2] = getAndroidValue$();
          pub(androidValueArgs);
        }
        return;
    
    
      case "androidAxiomName":
        androidAxiomName_isSet_ = false;
        Object[] androidAxiomNameArgs = new Object[] { "propertyChange", "androidAxiomName", null };
        if ( hasListeners(androidAxiomNameArgs) ) {
          androidAxiomNameArgs[2] = getAndroidAxiomName$();
          pub(androidAxiomNameArgs);
        }
        return;
    
    
      case "androidAxiomInitializerName":
        androidAxiomInitializerName_isSet_ = false;
        Object[] androidAxiomInitializerNameArgs = new Object[] { "propertyChange", "androidAxiomInitializerName", null };
        if ( hasListeners(androidAxiomInitializerNameArgs) ) {
          androidAxiomInitializerNameArgs[2] = getAndroidAxiomInitializerName$();
          pub(androidAxiomInitializerNameArgs);
        }
        return;
    
    }
    
    super.clearProperty(name);
    
  }

  public Object getProperty(String name) {

    switch(name) {
    
      case "name":
        return getName();
    
    
      case "of":
        return getOf();
    
    
      case "type":
        return getType();
    
    
      case "flags":
        return getFlags();
    
    
      case "value":
        return getValue();
    
    
      case "factory":
        return getFactory();
    
    
      case "documentation":
        return getDocumentation();
    
    
      case "swiftName":
        return getSwiftName();
    
    
      case "swiftFactory":
        return getSwiftFactory();
    
    
      case "swiftValue":
        return getSwiftValue();
    
    
      case "javaValue":
        return getJavaValue();
    
    
      case "androidType":
        return getAndroidType();
    
    
      case "androidValue":
        return getAndroidValue();
    
    
      case "androidAxiomName":
        return getAndroidAxiomName();
    
    
      case "androidAxiomInitializerName":
        return getAndroidAxiomInitializerName();
    
    }
    return super.getProperty(name);
  }

  public foam.core.Slot getSlot(String name) {

    switch(name) {
    
      case "name":
        return getName$();
    
    
      case "of":
        return getOf$();
    
    
      case "type":
        return getType$();
    
    
      case "flags":
        return getFlags$();
    
    
      case "value":
        return getValue$();
    
    
      case "factory":
        return getFactory$();
    
    
      case "documentation":
        return getDocumentation$();
    
    
      case "swiftName":
        return getSwiftName$();
    
    
      case "swiftFactory":
        return getSwiftFactory$();
    
    
      case "swiftValue":
        return getSwiftValue$();
    
    
      case "javaValue":
        return getJavaValue$();
    
    
      case "androidType":
        return getAndroidType$();
    
    
      case "androidValue":
        return getAndroidValue$();
    
    
      case "androidAxiomName":
        return getAndroidAxiomName$();
    
    
      case "androidAxiomInitializerName":
        return getAndroidAxiomInitializerName$();
    
    }
    return super.getSlot(name);
  }

  public boolean hasPropertySet(String name) {

    switch(name) {
    
      case "name":
        return name_isSet_;
    
    
      case "of":
        return of_isSet_;
    
    
      case "type":
        return type_isSet_;
    
    
      case "flags":
        return flags_isSet_;
    
    
      case "value":
        return value_isSet_;
    
    
      case "factory":
        return factory_isSet_;
    
    
      case "documentation":
        return documentation_isSet_;
    
    
      case "swiftName":
        return swiftName_isSet_;
    
    
      case "swiftFactory":
        return swiftFactory_isSet_;
    
    
      case "swiftValue":
        return swiftValue_isSet_;
    
    
      case "javaValue":
        return javaValue_isSet_;
    
    
      case "androidType":
        return androidType_isSet_;
    
    
      case "androidValue":
        return androidValue_isSet_;
    
    
      case "androidAxiomName":
        return androidAxiomName_isSet_;
    
    
      case "androidAxiomInitializerName":
        return androidAxiomInitializerName_isSet_;
    
    }
    
    return super.hasPropertySet(name);
    
  }

  public void setProperty(String name, Object value) {

    switch(name) {
    
      case "name":
        setName((Object) value);
        return;
    
    
      case "of":
        setOf((foam.cross_platform.FoamClass) value);
        return;
    
    
      case "type":
        setType((Object) value);
        return;
    
    
      case "flags":
        setFlags((String[]) value);
        return;
    
    
      case "value":
        setValue((Object) value);
        return;
    
    
      case "factory":
        setFactory((Object) value);
        return;
    
    
      case "documentation":
        setDocumentation((Object) value);
        return;
    
    
      case "swiftName":
        setSwiftName((String) value);
        return;
    
    
      case "swiftFactory":
        setSwiftFactory((String) value);
        return;
    
    
      case "swiftValue":
        setSwiftValue((String) value);
        return;
    
    
      case "javaValue":
        setJavaValue((Object) value);
        return;
    
    
      case "androidType":
        setAndroidType((String) value);
        return;
    
    
      case "androidValue":
        setAndroidValue((String) value);
        return;
    
    
      case "androidAxiomName":
        setAndroidAxiomName((String) value);
        return;
    
    
      case "androidAxiomInitializerName":
        setAndroidAxiomInitializerName((String) value);
        return;
    
    }
    
    super.setProperty(name, value);
    
  }

  protected Constant () {

  }

  public foam.cross_platform.FoamClass getCls_() {

    return CLS_;
  }

  public static foam.cross_platform.FoamClass initClassInfo_() {

    return foam.cross_platform.FoamClass.FoamClassBuilder(null) // TODO give context
      .setId("foam.core.Constant")
      .setParent(foam.cross_platform.AbstractFObject.CLS_)
      .setAxioms(new Object[] {foam.core.Constant.NAME, foam.core.Constant.OF, foam.core.Constant.TYPE, foam.core.Constant.FLAGS, foam.core.Constant.VALUE, foam.core.Constant.FACTORY, foam.core.Constant.DOCUMENTATION, foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("installInClass")
      .setCode(null)
      .setForClass_("foam.core.Constant")
      .setArgs(new foam.core.Argument[] {  })
      .build(), foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("installInProto")
      .setCode(null)
      .setForClass_("foam.core.Constant")
      .setArgs(new foam.core.Argument[] {  })
      .build(), foam.core.Requires.RequiresBuilder(null) // TODO give context
      .setName("Field")
      .setPath("foam.swift.Field")
      .build(), foam.core.Constant.SWIFT_NAME, foam.core.Constant.SWIFT_FACTORY, foam.core.Constant.SWIFT_VALUE, foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("writeToSwiftClass")
      .setCode(null)
      .setForClass_("foam.core.Constant")
      .setArgs(new foam.core.Argument[] {  })
      .build(), foam.core.Constant.JAVA_VALUE, foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("buildJavaClass")
      .setCode(null)
      .setForClass_("foam.core.Constant")
      .setArgs(new foam.core.Argument[] {  })
      .build(), foam.core.Constant.ANDROID_TYPE, foam.core.Constant.ANDROID_VALUE, foam.core.Constant.ANDROID_AXIOM_NAME, foam.core.Constant.ANDROID_AXIOM_INITIALIZER_NAME, foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("buildAndroidClass")
      .setCode(null)
      .setForClass_("foam.core.Constant")
      .setArgs(new foam.core.Argument[] {  })
      .build()})
      .build();
  }

  public static Builder ConstantBuilder(foam.cross_platform.Context x) {

    return new Builder();
  }
  public static class Builder {

    private String swiftName_;

    private boolean name_isSet_ =
      false;

    private boolean of_isSet_ =
      false;

    private foam.cross_platform.FoamClass of_;

    private boolean type_isSet_ =
      false;

    private Object type_;

    private boolean flags_isSet_ =
      false;

    private String[] flags_;

    private boolean value_isSet_ =
      false;

    private Object value_;

    private boolean factory_isSet_ =
      false;

    private Object factory_;

    private boolean documentation_isSet_ =
      false;

    private Object documentation_;

    private boolean swiftName_isSet_ =
      false;

    private Object name_;

    private boolean swiftFactory_isSet_ =
      false;

    private String swiftFactory_;

    private boolean swiftValue_isSet_ =
      false;

    private String swiftValue_;

    private boolean javaValue_isSet_ =
      false;

    private Object javaValue_;

    private boolean androidType_isSet_ =
      false;

    private String androidType_;

    private boolean androidValue_isSet_ =
      false;

    private String androidValue_;

    private boolean androidAxiomName_isSet_ =
      false;

    private String androidAxiomName_;

    private boolean androidAxiomInitializerName_isSet_ =
      false;

    private String androidAxiomInitializerName_;


    public Builder setName(Object value) {

      name_isSet_ = true;
      name_ = value;
      return this;
    }

    public Builder setOf(foam.cross_platform.FoamClass value) {

      of_isSet_ = true;
      of_ = value;
      return this;
    }

    public Builder setType(Object value) {

      type_isSet_ = true;
      type_ = value;
      return this;
    }

    public Builder setFlags(String[] value) {

      flags_isSet_ = true;
      flags_ = value;
      return this;
    }

    public Builder setValue(Object value) {

      value_isSet_ = true;
      value_ = value;
      return this;
    }

    public Builder setFactory(Object value) {

      factory_isSet_ = true;
      factory_ = value;
      return this;
    }

    public Builder setDocumentation(Object value) {

      documentation_isSet_ = true;
      documentation_ = value;
      return this;
    }

    public Builder setSwiftName(String value) {

      swiftName_isSet_ = true;
      swiftName_ = value;
      return this;
    }

    public Builder setSwiftFactory(String value) {

      swiftFactory_isSet_ = true;
      swiftFactory_ = value;
      return this;
    }

    public Builder setSwiftValue(String value) {

      swiftValue_isSet_ = true;
      swiftValue_ = value;
      return this;
    }

    public Builder setJavaValue(Object value) {

      javaValue_isSet_ = true;
      javaValue_ = value;
      return this;
    }

    public Builder setAndroidType(String value) {

      androidType_isSet_ = true;
      androidType_ = value;
      return this;
    }

    public Builder setAndroidValue(String value) {

      androidValue_isSet_ = true;
      androidValue_ = value;
      return this;
    }

    public Builder setAndroidAxiomName(String value) {

      androidAxiomName_isSet_ = true;
      androidAxiomName_ = value;
      return this;
    }

    public Builder setAndroidAxiomInitializerName(String value) {

      androidAxiomInitializerName_isSet_ = true;
      androidAxiomInitializerName_ = value;
      return this;
    }

    private Builder() {

    }

    public Constant build() {

      Constant o = new Constant();
      
      if ( name_isSet_ ) {
        o.setName(name_);
      }
      
      if ( of_isSet_ ) {
        o.setOf(of_);
      }
      
      if ( type_isSet_ ) {
        o.setType(type_);
      }
      
      if ( flags_isSet_ ) {
        o.setFlags(flags_);
      }
      
      if ( value_isSet_ ) {
        o.setValue(value_);
      }
      
      if ( factory_isSet_ ) {
        o.setFactory(factory_);
      }
      
      if ( documentation_isSet_ ) {
        o.setDocumentation(documentation_);
      }
      
      if ( swiftName_isSet_ ) {
        o.setSwiftName(swiftName_);
      }
      
      if ( swiftFactory_isSet_ ) {
        o.setSwiftFactory(swiftFactory_);
      }
      
      if ( swiftValue_isSet_ ) {
        o.setSwiftValue(swiftValue_);
      }
      
      if ( javaValue_isSet_ ) {
        o.setJavaValue(javaValue_);
      }
      
      if ( androidType_isSet_ ) {
        o.setAndroidType(androidType_);
      }
      
      if ( androidValue_isSet_ ) {
        o.setAndroidValue(androidValue_);
      }
      
      if ( androidAxiomName_isSet_ ) {
        o.setAndroidAxiomName(androidAxiomName_);
      }
      
      if ( androidAxiomInitializerName_isSet_ ) {
        o.setAndroidAxiomInitializerName(androidAxiomInitializerName_);
      }
      
      o.init();
      return o;
    }
  }
}