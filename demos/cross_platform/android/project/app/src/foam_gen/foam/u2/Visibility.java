// WARNING: GENERATED CODE, DO NOT MODIFY BY HAND!
package foam.u2;


/**
* View visibility mode combines with current ControllerModel to determine DisplayMode. 
*/
public class Visibility extends foam.core.AbstractEnum {

  public static foam.core.StringProperty NAME =
    init_NAME();

  protected String documentation_;

  private foam.core.Slot documentation_$;

  public static foam.core.StringProperty DOCUMENTATION =
    init_DOCUMENTATION();

  protected int ordinal_;

  private boolean ordinal_isSet_ =
    false;

  private foam.core.Slot ordinal_$;

  public static foam.core.IntProperty ORDINAL =
    init_ORDINAL();

  protected String name_;

  private boolean name_isSet_ =
    false;

  private foam.core.Slot name_$;

  private boolean documentation_isSet_ =
    false;

  protected String label_;

  private boolean label_isSet_ =
    false;

  private foam.core.Slot label_$;

  public static foam.core.StringProperty LABEL =
    init_LABEL();

  public static foam.cross_platform.FoamClass CLS_ =
    initClassInfo_();

  public static foam.u2.Visibility RW;

  public static foam.u2.Visibility FINAL;

  public static foam.u2.Visibility DISABLED;

  public static foam.u2.Visibility RO;

  public static foam.u2.Visibility HIDDEN;


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
      .setForClass_("foam.core.AbstractEnum")
      .setTransient(true)
      .build();
  }

  public foam.core.Slot getOrdinal$() {

    if ( ordinal_$ == null ) {
      ordinal_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(ORDINAL)
        .build();
    }
    return ordinal_$;
  }

  public int getOrdinal() {

    if ( ! ordinal_isSet_ ) {
      return -1;
    }
    return ordinal_;
  }

  private int ordinal_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (int) newValue;
  }

  public void setOrdinal(Object value) {

    boolean hasOldValue = hasPropertySet("ordinal");
    Object oldValue = hasOldValue ?
      getOrdinal() :
      null;
    int castedValue = ordinal_adapt(oldValue, value, hasOldValue);
    
    ordinal_isSet_ = true;
    ordinal_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "ordinal", null };
    if ( hasListeners(args) ) {
      args[2] = getOrdinal$();
      pub(args);
    }
  }

  private static foam.core.IntProperty init_ORDINAL() {

    return foam.core.IntProperty.IntPropertyBuilder(null) // TODO give context
      .setValue(-1)
      .setName("ordinal")
      .setFinal(true)
      .setForClass_("foam.core.AbstractEnum")
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
      .setFinal(true)
      .setForClass_("foam.core.AbstractEnum")
      .setTransient(true)
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
      .setFactory(null)
      .setFinal(true)
      .setForClass_("foam.core.AbstractEnum")
      .setTransient(true)
      .build();
  }

  public void clearProperty(String name) {

    switch(name) {
    
      case "documentation":
        documentation_isSet_ = false;
        Object[] documentationArgs = new Object[] { "propertyChange", "documentation", null };
        if ( hasListeners(documentationArgs) ) {
          documentationArgs[2] = getDocumentation$();
          pub(documentationArgs);
        }
        return;
    
    
      case "ordinal":
        ordinal_isSet_ = false;
        Object[] ordinalArgs = new Object[] { "propertyChange", "ordinal", null };
        if ( hasListeners(ordinalArgs) ) {
          ordinalArgs[2] = getOrdinal$();
          pub(ordinalArgs);
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
    
    
      case "label":
        label_isSet_ = false;
        Object[] labelArgs = new Object[] { "propertyChange", "label", null };
        if ( hasListeners(labelArgs) ) {
          labelArgs[2] = getLabel$();
          pub(labelArgs);
        }
        return;
    
    }
    
    super.clearProperty(name);
    
  }

  public Object getProperty(String name) {

    switch(name) {
    
      case "documentation":
        return getDocumentation();
    
    
      case "ordinal":
        return getOrdinal();
    
    
      case "name":
        return getName();
    
    
      case "label":
        return getLabel();
    
    }
    return super.getProperty(name);
  }

  public foam.core.Slot getSlot(String name) {

    switch(name) {
    
      case "documentation":
        return getDocumentation$();
    
    
      case "ordinal":
        return getOrdinal$();
    
    
      case "name":
        return getName$();
    
    
      case "label":
        return getLabel$();
    
    }
    return super.getSlot(name);
  }

  public boolean hasPropertySet(String name) {

    switch(name) {
    
      case "documentation":
        return documentation_isSet_;
    
    
      case "ordinal":
        return ordinal_isSet_;
    
    
      case "name":
        return name_isSet_;
    
    
      case "label":
        return label_isSet_;
    
    }
    
    return super.hasPropertySet(name);
    
  }

  public void setProperty(String name, Object value) {

    switch(name) {
    
      case "documentation":
        setDocumentation((String) value);
        return;
    
    
      case "ordinal":
        setOrdinal((int) value);
        return;
    
    
      case "name":
        setName((String) value);
        return;
    
    
      case "label":
        setLabel((String) value);
        return;
    
    }
    
    super.setProperty(name, value);
    
  }

  protected Visibility () {

  }

  public foam.cross_platform.FoamClass getCls_() {

    return CLS_;
  }

  public static foam.cross_platform.FoamClass initClassInfo_() {

    return foam.cross_platform.FoamClass.FoamClassBuilder(null) // TODO give context
      .setId("foam.u2.Visibility")
      .setParent(foam.core.AbstractEnum.CLS_)
      .setAxioms(new Object[] {foam.core.internal.EnumValueAxiom.EnumValueAxiomBuilder(null) // TODO give context
      .setDefinition(
    new java.util.HashMap<String, Object>() {
      {
      put("name", "RW");
      put("label", "Read-Write");
      put("ordinal", 0);
      }
    }
              )
      .build(), foam.core.internal.EnumValueAxiom.EnumValueAxiomBuilder(null) // TODO give context
      .setDefinition(
    new java.util.HashMap<String, Object>() {
      {
      put("name", "FINAL");
      put("label", "Final");
      put("documentation", "FINAL views are editable only in CREATE ControllerMode.");
      put("ordinal", 1);
      }
    }
              )
      .build(), foam.core.internal.EnumValueAxiom.EnumValueAxiomBuilder(null) // TODO give context
      .setDefinition(
    new java.util.HashMap<String, Object>() {
      {
      put("name", "DISABLED");
      put("label", "Disabled");
      put("documentation", "DISABLED views are visible but not editable.");
      put("ordinal", 2);
      }
    }
              )
      .build(), foam.core.internal.EnumValueAxiom.EnumValueAxiomBuilder(null) // TODO give context
      .setDefinition(
    new java.util.HashMap<String, Object>() {
      {
      put("name", "RO");
      put("label", "Read-Only");
      put("ordinal", 3);
      }
    }
              )
      .build(), foam.core.internal.EnumValueAxiom.EnumValueAxiomBuilder(null) // TODO give context
      .setDefinition(
    new java.util.HashMap<String, Object>() {
      {
      put("name", "HIDDEN");
      put("label", "Hidden");
      put("ordinal", 4);
      }
    }
              )
      .build()})
      .build();
  }

  public static Builder VisibilityBuilder(foam.cross_platform.Context x) {

    return new Builder();
  }

  public static foam.u2.Visibility fromOrdinal(int o) {

    switch(o) {
    
      case 0:
        return RW;
    
      case 1:
        return FINAL;
    
      case 2:
        return DISABLED;
    
      case 3:
        return RO;
    
      case 4:
        return HIDDEN;
    
    }
    return null;
  }
  public static class Builder {

    private boolean documentation_isSet_ =
      false;

    private String documentation_;

    private boolean ordinal_isSet_ =
      false;

    private int ordinal_;

    private boolean name_isSet_ =
      false;

    private String name_;

    private boolean label_isSet_ =
      false;

    private String label_;


    public Builder setDocumentation(String value) {

      documentation_isSet_ = true;
      documentation_ = value;
      return this;
    }

    public Builder setOrdinal(int value) {

      ordinal_isSet_ = true;
      ordinal_ = value;
      return this;
    }

    public Builder setName(String value) {

      name_isSet_ = true;
      name_ = value;
      return this;
    }

    public Builder setLabel(String value) {

      label_isSet_ = true;
      label_ = value;
      return this;
    }

    private Builder() {

    }

    public Visibility build() {

      Visibility o = new Visibility();
      
      if ( documentation_isSet_ ) {
        o.setDocumentation(documentation_);
      }
      
      if ( ordinal_isSet_ ) {
        o.setOrdinal(ordinal_);
      }
      
      if ( name_isSet_ ) {
        o.setName(name_);
      }
      
      if ( label_isSet_ ) {
        o.setLabel(label_);
      }
      
      o.init();
      return o;
    }
  }
}