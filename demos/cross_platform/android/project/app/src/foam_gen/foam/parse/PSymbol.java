// WARNING: GENERATED CODE, DO NOT MODIFY BY HAND!
package foam.parse;


public class PSymbol extends foam.cross_platform.AbstractFObject {

  protected Object name_;

  private boolean name_isSet_ =
    false;

  private foam.core.Slot name_$;

  public static foam.core.Property NAME =
    init_NAME();

  protected Object parser_;

  private boolean parser_isSet_ =
    false;

  private foam.core.Slot parser_$;

  public static foam.core.Property PARSER =
    init_PARSER();

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
      .setForClass_("foam.parse.PSymbol")
      .build();
  }

  public foam.core.Slot getParser$() {

    if ( parser_$ == null ) {
      parser_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(PARSER)
        .build();
    }
    return parser_$;
  }

  public Object getParser() {

    if ( ! parser_isSet_ ) {
      return null;
    }
    return parser_;
  }

  private Object parser_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setParser(Object value) {

    boolean hasOldValue = hasPropertySet("parser");
    Object oldValue = hasOldValue ?
      getParser() :
      null;
    Object castedValue = parser_adapt(oldValue, value, hasOldValue);
    
    parser_isSet_ = true;
    parser_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "parser", null };
    if ( hasListeners(args) ) {
      args[2] = getParser$();
      pub(args);
    }
  }

  private static foam.core.Property init_PARSER() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("parser")
      .setForClass_("foam.parse.PSymbol")
      .build();
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
    
    
      case "parser":
        parser_isSet_ = false;
        Object[] parserArgs = new Object[] { "propertyChange", "parser", null };
        if ( hasListeners(parserArgs) ) {
          parserArgs[2] = getParser$();
          pub(parserArgs);
        }
        return;
    
    }
    
    super.clearProperty(name);
    
  }

  public Object getProperty(String name) {

    switch(name) {
    
      case "name":
        return getName();
    
    
      case "parser":
        return getParser();
    
    }
    return super.getProperty(name);
  }

  public foam.core.Slot getSlot(String name) {

    switch(name) {
    
      case "name":
        return getName$();
    
    
      case "parser":
        return getParser$();
    
    }
    return super.getSlot(name);
  }

  public boolean hasPropertySet(String name) {

    switch(name) {
    
      case "name":
        return name_isSet_;
    
    
      case "parser":
        return parser_isSet_;
    
    }
    
    return super.hasPropertySet(name);
    
  }

  public void setProperty(String name, Object value) {

    switch(name) {
    
      case "name":
        setName((Object) value);
        return;
    
    
      case "parser":
        setParser((Object) value);
        return;
    
    }
    
    super.setProperty(name, value);
    
  }

  protected PSymbol () {

  }

  public foam.cross_platform.FoamClass getCls_() {

    return CLS_;
  }

  public static foam.cross_platform.FoamClass initClassInfo_() {

    return foam.cross_platform.FoamClass.FoamClassBuilder(null) // TODO give context
      .setId("foam.parse.PSymbol")
      .setParent(foam.cross_platform.AbstractFObject.CLS_)
      .setAxioms(new Object[] {foam.parse.PSymbol.NAME, foam.parse.PSymbol.PARSER})
      .build();
  }

  public static Builder PSymbolBuilder(foam.cross_platform.Context x) {

    return new Builder();
  }
  public static class Builder {

    private boolean name_isSet_ =
      false;

    private Object name_;

    private boolean parser_isSet_ =
      false;

    private Object parser_;


    public Builder setName(Object value) {

      name_isSet_ = true;
      name_ = value;
      return this;
    }

    public Builder setParser(Object value) {

      parser_isSet_ = true;
      parser_ = value;
      return this;
    }

    private Builder() {

    }

    public PSymbol build() {

      PSymbol o = new PSymbol();
      
      if ( name_isSet_ ) {
        o.setName(name_);
      }
      
      if ( parser_isSet_ ) {
        o.setParser(parser_);
      }
      
      o.init();
      return o;
    }
  }
}