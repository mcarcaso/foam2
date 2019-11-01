// WARNING: GENERATED CODE, DO NOT MODIFY BY HAND!
package foam.core;


/**
* Describes one argument of a function or method. 
*/
public class Argument extends foam.cross_platform.AbstractFObject {

  protected String swiftExternalName_;

  protected Object name_;

  private foam.core.Slot name_$;

  public static foam.core.Property NAME =
    init_NAME();

  protected Object type_;

  private boolean type_isSet_ =
    false;

  private foam.core.Slot type_$;

  public static foam.core.Property TYPE =
    init_TYPE();

  protected Object of_;

  private boolean of_isSet_ =
    false;

  private foam.core.Slot of_$;

  public static foam.core.Property OF =
    init_OF();

  protected String documentation_;

  private boolean documentation_isSet_ =
    false;

  private foam.core.Slot documentation_$;

  public static foam.core.StringProperty DOCUMENTATION =
    init_DOCUMENTATION();

  protected String swiftLocalName_;

  private boolean swiftLocalName_isSet_ =
    false;

  private foam.core.Slot swiftLocalName_$;

  public static foam.core.StringProperty SWIFT_LOCAL_NAME =
    init_SWIFT_LOCAL_NAME();

  private boolean name_isSet_ =
    false;

  private boolean swiftExternalName_isSet_ =
    false;

  private foam.core.Slot swiftExternalName_$;

  public static foam.core.StringProperty SWIFT_EXTERNAL_NAME =
    init_SWIFT_EXTERNAL_NAME();

  protected String swiftDefaultValue_;

  private boolean swiftDefaultValue_isSet_ =
    false;

  private foam.core.Slot swiftDefaultValue_$;

  public static foam.core.StringProperty SWIFT_DEFAULT_VALUE =
    init_SWIFT_DEFAULT_VALUE();

  protected String[] swiftAnnotations_;

  private boolean swiftAnnotations_isSet_ =
    false;

  private foam.core.Slot swiftAnnotations_$;

  public static foam.core.StringArrayProperty SWIFT_ANNOTATIONS =
    init_SWIFT_ANNOTATIONS();

  protected boolean swiftMutable_;

  private boolean swiftMutable_isSet_ =
    false;

  private foam.core.Slot swiftMutable_$;

  public static foam.core.BooleanProperty SWIFT_MUTABLE =
    init_SWIFT_MUTABLE();

  protected String androidType_;

  private boolean androidType_isSet_ =
    false;

  private foam.core.Slot androidType_$;

  public static foam.android.tools.AndroidType ANDROID_TYPE =
    init_ANDROID_TYPE();

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
      .setForClass_("foam.core.Argument")
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
      .setForClass_("foam.core.Argument")
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

  public Object getOf() {

    if ( ! of_isSet_ ) {
      return null;
    }
    return of_;
  }

  private Object of_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setOf(Object value) {

    boolean hasOldValue = hasPropertySet("of");
    Object oldValue = hasOldValue ?
      getOf() :
      null;
    Object castedValue = of_adapt(oldValue, value, hasOldValue);
    
    of_isSet_ = true;
    of_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "of", null };
    if ( hasListeners(args) ) {
      args[2] = getOf$();
      pub(args);
    }
  }

  private static foam.core.Property init_OF() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("of")
      .setPostSet(null)
      .setForClass_("foam.core.Argument")
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

  public String getDocumentation() {

    if ( ! documentation_isSet_ ) {
      return "";
    }
    return documentation_;
  }

  private String documentation_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setDocumentation(Object value) {

    boolean hasOldValue = hasPropertySet("documentation");
    Object oldValue = hasOldValue ?
      getDocumentation() :
      null;
    String castedValue = documentation_adapt(oldValue, value, hasOldValue);
    
    documentation_isSet_ = true;
    documentation_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "documentation", null };
    if ( hasListeners(args) ) {
      args[2] = getDocumentation$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_DOCUMENTATION() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setValue("")
      .setName("documentation")
      .setForClass_("foam.core.Argument")
      .build();
  }

  public foam.core.Slot getSwiftLocalName$() {

    if ( swiftLocalName_$ == null ) {
      swiftLocalName_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(SWIFT_LOCAL_NAME)
        .build();
    }
    return swiftLocalName_$;
  }

  public String getSwiftLocalName() {

    if ( ! swiftLocalName_isSet_ ) {
      return "";
    }
    return swiftLocalName_;
  }

  private String swiftLocalName_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setSwiftLocalName(Object value) {

    boolean hasOldValue = hasPropertySet("swiftLocalName");
    Object oldValue = hasOldValue ?
      getSwiftLocalName() :
      null;
    String castedValue = swiftLocalName_adapt(oldValue, value, hasOldValue);
    
    swiftLocalName_isSet_ = true;
    swiftLocalName_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "swiftLocalName", null };
    if ( hasListeners(args) ) {
      args[2] = getSwiftLocalName$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_SWIFT_LOCAL_NAME() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("swiftLocalName")
      .setExpression(null)
      .setForClass_("foam.core.Argument")
      .build();
  }

  public foam.core.Slot getSwiftExternalName$() {

    if ( swiftExternalName_$ == null ) {
      swiftExternalName_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(SWIFT_EXTERNAL_NAME)
        .build();
    }
    return swiftExternalName_$;
  }

  public String getSwiftExternalName() {

    if ( ! swiftExternalName_isSet_ ) {
      return "_";
    }
    return swiftExternalName_;
  }

  private String swiftExternalName_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setSwiftExternalName(Object value) {

    boolean hasOldValue = hasPropertySet("swiftExternalName");
    Object oldValue = hasOldValue ?
      getSwiftExternalName() :
      null;
    String castedValue = swiftExternalName_adapt(oldValue, value, hasOldValue);
    
    swiftExternalName_isSet_ = true;
    swiftExternalName_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "swiftExternalName", null };
    if ( hasListeners(args) ) {
      args[2] = getSwiftExternalName$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_SWIFT_EXTERNAL_NAME() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setValue("_")
      .setName("swiftExternalName")
      .setForClass_("foam.core.Argument")
      .build();
  }

  public foam.core.Slot getSwiftDefaultValue$() {

    if ( swiftDefaultValue_$ == null ) {
      swiftDefaultValue_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(SWIFT_DEFAULT_VALUE)
        .build();
    }
    return swiftDefaultValue_$;
  }

  public String getSwiftDefaultValue() {

    if ( ! swiftDefaultValue_isSet_ ) {
      return "";
    }
    return swiftDefaultValue_;
  }

  private String swiftDefaultValue_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setSwiftDefaultValue(Object value) {

    boolean hasOldValue = hasPropertySet("swiftDefaultValue");
    Object oldValue = hasOldValue ?
      getSwiftDefaultValue() :
      null;
    String castedValue = swiftDefaultValue_adapt(oldValue, value, hasOldValue);
    
    swiftDefaultValue_isSet_ = true;
    swiftDefaultValue_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "swiftDefaultValue", null };
    if ( hasListeners(args) ) {
      args[2] = getSwiftDefaultValue$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_SWIFT_DEFAULT_VALUE() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("swiftDefaultValue")
      .setForClass_("foam.core.Argument")
      .build();
  }

  public foam.core.Slot getSwiftAnnotations$() {

    if ( swiftAnnotations_$ == null ) {
      swiftAnnotations_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(SWIFT_ANNOTATIONS)
        .build();
    }
    return swiftAnnotations_$;
  }

  protected String[] swiftAnnotations_factory_() {

    return new String[0];
  }

  public String[] getSwiftAnnotations() {

    if ( ! swiftAnnotations_isSet_ ) {
      setProperty("swiftAnnotations", swiftAnnotations_factory_());
    }
    return swiftAnnotations_;
  }

  private String[] swiftAnnotations_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String[]) newValue;
  }

  public void setSwiftAnnotations(Object value) {

    boolean hasOldValue = hasPropertySet("swiftAnnotations");
    Object oldValue = hasOldValue ?
      getSwiftAnnotations() :
      null;
    String[] castedValue = swiftAnnotations_adapt(oldValue, value, hasOldValue);
    
    swiftAnnotations_isSet_ = true;
    swiftAnnotations_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "swiftAnnotations", null };
    if ( hasListeners(args) ) {
      args[2] = getSwiftAnnotations$();
      pub(args);
    }
  }

  private static foam.core.StringArrayProperty init_SWIFT_ANNOTATIONS() {

    return foam.core.StringArrayProperty.StringArrayPropertyBuilder(null) // TODO give context
      .setName("swiftAnnotations")
      .setPreSet(null)
      .setForClass_("foam.core.Argument")
      .build();
  }

  public foam.core.Slot getSwiftMutable$() {

    if ( swiftMutable_$ == null ) {
      swiftMutable_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(SWIFT_MUTABLE)
        .build();
    }
    return swiftMutable_$;
  }

  public boolean getSwiftMutable() {

    if ( ! swiftMutable_isSet_ ) {
      return false;
    }
    return swiftMutable_;
  }

  private boolean swiftMutable_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (boolean) newValue;
  }

  public void setSwiftMutable(Object value) {

    boolean hasOldValue = hasPropertySet("swiftMutable");
    Object oldValue = hasOldValue ?
      getSwiftMutable() :
      null;
    boolean castedValue = swiftMutable_adapt(oldValue, value, hasOldValue);
    
    swiftMutable_isSet_ = true;
    swiftMutable_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "swiftMutable", null };
    if ( hasListeners(args) ) {
      args[2] = getSwiftMutable$();
      pub(args);
    }
  }

  private static foam.core.BooleanProperty init_SWIFT_MUTABLE() {

    return foam.core.BooleanProperty.BooleanPropertyBuilder(null) // TODO give context
      .setName("swiftMutable")
      .setForClass_("foam.core.Argument")
      .build();
  }

  public void toSwiftArg() {

    throw new RuntimeException("toSwiftArg is not implemented");
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
      .setForClass_("foam.core.Argument")
      .build();
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
    
    
      case "type":
        type_isSet_ = false;
        Object[] typeArgs = new Object[] { "propertyChange", "type", null };
        if ( hasListeners(typeArgs) ) {
          typeArgs[2] = getType$();
          pub(typeArgs);
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
    
    
      case "documentation":
        documentation_isSet_ = false;
        Object[] documentationArgs = new Object[] { "propertyChange", "documentation", null };
        if ( hasListeners(documentationArgs) ) {
          documentationArgs[2] = getDocumentation$();
          pub(documentationArgs);
        }
        return;
    
    
      case "swiftLocalName":
        swiftLocalName_isSet_ = false;
        Object[] swiftLocalNameArgs = new Object[] { "propertyChange", "swiftLocalName", null };
        if ( hasListeners(swiftLocalNameArgs) ) {
          swiftLocalNameArgs[2] = getSwiftLocalName$();
          pub(swiftLocalNameArgs);
        }
        return;
    
    
      case "swiftExternalName":
        swiftExternalName_isSet_ = false;
        Object[] swiftExternalNameArgs = new Object[] { "propertyChange", "swiftExternalName", null };
        if ( hasListeners(swiftExternalNameArgs) ) {
          swiftExternalNameArgs[2] = getSwiftExternalName$();
          pub(swiftExternalNameArgs);
        }
        return;
    
    
      case "swiftDefaultValue":
        swiftDefaultValue_isSet_ = false;
        Object[] swiftDefaultValueArgs = new Object[] { "propertyChange", "swiftDefaultValue", null };
        if ( hasListeners(swiftDefaultValueArgs) ) {
          swiftDefaultValueArgs[2] = getSwiftDefaultValue$();
          pub(swiftDefaultValueArgs);
        }
        return;
    
    
      case "swiftAnnotations":
        swiftAnnotations_isSet_ = false;
        Object[] swiftAnnotationsArgs = new Object[] { "propertyChange", "swiftAnnotations", null };
        if ( hasListeners(swiftAnnotationsArgs) ) {
          swiftAnnotationsArgs[2] = getSwiftAnnotations$();
          pub(swiftAnnotationsArgs);
        }
        return;
    
    
      case "swiftMutable":
        swiftMutable_isSet_ = false;
        Object[] swiftMutableArgs = new Object[] { "propertyChange", "swiftMutable", null };
        if ( hasListeners(swiftMutableArgs) ) {
          swiftMutableArgs[2] = getSwiftMutable$();
          pub(swiftMutableArgs);
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
    
    }
    
    super.clearProperty(name);
    
  }

  public Object getProperty(String name) {

    switch(name) {
    
      case "name":
        return getName();
    
    
      case "type":
        return getType();
    
    
      case "of":
        return getOf();
    
    
      case "documentation":
        return getDocumentation();
    
    
      case "swiftLocalName":
        return getSwiftLocalName();
    
    
      case "swiftExternalName":
        return getSwiftExternalName();
    
    
      case "swiftDefaultValue":
        return getSwiftDefaultValue();
    
    
      case "swiftAnnotations":
        return getSwiftAnnotations();
    
    
      case "swiftMutable":
        return getSwiftMutable();
    
    
      case "androidType":
        return getAndroidType();
    
    }
    return super.getProperty(name);
  }

  public foam.core.Slot getSlot(String name) {

    switch(name) {
    
      case "name":
        return getName$();
    
    
      case "type":
        return getType$();
    
    
      case "of":
        return getOf$();
    
    
      case "documentation":
        return getDocumentation$();
    
    
      case "swiftLocalName":
        return getSwiftLocalName$();
    
    
      case "swiftExternalName":
        return getSwiftExternalName$();
    
    
      case "swiftDefaultValue":
        return getSwiftDefaultValue$();
    
    
      case "swiftAnnotations":
        return getSwiftAnnotations$();
    
    
      case "swiftMutable":
        return getSwiftMutable$();
    
    
      case "androidType":
        return getAndroidType$();
    
    }
    return super.getSlot(name);
  }

  public boolean hasPropertySet(String name) {

    switch(name) {
    
      case "name":
        return name_isSet_;
    
    
      case "type":
        return type_isSet_;
    
    
      case "of":
        return of_isSet_;
    
    
      case "documentation":
        return documentation_isSet_;
    
    
      case "swiftLocalName":
        return swiftLocalName_isSet_;
    
    
      case "swiftExternalName":
        return swiftExternalName_isSet_;
    
    
      case "swiftDefaultValue":
        return swiftDefaultValue_isSet_;
    
    
      case "swiftAnnotations":
        return swiftAnnotations_isSet_;
    
    
      case "swiftMutable":
        return swiftMutable_isSet_;
    
    
      case "androidType":
        return androidType_isSet_;
    
    }
    
    return super.hasPropertySet(name);
    
  }

  public void setProperty(String name, Object value) {

    switch(name) {
    
      case "name":
        setName((Object) value);
        return;
    
    
      case "type":
        setType((Object) value);
        return;
    
    
      case "of":
        setOf((Object) value);
        return;
    
    
      case "documentation":
        setDocumentation((String) value);
        return;
    
    
      case "swiftLocalName":
        setSwiftLocalName((String) value);
        return;
    
    
      case "swiftExternalName":
        setSwiftExternalName((String) value);
        return;
    
    
      case "swiftDefaultValue":
        setSwiftDefaultValue((String) value);
        return;
    
    
      case "swiftAnnotations":
        setSwiftAnnotations((String[]) value);
        return;
    
    
      case "swiftMutable":
        setSwiftMutable((boolean) value);
        return;
    
    
      case "androidType":
        setAndroidType((String) value);
        return;
    
    }
    
    super.setProperty(name, value);
    
  }

  protected Argument () {

  }

  public foam.cross_platform.FoamClass getCls_() {

    return CLS_;
  }

  public static foam.cross_platform.FoamClass initClassInfo_() {

    return foam.cross_platform.FoamClass.FoamClassBuilder(null) // TODO give context
      .setId("foam.core.Argument")
      .setParent(foam.cross_platform.AbstractFObject.CLS_)
      .setAxioms(new Object[] {foam.core.Argument.NAME, foam.core.Argument.TYPE, foam.core.Argument.OF, foam.core.Argument.DOCUMENTATION, foam.core.Requires.RequiresBuilder(null) // TODO give context
      .setName("Argument")
      .setPath("foam.swift.Argument")
      .build(), foam.core.Argument.SWIFT_LOCAL_NAME, foam.core.Argument.SWIFT_EXTERNAL_NAME, foam.core.Argument.SWIFT_DEFAULT_VALUE, foam.core.Argument.SWIFT_ANNOTATIONS, foam.core.Argument.SWIFT_MUTABLE, foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("toSwiftArg")
      .setCode(null)
      .setForClass_("foam.core.Argument")
      .setArgs(new foam.core.Argument[] {  })
      .build(), foam.core.Argument.ANDROID_TYPE})
      .build();
  }

  public static Builder ArgumentBuilder(foam.cross_platform.Context x) {

    return new Builder();
  }
  public static class Builder {

    private boolean swiftExternalName_isSet_ =
      false;

    private boolean name_isSet_ =
      false;

    private boolean type_isSet_ =
      false;

    private Object type_;

    private boolean of_isSet_ =
      false;

    private Object of_;

    private boolean documentation_isSet_ =
      false;

    private String documentation_;

    private boolean swiftLocalName_isSet_ =
      false;

    private String swiftLocalName_;

    private Object name_;

    private String swiftExternalName_;

    private boolean swiftDefaultValue_isSet_ =
      false;

    private String swiftDefaultValue_;

    private boolean swiftAnnotations_isSet_ =
      false;

    private String[] swiftAnnotations_;

    private boolean swiftMutable_isSet_ =
      false;

    private boolean swiftMutable_;

    private boolean androidType_isSet_ =
      false;

    private String androidType_;


    public Builder setName(Object value) {

      name_isSet_ = true;
      name_ = value;
      return this;
    }

    public Builder setType(Object value) {

      type_isSet_ = true;
      type_ = value;
      return this;
    }

    public Builder setOf(Object value) {

      of_isSet_ = true;
      of_ = value;
      return this;
    }

    public Builder setDocumentation(String value) {

      documentation_isSet_ = true;
      documentation_ = value;
      return this;
    }

    public Builder setSwiftLocalName(String value) {

      swiftLocalName_isSet_ = true;
      swiftLocalName_ = value;
      return this;
    }

    public Builder setSwiftExternalName(String value) {

      swiftExternalName_isSet_ = true;
      swiftExternalName_ = value;
      return this;
    }

    public Builder setSwiftDefaultValue(String value) {

      swiftDefaultValue_isSet_ = true;
      swiftDefaultValue_ = value;
      return this;
    }

    public Builder setSwiftAnnotations(String[] value) {

      swiftAnnotations_isSet_ = true;
      swiftAnnotations_ = value;
      return this;
    }

    public Builder setSwiftMutable(boolean value) {

      swiftMutable_isSet_ = true;
      swiftMutable_ = value;
      return this;
    }

    public Builder setAndroidType(String value) {

      androidType_isSet_ = true;
      androidType_ = value;
      return this;
    }

    private Builder() {

    }

    public Argument build() {

      Argument o = new Argument();
      
      if ( name_isSet_ ) {
        o.setName(name_);
      }
      
      if ( type_isSet_ ) {
        o.setType(type_);
      }
      
      if ( of_isSet_ ) {
        o.setOf(of_);
      }
      
      if ( documentation_isSet_ ) {
        o.setDocumentation(documentation_);
      }
      
      if ( swiftLocalName_isSet_ ) {
        o.setSwiftLocalName(swiftLocalName_);
      }
      
      if ( swiftExternalName_isSet_ ) {
        o.setSwiftExternalName(swiftExternalName_);
      }
      
      if ( swiftDefaultValue_isSet_ ) {
        o.setSwiftDefaultValue(swiftDefaultValue_);
      }
      
      if ( swiftAnnotations_isSet_ ) {
        o.setSwiftAnnotations(swiftAnnotations_);
      }
      
      if ( swiftMutable_isSet_ ) {
        o.setSwiftMutable(swiftMutable_);
      }
      
      if ( androidType_isSet_ ) {
        o.setAndroidType(androidType_);
      }
      
      o.init();
      return o;
    }
  }
}