// WARNING: GENERATED CODE, DO NOT MODIFY BY HAND!
package foam.parse;


public class StringPStream extends foam.cross_platform.AbstractFObject {

  protected Object tail_;

  protected Object str_;

  private foam.core.Slot str_$;

  public static foam.core.Simple STR =
    init_STR();

  protected Object pos_;

  private boolean pos_isSet_ =
    false;

  private foam.core.Slot pos_$;

  public static foam.core.Simple POS =
    init_POS();

  protected Object head_;

  private boolean head_isSet_ =
    false;

  private foam.core.Slot head_$;

  public static foam.core.Property HEAD =
    init_HEAD();

  private boolean str_isSet_ =
    false;

  private boolean tail_isSet_ =
    false;

  private foam.core.Slot tail_$;

  public static foam.core.Property TAIL =
    init_TAIL();

  protected Object valid_;

  private boolean valid_isSet_ =
    false;

  private foam.core.Slot valid_$;

  public static foam.core.Property VALID =
    init_VALID();

  protected Object value_;

  private boolean value_isSet_ =
    false;

  private foam.core.Slot value_$;

  public static foam.core.Property VALUE =
    init_VALUE();

  public static foam.cross_platform.FoamClass CLS_ =
    initClassInfo_();


  public foam.core.Slot getStr$() {

    if ( str_$ == null ) {
      str_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(STR)
        .build();
    }
    return str_$;
  }

  public Object getStr() {

    if ( ! str_isSet_ ) {
      return null;
    }
    return str_;
  }

  private Object str_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setStr(Object value) {

    boolean hasOldValue = hasPropertySet("str");
    Object oldValue = hasOldValue ?
      getStr() :
      null;
    Object castedValue = str_adapt(oldValue, value, hasOldValue);
    
    str_isSet_ = true;
    str_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "str", null };
    if ( hasListeners(args) ) {
      args[2] = getStr$();
      pub(args);
    }
  }

  private static foam.core.Simple init_STR() {

    return foam.core.Simple.SimpleBuilder(null) // TODO give context
      .setName("str")
      .setForClass_("foam.parse.StringPStream")
      .build();
  }

  public foam.core.Slot getPos$() {

    if ( pos_$ == null ) {
      pos_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(POS)
        .build();
    }
    return pos_$;
  }

  public Object getPos() {

    if ( ! pos_isSet_ ) {
      return null;
    }
    return pos_;
  }

  private Object pos_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setPos(Object value) {

    boolean hasOldValue = hasPropertySet("pos");
    Object oldValue = hasOldValue ?
      getPos() :
      null;
    Object castedValue = pos_adapt(oldValue, value, hasOldValue);
    
    pos_isSet_ = true;
    pos_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "pos", null };
    if ( hasListeners(args) ) {
      args[2] = getPos$();
      pub(args);
    }
  }

  private static foam.core.Simple init_POS() {

    return foam.core.Simple.SimpleBuilder(null) // TODO give context
      .setName("pos")
      .setForClass_("foam.parse.StringPStream")
      .build();
  }

  public foam.core.Slot getHead$() {

    if ( head_$ == null ) {
      head_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(HEAD)
        .build();
    }
    return head_$;
  }

  public Object getHead() {

    if ( ! head_isSet_ ) {
      return null;
    }
    return head_;
  }

  private Object head_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setHead(Object value) {

    boolean hasOldValue = hasPropertySet("head");
    Object oldValue = hasOldValue ?
      getHead() :
      null;
    Object castedValue = head_adapt(oldValue, value, hasOldValue);
    
    head_isSet_ = true;
    head_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "head", null };
    if ( hasListeners(args) ) {
      args[2] = getHead$();
      pub(args);
    }
  }

  private static foam.core.Property init_HEAD() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("head")
      .setGetter(null)
      .setForClass_("foam.parse.StringPStream")
      .build();
  }

  public foam.core.Slot getTail$() {

    if ( tail_$ == null ) {
      tail_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(TAIL)
        .build();
    }
    return tail_$;
  }

  public Object getTail() {

    if ( ! tail_isSet_ ) {
      return null;
    }
    return tail_;
  }

  private Object tail_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setTail(Object value) {

    boolean hasOldValue = hasPropertySet("tail");
    Object oldValue = hasOldValue ?
      getTail() :
      null;
    Object castedValue = tail_adapt(oldValue, value, hasOldValue);
    
    tail_isSet_ = true;
    tail_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "tail", null };
    if ( hasListeners(args) ) {
      args[2] = getTail$();
      pub(args);
    }
  }

  private static foam.core.Property init_TAIL() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("tail")
      .setGetter(null)
      .setSetter(null)
      .setForClass_("foam.parse.StringPStream")
      .build();
  }

  public foam.core.Slot getValid$() {

    if ( valid_$ == null ) {
      valid_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(VALID)
        .build();
    }
    return valid_$;
  }

  public Object getValid() {

    if ( ! valid_isSet_ ) {
      return null;
    }
    return valid_;
  }

  private Object valid_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setValid(Object value) {

    boolean hasOldValue = hasPropertySet("valid");
    Object oldValue = hasOldValue ?
      getValid() :
      null;
    Object castedValue = valid_adapt(oldValue, value, hasOldValue);
    
    valid_isSet_ = true;
    valid_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "valid", null };
    if ( hasListeners(args) ) {
      args[2] = getValid$();
      pub(args);
    }
  }

  private static foam.core.Property init_VALID() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("valid")
      .setGetter(null)
      .setForClass_("foam.parse.StringPStream")
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

  public Object getValue() {

    if ( ! value_isSet_ ) {
      return null;
    }
    return value_;
  }

  private Object value_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setValue(Object value) {

    boolean hasOldValue = hasPropertySet("value");
    Object oldValue = hasOldValue ?
      getValue() :
      null;
    Object castedValue = value_adapt(oldValue, value, hasOldValue);
    
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
      .setGetter(null)
      .setSetter(null)
      .setForClass_("foam.parse.StringPStream")
      .build();
  }

  public void initArgs() {

    throw new RuntimeException("initArgs is not implemented");
  }

  public void setValue() {

    throw new RuntimeException("setValue is not implemented");
  }

  public void setString() {

    throw new RuntimeException("setString is not implemented");
  }

  public void substring() {

    throw new RuntimeException("substring is not implemented");
  }

  public void apply() {

    throw new RuntimeException("apply is not implemented");
  }

  public void compareTo() {

    throw new RuntimeException("compareTo is not implemented");
  }

  public void clearProperty(String name) {

    switch(name) {
    
      case "str":
        str_isSet_ = false;
        Object[] strArgs = new Object[] { "propertyChange", "str", null };
        if ( hasListeners(strArgs) ) {
          strArgs[2] = getStr$();
          pub(strArgs);
        }
        return;
    
    
      case "pos":
        pos_isSet_ = false;
        Object[] posArgs = new Object[] { "propertyChange", "pos", null };
        if ( hasListeners(posArgs) ) {
          posArgs[2] = getPos$();
          pub(posArgs);
        }
        return;
    
    
      case "head":
        head_isSet_ = false;
        Object[] headArgs = new Object[] { "propertyChange", "head", null };
        if ( hasListeners(headArgs) ) {
          headArgs[2] = getHead$();
          pub(headArgs);
        }
        return;
    
    
      case "tail":
        tail_isSet_ = false;
        Object[] tailArgs = new Object[] { "propertyChange", "tail", null };
        if ( hasListeners(tailArgs) ) {
          tailArgs[2] = getTail$();
          pub(tailArgs);
        }
        return;
    
    
      case "valid":
        valid_isSet_ = false;
        Object[] validArgs = new Object[] { "propertyChange", "valid", null };
        if ( hasListeners(validArgs) ) {
          validArgs[2] = getValid$();
          pub(validArgs);
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
    
    }
    
    super.clearProperty(name);
    
  }

  public Object getProperty(String name) {

    switch(name) {
    
      case "str":
        return getStr();
    
    
      case "pos":
        return getPos();
    
    
      case "head":
        return getHead();
    
    
      case "tail":
        return getTail();
    
    
      case "valid":
        return getValid();
    
    
      case "value":
        return getValue();
    
    }
    return super.getProperty(name);
  }

  public foam.core.Slot getSlot(String name) {

    switch(name) {
    
      case "str":
        return getStr$();
    
    
      case "pos":
        return getPos$();
    
    
      case "head":
        return getHead$();
    
    
      case "tail":
        return getTail$();
    
    
      case "valid":
        return getValid$();
    
    
      case "value":
        return getValue$();
    
    }
    return super.getSlot(name);
  }

  public boolean hasPropertySet(String name) {

    switch(name) {
    
      case "str":
        return str_isSet_;
    
    
      case "pos":
        return pos_isSet_;
    
    
      case "head":
        return head_isSet_;
    
    
      case "tail":
        return tail_isSet_;
    
    
      case "valid":
        return valid_isSet_;
    
    
      case "value":
        return value_isSet_;
    
    }
    
    return super.hasPropertySet(name);
    
  }

  public void setProperty(String name, Object value) {

    switch(name) {
    
      case "str":
        setStr((Object) value);
        return;
    
    
      case "pos":
        setPos((Object) value);
        return;
    
    
      case "head":
        setHead((Object) value);
        return;
    
    
      case "tail":
        setTail((Object) value);
        return;
    
    
      case "valid":
        setValid((Object) value);
        return;
    
    
      case "value":
        setValue((Object) value);
        return;
    
    }
    
    super.setProperty(name, value);
    
  }

  protected StringPStream () {

  }

  public foam.cross_platform.FoamClass getCls_() {

    return CLS_;
  }

  public static foam.cross_platform.FoamClass initClassInfo_() {

    return foam.cross_platform.FoamClass.FoamClassBuilder(null) // TODO give context
      .setId("foam.parse.StringPStream")
      .setParent(foam.cross_platform.AbstractFObject.CLS_)
      .setAxioms(new Object[] {foam.parse.StringPStream.STR, foam.parse.StringPStream.POS, foam.parse.StringPStream.HEAD, foam.parse.StringPStream.TAIL, foam.parse.StringPStream.VALID, foam.parse.StringPStream.VALUE, foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("setValue")
      .setCode(null)
      .setForClass_("foam.parse.StringPStream")
      .setArgs(new foam.core.Argument[] {  })
      .build(), foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("setString")
      .setCode(null)
      .setForClass_("foam.parse.StringPStream")
      .setArgs(new foam.core.Argument[] {  })
      .build(), foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("substring")
      .setCode(null)
      .setForClass_("foam.parse.StringPStream")
      .setArgs(new foam.core.Argument[] {  })
      .build(), foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("apply")
      .setCode(null)
      .setForClass_("foam.parse.StringPStream")
      .setArgs(new foam.core.Argument[] {  })
      .build()})
      .build();
  }

  public static Builder StringPStreamBuilder(foam.cross_platform.Context x) {

    return new Builder();
  }
  public static class Builder {

    private boolean tail_isSet_ =
      false;

    private boolean str_isSet_ =
      false;

    private boolean pos_isSet_ =
      false;

    private Object pos_;

    private boolean head_isSet_ =
      false;

    private Object head_;

    private Object str_;

    private Object tail_;

    private boolean valid_isSet_ =
      false;

    private Object valid_;

    private boolean value_isSet_ =
      false;

    private Object value_;


    public Builder setStr(Object value) {

      str_isSet_ = true;
      str_ = value;
      return this;
    }

    public Builder setPos(Object value) {

      pos_isSet_ = true;
      pos_ = value;
      return this;
    }

    public Builder setHead(Object value) {

      head_isSet_ = true;
      head_ = value;
      return this;
    }

    public Builder setTail(Object value) {

      tail_isSet_ = true;
      tail_ = value;
      return this;
    }

    public Builder setValid(Object value) {

      valid_isSet_ = true;
      valid_ = value;
      return this;
    }

    public Builder setValue(Object value) {

      value_isSet_ = true;
      value_ = value;
      return this;
    }

    private Builder() {

    }

    public StringPStream build() {

      StringPStream o = new StringPStream();
      
      if ( str_isSet_ ) {
        o.setStr(str_);
      }
      
      if ( pos_isSet_ ) {
        o.setPos(pos_);
      }
      
      if ( head_isSet_ ) {
        o.setHead(head_);
      }
      
      if ( tail_isSet_ ) {
        o.setTail(tail_);
      }
      
      if ( valid_isSet_ ) {
        o.setValid(valid_);
      }
      
      if ( value_isSet_ ) {
        o.setValue(value_);
      }
      
      o.init();
      return o;
    }
  }
}