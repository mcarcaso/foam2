// WARNING: GENERATED CODE, DO NOT MODIFY BY HAND!
package foam.core;


public class AnonymousAxiom extends foam.cross_platform.AbstractFObject {

  protected foam.cross_platform.GenericFunction installInProto_;

  protected String name_;

  private foam.core.Slot name_$;

  public static foam.core.StringProperty NAME =
    init_NAME();

  protected foam.cross_platform.GenericFunction installInClass_;

  private boolean installInClass_isSet_ =
    false;

  private foam.core.Slot installInClass_$;

  public static foam.core.FunctionProperty INSTALL_IN_CLASS =
    init_INSTALL_IN_CLASS();

  private boolean name_isSet_ =
    false;

  private boolean installInProto_isSet_ =
    false;

  private foam.core.Slot installInProto_$;

  public static foam.core.FunctionProperty INSTALL_IN_PROTO =
    init_INSTALL_IN_PROTO();

  protected foam.cross_platform.GenericFunction buildJavaClass_;

  private boolean buildJavaClass_isSet_ =
    false;

  private foam.core.Slot buildJavaClass_$;

  public static foam.core.FunctionProperty BUILD_JAVA_CLASS =
    init_BUILD_JAVA_CLASS();

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
      return "anonymousAxiom";
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
      .setValue("anonymousAxiom")
      .setName("name")
      .setForClass_("foam.core.AnonymousAxiom")
      .build();
  }

  public foam.core.Slot getInstallInClass$() {

    if ( installInClass_$ == null ) {
      installInClass_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(INSTALL_IN_CLASS)
        .build();
    }
    return installInClass_$;
  }

  public foam.cross_platform.GenericFunction getInstallInClass() {

    if ( ! installInClass_isSet_ ) {
      return foam.cross_platform.NullFunction.NullFunctionBuilder(null).build();
    }
    return installInClass_;
  }

  private foam.cross_platform.GenericFunction installInClass_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (foam.cross_platform.GenericFunction) newValue;
  }

  public void setInstallInClass(Object value) {

    boolean hasOldValue = hasPropertySet("installInClass");
    Object oldValue = hasOldValue ?
      getInstallInClass() :
      null;
    foam.cross_platform.GenericFunction castedValue = installInClass_adapt(oldValue, value, hasOldValue);
    
    installInClass_isSet_ = true;
    installInClass_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "installInClass", null };
    if ( hasListeners(args) ) {
      args[2] = getInstallInClass$();
      pub(args);
    }
  }

  private static foam.core.FunctionProperty init_INSTALL_IN_CLASS() {

    return foam.core.FunctionProperty.FunctionPropertyBuilder(null) // TODO give context
      .setName("installInClass")
      .setForClass_("foam.core.AnonymousAxiom")
      .build();
  }

  public foam.core.Slot getInstallInProto$() {

    if ( installInProto_$ == null ) {
      installInProto_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(INSTALL_IN_PROTO)
        .build();
    }
    return installInProto_$;
  }

  public foam.cross_platform.GenericFunction getInstallInProto() {

    if ( ! installInProto_isSet_ ) {
      return foam.cross_platform.NullFunction.NullFunctionBuilder(null).build();
    }
    return installInProto_;
  }

  private foam.cross_platform.GenericFunction installInProto_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (foam.cross_platform.GenericFunction) newValue;
  }

  public void setInstallInProto(Object value) {

    boolean hasOldValue = hasPropertySet("installInProto");
    Object oldValue = hasOldValue ?
      getInstallInProto() :
      null;
    foam.cross_platform.GenericFunction castedValue = installInProto_adapt(oldValue, value, hasOldValue);
    
    installInProto_isSet_ = true;
    installInProto_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "installInProto", null };
    if ( hasListeners(args) ) {
      args[2] = getInstallInProto$();
      pub(args);
    }
  }

  private static foam.core.FunctionProperty init_INSTALL_IN_PROTO() {

    return foam.core.FunctionProperty.FunctionPropertyBuilder(null) // TODO give context
      .setName("installInProto")
      .setForClass_("foam.core.AnonymousAxiom")
      .build();
  }

  public foam.core.Slot getBuildJavaClass$() {

    if ( buildJavaClass_$ == null ) {
      buildJavaClass_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(BUILD_JAVA_CLASS)
        .build();
    }
    return buildJavaClass_$;
  }

  public foam.cross_platform.GenericFunction getBuildJavaClass() {

    if ( ! buildJavaClass_isSet_ ) {
      return foam.cross_platform.NullFunction.NullFunctionBuilder(null).build();
    }
    return buildJavaClass_;
  }

  private foam.cross_platform.GenericFunction buildJavaClass_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (foam.cross_platform.GenericFunction) newValue;
  }

  public void setBuildJavaClass(Object value) {

    boolean hasOldValue = hasPropertySet("buildJavaClass");
    Object oldValue = hasOldValue ?
      getBuildJavaClass() :
      null;
    foam.cross_platform.GenericFunction castedValue = buildJavaClass_adapt(oldValue, value, hasOldValue);
    
    buildJavaClass_isSet_ = true;
    buildJavaClass_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "buildJavaClass", null };
    if ( hasListeners(args) ) {
      args[2] = getBuildJavaClass$();
      pub(args);
    }
  }

  private static foam.core.FunctionProperty init_BUILD_JAVA_CLASS() {

    return foam.core.FunctionProperty.FunctionPropertyBuilder(null) // TODO give context
      .setName("buildJavaClass")
      .setForClass_("foam.core.AnonymousAxiom")
      .build();
  }

  public String toString() {

    throw new RuntimeException("toString is not implemented");
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
    
    
      case "installInClass":
        installInClass_isSet_ = false;
        Object[] installInClassArgs = new Object[] { "propertyChange", "installInClass", null };
        if ( hasListeners(installInClassArgs) ) {
          installInClassArgs[2] = getInstallInClass$();
          pub(installInClassArgs);
        }
        return;
    
    
      case "installInProto":
        installInProto_isSet_ = false;
        Object[] installInProtoArgs = new Object[] { "propertyChange", "installInProto", null };
        if ( hasListeners(installInProtoArgs) ) {
          installInProtoArgs[2] = getInstallInProto$();
          pub(installInProtoArgs);
        }
        return;
    
    
      case "buildJavaClass":
        buildJavaClass_isSet_ = false;
        Object[] buildJavaClassArgs = new Object[] { "propertyChange", "buildJavaClass", null };
        if ( hasListeners(buildJavaClassArgs) ) {
          buildJavaClassArgs[2] = getBuildJavaClass$();
          pub(buildJavaClassArgs);
        }
        return;
    
    }
    
    super.clearProperty(name);
    
  }

  public Object getProperty(String name) {

    switch(name) {
    
      case "name":
        return getName();
    
    
      case "installInClass":
        return getInstallInClass();
    
    
      case "installInProto":
        return getInstallInProto();
    
    
      case "buildJavaClass":
        return getBuildJavaClass();
    
    }
    return super.getProperty(name);
  }

  public foam.core.Slot getSlot(String name) {

    switch(name) {
    
      case "name":
        return getName$();
    
    
      case "installInClass":
        return getInstallInClass$();
    
    
      case "installInProto":
        return getInstallInProto$();
    
    
      case "buildJavaClass":
        return getBuildJavaClass$();
    
    }
    return super.getSlot(name);
  }

  public boolean hasPropertySet(String name) {

    switch(name) {
    
      case "name":
        return name_isSet_;
    
    
      case "installInClass":
        return installInClass_isSet_;
    
    
      case "installInProto":
        return installInProto_isSet_;
    
    
      case "buildJavaClass":
        return buildJavaClass_isSet_;
    
    }
    
    return super.hasPropertySet(name);
    
  }

  public void setProperty(String name, Object value) {

    switch(name) {
    
      case "name":
        setName((String) value);
        return;
    
    
      case "installInClass":
        setInstallInClass((foam.cross_platform.GenericFunction) value);
        return;
    
    
      case "installInProto":
        setInstallInProto((foam.cross_platform.GenericFunction) value);
        return;
    
    
      case "buildJavaClass":
        setBuildJavaClass((foam.cross_platform.GenericFunction) value);
        return;
    
    }
    
    super.setProperty(name, value);
    
  }

  protected AnonymousAxiom () {

  }

  public foam.cross_platform.FoamClass getCls_() {

    return CLS_;
  }

  public static foam.cross_platform.FoamClass initClassInfo_() {

    return foam.cross_platform.FoamClass.FoamClassBuilder(null) // TODO give context
      .setId("foam.core.AnonymousAxiom")
      .setParent(foam.cross_platform.AbstractFObject.CLS_)
      .setAxioms(new Object[] {foam.core.AnonymousAxiom.NAME, foam.core.AnonymousAxiom.INSTALL_IN_CLASS, foam.core.AnonymousAxiom.INSTALL_IN_PROTO, foam.core.AnonymousAxiom.BUILD_JAVA_CLASS})
      .build();
  }

  public static Builder AnonymousAxiomBuilder(foam.cross_platform.Context x) {

    return new Builder();
  }
  public static class Builder {

    private boolean name_isSet_ =
      false;

    private String name_;

    private boolean installInClass_isSet_ =
      false;

    private foam.cross_platform.GenericFunction installInClass_;

    private boolean installInProto_isSet_ =
      false;

    private foam.cross_platform.GenericFunction installInProto_;

    private boolean buildJavaClass_isSet_ =
      false;

    private foam.cross_platform.GenericFunction buildJavaClass_;


    public Builder setName(String value) {

      name_isSet_ = true;
      name_ = value;
      return this;
    }

    public Builder setInstallInClass(foam.cross_platform.GenericFunction value) {

      installInClass_isSet_ = true;
      installInClass_ = value;
      return this;
    }

    public Builder setInstallInProto(foam.cross_platform.GenericFunction value) {

      installInProto_isSet_ = true;
      installInProto_ = value;
      return this;
    }

    public Builder setBuildJavaClass(foam.cross_platform.GenericFunction value) {

      buildJavaClass_isSet_ = true;
      buildJavaClass_ = value;
      return this;
    }

    private Builder() {

    }

    public AnonymousAxiom build() {

      AnonymousAxiom o = new AnonymousAxiom();
      
      if ( name_isSet_ ) {
        o.setName(name_);
      }
      
      if ( installInClass_isSet_ ) {
        o.setInstallInClass(installInClass_);
      }
      
      if ( installInProto_isSet_ ) {
        o.setInstallInProto(installInProto_);
      }
      
      if ( buildJavaClass_isSet_ ) {
        o.setBuildJavaClass(buildJavaClass_);
      }
      
      o.init();
      return o;
    }
  }
}