// WARNING: GENERATED CODE, DO NOT MODIFY BY HAND!
package foam.core;


public class ValidationPredicate extends foam.cross_platform.AbstractFObject {

  protected foam.cross_platform.GenericFunction jsFunc_;

  protected Object predicateFactory_;

  private foam.core.Slot predicateFactory_$;

  public static foam.core.Property PREDICATE_FACTORY =
    init_PREDICATE_FACTORY();

  protected foam.mlang.predicate.Predicate predicate_;

  private boolean predicate_isSet_ =
    false;

  private foam.core.Slot predicate_$;

  public static foam.core.FObjectProperty PREDICATE =
    init_PREDICATE();

  protected String[] args_;

  private boolean args_isSet_ =
    false;

  private foam.core.Slot args_$;

  public static foam.core.StringArrayProperty ARGS =
    init_ARGS();

  private boolean predicateFactory_isSet_ =
    false;

  private boolean jsFunc_isSet_ =
    false;

  private foam.core.Slot jsFunc_$;

  public static foam.core.FunctionProperty JS_FUNC =
    init_JS_FUNC();

  protected String errorString_;

  private boolean errorString_isSet_ =
    false;

  private foam.core.Slot errorString_$;

  public static foam.core.StringProperty ERROR_STRING =
    init_ERROR_STRING();

  protected foam.cross_platform.GenericFunction jsErr_;

  private boolean jsErr_isSet_ =
    false;

  private foam.core.Slot jsErr_$;

  public static foam.core.FunctionProperty JS_ERR =
    init_JS_ERR();

  public static foam.cross_platform.FoamClass CLS_ =
    initClassInfo_();


  public foam.core.Slot getPredicateFactory$() {

    if ( predicateFactory_$ == null ) {
      predicateFactory_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(PREDICATE_FACTORY)
        .build();
    }
    return predicateFactory_$;
  }

  public Object getPredicateFactory() {

    if ( ! predicateFactory_isSet_ ) {
      return null;
    }
    return predicateFactory_;
  }

  private Object predicateFactory_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setPredicateFactory(Object value) {

    boolean hasOldValue = hasPropertySet("predicateFactory");
    Object oldValue = hasOldValue ?
      getPredicateFactory() :
      null;
    Object castedValue = predicateFactory_adapt(oldValue, value, hasOldValue);
    
    predicateFactory_isSet_ = true;
    predicateFactory_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "predicateFactory", null };
    if ( hasListeners(args) ) {
      args[2] = getPredicateFactory$();
      pub(args);
    }
  }

  private static foam.core.Property init_PREDICATE_FACTORY() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("predicateFactory")
      .setForClass_("foam.core.ValidationPredicate")
      .build();
  }

  public foam.core.Slot getPredicate$() {

    if ( predicate_$ == null ) {
      predicate_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(PREDICATE)
        .build();
    }
    return predicate_$;
  }

  public foam.mlang.predicate.Predicate getPredicate() {

    if ( ! predicate_isSet_ ) {
      return null;
    }
    return predicate_;
  }

  private foam.mlang.predicate.Predicate predicate_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (foam.mlang.predicate.Predicate) newValue;
  }

  public void setPredicate(Object value) {

    boolean hasOldValue = hasPropertySet("predicate");
    Object oldValue = hasOldValue ?
      getPredicate() :
      null;
    foam.mlang.predicate.Predicate castedValue = predicate_adapt(oldValue, value, hasOldValue);
    
    predicate_isSet_ = true;
    predicate_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "predicate", null };
    if ( hasListeners(args) ) {
      args[2] = getPredicate$();
      pub(args);
    }
  }

  private static foam.core.FObjectProperty init_PREDICATE() {

    return foam.core.FObjectProperty.FObjectPropertyBuilder(null) // TODO give context
      .setOf(foam.mlang.predicate.Predicate.CLS_)
      .setType("foam.mlang.predicate.Predicate")
      .setName("predicate")
      .setExpression(null)
      .setForClass_("foam.core.ValidationPredicate")
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

  protected String[] args_factory_() {

    return new String[0];
  }

  public String[] getArgs() {

    if ( ! args_isSet_ ) {
      setProperty("args", args_factory_());
    }
    return args_;
  }

  private String[] args_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String[]) newValue;
  }

  public void setArgs(Object value) {

    boolean hasOldValue = hasPropertySet("args");
    Object oldValue = hasOldValue ?
      getArgs() :
      null;
    String[] castedValue = args_adapt(oldValue, value, hasOldValue);
    
    args_isSet_ = true;
    args_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "args", null };
    if ( hasListeners(args) ) {
      args[2] = getArgs$();
      pub(args);
    }
  }

  private static foam.core.StringArrayProperty init_ARGS() {

    return foam.core.StringArrayProperty.StringArrayPropertyBuilder(null) // TODO give context
      .setName("args")
      .setForClass_("foam.core.ValidationPredicate")
      .build();
  }

  public foam.core.Slot getJsFunc$() {

    if ( jsFunc_$ == null ) {
      jsFunc_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(JS_FUNC)
        .build();
    }
    return jsFunc_$;
  }

  public foam.cross_platform.GenericFunction getJsFunc() {

    if ( ! jsFunc_isSet_ ) {
      return foam.cross_platform.NullFunction.NullFunctionBuilder(null).build();
    }
    return jsFunc_;
  }

  private foam.cross_platform.GenericFunction jsFunc_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (foam.cross_platform.GenericFunction) newValue;
  }

  public void setJsFunc(Object value) {

    boolean hasOldValue = hasPropertySet("jsFunc");
    Object oldValue = hasOldValue ?
      getJsFunc() :
      null;
    foam.cross_platform.GenericFunction castedValue = jsFunc_adapt(oldValue, value, hasOldValue);
    
    jsFunc_isSet_ = true;
    jsFunc_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "jsFunc", null };
    if ( hasListeners(args) ) {
      args[2] = getJsFunc$();
      pub(args);
    }
  }

  private static foam.core.FunctionProperty init_JS_FUNC() {

    return foam.core.FunctionProperty.FunctionPropertyBuilder(null) // TODO give context
      .setName("jsFunc")
      .setExpression(null)
      .setForClass_("foam.core.ValidationPredicate")
      .build();
  }

  public foam.core.Slot getErrorString$() {

    if ( errorString_$ == null ) {
      errorString_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(ERROR_STRING)
        .build();
    }
    return errorString_$;
  }

  public String getErrorString() {

    if ( ! errorString_isSet_ ) {
      return "";
    }
    return errorString_;
  }

  private String errorString_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (String) newValue;
  }

  public void setErrorString(Object value) {

    boolean hasOldValue = hasPropertySet("errorString");
    Object oldValue = hasOldValue ?
      getErrorString() :
      null;
    String castedValue = errorString_adapt(oldValue, value, hasOldValue);
    
    errorString_isSet_ = true;
    errorString_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "errorString", null };
    if ( hasListeners(args) ) {
      args[2] = getErrorString$();
      pub(args);
    }
  }

  private static foam.core.StringProperty init_ERROR_STRING() {

    return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
      .setName("errorString")
      .setForClass_("foam.core.ValidationPredicate")
      .build();
  }

  public foam.core.Slot getJsErr$() {

    if ( jsErr_$ == null ) {
      jsErr_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(JS_ERR)
        .build();
    }
    return jsErr_$;
  }

  public foam.cross_platform.GenericFunction getJsErr() {

    if ( ! jsErr_isSet_ ) {
      return foam.cross_platform.NullFunction.NullFunctionBuilder(null).build();
    }
    return jsErr_;
  }

  private foam.cross_platform.GenericFunction jsErr_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (foam.cross_platform.GenericFunction) newValue;
  }

  public void setJsErr(Object value) {

    boolean hasOldValue = hasPropertySet("jsErr");
    Object oldValue = hasOldValue ?
      getJsErr() :
      null;
    foam.cross_platform.GenericFunction castedValue = jsErr_adapt(oldValue, value, hasOldValue);
    
    jsErr_isSet_ = true;
    jsErr_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "jsErr", null };
    if ( hasListeners(args) ) {
      args[2] = getJsErr$();
      pub(args);
    }
  }

  private static foam.core.FunctionProperty init_JS_ERR() {

    return foam.core.FunctionProperty.FunctionPropertyBuilder(null) // TODO give context
      .setName("jsErr")
      .setExpression(null)
      .setForClass_("foam.core.ValidationPredicate")
      .build();
  }

  public void createErrorSlotFor() {

    throw new RuntimeException("createErrorSlotFor is not implemented");
  }

  public void clearProperty(String name) {

    switch(name) {
    
      case "predicateFactory":
        predicateFactory_isSet_ = false;
        Object[] predicateFactoryArgs = new Object[] { "propertyChange", "predicateFactory", null };
        if ( hasListeners(predicateFactoryArgs) ) {
          predicateFactoryArgs[2] = getPredicateFactory$();
          pub(predicateFactoryArgs);
        }
        return;
    
    
      case "predicate":
        predicate_isSet_ = false;
        Object[] predicateArgs = new Object[] { "propertyChange", "predicate", null };
        if ( hasListeners(predicateArgs) ) {
          predicateArgs[2] = getPredicate$();
          pub(predicateArgs);
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
    
    
      case "jsFunc":
        jsFunc_isSet_ = false;
        Object[] jsFuncArgs = new Object[] { "propertyChange", "jsFunc", null };
        if ( hasListeners(jsFuncArgs) ) {
          jsFuncArgs[2] = getJsFunc$();
          pub(jsFuncArgs);
        }
        return;
    
    
      case "errorString":
        errorString_isSet_ = false;
        Object[] errorStringArgs = new Object[] { "propertyChange", "errorString", null };
        if ( hasListeners(errorStringArgs) ) {
          errorStringArgs[2] = getErrorString$();
          pub(errorStringArgs);
        }
        return;
    
    
      case "jsErr":
        jsErr_isSet_ = false;
        Object[] jsErrArgs = new Object[] { "propertyChange", "jsErr", null };
        if ( hasListeners(jsErrArgs) ) {
          jsErrArgs[2] = getJsErr$();
          pub(jsErrArgs);
        }
        return;
    
    }
    
    super.clearProperty(name);
    
  }

  public Object getProperty(String name) {

    switch(name) {
    
      case "predicateFactory":
        return getPredicateFactory();
    
    
      case "predicate":
        return getPredicate();
    
    
      case "args":
        return getArgs();
    
    
      case "jsFunc":
        return getJsFunc();
    
    
      case "errorString":
        return getErrorString();
    
    
      case "jsErr":
        return getJsErr();
    
    }
    return super.getProperty(name);
  }

  public foam.core.Slot getSlot(String name) {

    switch(name) {
    
      case "predicateFactory":
        return getPredicateFactory$();
    
    
      case "predicate":
        return getPredicate$();
    
    
      case "args":
        return getArgs$();
    
    
      case "jsFunc":
        return getJsFunc$();
    
    
      case "errorString":
        return getErrorString$();
    
    
      case "jsErr":
        return getJsErr$();
    
    }
    return super.getSlot(name);
  }

  public boolean hasPropertySet(String name) {

    switch(name) {
    
      case "predicateFactory":
        return predicateFactory_isSet_;
    
    
      case "predicate":
        return predicate_isSet_;
    
    
      case "args":
        return args_isSet_;
    
    
      case "jsFunc":
        return jsFunc_isSet_;
    
    
      case "errorString":
        return errorString_isSet_;
    
    
      case "jsErr":
        return jsErr_isSet_;
    
    }
    
    return super.hasPropertySet(name);
    
  }

  public void setProperty(String name, Object value) {

    switch(name) {
    
      case "predicateFactory":
        setPredicateFactory((Object) value);
        return;
    
    
      case "predicate":
        setPredicate((foam.mlang.predicate.Predicate) value);
        return;
    
    
      case "args":
        setArgs((String[]) value);
        return;
    
    
      case "jsFunc":
        setJsFunc((foam.cross_platform.GenericFunction) value);
        return;
    
    
      case "errorString":
        setErrorString((String) value);
        return;
    
    
      case "jsErr":
        setJsErr((foam.cross_platform.GenericFunction) value);
        return;
    
    }
    
    super.setProperty(name, value);
    
  }

  protected ValidationPredicate () {

  }

  public foam.cross_platform.FoamClass getCls_() {

    return CLS_;
  }

  public static foam.cross_platform.FoamClass initClassInfo_() {

    return foam.cross_platform.FoamClass.FoamClassBuilder(null) // TODO give context
      .setId("foam.core.ValidationPredicate")
      .setParent(foam.cross_platform.AbstractFObject.CLS_)
      .setAxioms(new Object[] {foam.core.ValidationPredicate.PREDICATE_FACTORY, foam.core.ValidationPredicate.PREDICATE, foam.core.ValidationPredicate.ARGS, foam.core.ValidationPredicate.JS_FUNC, foam.core.ValidationPredicate.ERROR_STRING, foam.core.ValidationPredicate.JS_ERR, foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("createErrorSlotFor")
      .setCode(null)
      .setForClass_("foam.core.ValidationPredicate")
      .setArgs(new foam.core.Argument[] {  })
      .build()})
      .build();
  }

  public static Builder ValidationPredicateBuilder(foam.cross_platform.Context x) {

    return new Builder();
  }
  public static class Builder {

    private boolean jsFunc_isSet_ =
      false;

    private boolean predicateFactory_isSet_ =
      false;

    private boolean predicate_isSet_ =
      false;

    private foam.mlang.predicate.Predicate predicate_;

    private boolean args_isSet_ =
      false;

    private String[] args_;

    private Object predicateFactory_;

    private foam.cross_platform.GenericFunction jsFunc_;

    private boolean errorString_isSet_ =
      false;

    private String errorString_;

    private boolean jsErr_isSet_ =
      false;

    private foam.cross_platform.GenericFunction jsErr_;


    public Builder setPredicateFactory(Object value) {

      predicateFactory_isSet_ = true;
      predicateFactory_ = value;
      return this;
    }

    public Builder setPredicate(foam.mlang.predicate.Predicate value) {

      predicate_isSet_ = true;
      predicate_ = value;
      return this;
    }

    public Builder setArgs(String[] value) {

      args_isSet_ = true;
      args_ = value;
      return this;
    }

    public Builder setJsFunc(foam.cross_platform.GenericFunction value) {

      jsFunc_isSet_ = true;
      jsFunc_ = value;
      return this;
    }

    public Builder setErrorString(String value) {

      errorString_isSet_ = true;
      errorString_ = value;
      return this;
    }

    public Builder setJsErr(foam.cross_platform.GenericFunction value) {

      jsErr_isSet_ = true;
      jsErr_ = value;
      return this;
    }

    private Builder() {

    }

    public ValidationPredicate build() {

      ValidationPredicate o = new ValidationPredicate();
      
      if ( predicateFactory_isSet_ ) {
        o.setPredicateFactory(predicateFactory_);
      }
      
      if ( predicate_isSet_ ) {
        o.setPredicate(predicate_);
      }
      
      if ( args_isSet_ ) {
        o.setArgs(args_);
      }
      
      if ( jsFunc_isSet_ ) {
        o.setJsFunc(jsFunc_);
      }
      
      if ( errorString_isSet_ ) {
        o.setErrorString(errorString_);
      }
      
      if ( jsErr_isSet_ ) {
        o.setJsErr(jsErr_);
      }
      
      o.init();
      return o;
    }
  }
}