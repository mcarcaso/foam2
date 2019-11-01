// WARNING: GENERATED CODE, DO NOT MODIFY BY HAND!
package foam.core.internal;


/**
*   Represents object properties as Slots.  Created with calling obj.prop$ or obj.slot('prop').  For internal use only.   
*/
public class PropertySlot extends foam.core.Slot implements foam.core.SlotInterface {

  protected foam.cross_platform.FObject obj_;

  private boolean obj_isSet_ =
    false;

  private foam.core.Slot obj_$;

  public static foam.core.FObjectProperty OBJ =
    init_OBJ();

  protected foam.core.Property prop_;

  private boolean prop_isSet_ =
    false;

  private foam.core.Slot prop_$;

  public static foam.core.FObjectProperty PROP =
    init_PROP();

  public static foam.cross_platform.FoamClass CLS_ =
    initClassInfo_();


  public void initArgs() {

    throw new RuntimeException("initArgs is not implemented");
  }

  public void get() {

    throw new RuntimeException("get is not implemented");
  }

  public void set() {

    throw new RuntimeException("set is not implemented");
  }

  public void getPrev() {

    throw new RuntimeException("getPrev is not implemented");
  }

  public void setPrev() {

    throw new RuntimeException("setPrev is not implemented");
  }

  public void sub() {

    throw new RuntimeException("sub is not implemented");
  }

  public void isDefined() {

    throw new RuntimeException("isDefined is not implemented");
  }

  public void clear() {

    throw new RuntimeException("clear is not implemented");
  }

  public String toString() {

    throw new RuntimeException("toString is not implemented");
  }

  public foam.core.Slot getObj$() {

    if ( obj_$ == null ) {
      obj_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(OBJ)
        .build();
    }
    return obj_$;
  }

  public foam.cross_platform.FObject getObj() {

    if ( ! obj_isSet_ ) {
      return null;
    }
    return obj_;
  }

  public void setObj(Object value) {

    obj_isSet_ = true;
    obj_ = (foam.cross_platform.FObject) value;
  }

  private static foam.core.FObjectProperty init_OBJ() {

    return foam.core.FObjectProperty.FObjectPropertyBuilder(null) // TODO give context
      .setType("foam.core.FObject")
      .setName("obj")
      .setForClass_("foam.core.internal.PropertySlot")
      .setAndroidSetter("\n        obj_isSet_ = true;\n        obj_ = (foam.cross_platform.FObject) value;\n      ")
      .build();
  }

  public foam.core.Slot getProp$() {

    if ( prop_$ == null ) {
      prop_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(PROP)
        .build();
    }
    return prop_$;
  }

  public foam.core.Property getProp() {

    if ( ! prop_isSet_ ) {
      return null;
    }
    return prop_;
  }

  public void setProp(Object value) {

    prop_isSet_ = true;
    prop_ = (foam.core.Property) value;
  }

  private static foam.core.FObjectProperty init_PROP() {

    return foam.core.FObjectProperty.FObjectPropertyBuilder(null) // TODO give context
      .setOf(foam.core.Property.CLS_)
      .setType("foam.core.Property")
      .setName("prop")
      .setForClass_("foam.core.internal.PropertySlot")
      .setAndroidSetter("\n        prop_isSet_ = true;\n        prop_ = (foam.core.Property) value;\n      ")
      .build();
  }

  public Object slotGet() {

    return getProp().f(getObj());
  }

  public foam.core.Detachable slotSub(foam.cross_platform.Listener listener) {

    return getObj().sub(
      new String[] {
        "propertyChange",
        getProp().getName()
      },
      listener);
  }

  protected foam.core.internal.SubSlot.Builder SubSlot_create() {

    return foam.core.internal.SubSlot.SubSlotBuilder(getSubX());
  }

  public void clearProperty(String name) {

    switch(name) {
    
      case "obj":
        obj_isSet_ = false;
        Object[] objArgs = new Object[] { "propertyChange", "obj", null };
        if ( hasListeners(objArgs) ) {
          objArgs[2] = getObj$();
          pub(objArgs);
        }
        return;
    
    
      case "prop":
        prop_isSet_ = false;
        Object[] propArgs = new Object[] { "propertyChange", "prop", null };
        if ( hasListeners(propArgs) ) {
          propArgs[2] = getProp$();
          pub(propArgs);
        }
        return;
    
    }
    
    super.clearProperty(name);
    
  }

  public Object getProperty(String name) {

    switch(name) {
    
      case "obj":
        return getObj();
    
    
      case "prop":
        return getProp();
    
    }
    return super.getProperty(name);
  }

  public foam.core.Slot getSlot(String name) {

    switch(name) {
    
      case "obj":
        return getObj$();
    
    
      case "prop":
        return getProp$();
    
    }
    return super.getSlot(name);
  }

  public boolean hasPropertySet(String name) {

    switch(name) {
    
      case "obj":
        return obj_isSet_;
    
    
      case "prop":
        return prop_isSet_;
    
    }
    
    return super.hasPropertySet(name);
    
  }

  public void setProperty(String name, Object value) {

    switch(name) {
    
      case "obj":
        setObj((foam.cross_platform.FObject) value);
        return;
    
    
      case "prop":
        setProp((foam.core.Property) value);
        return;
    
    }
    
    super.setProperty(name, value);
    
  }

  protected PropertySlot () {

  }

  public foam.cross_platform.FoamClass getCls_() {

    return CLS_;
  }

  public static foam.cross_platform.FoamClass initClassInfo_() {

    return foam.cross_platform.FoamClass.FoamClassBuilder(null) // TODO give context
      .setId("foam.core.internal.PropertySlot")
      .setParent(foam.core.Slot.CLS_)
      .setAxioms(new Object[] {foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("get")
      .setCode(null)
      .setForClass_("foam.core.internal.PropertySlot")
      .setArgs(new foam.core.Argument[] {  })
      .build(), foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("set")
      .setCode(null)
      .setForClass_("foam.core.internal.PropertySlot")
      .setArgs(new foam.core.Argument[] {  })
      .build(), foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("getPrev")
      .setCode(null)
      .setForClass_("foam.core.internal.PropertySlot")
      .setArgs(new foam.core.Argument[] {  })
      .build(), foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("setPrev")
      .setCode(null)
      .setForClass_("foam.core.internal.PropertySlot")
      .setArgs(new foam.core.Argument[] {  })
      .build(), foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("isDefined")
      .setCode(null)
      .setForClass_("foam.core.internal.PropertySlot")
      .setArgs(new foam.core.Argument[] {  })
      .build(), foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("clear")
      .setCode(null)
      .setForClass_("foam.core.internal.PropertySlot")
      .setArgs(new foam.core.Argument[] {  })
      .build(), foam.core.internal.PropertySlot.OBJ, foam.core.internal.PropertySlot.PROP})
      .build();
  }

  public static Builder PropertySlotBuilder(foam.cross_platform.Context x) {

    return new Builder();
  }
  public static class Builder {

    private boolean obj_isSet_ =
      false;

    private foam.cross_platform.FObject obj_;

    private boolean prop_isSet_ =
      false;

    private foam.core.Property prop_;


    public Builder setObj(foam.cross_platform.FObject value) {

      obj_isSet_ = true;
      obj_ = value;
      return this;
    }

    public Builder setProp(foam.core.Property value) {

      prop_isSet_ = true;
      prop_ = value;
      return this;
    }

    private Builder() {

    }

    public PropertySlot build() {

      PropertySlot o = new PropertySlot();
      
      if ( obj_isSet_ ) {
        o.setObj(obj_);
      }
      
      if ( prop_isSet_ ) {
        o.setProp(prop_);
      }
      
      o.init();
      return o;
    }
  }
}