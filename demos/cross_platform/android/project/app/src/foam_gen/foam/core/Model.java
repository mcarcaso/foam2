// WARNING: GENERATED CODE, DO NOT MODIFY BY HAND!
package foam.core;


/**
* A Class Model (description). 
*/
public class Model extends foam.cross_platform.AbstractFObject {

  protected String source_;

  protected String id_;

  private foam.core.Slot id_$;

  public static foam.core.StringProperty ID =
    init_ID();

  protected String package_;

  private boolean package_isSet_ =
    false;

  private foam.core.Slot package_$;

  public static foam.core.StringProperty PACKAGE =
    init_PACKAGE();

  protected boolean abstract_;

  private boolean abstract_isSet_ =
    false;

  private foam.core.Slot abstract_$;

  public static foam.core.BooleanProperty ABSTRACT =
    init_ABSTRACT();

  protected String name_;

  private boolean name_isSet_ =
    false;

  private foam.core.Slot name_$;

  public static foam.core.StringProperty NAME =
    init_NAME();

  protected Object flags_;

  private boolean flags_isSet_ =
    false;

  private foam.core.Slot flags_$;

  public static foam.core.Property FLAGS =
    init_FLAGS();

  protected String extends_;

  private boolean extends_isSet_ =
    false;

  private foam.core.Slot extends_$;

  public static foam.core.StringProperty EXTENDS =
    init_EXTENDS();

  protected Object refines_;

  private boolean refines_isSet_ =
    false;

  private foam.core.Slot refines_$;

  public static foam.core.Property REFINES =
    init_REFINES();

  protected String documentation_;

  private boolean documentation_isSet_ =
    false;

  private foam.core.Slot documentation_$;

  public static foam.core.StringProperty DOCUMENTATION =
    init_DOCUMENTATION();

  protected Object axioms__;

  private boolean axioms__isSet_ =
    false;

  private foam.core.Slot axioms__$;

  public static foam.core.Property AXIOMS_ =
    init_AXIOMS_();

  protected Object axioms_;

  private boolean axioms_isSet_ =
    false;

  private foam.core.Slot axioms_$;

  public static foam.core.Property AXIOMS =
    init_AXIOMS();

  protected Object[] properties_;

  private boolean properties_isSet_ =
    false;

  private foam.core.Slot properties_$;

  public static foam.core.AxiomArray PROPERTIES =
    init_PROPERTIES();

  protected Object[] methods_;

  private boolean methods_isSet_ =
    false;

  private foam.core.Slot methods_$;

  public static foam.core.AxiomArray METHODS =
    init_METHODS();

  protected Object[] constants_;

  private boolean constants_isSet_ =
    false;

  private foam.core.Slot constants_$;

  public static foam.core.AxiomArray CONSTANTS =
    init_CONSTANTS();

  protected long order_;

  private boolean order_isSet_ =
    false;

  private foam.core.Slot order_$;

  public static foam.core.LongProperty ORDER =
    init_ORDER();

  protected String plural_;

  private boolean plural_isSet_ =
    false;

  private foam.core.Slot plural_$;

  public static foam.core.StringProperty PLURAL =
    init_PLURAL();

  protected String label_;

  private boolean label_isSet_ =
    false;

  private foam.core.Slot label_$;

  public static foam.core.StringProperty LABEL =
    init_LABEL();

  protected Object[] topics_;

  private boolean topics_isSet_ =
    false;

  private foam.core.Slot topics_$;

  public static foam.core.AxiomArray TOPICS =
    init_TOPICS();

  protected Object[] classes_;

  private boolean classes_isSet_ =
    false;

  private foam.core.Slot classes_$;

  public static foam.core.AxiomArray CLASSES =
    init_CLASSES();

  protected Object[] enums_;

  private boolean enums_isSet_ =
    false;

  private foam.core.Slot enums_$;

  public static foam.core.AxiomArray ENUMS =
    init_ENUMS();

  protected Object[] implements_;

  private boolean implements_isSet_ =
    false;

  private foam.core.Slot implements_$;

  public static foam.core.AxiomArray IMPLEMENTS =
    init_IMPLEMENTS();

  protected Object[] imports_;

  private boolean imports_isSet_ =
    false;

  private foam.core.Slot imports_$;

  public static foam.core.AxiomArray IMPORTS =
    init_IMPORTS();

  protected Object[] exports_;

  private boolean exports_isSet_ =
    false;

  private foam.core.Slot exports_$;

  public static foam.core.AxiomArray EXPORTS =
    init_EXPORTS();

  protected Object[] listeners_;

  private boolean listeners_isSet_ =
    false;

  private foam.core.Slot listeners_$;

  public static foam.core.AxiomArray LISTENERS =
    init_LISTENERS();

  protected Object ids_;

  private boolean ids_isSet_ =
    false;

  private foam.core.Slot ids_$;

  public static foam.core.Property IDS =
    init_IDS();

  protected Object[] requires_;

  private boolean requires_isSet_ =
    false;

  private foam.core.Slot requires_$;

  public static foam.core.AxiomArray REQUIRES =
    init_REQUIRES();

  private boolean id_isSet_ =
    false;

  private boolean source_isSet_ =
    false;

  private foam.core.Slot source_$;

  public static foam.core.StringProperty SOURCE =
    init_SOURCE();

  protected Object[] sections_;

  private boolean sections_isSet_ =
    false;

  private foam.core.Slot sections_$;

  public static foam.core.AxiomArray SECTIONS =
    init_SECTIONS();

  protected Object[] grammars_;

  private boolean grammars_isSet_ =
    false;

  private foam.core.Slot grammars_$;

  public static foam.core.AxiomArray GRAMMARS =
    init_GRAMMARS();

  protected Object[] templates_;

  private boolean templates_isSet_ =
    false;

  private foam.core.Slot templates_$;

  public static foam.core.AxiomArray TEMPLATES =
    init_TEMPLATES();

  protected Object[] messages_;

  private boolean messages_isSet_ =
    false;

  private foam.core.Slot messages_$;

  public static foam.core.AxiomArray MESSAGES =
    init_MESSAGES();

  protected Object[] actions_;

  private boolean actions_isSet_ =
    false;

  private foam.core.Slot actions_$;

  public static foam.core.AxiomArray ACTIONS =
    init_ACTIONS();

  protected Object[] static_;

  private boolean static_isSet_ =
    false;

  private foam.core.Slot static_$;

  public static foam.core.AxiomArray STATIC =
    init_STATIC();

  protected Object[] reactions_;

  private boolean reactions_isSet_ =
    false;

  private foam.core.Slot reactions_$;

  public static foam.core.AxiomArray REACTIONS =
    init_REACTIONS();

  protected String swiftName_;

  private boolean swiftName_isSet_ =
    false;

  private foam.core.Slot swiftName_$;

  public static foam.core.StringProperty SWIFT_NAME =
    init_SWIFT_NAME();

  protected boolean generateSwift_;

  private boolean generateSwift_isSet_ =
    false;

  private foam.core.Slot generateSwift_$;

  public static foam.core.BooleanProperty GENERATE_SWIFT =
    init_GENERATE_SWIFT();

  protected String[] swiftImports_;

  private boolean swiftImports_isSet_ =
    false;

  private foam.core.Slot swiftImports_$;

  public static foam.core.StringArrayProperty SWIFT_IMPORTS =
    init_SWIFT_IMPORTS();

  protected String swiftExtends_;

  private boolean swiftExtends_isSet_ =
    false;

  private foam.core.Slot swiftExtends_$;

  public static foam.core.StringProperty SWIFT_EXTENDS =
    init_SWIFT_EXTENDS();

  protected String[] swiftImplements_;

  private boolean swiftImplements_isSet_ =
    false;

  private foam.core.Slot swiftImplements_$;

  public static foam.core.StringArrayProperty SWIFT_IMPLEMENTS =
    init_SWIFT_IMPLEMENTS();

  protected String swiftCode_;

  private boolean swiftCode_isSet_ =
    false;

  private foam.core.Slot swiftCode_$;

  public static foam.core.StringProperty SWIFT_CODE =
    init_SWIFT_CODE();

  protected Object[] javaImports_;

  private boolean javaImports_isSet_ =
    false;

  private foam.core.Slot javaImports_$;

  public static foam.core.AxiomArray JAVA_IMPORTS =
    init_JAVA_IMPORTS();

  protected String javaName_;

  private boolean javaName_isSet_ =
    false;

  private foam.core.Slot javaName_$;

  public static foam.core.StringProperty JAVA_NAME =
    init_JAVA_NAME();

  protected Object[] javaImplements_;

  private boolean javaImplements_isSet_ =
    false;

  private foam.core.Slot javaImplements_$;

  public static foam.core.AxiomArray JAVA_IMPLEMENTS =
    init_JAVA_IMPLEMENTS();

  protected String css_;

  private boolean css_isSet_ =
    false;

  private foam.core.Slot css_$;

  public static foam.core.StringProperty CSS =
    init_CSS();

  protected boolean inheritCSS_;

  private boolean inheritCSS_isSet_ =
    false;

  private foam.core.Slot inheritCSS_$;

  public static foam.core.BooleanProperty INHERIT_CSS =
    init_INHERIT_CSS();

  protected Object tableProperties_;

  private boolean tableProperties_isSet_ =
    false;

  private foam.core.Slot tableProperties_$;

  public static foam.core.Property TABLE_PROPERTIES =
    init_TABLE_PROPERTIES();

  protected Object tableColumns_;

  private boolean tableColumns_isSet_ =
    false;

  private foam.core.Slot tableColumns_$;

  public static foam.core.Property TABLE_COLUMNS =
    init_TABLE_COLUMNS();

  protected Object searchColumns_;

  private boolean searchColumns_isSet_ =
    false;

  private foam.core.Slot searchColumns_$;

  public static foam.core.Property SEARCH_COLUMNS =
    init_SEARCH_COLUMNS();

  protected String androidPackage_;

  private boolean androidPackage_isSet_ =
    false;

  private foam.core.Slot androidPackage_$;

  public static foam.core.StringProperty ANDROID_PACKAGE =
    init_ANDROID_PACKAGE();

  protected String androidExtends_;

  private boolean androidExtends_isSet_ =
    false;

  private foam.core.Slot androidExtends_$;

  public static foam.core.StringProperty ANDROID_EXTENDS =
    init_ANDROID_EXTENDS();

  protected foam.cross_platform.FoamClass androidParentClass_;

  private boolean androidParentClass_isSet_ =
    false;

  private foam.core.Slot androidParentClass_$;

  public static foam.core.ClassProperty ANDROID_PARENT_CLASS =
    init_ANDROID_PARENT_CLASS();

  public static foam.cross_platform.FoamClass CLS_ =
    initClassInfo_();


  public void buildClass() {

    throw new RuntimeException("buildClass is not implemented");
  }

  public foam.core.Slot getId$() {

    if ( id_$ == null ) {
      id_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(ID)
        .build();
    }
    return id_$;
  }

  public String getId() {

    if ( ! id_isSet_ ) {
      return "";
    }
    return id_;
  }

  private String id_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setId(Object value) {

    boolean hasOldValue = hasPropertySet("id");
    Object oldValue = hasOldValue ?
      getId() :
      null;
    String castedValue = id_adapt(oldValue, value, hasOldValue);
    
    id_isSet_ = true;
    id_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "id", null };
    if ( hasListeners(args) ) {
      args[2] = getId$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_ID() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("id")
      .setHidden(true)
      .setGetter(null)
      .setForClass_("foam.core.Model")
      .setTransient(true)
      .build();
  }

  public foam.core.Slot getPackage$() {

    if ( package_$ == null ) {
      package_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(PACKAGE)
        .build();
    }
    return package_$;
  }

  public String getPackage() {

    if ( ! package_isSet_ ) {
      return "";
    }
    return package_;
  }

  private String package_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setPackage(Object value) {

    boolean hasOldValue = hasPropertySet("package");
    Object oldValue = hasOldValue ?
      getPackage() :
      null;
    String castedValue = package_adapt(oldValue, value, hasOldValue);
    
    package_isSet_ = true;
    package_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "package", null };
    if ( hasListeners(args) ) {
      args[2] = getPackage$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_PACKAGE() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("package")
      .setOrder(0)
      .setForClass_("foam.core.Model")
      .setGridColumns(4)
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
      .setLabel2("Can this class get instantiated?")
      .setName("abstract")
      .setForClass_("foam.core.Model")
      .setSection("classProperties")
      .build();
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
      .setOrder(1)
      .setForClass_("foam.core.Model")
      .setGridColumns(4)
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
      .setHelp("\n        When set, marks the model with the given flags. This can be used for\n        things like stripping out platform specific models when building.\n      ")
      .setSection("advanced")
      .setView(
    new java.util.HashMap<String, Object>() {
      {
      put("class", "foam.u2.view.StringArrayView");
      }
    }
              )
      .build();
  }

  public foam.core.Slot getExtends$() {

    if ( extends_$ == null ) {
      extends_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(EXTENDS)
        .build();
    }
    return extends_$;
  }

  public String getExtends() {

    if ( ! extends_isSet_ ) {
      return "FObject";
    }
    return extends_;
  }

  private String extends_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setExtends(Object value) {

    boolean hasOldValue = hasPropertySet("extends");
    Object oldValue = hasOldValue ?
      getExtends() :
      null;
    String castedValue = extends_adapt(oldValue, value, hasOldValue);
    
    extends_isSet_ = true;
    extends_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "extends", null };
    if ( hasListeners(args) ) {
      args[2] = getExtends$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_EXTENDS() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setValue("FObject")
      .setName("extends")
      .setOrder(3)
      .setForClass_("foam.core.Model")
      .setGridColumns(2)
      .setVisibilityExpression(null)
      .build();
  }

  public foam.core.Slot getRefines$() {

    if ( refines_$ == null ) {
      refines_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(REFINES)
        .build();
    }
    return refines_$;
  }

  public Object getRefines() {

    if ( ! refines_isSet_ ) {
      return null;
    }
    return refines_;
  }

  private Object refines_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setRefines(Object value) {

    boolean hasOldValue = hasPropertySet("refines");
    Object oldValue = hasOldValue ?
      getRefines() :
      null;
    Object castedValue = refines_adapt(oldValue, value, hasOldValue);
    
    refines_isSet_ = true;
    refines_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "refines", null };
    if ( hasListeners(args) ) {
      args[2] = getRefines$();
      pub(args);
    }
  }

  private static foam.core.Property init_REFINES() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
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
      .setName("documentation")
      .setOrder(5)
      .setForClass_("foam.core.Model")
      .setView(
    new java.util.HashMap<String, Object>() {
      {
      put("class", "foam.u2.tag.TextArea");
      }
    }
              )
      .build();
  }

  public foam.core.Slot getAxioms_$() {

    if ( axioms__$ == null ) {
      axioms__$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(AXIOMS_)
        .build();
    }
    return axioms__$;
  }

  public Object getAxioms_() {

    if ( ! axioms__isSet_ ) {
      return null;
    }
    return axioms__;
  }

  private Object axioms__adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setAxioms_(Object value) {

    boolean hasOldValue = hasPropertySet("axioms_");
    Object oldValue = hasOldValue ?
      getAxioms_() :
      null;
    Object castedValue = axioms__adapt(oldValue, value, hasOldValue);
    
    axioms__isSet_ = true;
    axioms__ = castedValue;
    Object[] args = new Object[] { "propertyChange", "axioms_", null };
    if ( hasListeners(args) ) {
      args[2] = getAxioms_$();
      pub(args);
    }
  }

  private static foam.core.Property init_AXIOMS_() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .build();
  }

  public foam.core.Slot getAxioms$() {

    if ( axioms_$ == null ) {
      axioms_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(AXIOMS)
        .build();
    }
    return axioms_$;
  }

  public Object getAxioms() {

    if ( ! axioms_isSet_ ) {
      return null;
    }
    return axioms_;
  }

  private Object axioms_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setAxioms(Object value) {

    boolean hasOldValue = hasPropertySet("axioms");
    Object oldValue = hasOldValue ?
      getAxioms() :
      null;
    Object castedValue = axioms_adapt(oldValue, value, hasOldValue);
    
    axioms_isSet_ = true;
    axioms_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "axioms", null };
    if ( hasListeners(args) ) {
      args[2] = getAxioms$();
      pub(args);
    }
  }

  private static foam.core.Property init_AXIOMS() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .build();
  }

  public foam.core.Slot getProperties$() {

    if ( properties_$ == null ) {
      properties_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(PROPERTIES)
        .build();
    }
    return properties_$;
  }

  public Object[] getProperties() {

    if ( ! properties_isSet_ ) {
      return null;
    }
    return properties_;
  }

  private Object[] properties_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object[]) newValue;
  }

  public void setProperties(Object value) {

    boolean hasOldValue = hasPropertySet("properties");
    Object oldValue = hasOldValue ?
      getProperties() :
      null;
    Object[] castedValue = properties_adapt(oldValue, value, hasOldValue);
    
    properties_isSet_ = true;
    properties_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "properties", null };
    if ( hasListeners(args) ) {
      args[2] = getProperties$();
      pub(args);
    }
  }

  private static foam.core.AxiomArray init_PROPERTIES() {

    return foam.core.AxiomArray.AxiomArrayBuilder(null) // TODO give context
      .setOf("Property")
      .setAdaptArrayElement(null)
      .setName("properties")
      .setForClass_("foam.core.Model")
      .build();
  }

  public foam.core.Slot getMethods$() {

    if ( methods_$ == null ) {
      methods_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(METHODS)
        .build();
    }
    return methods_$;
  }

  public Object[] getMethods() {

    if ( ! methods_isSet_ ) {
      return null;
    }
    return methods_;
  }

  private Object[] methods_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object[]) newValue;
  }

  public void setMethods(Object value) {

    boolean hasOldValue = hasPropertySet("methods");
    Object oldValue = hasOldValue ?
      getMethods() :
      null;
    Object[] castedValue = methods_adapt(oldValue, value, hasOldValue);
    
    methods_isSet_ = true;
    methods_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "methods", null };
    if ( hasListeners(args) ) {
      args[2] = getMethods$();
      pub(args);
    }
  }

  private static foam.core.AxiomArray init_METHODS() {

    return foam.core.AxiomArray.AxiomArrayBuilder(null) // TODO give context
      .setOf("Method")
      .setAdaptArrayElement(null)
      .setName("methods")
      .setForClass_("foam.core.Model")
      .build();
  }

  public foam.core.Slot getConstants$() {

    if ( constants_$ == null ) {
      constants_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(CONSTANTS)
        .build();
    }
    return constants_$;
  }

  public Object[] getConstants() {

    if ( ! constants_isSet_ ) {
      return null;
    }
    return constants_;
  }

  private Object[] constants_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object[]) newValue;
  }

  public void setConstants(Object value) {

    boolean hasOldValue = hasPropertySet("constants");
    Object oldValue = hasOldValue ?
      getConstants() :
      null;
    Object[] castedValue = constants_adapt(oldValue, value, hasOldValue);
    
    constants_isSet_ = true;
    constants_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "constants", null };
    if ( hasListeners(args) ) {
      args[2] = getConstants$();
      pub(args);
    }
  }

  private static foam.core.AxiomArray init_CONSTANTS() {

    return foam.core.AxiomArray.AxiomArrayBuilder(null) // TODO give context
      .setOf("Constant")
      .setAdapt(null)
      .setName("constants")
      .setForClass_("foam.core.Model")
      .build();
  }

  public foam.core.Slot getOrder$() {

    if ( order_$ == null ) {
      order_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(ORDER)
        .build();
    }
    return order_$;
  }

  public long getOrder() {

    if ( ! order_isSet_ ) {
      return 9007199254740991L;
    }
    return order_;
  }

  private long order_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (long) newValue;
  }

  public void setOrder(Object value) {

    boolean hasOldValue = hasPropertySet("order");
    Object oldValue = hasOldValue ?
      getOrder() :
      null;
    long castedValue = order_adapt(oldValue, value, hasOldValue);
    
    order_isSet_ = true;
    order_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "order", null };
    if ( hasListeners(args) ) {
      args[2] = getOrder$();
      pub(args);
    }
  }

  private static foam.core.LongProperty init_ORDER() {

    return foam.core.LongProperty.LongPropertyBuilder(null) // TODO give context
      .setValue(9007199254740991L)
      .setName("order")
      .setForClass_("foam.core.Model")
      .setSection("advanced")
      .build();
  }

  public foam.core.Slot getPlural$() {

    if ( plural_$ == null ) {
      plural_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(PLURAL)
        .build();
    }
    return plural_$;
  }

  public String getPlural() {

    if ( ! plural_isSet_ ) {
      return "";
    }
    return plural_;
  }

  private String plural_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setPlural(Object value) {

    boolean hasOldValue = hasPropertySet("plural");
    Object oldValue = hasOldValue ?
      getPlural() :
      null;
    String castedValue = plural_adapt(oldValue, value, hasOldValue);
    
    plural_isSet_ = true;
    plural_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "plural", null };
    if ( hasListeners(args) ) {
      args[2] = getPlural$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_PLURAL() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("plural")
      .setOrder(7)
      .setExpression(null)
      .setForClass_("foam.core.Model")
      .setGridColumns(6)
      .setSection("uiSection")
      .build();
  }

  public foam.core.Slot getLabel$() {

    if ( label_$ == null ) {
      label_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(LABEL)
        .build();
    }
    return label_$;
  }

  public String getLabel() {

    if ( ! label_isSet_ ) {
      return "";
    }
    return label_;
  }

  private String label_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setLabel(Object value) {

    boolean hasOldValue = hasPropertySet("label");
    Object oldValue = hasOldValue ?
      getLabel() :
      null;
    String castedValue = label_adapt(oldValue, value, hasOldValue);
    
    label_isSet_ = true;
    label_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "label", null };
    if ( hasListeners(args) ) {
      args[2] = getLabel$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_LABEL() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("label")
      .setOrder(6)
      .setExpression(null)
      .setForClass_("foam.core.Model")
      .setGridColumns(6)
      .setSection("uiSection")
      .build();
  }

  public foam.core.Slot getTopics$() {

    if ( topics_$ == null ) {
      topics_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(TOPICS)
        .build();
    }
    return topics_$;
  }

  public Object[] getTopics() {

    if ( ! topics_isSet_ ) {
      return null;
    }
    return topics_;
  }

  private Object[] topics_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object[]) newValue;
  }

  public void setTopics(Object value) {

    boolean hasOldValue = hasPropertySet("topics");
    Object oldValue = hasOldValue ?
      getTopics() :
      null;
    Object[] castedValue = topics_adapt(oldValue, value, hasOldValue);
    
    topics_isSet_ = true;
    topics_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "topics", null };
    if ( hasListeners(args) ) {
      args[2] = getTopics$();
      pub(args);
    }
  }

  private static foam.core.AxiomArray init_TOPICS() {

    return foam.core.AxiomArray.AxiomArrayBuilder(null) // TODO give context
      .setOf("Topic")
      .setAdaptArrayElement(null)
      .setName("topics")
      .setForClass_("foam.core.Model")
      .build();
  }

  public foam.core.Slot getClasses$() {

    if ( classes_$ == null ) {
      classes_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(CLASSES)
        .build();
    }
    return classes_$;
  }

  public Object[] getClasses() {

    if ( ! classes_isSet_ ) {
      return null;
    }
    return classes_;
  }

  private Object[] classes_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object[]) newValue;
  }

  public void setClasses(Object value) {

    boolean hasOldValue = hasPropertySet("classes");
    Object oldValue = hasOldValue ?
      getClasses() :
      null;
    Object[] castedValue = classes_adapt(oldValue, value, hasOldValue);
    
    classes_isSet_ = true;
    classes_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "classes", null };
    if ( hasListeners(args) ) {
      args[2] = getClasses$();
      pub(args);
    }
  }

  private static foam.core.AxiomArray init_CLASSES() {

    return foam.core.AxiomArray.AxiomArrayBuilder(null) // TODO give context
      .setOf("InnerClass")
      .setAdaptArrayElement(null)
      .setName("classes")
      .setForClass_("foam.core.Model")
      .build();
  }

  public foam.core.Slot getEnums$() {

    if ( enums_$ == null ) {
      enums_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(ENUMS)
        .build();
    }
    return enums_$;
  }

  public Object[] getEnums() {

    if ( ! enums_isSet_ ) {
      return null;
    }
    return enums_;
  }

  private Object[] enums_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object[]) newValue;
  }

  public void setEnums(Object value) {

    boolean hasOldValue = hasPropertySet("enums");
    Object oldValue = hasOldValue ?
      getEnums() :
      null;
    Object[] castedValue = enums_adapt(oldValue, value, hasOldValue);
    
    enums_isSet_ = true;
    enums_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "enums", null };
    if ( hasListeners(args) ) {
      args[2] = getEnums$();
      pub(args);
    }
  }

  private static foam.core.AxiomArray init_ENUMS() {

    return foam.core.AxiomArray.AxiomArrayBuilder(null) // TODO give context
      .setOf("InnerEnum")
      .setAdaptArrayElement(null)
      .setName("enums")
      .setForClass_("foam.core.Model")
      .build();
  }

  public foam.core.Slot getImplements$() {

    if ( implements_$ == null ) {
      implements_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(IMPLEMENTS)
        .build();
    }
    return implements_$;
  }

  public Object[] getImplements() {

    if ( ! implements_isSet_ ) {
      return null;
    }
    return implements_;
  }

  private Object[] implements_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object[]) newValue;
  }

  public void setImplements(Object value) {

    boolean hasOldValue = hasPropertySet("implements");
    Object oldValue = hasOldValue ?
      getImplements() :
      null;
    Object[] castedValue = implements_adapt(oldValue, value, hasOldValue);
    
    implements_isSet_ = true;
    implements_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "implements", null };
    if ( hasListeners(args) ) {
      args[2] = getImplements$();
      pub(args);
    }
  }

  private static foam.core.AxiomArray init_IMPLEMENTS() {

    return foam.core.AxiomArray.AxiomArrayBuilder(null) // TODO give context
      .setOf("Implements")
      .setAdaptArrayElement(null)
      .setName("implements")
      .setForClass_("foam.core.Model")
      .build();
  }

  public foam.core.Slot getImports$() {

    if ( imports_$ == null ) {
      imports_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(IMPORTS)
        .build();
    }
    return imports_$;
  }

  public Object[] getImports() {

    if ( ! imports_isSet_ ) {
      return null;
    }
    return imports_;
  }

  private Object[] imports_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object[]) newValue;
  }

  public void setImports(Object value) {

    boolean hasOldValue = hasPropertySet("imports");
    Object oldValue = hasOldValue ?
      getImports() :
      null;
    Object[] castedValue = imports_adapt(oldValue, value, hasOldValue);
    
    imports_isSet_ = true;
    imports_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "imports", null };
    if ( hasListeners(args) ) {
      args[2] = getImports$();
      pub(args);
    }
  }

  private static foam.core.AxiomArray init_IMPORTS() {

    return foam.core.AxiomArray.AxiomArrayBuilder(null) // TODO give context
      .setOf("Import")
      .setAdaptArrayElement(null)
      .setName("imports")
      .setForClass_("foam.core.Model")
      .build();
  }

  public foam.core.Slot getExports$() {

    if ( exports_$ == null ) {
      exports_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(EXPORTS)
        .build();
    }
    return exports_$;
  }

  public Object[] getExports() {

    if ( ! exports_isSet_ ) {
      return null;
    }
    return exports_;
  }

  private Object[] exports_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object[]) newValue;
  }

  public void setExports(Object value) {

    boolean hasOldValue = hasPropertySet("exports");
    Object oldValue = hasOldValue ?
      getExports() :
      null;
    Object[] castedValue = exports_adapt(oldValue, value, hasOldValue);
    
    exports_isSet_ = true;
    exports_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "exports", null };
    if ( hasListeners(args) ) {
      args[2] = getExports$();
      pub(args);
    }
  }

  private static foam.core.AxiomArray init_EXPORTS() {

    return foam.core.AxiomArray.AxiomArrayBuilder(null) // TODO give context
      .setOf("Export")
      .setAdaptArrayElement(null)
      .setName("exports")
      .setForClass_("foam.core.Model")
      .build();
  }

  public foam.core.Slot getListeners$() {

    if ( listeners_$ == null ) {
      listeners_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(LISTENERS)
        .build();
    }
    return listeners_$;
  }

  public Object[] getListeners() {

    if ( ! listeners_isSet_ ) {
      return null;
    }
    return listeners_;
  }

  private Object[] listeners_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object[]) newValue;
  }

  public void setListeners(Object value) {

    boolean hasOldValue = hasPropertySet("listeners");
    Object oldValue = hasOldValue ?
      getListeners() :
      null;
    Object[] castedValue = listeners_adapt(oldValue, value, hasOldValue);
    
    listeners_isSet_ = true;
    listeners_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "listeners", null };
    if ( hasListeners(args) ) {
      args[2] = getListeners$();
      pub(args);
    }
  }

  private static foam.core.AxiomArray init_LISTENERS() {

    return foam.core.AxiomArray.AxiomArrayBuilder(null) // TODO give context
      .setOf("Listener")
      .setAdaptArrayElement(null)
      .setName("listeners")
      .setForClass_("foam.core.Model")
      .build();
  }

  public foam.core.Slot getIds$() {

    if ( ids_$ == null ) {
      ids_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(IDS)
        .build();
    }
    return ids_$;
  }

  public Object getIds() {

    if ( ! ids_isSet_ ) {
      return null;
    }
    return ids_;
  }

  private Object ids_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setIds(Object value) {

    boolean hasOldValue = hasPropertySet("ids");
    Object oldValue = hasOldValue ?
      getIds() :
      null;
    Object castedValue = ids_adapt(oldValue, value, hasOldValue);
    
    ids_isSet_ = true;
    ids_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "ids", null };
    if ( hasListeners(args) ) {
      args[2] = getIds$();
      pub(args);
    }
  }

  private static foam.core.Property init_IDS() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("ids")
      .setHidden(true)
      .setPostSet(null)
      .setForClass_("foam.core.Model")
      .build();
  }

  public foam.core.Slot getRequires$() {

    if ( requires_$ == null ) {
      requires_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(REQUIRES)
        .build();
    }
    return requires_$;
  }

  public Object[] getRequires() {

    if ( ! requires_isSet_ ) {
      return null;
    }
    return requires_;
  }

  private Object[] requires_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object[]) newValue;
  }

  public void setRequires(Object value) {

    boolean hasOldValue = hasPropertySet("requires");
    Object oldValue = hasOldValue ?
      getRequires() :
      null;
    Object[] castedValue = requires_adapt(oldValue, value, hasOldValue);
    
    requires_isSet_ = true;
    requires_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "requires", null };
    if ( hasListeners(args) ) {
      args[2] = getRequires$();
      pub(args);
    }
  }

  private static foam.core.AxiomArray init_REQUIRES() {

    return foam.core.AxiomArray.AxiomArrayBuilder(null) // TODO give context
      .setOf("Requires")
      .setAdaptArrayElement(null)
      .setName("requires")
      .setForClass_("foam.core.Model")
      .build();
  }

  public foam.core.Slot getSource$() {

    if ( source_$ == null ) {
      source_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(SOURCE)
        .build();
    }
    return source_$;
  }

  public String getSource() {

    if ( ! source_isSet_ ) {
      return "";
    }
    return source_;
  }

  private String source_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setSource(Object value) {

    boolean hasOldValue = hasPropertySet("source");
    Object oldValue = hasOldValue ?
      getSource() :
      null;
    String castedValue = source_adapt(oldValue, value, hasOldValue);
    
    source_isSet_ = true;
    source_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "source", null };
    if ( hasListeners(args) ) {
      args[2] = getSource$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_SOURCE() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("source")
      .setForClass_("foam.core.Model")
      .setSection("advanced")
      .setTransient(true)
      .build();
  }

  public void validate() {

    throw new RuntimeException("validate is not implemented");
  }

  public foam.core.Slot getSections$() {

    if ( sections_$ == null ) {
      sections_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(SECTIONS)
        .build();
    }
    return sections_$;
  }

  public Object[] getSections() {

    if ( ! sections_isSet_ ) {
      return null;
    }
    return sections_;
  }

  private Object[] sections_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object[]) newValue;
  }

  public void setSections(Object value) {

    boolean hasOldValue = hasPropertySet("sections");
    Object oldValue = hasOldValue ?
      getSections() :
      null;
    Object[] castedValue = sections_adapt(oldValue, value, hasOldValue);
    
    sections_isSet_ = true;
    sections_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "sections", null };
    if ( hasListeners(args) ) {
      args[2] = getSections$();
      pub(args);
    }
  }

  private static foam.core.AxiomArray init_SECTIONS() {

    return foam.core.AxiomArray.AxiomArrayBuilder(null) // TODO give context
      .setOf("foam.layout.SectionAxiom")
      .setName("sections")
      .setForClass_("foam.core.Model")
      .build();
  }

  public foam.core.Slot getGrammars$() {

    if ( grammars_$ == null ) {
      grammars_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(GRAMMARS)
        .build();
    }
    return grammars_$;
  }

  public Object[] getGrammars() {

    if ( ! grammars_isSet_ ) {
      return null;
    }
    return grammars_;
  }

  private Object[] grammars_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object[]) newValue;
  }

  public void setGrammars(Object value) {

    boolean hasOldValue = hasPropertySet("grammars");
    Object oldValue = hasOldValue ?
      getGrammars() :
      null;
    Object[] castedValue = grammars_adapt(oldValue, value, hasOldValue);
    
    grammars_isSet_ = true;
    grammars_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "grammars", null };
    if ( hasListeners(args) ) {
      args[2] = getGrammars$();
      pub(args);
    }
  }

  private static foam.core.AxiomArray init_GRAMMARS() {

    return foam.core.AxiomArray.AxiomArrayBuilder(null) // TODO give context
      .setOf("foam.parse.GrammarAxiom")
      .setName("grammars")
      .setForClass_("foam.core.Model")
      .build();
  }

  public foam.core.Slot getTemplates$() {

    if ( templates_$ == null ) {
      templates_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(TEMPLATES)
        .build();
    }
    return templates_$;
  }

  public Object[] getTemplates() {

    if ( ! templates_isSet_ ) {
      return null;
    }
    return templates_;
  }

  private Object[] templates_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object[]) newValue;
  }

  public void setTemplates(Object value) {

    boolean hasOldValue = hasPropertySet("templates");
    Object oldValue = hasOldValue ?
      getTemplates() :
      null;
    Object[] castedValue = templates_adapt(oldValue, value, hasOldValue);
    
    templates_isSet_ = true;
    templates_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "templates", null };
    if ( hasListeners(args) ) {
      args[2] = getTemplates$();
      pub(args);
    }
  }

  private static foam.core.AxiomArray init_TEMPLATES() {

    return foam.core.AxiomArray.AxiomArrayBuilder(null) // TODO give context
      .setOf("foam.templates.TemplateAxiom")
      .setAdaptArrayElement(null)
      .setName("templates")
      .setForClass_("foam.core.Model")
      .build();
  }

  public foam.core.Slot getMessages$() {

    if ( messages_$ == null ) {
      messages_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(MESSAGES)
        .build();
    }
    return messages_$;
  }

  public Object[] getMessages() {

    if ( ! messages_isSet_ ) {
      return null;
    }
    return messages_;
  }

  private Object[] messages_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object[]) newValue;
  }

  public void setMessages(Object value) {

    boolean hasOldValue = hasPropertySet("messages");
    Object oldValue = hasOldValue ?
      getMessages() :
      null;
    Object[] castedValue = messages_adapt(oldValue, value, hasOldValue);
    
    messages_isSet_ = true;
    messages_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "messages", null };
    if ( hasListeners(args) ) {
      args[2] = getMessages$();
      pub(args);
    }
  }

  private static foam.core.AxiomArray init_MESSAGES() {

    return foam.core.AxiomArray.AxiomArrayBuilder(null) // TODO give context
      .setOf("foam.i18n.MessageAxiom")
      .setName("messages")
      .setForClass_("foam.core.Model")
      .build();
  }

  public foam.core.Slot getActions$() {

    if ( actions_$ == null ) {
      actions_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(ACTIONS)
        .build();
    }
    return actions_$;
  }

  public Object[] getActions() {

    if ( ! actions_isSet_ ) {
      return null;
    }
    return actions_;
  }

  private Object[] actions_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object[]) newValue;
  }

  public void setActions(Object value) {

    boolean hasOldValue = hasPropertySet("actions");
    Object oldValue = hasOldValue ?
      getActions() :
      null;
    Object[] castedValue = actions_adapt(oldValue, value, hasOldValue);
    
    actions_isSet_ = true;
    actions_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "actions", null };
    if ( hasListeners(args) ) {
      args[2] = getActions$();
      pub(args);
    }
  }

  private static foam.core.AxiomArray init_ACTIONS() {

    return foam.core.AxiomArray.AxiomArrayBuilder(null) // TODO give context
      .setOf("Action")
      .setAdaptArrayElement(null)
      .setName("actions")
      .setForClass_("foam.core.Model")
      .build();
  }

  public foam.core.Slot getStatic$() {

    if ( static_$ == null ) {
      static_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(STATIC)
        .build();
    }
    return static_$;
  }

  public Object[] getStatic() {

    if ( ! static_isSet_ ) {
      return null;
    }
    return static_;
  }

  private Object[] static_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object[]) newValue;
  }

  public void setStatic(Object value) {

    boolean hasOldValue = hasPropertySet("static");
    Object oldValue = hasOldValue ?
      getStatic() :
      null;
    Object[] castedValue = static_adapt(oldValue, value, hasOldValue);
    
    static_isSet_ = true;
    static_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "static", null };
    if ( hasListeners(args) ) {
      args[2] = getStatic$();
      pub(args);
    }
  }

  private static foam.core.AxiomArray init_STATIC() {

    return foam.core.AxiomArray.AxiomArrayBuilder(null) // TODO give context
      .setOf("Static")
      .setAdaptArrayElement(null)
      .setName("static")
      .setForClass_("foam.core.Model")
      .build();
  }

  public foam.core.Slot getReactions$() {

    if ( reactions_$ == null ) {
      reactions_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(REACTIONS)
        .build();
    }
    return reactions_$;
  }

  public Object[] getReactions() {

    if ( ! reactions_isSet_ ) {
      return null;
    }
    return reactions_;
  }

  private Object[] reactions_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object[]) newValue;
  }

  public void setReactions(Object value) {

    boolean hasOldValue = hasPropertySet("reactions");
    Object oldValue = hasOldValue ?
      getReactions() :
      null;
    Object[] castedValue = reactions_adapt(oldValue, value, hasOldValue);
    
    reactions_isSet_ = true;
    reactions_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "reactions", null };
    if ( hasListeners(args) ) {
      args[2] = getReactions$();
      pub(args);
    }
  }

  private static foam.core.AxiomArray init_REACTIONS() {

    return foam.core.AxiomArray.AxiomArrayBuilder(null) // TODO give context
      .setOf("foam.core.Reaction")
      .setAdaptArrayElement(null)
      .setName("reactions")
      .setForClass_("foam.core.Model")
      .build();
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
      .setForClass_("foam.core.Model")
      .setSection("swiftProperties")
      .build();
  }

  public foam.core.Slot getGenerateSwift$() {

    if ( generateSwift_$ == null ) {
      generateSwift_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(GENERATE_SWIFT)
        .build();
    }
    return generateSwift_$;
  }

  public boolean getGenerateSwift() {

    if ( ! generateSwift_isSet_ ) {
      return true;
    }
    return generateSwift_;
  }

  private boolean generateSwift_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (boolean) newValue;
  }

  public void setGenerateSwift(Object value) {

    boolean hasOldValue = hasPropertySet("generateSwift");
    Object oldValue = hasOldValue ?
      getGenerateSwift() :
      null;
    boolean castedValue = generateSwift_adapt(oldValue, value, hasOldValue);
    
    generateSwift_isSet_ = true;
    generateSwift_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "generateSwift", null };
    if ( hasListeners(args) ) {
      args[2] = getGenerateSwift$();
      pub(args);
    }
  }

  private static foam.core.BooleanProperty init_GENERATE_SWIFT() {

    return foam.core.BooleanProperty.BooleanPropertyBuilder(null) // TODO give context
      .setValue(true)
      .setName("generateSwift")
      .setForClass_("foam.core.Model")
      .setSection("swiftProperties")
      .build();
  }

  public foam.core.Slot getSwiftImports$() {

    if ( swiftImports_$ == null ) {
      swiftImports_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(SWIFT_IMPORTS)
        .build();
    }
    return swiftImports_$;
  }

  protected String[] swiftImports_factory_() {

    return new String[0];
  }

  public String[] getSwiftImports() {

    if ( ! swiftImports_isSet_ ) {
      setProperty("swiftImports", swiftImports_factory_());
    }
    return swiftImports_;
  }

  private String[] swiftImports_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String[]) newValue;
  }

  public void setSwiftImports(Object value) {

    boolean hasOldValue = hasPropertySet("swiftImports");
    Object oldValue = hasOldValue ?
      getSwiftImports() :
      null;
    String[] castedValue = swiftImports_adapt(oldValue, value, hasOldValue);
    
    swiftImports_isSet_ = true;
    swiftImports_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "swiftImports", null };
    if ( hasListeners(args) ) {
      args[2] = getSwiftImports$();
      pub(args);
    }
  }

  private static foam.core.StringArrayProperty init_SWIFT_IMPORTS() {

    return foam.core.StringArrayProperty.StringArrayPropertyBuilder(null) // TODO give context
      .setName("swiftImports")
      .setForClass_("foam.core.Model")
      .setSection("swiftProperties")
      .build();
  }

  public foam.core.Slot getSwiftExtends$() {

    if ( swiftExtends_$ == null ) {
      swiftExtends_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(SWIFT_EXTENDS)
        .build();
    }
    return swiftExtends_$;
  }

  public String getSwiftExtends() {

    if ( ! swiftExtends_isSet_ ) {
      return "";
    }
    return swiftExtends_;
  }

  private String swiftExtends_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setSwiftExtends(Object value) {

    boolean hasOldValue = hasPropertySet("swiftExtends");
    Object oldValue = hasOldValue ?
      getSwiftExtends() :
      null;
    String castedValue = swiftExtends_adapt(oldValue, value, hasOldValue);
    
    swiftExtends_isSet_ = true;
    swiftExtends_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "swiftExtends", null };
    if ( hasListeners(args) ) {
      args[2] = getSwiftExtends$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_SWIFT_EXTENDS() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("swiftExtends")
      .setExpression(null)
      .setForClass_("foam.core.Model")
      .setSection("swiftProperties")
      .build();
  }

  public foam.core.Slot getSwiftImplements$() {

    if ( swiftImplements_$ == null ) {
      swiftImplements_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(SWIFT_IMPLEMENTS)
        .build();
    }
    return swiftImplements_$;
  }

  protected String[] swiftImplements_factory_() {

    return new String[0];
  }

  public String[] getSwiftImplements() {

    if ( ! swiftImplements_isSet_ ) {
      setProperty("swiftImplements", swiftImplements_factory_());
    }
    return swiftImplements_;
  }

  private String[] swiftImplements_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String[]) newValue;
  }

  public void setSwiftImplements(Object value) {

    boolean hasOldValue = hasPropertySet("swiftImplements");
    Object oldValue = hasOldValue ?
      getSwiftImplements() :
      null;
    String[] castedValue = swiftImplements_adapt(oldValue, value, hasOldValue);
    
    swiftImplements_isSet_ = true;
    swiftImplements_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "swiftImplements", null };
    if ( hasListeners(args) ) {
      args[2] = getSwiftImplements$();
      pub(args);
    }
  }

  private static foam.core.StringArrayProperty init_SWIFT_IMPLEMENTS() {

    return foam.core.StringArrayProperty.StringArrayPropertyBuilder(null) // TODO give context
      .setName("swiftImplements")
      .setForClass_("foam.core.Model")
      .setSection("swiftProperties")
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
      .setForClass_("foam.core.Model")
      .setSection("swiftProperties")
      .build();
  }

  public void swiftAllImplements() {

    throw new RuntimeException("swiftAllImplements is not implemented");
  }

  public foam.core.Slot getJavaImports$() {

    if ( javaImports_$ == null ) {
      javaImports_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(JAVA_IMPORTS)
        .build();
    }
    return javaImports_$;
  }

  public Object[] getJavaImports() {

    if ( ! javaImports_isSet_ ) {
      return null;
    }
    return javaImports_;
  }

  private Object[] javaImports_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object[]) newValue;
  }

  public void setJavaImports(Object value) {

    boolean hasOldValue = hasPropertySet("javaImports");
    Object oldValue = hasOldValue ?
      getJavaImports() :
      null;
    Object[] castedValue = javaImports_adapt(oldValue, value, hasOldValue);
    
    javaImports_isSet_ = true;
    javaImports_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "javaImports", null };
    if ( hasListeners(args) ) {
      args[2] = getJavaImports$();
      pub(args);
    }
  }

  private static foam.core.AxiomArray init_JAVA_IMPORTS() {

    return foam.core.AxiomArray.AxiomArrayBuilder(null) // TODO give context
      .setOf("foam.java.JavaImport")
      .setAdaptArrayElement(null)
      .setName("javaImports")
      .setForClass_("foam.core.Model")
      .build();
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

  public String getJavaName() {

    if ( ! javaName_isSet_ ) {
      return "";
    }
    return javaName_;
  }

  private String javaName_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setJavaName(Object value) {

    boolean hasOldValue = hasPropertySet("javaName");
    Object oldValue = hasOldValue ?
      getJavaName() :
      null;
    String castedValue = javaName_adapt(oldValue, value, hasOldValue);
    
    javaName_isSet_ = true;
    javaName_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "javaName", null };
    if ( hasListeners(args) ) {
      args[2] = getJavaName$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_JAVA_NAME() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("javaName")
      .setFactory(null)
      .setForClass_("foam.core.Model")
      .setSection("javaProperties")
      .build();
  }

  public foam.core.Slot getJavaImplements$() {

    if ( javaImplements_$ == null ) {
      javaImplements_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(JAVA_IMPLEMENTS)
        .build();
    }
    return javaImplements_$;
  }

  public Object[] getJavaImplements() {

    if ( ! javaImplements_isSet_ ) {
      return null;
    }
    return javaImplements_;
  }

  private Object[] javaImplements_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object[]) newValue;
  }

  public void setJavaImplements(Object value) {

    boolean hasOldValue = hasPropertySet("javaImplements");
    Object oldValue = hasOldValue ?
      getJavaImplements() :
      null;
    Object[] castedValue = javaImplements_adapt(oldValue, value, hasOldValue);
    
    javaImplements_isSet_ = true;
    javaImplements_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "javaImplements", null };
    if ( hasListeners(args) ) {
      args[2] = getJavaImplements$();
      pub(args);
    }
  }

  private static foam.core.AxiomArray init_JAVA_IMPLEMENTS() {

    return foam.core.AxiomArray.AxiomArrayBuilder(null) // TODO give context
      .setOf("foam.java.JavaImplements")
      .setAdaptArrayElement(null)
      .setName("javaImplements")
      .setForClass_("foam.core.Model")
      .build();
  }

  public foam.core.Slot getCss$() {

    if ( css_$ == null ) {
      css_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(CSS)
        .build();
    }
    return css_$;
  }

  public String getCss() {

    if ( ! css_isSet_ ) {
      return "";
    }
    return css_;
  }

  private String css_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setCss(Object value) {

    boolean hasOldValue = hasPropertySet("css");
    Object oldValue = hasOldValue ?
      getCss() :
      null;
    String castedValue = css_adapt(oldValue, value, hasOldValue);
    
    css_isSet_ = true;
    css_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "css", null };
    if ( hasListeners(args) ) {
      args[2] = getCss$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_CSS() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("css")
      .setHidden(true)
      .setPostSet(null)
      .setForClass_("foam.core.Model")
      .build();
  }

  public foam.core.Slot getInheritCSS$() {

    if ( inheritCSS_$ == null ) {
      inheritCSS_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(INHERIT_CSS)
        .build();
    }
    return inheritCSS_$;
  }

  public boolean getInheritCSS() {

    if ( ! inheritCSS_isSet_ ) {
      return true;
    }
    return inheritCSS_;
  }

  private boolean inheritCSS_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (boolean) newValue;
  }

  public void setInheritCSS(Object value) {

    boolean hasOldValue = hasPropertySet("inheritCSS");
    Object oldValue = hasOldValue ?
      getInheritCSS() :
      null;
    boolean castedValue = inheritCSS_adapt(oldValue, value, hasOldValue);
    
    inheritCSS_isSet_ = true;
    inheritCSS_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "inheritCSS", null };
    if ( hasListeners(args) ) {
      args[2] = getInheritCSS$();
      pub(args);
    }
  }

  private static foam.core.BooleanProperty init_INHERIT_CSS() {

    return foam.core.BooleanProperty.BooleanPropertyBuilder(null) // TODO give context
      .setValue(true)
      .setName("inheritCSS")
      .setForClass_("foam.core.Model")
      .setSection("htmlSection")
      .build();
  }

  public foam.core.Slot getTableProperties$() {

    if ( tableProperties_$ == null ) {
      tableProperties_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(TABLE_PROPERTIES)
        .build();
    }
    return tableProperties_$;
  }

  public Object getTableProperties() {

    if ( ! tableProperties_isSet_ ) {
      return null;
    }
    return tableProperties_;
  }

  private Object tableProperties_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setTableProperties(Object value) {

    boolean hasOldValue = hasPropertySet("tableProperties");
    Object oldValue = hasOldValue ?
      getTableProperties() :
      null;
    Object castedValue = tableProperties_adapt(oldValue, value, hasOldValue);
    
    tableProperties_isSet_ = true;
    tableProperties_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "tableProperties", null };
    if ( hasListeners(args) ) {
      args[2] = getTableProperties$();
      pub(args);
    }
  }

  private static foam.core.Property init_TABLE_PROPERTIES() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("tableProperties")
      .setDocumentation("\n        // TODO: remove when all code ported\n      ")
      .setHidden(true)
      .setSetter(null)
      .setForClass_("foam.core.Model")
      .build();
  }

  public foam.core.Slot getTableColumns$() {

    if ( tableColumns_$ == null ) {
      tableColumns_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(TABLE_COLUMNS)
        .build();
    }
    return tableColumns_$;
  }

  public Object getTableColumns() {

    if ( ! tableColumns_isSet_ ) {
      return null;
    }
    return tableColumns_;
  }

  private Object tableColumns_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setTableColumns(Object value) {

    boolean hasOldValue = hasPropertySet("tableColumns");
    Object oldValue = hasOldValue ?
      getTableColumns() :
      null;
    Object castedValue = tableColumns_adapt(oldValue, value, hasOldValue);
    
    tableColumns_isSet_ = true;
    tableColumns_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "tableColumns", null };
    if ( hasListeners(args) ) {
      args[2] = getTableColumns$();
      pub(args);
    }
  }

  private static foam.core.Property init_TABLE_COLUMNS() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("tableColumns")
      .setHidden(true)
      .setPostSet(null)
      .setForClass_("foam.core.Model")
      .build();
  }

  public foam.core.Slot getSearchColumns$() {

    if ( searchColumns_$ == null ) {
      searchColumns_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(SEARCH_COLUMNS)
        .build();
    }
    return searchColumns_$;
  }

  public Object getSearchColumns() {

    if ( ! searchColumns_isSet_ ) {
      return null;
    }
    return searchColumns_;
  }

  private Object searchColumns_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setSearchColumns(Object value) {

    boolean hasOldValue = hasPropertySet("searchColumns");
    Object oldValue = hasOldValue ?
      getSearchColumns() :
      null;
    Object castedValue = searchColumns_adapt(oldValue, value, hasOldValue);
    
    searchColumns_isSet_ = true;
    searchColumns_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "searchColumns", null };
    if ( hasListeners(args) ) {
      args[2] = getSearchColumns$();
      pub(args);
    }
  }

  private static foam.core.Property init_SEARCH_COLUMNS() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("searchColumns")
      .setHidden(true)
      .setPostSet(null)
      .setForClass_("foam.core.Model")
      .build();
  }

  public void getClassDeps() {

    throw new RuntimeException("getClassDeps is not implemented");
  }

  public foam.core.Slot getAndroidPackage$() {

    if ( androidPackage_$ == null ) {
      androidPackage_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(ANDROID_PACKAGE)
        .build();
    }
    return androidPackage_$;
  }

  public String getAndroidPackage() {

    if ( ! androidPackage_isSet_ ) {
      return "";
    }
    return androidPackage_;
  }

  private String androidPackage_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setAndroidPackage(Object value) {

    boolean hasOldValue = hasPropertySet("androidPackage");
    Object oldValue = hasOldValue ?
      getAndroidPackage() :
      null;
    String castedValue = androidPackage_adapt(oldValue, value, hasOldValue);
    
    androidPackage_isSet_ = true;
    androidPackage_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "androidPackage", null };
    if ( hasListeners(args) ) {
      args[2] = getAndroidPackage$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_ANDROID_PACKAGE() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("androidPackage")
      .setExpression(null)
      .setForClass_("foam.core.Model")
      .build();
  }

  public foam.core.Slot getAndroidExtends$() {

    if ( androidExtends_$ == null ) {
      androidExtends_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(ANDROID_EXTENDS)
        .build();
    }
    return androidExtends_$;
  }

  public String getAndroidExtends() {

    if ( ! androidExtends_isSet_ ) {
      return "";
    }
    return androidExtends_;
  }

  private String androidExtends_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setAndroidExtends(Object value) {

    boolean hasOldValue = hasPropertySet("androidExtends");
    Object oldValue = hasOldValue ?
      getAndroidExtends() :
      null;
    String castedValue = androidExtends_adapt(oldValue, value, hasOldValue);
    
    androidExtends_isSet_ = true;
    androidExtends_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "androidExtends", null };
    if ( hasListeners(args) ) {
      args[2] = getAndroidExtends$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_ANDROID_EXTENDS() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("androidExtends")
      .setExpression(null)
      .setForClass_("foam.core.Model")
      .build();
  }

  public foam.core.Slot getAndroidParentClass$() {

    if ( androidParentClass_$ == null ) {
      androidParentClass_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(ANDROID_PARENT_CLASS)
        .build();
    }
    return androidParentClass_$;
  }

  public foam.cross_platform.FoamClass getAndroidParentClass() {

    if ( ! androidParentClass_isSet_ ) {
      return null;
    }
    return androidParentClass_;
  }

  private foam.cross_platform.FoamClass androidParentClass_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (foam.cross_platform.FoamClass) newValue;
  }

  public void setAndroidParentClass(Object value) {

    boolean hasOldValue = hasPropertySet("androidParentClass");
    Object oldValue = hasOldValue ?
      getAndroidParentClass() :
      null;
    foam.cross_platform.FoamClass castedValue = androidParentClass_adapt(oldValue, value, hasOldValue);
    
    androidParentClass_isSet_ = true;
    androidParentClass_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "androidParentClass", null };
    if ( hasListeners(args) ) {
      args[2] = getAndroidParentClass$();
      pub(args);
    }
  }

  private static foam.core.ClassProperty init_ANDROID_PARENT_CLASS() {

    return foam.core.ClassProperty.ClassPropertyBuilder(null) // TODO give context
      .setName("androidParentClass")
      .setExpression(null)
      .setForClass_("foam.core.Model")
      .build();
  }

  public void getDeps() {

    throw new RuntimeException("getDeps is not implemented");
  }

  public void clearProperty(String name) {

    switch(name) {
    
      case "id":
        id_isSet_ = false;
        Object[] idArgs = new Object[] { "propertyChange", "id", null };
        if ( hasListeners(idArgs) ) {
          idArgs[2] = getId$();
          pub(idArgs);
        }
        return;
    
    
      case "package":
        package_isSet_ = false;
        Object[] packageArgs = new Object[] { "propertyChange", "package", null };
        if ( hasListeners(packageArgs) ) {
          packageArgs[2] = getPackage$();
          pub(packageArgs);
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
    
    
      case "name":
        name_isSet_ = false;
        Object[] nameArgs = new Object[] { "propertyChange", "name", null };
        if ( hasListeners(nameArgs) ) {
          nameArgs[2] = getName$();
          pub(nameArgs);
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
    
    
      case "extends":
        extends_isSet_ = false;
        Object[] extendsArgs = new Object[] { "propertyChange", "extends", null };
        if ( hasListeners(extendsArgs) ) {
          extendsArgs[2] = getExtends$();
          pub(extendsArgs);
        }
        return;
    
    
      case "refines":
        refines_isSet_ = false;
        Object[] refinesArgs = new Object[] { "propertyChange", "refines", null };
        if ( hasListeners(refinesArgs) ) {
          refinesArgs[2] = getRefines$();
          pub(refinesArgs);
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
    
    
      case "axioms_":
        axioms__isSet_ = false;
        Object[] axioms_Args = new Object[] { "propertyChange", "axioms_", null };
        if ( hasListeners(axioms_Args) ) {
          axioms_Args[2] = getAxioms_$();
          pub(axioms_Args);
        }
        return;
    
    
      case "axioms":
        axioms_isSet_ = false;
        Object[] axiomsArgs = new Object[] { "propertyChange", "axioms", null };
        if ( hasListeners(axiomsArgs) ) {
          axiomsArgs[2] = getAxioms$();
          pub(axiomsArgs);
        }
        return;
    
    
      case "properties":
        properties_isSet_ = false;
        Object[] propertiesArgs = new Object[] { "propertyChange", "properties", null };
        if ( hasListeners(propertiesArgs) ) {
          propertiesArgs[2] = getProperties$();
          pub(propertiesArgs);
        }
        return;
    
    
      case "methods":
        methods_isSet_ = false;
        Object[] methodsArgs = new Object[] { "propertyChange", "methods", null };
        if ( hasListeners(methodsArgs) ) {
          methodsArgs[2] = getMethods$();
          pub(methodsArgs);
        }
        return;
    
    
      case "constants":
        constants_isSet_ = false;
        Object[] constantsArgs = new Object[] { "propertyChange", "constants", null };
        if ( hasListeners(constantsArgs) ) {
          constantsArgs[2] = getConstants$();
          pub(constantsArgs);
        }
        return;
    
    
      case "order":
        order_isSet_ = false;
        Object[] orderArgs = new Object[] { "propertyChange", "order", null };
        if ( hasListeners(orderArgs) ) {
          orderArgs[2] = getOrder$();
          pub(orderArgs);
        }
        return;
    
    
      case "plural":
        plural_isSet_ = false;
        Object[] pluralArgs = new Object[] { "propertyChange", "plural", null };
        if ( hasListeners(pluralArgs) ) {
          pluralArgs[2] = getPlural$();
          pub(pluralArgs);
        }
        return;
    
    
      case "label":
        label_isSet_ = false;
        Object[] labelArgs = new Object[] { "propertyChange", "label", null };
        if ( hasListeners(labelArgs) ) {
          labelArgs[2] = getLabel$();
          pub(labelArgs);
        }
        return;
    
    
      case "topics":
        topics_isSet_ = false;
        Object[] topicsArgs = new Object[] { "propertyChange", "topics", null };
        if ( hasListeners(topicsArgs) ) {
          topicsArgs[2] = getTopics$();
          pub(topicsArgs);
        }
        return;
    
    
      case "classes":
        classes_isSet_ = false;
        Object[] classesArgs = new Object[] { "propertyChange", "classes", null };
        if ( hasListeners(classesArgs) ) {
          classesArgs[2] = getClasses$();
          pub(classesArgs);
        }
        return;
    
    
      case "enums":
        enums_isSet_ = false;
        Object[] enumsArgs = new Object[] { "propertyChange", "enums", null };
        if ( hasListeners(enumsArgs) ) {
          enumsArgs[2] = getEnums$();
          pub(enumsArgs);
        }
        return;
    
    
      case "implements":
        implements_isSet_ = false;
        Object[] implementsArgs = new Object[] { "propertyChange", "implements", null };
        if ( hasListeners(implementsArgs) ) {
          implementsArgs[2] = getImplements$();
          pub(implementsArgs);
        }
        return;
    
    
      case "imports":
        imports_isSet_ = false;
        Object[] importsArgs = new Object[] { "propertyChange", "imports", null };
        if ( hasListeners(importsArgs) ) {
          importsArgs[2] = getImports$();
          pub(importsArgs);
        }
        return;
    
    
      case "exports":
        exports_isSet_ = false;
        Object[] exportsArgs = new Object[] { "propertyChange", "exports", null };
        if ( hasListeners(exportsArgs) ) {
          exportsArgs[2] = getExports$();
          pub(exportsArgs);
        }
        return;
    
    
      case "listeners":
        listeners_isSet_ = false;
        Object[] listenersArgs = new Object[] { "propertyChange", "listeners", null };
        if ( hasListeners(listenersArgs) ) {
          listenersArgs[2] = getListeners$();
          pub(listenersArgs);
        }
        return;
    
    
      case "ids":
        ids_isSet_ = false;
        Object[] idsArgs = new Object[] { "propertyChange", "ids", null };
        if ( hasListeners(idsArgs) ) {
          idsArgs[2] = getIds$();
          pub(idsArgs);
        }
        return;
    
    
      case "requires":
        requires_isSet_ = false;
        Object[] requiresArgs = new Object[] { "propertyChange", "requires", null };
        if ( hasListeners(requiresArgs) ) {
          requiresArgs[2] = getRequires$();
          pub(requiresArgs);
        }
        return;
    
    
      case "source":
        source_isSet_ = false;
        Object[] sourceArgs = new Object[] { "propertyChange", "source", null };
        if ( hasListeners(sourceArgs) ) {
          sourceArgs[2] = getSource$();
          pub(sourceArgs);
        }
        return;
    
    
      case "sections":
        sections_isSet_ = false;
        Object[] sectionsArgs = new Object[] { "propertyChange", "sections", null };
        if ( hasListeners(sectionsArgs) ) {
          sectionsArgs[2] = getSections$();
          pub(sectionsArgs);
        }
        return;
    
    
      case "grammars":
        grammars_isSet_ = false;
        Object[] grammarsArgs = new Object[] { "propertyChange", "grammars", null };
        if ( hasListeners(grammarsArgs) ) {
          grammarsArgs[2] = getGrammars$();
          pub(grammarsArgs);
        }
        return;
    
    
      case "templates":
        templates_isSet_ = false;
        Object[] templatesArgs = new Object[] { "propertyChange", "templates", null };
        if ( hasListeners(templatesArgs) ) {
          templatesArgs[2] = getTemplates$();
          pub(templatesArgs);
        }
        return;
    
    
      case "messages":
        messages_isSet_ = false;
        Object[] messagesArgs = new Object[] { "propertyChange", "messages", null };
        if ( hasListeners(messagesArgs) ) {
          messagesArgs[2] = getMessages$();
          pub(messagesArgs);
        }
        return;
    
    
      case "actions":
        actions_isSet_ = false;
        Object[] actionsArgs = new Object[] { "propertyChange", "actions", null };
        if ( hasListeners(actionsArgs) ) {
          actionsArgs[2] = getActions$();
          pub(actionsArgs);
        }
        return;
    
    
      case "static":
        static_isSet_ = false;
        Object[] staticArgs = new Object[] { "propertyChange", "static", null };
        if ( hasListeners(staticArgs) ) {
          staticArgs[2] = getStatic$();
          pub(staticArgs);
        }
        return;
    
    
      case "reactions":
        reactions_isSet_ = false;
        Object[] reactionsArgs = new Object[] { "propertyChange", "reactions", null };
        if ( hasListeners(reactionsArgs) ) {
          reactionsArgs[2] = getReactions$();
          pub(reactionsArgs);
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
    
    
      case "generateSwift":
        generateSwift_isSet_ = false;
        Object[] generateSwiftArgs = new Object[] { "propertyChange", "generateSwift", null };
        if ( hasListeners(generateSwiftArgs) ) {
          generateSwiftArgs[2] = getGenerateSwift$();
          pub(generateSwiftArgs);
        }
        return;
    
    
      case "swiftImports":
        swiftImports_isSet_ = false;
        Object[] swiftImportsArgs = new Object[] { "propertyChange", "swiftImports", null };
        if ( hasListeners(swiftImportsArgs) ) {
          swiftImportsArgs[2] = getSwiftImports$();
          pub(swiftImportsArgs);
        }
        return;
    
    
      case "swiftExtends":
        swiftExtends_isSet_ = false;
        Object[] swiftExtendsArgs = new Object[] { "propertyChange", "swiftExtends", null };
        if ( hasListeners(swiftExtendsArgs) ) {
          swiftExtendsArgs[2] = getSwiftExtends$();
          pub(swiftExtendsArgs);
        }
        return;
    
    
      case "swiftImplements":
        swiftImplements_isSet_ = false;
        Object[] swiftImplementsArgs = new Object[] { "propertyChange", "swiftImplements", null };
        if ( hasListeners(swiftImplementsArgs) ) {
          swiftImplementsArgs[2] = getSwiftImplements$();
          pub(swiftImplementsArgs);
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
    
    
      case "javaImports":
        javaImports_isSet_ = false;
        Object[] javaImportsArgs = new Object[] { "propertyChange", "javaImports", null };
        if ( hasListeners(javaImportsArgs) ) {
          javaImportsArgs[2] = getJavaImports$();
          pub(javaImportsArgs);
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
    
    
      case "javaImplements":
        javaImplements_isSet_ = false;
        Object[] javaImplementsArgs = new Object[] { "propertyChange", "javaImplements", null };
        if ( hasListeners(javaImplementsArgs) ) {
          javaImplementsArgs[2] = getJavaImplements$();
          pub(javaImplementsArgs);
        }
        return;
    
    
      case "css":
        css_isSet_ = false;
        Object[] cssArgs = new Object[] { "propertyChange", "css", null };
        if ( hasListeners(cssArgs) ) {
          cssArgs[2] = getCss$();
          pub(cssArgs);
        }
        return;
    
    
      case "inheritCSS":
        inheritCSS_isSet_ = false;
        Object[] inheritCSSArgs = new Object[] { "propertyChange", "inheritCSS", null };
        if ( hasListeners(inheritCSSArgs) ) {
          inheritCSSArgs[2] = getInheritCSS$();
          pub(inheritCSSArgs);
        }
        return;
    
    
      case "tableProperties":
        tableProperties_isSet_ = false;
        Object[] tablePropertiesArgs = new Object[] { "propertyChange", "tableProperties", null };
        if ( hasListeners(tablePropertiesArgs) ) {
          tablePropertiesArgs[2] = getTableProperties$();
          pub(tablePropertiesArgs);
        }
        return;
    
    
      case "tableColumns":
        tableColumns_isSet_ = false;
        Object[] tableColumnsArgs = new Object[] { "propertyChange", "tableColumns", null };
        if ( hasListeners(tableColumnsArgs) ) {
          tableColumnsArgs[2] = getTableColumns$();
          pub(tableColumnsArgs);
        }
        return;
    
    
      case "searchColumns":
        searchColumns_isSet_ = false;
        Object[] searchColumnsArgs = new Object[] { "propertyChange", "searchColumns", null };
        if ( hasListeners(searchColumnsArgs) ) {
          searchColumnsArgs[2] = getSearchColumns$();
          pub(searchColumnsArgs);
        }
        return;
    
    
      case "androidPackage":
        androidPackage_isSet_ = false;
        Object[] androidPackageArgs = new Object[] { "propertyChange", "androidPackage", null };
        if ( hasListeners(androidPackageArgs) ) {
          androidPackageArgs[2] = getAndroidPackage$();
          pub(androidPackageArgs);
        }
        return;
    
    
      case "androidExtends":
        androidExtends_isSet_ = false;
        Object[] androidExtendsArgs = new Object[] { "propertyChange", "androidExtends", null };
        if ( hasListeners(androidExtendsArgs) ) {
          androidExtendsArgs[2] = getAndroidExtends$();
          pub(androidExtendsArgs);
        }
        return;
    
    
      case "androidParentClass":
        androidParentClass_isSet_ = false;
        Object[] androidParentClassArgs = new Object[] { "propertyChange", "androidParentClass", null };
        if ( hasListeners(androidParentClassArgs) ) {
          androidParentClassArgs[2] = getAndroidParentClass$();
          pub(androidParentClassArgs);
        }
        return;
    
    }
    
    super.clearProperty(name);
    
  }

  public Object getProperty(String name) {

    switch(name) {
    
      case "id":
        return getId();
    
    
      case "package":
        return getPackage();
    
    
      case "abstract":
        return getAbstract();
    
    
      case "name":
        return getName();
    
    
      case "flags":
        return getFlags();
    
    
      case "extends":
        return getExtends();
    
    
      case "refines":
        return getRefines();
    
    
      case "documentation":
        return getDocumentation();
    
    
      case "axioms_":
        return getAxioms_();
    
    
      case "axioms":
        return getAxioms();
    
    
      case "properties":
        return getProperties();
    
    
      case "methods":
        return getMethods();
    
    
      case "constants":
        return getConstants();
    
    
      case "order":
        return getOrder();
    
    
      case "plural":
        return getPlural();
    
    
      case "label":
        return getLabel();
    
    
      case "topics":
        return getTopics();
    
    
      case "classes":
        return getClasses();
    
    
      case "enums":
        return getEnums();
    
    
      case "implements":
        return getImplements();
    
    
      case "imports":
        return getImports();
    
    
      case "exports":
        return getExports();
    
    
      case "listeners":
        return getListeners();
    
    
      case "ids":
        return getIds();
    
    
      case "requires":
        return getRequires();
    
    
      case "source":
        return getSource();
    
    
      case "sections":
        return getSections();
    
    
      case "grammars":
        return getGrammars();
    
    
      case "templates":
        return getTemplates();
    
    
      case "messages":
        return getMessages();
    
    
      case "actions":
        return getActions();
    
    
      case "static":
        return getStatic();
    
    
      case "reactions":
        return getReactions();
    
    
      case "swiftName":
        return getSwiftName();
    
    
      case "generateSwift":
        return getGenerateSwift();
    
    
      case "swiftImports":
        return getSwiftImports();
    
    
      case "swiftExtends":
        return getSwiftExtends();
    
    
      case "swiftImplements":
        return getSwiftImplements();
    
    
      case "swiftCode":
        return getSwiftCode();
    
    
      case "javaImports":
        return getJavaImports();
    
    
      case "javaName":
        return getJavaName();
    
    
      case "javaImplements":
        return getJavaImplements();
    
    
      case "css":
        return getCss();
    
    
      case "inheritCSS":
        return getInheritCSS();
    
    
      case "tableProperties":
        return getTableProperties();
    
    
      case "tableColumns":
        return getTableColumns();
    
    
      case "searchColumns":
        return getSearchColumns();
    
    
      case "androidPackage":
        return getAndroidPackage();
    
    
      case "androidExtends":
        return getAndroidExtends();
    
    
      case "androidParentClass":
        return getAndroidParentClass();
    
    }
    return super.getProperty(name);
  }

  public foam.core.Slot getSlot(String name) {

    switch(name) {
    
      case "id":
        return getId$();
    
    
      case "package":
        return getPackage$();
    
    
      case "abstract":
        return getAbstract$();
    
    
      case "name":
        return getName$();
    
    
      case "flags":
        return getFlags$();
    
    
      case "extends":
        return getExtends$();
    
    
      case "refines":
        return getRefines$();
    
    
      case "documentation":
        return getDocumentation$();
    
    
      case "axioms_":
        return getAxioms_$();
    
    
      case "axioms":
        return getAxioms$();
    
    
      case "properties":
        return getProperties$();
    
    
      case "methods":
        return getMethods$();
    
    
      case "constants":
        return getConstants$();
    
    
      case "order":
        return getOrder$();
    
    
      case "plural":
        return getPlural$();
    
    
      case "label":
        return getLabel$();
    
    
      case "topics":
        return getTopics$();
    
    
      case "classes":
        return getClasses$();
    
    
      case "enums":
        return getEnums$();
    
    
      case "implements":
        return getImplements$();
    
    
      case "imports":
        return getImports$();
    
    
      case "exports":
        return getExports$();
    
    
      case "listeners":
        return getListeners$();
    
    
      case "ids":
        return getIds$();
    
    
      case "requires":
        return getRequires$();
    
    
      case "source":
        return getSource$();
    
    
      case "sections":
        return getSections$();
    
    
      case "grammars":
        return getGrammars$();
    
    
      case "templates":
        return getTemplates$();
    
    
      case "messages":
        return getMessages$();
    
    
      case "actions":
        return getActions$();
    
    
      case "static":
        return getStatic$();
    
    
      case "reactions":
        return getReactions$();
    
    
      case "swiftName":
        return getSwiftName$();
    
    
      case "generateSwift":
        return getGenerateSwift$();
    
    
      case "swiftImports":
        return getSwiftImports$();
    
    
      case "swiftExtends":
        return getSwiftExtends$();
    
    
      case "swiftImplements":
        return getSwiftImplements$();
    
    
      case "swiftCode":
        return getSwiftCode$();
    
    
      case "javaImports":
        return getJavaImports$();
    
    
      case "javaName":
        return getJavaName$();
    
    
      case "javaImplements":
        return getJavaImplements$();
    
    
      case "css":
        return getCss$();
    
    
      case "inheritCSS":
        return getInheritCSS$();
    
    
      case "tableProperties":
        return getTableProperties$();
    
    
      case "tableColumns":
        return getTableColumns$();
    
    
      case "searchColumns":
        return getSearchColumns$();
    
    
      case "androidPackage":
        return getAndroidPackage$();
    
    
      case "androidExtends":
        return getAndroidExtends$();
    
    
      case "androidParentClass":
        return getAndroidParentClass$();
    
    }
    return super.getSlot(name);
  }

  public boolean hasPropertySet(String name) {

    switch(name) {
    
      case "id":
        return id_isSet_;
    
    
      case "package":
        return package_isSet_;
    
    
      case "abstract":
        return abstract_isSet_;
    
    
      case "name":
        return name_isSet_;
    
    
      case "flags":
        return flags_isSet_;
    
    
      case "extends":
        return extends_isSet_;
    
    
      case "refines":
        return refines_isSet_;
    
    
      case "documentation":
        return documentation_isSet_;
    
    
      case "axioms_":
        return axioms__isSet_;
    
    
      case "axioms":
        return axioms_isSet_;
    
    
      case "properties":
        return properties_isSet_;
    
    
      case "methods":
        return methods_isSet_;
    
    
      case "constants":
        return constants_isSet_;
    
    
      case "order":
        return order_isSet_;
    
    
      case "plural":
        return plural_isSet_;
    
    
      case "label":
        return label_isSet_;
    
    
      case "topics":
        return topics_isSet_;
    
    
      case "classes":
        return classes_isSet_;
    
    
      case "enums":
        return enums_isSet_;
    
    
      case "implements":
        return implements_isSet_;
    
    
      case "imports":
        return imports_isSet_;
    
    
      case "exports":
        return exports_isSet_;
    
    
      case "listeners":
        return listeners_isSet_;
    
    
      case "ids":
        return ids_isSet_;
    
    
      case "requires":
        return requires_isSet_;
    
    
      case "source":
        return source_isSet_;
    
    
      case "sections":
        return sections_isSet_;
    
    
      case "grammars":
        return grammars_isSet_;
    
    
      case "templates":
        return templates_isSet_;
    
    
      case "messages":
        return messages_isSet_;
    
    
      case "actions":
        return actions_isSet_;
    
    
      case "static":
        return static_isSet_;
    
    
      case "reactions":
        return reactions_isSet_;
    
    
      case "swiftName":
        return swiftName_isSet_;
    
    
      case "generateSwift":
        return generateSwift_isSet_;
    
    
      case "swiftImports":
        return swiftImports_isSet_;
    
    
      case "swiftExtends":
        return swiftExtends_isSet_;
    
    
      case "swiftImplements":
        return swiftImplements_isSet_;
    
    
      case "swiftCode":
        return swiftCode_isSet_;
    
    
      case "javaImports":
        return javaImports_isSet_;
    
    
      case "javaName":
        return javaName_isSet_;
    
    
      case "javaImplements":
        return javaImplements_isSet_;
    
    
      case "css":
        return css_isSet_;
    
    
      case "inheritCSS":
        return inheritCSS_isSet_;
    
    
      case "tableProperties":
        return tableProperties_isSet_;
    
    
      case "tableColumns":
        return tableColumns_isSet_;
    
    
      case "searchColumns":
        return searchColumns_isSet_;
    
    
      case "androidPackage":
        return androidPackage_isSet_;
    
    
      case "androidExtends":
        return androidExtends_isSet_;
    
    
      case "androidParentClass":
        return androidParentClass_isSet_;
    
    }
    
    return super.hasPropertySet(name);
    
  }

  public void setProperty(String name, Object value) {

    switch(name) {
    
      case "id":
        setId((String) value);
        return;
    
    
      case "package":
        setPackage((String) value);
        return;
    
    
      case "abstract":
        setAbstract((boolean) value);
        return;
    
    
      case "name":
        setName((String) value);
        return;
    
    
      case "flags":
        setFlags((Object) value);
        return;
    
    
      case "extends":
        setExtends((String) value);
        return;
    
    
      case "refines":
        setRefines((Object) value);
        return;
    
    
      case "documentation":
        setDocumentation((String) value);
        return;
    
    
      case "axioms_":
        setAxioms_((Object) value);
        return;
    
    
      case "axioms":
        setAxioms((Object) value);
        return;
    
    
      case "properties":
        setProperties((Object[]) value);
        return;
    
    
      case "methods":
        setMethods((Object[]) value);
        return;
    
    
      case "constants":
        setConstants((Object[]) value);
        return;
    
    
      case "order":
        setOrder((long) value);
        return;
    
    
      case "plural":
        setPlural((String) value);
        return;
    
    
      case "label":
        setLabel((String) value);
        return;
    
    
      case "topics":
        setTopics((Object[]) value);
        return;
    
    
      case "classes":
        setClasses((Object[]) value);
        return;
    
    
      case "enums":
        setEnums((Object[]) value);
        return;
    
    
      case "implements":
        setImplements((Object[]) value);
        return;
    
    
      case "imports":
        setImports((Object[]) value);
        return;
    
    
      case "exports":
        setExports((Object[]) value);
        return;
    
    
      case "listeners":
        setListeners((Object[]) value);
        return;
    
    
      case "ids":
        setIds((Object) value);
        return;
    
    
      case "requires":
        setRequires((Object[]) value);
        return;
    
    
      case "source":
        setSource((String) value);
        return;
    
    
      case "sections":
        setSections((Object[]) value);
        return;
    
    
      case "grammars":
        setGrammars((Object[]) value);
        return;
    
    
      case "templates":
        setTemplates((Object[]) value);
        return;
    
    
      case "messages":
        setMessages((Object[]) value);
        return;
    
    
      case "actions":
        setActions((Object[]) value);
        return;
    
    
      case "static":
        setStatic((Object[]) value);
        return;
    
    
      case "reactions":
        setReactions((Object[]) value);
        return;
    
    
      case "swiftName":
        setSwiftName((String) value);
        return;
    
    
      case "generateSwift":
        setGenerateSwift((boolean) value);
        return;
    
    
      case "swiftImports":
        setSwiftImports((String[]) value);
        return;
    
    
      case "swiftExtends":
        setSwiftExtends((String) value);
        return;
    
    
      case "swiftImplements":
        setSwiftImplements((String[]) value);
        return;
    
    
      case "swiftCode":
        setSwiftCode((String) value);
        return;
    
    
      case "javaImports":
        setJavaImports((Object[]) value);
        return;
    
    
      case "javaName":
        setJavaName((String) value);
        return;
    
    
      case "javaImplements":
        setJavaImplements((Object[]) value);
        return;
    
    
      case "css":
        setCss((String) value);
        return;
    
    
      case "inheritCSS":
        setInheritCSS((boolean) value);
        return;
    
    
      case "tableProperties":
        setTableProperties((Object) value);
        return;
    
    
      case "tableColumns":
        setTableColumns((Object) value);
        return;
    
    
      case "searchColumns":
        setSearchColumns((Object) value);
        return;
    
    
      case "androidPackage":
        setAndroidPackage((String) value);
        return;
    
    
      case "androidExtends":
        setAndroidExtends((String) value);
        return;
    
    
      case "androidParentClass":
        setAndroidParentClass((foam.cross_platform.FoamClass) value);
        return;
    
    }
    
    super.setProperty(name, value);
    
  }

  protected Model () {

  }

  public foam.cross_platform.FoamClass getCls_() {

    return CLS_;
  }

  public static foam.cross_platform.FoamClass initClassInfo_() {

    return foam.cross_platform.FoamClass.FoamClassBuilder(null) // TODO give context
      .setId("foam.core.Model")
      .setParent(foam.cross_platform.AbstractFObject.CLS_)
      .setAxioms(new Object[] {foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("buildClass")
      .setCode(null)
      .setForClass_("foam.core.Model")
      .setArgs(new foam.core.Argument[] {  })
      .build(), foam.core.Model.ID, foam.core.Model.PACKAGE, foam.core.Model.ABSTRACT, foam.core.Model.NAME, foam.core.Model.EXTENDS, foam.core.Model.REFINES, foam.core.Model.DOCUMENTATION, foam.core.Model.AXIOMS_, foam.core.Model.AXIOMS, foam.core.Model.PROPERTIES, foam.core.Model.METHODS, foam.core.Model.CONSTANTS, foam.core.Model.ORDER, foam.core.Model.PLURAL, foam.core.Model.LABEL, foam.core.Model.TOPICS, foam.core.Model.CLASSES, foam.core.Model.ENUMS, foam.core.Model.IMPLEMENTS, foam.core.Model.IMPORTS, foam.core.Model.EXPORTS, foam.core.Model.LISTENERS, foam.core.Model.IDS, foam.core.Model.REQUIRES, foam.core.Model.SOURCE, foam.core.Model.SECTIONS, foam.core.Model.GRAMMARS, foam.core.Model.TEMPLATES, foam.core.Model.MESSAGES, foam.core.Model.ACTIONS, foam.core.Model.STATIC, foam.core.Model.REACTIONS, foam.core.Requires.RequiresBuilder(null) // TODO give context
      .setName("SwiftClass")
      .setPath("foam.swift.SwiftClass")
      .build(), foam.layout.SectionAxiom.SectionAxiomBuilder(null) // TODO give context
      .setName("swiftProperties")
      .build(), foam.core.Model.SWIFT_NAME, foam.core.Model.GENERATE_SWIFT, foam.core.Model.SWIFT_IMPORTS, foam.core.Model.SWIFT_EXTENDS, foam.core.Model.SWIFT_IMPLEMENTS, foam.core.Model.SWIFT_CODE, foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("swiftAllImplements")
      .setCode(null)
      .setForClass_("foam.core.Model")
      .setArgs(new foam.core.Argument[] {  })
      .build(), foam.core.Model.JAVA_IMPORTS, foam.core.Model.JAVA_NAME, foam.core.Model.JAVA_IMPLEMENTS, foam.u2.TableColumns.TableColumnsBuilder(null) // TODO give context
      .setName("modelColumns")
      .setColumns(new String[] { "package", "name" })
      .build(), foam.core.Model.CSS, foam.core.Model.INHERIT_CSS, foam.core.Model.TABLE_PROPERTIES, foam.core.Model.TABLE_COLUMNS, foam.core.Model.SEARCH_COLUMNS, foam.layout.SectionAxiom.SectionAxiomBuilder(null) // TODO give context
      .setName("_defaultSection")
      .setTitle("Basic Info")
      .setOrder(0)
      .build(), foam.layout.SectionAxiom.SectionAxiomBuilder(null) // TODO give context
      .setName("classProperties")
      .setOrder(1)
      .build(), foam.layout.SectionAxiom.SectionAxiomBuilder(null) // TODO give context
      .setName("advanced")
      .build(), foam.layout.SectionAxiom.SectionAxiomBuilder(null) // TODO give context
      .setName("htmlSection")
      .setTitle("HTML")
      .build(), foam.layout.SectionAxiom.SectionAxiomBuilder(null) // TODO give context
      .setName("uiSection")
      .setTitle("UI")
      .setOrder(2)
      .build(), foam.layout.SectionAxiom.SectionAxiomBuilder(null) // TODO give context
      .setName("javaProperties")
      .build(), foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("getClassDeps")
      .setCode(null)
      .setForClass_("foam.core.Model")
      .setArgs(new foam.core.Argument[] {  })
      .build(), foam.core.Model.ANDROID_PACKAGE, foam.core.Model.ANDROID_EXTENDS, foam.core.Model.ANDROID_PARENT_CLASS, foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("getDeps")
      .setCode(null)
      .setForClass_("foam.core.Model")
      .setArgs(new foam.core.Argument[] {  })
      .build()})
      .build();
  }

  public static Builder ModelBuilder(foam.cross_platform.Context x) {

    return new Builder();
  }
  public static class Builder {

    private boolean source_isSet_ =
      false;

    private boolean id_isSet_ =
      false;

    private boolean package_isSet_ =
      false;

    private String package_;

    private boolean abstract_isSet_ =
      false;

    private boolean abstract_;

    private boolean name_isSet_ =
      false;

    private String name_;

    private boolean flags_isSet_ =
      false;

    private Object flags_;

    private boolean extends_isSet_ =
      false;

    private String extends_;

    private boolean refines_isSet_ =
      false;

    private Object refines_;

    private boolean documentation_isSet_ =
      false;

    private String documentation_;

    private boolean axioms__isSet_ =
      false;

    private Object axioms__;

    private boolean axioms_isSet_ =
      false;

    private Object axioms_;

    private boolean properties_isSet_ =
      false;

    private Object[] properties_;

    private boolean methods_isSet_ =
      false;

    private Object[] methods_;

    private boolean constants_isSet_ =
      false;

    private Object[] constants_;

    private boolean order_isSet_ =
      false;

    private long order_;

    private boolean plural_isSet_ =
      false;

    private String plural_;

    private boolean label_isSet_ =
      false;

    private String label_;

    private boolean topics_isSet_ =
      false;

    private Object[] topics_;

    private boolean classes_isSet_ =
      false;

    private Object[] classes_;

    private boolean enums_isSet_ =
      false;

    private Object[] enums_;

    private boolean implements_isSet_ =
      false;

    private Object[] implements_;

    private boolean imports_isSet_ =
      false;

    private Object[] imports_;

    private boolean exports_isSet_ =
      false;

    private Object[] exports_;

    private boolean listeners_isSet_ =
      false;

    private Object[] listeners_;

    private boolean ids_isSet_ =
      false;

    private Object ids_;

    private boolean requires_isSet_ =
      false;

    private Object[] requires_;

    private String id_;

    private String source_;

    private boolean sections_isSet_ =
      false;

    private Object[] sections_;

    private boolean grammars_isSet_ =
      false;

    private Object[] grammars_;

    private boolean templates_isSet_ =
      false;

    private Object[] templates_;

    private boolean messages_isSet_ =
      false;

    private Object[] messages_;

    private boolean actions_isSet_ =
      false;

    private Object[] actions_;

    private boolean static_isSet_ =
      false;

    private Object[] static_;

    private boolean reactions_isSet_ =
      false;

    private Object[] reactions_;

    private boolean swiftName_isSet_ =
      false;

    private String swiftName_;

    private boolean generateSwift_isSet_ =
      false;

    private boolean generateSwift_;

    private boolean swiftImports_isSet_ =
      false;

    private String[] swiftImports_;

    private boolean swiftExtends_isSet_ =
      false;

    private String swiftExtends_;

    private boolean swiftImplements_isSet_ =
      false;

    private String[] swiftImplements_;

    private boolean swiftCode_isSet_ =
      false;

    private String swiftCode_;

    private boolean javaImports_isSet_ =
      false;

    private Object[] javaImports_;

    private boolean javaName_isSet_ =
      false;

    private String javaName_;

    private boolean javaImplements_isSet_ =
      false;

    private Object[] javaImplements_;

    private boolean css_isSet_ =
      false;

    private String css_;

    private boolean inheritCSS_isSet_ =
      false;

    private boolean inheritCSS_;

    private boolean tableProperties_isSet_ =
      false;

    private Object tableProperties_;

    private boolean tableColumns_isSet_ =
      false;

    private Object tableColumns_;

    private boolean searchColumns_isSet_ =
      false;

    private Object searchColumns_;

    private boolean androidPackage_isSet_ =
      false;

    private String androidPackage_;

    private boolean androidExtends_isSet_ =
      false;

    private String androidExtends_;

    private boolean androidParentClass_isSet_ =
      false;

    private foam.cross_platform.FoamClass androidParentClass_;


    public Builder setId(String value) {

      id_isSet_ = true;
      id_ = value;
      return this;
    }

    public Builder setPackage(String value) {

      package_isSet_ = true;
      package_ = value;
      return this;
    }

    public Builder setAbstract(boolean value) {

      abstract_isSet_ = true;
      abstract_ = value;
      return this;
    }

    public Builder setName(String value) {

      name_isSet_ = true;
      name_ = value;
      return this;
    }

    public Builder setFlags(Object value) {

      flags_isSet_ = true;
      flags_ = value;
      return this;
    }

    public Builder setExtends(String value) {

      extends_isSet_ = true;
      extends_ = value;
      return this;
    }

    public Builder setRefines(Object value) {

      refines_isSet_ = true;
      refines_ = value;
      return this;
    }

    public Builder setDocumentation(String value) {

      documentation_isSet_ = true;
      documentation_ = value;
      return this;
    }

    public Builder setAxioms_(Object value) {

      axioms__isSet_ = true;
      axioms__ = value;
      return this;
    }

    public Builder setAxioms(Object value) {

      axioms_isSet_ = true;
      axioms_ = value;
      return this;
    }

    public Builder setProperties(Object[] value) {

      properties_isSet_ = true;
      properties_ = value;
      return this;
    }

    public Builder setMethods(Object[] value) {

      methods_isSet_ = true;
      methods_ = value;
      return this;
    }

    public Builder setConstants(Object[] value) {

      constants_isSet_ = true;
      constants_ = value;
      return this;
    }

    public Builder setOrder(long value) {

      order_isSet_ = true;
      order_ = value;
      return this;
    }

    public Builder setPlural(String value) {

      plural_isSet_ = true;
      plural_ = value;
      return this;
    }

    public Builder setLabel(String value) {

      label_isSet_ = true;
      label_ = value;
      return this;
    }

    public Builder setTopics(Object[] value) {

      topics_isSet_ = true;
      topics_ = value;
      return this;
    }

    public Builder setClasses(Object[] value) {

      classes_isSet_ = true;
      classes_ = value;
      return this;
    }

    public Builder setEnums(Object[] value) {

      enums_isSet_ = true;
      enums_ = value;
      return this;
    }

    public Builder setImplements(Object[] value) {

      implements_isSet_ = true;
      implements_ = value;
      return this;
    }

    public Builder setImports(Object[] value) {

      imports_isSet_ = true;
      imports_ = value;
      return this;
    }

    public Builder setExports(Object[] value) {

      exports_isSet_ = true;
      exports_ = value;
      return this;
    }

    public Builder setListeners(Object[] value) {

      listeners_isSet_ = true;
      listeners_ = value;
      return this;
    }

    public Builder setIds(Object value) {

      ids_isSet_ = true;
      ids_ = value;
      return this;
    }

    public Builder setRequires(Object[] value) {

      requires_isSet_ = true;
      requires_ = value;
      return this;
    }

    public Builder setSource(String value) {

      source_isSet_ = true;
      source_ = value;
      return this;
    }

    public Builder setSections(Object[] value) {

      sections_isSet_ = true;
      sections_ = value;
      return this;
    }

    public Builder setGrammars(Object[] value) {

      grammars_isSet_ = true;
      grammars_ = value;
      return this;
    }

    public Builder setTemplates(Object[] value) {

      templates_isSet_ = true;
      templates_ = value;
      return this;
    }

    public Builder setMessages(Object[] value) {

      messages_isSet_ = true;
      messages_ = value;
      return this;
    }

    public Builder setActions(Object[] value) {

      actions_isSet_ = true;
      actions_ = value;
      return this;
    }

    public Builder setStatic(Object[] value) {

      static_isSet_ = true;
      static_ = value;
      return this;
    }

    public Builder setReactions(Object[] value) {

      reactions_isSet_ = true;
      reactions_ = value;
      return this;
    }

    public Builder setSwiftName(String value) {

      swiftName_isSet_ = true;
      swiftName_ = value;
      return this;
    }

    public Builder setGenerateSwift(boolean value) {

      generateSwift_isSet_ = true;
      generateSwift_ = value;
      return this;
    }

    public Builder setSwiftImports(String[] value) {

      swiftImports_isSet_ = true;
      swiftImports_ = value;
      return this;
    }

    public Builder setSwiftExtends(String value) {

      swiftExtends_isSet_ = true;
      swiftExtends_ = value;
      return this;
    }

    public Builder setSwiftImplements(String[] value) {

      swiftImplements_isSet_ = true;
      swiftImplements_ = value;
      return this;
    }

    public Builder setSwiftCode(String value) {

      swiftCode_isSet_ = true;
      swiftCode_ = value;
      return this;
    }

    public Builder setJavaImports(Object[] value) {

      javaImports_isSet_ = true;
      javaImports_ = value;
      return this;
    }

    public Builder setJavaName(String value) {

      javaName_isSet_ = true;
      javaName_ = value;
      return this;
    }

    public Builder setJavaImplements(Object[] value) {

      javaImplements_isSet_ = true;
      javaImplements_ = value;
      return this;
    }

    public Builder setCss(String value) {

      css_isSet_ = true;
      css_ = value;
      return this;
    }

    public Builder setInheritCSS(boolean value) {

      inheritCSS_isSet_ = true;
      inheritCSS_ = value;
      return this;
    }

    public Builder setTableProperties(Object value) {

      tableProperties_isSet_ = true;
      tableProperties_ = value;
      return this;
    }

    public Builder setTableColumns(Object value) {

      tableColumns_isSet_ = true;
      tableColumns_ = value;
      return this;
    }

    public Builder setSearchColumns(Object value) {

      searchColumns_isSet_ = true;
      searchColumns_ = value;
      return this;
    }

    public Builder setAndroidPackage(String value) {

      androidPackage_isSet_ = true;
      androidPackage_ = value;
      return this;
    }

    public Builder setAndroidExtends(String value) {

      androidExtends_isSet_ = true;
      androidExtends_ = value;
      return this;
    }

    public Builder setAndroidParentClass(foam.cross_platform.FoamClass value) {

      androidParentClass_isSet_ = true;
      androidParentClass_ = value;
      return this;
    }

    private Builder() {

    }

    public Model build() {

      Model o = new Model();
      
      if ( id_isSet_ ) {
        o.setId(id_);
      }
      
      if ( package_isSet_ ) {
        o.setPackage(package_);
      }
      
      if ( abstract_isSet_ ) {
        o.setAbstract(abstract_);
      }
      
      if ( name_isSet_ ) {
        o.setName(name_);
      }
      
      if ( flags_isSet_ ) {
        o.setFlags(flags_);
      }
      
      if ( extends_isSet_ ) {
        o.setExtends(extends_);
      }
      
      if ( refines_isSet_ ) {
        o.setRefines(refines_);
      }
      
      if ( documentation_isSet_ ) {
        o.setDocumentation(documentation_);
      }
      
      if ( axioms__isSet_ ) {
        o.setAxioms_(axioms__);
      }
      
      if ( axioms_isSet_ ) {
        o.setAxioms(axioms_);
      }
      
      if ( properties_isSet_ ) {
        o.setProperties(properties_);
      }
      
      if ( methods_isSet_ ) {
        o.setMethods(methods_);
      }
      
      if ( constants_isSet_ ) {
        o.setConstants(constants_);
      }
      
      if ( order_isSet_ ) {
        o.setOrder(order_);
      }
      
      if ( plural_isSet_ ) {
        o.setPlural(plural_);
      }
      
      if ( label_isSet_ ) {
        o.setLabel(label_);
      }
      
      if ( topics_isSet_ ) {
        o.setTopics(topics_);
      }
      
      if ( classes_isSet_ ) {
        o.setClasses(classes_);
      }
      
      if ( enums_isSet_ ) {
        o.setEnums(enums_);
      }
      
      if ( implements_isSet_ ) {
        o.setImplements(implements_);
      }
      
      if ( imports_isSet_ ) {
        o.setImports(imports_);
      }
      
      if ( exports_isSet_ ) {
        o.setExports(exports_);
      }
      
      if ( listeners_isSet_ ) {
        o.setListeners(listeners_);
      }
      
      if ( ids_isSet_ ) {
        o.setIds(ids_);
      }
      
      if ( requires_isSet_ ) {
        o.setRequires(requires_);
      }
      
      if ( source_isSet_ ) {
        o.setSource(source_);
      }
      
      if ( sections_isSet_ ) {
        o.setSections(sections_);
      }
      
      if ( grammars_isSet_ ) {
        o.setGrammars(grammars_);
      }
      
      if ( templates_isSet_ ) {
        o.setTemplates(templates_);
      }
      
      if ( messages_isSet_ ) {
        o.setMessages(messages_);
      }
      
      if ( actions_isSet_ ) {
        o.setActions(actions_);
      }
      
      if ( static_isSet_ ) {
        o.setStatic(static_);
      }
      
      if ( reactions_isSet_ ) {
        o.setReactions(reactions_);
      }
      
      if ( swiftName_isSet_ ) {
        o.setSwiftName(swiftName_);
      }
      
      if ( generateSwift_isSet_ ) {
        o.setGenerateSwift(generateSwift_);
      }
      
      if ( swiftImports_isSet_ ) {
        o.setSwiftImports(swiftImports_);
      }
      
      if ( swiftExtends_isSet_ ) {
        o.setSwiftExtends(swiftExtends_);
      }
      
      if ( swiftImplements_isSet_ ) {
        o.setSwiftImplements(swiftImplements_);
      }
      
      if ( swiftCode_isSet_ ) {
        o.setSwiftCode(swiftCode_);
      }
      
      if ( javaImports_isSet_ ) {
        o.setJavaImports(javaImports_);
      }
      
      if ( javaName_isSet_ ) {
        o.setJavaName(javaName_);
      }
      
      if ( javaImplements_isSet_ ) {
        o.setJavaImplements(javaImplements_);
      }
      
      if ( css_isSet_ ) {
        o.setCss(css_);
      }
      
      if ( inheritCSS_isSet_ ) {
        o.setInheritCSS(inheritCSS_);
      }
      
      if ( tableProperties_isSet_ ) {
        o.setTableProperties(tableProperties_);
      }
      
      if ( tableColumns_isSet_ ) {
        o.setTableColumns(tableColumns_);
      }
      
      if ( searchColumns_isSet_ ) {
        o.setSearchColumns(searchColumns_);
      }
      
      if ( androidPackage_isSet_ ) {
        o.setAndroidPackage(androidPackage_);
      }
      
      if ( androidExtends_isSet_ ) {
        o.setAndroidExtends(androidExtends_);
      }
      
      if ( androidParentClass_isSet_ ) {
        o.setAndroidParentClass(androidParentClass_);
      }
      
      o.init();
      return o;
    }
  }
}