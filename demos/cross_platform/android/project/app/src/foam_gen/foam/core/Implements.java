// WARNING: GENERATED CODE, DO NOT MODIFY BY HAND!
package foam.core;


/**
*   Axiom for declaring intent to implement an interface.  Since interfaces can also have implementations, it  can also be used to provide mix-ins, 
* which is a safe form of  multiple-inheritance.  <pre>  Ex.  foam.CLASS({  name: 'SalaryI',  properties: [ 'salary' ]  });  
* foam.CLASS({  name: 'Employee',  extends: 'Person',  implements: [ 'SalaryI' ]  });  </pre>  Employee extends Person through regular inheritance, but  
* the axioms from SalaryI are also added to the class.  Any number of mix-ins/interfaces can be specified.   
*/
public class Implements extends foam.cross_platform.AbstractFObject {

  private foam.core.Slot path_$;

  protected Object name_;

  private foam.core.Slot name_$;

  public static foam.core.Property NAME =
    init_NAME();

  protected Object flags_;

  private boolean flags_isSet_ =
    false;

  private foam.core.Slot flags_$;

  public static foam.core.Property FLAGS =
    init_FLAGS();

  protected Object path_;

  private boolean path_isSet_ =
    false;

  private boolean name_isSet_ =
    false;

  public static foam.core.Property PATH =
    init_PATH();

  protected Object priority_;

  private boolean priority_isSet_ =
    false;

  private foam.core.Slot priority_$;

  public static foam.core.Property PRIORITY =
    init_PRIORITY();

  protected boolean java_;

  private boolean java_isSet_ =
    false;

  private foam.core.Slot java_$;

  public static foam.core.BooleanProperty JAVA =
    init_JAVA();

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
      .setGetter(null)
      .setForClass_("foam.core.Implements")
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
      .setForClass_("foam.core.Implements")
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
      .setForClass_("foam.core.Implements")
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
      return 200;
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
      .setValue(200)
      .setForClass_("foam.core.Implements")
      .build();
  }

  public void installInClass() {

    throw new RuntimeException("installInClass is not implemented");
  }

  public void writeToSwiftClass() {

    throw new RuntimeException("writeToSwiftClass is not implemented");
  }

  public void writeToSwiftClass_() {

    throw new RuntimeException("writeToSwiftClass_ is not implemented");
  }

  public foam.core.Slot getJava$() {

    if ( java_$ == null ) {
      java_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(JAVA)
        .build();
    }
    return java_$;
  }

  public boolean getJava() {

    if ( ! java_isSet_ ) {
      return true;
    }
    return java_;
  }

  private boolean java_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (boolean) newValue;
  }

  public void setJava(Object value) {

    boolean hasOldValue = hasPropertySet("java");
    Object oldValue = hasOldValue ?
      getJava() :
      null;
    boolean castedValue = java_adapt(oldValue, value, hasOldValue);
    
    java_isSet_ = true;
    java_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "java", null };
    if ( hasListeners(args) ) {
      args[2] = getJava$();
      pub(args);
    }
  }

  private static foam.core.BooleanProperty init_JAVA() {

    return foam.core.BooleanProperty.BooleanPropertyBuilder(null) // TODO give context
      .setValue(true)
      .setName("java")
      .setForClass_("foam.core.Implements")
      .build();
  }

  public void buildJavaClass() {

    throw new RuntimeException("buildJavaClass is not implemented");
  }

  public void getDeps() {

    throw new RuntimeException("getDeps is not implemented");
  }

  public void buildAndroidClass() {

    throw new RuntimeException("buildAndroidClass is not implemented");
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
    
    
      case "flags":
        flags_isSet_ = false;
        Object[] flagsArgs = new Object[] { "propertyChange", "flags", null };
        if ( hasListeners(flagsArgs) ) {
          flagsArgs[2] = getFlags$();
          pub(flagsArgs);
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
    
    
      case "priority":
        priority_isSet_ = false;
        Object[] priorityArgs = new Object[] { "propertyChange", "priority", null };
        if ( hasListeners(priorityArgs) ) {
          priorityArgs[2] = getPriority$();
          pub(priorityArgs);
        }
        return;
    
    
      case "java":
        java_isSet_ = false;
        Object[] javaArgs = new Object[] { "propertyChange", "java", null };
        if ( hasListeners(javaArgs) ) {
          javaArgs[2] = getJava$();
          pub(javaArgs);
        }
        return;
    
    }
    
    super.clearProperty(name);
    
  }

  public Object getProperty(String name) {

    switch(name) {
    
      case "name":
        return getName();
    
    
      case "flags":
        return getFlags();
    
    
      case "path":
        return getPath();
    
    
      case "priority":
        return getPriority();
    
    
      case "java":
        return getJava();
    
    }
    return super.getProperty(name);
  }

  public foam.core.Slot getSlot(String name) {

    switch(name) {
    
      case "name":
        return getName$();
    
    
      case "flags":
        return getFlags$();
    
    
      case "path":
        return getPath$();
    
    
      case "priority":
        return getPriority$();
    
    
      case "java":
        return getJava$();
    
    }
    return super.getSlot(name);
  }

  public boolean hasPropertySet(String name) {

    switch(name) {
    
      case "name":
        return name_isSet_;
    
    
      case "flags":
        return flags_isSet_;
    
    
      case "path":
        return path_isSet_;
    
    
      case "priority":
        return priority_isSet_;
    
    
      case "java":
        return java_isSet_;
    
    }
    
    return super.hasPropertySet(name);
    
  }

  public void setProperty(String name, Object value) {

    switch(name) {
    
      case "name":
        setName((Object) value);
        return;
    
    
      case "flags":
        setFlags((Object) value);
        return;
    
    
      case "path":
        setPath((Object) value);
        return;
    
    
      case "priority":
        setPriority((Object) value);
        return;
    
    
      case "java":
        setJava((boolean) value);
        return;
    
    }
    
    super.setProperty(name, value);
    
  }

  protected Implements () {

  }

  public foam.cross_platform.FoamClass getCls_() {

    return CLS_;
  }

  public static foam.cross_platform.FoamClass initClassInfo_() {

    return foam.cross_platform.FoamClass.FoamClassBuilder(null) // TODO give context
      .setId("foam.core.Implements")
      .setParent(foam.cross_platform.AbstractFObject.CLS_)
      .setAxioms(new Object[] {foam.core.Implements.NAME, foam.core.Implements.FLAGS, foam.core.Implements.PATH, foam.core.Implements.PRIORITY, foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("installInClass")
      .setCode(null)
      .setForClass_("foam.core.Implements")
      .setArgs(new foam.core.Argument[] {  })
      .build(), foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("writeToSwiftClass")
      .setCode(null)
      .setForClass_("foam.core.Implements")
      .setArgs(new foam.core.Argument[] {  })
      .build(), foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("writeToSwiftClass_")
      .setCode(null)
      .setForClass_("foam.core.Implements")
      .setArgs(new foam.core.Argument[] {  })
      .build(), foam.core.Implements.JAVA, foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("buildJavaClass")
      .setCode(null)
      .setForClass_("foam.core.Implements")
      .setArgs(new foam.core.Argument[] {  })
      .build(), foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("getDeps")
      .setCode(null)
      .setForClass_("foam.core.Implements")
      .setArgs(new foam.core.Argument[] {  })
      .build(), foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("buildAndroidClass")
      .setCode(null)
      .setForClass_("foam.core.Implements")
      .setArgs(new foam.core.Argument[] {  })
      .build()})
      .build();
  }

  public static Builder ImplementsBuilder(foam.cross_platform.Context x) {

    return new Builder();
  }
  public static class Builder {

    private boolean name_isSet_ =
      false;

    private Object name_;

    private boolean flags_isSet_ =
      false;

    private Object flags_;

    private boolean path_isSet_ =
      false;

    private Object path_;

    private boolean priority_isSet_ =
      false;

    private Object priority_;

    private boolean java_isSet_ =
      false;

    private boolean java_;


    public Builder setName(Object value) {

      name_isSet_ = true;
      name_ = value;
      return this;
    }

    public Builder setFlags(Object value) {

      flags_isSet_ = true;
      flags_ = value;
      return this;
    }

    public Builder setPath(Object value) {

      path_isSet_ = true;
      path_ = value;
      return this;
    }

    public Builder setPriority(Object value) {

      priority_isSet_ = true;
      priority_ = value;
      return this;
    }

    public Builder setJava(boolean value) {

      java_isSet_ = true;
      java_ = value;
      return this;
    }

    private Builder() {

    }

    public Implements build() {

      Implements o = new Implements();
      
      if ( name_isSet_ ) {
        o.setName(name_);
      }
      
      if ( flags_isSet_ ) {
        o.setFlags(flags_);
      }
      
      if ( path_isSet_ ) {
        o.setPath(path_);
      }
      
      if ( priority_isSet_ ) {
        o.setPriority(priority_);
      }
      
      if ( java_isSet_ ) {
        o.setJava(java_);
      }
      
      o.init();
      return o;
    }
  }
}