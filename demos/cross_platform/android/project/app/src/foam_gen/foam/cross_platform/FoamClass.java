// WARNING: GENERATED CODE, DO NOT MODIFY BY HAND!
package foam.cross_platform;


public class FoamClass extends foam.cross_platform.AbstractFObject {

  private foam.core.Slot parent_$;

  protected String id_;

  private foam.core.Slot id_$;

  public static foam.core.StringProperty ID =
    init_ID();

  protected foam.cross_platform.FoamClass parent_;

  private boolean parent_isSet_ =
    false;

  private boolean id_isSet_ =
    false;

  public static foam.core.ClassProperty PARENT =
    init_PARENT();

  protected Object[] axioms_;

  private boolean axioms_isSet_ =
    false;

  private foam.core.Slot axioms_$;

  public static foam.core.ArrayProperty AXIOMS =
    init_AXIOMS();

  public static foam.cross_platform.FoamClass CLS_ =
    initClassInfo_();


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
      .setForClass_("foam.cross_platform.FoamClass")
      .build();
  }

  public foam.core.Slot getParent$() {

    if ( parent_$ == null ) {
      parent_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(PARENT)
        .build();
    }
    return parent_$;
  }

  public foam.cross_platform.FoamClass getParent() {

    if ( ! parent_isSet_ ) {
      return null;
    }
    return parent_;
  }

  private foam.cross_platform.FoamClass parent_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (foam.cross_platform.FoamClass) newValue;
  }

  public void setParent(Object value) {

    boolean hasOldValue = hasPropertySet("parent");
    Object oldValue = hasOldValue ?
      getParent() :
      null;
    foam.cross_platform.FoamClass castedValue = parent_adapt(oldValue, value, hasOldValue);
    
    parent_isSet_ = true;
    parent_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "parent", null };
    if ( hasListeners(args) ) {
      args[2] = getParent$();
      pub(args);
    }
  }

  private static foam.core.ClassProperty init_PARENT() {

    return foam.core.ClassProperty.ClassPropertyBuilder(null) // TODO give context
      .setName("parent")
      .setForClass_("foam.cross_platform.FoamClass")
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

  public Object[] getAxioms() {

    if ( ! axioms_isSet_ ) {
      return null;
    }
    return axioms_;
  }

  private Object[] axioms_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object[]) newValue;
  }

  public void setAxioms(Object value) {

    boolean hasOldValue = hasPropertySet("axioms");
    Object oldValue = hasOldValue ?
      getAxioms() :
      null;
    Object[] castedValue = axioms_adapt(oldValue, value, hasOldValue);
    
    axioms_isSet_ = true;
    axioms_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "axioms", null };
    if ( hasListeners(args) ) {
      args[2] = getAxioms$();
      pub(args);
    }
  }

  private static foam.core.ArrayProperty init_AXIOMS() {

    return foam.core.ArrayProperty.ArrayPropertyBuilder(null) // TODO give context
      .setName("axioms")
      .setForClass_("foam.cross_platform.FoamClass")
      .build();
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
    
    
      case "parent":
        parent_isSet_ = false;
        Object[] parentArgs = new Object[] { "propertyChange", "parent", null };
        if ( hasListeners(parentArgs) ) {
          parentArgs[2] = getParent$();
          pub(parentArgs);
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
    
    }
    
    super.clearProperty(name);
    
  }

  public Object getProperty(String name) {

    switch(name) {
    
      case "id":
        return getId();
    
    
      case "parent":
        return getParent();
    
    
      case "axioms":
        return getAxioms();
    
    }
    return super.getProperty(name);
  }

  public foam.core.Slot getSlot(String name) {

    switch(name) {
    
      case "id":
        return getId$();
    
    
      case "parent":
        return getParent$();
    
    
      case "axioms":
        return getAxioms$();
    
    }
    return super.getSlot(name);
  }

  public boolean hasPropertySet(String name) {

    switch(name) {
    
      case "id":
        return id_isSet_;
    
    
      case "parent":
        return parent_isSet_;
    
    
      case "axioms":
        return axioms_isSet_;
    
    }
    
    return super.hasPropertySet(name);
    
  }

  public void setProperty(String name, Object value) {

    switch(name) {
    
      case "id":
        setId((String) value);
        return;
    
    
      case "parent":
        setParent((foam.cross_platform.FoamClass) value);
        return;
    
    
      case "axioms":
        setAxioms((Object[]) value);
        return;
    
    }
    
    super.setProperty(name, value);
    
  }

  protected FoamClass () {

  }

  public foam.cross_platform.FoamClass getCls_() {

    return CLS_;
  }

  public static foam.cross_platform.FoamClass initClassInfo_() {

    return foam.cross_platform.FoamClass.FoamClassBuilder(null) // TODO give context
      .setId("foam.cross_platform.FoamClass")
      .setParent(foam.cross_platform.AbstractFObject.CLS_)
      .setAxioms(new Object[] {foam.cross_platform.FoamClass.ID, foam.cross_platform.FoamClass.PARENT, foam.cross_platform.FoamClass.AXIOMS})
      .build();
  }

  public static Builder FoamClassBuilder(foam.cross_platform.Context x) {

    return new Builder();
  }
  public static class Builder {

    private boolean id_isSet_ =
      false;

    private String id_;

    private boolean parent_isSet_ =
      false;

    private foam.cross_platform.FoamClass parent_;

    private boolean axioms_isSet_ =
      false;

    private Object[] axioms_;


    public Builder setId(String value) {

      id_isSet_ = true;
      id_ = value;
      return this;
    }

    public Builder setParent(foam.cross_platform.FoamClass value) {

      parent_isSet_ = true;
      parent_ = value;
      return this;
    }

    public Builder setAxioms(Object[] value) {

      axioms_isSet_ = true;
      axioms_ = value;
      return this;
    }

    private Builder() {

    }

    public FoamClass build() {

      FoamClass o = new FoamClass();
      
      if ( id_isSet_ ) {
        o.setId(id_);
      }
      
      if ( parent_isSet_ ) {
        o.setParent(parent_);
      }
      
      if ( axioms_isSet_ ) {
        o.setAxioms(axioms_);
      }
      
      o.init();
      return o;
    }
  }
}