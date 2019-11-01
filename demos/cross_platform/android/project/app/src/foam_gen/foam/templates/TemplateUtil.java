// WARNING: GENERATED CODE, DO NOT MODIFY BY HAND!
package foam.templates;


/**
* Utility methods for working with Templates. Mostly just for internal use. 
*/
public class TemplateUtil extends foam.cross_platform.AbstractFObject {

  private boolean out_isSet_ =
    false;

  public static String HEADER =
    init_HEADER();

  protected Object grammar_;

  private boolean grammar_isSet_ =
    false;

  private foam.core.Slot grammar_$;

  public static foam.core.Property GRAMMAR =
    init_GRAMMAR();

  protected Object out_;

  public static String FOOTER =
    init_FOOTER();

  private foam.core.Slot out_$;

  public static foam.core.Property OUT =
    init_OUT();

  protected Object simple_;

  private boolean simple_isSet_ =
    false;

  private foam.core.Slot simple_$;

  public static foam.core.Property SIMPLE =
    init_SIMPLE();

  public static foam.cross_platform.FoamClass CLS_ =
    initClassInfo_();


  protected foam.parse.ImperativeGrammar.Builder ImperativeGrammar_create() {

    return foam.parse.ImperativeGrammar.ImperativeGrammarBuilder(getSubX());
  }

  protected foam.templates.TemplateOutput.Builder TemplateOutput_create() {

    return foam.templates.TemplateOutput.TemplateOutputBuilder(getSubX());
  }

  private static String init_HEADER() {

    return "var self = this, ctx = this.__context__, Y = this.__subContext__;\nvar output = opt_outputter ? opt_outputter : TOC(this);\nvar out = output.output.bind(output);\nout('";
  }

  private static String init_FOOTER() {

    return "');\nreturn opt_outputter ? output : output.toString();\n";
  }

  public foam.core.Slot getGrammar$() {

    if ( grammar_$ == null ) {
      grammar_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(GRAMMAR)
        .build();
    }
    return grammar_$;
  }

  public Object getGrammar() {

    if ( ! grammar_isSet_ ) {
      return null;
    }
    return grammar_;
  }

  private Object grammar_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setGrammar(Object value) {

    boolean hasOldValue = hasPropertySet("grammar");
    Object oldValue = hasOldValue ?
      getGrammar() :
      null;
    Object castedValue = grammar_adapt(oldValue, value, hasOldValue);
    
    grammar_isSet_ = true;
    grammar_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "grammar", null };
    if ( hasListeners(args) ) {
      args[2] = getGrammar$();
      pub(args);
    }
  }

  private static foam.core.Property init_GRAMMAR() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("grammar")
      .setFactory(null)
      .setForClass_("foam.templates.TemplateUtil")
      .build();
  }

  public foam.core.Slot getOut$() {

    if ( out_$ == null ) {
      out_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(OUT)
        .build();
    }
    return out_$;
  }

  public Object getOut() {

    if ( ! out_isSet_ ) {
      return null;
    }
    return out_;
  }

  private Object out_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setOut(Object value) {

    boolean hasOldValue = hasPropertySet("out");
    Object oldValue = hasOldValue ?
      getOut() :
      null;
    Object castedValue = out_adapt(oldValue, value, hasOldValue);
    
    out_isSet_ = true;
    out_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "out", null };
    if ( hasListeners(args) ) {
      args[2] = getOut$();
      pub(args);
    }
  }

  private static foam.core.Property init_OUT() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("out")
      .setFactory(null)
      .setForClass_("foam.templates.TemplateUtil")
      .build();
  }

  public foam.core.Slot getSimple$() {

    if ( simple_$ == null ) {
      simple_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(SIMPLE)
        .build();
    }
    return simple_$;
  }

  public Object getSimple() {

    if ( ! simple_isSet_ ) {
      return true;
    }
    return simple_;
  }

  private Object simple_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setSimple(Object value) {

    boolean hasOldValue = hasPropertySet("simple");
    Object oldValue = hasOldValue ?
      getSimple() :
      null;
    Object castedValue = simple_adapt(oldValue, value, hasOldValue);
    
    simple_isSet_ = true;
    simple_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "simple", null };
    if ( hasListeners(args) ) {
      args[2] = getSimple$();
      pub(args);
    }
  }

  private static foam.core.Property init_SIMPLE() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("simple")
      .setValue(true)
      .setForClass_("foam.templates.TemplateUtil")
      .build();
  }

  public void push() {

    throw new RuntimeException("push is not implemented");
  }

  public void pushSimple() {

    throw new RuntimeException("pushSimple is not implemented");
  }

  public void compile() {

    throw new RuntimeException("compile is not implemented");
  }

  public void lazyCompile() {

    throw new RuntimeException("lazyCompile is not implemented");
  }

  public void clearProperty(String name) {

    switch(name) {
    
      case "grammar":
        grammar_isSet_ = false;
        Object[] grammarArgs = new Object[] { "propertyChange", "grammar", null };
        if ( hasListeners(grammarArgs) ) {
          grammarArgs[2] = getGrammar$();
          pub(grammarArgs);
        }
        return;
    
    
      case "out":
        out_isSet_ = false;
        Object[] outArgs = new Object[] { "propertyChange", "out", null };
        if ( hasListeners(outArgs) ) {
          outArgs[2] = getOut$();
          pub(outArgs);
        }
        return;
    
    
      case "simple":
        simple_isSet_ = false;
        Object[] simpleArgs = new Object[] { "propertyChange", "simple", null };
        if ( hasListeners(simpleArgs) ) {
          simpleArgs[2] = getSimple$();
          pub(simpleArgs);
        }
        return;
    
    }
    
    super.clearProperty(name);
    
  }

  public Object getProperty(String name) {

    switch(name) {
    
      case "grammar":
        return getGrammar();
    
    
      case "out":
        return getOut();
    
    
      case "simple":
        return getSimple();
    
    }
    return super.getProperty(name);
  }

  public foam.core.Slot getSlot(String name) {

    switch(name) {
    
      case "grammar":
        return getGrammar$();
    
    
      case "out":
        return getOut$();
    
    
      case "simple":
        return getSimple$();
    
    }
    return super.getSlot(name);
  }

  public boolean hasPropertySet(String name) {

    switch(name) {
    
      case "grammar":
        return grammar_isSet_;
    
    
      case "out":
        return out_isSet_;
    
    
      case "simple":
        return simple_isSet_;
    
    }
    
    return super.hasPropertySet(name);
    
  }

  public void setProperty(String name, Object value) {

    switch(name) {
    
      case "grammar":
        setGrammar((Object) value);
        return;
    
    
      case "out":
        setOut((Object) value);
        return;
    
    
      case "simple":
        setSimple((Object) value);
        return;
    
    }
    
    super.setProperty(name, value);
    
  }

  protected TemplateUtil () {

  }

  public foam.cross_platform.FoamClass getCls_() {

    return CLS_;
  }

  public static foam.cross_platform.FoamClass initClassInfo_() {

    return foam.cross_platform.FoamClass.FoamClassBuilder(null) // TODO give context
      .setId("foam.templates.TemplateUtil")
      .setParent(foam.cross_platform.AbstractFObject.CLS_)
      .setAxioms(new Object[] {foam.core.Requires.RequiresBuilder(null) // TODO give context
      .setName("ImperativeGrammar")
      .setPath("foam.parse.ImperativeGrammar")
      .build(), foam.core.Requires.RequiresBuilder(null) // TODO give context
      .setName("TemplateOutput")
      .setPath("foam.templates.TemplateOutput")
      .build(), foam.core.Constant.ConstantBuilder(null) // TODO give context
      .setName("HEADER")
      .setType("String")
      .setFlags(new String[] {  })
      .setValue("var self = this, ctx = this.__context__, Y = this.__subContext__;\nvar output = opt_outputter ? opt_outputter : TOC(this);\nvar out = output.output.bind(output);\nout('")
      .build(), foam.core.Constant.ConstantBuilder(null) // TODO give context
      .setName("FOOTER")
      .setType("String")
      .setFlags(new String[] {  })
      .setValue("');\nreturn opt_outputter ? output : output.toString();\n")
      .build(), foam.templates.TemplateUtil.GRAMMAR, foam.templates.TemplateUtil.OUT, foam.templates.TemplateUtil.SIMPLE, foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("push")
      .setCode(null)
      .setForClass_("foam.templates.TemplateUtil")
      .setArgs(new foam.core.Argument[] {  })
      .build(), foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("pushSimple")
      .setCode(null)
      .setForClass_("foam.templates.TemplateUtil")
      .setArgs(new foam.core.Argument[] {  })
      .build(), foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("compile")
      .setCode(null)
      .setForClass_("foam.templates.TemplateUtil")
      .setArgs(new foam.core.Argument[] {  })
      .build(), foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("lazyCompile")
      .setCode(null)
      .setForClass_("foam.templates.TemplateUtil")
      .setArgs(new foam.core.Argument[] {  })
      .build()})
      .build();
  }

  public static Builder TemplateUtilBuilder(foam.cross_platform.Context x) {

    return new Builder();
  }
  public static class Builder {

    private boolean grammar_isSet_ =
      false;

    private Object grammar_;

    private boolean out_isSet_ =
      false;

    private Object out_;

    private boolean simple_isSet_ =
      false;

    private Object simple_;


    public Builder setGrammar(Object value) {

      grammar_isSet_ = true;
      grammar_ = value;
      return this;
    }

    public Builder setOut(Object value) {

      out_isSet_ = true;
      out_ = value;
      return this;
    }

    public Builder setSimple(Object value) {

      simple_isSet_ = true;
      simple_ = value;
      return this;
    }

    private Builder() {

    }

    public TemplateUtil build() {

      TemplateUtil o = new TemplateUtil();
      
      if ( grammar_isSet_ ) {
        o.setGrammar(grammar_);
      }
      
      if ( out_isSet_ ) {
        o.setOut(out_);
      }
      
      if ( simple_isSet_ ) {
        o.setSimple(simple_);
      }
      
      o.init();
      return o;
    }
  }
}