// WARNING: GENERATED CODE, DO NOT MODIFY BY HAND!
package foam.core;


public class Requires extends foam.cross_platform.AbstractFObject {

  private foam.core.Slot flags_$;

  protected Object name_;

  private foam.core.Slot name_$;

  public static foam.core.Property NAME =
    init_NAME();

  protected Object path_;

  private boolean path_isSet_ =
    false;

  private foam.core.Slot path_$;

  public static foam.core.Property PATH =
    init_PATH();

  protected Object flags_;

  private boolean flags_isSet_ =
    false;

  private boolean name_isSet_ =
    false;

  public static foam.core.Property FLAGS =
    init_FLAGS();

  protected Object swiftType_;

  private boolean swiftType_isSet_ =
    false;

  private foam.core.Slot swiftType_$;

  public static foam.core.Property SWIFT_TYPE =
    init_SWIFT_TYPE();

  protected Object javaPath_;

  private boolean javaPath_isSet_ =
    false;

  private foam.core.Slot javaPath_$;

  public static foam.core.Property JAVA_PATH =
    init_JAVA_PATH();

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
      .setFactory(null)
      .setForClass_("foam.core.Requires")
      .build();
  }

  public foam.core.Slot getPath$() {

    if ( path_$ == null ) {
      path_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(PATH)
        .build();
    }
    return path_$;
  }

  public Object getPath() {

    if ( ! path_isSet_ ) {
      return null;
    }
    return path_;
  }

  private Object path_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setPath(Object value) {

    boolean hasOldValue = hasPropertySet("path");
    Object oldValue = hasOldValue ?
      getPath() :
      null;
    Object castedValue = path_adapt(oldValue, value, hasOldValue);
    
    path_isSet_ = true;
    path_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "path", null };
    if ( hasListeners(args) ) {
      args[2] = getPath$();
      pub(args);
    }
  }

  private static foam.core.Property init_PATH() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("path")
      .setForClass_("foam.core.Requires")
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

  public Object getFlags() {

    if ( ! flags_isSet_ ) {
      return null;
    }
    return flags_;
  }

  private Object flags_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setFlags(Object value) {

    boolean hasOldValue = hasPropertySet("flags");
    Object oldValue = hasOldValue ?
      getFlags() :
      null;
    Object castedValue = flags_adapt(oldValue, value, hasOldValue);
    
    flags_isSet_ = true;
    flags_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "flags", null };
    if ( hasListeners(args) ) {
      args[2] = getFlags$();
      pub(args);
    }
  }

  private static foam.core.Property init_FLAGS() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("flags")
      .setForClass_("foam.core.Requires")
      .build();
  }

  public void installInProto() {

    throw new RuntimeException("installInProto is not implemented");
  }

  public foam.core.Slot getSwiftType$() {

    if ( swiftType_$ == null ) {
      swiftType_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(SWIFT_TYPE)
        .build();
    }
    return swiftType_$;
  }

  public Object getSwiftType() {

    if ( ! swiftType_isSet_ ) {
      return null;
    }
    return swiftType_;
  }

  private Object swiftType_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setSwiftType(Object value) {

    boolean hasOldValue = hasPropertySet("swiftType");
    Object oldValue = hasOldValue ?
      getSwiftType() :
      null;
    Object castedValue = swiftType_adapt(oldValue, value, hasOldValue);
    
    swiftType_isSet_ = true;
    swiftType_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "swiftType", null };
    if ( hasListeners(args) ) {
      args[2] = getSwiftType$();
      pub(args);
    }
  }

  private static foam.core.Property init_SWIFT_TYPE() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("swiftType")
      .setExpression(null)
      .setForClass_("foam.core.Requires")
      .build();
  }

  public void writeToSwiftClass() {

    throw new RuntimeException("writeToSwiftClass is not implemented");
  }

  public void swiftInitializer() {

    throw new RuntimeException("swiftInitializer is not implemented");
  }

  public foam.core.Slot getJavaPath$() {

    if ( javaPath_$ == null ) {
      javaPath_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(JAVA_PATH)
        .build();
    }
    return javaPath_$;
  }

  public Object getJavaPath() {

    if ( ! javaPath_isSet_ ) {
      return null;
    }
    return javaPath_;
  }

  private Object javaPath_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setJavaPath(Object value) {

    boolean hasOldValue = hasPropertySet("javaPath");
    Object oldValue = hasOldValue ?
      getJavaPath() :
      null;
    Object castedValue = javaPath_adapt(oldValue, value, hasOldValue);
    
    javaPath_isSet_ = true;
    javaPath_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "javaPath", null };
    if ( hasListeners(args) ) {
      args[2] = getJavaPath$();
      pub(args);
    }
  }

  private static foam.core.Property init_JAVA_PATH() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("javaPath")
      .setExpression(null)
      .setForClass_("foam.core.Requires")
      .build();
  }

  public void buildAndroidClass() {

    throw new RuntimeException("buildAndroidClass is not implemented");
  }

  public void getDeps() {

    throw new RuntimeException("getDeps is not implemented");
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
    
    
      case "path":
        path_isSet_ = false;
        Object[] pathArgs = new Object[] { "propertyChange", "path", null };
        if ( hasListeners(pathArgs) ) {
          pathArgs[2] = getPath$();
          pub(pathArgs);
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
    
    
      case "swiftType":
        swiftType_isSet_ = false;
        Object[] swiftTypeArgs = new Object[] { "propertyChange", "swiftType", null };
        if ( hasListeners(swiftTypeArgs) ) {
          swiftTypeArgs[2] = getSwiftType$();
          pub(swiftTypeArgs);
        }
        return;
    
    
      case "javaPath":
        javaPath_isSet_ = false;
        Object[] javaPathArgs = new Object[] { "propertyChange", "javaPath", null };
        if ( hasListeners(javaPathArgs) ) {
          javaPathArgs[2] = getJavaPath$();
          pub(javaPathArgs);
        }
        return;
    
    }
    
    super.clearProperty(name);
    
  }

  public Object getProperty(String name) {

    switch(name) {
    
      case "name":
        return getName();
    
    
      case "path":
        return getPath();
    
    
      case "flags":
        return getFlags();
    
    
      case "swiftType":
        return getSwiftType();
    
    
      case "javaPath":
        return getJavaPath();
    
    }
    return super.getProperty(name);
  }

  public foam.core.Slot getSlot(String name) {

    switch(name) {
    
      case "name":
        return getName$();
    
    
      case "path":
        return getPath$();
    
    
      case "flags":
        return getFlags$();
    
    
      case "swiftType":
        return getSwiftType$();
    
    
      case "javaPath":
        return getJavaPath$();
    
    }
    return super.getSlot(name);
  }

  public boolean hasPropertySet(String name) {

    switch(name) {
    
      case "name":
        return name_isSet_;
    
    
      case "path":
        return path_isSet_;
    
    
      case "flags":
        return flags_isSet_;
    
    
      case "swiftType":
        return swiftType_isSet_;
    
    
      case "javaPath":
        return javaPath_isSet_;
    
    }
    
    return super.hasPropertySet(name);
    
  }

  public void setProperty(String name, Object value) {

    switch(name) {
    
      case "name":
        setName((Object) value);
        return;
    
    
      case "path":
        setPath((Object) value);
        return;
    
    
      case "flags":
        setFlags((Object) value);
        return;
    
    
      case "swiftType":
        setSwiftType((Object) value);
        return;
    
    
      case "javaPath":
        setJavaPath((Object) value);
        return;
    
    }
    
    super.setProperty(name, value);
    
  }

  protected Requires () {

  }

  public foam.cross_platform.FoamClass getCls_() {

    return CLS_;
  }

  public static foam.cross_platform.FoamClass initClassInfo_() {

    return foam.cross_platform.FoamClass.FoamClassBuilder(null) // TODO give context
      .setId("foam.core.Requires")
      .setParent(foam.cross_platform.AbstractFObject.CLS_)
      .setAxioms(new Object[] {foam.core.Requires.NAME, foam.core.Requires.PATH, foam.core.Requires.FLAGS, foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("installInProto")
      .setCode(null)
      .setForClass_("foam.core.Requires")
      .setArgs(new foam.core.Argument[] {  })
      .build(), foam.core.Requires.RequiresBuilder(null) // TODO give context
      .setName("Argument")
      .setPath("foam.swift.Argument")
      .build(), foam.core.Requires.RequiresBuilder(null) // TODO give context
      .setName("Method")
      .setPath("foam.swift.Method")
      .build(), foam.core.Requires.SWIFT_TYPE, foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("writeToSwiftClass")
      .setCode(null)
      .setForClass_("foam.core.Requires")
      .setArgs(new foam.core.Argument[] {  })
      .build(), foam.templates.TemplateAxiom.TemplateAxiomBuilder(null) // TODO give context
      .setTemplate("\nreturn (x ?? __subContext__).create(<%=this.swiftType%>.self, args: args)!\n      ")
      .setArgs(new foam.core.Argument[] {  })
      .setName("swiftInitializer")
      .setForClass_("foam.core.Requires")
      .build(), foam.core.Requires.JAVA_PATH, foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("buildAndroidClass")
      .setCode(null)
      .setForClass_("foam.core.Requires")
      .setArgs(new foam.core.Argument[] {  })
      .build(), foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("getDeps")
      .setCode(null)
      .setForClass_("foam.core.Requires")
      .setArgs(new foam.core.Argument[] {  })
      .build()})
      .build();
  }

  public static Builder RequiresBuilder(foam.cross_platform.Context x) {

    return new Builder();
  }
  public static class Builder {

    private boolean name_isSet_ =
      false;

    private Object name_;

    private boolean path_isSet_ =
      false;

    private Object path_;

    private boolean flags_isSet_ =
      false;

    private Object flags_;

    private boolean swiftType_isSet_ =
      false;

    private Object swiftType_;

    private boolean javaPath_isSet_ =
      false;

    private Object javaPath_;


    public Builder setName(Object value) {

      name_isSet_ = true;
      name_ = value;
      return this;
    }

    public Builder setPath(Object value) {

      path_isSet_ = true;
      path_ = value;
      return this;
    }

    public Builder setFlags(Object value) {

      flags_isSet_ = true;
      flags_ = value;
      return this;
    }

    public Builder setSwiftType(Object value) {

      swiftType_isSet_ = true;
      swiftType_ = value;
      return this;
    }

    public Builder setJavaPath(Object value) {

      javaPath_isSet_ = true;
      javaPath_ = value;
      return this;
    }

    private Builder() {

    }

    public Requires build() {

      Requires o = new Requires();
      
      if ( name_isSet_ ) {
        o.setName(name_);
      }
      
      if ( path_isSet_ ) {
        o.setPath(path_);
      }
      
      if ( flags_isSet_ ) {
        o.setFlags(flags_);
      }
      
      if ( swiftType_isSet_ ) {
        o.setSwiftType(swiftType_);
      }
      
      if ( javaPath_isSet_ ) {
        o.setJavaPath(javaPath_);
      }
      
      o.init();
      return o;
    }
  }
}