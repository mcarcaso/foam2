// WARNING: GENERATED CODE, DO NOT MODIFY BY HAND!
package foam.core;


/**
* An Axiom for defining static methods. 
*/
public class Static extends foam.core.AbstractMethod {

  protected String swiftSynchronizedMethodName_;

  protected Object name_;

  private foam.core.Slot name_$;

  public static foam.core.Property NAME =
    init_NAME();

  protected Object code_;

  private boolean code_isSet_ =
    false;

  private foam.core.Slot code_$;

  public static foam.core.Property CODE =
    init_CODE();

  protected Object documentation_;

  private boolean documentation_isSet_ =
    false;

  private foam.core.Slot documentation_$;

  public static foam.core.Property DOCUMENTATION =
    init_DOCUMENTATION();

  protected Object flags_;

  private boolean flags_isSet_ =
    false;

  private foam.core.Slot flags_$;

  public static foam.core.Property FLAGS =
    init_FLAGS();

  protected Object type_;

  private boolean type_isSet_ =
    false;

  private foam.core.Slot type_$;

  public static foam.core.Property TYPE =
    init_TYPE();

  protected boolean async_;

  private boolean async_isSet_ =
    false;

  private foam.core.Slot async_$;

  public static foam.core.BooleanProperty ASYNC =
    init_ASYNC();

  protected Object synchronized_;

  private boolean synchronized_isSet_ =
    false;

  private foam.core.Slot synchronized_$;

  public static foam.core.Property SYNCHRONIZED =
    init_SYNCHRONIZED();

  protected boolean remote_;

  private boolean remote_isSet_ =
    false;

  private foam.core.Slot remote_$;

  public static foam.core.BooleanProperty REMOTE =
    init_REMOTE();

  protected Object forClass__;

  private boolean forClass__isSet_ =
    false;

  private foam.core.Slot forClass__$;

  public static foam.core.Property FOR_CLASS_ =
    init_FOR_CLASS_();

  protected foam.core.Argument[] args_;

  private boolean args_isSet_ =
    false;

  private foam.core.Slot args_$;

  public static foam.core.FObjectArray ARGS =
    init_ARGS();

  protected String swiftName_;

  private boolean swiftName_isSet_ =
    false;

  private foam.core.Slot swiftName_$;

  public static foam.core.StringProperty SWIFT_NAME =
    init_SWIFT_NAME();

  protected String swiftPrivateAxiomName_;

  private boolean swiftPrivateAxiomName_isSet_ =
    false;

  private foam.core.Slot swiftPrivateAxiomName_$;

  public static foam.core.StringProperty SWIFT_PRIVATE_AXIOM_NAME =
    init_SWIFT_PRIVATE_AXIOM_NAME();

  protected String swiftAxiomName_;

  private boolean swiftAxiomName_isSet_ =
    false;

  private foam.core.Slot swiftAxiomName_$;

  public static foam.core.StringProperty SWIFT_AXIOM_NAME =
    init_SWIFT_AXIOM_NAME();

  protected String swiftSlotName_;

  private boolean swiftSlotName_isSet_ =
    false;

  private foam.core.Slot swiftSlotName_$;

  public static foam.core.StringProperty SWIFT_SLOT_NAME =
    init_SWIFT_SLOT_NAME();

  protected boolean swiftSynchronized_;

  private boolean swiftSynchronized_isSet_ =
    false;

  private foam.core.Slot swiftSynchronized_$;

  public static foam.core.BooleanProperty SWIFT_SYNCHRONIZED =
    init_SWIFT_SYNCHRONIZED();

  protected String swiftSynchronizedSemaphoreName_;

  private boolean swiftSynchronizedSemaphoreName_isSet_ =
    false;

  private foam.core.Slot swiftSynchronizedSemaphoreName_$;

  public static foam.core.StringProperty SWIFT_SYNCHRONIZED_SEMAPHORE_NAME =
    init_SWIFT_SYNCHRONIZED_SEMAPHORE_NAME();

  private boolean name_isSet_ =
    false;

  private boolean swiftSynchronizedMethodName_isSet_ =
    false;

  private foam.core.Slot swiftSynchronizedMethodName_$;

  public static foam.core.StringProperty SWIFT_SYNCHRONIZED_METHOD_NAME =
    init_SWIFT_SYNCHRONIZED_METHOD_NAME();

  protected boolean swiftThrows_;

  private boolean swiftThrows_isSet_ =
    false;

  private foam.core.Slot swiftThrows_$;

  public static foam.core.BooleanProperty SWIFT_THROWS =
    init_SWIFT_THROWS();

  protected Object swiftArgs_;

  private boolean swiftArgs_isSet_ =
    false;

  private foam.core.Slot swiftArgs_$;

  public static foam.core.Property SWIFT_ARGS =
    init_SWIFT_ARGS();

  protected String swiftVisibility_;

  private boolean swiftVisibility_isSet_ =
    false;

  private foam.core.Slot swiftVisibility_$;

  public static foam.core.StringProperty SWIFT_VISIBILITY =
    init_SWIFT_VISIBILITY();

  protected String swiftCode_;

  private boolean swiftCode_isSet_ =
    false;

  private foam.core.Slot swiftCode_$;

  public static foam.core.StringProperty SWIFT_CODE =
    init_SWIFT_CODE();

  protected boolean swiftOverride_;

  private boolean swiftOverride_isSet_ =
    false;

  private foam.core.Slot swiftOverride_$;

  public static foam.core.BooleanProperty SWIFT_OVERRIDE =
    init_SWIFT_OVERRIDE();

  protected boolean swiftSupport_;

  private boolean swiftSupport_isSet_ =
    false;

  private foam.core.Slot swiftSupport_$;

  public static foam.core.BooleanProperty SWIFT_SUPPORT =
    init_SWIFT_SUPPORT();

  protected String swiftType_;

  private boolean swiftType_isSet_ =
    false;

  private foam.core.Slot swiftType_$;

  public static foam.core.StringProperty SWIFT_TYPE =
    init_SWIFT_TYPE();

  protected String[] swiftAnnotations_;

  private boolean swiftAnnotations_isSet_ =
    false;

  private foam.core.Slot swiftAnnotations_$;

  public static foam.core.StringArrayProperty SWIFT_ANNOTATIONS =
    init_SWIFT_ANNOTATIONS();

  protected boolean final_;

  private boolean final_isSet_ =
    false;

  private foam.core.Slot final_$;

  public static foam.core.BooleanProperty FINAL =
    init_FINAL();

  protected boolean abstract_;

  private boolean abstract_isSet_ =
    false;

  private foam.core.Slot abstract_$;

  public static foam.core.BooleanProperty ABSTRACT =
    init_ABSTRACT();

  protected String[] javaThrows_;

  private boolean javaThrows_isSet_ =
    false;

  private foam.core.Slot javaThrows_$;

  public static foam.core.StringArrayProperty JAVA_THROWS =
    init_JAVA_THROWS();

  protected boolean javaSupport_;

  private boolean javaSupport_isSet_ =
    false;

  private foam.core.Slot javaSupport_$;

  public static foam.core.BooleanProperty JAVA_SUPPORT =
    init_JAVA_SUPPORT();

  protected String androidCode_;

  private boolean androidCode_isSet_ =
    false;

  private foam.core.Slot androidCode_$;

  public static foam.core.StringProperty ANDROID_CODE =
    init_ANDROID_CODE();

  protected boolean androidIsStatic_;

  private boolean androidIsStatic_isSet_ =
    false;

  private foam.core.Slot androidIsStatic_$;

  public static foam.core.BooleanProperty ANDROID_IS_STATIC =
    init_ANDROID_IS_STATIC();

  protected String androidType_;

  private boolean androidType_isSet_ =
    false;

  private foam.core.Slot androidType_$;

  public static foam.android.tools.AndroidType ANDROID_TYPE =
    init_ANDROID_TYPE();

  public static foam.cross_platform.FoamClass CLS_ =
    initClassInfo_();


  public void isStatic() {

    throw new RuntimeException("isStatic is not implemented");
  }

  public void installInClass() {

    throw new RuntimeException("installInClass is not implemented");
  }

  public void installInProto() {

    throw new RuntimeException("installInProto is not implemented");
  }

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
      .setRequired(true)
      .build();
  }

  public foam.core.Slot getCode$() {

    if ( code_$ == null ) {
      code_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(CODE)
        .build();
    }
    return code_$;
  }

  public Object getCode() {

    if ( ! code_isSet_ ) {
      return null;
    }
    return code_;
  }

  private Object code_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setCode(Object value) {

    boolean hasOldValue = hasPropertySet("code");
    Object oldValue = hasOldValue ?
      getCode() :
      null;
    Object castedValue = code_adapt(oldValue, value, hasOldValue);
    
    code_isSet_ = true;
    code_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "code", null };
    if ( hasListeners(args) ) {
      args[2] = getCode$();
      pub(args);
    }
  }

  private static foam.core.Property init_CODE() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("code")
      .setRequired(false)
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
      return "Void";
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
      .setValue("Void")
      .build();
  }

  public foam.core.Slot getAsync$() {

    if ( async_$ == null ) {
      async_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(ASYNC)
        .build();
    }
    return async_$;
  }

  public boolean getAsync() {

    if ( ! async_isSet_ ) {
      return false;
    }
    return async_;
  }

  private boolean async_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (boolean) newValue;
  }

  public void setAsync(Object value) {

    boolean hasOldValue = hasPropertySet("async");
    Object oldValue = hasOldValue ?
      getAsync() :
      null;
    boolean castedValue = async_adapt(oldValue, value, hasOldValue);
    
    async_isSet_ = true;
    async_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "async", null };
    if ( hasListeners(args) ) {
      args[2] = getAsync$();
      pub(args);
    }
  }

  private static foam.core.BooleanProperty init_ASYNC() {

    return foam.core.BooleanProperty.BooleanPropertyBuilder(null) // TODO give context
      .setValue(false)
      .setName("async")
      .setForClass_("foam.core.AbstractMethod")
      .build();
  }

  public foam.core.Slot getSynchronized$() {

    if ( synchronized_$ == null ) {
      synchronized_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(SYNCHRONIZED)
        .build();
    }
    return synchronized_$;
  }

  public Object getSynchronized() {

    if ( ! synchronized_isSet_ ) {
      return null;
    }
    return synchronized_;
  }

  private Object synchronized_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setSynchronized(Object value) {

    boolean hasOldValue = hasPropertySet("synchronized");
    Object oldValue = hasOldValue ?
      getSynchronized() :
      null;
    Object castedValue = synchronized_adapt(oldValue, value, hasOldValue);
    
    synchronized_isSet_ = true;
    synchronized_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "synchronized", null };
    if ( hasListeners(args) ) {
      args[2] = getSynchronized$();
      pub(args);
    }
  }

  private static foam.core.Property init_SYNCHRONIZED() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("synchronized")
      .build();
  }

  public foam.core.Slot getRemote$() {

    if ( remote_$ == null ) {
      remote_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(REMOTE)
        .build();
    }
    return remote_$;
  }

  public boolean getRemote() {

    if ( ! remote_isSet_ ) {
      return false;
    }
    return remote_;
  }

  private boolean remote_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (boolean) newValue;
  }

  public void setRemote(Object value) {

    boolean hasOldValue = hasPropertySet("remote");
    Object oldValue = hasOldValue ?
      getRemote() :
      null;
    boolean castedValue = remote_adapt(oldValue, value, hasOldValue);
    
    remote_isSet_ = true;
    remote_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "remote", null };
    if ( hasListeners(args) ) {
      args[2] = getRemote$();
      pub(args);
    }
  }

  private static foam.core.BooleanProperty init_REMOTE() {

    return foam.core.BooleanProperty.BooleanPropertyBuilder(null) // TODO give context
      .setName("remote")
      .setForClass_("foam.core.AbstractMethod")
      .build();
  }

  public foam.core.Slot getForClass_$() {

    if ( forClass__$ == null ) {
      forClass__$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(FOR_CLASS_)
        .build();
    }
    return forClass__$;
  }

  public Object getForClass_() {

    if ( ! forClass__isSet_ ) {
      return null;
    }
    return forClass__;
  }

  private Object forClass__adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setForClass_(Object value) {

    boolean hasOldValue = hasPropertySet("forClass_");
    Object oldValue = hasOldValue ?
      getForClass_() :
      null;
    Object castedValue = forClass__adapt(oldValue, value, hasOldValue);
    
    forClass__isSet_ = true;
    forClass__ = castedValue;
    Object[] args = new Object[] { "propertyChange", "forClass_", null };
    if ( hasListeners(args) ) {
      args[2] = getForClass_$();
      pub(args);
    }
  }

  private static foam.core.Property init_FOR_CLASS_() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("forClass_")
      .build();
  }

  public foam.core.Slot getArgs$() {

    if ( args_$ == null ) {
      args_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(ARGS)
        .build();
    }
    return args_$;
  }

  protected foam.core.Argument[] args_factory_() {

    return new foam.core.Argument[0];
  }

  public foam.core.Argument[] getArgs() {

    if ( ! args_isSet_ ) {
      setProperty("args", args_factory_());
    }
    return args_;
  }

  private foam.core.Argument[] args_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (foam.core.Argument[]) newValue;
  }

  public void setArgs(Object value) {

    boolean hasOldValue = hasPropertySet("args");
    Object oldValue = hasOldValue ?
      getArgs() :
      null;
    foam.core.Argument[] castedValue = args_adapt(oldValue, value, hasOldValue);
    
    args_isSet_ = true;
    args_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "args", null };
    if ( hasListeners(args) ) {
      args[2] = getArgs$();
      pub(args);
    }
  }

  private static foam.core.FObjectArray init_ARGS() {

    return foam.core.FObjectArray.FObjectArrayBuilder(null) // TODO give context
      .setOf("foam.core.Argument")
      .setType("foam.core.Argument[]")
      .setAdaptArrayElement(null)
      .setName("args")
      .setForClass_("foam.core.AbstractMethod")
      .build();
  }

  protected foam.core.Argument.Builder Argument_create() {

    return foam.core.Argument.ArgumentBuilder(getSubX());
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
      .setForClass_("foam.core.AbstractMethod")
      .build();
  }

  public foam.core.Slot getSwiftPrivateAxiomName$() {

    if ( swiftPrivateAxiomName_$ == null ) {
      swiftPrivateAxiomName_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(SWIFT_PRIVATE_AXIOM_NAME)
        .build();
    }
    return swiftPrivateAxiomName_$;
  }

  public String getSwiftPrivateAxiomName() {

    if ( ! swiftPrivateAxiomName_isSet_ ) {
      return "";
    }
    return swiftPrivateAxiomName_;
  }

  private String swiftPrivateAxiomName_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setSwiftPrivateAxiomName(Object value) {

    boolean hasOldValue = hasPropertySet("swiftPrivateAxiomName");
    Object oldValue = hasOldValue ?
      getSwiftPrivateAxiomName() :
      null;
    String castedValue = swiftPrivateAxiomName_adapt(oldValue, value, hasOldValue);
    
    swiftPrivateAxiomName_isSet_ = true;
    swiftPrivateAxiomName_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "swiftPrivateAxiomName", null };
    if ( hasListeners(args) ) {
      args[2] = getSwiftPrivateAxiomName$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_SWIFT_PRIVATE_AXIOM_NAME() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("swiftPrivateAxiomName")
      .setExpression(null)
      .setForClass_("foam.core.AbstractMethod")
      .build();
  }

  public foam.core.Slot getSwiftAxiomName$() {

    if ( swiftAxiomName_$ == null ) {
      swiftAxiomName_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(SWIFT_AXIOM_NAME)
        .build();
    }
    return swiftAxiomName_$;
  }

  public String getSwiftAxiomName() {

    if ( ! swiftAxiomName_isSet_ ) {
      return "";
    }
    return swiftAxiomName_;
  }

  private String swiftAxiomName_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setSwiftAxiomName(Object value) {

    boolean hasOldValue = hasPropertySet("swiftAxiomName");
    Object oldValue = hasOldValue ?
      getSwiftAxiomName() :
      null;
    String castedValue = swiftAxiomName_adapt(oldValue, value, hasOldValue);
    
    swiftAxiomName_isSet_ = true;
    swiftAxiomName_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "swiftAxiomName", null };
    if ( hasListeners(args) ) {
      args[2] = getSwiftAxiomName$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_SWIFT_AXIOM_NAME() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("swiftAxiomName")
      .setExpression(null)
      .setForClass_("foam.core.AbstractMethod")
      .build();
  }

  public foam.core.Slot getSwiftSlotName$() {

    if ( swiftSlotName_$ == null ) {
      swiftSlotName_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(SWIFT_SLOT_NAME)
        .build();
    }
    return swiftSlotName_$;
  }

  public String getSwiftSlotName() {

    if ( ! swiftSlotName_isSet_ ) {
      return "";
    }
    return swiftSlotName_;
  }

  private String swiftSlotName_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setSwiftSlotName(Object value) {

    boolean hasOldValue = hasPropertySet("swiftSlotName");
    Object oldValue = hasOldValue ?
      getSwiftSlotName() :
      null;
    String castedValue = swiftSlotName_adapt(oldValue, value, hasOldValue);
    
    swiftSlotName_isSet_ = true;
    swiftSlotName_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "swiftSlotName", null };
    if ( hasListeners(args) ) {
      args[2] = getSwiftSlotName$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_SWIFT_SLOT_NAME() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("swiftSlotName")
      .setExpression(null)
      .setForClass_("foam.core.AbstractMethod")
      .build();
  }

  public foam.core.Slot getSwiftSynchronized$() {

    if ( swiftSynchronized_$ == null ) {
      swiftSynchronized_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(SWIFT_SYNCHRONIZED)
        .build();
    }
    return swiftSynchronized_$;
  }

  public boolean getSwiftSynchronized() {

    if ( ! swiftSynchronized_isSet_ ) {
      return false;
    }
    return swiftSynchronized_;
  }

  private boolean swiftSynchronized_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (boolean) newValue;
  }

  public void setSwiftSynchronized(Object value) {

    boolean hasOldValue = hasPropertySet("swiftSynchronized");
    Object oldValue = hasOldValue ?
      getSwiftSynchronized() :
      null;
    boolean castedValue = swiftSynchronized_adapt(oldValue, value, hasOldValue);
    
    swiftSynchronized_isSet_ = true;
    swiftSynchronized_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "swiftSynchronized", null };
    if ( hasListeners(args) ) {
      args[2] = getSwiftSynchronized$();
      pub(args);
    }
  }

  private static foam.core.BooleanProperty init_SWIFT_SYNCHRONIZED() {

    return foam.core.BooleanProperty.BooleanPropertyBuilder(null) // TODO give context
      .setName("swiftSynchronized")
      .setExpression(null)
      .setForClass_("foam.core.AbstractMethod")
      .build();
  }

  public foam.core.Slot getSwiftSynchronizedSemaphoreName$() {

    if ( swiftSynchronizedSemaphoreName_$ == null ) {
      swiftSynchronizedSemaphoreName_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(SWIFT_SYNCHRONIZED_SEMAPHORE_NAME)
        .build();
    }
    return swiftSynchronizedSemaphoreName_$;
  }

  public String getSwiftSynchronizedSemaphoreName() {

    if ( ! swiftSynchronizedSemaphoreName_isSet_ ) {
      return "";
    }
    return swiftSynchronizedSemaphoreName_;
  }

  private String swiftSynchronizedSemaphoreName_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setSwiftSynchronizedSemaphoreName(Object value) {

    boolean hasOldValue = hasPropertySet("swiftSynchronizedSemaphoreName");
    Object oldValue = hasOldValue ?
      getSwiftSynchronizedSemaphoreName() :
      null;
    String castedValue = swiftSynchronizedSemaphoreName_adapt(oldValue, value, hasOldValue);
    
    swiftSynchronizedSemaphoreName_isSet_ = true;
    swiftSynchronizedSemaphoreName_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "swiftSynchronizedSemaphoreName", null };
    if ( hasListeners(args) ) {
      args[2] = getSwiftSynchronizedSemaphoreName$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_SWIFT_SYNCHRONIZED_SEMAPHORE_NAME() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("swiftSynchronizedSemaphoreName")
      .setExpression(null)
      .setForClass_("foam.core.AbstractMethod")
      .build();
  }

  public foam.core.Slot getSwiftSynchronizedMethodName$() {

    if ( swiftSynchronizedMethodName_$ == null ) {
      swiftSynchronizedMethodName_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(SWIFT_SYNCHRONIZED_METHOD_NAME)
        .build();
    }
    return swiftSynchronizedMethodName_$;
  }

  public String getSwiftSynchronizedMethodName() {

    if ( ! swiftSynchronizedMethodName_isSet_ ) {
      return "";
    }
    return swiftSynchronizedMethodName_;
  }

  private String swiftSynchronizedMethodName_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setSwiftSynchronizedMethodName(Object value) {

    boolean hasOldValue = hasPropertySet("swiftSynchronizedMethodName");
    Object oldValue = hasOldValue ?
      getSwiftSynchronizedMethodName() :
      null;
    String castedValue = swiftSynchronizedMethodName_adapt(oldValue, value, hasOldValue);
    
    swiftSynchronizedMethodName_isSet_ = true;
    swiftSynchronizedMethodName_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "swiftSynchronizedMethodName", null };
    if ( hasListeners(args) ) {
      args[2] = getSwiftSynchronizedMethodName$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_SWIFT_SYNCHRONIZED_METHOD_NAME() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("swiftSynchronizedMethodName")
      .setExpression(null)
      .setForClass_("foam.core.AbstractMethod")
      .build();
  }

  public foam.core.Slot getSwiftThrows$() {

    if ( swiftThrows_$ == null ) {
      swiftThrows_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(SWIFT_THROWS)
        .build();
    }
    return swiftThrows_$;
  }

  public boolean getSwiftThrows() {

    if ( ! swiftThrows_isSet_ ) {
      return false;
    }
    return swiftThrows_;
  }

  private boolean swiftThrows_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (boolean) newValue;
  }

  public void setSwiftThrows(Object value) {

    boolean hasOldValue = hasPropertySet("swiftThrows");
    Object oldValue = hasOldValue ?
      getSwiftThrows() :
      null;
    boolean castedValue = swiftThrows_adapt(oldValue, value, hasOldValue);
    
    swiftThrows_isSet_ = true;
    swiftThrows_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "swiftThrows", null };
    if ( hasListeners(args) ) {
      args[2] = getSwiftThrows$();
      pub(args);
    }
  }

  private static foam.core.BooleanProperty init_SWIFT_THROWS() {

    return foam.core.BooleanProperty.BooleanPropertyBuilder(null) // TODO give context
      .setName("swiftThrows")
      .setForClass_("foam.core.AbstractMethod")
      .build();
  }

  public foam.core.Slot getSwiftArgs$() {

    if ( swiftArgs_$ == null ) {
      swiftArgs_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(SWIFT_ARGS)
        .build();
    }
    return swiftArgs_$;
  }

  public Object getSwiftArgs() {

    if ( ! swiftArgs_isSet_ ) {
      return null;
    }
    return swiftArgs_;
  }

  private Object swiftArgs_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setSwiftArgs(Object value) {

    boolean hasOldValue = hasPropertySet("swiftArgs");
    Object oldValue = hasOldValue ?
      getSwiftArgs() :
      null;
    Object castedValue = swiftArgs_adapt(oldValue, value, hasOldValue);
    
    swiftArgs_isSet_ = true;
    swiftArgs_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "swiftArgs", null };
    if ( hasListeners(args) ) {
      args[2] = getSwiftArgs$();
      pub(args);
    }
  }

  private static foam.core.Property init_SWIFT_ARGS() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("swiftArgs")
      .setAdapt(null)
      .setExpression(null)
      .setForClass_("foam.core.AbstractMethod")
      .build();
  }

  public foam.core.Slot getSwiftVisibility$() {

    if ( swiftVisibility_$ == null ) {
      swiftVisibility_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(SWIFT_VISIBILITY)
        .build();
    }
    return swiftVisibility_$;
  }

  public String getSwiftVisibility() {

    if ( ! swiftVisibility_isSet_ ) {
      return "public";
    }
    return swiftVisibility_;
  }

  private String swiftVisibility_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setSwiftVisibility(Object value) {

    boolean hasOldValue = hasPropertySet("swiftVisibility");
    Object oldValue = hasOldValue ?
      getSwiftVisibility() :
      null;
    String castedValue = swiftVisibility_adapt(oldValue, value, hasOldValue);
    
    swiftVisibility_isSet_ = true;
    swiftVisibility_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "swiftVisibility", null };
    if ( hasListeners(args) ) {
      args[2] = getSwiftVisibility$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_SWIFT_VISIBILITY() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setValue("public")
      .setName("swiftVisibility")
      .setForClass_("foam.core.AbstractMethod")
      .build();
  }

  public foam.core.Slot getSwiftCode$() {

    if ( swiftCode_$ == null ) {
      swiftCode_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(SWIFT_CODE)
        .build();
    }
    return swiftCode_$;
  }

  public String getSwiftCode() {

    if ( ! swiftCode_isSet_ ) {
      return "";
    }
    return swiftCode_;
  }

  private String swiftCode_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setSwiftCode(Object value) {

    boolean hasOldValue = hasPropertySet("swiftCode");
    Object oldValue = hasOldValue ?
      getSwiftCode() :
      null;
    String castedValue = swiftCode_adapt(oldValue, value, hasOldValue);
    
    swiftCode_isSet_ = true;
    swiftCode_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "swiftCode", null };
    if ( hasListeners(args) ) {
      args[2] = getSwiftCode$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_SWIFT_CODE() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("swiftCode")
      .setForClass_("foam.core.AbstractMethod")
      .build();
  }

  public foam.core.Slot getSwiftOverride$() {

    if ( swiftOverride_$ == null ) {
      swiftOverride_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(SWIFT_OVERRIDE)
        .build();
    }
    return swiftOverride_$;
  }

  public boolean getSwiftOverride() {

    if ( ! swiftOverride_isSet_ ) {
      return false;
    }
    return swiftOverride_;
  }

  private boolean swiftOverride_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (boolean) newValue;
  }

  public void setSwiftOverride(Object value) {

    boolean hasOldValue = hasPropertySet("swiftOverride");
    Object oldValue = hasOldValue ?
      getSwiftOverride() :
      null;
    boolean castedValue = swiftOverride_adapt(oldValue, value, hasOldValue);
    
    swiftOverride_isSet_ = true;
    swiftOverride_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "swiftOverride", null };
    if ( hasListeners(args) ) {
      args[2] = getSwiftOverride$();
      pub(args);
    }
  }

  private static foam.core.BooleanProperty init_SWIFT_OVERRIDE() {

    return foam.core.BooleanProperty.BooleanPropertyBuilder(null) // TODO give context
      .setName("swiftOverride")
      .setForClass_("foam.core.AbstractMethod")
      .build();
  }

  public foam.core.Slot getSwiftSupport$() {

    if ( swiftSupport_$ == null ) {
      swiftSupport_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(SWIFT_SUPPORT)
        .build();
    }
    return swiftSupport_$;
  }

  public boolean getSwiftSupport() {

    if ( ! swiftSupport_isSet_ ) {
      return false;
    }
    return swiftSupport_;
  }

  private boolean swiftSupport_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (boolean) newValue;
  }

  public void setSwiftSupport(Object value) {

    boolean hasOldValue = hasPropertySet("swiftSupport");
    Object oldValue = hasOldValue ?
      getSwiftSupport() :
      null;
    boolean castedValue = swiftSupport_adapt(oldValue, value, hasOldValue);
    
    swiftSupport_isSet_ = true;
    swiftSupport_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "swiftSupport", null };
    if ( hasListeners(args) ) {
      args[2] = getSwiftSupport$();
      pub(args);
    }
  }

  private static foam.core.BooleanProperty init_SWIFT_SUPPORT() {

    return foam.core.BooleanProperty.BooleanPropertyBuilder(null) // TODO give context
      .setName("swiftSupport")
      .setForClass_("foam.core.AbstractMethod")
      .build();
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

  public String getSwiftType() {

    if ( ! swiftType_isSet_ ) {
      return "";
    }
    return swiftType_;
  }

  private String swiftType_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setSwiftType(Object value) {

    boolean hasOldValue = hasPropertySet("swiftType");
    Object oldValue = hasOldValue ?
      getSwiftType() :
      null;
    String castedValue = swiftType_adapt(oldValue, value, hasOldValue);
    
    swiftType_isSet_ = true;
    swiftType_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "swiftType", null };
    if ( hasListeners(args) ) {
      args[2] = getSwiftType$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_SWIFT_TYPE() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("swiftType")
      .setExpression(null)
      .setForClass_("foam.core.AbstractMethod")
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
      .setForClass_("foam.core.AbstractMethod")
      .build();
  }

  public foam.core.Slot getFinal$() {

    if ( final_$ == null ) {
      final_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(FINAL)
        .build();
    }
    return final_$;
  }

  public boolean getFinal() {

    if ( ! final_isSet_ ) {
      return false;
    }
    return final_;
  }

  private boolean final_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (boolean) newValue;
  }

  public void setFinal(Object value) {

    boolean hasOldValue = hasPropertySet("final");
    Object oldValue = hasOldValue ?
      getFinal() :
      null;
    boolean castedValue = final_adapt(oldValue, value, hasOldValue);
    
    final_isSet_ = true;
    final_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "final", null };
    if ( hasListeners(args) ) {
      args[2] = getFinal$();
      pub(args);
    }
  }

  private static foam.core.BooleanProperty init_FINAL() {

    return foam.core.BooleanProperty.BooleanPropertyBuilder(null) // TODO give context
      .setName("final")
      .setForClass_("foam.core.AbstractMethod")
      .build();
  }

  public foam.core.Slot getAbstract$() {

    if ( abstract_$ == null ) {
      abstract_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(ABSTRACT)
        .build();
    }
    return abstract_$;
  }

  public boolean getAbstract() {

    if ( ! abstract_isSet_ ) {
      return false;
    }
    return abstract_;
  }

  private boolean abstract_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (boolean) newValue;
  }

  public void setAbstract(Object value) {

    boolean hasOldValue = hasPropertySet("abstract");
    Object oldValue = hasOldValue ?
      getAbstract() :
      null;
    boolean castedValue = abstract_adapt(oldValue, value, hasOldValue);
    
    abstract_isSet_ = true;
    abstract_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "abstract", null };
    if ( hasListeners(args) ) {
      args[2] = getAbstract$();
      pub(args);
    }
  }

  private static foam.core.BooleanProperty init_ABSTRACT() {

    return foam.core.BooleanProperty.BooleanPropertyBuilder(null) // TODO give context
      .setValue(false)
      .setName("abstract")
      .setForClass_("foam.core.AbstractMethod")
      .build();
  }

  public foam.core.Slot getJavaThrows$() {

    if ( javaThrows_$ == null ) {
      javaThrows_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(JAVA_THROWS)
        .build();
    }
    return javaThrows_$;
  }

  protected String[] javaThrows_factory_() {

    return new String[0];
  }

  public String[] getJavaThrows() {

    if ( ! javaThrows_isSet_ ) {
      setProperty("javaThrows", javaThrows_factory_());
    }
    return javaThrows_;
  }

  private String[] javaThrows_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String[]) newValue;
  }

  public void setJavaThrows(Object value) {

    boolean hasOldValue = hasPropertySet("javaThrows");
    Object oldValue = hasOldValue ?
      getJavaThrows() :
      null;
    String[] castedValue = javaThrows_adapt(oldValue, value, hasOldValue);
    
    javaThrows_isSet_ = true;
    javaThrows_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "javaThrows", null };
    if ( hasListeners(args) ) {
      args[2] = getJavaThrows$();
      pub(args);
    }
  }

  private static foam.core.StringArrayProperty init_JAVA_THROWS() {

    return foam.core.StringArrayProperty.StringArrayPropertyBuilder(null) // TODO give context
      .setName("javaThrows")
      .setForClass_("foam.core.AbstractMethod")
      .build();
  }

  public foam.core.Slot getJavaSupport$() {

    if ( javaSupport_$ == null ) {
      javaSupport_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(JAVA_SUPPORT)
        .build();
    }
    return javaSupport_$;
  }

  public boolean getJavaSupport() {

    if ( ! javaSupport_isSet_ ) {
      return false;
    }
    return javaSupport_;
  }

  private boolean javaSupport_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (boolean) newValue;
  }

  public void setJavaSupport(Object value) {

    boolean hasOldValue = hasPropertySet("javaSupport");
    Object oldValue = hasOldValue ?
      getJavaSupport() :
      null;
    boolean castedValue = javaSupport_adapt(oldValue, value, hasOldValue);
    
    javaSupport_isSet_ = true;
    javaSupport_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "javaSupport", null };
    if ( hasListeners(args) ) {
      args[2] = getJavaSupport$();
      pub(args);
    }
  }

  private static foam.core.BooleanProperty init_JAVA_SUPPORT() {

    return foam.core.BooleanProperty.BooleanPropertyBuilder(null) // TODO give context
      .setName("javaSupport")
      .setExpression(null)
      .setForClass_("foam.core.AbstractMethod")
      .build();
  }

  public foam.core.Slot getAndroidCode$() {

    if ( androidCode_$ == null ) {
      androidCode_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(ANDROID_CODE)
        .build();
    }
    return androidCode_$;
  }

  public String getAndroidCode() {

    if ( ! androidCode_isSet_ ) {
      return "";
    }
    return androidCode_;
  }

  private String androidCode_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setAndroidCode(Object value) {

    boolean hasOldValue = hasPropertySet("androidCode");
    Object oldValue = hasOldValue ?
      getAndroidCode() :
      null;
    String castedValue = androidCode_adapt(oldValue, value, hasOldValue);
    
    androidCode_isSet_ = true;
    androidCode_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "androidCode", null };
    if ( hasListeners(args) ) {
      args[2] = getAndroidCode$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_ANDROID_CODE() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("androidCode")
      .setExpression(null)
      .setForClass_("foam.core.AbstractMethod")
      .build();
  }

  public foam.core.Slot getAndroidIsStatic$() {

    if ( androidIsStatic_$ == null ) {
      androidIsStatic_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(ANDROID_IS_STATIC)
        .build();
    }
    return androidIsStatic_$;
  }

  public boolean getAndroidIsStatic() {

    if ( ! androidIsStatic_isSet_ ) {
      return false;
    }
    return androidIsStatic_;
  }

  private boolean androidIsStatic_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (boolean) newValue;
  }

  public void setAndroidIsStatic(Object value) {

    boolean hasOldValue = hasPropertySet("androidIsStatic");
    Object oldValue = hasOldValue ?
      getAndroidIsStatic() :
      null;
    boolean castedValue = androidIsStatic_adapt(oldValue, value, hasOldValue);
    
    androidIsStatic_isSet_ = true;
    androidIsStatic_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "androidIsStatic", null };
    if ( hasListeners(args) ) {
      args[2] = getAndroidIsStatic$();
      pub(args);
    }
  }

  private static foam.core.BooleanProperty init_ANDROID_IS_STATIC() {

    return foam.core.BooleanProperty.BooleanPropertyBuilder(null) // TODO give context
      .setName("androidIsStatic")
      .setExpression(null)
      .setForClass_("foam.core.AbstractMethod")
      .build();
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
      .setForClass_("foam.core.AbstractMethod")
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
    
    
      case "code":
        code_isSet_ = false;
        Object[] codeArgs = new Object[] { "propertyChange", "code", null };
        if ( hasListeners(codeArgs) ) {
          codeArgs[2] = getCode$();
          pub(codeArgs);
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
    
    
      case "flags":
        flags_isSet_ = false;
        Object[] flagsArgs = new Object[] { "propertyChange", "flags", null };
        if ( hasListeners(flagsArgs) ) {
          flagsArgs[2] = getFlags$();
          pub(flagsArgs);
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
    
    
      case "async":
        async_isSet_ = false;
        Object[] asyncArgs = new Object[] { "propertyChange", "async", null };
        if ( hasListeners(asyncArgs) ) {
          asyncArgs[2] = getAsync$();
          pub(asyncArgs);
        }
        return;
    
    
      case "synchronized":
        synchronized_isSet_ = false;
        Object[] synchronizedArgs = new Object[] { "propertyChange", "synchronized", null };
        if ( hasListeners(synchronizedArgs) ) {
          synchronizedArgs[2] = getSynchronized$();
          pub(synchronizedArgs);
        }
        return;
    
    
      case "remote":
        remote_isSet_ = false;
        Object[] remoteArgs = new Object[] { "propertyChange", "remote", null };
        if ( hasListeners(remoteArgs) ) {
          remoteArgs[2] = getRemote$();
          pub(remoteArgs);
        }
        return;
    
    
      case "forClass_":
        forClass__isSet_ = false;
        Object[] forClass_Args = new Object[] { "propertyChange", "forClass_", null };
        if ( hasListeners(forClass_Args) ) {
          forClass_Args[2] = getForClass_$();
          pub(forClass_Args);
        }
        return;
    
    
      case "args":
        args_isSet_ = false;
        Object[] argsArgs = new Object[] { "propertyChange", "args", null };
        if ( hasListeners(argsArgs) ) {
          argsArgs[2] = getArgs$();
          pub(argsArgs);
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
    
    
      case "swiftPrivateAxiomName":
        swiftPrivateAxiomName_isSet_ = false;
        Object[] swiftPrivateAxiomNameArgs = new Object[] { "propertyChange", "swiftPrivateAxiomName", null };
        if ( hasListeners(swiftPrivateAxiomNameArgs) ) {
          swiftPrivateAxiomNameArgs[2] = getSwiftPrivateAxiomName$();
          pub(swiftPrivateAxiomNameArgs);
        }
        return;
    
    
      case "swiftAxiomName":
        swiftAxiomName_isSet_ = false;
        Object[] swiftAxiomNameArgs = new Object[] { "propertyChange", "swiftAxiomName", null };
        if ( hasListeners(swiftAxiomNameArgs) ) {
          swiftAxiomNameArgs[2] = getSwiftAxiomName$();
          pub(swiftAxiomNameArgs);
        }
        return;
    
    
      case "swiftSlotName":
        swiftSlotName_isSet_ = false;
        Object[] swiftSlotNameArgs = new Object[] { "propertyChange", "swiftSlotName", null };
        if ( hasListeners(swiftSlotNameArgs) ) {
          swiftSlotNameArgs[2] = getSwiftSlotName$();
          pub(swiftSlotNameArgs);
        }
        return;
    
    
      case "swiftSynchronized":
        swiftSynchronized_isSet_ = false;
        Object[] swiftSynchronizedArgs = new Object[] { "propertyChange", "swiftSynchronized", null };
        if ( hasListeners(swiftSynchronizedArgs) ) {
          swiftSynchronizedArgs[2] = getSwiftSynchronized$();
          pub(swiftSynchronizedArgs);
        }
        return;
    
    
      case "swiftSynchronizedSemaphoreName":
        swiftSynchronizedSemaphoreName_isSet_ = false;
        Object[] swiftSynchronizedSemaphoreNameArgs = new Object[] { "propertyChange", "swiftSynchronizedSemaphoreName", null };
        if ( hasListeners(swiftSynchronizedSemaphoreNameArgs) ) {
          swiftSynchronizedSemaphoreNameArgs[2] = getSwiftSynchronizedSemaphoreName$();
          pub(swiftSynchronizedSemaphoreNameArgs);
        }
        return;
    
    
      case "swiftSynchronizedMethodName":
        swiftSynchronizedMethodName_isSet_ = false;
        Object[] swiftSynchronizedMethodNameArgs = new Object[] { "propertyChange", "swiftSynchronizedMethodName", null };
        if ( hasListeners(swiftSynchronizedMethodNameArgs) ) {
          swiftSynchronizedMethodNameArgs[2] = getSwiftSynchronizedMethodName$();
          pub(swiftSynchronizedMethodNameArgs);
        }
        return;
    
    
      case "swiftThrows":
        swiftThrows_isSet_ = false;
        Object[] swiftThrowsArgs = new Object[] { "propertyChange", "swiftThrows", null };
        if ( hasListeners(swiftThrowsArgs) ) {
          swiftThrowsArgs[2] = getSwiftThrows$();
          pub(swiftThrowsArgs);
        }
        return;
    
    
      case "swiftArgs":
        swiftArgs_isSet_ = false;
        Object[] swiftArgsArgs = new Object[] { "propertyChange", "swiftArgs", null };
        if ( hasListeners(swiftArgsArgs) ) {
          swiftArgsArgs[2] = getSwiftArgs$();
          pub(swiftArgsArgs);
        }
        return;
    
    
      case "swiftVisibility":
        swiftVisibility_isSet_ = false;
        Object[] swiftVisibilityArgs = new Object[] { "propertyChange", "swiftVisibility", null };
        if ( hasListeners(swiftVisibilityArgs) ) {
          swiftVisibilityArgs[2] = getSwiftVisibility$();
          pub(swiftVisibilityArgs);
        }
        return;
    
    
      case "swiftCode":
        swiftCode_isSet_ = false;
        Object[] swiftCodeArgs = new Object[] { "propertyChange", "swiftCode", null };
        if ( hasListeners(swiftCodeArgs) ) {
          swiftCodeArgs[2] = getSwiftCode$();
          pub(swiftCodeArgs);
        }
        return;
    
    
      case "swiftOverride":
        swiftOverride_isSet_ = false;
        Object[] swiftOverrideArgs = new Object[] { "propertyChange", "swiftOverride", null };
        if ( hasListeners(swiftOverrideArgs) ) {
          swiftOverrideArgs[2] = getSwiftOverride$();
          pub(swiftOverrideArgs);
        }
        return;
    
    
      case "swiftSupport":
        swiftSupport_isSet_ = false;
        Object[] swiftSupportArgs = new Object[] { "propertyChange", "swiftSupport", null };
        if ( hasListeners(swiftSupportArgs) ) {
          swiftSupportArgs[2] = getSwiftSupport$();
          pub(swiftSupportArgs);
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
    
    
      case "swiftAnnotations":
        swiftAnnotations_isSet_ = false;
        Object[] swiftAnnotationsArgs = new Object[] { "propertyChange", "swiftAnnotations", null };
        if ( hasListeners(swiftAnnotationsArgs) ) {
          swiftAnnotationsArgs[2] = getSwiftAnnotations$();
          pub(swiftAnnotationsArgs);
        }
        return;
    
    
      case "final":
        final_isSet_ = false;
        Object[] finalArgs = new Object[] { "propertyChange", "final", null };
        if ( hasListeners(finalArgs) ) {
          finalArgs[2] = getFinal$();
          pub(finalArgs);
        }
        return;
    
    
      case "abstract":
        abstract_isSet_ = false;
        Object[] abstractArgs = new Object[] { "propertyChange", "abstract", null };
        if ( hasListeners(abstractArgs) ) {
          abstractArgs[2] = getAbstract$();
          pub(abstractArgs);
        }
        return;
    
    
      case "javaThrows":
        javaThrows_isSet_ = false;
        Object[] javaThrowsArgs = new Object[] { "propertyChange", "javaThrows", null };
        if ( hasListeners(javaThrowsArgs) ) {
          javaThrowsArgs[2] = getJavaThrows$();
          pub(javaThrowsArgs);
        }
        return;
    
    
      case "javaSupport":
        javaSupport_isSet_ = false;
        Object[] javaSupportArgs = new Object[] { "propertyChange", "javaSupport", null };
        if ( hasListeners(javaSupportArgs) ) {
          javaSupportArgs[2] = getJavaSupport$();
          pub(javaSupportArgs);
        }
        return;
    
    
      case "androidCode":
        androidCode_isSet_ = false;
        Object[] androidCodeArgs = new Object[] { "propertyChange", "androidCode", null };
        if ( hasListeners(androidCodeArgs) ) {
          androidCodeArgs[2] = getAndroidCode$();
          pub(androidCodeArgs);
        }
        return;
    
    
      case "androidIsStatic":
        androidIsStatic_isSet_ = false;
        Object[] androidIsStaticArgs = new Object[] { "propertyChange", "androidIsStatic", null };
        if ( hasListeners(androidIsStaticArgs) ) {
          androidIsStaticArgs[2] = getAndroidIsStatic$();
          pub(androidIsStaticArgs);
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
    
    
      case "code":
        return getCode();
    
    
      case "documentation":
        return getDocumentation();
    
    
      case "flags":
        return getFlags();
    
    
      case "type":
        return getType();
    
    
      case "async":
        return getAsync();
    
    
      case "synchronized":
        return getSynchronized();
    
    
      case "remote":
        return getRemote();
    
    
      case "forClass_":
        return getForClass_();
    
    
      case "args":
        return getArgs();
    
    
      case "swiftName":
        return getSwiftName();
    
    
      case "swiftPrivateAxiomName":
        return getSwiftPrivateAxiomName();
    
    
      case "swiftAxiomName":
        return getSwiftAxiomName();
    
    
      case "swiftSlotName":
        return getSwiftSlotName();
    
    
      case "swiftSynchronized":
        return getSwiftSynchronized();
    
    
      case "swiftSynchronizedSemaphoreName":
        return getSwiftSynchronizedSemaphoreName();
    
    
      case "swiftSynchronizedMethodName":
        return getSwiftSynchronizedMethodName();
    
    
      case "swiftThrows":
        return getSwiftThrows();
    
    
      case "swiftArgs":
        return getSwiftArgs();
    
    
      case "swiftVisibility":
        return getSwiftVisibility();
    
    
      case "swiftCode":
        return getSwiftCode();
    
    
      case "swiftOverride":
        return getSwiftOverride();
    
    
      case "swiftSupport":
        return getSwiftSupport();
    
    
      case "swiftType":
        return getSwiftType();
    
    
      case "swiftAnnotations":
        return getSwiftAnnotations();
    
    
      case "final":
        return getFinal();
    
    
      case "abstract":
        return getAbstract();
    
    
      case "javaThrows":
        return getJavaThrows();
    
    
      case "javaSupport":
        return getJavaSupport();
    
    
      case "androidCode":
        return getAndroidCode();
    
    
      case "androidIsStatic":
        return getAndroidIsStatic();
    
    
      case "androidType":
        return getAndroidType();
    
    }
    return super.getProperty(name);
  }

  public foam.core.Slot getSlot(String name) {

    switch(name) {
    
      case "name":
        return getName$();
    
    
      case "code":
        return getCode$();
    
    
      case "documentation":
        return getDocumentation$();
    
    
      case "flags":
        return getFlags$();
    
    
      case "type":
        return getType$();
    
    
      case "async":
        return getAsync$();
    
    
      case "synchronized":
        return getSynchronized$();
    
    
      case "remote":
        return getRemote$();
    
    
      case "forClass_":
        return getForClass_$();
    
    
      case "args":
        return getArgs$();
    
    
      case "swiftName":
        return getSwiftName$();
    
    
      case "swiftPrivateAxiomName":
        return getSwiftPrivateAxiomName$();
    
    
      case "swiftAxiomName":
        return getSwiftAxiomName$();
    
    
      case "swiftSlotName":
        return getSwiftSlotName$();
    
    
      case "swiftSynchronized":
        return getSwiftSynchronized$();
    
    
      case "swiftSynchronizedSemaphoreName":
        return getSwiftSynchronizedSemaphoreName$();
    
    
      case "swiftSynchronizedMethodName":
        return getSwiftSynchronizedMethodName$();
    
    
      case "swiftThrows":
        return getSwiftThrows$();
    
    
      case "swiftArgs":
        return getSwiftArgs$();
    
    
      case "swiftVisibility":
        return getSwiftVisibility$();
    
    
      case "swiftCode":
        return getSwiftCode$();
    
    
      case "swiftOverride":
        return getSwiftOverride$();
    
    
      case "swiftSupport":
        return getSwiftSupport$();
    
    
      case "swiftType":
        return getSwiftType$();
    
    
      case "swiftAnnotations":
        return getSwiftAnnotations$();
    
    
      case "final":
        return getFinal$();
    
    
      case "abstract":
        return getAbstract$();
    
    
      case "javaThrows":
        return getJavaThrows$();
    
    
      case "javaSupport":
        return getJavaSupport$();
    
    
      case "androidCode":
        return getAndroidCode$();
    
    
      case "androidIsStatic":
        return getAndroidIsStatic$();
    
    
      case "androidType":
        return getAndroidType$();
    
    }
    return super.getSlot(name);
  }

  public boolean hasPropertySet(String name) {

    switch(name) {
    
      case "name":
        return name_isSet_;
    
    
      case "code":
        return code_isSet_;
    
    
      case "documentation":
        return documentation_isSet_;
    
    
      case "flags":
        return flags_isSet_;
    
    
      case "type":
        return type_isSet_;
    
    
      case "async":
        return async_isSet_;
    
    
      case "synchronized":
        return synchronized_isSet_;
    
    
      case "remote":
        return remote_isSet_;
    
    
      case "forClass_":
        return forClass__isSet_;
    
    
      case "args":
        return args_isSet_;
    
    
      case "swiftName":
        return swiftName_isSet_;
    
    
      case "swiftPrivateAxiomName":
        return swiftPrivateAxiomName_isSet_;
    
    
      case "swiftAxiomName":
        return swiftAxiomName_isSet_;
    
    
      case "swiftSlotName":
        return swiftSlotName_isSet_;
    
    
      case "swiftSynchronized":
        return swiftSynchronized_isSet_;
    
    
      case "swiftSynchronizedSemaphoreName":
        return swiftSynchronizedSemaphoreName_isSet_;
    
    
      case "swiftSynchronizedMethodName":
        return swiftSynchronizedMethodName_isSet_;
    
    
      case "swiftThrows":
        return swiftThrows_isSet_;
    
    
      case "swiftArgs":
        return swiftArgs_isSet_;
    
    
      case "swiftVisibility":
        return swiftVisibility_isSet_;
    
    
      case "swiftCode":
        return swiftCode_isSet_;
    
    
      case "swiftOverride":
        return swiftOverride_isSet_;
    
    
      case "swiftSupport":
        return swiftSupport_isSet_;
    
    
      case "swiftType":
        return swiftType_isSet_;
    
    
      case "swiftAnnotations":
        return swiftAnnotations_isSet_;
    
    
      case "final":
        return final_isSet_;
    
    
      case "abstract":
        return abstract_isSet_;
    
    
      case "javaThrows":
        return javaThrows_isSet_;
    
    
      case "javaSupport":
        return javaSupport_isSet_;
    
    
      case "androidCode":
        return androidCode_isSet_;
    
    
      case "androidIsStatic":
        return androidIsStatic_isSet_;
    
    
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
    
    
      case "code":
        setCode((Object) value);
        return;
    
    
      case "documentation":
        setDocumentation((Object) value);
        return;
    
    
      case "flags":
        setFlags((Object) value);
        return;
    
    
      case "type":
        setType((Object) value);
        return;
    
    
      case "async":
        setAsync((boolean) value);
        return;
    
    
      case "synchronized":
        setSynchronized((Object) value);
        return;
    
    
      case "remote":
        setRemote((boolean) value);
        return;
    
    
      case "forClass_":
        setForClass_((Object) value);
        return;
    
    
      case "args":
        setArgs((foam.core.Argument[]) value);
        return;
    
    
      case "swiftName":
        setSwiftName((String) value);
        return;
    
    
      case "swiftPrivateAxiomName":
        setSwiftPrivateAxiomName((String) value);
        return;
    
    
      case "swiftAxiomName":
        setSwiftAxiomName((String) value);
        return;
    
    
      case "swiftSlotName":
        setSwiftSlotName((String) value);
        return;
    
    
      case "swiftSynchronized":
        setSwiftSynchronized((boolean) value);
        return;
    
    
      case "swiftSynchronizedSemaphoreName":
        setSwiftSynchronizedSemaphoreName((String) value);
        return;
    
    
      case "swiftSynchronizedMethodName":
        setSwiftSynchronizedMethodName((String) value);
        return;
    
    
      case "swiftThrows":
        setSwiftThrows((boolean) value);
        return;
    
    
      case "swiftArgs":
        setSwiftArgs((Object) value);
        return;
    
    
      case "swiftVisibility":
        setSwiftVisibility((String) value);
        return;
    
    
      case "swiftCode":
        setSwiftCode((String) value);
        return;
    
    
      case "swiftOverride":
        setSwiftOverride((boolean) value);
        return;
    
    
      case "swiftSupport":
        setSwiftSupport((boolean) value);
        return;
    
    
      case "swiftType":
        setSwiftType((String) value);
        return;
    
    
      case "swiftAnnotations":
        setSwiftAnnotations((String[]) value);
        return;
    
    
      case "final":
        setFinal((boolean) value);
        return;
    
    
      case "abstract":
        setAbstract((boolean) value);
        return;
    
    
      case "javaThrows":
        setJavaThrows((String[]) value);
        return;
    
    
      case "javaSupport":
        setJavaSupport((boolean) value);
        return;
    
    
      case "androidCode":
        setAndroidCode((String) value);
        return;
    
    
      case "androidIsStatic":
        setAndroidIsStatic((boolean) value);
        return;
    
    
      case "androidType":
        setAndroidType((String) value);
        return;
    
    }
    
    super.setProperty(name, value);
    
  }

  protected Static () {

  }

  public foam.cross_platform.FoamClass getCls_() {

    return CLS_;
  }

  public static foam.cross_platform.FoamClass initClassInfo_() {

    return foam.cross_platform.FoamClass.FoamClassBuilder(null) // TODO give context
      .setId("foam.core.Static")
      .setParent(foam.core.AbstractMethod.CLS_)
      .setAxioms(new Object[] {foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("installInProto")
      .setCode(null)
      .setForClass_("foam.core.Static")
      .setArgs(new foam.core.Argument[] {  })
      .build()})
      .build();
  }

  public static Builder StaticBuilder(foam.cross_platform.Context x) {

    return new Builder();
  }
  public static class Builder {

    private boolean swiftSynchronizedMethodName_isSet_ =
      false;

    private boolean name_isSet_ =
      false;

    private boolean code_isSet_ =
      false;

    private Object code_;

    private boolean documentation_isSet_ =
      false;

    private Object documentation_;

    private boolean flags_isSet_ =
      false;

    private Object flags_;

    private boolean type_isSet_ =
      false;

    private Object type_;

    private boolean async_isSet_ =
      false;

    private boolean async_;

    private boolean synchronized_isSet_ =
      false;

    private Object synchronized_;

    private boolean remote_isSet_ =
      false;

    private boolean remote_;

    private boolean forClass__isSet_ =
      false;

    private Object forClass__;

    private boolean args_isSet_ =
      false;

    private foam.core.Argument[] args_;

    private boolean swiftName_isSet_ =
      false;

    private String swiftName_;

    private boolean swiftPrivateAxiomName_isSet_ =
      false;

    private String swiftPrivateAxiomName_;

    private boolean swiftAxiomName_isSet_ =
      false;

    private String swiftAxiomName_;

    private boolean swiftSlotName_isSet_ =
      false;

    private String swiftSlotName_;

    private boolean swiftSynchronized_isSet_ =
      false;

    private boolean swiftSynchronized_;

    private boolean swiftSynchronizedSemaphoreName_isSet_ =
      false;

    private String swiftSynchronizedSemaphoreName_;

    private Object name_;

    private String swiftSynchronizedMethodName_;

    private boolean swiftThrows_isSet_ =
      false;

    private boolean swiftThrows_;

    private boolean swiftArgs_isSet_ =
      false;

    private Object swiftArgs_;

    private boolean swiftVisibility_isSet_ =
      false;

    private String swiftVisibility_;

    private boolean swiftCode_isSet_ =
      false;

    private String swiftCode_;

    private boolean swiftOverride_isSet_ =
      false;

    private boolean swiftOverride_;

    private boolean swiftSupport_isSet_ =
      false;

    private boolean swiftSupport_;

    private boolean swiftType_isSet_ =
      false;

    private String swiftType_;

    private boolean swiftAnnotations_isSet_ =
      false;

    private String[] swiftAnnotations_;

    private boolean final_isSet_ =
      false;

    private boolean final_;

    private boolean abstract_isSet_ =
      false;

    private boolean abstract_;

    private boolean javaThrows_isSet_ =
      false;

    private String[] javaThrows_;

    private boolean javaSupport_isSet_ =
      false;

    private boolean javaSupport_;

    private boolean androidCode_isSet_ =
      false;

    private String androidCode_;

    private boolean androidIsStatic_isSet_ =
      false;

    private boolean androidIsStatic_;

    private boolean androidType_isSet_ =
      false;

    private String androidType_;


    public Builder setName(Object value) {

      name_isSet_ = true;
      name_ = value;
      return this;
    }

    public Builder setCode(Object value) {

      code_isSet_ = true;
      code_ = value;
      return this;
    }

    public Builder setDocumentation(Object value) {

      documentation_isSet_ = true;
      documentation_ = value;
      return this;
    }

    public Builder setFlags(Object value) {

      flags_isSet_ = true;
      flags_ = value;
      return this;
    }

    public Builder setType(Object value) {

      type_isSet_ = true;
      type_ = value;
      return this;
    }

    public Builder setAsync(boolean value) {

      async_isSet_ = true;
      async_ = value;
      return this;
    }

    public Builder setSynchronized(Object value) {

      synchronized_isSet_ = true;
      synchronized_ = value;
      return this;
    }

    public Builder setRemote(boolean value) {

      remote_isSet_ = true;
      remote_ = value;
      return this;
    }

    public Builder setForClass_(Object value) {

      forClass__isSet_ = true;
      forClass__ = value;
      return this;
    }

    public Builder setArgs(foam.core.Argument[] value) {

      args_isSet_ = true;
      args_ = value;
      return this;
    }

    public Builder setSwiftName(String value) {

      swiftName_isSet_ = true;
      swiftName_ = value;
      return this;
    }

    public Builder setSwiftPrivateAxiomName(String value) {

      swiftPrivateAxiomName_isSet_ = true;
      swiftPrivateAxiomName_ = value;
      return this;
    }

    public Builder setSwiftAxiomName(String value) {

      swiftAxiomName_isSet_ = true;
      swiftAxiomName_ = value;
      return this;
    }

    public Builder setSwiftSlotName(String value) {

      swiftSlotName_isSet_ = true;
      swiftSlotName_ = value;
      return this;
    }

    public Builder setSwiftSynchronized(boolean value) {

      swiftSynchronized_isSet_ = true;
      swiftSynchronized_ = value;
      return this;
    }

    public Builder setSwiftSynchronizedSemaphoreName(String value) {

      swiftSynchronizedSemaphoreName_isSet_ = true;
      swiftSynchronizedSemaphoreName_ = value;
      return this;
    }

    public Builder setSwiftSynchronizedMethodName(String value) {

      swiftSynchronizedMethodName_isSet_ = true;
      swiftSynchronizedMethodName_ = value;
      return this;
    }

    public Builder setSwiftThrows(boolean value) {

      swiftThrows_isSet_ = true;
      swiftThrows_ = value;
      return this;
    }

    public Builder setSwiftArgs(Object value) {

      swiftArgs_isSet_ = true;
      swiftArgs_ = value;
      return this;
    }

    public Builder setSwiftVisibility(String value) {

      swiftVisibility_isSet_ = true;
      swiftVisibility_ = value;
      return this;
    }

    public Builder setSwiftCode(String value) {

      swiftCode_isSet_ = true;
      swiftCode_ = value;
      return this;
    }

    public Builder setSwiftOverride(boolean value) {

      swiftOverride_isSet_ = true;
      swiftOverride_ = value;
      return this;
    }

    public Builder setSwiftSupport(boolean value) {

      swiftSupport_isSet_ = true;
      swiftSupport_ = value;
      return this;
    }

    public Builder setSwiftType(String value) {

      swiftType_isSet_ = true;
      swiftType_ = value;
      return this;
    }

    public Builder setSwiftAnnotations(String[] value) {

      swiftAnnotations_isSet_ = true;
      swiftAnnotations_ = value;
      return this;
    }

    public Builder setFinal(boolean value) {

      final_isSet_ = true;
      final_ = value;
      return this;
    }

    public Builder setAbstract(boolean value) {

      abstract_isSet_ = true;
      abstract_ = value;
      return this;
    }

    public Builder setJavaThrows(String[] value) {

      javaThrows_isSet_ = true;
      javaThrows_ = value;
      return this;
    }

    public Builder setJavaSupport(boolean value) {

      javaSupport_isSet_ = true;
      javaSupport_ = value;
      return this;
    }

    public Builder setAndroidCode(String value) {

      androidCode_isSet_ = true;
      androidCode_ = value;
      return this;
    }

    public Builder setAndroidIsStatic(boolean value) {

      androidIsStatic_isSet_ = true;
      androidIsStatic_ = value;
      return this;
    }

    public Builder setAndroidType(String value) {

      androidType_isSet_ = true;
      androidType_ = value;
      return this;
    }

    private Builder() {

    }

    public Static build() {

      Static o = new Static();
      
      if ( name_isSet_ ) {
        o.setName(name_);
      }
      
      if ( code_isSet_ ) {
        o.setCode(code_);
      }
      
      if ( documentation_isSet_ ) {
        o.setDocumentation(documentation_);
      }
      
      if ( flags_isSet_ ) {
        o.setFlags(flags_);
      }
      
      if ( type_isSet_ ) {
        o.setType(type_);
      }
      
      if ( async_isSet_ ) {
        o.setAsync(async_);
      }
      
      if ( synchronized_isSet_ ) {
        o.setSynchronized(synchronized_);
      }
      
      if ( remote_isSet_ ) {
        o.setRemote(remote_);
      }
      
      if ( forClass__isSet_ ) {
        o.setForClass_(forClass__);
      }
      
      if ( args_isSet_ ) {
        o.setArgs(args_);
      }
      
      if ( swiftName_isSet_ ) {
        o.setSwiftName(swiftName_);
      }
      
      if ( swiftPrivateAxiomName_isSet_ ) {
        o.setSwiftPrivateAxiomName(swiftPrivateAxiomName_);
      }
      
      if ( swiftAxiomName_isSet_ ) {
        o.setSwiftAxiomName(swiftAxiomName_);
      }
      
      if ( swiftSlotName_isSet_ ) {
        o.setSwiftSlotName(swiftSlotName_);
      }
      
      if ( swiftSynchronized_isSet_ ) {
        o.setSwiftSynchronized(swiftSynchronized_);
      }
      
      if ( swiftSynchronizedSemaphoreName_isSet_ ) {
        o.setSwiftSynchronizedSemaphoreName(swiftSynchronizedSemaphoreName_);
      }
      
      if ( swiftSynchronizedMethodName_isSet_ ) {
        o.setSwiftSynchronizedMethodName(swiftSynchronizedMethodName_);
      }
      
      if ( swiftThrows_isSet_ ) {
        o.setSwiftThrows(swiftThrows_);
      }
      
      if ( swiftArgs_isSet_ ) {
        o.setSwiftArgs(swiftArgs_);
      }
      
      if ( swiftVisibility_isSet_ ) {
        o.setSwiftVisibility(swiftVisibility_);
      }
      
      if ( swiftCode_isSet_ ) {
        o.setSwiftCode(swiftCode_);
      }
      
      if ( swiftOverride_isSet_ ) {
        o.setSwiftOverride(swiftOverride_);
      }
      
      if ( swiftSupport_isSet_ ) {
        o.setSwiftSupport(swiftSupport_);
      }
      
      if ( swiftType_isSet_ ) {
        o.setSwiftType(swiftType_);
      }
      
      if ( swiftAnnotations_isSet_ ) {
        o.setSwiftAnnotations(swiftAnnotations_);
      }
      
      if ( final_isSet_ ) {
        o.setFinal(final_);
      }
      
      if ( abstract_isSet_ ) {
        o.setAbstract(abstract_);
      }
      
      if ( javaThrows_isSet_ ) {
        o.setJavaThrows(javaThrows_);
      }
      
      if ( javaSupport_isSet_ ) {
        o.setJavaSupport(javaSupport_);
      }
      
      if ( androidCode_isSet_ ) {
        o.setAndroidCode(androidCode_);
      }
      
      if ( androidIsStatic_isSet_ ) {
        o.setAndroidIsStatic(androidIsStatic_);
      }
      
      if ( androidType_isSet_ ) {
        o.setAndroidType(androidType_);
      }
      
      o.init();
      return o;
    }
  }
}