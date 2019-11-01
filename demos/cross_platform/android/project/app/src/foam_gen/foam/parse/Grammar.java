// WARNING: GENERATED CODE, DO NOT MODIFY BY HAND!
package foam.parse;


public class Grammar extends foam.cross_platform.AbstractFObject {

  protected Object ps_;

  protected foam.parse.PSymbol[] symbols_;

  private foam.core.Slot symbols_$;

  public static foam.core.FObjectArray SYMBOLS =
    init_SYMBOLS();

  protected Object symbolMap__;

  private boolean symbolMap__isSet_ =
    false;

  private foam.core.Slot symbolMap__$;

  public static foam.core.Property SYMBOL_MAP_ =
    init_SYMBOL_MAP_();

  private boolean symbols_isSet_ =
    false;

  private boolean ps_isSet_ =
    false;

  private foam.core.Slot ps_$;

  public static foam.core.Property PS =
    init_PS();

  protected Object lastStart_;

  private boolean lastStart_isSet_ =
    false;

  private foam.core.Slot lastStart_$;

  public static foam.core.Property LAST_START =
    init_LAST_START();

  public static foam.cross_platform.FoamClass CLS_ =
    initClassInfo_();


  protected foam.parse.StringPStream.Builder StringPStream_create() {

    return foam.parse.StringPStream.StringPStreamBuilder(getSubX());
  }

  protected foam.parse.ParserWithAction.Builder ParserWithAction_create() {

    return foam.parse.ParserWithAction.ParserWithActionBuilder(getSubX());
  }

  public foam.core.Slot getSymbols$() {

    if ( symbols_$ == null ) {
      symbols_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(SYMBOLS)
        .build();
    }
    return symbols_$;
  }

  protected foam.parse.PSymbol[] symbols_factory_() {

    return new foam.parse.PSymbol[0];
  }

  public foam.parse.PSymbol[] getSymbols() {

    if ( ! symbols_isSet_ ) {
      setProperty("symbols", symbols_factory_());
    }
    return symbols_;
  }

  private foam.parse.PSymbol[] symbols_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (foam.parse.PSymbol[]) newValue;
  }

  public void setSymbols(Object value) {

    boolean hasOldValue = hasPropertySet("symbols");
    Object oldValue = hasOldValue ?
      getSymbols() :
      null;
    foam.parse.PSymbol[] castedValue = symbols_adapt(oldValue, value, hasOldValue);
    
    symbols_isSet_ = true;
    symbols_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "symbols", null };
    if ( hasListeners(args) ) {
      args[2] = getSymbols$();
      pub(args);
    }
  }

  private static foam.core.FObjectArray init_SYMBOLS() {

    return foam.core.FObjectArray.FObjectArrayBuilder(null) // TODO give context
      .setOf("foam.parse.PSymbol")
      .setType("foam.parse.PSymbol[]")
      .setAdapt(null)
      .setName("symbols")
      .setForClass_("foam.parse.Grammar")
      .build();
  }

  public foam.core.Slot getSymbolMap_$() {

    if ( symbolMap__$ == null ) {
      symbolMap__$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(SYMBOL_MAP_)
        .build();
    }
    return symbolMap__$;
  }

  public Object getSymbolMap_() {

    if ( ! symbolMap__isSet_ ) {
      return null;
    }
    return symbolMap__;
  }

  private Object symbolMap__adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setSymbolMap_(Object value) {

    boolean hasOldValue = hasPropertySet("symbolMap_");
    Object oldValue = hasOldValue ?
      getSymbolMap_() :
      null;
    Object castedValue = symbolMap__adapt(oldValue, value, hasOldValue);
    
    symbolMap__isSet_ = true;
    symbolMap__ = castedValue;
    Object[] args = new Object[] { "propertyChange", "symbolMap_", null };
    if ( hasListeners(args) ) {
      args[2] = getSymbolMap_$();
      pub(args);
    }
  }

  private static foam.core.Property init_SYMBOL_MAP_() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("symbolMap_")
      .setExpression(null)
      .setForClass_("foam.parse.Grammar")
      .build();
  }

  public foam.core.Slot getPs$() {

    if ( ps_$ == null ) {
      ps_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(PS)
        .build();
    }
    return ps_$;
  }

  public Object getPs() {

    if ( ! ps_isSet_ ) {
      return null;
    }
    return ps_;
  }

  private Object ps_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setPs(Object value) {

    boolean hasOldValue = hasPropertySet("ps");
    Object oldValue = hasOldValue ?
      getPs() :
      null;
    Object castedValue = ps_adapt(oldValue, value, hasOldValue);
    
    ps_isSet_ = true;
    ps_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "ps", null };
    if ( hasListeners(args) ) {
      args[2] = getPs$();
      pub(args);
    }
  }

  private static foam.core.Property init_PS() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("ps")
      .setFactory(null)
      .setForClass_("foam.parse.Grammar")
      .build();
  }

  public foam.core.Slot getLastStart$() {

    if ( lastStart_$ == null ) {
      lastStart_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(LAST_START)
        .build();
    }
    return lastStart_$;
  }

  public Object getLastStart() {

    if ( ! lastStart_isSet_ ) {
      return null;
    }
    return lastStart_;
  }

  private Object lastStart_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setLastStart(Object value) {

    boolean hasOldValue = hasPropertySet("lastStart");
    Object oldValue = hasOldValue ?
      getLastStart() :
      null;
    Object castedValue = lastStart_adapt(oldValue, value, hasOldValue);
    
    lastStart_isSet_ = true;
    lastStart_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "lastStart", null };
    if ( hasListeners(args) ) {
      args[2] = getLastStart$();
      pub(args);
    }
  }

  private static foam.core.Property init_LAST_START() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("lastStart")
      .setForClass_("foam.parse.Grammar")
      .build();
  }

  public void parseString() {

    throw new RuntimeException("parseString is not implemented");
  }

  public void getLastError() {

    throw new RuntimeException("getLastError is not implemented");
  }

  public void getSymbol() {

    throw new RuntimeException("getSymbol is not implemented");
  }

  public void addSymbol() {

    throw new RuntimeException("addSymbol is not implemented");
  }

  public void addActions() {

    throw new RuntimeException("addActions is not implemented");
  }

  public void addAction() {

    throw new RuntimeException("addAction is not implemented");
  }

  public void clearProperty(String name) {

    switch(name) {
    
      case "symbols":
        symbols_isSet_ = false;
        Object[] symbolsArgs = new Object[] { "propertyChange", "symbols", null };
        if ( hasListeners(symbolsArgs) ) {
          symbolsArgs[2] = getSymbols$();
          pub(symbolsArgs);
        }
        return;
    
    
      case "symbolMap_":
        symbolMap__isSet_ = false;
        Object[] symbolMap_Args = new Object[] { "propertyChange", "symbolMap_", null };
        if ( hasListeners(symbolMap_Args) ) {
          symbolMap_Args[2] = getSymbolMap_$();
          pub(symbolMap_Args);
        }
        return;
    
    
      case "ps":
        ps_isSet_ = false;
        Object[] psArgs = new Object[] { "propertyChange", "ps", null };
        if ( hasListeners(psArgs) ) {
          psArgs[2] = getPs$();
          pub(psArgs);
        }
        return;
    
    
      case "lastStart":
        lastStart_isSet_ = false;
        Object[] lastStartArgs = new Object[] { "propertyChange", "lastStart", null };
        if ( hasListeners(lastStartArgs) ) {
          lastStartArgs[2] = getLastStart$();
          pub(lastStartArgs);
        }
        return;
    
    }
    
    super.clearProperty(name);
    
  }

  public Object getProperty(String name) {

    switch(name) {
    
      case "symbols":
        return getSymbols();
    
    
      case "symbolMap_":
        return getSymbolMap_();
    
    
      case "ps":
        return getPs();
    
    
      case "lastStart":
        return getLastStart();
    
    }
    return super.getProperty(name);
  }

  public foam.core.Slot getSlot(String name) {

    switch(name) {
    
      case "symbols":
        return getSymbols$();
    
    
      case "symbolMap_":
        return getSymbolMap_$();
    
    
      case "ps":
        return getPs$();
    
    
      case "lastStart":
        return getLastStart$();
    
    }
    return super.getSlot(name);
  }

  public boolean hasPropertySet(String name) {

    switch(name) {
    
      case "symbols":
        return symbols_isSet_;
    
    
      case "symbolMap_":
        return symbolMap__isSet_;
    
    
      case "ps":
        return ps_isSet_;
    
    
      case "lastStart":
        return lastStart_isSet_;
    
    }
    
    return super.hasPropertySet(name);
    
  }

  public void setProperty(String name, Object value) {

    switch(name) {
    
      case "symbols":
        setSymbols((foam.parse.PSymbol[]) value);
        return;
    
    
      case "symbolMap_":
        setSymbolMap_((Object) value);
        return;
    
    
      case "ps":
        setPs((Object) value);
        return;
    
    
      case "lastStart":
        setLastStart((Object) value);
        return;
    
    }
    
    super.setProperty(name, value);
    
  }

  protected Grammar () {

  }

  public foam.cross_platform.FoamClass getCls_() {

    return CLS_;
  }

  public static foam.cross_platform.FoamClass initClassInfo_() {

    return foam.cross_platform.FoamClass.FoamClassBuilder(null) // TODO give context
      .setId("foam.parse.Grammar")
      .setParent(foam.cross_platform.AbstractFObject.CLS_)
      .setAxioms(new Object[] {foam.core.Requires.RequiresBuilder(null) // TODO give context
      .setName("StringPStream")
      .setPath("foam.parse.StringPStream")
      .build(), foam.core.Requires.RequiresBuilder(null) // TODO give context
      .setName("ParserWithAction")
      .setPath("foam.parse.ParserWithAction")
      .build(), foam.core.Requires.RequiresBuilder(null) // TODO give context
      .setName("Parsers")
      .setPath("foam.parse.Parsers")
      .build(), foam.parse.Grammar.SYMBOLS, foam.parse.Grammar.SYMBOL_MAP_, foam.parse.Grammar.PS, foam.parse.Grammar.LAST_START, foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("parseString")
      .setCode(null)
      .setForClass_("foam.parse.Grammar")
      .setArgs(new foam.core.Argument[] {  })
      .build(), foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("getLastError")
      .setCode(null)
      .setForClass_("foam.parse.Grammar")
      .setArgs(new foam.core.Argument[] {  })
      .build(), foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("getSymbol")
      .setCode(null)
      .setForClass_("foam.parse.Grammar")
      .setArgs(new foam.core.Argument[] {  })
      .build(), foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("addSymbol")
      .setCode(null)
      .setForClass_("foam.parse.Grammar")
      .setArgs(new foam.core.Argument[] {  })
      .build(), foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("addActions")
      .setCode(null)
      .setForClass_("foam.parse.Grammar")
      .setArgs(new foam.core.Argument[] {  })
      .build(), foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("addAction")
      .setCode(null)
      .setForClass_("foam.parse.Grammar")
      .setArgs(new foam.core.Argument[] {  })
      .build()})
      .build();
  }

  public static Builder GrammarBuilder(foam.cross_platform.Context x) {

    return new Builder();
  }
  public static class Builder {

    private boolean symbols_isSet_ =
      false;

    private foam.parse.PSymbol[] symbols_;

    private boolean symbolMap__isSet_ =
      false;

    private Object symbolMap__;

    private boolean ps_isSet_ =
      false;

    private Object ps_;

    private boolean lastStart_isSet_ =
      false;

    private Object lastStart_;


    public Builder setSymbols(foam.parse.PSymbol[] value) {

      symbols_isSet_ = true;
      symbols_ = value;
      return this;
    }

    public Builder setSymbolMap_(Object value) {

      symbolMap__isSet_ = true;
      symbolMap__ = value;
      return this;
    }

    public Builder setPs(Object value) {

      ps_isSet_ = true;
      ps_ = value;
      return this;
    }

    public Builder setLastStart(Object value) {

      lastStart_isSet_ = true;
      lastStart_ = value;
      return this;
    }

    private Builder() {

    }

    public Grammar build() {

      Grammar o = new Grammar();
      
      if ( symbols_isSet_ ) {
        o.setSymbols(symbols_);
      }
      
      if ( symbolMap__isSet_ ) {
        o.setSymbolMap_(symbolMap__);
      }
      
      if ( ps_isSet_ ) {
        o.setPs(ps_);
      }
      
      if ( lastStart_isSet_ ) {
        o.setLastStart(lastStart_);
      }
      
      o.init();
      return o;
    }
  }
}