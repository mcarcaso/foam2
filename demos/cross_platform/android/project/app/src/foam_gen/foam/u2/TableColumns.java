// WARNING: GENERATED CODE, DO NOT MODIFY BY HAND!
package foam.u2;


/**
* Axiom for storing Table Columns information in Class. Unlike most Axioms, doesn't modify the Class, but is just used to store information. 
*/
public class TableColumns extends foam.cross_platform.AbstractFObject {

  protected Object name_;

  private boolean name_isSet_ =
    false;

  private foam.core.Slot name_$;

  public static foam.core.Property NAME =
    init_NAME();

  protected String[] columns_;

  private boolean columns_isSet_ =
    false;

  private foam.core.Slot columns_$;

  public static foam.core.StringArrayProperty COLUMNS =
    init_COLUMNS();

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
      return "tableColumns";
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
      .setValue("tableColumns")
      .setForClass_("foam.u2.TableColumns")
      .build();
  }

  public foam.core.Slot getColumns$() {

    if ( columns_$ == null ) {
      columns_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(COLUMNS)
        .build();
    }
    return columns_$;
  }

  protected String[] columns_factory_() {

    return new String[0];
  }

  public String[] getColumns() {

    if ( ! columns_isSet_ ) {
      setProperty("columns", columns_factory_());
    }
    return columns_;
  }

  private String[] columns_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String[]) newValue;
  }

  public void setColumns(Object value) {

    boolean hasOldValue = hasPropertySet("columns");
    Object oldValue = hasOldValue ?
      getColumns() :
      null;
    String[] castedValue = columns_adapt(oldValue, value, hasOldValue);
    
    columns_isSet_ = true;
    columns_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "columns", null };
    if ( hasListeners(args) ) {
      args[2] = getColumns$();
      pub(args);
    }
  }

  private static foam.core.StringArrayProperty init_COLUMNS() {

    return foam.core.StringArrayProperty.StringArrayPropertyBuilder(null) // TODO give context
      .setName("columns")
      .setForClass_("foam.u2.TableColumns")
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
    
    
      case "columns":
        columns_isSet_ = false;
        Object[] columnsArgs = new Object[] { "propertyChange", "columns", null };
        if ( hasListeners(columnsArgs) ) {
          columnsArgs[2] = getColumns$();
          pub(columnsArgs);
        }
        return;
    
    }
    
    super.clearProperty(name);
    
  }

  public Object getProperty(String name) {

    switch(name) {
    
      case "name":
        return getName();
    
    
      case "columns":
        return getColumns();
    
    }
    return super.getProperty(name);
  }

  public foam.core.Slot getSlot(String name) {

    switch(name) {
    
      case "name":
        return getName$();
    
    
      case "columns":
        return getColumns$();
    
    }
    return super.getSlot(name);
  }

  public boolean hasPropertySet(String name) {

    switch(name) {
    
      case "name":
        return name_isSet_;
    
    
      case "columns":
        return columns_isSet_;
    
    }
    
    return super.hasPropertySet(name);
    
  }

  public void setProperty(String name, Object value) {

    switch(name) {
    
      case "name":
        setName((Object) value);
        return;
    
    
      case "columns":
        setColumns((String[]) value);
        return;
    
    }
    
    super.setProperty(name, value);
    
  }

  protected TableColumns () {

  }

  public foam.cross_platform.FoamClass getCls_() {

    return CLS_;
  }

  public static foam.cross_platform.FoamClass initClassInfo_() {

    return foam.cross_platform.FoamClass.FoamClassBuilder(null) // TODO give context
      .setId("foam.u2.TableColumns")
      .setParent(foam.cross_platform.AbstractFObject.CLS_)
      .setAxioms(new Object[] {foam.u2.TableColumns.NAME, foam.u2.TableColumns.COLUMNS})
      .build();
  }

  public static Builder TableColumnsBuilder(foam.cross_platform.Context x) {

    return new Builder();
  }
  public static class Builder {

    private boolean name_isSet_ =
      false;

    private Object name_;

    private boolean columns_isSet_ =
      false;

    private String[] columns_;


    public Builder setName(Object value) {

      name_isSet_ = true;
      name_ = value;
      return this;
    }

    public Builder setColumns(String[] value) {

      columns_isSet_ = true;
      columns_ = value;
      return this;
    }

    private Builder() {

    }

    public TableColumns build() {

      TableColumns o = new TableColumns();
      
      if ( name_isSet_ ) {
        o.setName(name_);
      }
      
      if ( columns_isSet_ ) {
        o.setColumns(columns_);
      }
      
      o.init();
      return o;
    }
  }
}