// WARNING: GENERATED CODE, DO NOT MODIFY BY HAND!
package foam.layout;


public class SectionAxiom extends foam.cross_platform.AbstractFObject {

  private foam.core.Slot order_$;

  protected String name_;

  private foam.core.Slot name_$;

  public static foam.core.StringProperty NAME =
    init_NAME();

  protected String title_;

  private boolean title_isSet_ =
    false;

  private foam.core.Slot title_$;

  public static foam.core.StringProperty TITLE =
    init_TITLE();

  protected String help_;

  private boolean help_isSet_ =
    false;

  private foam.core.Slot help_$;

  public static foam.core.StringProperty HELP =
    init_HELP();

  protected long order_;

  private boolean order_isSet_ =
    false;

  private boolean name_isSet_ =
    false;

  public static foam.core.LongProperty ORDER =
    init_ORDER();

  protected boolean permissionRequired_;

  private boolean permissionRequired_isSet_ =
    false;

  private foam.core.Slot permissionRequired_$;

  public static foam.core.BooleanProperty PERMISSION_REQUIRED =
    init_PERMISSION_REQUIRED();

  protected Object gridColumns_;

  private boolean gridColumns_isSet_ =
    false;

  private foam.core.Slot gridColumns_$;

  public static foam.core.Property GRID_COLUMNS =
    init_GRID_COLUMNS();

  protected foam.cross_platform.GenericFunction isAvailable_;

  private boolean isAvailable_isSet_ =
    false;

  private foam.core.Slot isAvailable_$;

  public static foam.core.FunctionProperty IS_AVAILABLE =
    init_IS_AVAILABLE();

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
      .setForClass_("foam.layout.SectionAxiom")
      .build();
  }

  public foam.core.Slot getTitle$() {

    if ( title_$ == null ) {
      title_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(TITLE)
        .build();
    }
    return title_$;
  }

  public String getTitle() {

    if ( ! title_isSet_ ) {
      return "";
    }
    return title_;
  }

  private String title_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setTitle(Object value) {

    boolean hasOldValue = hasPropertySet("title");
    Object oldValue = hasOldValue ?
      getTitle() :
      null;
    String castedValue = title_adapt(oldValue, value, hasOldValue);
    
    title_isSet_ = true;
    title_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "title", null };
    if ( hasListeners(args) ) {
      args[2] = getTitle$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_TITLE() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("title")
      .setExpression(null)
      .setForClass_("foam.layout.SectionAxiom")
      .build();
  }

  public foam.core.Slot getHelp$() {

    if ( help_$ == null ) {
      help_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(HELP)
        .build();
    }
    return help_$;
  }

  public String getHelp() {

    if ( ! help_isSet_ ) {
      return "";
    }
    return help_;
  }

  private String help_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setHelp(Object value) {

    boolean hasOldValue = hasPropertySet("help");
    Object oldValue = hasOldValue ?
      getHelp() :
      null;
    String castedValue = help_adapt(oldValue, value, hasOldValue);
    
    help_isSet_ = true;
    help_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "help", null };
    if ( hasListeners(args) ) {
      args[2] = getHelp$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_HELP() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("help")
      .setForClass_("foam.layout.SectionAxiom")
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
      .setForClass_("foam.layout.SectionAxiom")
      .build();
  }

  public foam.core.Slot getPermissionRequired$() {

    if ( permissionRequired_$ == null ) {
      permissionRequired_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(PERMISSION_REQUIRED)
        .build();
    }
    return permissionRequired_$;
  }

  public boolean getPermissionRequired() {

    if ( ! permissionRequired_isSet_ ) {
      return false;
    }
    return permissionRequired_;
  }

  private boolean permissionRequired_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (boolean) newValue;
  }

  public void setPermissionRequired(Object value) {

    boolean hasOldValue = hasPropertySet("permissionRequired");
    Object oldValue = hasOldValue ?
      getPermissionRequired() :
      null;
    boolean castedValue = permissionRequired_adapt(oldValue, value, hasOldValue);
    
    permissionRequired_isSet_ = true;
    permissionRequired_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "permissionRequired", null };
    if ( hasListeners(args) ) {
      args[2] = getPermissionRequired$();
      pub(args);
    }
  }

  private static foam.core.BooleanProperty init_PERMISSION_REQUIRED() {

    return foam.core.BooleanProperty.BooleanPropertyBuilder(null) // TODO give context
      .setName("permissionRequired")
      .setForClass_("foam.layout.SectionAxiom")
      .build();
  }

  public foam.core.Slot getGridColumns$() {

    if ( gridColumns_$ == null ) {
      gridColumns_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(GRID_COLUMNS)
        .build();
    }
    return gridColumns_$;
  }

  public Object getGridColumns() {

    if ( ! gridColumns_isSet_ ) {
      return null;
    }
    return gridColumns_;
  }

  private Object gridColumns_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setGridColumns(Object value) {

    boolean hasOldValue = hasPropertySet("gridColumns");
    Object oldValue = hasOldValue ?
      getGridColumns() :
      null;
    Object castedValue = gridColumns_adapt(oldValue, value, hasOldValue);
    
    gridColumns_isSet_ = true;
    gridColumns_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "gridColumns", null };
    if ( hasListeners(args) ) {
      args[2] = getGridColumns$();
      pub(args);
    }
  }

  private static foam.core.Property init_GRID_COLUMNS() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("gridColumns")
      .setForClass_("foam.layout.SectionAxiom")
      .build();
  }

  public foam.core.Slot getIsAvailable$() {

    if ( isAvailable_$ == null ) {
      isAvailable_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(IS_AVAILABLE)
        .build();
    }
    return isAvailable_$;
  }

  public foam.cross_platform.GenericFunction getIsAvailable() {

    if ( ! isAvailable_isSet_ ) {
      return foam.cross_platform.NullFunction.NullFunctionBuilder(null).build();
    }
    return isAvailable_;
  }

  private foam.cross_platform.GenericFunction isAvailable_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (foam.cross_platform.GenericFunction) newValue;
  }

  public void setIsAvailable(Object value) {

    boolean hasOldValue = hasPropertySet("isAvailable");
    Object oldValue = hasOldValue ?
      getIsAvailable() :
      null;
    foam.cross_platform.GenericFunction castedValue = isAvailable_adapt(oldValue, value, hasOldValue);
    
    isAvailable_isSet_ = true;
    isAvailable_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "isAvailable", null };
    if ( hasListeners(args) ) {
      args[2] = getIsAvailable$();
      pub(args);
    }
  }

  private static foam.core.FunctionProperty init_IS_AVAILABLE() {

    return foam.core.FunctionProperty.FunctionPropertyBuilder(null) // TODO give context
      .setValue(null)
      .setName("isAvailable")
      .setForClass_("foam.layout.SectionAxiom")
      .build();
  }

  public void createIsAvailableFor() {

    throw new RuntimeException("createIsAvailableFor is not implemented");
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
    
    
      case "title":
        title_isSet_ = false;
        Object[] titleArgs = new Object[] { "propertyChange", "title", null };
        if ( hasListeners(titleArgs) ) {
          titleArgs[2] = getTitle$();
          pub(titleArgs);
        }
        return;
    
    
      case "help":
        help_isSet_ = false;
        Object[] helpArgs = new Object[] { "propertyChange", "help", null };
        if ( hasListeners(helpArgs) ) {
          helpArgs[2] = getHelp$();
          pub(helpArgs);
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
    
    
      case "permissionRequired":
        permissionRequired_isSet_ = false;
        Object[] permissionRequiredArgs = new Object[] { "propertyChange", "permissionRequired", null };
        if ( hasListeners(permissionRequiredArgs) ) {
          permissionRequiredArgs[2] = getPermissionRequired$();
          pub(permissionRequiredArgs);
        }
        return;
    
    
      case "gridColumns":
        gridColumns_isSet_ = false;
        Object[] gridColumnsArgs = new Object[] { "propertyChange", "gridColumns", null };
        if ( hasListeners(gridColumnsArgs) ) {
          gridColumnsArgs[2] = getGridColumns$();
          pub(gridColumnsArgs);
        }
        return;
    
    
      case "isAvailable":
        isAvailable_isSet_ = false;
        Object[] isAvailableArgs = new Object[] { "propertyChange", "isAvailable", null };
        if ( hasListeners(isAvailableArgs) ) {
          isAvailableArgs[2] = getIsAvailable$();
          pub(isAvailableArgs);
        }
        return;
    
    }
    
    super.clearProperty(name);
    
  }

  public Object getProperty(String name) {

    switch(name) {
    
      case "name":
        return getName();
    
    
      case "title":
        return getTitle();
    
    
      case "help":
        return getHelp();
    
    
      case "order":
        return getOrder();
    
    
      case "permissionRequired":
        return getPermissionRequired();
    
    
      case "gridColumns":
        return getGridColumns();
    
    
      case "isAvailable":
        return getIsAvailable();
    
    }
    return super.getProperty(name);
  }

  public foam.core.Slot getSlot(String name) {

    switch(name) {
    
      case "name":
        return getName$();
    
    
      case "title":
        return getTitle$();
    
    
      case "help":
        return getHelp$();
    
    
      case "order":
        return getOrder$();
    
    
      case "permissionRequired":
        return getPermissionRequired$();
    
    
      case "gridColumns":
        return getGridColumns$();
    
    
      case "isAvailable":
        return getIsAvailable$();
    
    }
    return super.getSlot(name);
  }

  public boolean hasPropertySet(String name) {

    switch(name) {
    
      case "name":
        return name_isSet_;
    
    
      case "title":
        return title_isSet_;
    
    
      case "help":
        return help_isSet_;
    
    
      case "order":
        return order_isSet_;
    
    
      case "permissionRequired":
        return permissionRequired_isSet_;
    
    
      case "gridColumns":
        return gridColumns_isSet_;
    
    
      case "isAvailable":
        return isAvailable_isSet_;
    
    }
    
    return super.hasPropertySet(name);
    
  }

  public void setProperty(String name, Object value) {

    switch(name) {
    
      case "name":
        setName((String) value);
        return;
    
    
      case "title":
        setTitle((String) value);
        return;
    
    
      case "help":
        setHelp((String) value);
        return;
    
    
      case "order":
        setOrder((long) value);
        return;
    
    
      case "permissionRequired":
        setPermissionRequired((boolean) value);
        return;
    
    
      case "gridColumns":
        setGridColumns((Object) value);
        return;
    
    
      case "isAvailable":
        setIsAvailable((foam.cross_platform.GenericFunction) value);
        return;
    
    }
    
    super.setProperty(name, value);
    
  }

  protected SectionAxiom () {

  }

  public foam.cross_platform.FoamClass getCls_() {

    return CLS_;
  }

  public static foam.cross_platform.FoamClass initClassInfo_() {

    return foam.cross_platform.FoamClass.FoamClassBuilder(null) // TODO give context
      .setId("foam.layout.SectionAxiom")
      .setParent(foam.cross_platform.AbstractFObject.CLS_)
      .setAxioms(new Object[] {foam.layout.SectionAxiom.NAME, foam.layout.SectionAxiom.TITLE, foam.layout.SectionAxiom.HELP, foam.layout.SectionAxiom.ORDER, foam.layout.SectionAxiom.PERMISSION_REQUIRED, foam.layout.SectionAxiom.GRID_COLUMNS, foam.layout.SectionAxiom.IS_AVAILABLE, foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("createIsAvailableFor")
      .setCode(null)
      .setForClass_("foam.layout.SectionAxiom")
      .setArgs(new foam.core.Argument[] {  })
      .build()})
      .build();
  }

  public static Builder SectionAxiomBuilder(foam.cross_platform.Context x) {

    return new Builder();
  }
  public static class Builder {

    private long order_;

    private boolean name_isSet_ =
      false;

    private boolean title_isSet_ =
      false;

    private String title_;

    private boolean help_isSet_ =
      false;

    private String help_;

    private boolean order_isSet_ =
      false;

    private String name_;

    private boolean permissionRequired_isSet_ =
      false;

    private boolean permissionRequired_;

    private boolean gridColumns_isSet_ =
      false;

    private Object gridColumns_;

    private boolean isAvailable_isSet_ =
      false;

    private foam.cross_platform.GenericFunction isAvailable_;


    public Builder setName(String value) {

      name_isSet_ = true;
      name_ = value;
      return this;
    }

    public Builder setTitle(String value) {

      title_isSet_ = true;
      title_ = value;
      return this;
    }

    public Builder setHelp(String value) {

      help_isSet_ = true;
      help_ = value;
      return this;
    }

    public Builder setOrder(long value) {

      order_isSet_ = true;
      order_ = value;
      return this;
    }

    public Builder setPermissionRequired(boolean value) {

      permissionRequired_isSet_ = true;
      permissionRequired_ = value;
      return this;
    }

    public Builder setGridColumns(Object value) {

      gridColumns_isSet_ = true;
      gridColumns_ = value;
      return this;
    }

    public Builder setIsAvailable(foam.cross_platform.GenericFunction value) {

      isAvailable_isSet_ = true;
      isAvailable_ = value;
      return this;
    }

    private Builder() {

    }

    public SectionAxiom build() {

      SectionAxiom o = new SectionAxiom();
      
      if ( name_isSet_ ) {
        o.setName(name_);
      }
      
      if ( title_isSet_ ) {
        o.setTitle(title_);
      }
      
      if ( help_isSet_ ) {
        o.setHelp(help_);
      }
      
      if ( order_isSet_ ) {
        o.setOrder(order_);
      }
      
      if ( permissionRequired_isSet_ ) {
        o.setPermissionRequired(permissionRequired_);
      }
      
      if ( gridColumns_isSet_ ) {
        o.setGridColumns(gridColumns_);
      }
      
      if ( isAvailable_isSet_ ) {
        o.setIsAvailable(isAvailable_);
      }
      
      o.init();
      return o;
    }
  }
}