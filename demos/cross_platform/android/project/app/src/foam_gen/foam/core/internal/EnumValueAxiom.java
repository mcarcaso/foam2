// WARNING: GENERATED CODE, DO NOT MODIFY BY HAND!
package foam.core.internal;


/**
* The definition of a single Enum value. 
*/
public class EnumValueAxiom extends foam.cross_platform.AbstractFObject {

  protected Object definition_;

  protected Object ordinal_;

  private foam.core.Slot ordinal_$;

  public static foam.core.Property ORDINAL =
    init_ORDINAL();

  protected Object name_;

  private boolean name_isSet_ =
    false;

  private foam.core.Slot name_$;

  public static foam.core.Property NAME =
    init_NAME();

  private boolean ordinal_isSet_ =
    false;

  private boolean definition_isSet_ =
    false;

  private foam.core.Slot definition_$;

  public static foam.core.Property DEFINITION =
    init_DEFINITION();

  protected Object priority_;

  private boolean priority_isSet_ =
    false;

  private foam.core.Slot priority_$;

  public static foam.core.Property PRIORITY =
    init_PRIORITY();

  public static foam.cross_platform.FoamClass CLS_ =
    initClassInfo_();


  public foam.core.Slot getOrdinal$() {

    if ( ordinal_$ == null ) {
      ordinal_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(ORDINAL)
        .build();
    }
    return ordinal_$;
  }

  public Object getOrdinal() {

    if ( ! ordinal_isSet_ ) {
      return null;
    }
    return ordinal_;
  }

  private Object ordinal_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setOrdinal(Object value) {

    boolean hasOldValue = hasPropertySet("ordinal");
    Object oldValue = hasOldValue ?
      getOrdinal() :
      null;
    Object castedValue = ordinal_adapt(oldValue, value, hasOldValue);
    
    ordinal_isSet_ = true;
    ordinal_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "ordinal", null };
    if ( hasListeners(args) ) {
      args[2] = getOrdinal$();
      pub(args);
    }
  }

  private static foam.core.Property init_ORDINAL() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("ordinal")
      .setGetter(null)
      .setSetter(null)
      .setForClass_("foam.core.internal.EnumValueAxiom")
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
      .setGetter(null)
      .setForClass_("foam.core.internal.EnumValueAxiom")
      .build();
  }

  public foam.core.Slot getDefinition$() {

    if ( definition_$ == null ) {
      definition_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(DEFINITION)
        .build();
    }
    return definition_$;
  }

  public Object getDefinition() {

    if ( ! definition_isSet_ ) {
      return null;
    }
    return definition_;
  }

  private Object definition_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setDefinition(Object value) {

    boolean hasOldValue = hasPropertySet("definition");
    Object oldValue = hasOldValue ?
      getDefinition() :
      null;
    Object castedValue = definition_adapt(oldValue, value, hasOldValue);
    
    definition_isSet_ = true;
    definition_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "definition", null };
    if ( hasListeners(args) ) {
      args[2] = getDefinition$();
      pub(args);
    }
  }

  private static foam.core.Property init_DEFINITION() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("definition")
      .setForClass_("foam.core.internal.EnumValueAxiom")
      .build();
  }

  public foam.core.Slot getPriority$() {

    if ( priority_$ == null ) {
      priority_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(PRIORITY)
        .build();
    }
    return priority_$;
  }

  public Object getPriority() {

    if ( ! priority_isSet_ ) {
      return 50;
    }
    return priority_;
  }

  private Object priority_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setPriority(Object value) {

    boolean hasOldValue = hasPropertySet("priority");
    Object oldValue = hasOldValue ?
      getPriority() :
      null;
    Object castedValue = priority_adapt(oldValue, value, hasOldValue);
    
    priority_isSet_ = true;
    priority_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "priority", null };
    if ( hasListeners(args) ) {
      args[2] = getPriority$();
      pub(args);
    }
  }

  private static foam.core.Property init_PRIORITY() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("priority")
      .setValue(50)
      .setForClass_("foam.core.internal.EnumValueAxiom")
      .build();
  }

  public void installInClass() {

    throw new RuntimeException("installInClass is not implemented");
  }

  public void clearProperty(String name) {

    switch(name) {
    
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
    
    
      case "definition":
        definition_isSet_ = false;
        Object[] definitionArgs = new Object[] { "propertyChange", "definition", null };
        if ( hasListeners(definitionArgs) ) {
          definitionArgs[2] = getDefinition$();
          pub(definitionArgs);
        }
        return;
    
    
      case "priority":
        priority_isSet_ = false;
        Object[] priorityArgs = new Object[] { "propertyChange", "priority", null };
        if ( hasListeners(priorityArgs) ) {
          priorityArgs[2] = getPriority$();
          pub(priorityArgs);
        }
        return;
    
    }
    
    super.clearProperty(name);
    
  }

  public Object getProperty(String name) {

    switch(name) {
    
      case "ordinal":
        return getOrdinal();
    
    
      case "name":
        return getName();
    
    
      case "definition":
        return getDefinition();
    
    
      case "priority":
        return getPriority();
    
    }
    return super.getProperty(name);
  }

  public foam.core.Slot getSlot(String name) {

    switch(name) {
    
      case "ordinal":
        return getOrdinal$();
    
    
      case "name":
        return getName$();
    
    
      case "definition":
        return getDefinition$();
    
    
      case "priority":
        return getPriority$();
    
    }
    return super.getSlot(name);
  }

  public boolean hasPropertySet(String name) {

    switch(name) {
    
      case "ordinal":
        return ordinal_isSet_;
    
    
      case "name":
        return name_isSet_;
    
    
      case "definition":
        return definition_isSet_;
    
    
      case "priority":
        return priority_isSet_;
    
    }
    
    return super.hasPropertySet(name);
    
  }

  public void setProperty(String name, Object value) {

    switch(name) {
    
      case "ordinal":
        setOrdinal((Object) value);
        return;
    
    
      case "name":
        setName((Object) value);
        return;
    
    
      case "definition":
        setDefinition((Object) value);
        return;
    
    
      case "priority":
        setPriority((Object) value);
        return;
    
    }
    
    super.setProperty(name, value);
    
  }

  protected EnumValueAxiom () {

  }

  public foam.cross_platform.FoamClass getCls_() {

    return CLS_;
  }

  public static foam.cross_platform.FoamClass initClassInfo_() {

    return foam.cross_platform.FoamClass.FoamClassBuilder(null) // TODO give context
      .setId("foam.core.internal.EnumValueAxiom")
      .setParent(foam.cross_platform.AbstractFObject.CLS_)
      .setAxioms(new Object[] {foam.core.internal.EnumValueAxiom.ORDINAL, foam.core.internal.EnumValueAxiom.NAME, foam.core.internal.EnumValueAxiom.DEFINITION, foam.core.internal.EnumValueAxiom.PRIORITY, foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("installInClass")
      .setCode(null)
      .setForClass_("foam.core.internal.EnumValueAxiom")
      .setArgs(new foam.core.Argument[] {  })
      .build()})
      .build();
  }

  public static Builder EnumValueAxiomBuilder(foam.cross_platform.Context x) {

    return new Builder();
  }
  public static class Builder {

    private boolean ordinal_isSet_ =
      false;

    private Object ordinal_;

    private boolean name_isSet_ =
      false;

    private Object name_;

    private boolean definition_isSet_ =
      false;

    private Object definition_;

    private boolean priority_isSet_ =
      false;

    private Object priority_;


    public Builder setOrdinal(Object value) {

      ordinal_isSet_ = true;
      ordinal_ = value;
      return this;
    }

    public Builder setName(Object value) {

      name_isSet_ = true;
      name_ = value;
      return this;
    }

    public Builder setDefinition(Object value) {

      definition_isSet_ = true;
      definition_ = value;
      return this;
    }

    public Builder setPriority(Object value) {

      priority_isSet_ = true;
      priority_ = value;
      return this;
    }

    private Builder() {

    }

    public EnumValueAxiom build() {

      EnumValueAxiom o = new EnumValueAxiom();
      
      if ( ordinal_isSet_ ) {
        o.setOrdinal(ordinal_);
      }
      
      if ( name_isSet_ ) {
        o.setName(name_);
      }
      
      if ( definition_isSet_ ) {
        o.setDefinition(definition_);
      }
      
      if ( priority_isSet_ ) {
        o.setPriority(priority_);
      }
      
      o.init();
      return o;
    }
  }
}