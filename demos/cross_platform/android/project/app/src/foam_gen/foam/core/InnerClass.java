// WARNING: GENERATED CODE, DO NOT MODIFY BY HAND!
package foam.core;


/**
* Axiom for defining inner-classes. An inner-class is a class defined in the scope of the outer/owner class. This avoids poluting the package namespace with classes which 
* are only used internally by a class. 
*/
public class InnerClass extends foam.cross_platform.AbstractFObject {

  private foam.core.Slot model_$;

  protected Object name_;

  private foam.core.Slot name_$;

  public static foam.core.Property NAME =
    init_NAME();

  protected Object model_;

  private boolean model_isSet_ =
    false;

  private boolean name_isSet_ =
    false;

  public static foam.core.Property MODEL =
    init_MODEL();

  protected boolean generateJava_;

  private boolean generateJava_isSet_ =
    false;

  private foam.core.Slot generateJava_$;

  public static foam.core.BooleanProperty GENERATE_JAVA =
    init_GENERATE_JAVA();

  public static foam.cross_platform.FoamClass CLS_ =
    initClassInfo_();


  protected foam.core.Model.Builder Model_create() {

    return foam.core.Model.ModelBuilder(getSubX());
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
      .setForClass_("foam.core.InnerClass")
      .build();
  }

  public foam.core.Slot getModel$() {

    if ( model_$ == null ) {
      model_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(MODEL)
        .build();
    }
    return model_$;
  }

  public Object getModel() {

    if ( ! model_isSet_ ) {
      return null;
    }
    return model_;
  }

  private Object model_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setModel(Object value) {

    boolean hasOldValue = hasPropertySet("model");
    Object oldValue = hasOldValue ?
      getModel() :
      null;
    Object castedValue = model_adapt(oldValue, value, hasOldValue);
    
    model_isSet_ = true;
    model_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "model", null };
    if ( hasListeners(args) ) {
      args[2] = getModel$();
      pub(args);
    }
  }

  private static foam.core.Property init_MODEL() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("model")
      .setAdapt(null)
      .setForClass_("foam.core.InnerClass")
      .build();
  }

  public void modelAdapt_() {

    throw new RuntimeException("modelAdapt_ is not implemented");
  }

  public void installInClass() {

    throw new RuntimeException("installInClass is not implemented");
  }

  public void installInProto() {

    throw new RuntimeException("installInProto is not implemented");
  }

  public foam.core.Slot getGenerateJava$() {

    if ( generateJava_$ == null ) {
      generateJava_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(GENERATE_JAVA)
        .build();
    }
    return generateJava_$;
  }

  public boolean getGenerateJava() {

    if ( ! generateJava_isSet_ ) {
      return false;
    }
    return generateJava_;
  }

  private boolean generateJava_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (boolean) newValue;
  }

  public void setGenerateJava(Object value) {

    boolean hasOldValue = hasPropertySet("generateJava");
    Object oldValue = hasOldValue ?
      getGenerateJava() :
      null;
    boolean castedValue = generateJava_adapt(oldValue, value, hasOldValue);
    
    generateJava_isSet_ = true;
    generateJava_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "generateJava", null };
    if ( hasListeners(args) ) {
      args[2] = getGenerateJava$();
      pub(args);
    }
  }

  private static foam.core.BooleanProperty init_GENERATE_JAVA() {

    return foam.core.BooleanProperty.BooleanPropertyBuilder(null) // TODO give context
      .setName("generateJava")
      .setExpression(null)
      .setForClass_("foam.core.InnerClass")
      .build();
  }

  public void buildJavaClass() {

    throw new RuntimeException("buildJavaClass is not implemented");
  }

  public void writeToSwiftClass() {

    throw new RuntimeException("writeToSwiftClass is not implemented");
  }

  public void swiftInitializer() {

    throw new RuntimeException("swiftInitializer is not implemented");
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
    
    
      case "model":
        model_isSet_ = false;
        Object[] modelArgs = new Object[] { "propertyChange", "model", null };
        if ( hasListeners(modelArgs) ) {
          modelArgs[2] = getModel$();
          pub(modelArgs);
        }
        return;
    
    
      case "generateJava":
        generateJava_isSet_ = false;
        Object[] generateJavaArgs = new Object[] { "propertyChange", "generateJava", null };
        if ( hasListeners(generateJavaArgs) ) {
          generateJavaArgs[2] = getGenerateJava$();
          pub(generateJavaArgs);
        }
        return;
    
    }
    
    super.clearProperty(name);
    
  }

  public Object getProperty(String name) {

    switch(name) {
    
      case "name":
        return getName();
    
    
      case "model":
        return getModel();
    
    
      case "generateJava":
        return getGenerateJava();
    
    }
    return super.getProperty(name);
  }

  public foam.core.Slot getSlot(String name) {

    switch(name) {
    
      case "name":
        return getName$();
    
    
      case "model":
        return getModel$();
    
    
      case "generateJava":
        return getGenerateJava$();
    
    }
    return super.getSlot(name);
  }

  public boolean hasPropertySet(String name) {

    switch(name) {
    
      case "name":
        return name_isSet_;
    
    
      case "model":
        return model_isSet_;
    
    
      case "generateJava":
        return generateJava_isSet_;
    
    }
    
    return super.hasPropertySet(name);
    
  }

  public void setProperty(String name, Object value) {

    switch(name) {
    
      case "name":
        setName((Object) value);
        return;
    
    
      case "model":
        setModel((Object) value);
        return;
    
    
      case "generateJava":
        setGenerateJava((boolean) value);
        return;
    
    }
    
    super.setProperty(name, value);
    
  }

  protected InnerClass () {

  }

  public foam.cross_platform.FoamClass getCls_() {

    return CLS_;
  }

  public static foam.cross_platform.FoamClass initClassInfo_() {

    return foam.cross_platform.FoamClass.FoamClassBuilder(null) // TODO give context
      .setId("foam.core.InnerClass")
      .setParent(foam.cross_platform.AbstractFObject.CLS_)
      .setAxioms(new Object[] {foam.core.Requires.RequiresBuilder(null) // TODO give context
      .setName("Model")
      .setPath("foam.core.Model")
      .build(), foam.core.InnerClass.NAME, foam.core.InnerClass.MODEL, foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("modelAdapt_")
      .setCode(null)
      .setForClass_("foam.core.InnerClass")
      .setArgs(new foam.core.Argument[] {  })
      .build(), foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("installInClass")
      .setCode(null)
      .setForClass_("foam.core.InnerClass")
      .setArgs(new foam.core.Argument[] {  })
      .build(), foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("installInProto")
      .setCode(null)
      .setForClass_("foam.core.InnerClass")
      .setArgs(new foam.core.Argument[] {  })
      .build(), foam.core.InnerClass.GENERATE_JAVA, foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("buildJavaClass")
      .setCode(null)
      .setForClass_("foam.core.InnerClass")
      .setArgs(new foam.core.Argument[] {  })
      .build(), foam.core.Requires.RequiresBuilder(null) // TODO give context
      .setName("Method")
      .setPath("foam.swift.Method")
      .build(), foam.core.Requires.RequiresBuilder(null) // TODO give context
      .setName("Argument")
      .setPath("foam.swift.Argument")
      .build(), foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("writeToSwiftClass")
      .setCode(null)
      .setForClass_("foam.core.InnerClass")
      .setArgs(new foam.core.Argument[] {  })
      .build(), foam.templates.TemplateAxiom.TemplateAxiomBuilder(null) // TODO give context
      .setTemplate("\nreturn <%=this.model.swiftName%>(args, __subContext__)\n      ")
      .setArgs(new foam.core.Argument[] {  })
      .setName("swiftInitializer")
      .setForClass_("foam.core.InnerClass")
      .build(), foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("getDeps")
      .setCode(null)
      .setForClass_("foam.core.InnerClass")
      .setArgs(new foam.core.Argument[] {  })
      .build(), foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("buildAndroidClass")
      .setCode(null)
      .setForClass_("foam.core.InnerClass")
      .setArgs(new foam.core.Argument[] {  })
      .build()})
      .build();
  }

  public static Builder InnerClassBuilder(foam.cross_platform.Context x) {

    return new Builder();
  }
  public static class Builder {

    private boolean name_isSet_ =
      false;

    private Object name_;

    private boolean model_isSet_ =
      false;

    private Object model_;

    private boolean generateJava_isSet_ =
      false;

    private boolean generateJava_;


    public Builder setName(Object value) {

      name_isSet_ = true;
      name_ = value;
      return this;
    }

    public Builder setModel(Object value) {

      model_isSet_ = true;
      model_ = value;
      return this;
    }

    public Builder setGenerateJava(boolean value) {

      generateJava_isSet_ = true;
      generateJava_ = value;
      return this;
    }

    private Builder() {

    }

    public InnerClass build() {

      InnerClass o = new InnerClass();
      
      if ( name_isSet_ ) {
        o.setName(name_);
      }
      
      if ( model_isSet_ ) {
        o.setModel(model_);
      }
      
      if ( generateJava_isSet_ ) {
        o.setGenerateJava(generateJava_);
      }
      
      o.init();
      return o;
    }
  }
}