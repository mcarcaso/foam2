// WARNING: GENERATED CODE, DO NOT MODIFY BY HAND!
package foam.core;


/**
*   Tracks dependencies for a dynamic function and invalidates if they change.  <pre>  foam.CLASS({name: 'Person', properties: ['fname', 'lname']});  var p = Person.create({fname: 
* 'John', lname: 'Smith'});  var e = foam.core.ExpressionSlot.create({  args: [ p.fname$, p.lname$ ],  code: function(f, l) { return f + ' ' + 
* l; }  });  log(e.get());  e.sub(log);  p.fname = 'Steve';  p.lname = 'Jones';  log(e.get());  Output:  > John Smith  
* > [object Object] propertyChange value [object Object]  > [object Object] propertyChange value [object Object]  > Steve Jones  var p = foam.CLASS({name: 'Person', 
* properties: [ 'f', 'l' ]}).create({f:'John', l: 'Doe'});  var e = foam.core.ExpressionSlot.create({  obj: p,  code: function(f, l) { return f + ' ' 
* + l; }  });  </pre>   
*/
public class ExpressionSlot extends foam.core.PromiseSlot implements foam.core.SlotInterface {

  private boolean value_isSet_ =
    false;

  protected foam.cross_platform.FObject obj_;

  private foam.core.Slot obj_$;

  public static foam.core.FObjectProperty OBJ =
    init_OBJ();

  protected foam.cross_platform.GenericFunction code_;

  private boolean code_isSet_ =
    false;

  private foam.core.Slot code_$;

  public static foam.core.FunctionProperty CODE =
    init_CODE();

  protected foam.core.Slot[] args_;

  private boolean args_isSet_ =
    false;

  private foam.core.Slot args_$;

  public static foam.core.FObjectArray ARGS =
    init_ARGS();

  protected Object value_;

  private boolean obj_isSet_ =
    false;

  private foam.core.Slot value_$;

  public static foam.core.Property VALUE =
    init_VALUE();

  protected foam.core.Detachable cleanup__;

  private boolean cleanup__isSet_ =
    false;

  private foam.core.Slot cleanup__$;

  public static foam.core.FObjectProperty CLEANUP_ =
    init_CLEANUP_();

  private foam.cross_platform.Listener cleanup_listener_var;

  private foam.cross_platform.Listener invalidate_listener_var;

  protected foam.cross_platform.Promise promise_;

  private boolean promise_isSet_ =
    false;

  private foam.core.Slot promise_$;

  public static foam.core.PromiseProperty PROMISE =
    init_PROMISE();

  public static foam.cross_platform.FoamClass CLS_ =
    initClassInfo_();


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

  private foam.cross_platform.FObject obj_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (foam.cross_platform.FObject) newValue;
  }

  public void setObj(Object value) {

    boolean hasOldValue = hasPropertySet("obj");
    Object oldValue = hasOldValue ?
      getObj() :
      null;
    foam.cross_platform.FObject castedValue = obj_adapt(oldValue, value, hasOldValue);
    
    obj_isSet_ = true;
    obj_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "obj", null };
    if ( hasListeners(args) ) {
      args[2] = getObj$();
      pub(args);
    }
  }

  private static foam.core.FObjectProperty init_OBJ() {

    return foam.core.FObjectProperty.FObjectPropertyBuilder(null) // TODO give context
      .setType("foam.core.FObject")
      .setName("obj")
      .setForClass_("foam.core.ExpressionSlot")
      .build();
  }

  public foam.core.Slot getCode$() {

    if ( code_$ == null ) {
      code_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(CODE)
        .build();
    }
    return code_$;
  }

  public foam.cross_platform.GenericFunction getCode() {

    if ( ! code_isSet_ ) {
      return foam.cross_platform.NullFunction.NullFunctionBuilder(null).build();
    }
    return code_;
  }

  private foam.cross_platform.GenericFunction code_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (foam.cross_platform.GenericFunction) newValue;
  }

  public void setCode(Object value) {

    boolean hasOldValue = hasPropertySet("code");
    Object oldValue = hasOldValue ?
      getCode() :
      null;
    foam.cross_platform.GenericFunction castedValue = code_adapt(oldValue, value, hasOldValue);
    
    code_isSet_ = true;
    code_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "code", null };
    if ( hasListeners(args) ) {
      args[2] = getCode$();
      pub(args);
    }
  }

  private static foam.core.FunctionProperty init_CODE() {

    return foam.core.FunctionProperty.FunctionPropertyBuilder(null) // TODO give context
      .setName("code")
      .setForClass_("foam.core.ExpressionSlot")
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

  protected foam.core.Slot[] args_factory_() {

    return new foam.core.Slot[0];
  }

  public foam.core.Slot[] getArgs() {

    if ( ! args_isSet_ ) {
      setProperty("args", args_factory_());
    }
    return args_;
  }

  private foam.core.Slot[] args_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    if ( newValue instanceof String[] == false ) {
      return (foam.core.Slot[]) newValue;
    }
    String[] propNames = (String[]) newValue;
    foam.core.Slot[] slots = new foam.core.Slot[propNames.length];
    for ( int i = 0; i < slots.length ; i++ ) {
      slots[i] = getObj().getSlot(propNames[i]);
    }
    return slots;
  }

  private void args_postSet(Object oldValue, foam.core.Slot[] newValue, boolean oldValueSet) {

    subToArgs_(newValue);
  }

  public void setArgs(Object value) {

    boolean hasOldValue = hasPropertySet("args");
    Object oldValue = hasOldValue ?
      getArgs() :
      null;
    foam.core.Slot[] castedValue = args_adapt(oldValue, value, hasOldValue);
    
    args_isSet_ = true;
    args_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "args", null };
    if ( hasListeners(args) ) {
      args[2] = getArgs$();
      pub(args);
    }
    
    args_postSet(oldValue, castedValue, hasOldValue);
  }

  private static foam.core.FObjectArray init_ARGS() {

    return foam.core.FObjectArray.FObjectArrayBuilder(null) // TODO give context
      .setOf("foam.core.Slot")
      .setType("foam.core.Slot[]")
      .setName("args")
      .setPostSet(null)
      .setExpression(null)
      .setForClass_("foam.core.ExpressionSlot")
      .setAndroidPostSet("subToArgs_(newValue);")
      .setAndroidAdapt("\n        if ( newValue instanceof String[] == false ) {\n          return (foam.core.Slot[]) newValue;\n        }\n        String[] propNames = (String[]) newValue;\n        foam.core.Slot[] slots = new foam.core.Slot[propNames.length];\n        for ( int i = 0; i < slots.length ; i++ ) {\n          slots[i] = getObj().getSlot(propNames[i]);\n        }\n        return slots;\n      ")
      .build();
  }

  public foam.core.Slot getValue$() {

    if ( value_$ == null ) {
      value_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(VALUE)
        .build();
    }
    return value_$;
  }

  protected Object value_factory_() {

    Object[] args = new Object[getArgs().length];
    for ( int i = 0 ; i < args.length ; i++ ) {
      args[i] = getArgs()[i].slotGet();
    }
    return getCode().executeFunction(args);
  }

  public Object getValue() {

    if ( ! value_isSet_ ) {
      setProperty("value", value_factory_());
    }
    return value_;
  }

  private Object value_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  private Object value_preSet(Object oldValue, Object newValue, boolean oldValueSet) {

    if ( newValue instanceof foam.cross_platform.Promise ) {
      setPromise((foam.cross_platform.Promise) newValue);
      newValue = oldValue;
    } else {
      setPromise(null);
    }
    return newValue;
  }

  public void setValue(Object value) {

    boolean hasOldValue = hasPropertySet("value");
    Object oldValue = hasOldValue ?
      getValue() :
      null;
    Object castedValue = value_adapt(oldValue, value, hasOldValue);
    
    castedValue = value_preSet(oldValue, castedValue, hasOldValue);
    
    value_isSet_ = true;
    value_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "value", null };
    if ( hasListeners(args) ) {
      args[2] = getValue$();
      pub(args);
    }
  }

  private static foam.core.Property init_VALUE() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("value")
      .setFactory(null)
      .setPreSet(null)
      .setForClass_("foam.core.SimpleSlot")
      .setAndroidPreSet("\n        if ( newValue instanceof foam.cross_platform.Promise ) {\n          setPromise((foam.cross_platform.Promise) newValue);\n          newValue = oldValue;\n        } else {\n          setPromise(null);\n        }\n        return newValue;\n      ")
      .setAndroidFactory("\n        Object[] args = new Object[getArgs().length];\n        for ( int i = 0 ; i < args.length ; i++ ) {\n          args[i] = getArgs()[i].slotGet();\n        }\n        return getCode().executeFunction(args);\n      ")
      .build();
  }

  public foam.core.Slot getCleanup_$() {

    if ( cleanup__$ == null ) {
      cleanup__$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(CLEANUP_)
        .build();
    }
    return cleanup__$;
  }

  public foam.core.Detachable getCleanup_() {

    if ( ! cleanup__isSet_ ) {
      return null;
    }
    return cleanup__;
  }

  private foam.core.Detachable cleanup__adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (foam.core.Detachable) newValue;
  }

  public void setCleanup_(Object value) {

    boolean hasOldValue = hasPropertySet("cleanup_");
    Object oldValue = hasOldValue ?
      getCleanup_() :
      null;
    foam.core.Detachable castedValue = cleanup__adapt(oldValue, value, hasOldValue);
    
    cleanup__isSet_ = true;
    cleanup__ = castedValue;
    Object[] args = new Object[] { "propertyChange", "cleanup_", null };
    if ( hasListeners(args) ) {
      args[2] = getCleanup_$();
      pub(args);
    }
  }

  private static foam.core.FObjectProperty init_CLEANUP_() {

    return foam.core.FObjectProperty.FObjectPropertyBuilder(null) // TODO give context
      .setOf(foam.core.Detachable.CLS_)
      .setType("foam.core.Detachable")
      .setName("cleanup_")
      .setDocumentation("Detachable to cleanup old subs when obj changes")
      .setForClass_("foam.core.ExpressionSlot")
      .build();
  }

  public void init() {

    final foam.cross_platform.Listener l = cleanup_listener();
    onDetach(new foam.core.Detachable() {
      public void detach() { l.executeListener(null, null); }
    });
  }

  public void set() {

    throw new RuntimeException("set is not implemented");
  }

  public void subToArgs_(foam.core.Slot[] args) {

    cleanup(null, null);
    final foam.core.Detachable[] subs = new foam.core.Detachable[args.length];
    for ( int i = 0; i < args.length; i++ ) {
      subs[i] = args[i].slotSub(invalidate_listener());
    }
    setCleanup_(new foam.core.Detachable() {
      public void detach() {
        for ( foam.core.Detachable sub : subs ) sub.detach();
      }
    });
  }

  public void cleanup(foam.core.Detachable sub, Object[] args) {

    if ( getCleanup_() != null ) getCleanup_().detach();
  }

  public foam.cross_platform.Listener cleanup_listener() {

    if ( cleanup_listener_var == null ) {
      final ExpressionSlot obj = this;
      cleanup_listener_var = new foam.cross_platform.Listener() {
        public void executeListener(foam.core.Detachable sub, Object[] args) {
          obj.cleanup(sub, args);
        }
      };
    }
    return cleanup_listener_var;
  }

  public void invalidate(foam.core.Detachable sub, Object[] args) {

    clearProperty("value");
  }

  public foam.cross_platform.Listener invalidate_listener() {

    if ( invalidate_listener_var == null ) {
      final ExpressionSlot obj = this;
      invalidate_listener_var = new foam.cross_platform.Listener() {
        public void executeListener(foam.core.Detachable sub, Object[] args) {
          obj.invalidate(sub, args);
        }
      };
    }
    return invalidate_listener_var;
  }

  public foam.core.Slot getPromise$() {

    if ( promise_$ == null ) {
      promise_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(PROMISE)
        .build();
    }
    return promise_$;
  }

  public foam.cross_platform.Promise getPromise() {

    if ( ! promise_isSet_ ) {
      return null;
    }
    return promise_;
  }

  private foam.cross_platform.Promise promise_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (foam.cross_platform.Promise) newValue;
  }

  private void promise_postSet(Object oldValue, foam.cross_platform.Promise newValue, boolean oldValueSet) {

    if ( newValue == null ) return;
    final PromiseSlot self = this;
    final foam.cross_platform.Promise p = newValue;
    AsyncFunction_create()
      .setDelegate(new foam.cross_platform.GenericFunction() {
        public Object executeFunction(Object[] args) {
          if ( self.getPromise() != p ) return null;
          self.setValue(self.getPromise().get());
          return null;
        }
      })
      .build()
      .executeFunction(null);
  }

  public void setPromise(Object value) {

    boolean hasOldValue = hasPropertySet("promise");
    Object oldValue = hasOldValue ?
      getPromise() :
      null;
    foam.cross_platform.Promise castedValue = promise_adapt(oldValue, value, hasOldValue);
    
    promise_isSet_ = true;
    promise_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "promise", null };
    if ( hasListeners(args) ) {
      args[2] = getPromise$();
      pub(args);
    }
    
    promise_postSet(oldValue, castedValue, hasOldValue);
  }

  private static foam.core.PromiseProperty init_PROMISE() {

    return foam.core.PromiseProperty.PromisePropertyBuilder(null) // TODO give context
      .setName("promise")
      .setPostSet(null)
      .setForClass_("foam.core.PromiseSlot")
      .setAndroidPostSet("\n        if ( newValue == null ) return;\n        final PromiseSlot self = this;\n        final foam.cross_platform.Promise p = newValue;\n        AsyncFunction_create()\n          .setDelegate(new foam.cross_platform.GenericFunction() {\n            public Object executeFunction(Object[] args) {\n              if ( self.getPromise() != p ) return null;\n              self.setValue(self.getPromise().get());\n              return null;\n            }\n          })\n          .build()\n          .executeFunction(null);\n      ")
      .build();
  }

  protected foam.cross_platform.AsyncFunction.Builder AsyncFunction_create() {

    return foam.cross_platform.AsyncFunction.AsyncFunctionBuilder(getSubX());
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
    
    
      case "code":
        code_isSet_ = false;
        Object[] codeArgs = new Object[] { "propertyChange", "code", null };
        if ( hasListeners(codeArgs) ) {
          codeArgs[2] = getCode$();
          pub(codeArgs);
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
    
    
      case "value":
        value_isSet_ = false;
        Object[] valueArgs = new Object[] { "propertyChange", "value", null };
        if ( hasListeners(valueArgs) ) {
          valueArgs[2] = getValue$();
          pub(valueArgs);
        }
        return;
    
    
      case "cleanup_":
        cleanup__isSet_ = false;
        Object[] cleanup_Args = new Object[] { "propertyChange", "cleanup_", null };
        if ( hasListeners(cleanup_Args) ) {
          cleanup_Args[2] = getCleanup_$();
          pub(cleanup_Args);
        }
        return;
    
    
      case "promise":
        promise_isSet_ = false;
        Object[] promiseArgs = new Object[] { "propertyChange", "promise", null };
        if ( hasListeners(promiseArgs) ) {
          promiseArgs[2] = getPromise$();
          pub(promiseArgs);
        }
        return;
    
    }
    
    super.clearProperty(name);
    
  }

  public Object getProperty(String name) {

    switch(name) {
    
      case "obj":
        return getObj();
    
    
      case "code":
        return getCode();
    
    
      case "args":
        return getArgs();
    
    
      case "value":
        return getValue();
    
    
      case "cleanup_":
        return getCleanup_();
    
    
      case "promise":
        return getPromise();
    
    }
    return super.getProperty(name);
  }

  public foam.core.Slot getSlot(String name) {

    switch(name) {
    
      case "obj":
        return getObj$();
    
    
      case "code":
        return getCode$();
    
    
      case "args":
        return getArgs$();
    
    
      case "value":
        return getValue$();
    
    
      case "cleanup_":
        return getCleanup_$();
    
    
      case "promise":
        return getPromise$();
    
    }
    return super.getSlot(name);
  }

  public boolean hasPropertySet(String name) {

    switch(name) {
    
      case "obj":
        return obj_isSet_;
    
    
      case "code":
        return code_isSet_;
    
    
      case "args":
        return args_isSet_;
    
    
      case "value":
        return value_isSet_;
    
    
      case "cleanup_":
        return cleanup__isSet_;
    
    
      case "promise":
        return promise_isSet_;
    
    }
    
    return super.hasPropertySet(name);
    
  }

  public void setProperty(String name, Object value) {

    switch(name) {
    
      case "obj":
        setObj((foam.cross_platform.FObject) value);
        return;
    
    
      case "code":
        setCode((foam.cross_platform.GenericFunction) value);
        return;
    
    
      case "args":
        setArgs((foam.core.Slot[]) value);
        return;
    
    
      case "value":
        setValue((Object) value);
        return;
    
    
      case "cleanup_":
        setCleanup_((foam.core.Detachable) value);
        return;
    
    
      case "promise":
        setPromise((foam.cross_platform.Promise) value);
        return;
    
    }
    
    super.setProperty(name, value);
    
  }

  protected ExpressionSlot () {

  }

  public foam.cross_platform.FoamClass getCls_() {

    return CLS_;
  }

  public static foam.cross_platform.FoamClass initClassInfo_() {

    return foam.cross_platform.FoamClass.FoamClassBuilder(null) // TODO give context
      .setId("foam.core.ExpressionSlot")
      .setParent(foam.core.PromiseSlot.CLS_)
      .setAxioms(new Object[] {foam.core.ExpressionSlot.OBJ, foam.core.ExpressionSlot.CODE, foam.core.ExpressionSlot.ARGS, foam.core.ExpressionSlot.CLEANUP_, foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("subToArgs_")
      .setCode(null)
      .setForClass_("foam.core.ExpressionSlot")
      .setArgs(new foam.core.Argument[] { foam.core.Argument.ArgumentBuilder(null) // TODO give context
      .setName("args")
      .setType("foam.core.Slot[]")
      .build() })
      .setAndroidCode("\n        cleanup(null, null);\n        final foam.core.Detachable[] subs = new foam.core.Detachable[args.length];\n        for ( int i = 0; i < args.length; i++ ) {\n          subs[i] = args[i].slotSub(invalidate_listener());\n        }\n        setCleanup_(new foam.core.Detachable() {\n          public void detach() {\n            for ( foam.core.Detachable sub : subs ) sub.detach();\n          }\n        });\n      ")
      .build(), foam.core.Listener.ListenerBuilder(null) // TODO give context
      .setArgs(new foam.core.Argument[] { foam.core.Argument.ArgumentBuilder(null) // TODO give context
      .setName("sub")
      .setType("Detachable")
      .build(), foam.core.Argument.ArgumentBuilder(null) // TODO give context
      .setName("args")
      .setType("Object[]")
      .build() })
      .setName("cleanup")
      .setCode(null)
      .setForClass_("foam.core.ExpressionSlot")
      .setAndroidCode("\n        if ( getCleanup_() != null ) getCleanup_().detach();\n      ")
      .build(), foam.core.Listener.ListenerBuilder(null) // TODO give context
      .setArgs(new foam.core.Argument[] { foam.core.Argument.ArgumentBuilder(null) // TODO give context
      .setName("sub")
      .setType("Detachable")
      .build(), foam.core.Argument.ArgumentBuilder(null) // TODO give context
      .setName("args")
      .setType("Object[]")
      .build() })
      .setName("invalidate")
      .setCode(null)
      .setForClass_("foam.core.ExpressionSlot")
      .setAndroidCode("\n        clearProperty(\"value\");\n      ")
      .build()})
      .build();
  }

  public static Builder ExpressionSlotBuilder(foam.cross_platform.Context x) {

    return new Builder();
  }
  public static class Builder {

    private boolean value_isSet_ =
      false;

    private boolean obj_isSet_ =
      false;

    private boolean code_isSet_ =
      false;

    private foam.cross_platform.GenericFunction code_;

    private boolean args_isSet_ =
      false;

    private foam.core.Slot[] args_;

    private foam.cross_platform.FObject obj_;

    private Object value_;

    private boolean cleanup__isSet_ =
      false;

    private foam.core.Detachable cleanup__;

    private boolean promise_isSet_ =
      false;

    private foam.cross_platform.Promise promise_;


    public Builder setObj(foam.cross_platform.FObject value) {

      obj_isSet_ = true;
      obj_ = value;
      return this;
    }

    public Builder setCode(foam.cross_platform.GenericFunction value) {

      code_isSet_ = true;
      code_ = value;
      return this;
    }

    public Builder setArgs(foam.core.Slot[] value) {

      args_isSet_ = true;
      args_ = value;
      return this;
    }

    public Builder setValue(Object value) {

      value_isSet_ = true;
      value_ = value;
      return this;
    }

    public Builder setCleanup_(foam.core.Detachable value) {

      cleanup__isSet_ = true;
      cleanup__ = value;
      return this;
    }

    public Builder setPromise(foam.cross_platform.Promise value) {

      promise_isSet_ = true;
      promise_ = value;
      return this;
    }

    private Builder() {

    }

    public ExpressionSlot build() {

      ExpressionSlot o = new ExpressionSlot();
      
      if ( obj_isSet_ ) {
        o.setObj(obj_);
      }
      
      if ( code_isSet_ ) {
        o.setCode(code_);
      }
      
      if ( args_isSet_ ) {
        o.setArgs(args_);
      }
      
      if ( value_isSet_ ) {
        o.setValue(value_);
      }
      
      if ( cleanup__isSet_ ) {
        o.setCleanup_(cleanup__);
      }
      
      if ( promise_isSet_ ) {
        o.setPromise(promise_);
      }
      
      o.init();
      return o;
    }
  }
}