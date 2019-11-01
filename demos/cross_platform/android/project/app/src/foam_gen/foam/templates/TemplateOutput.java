// WARNING: GENERATED CODE, DO NOT MODIFY BY HAND!
package foam.templates;


/**
* A buffer for storing Template output. 
*/
public class TemplateOutput extends foam.cross_platform.AbstractFObject {

  protected Object buf_;

  private boolean buf_isSet_ =
    false;

  private foam.core.Slot buf_$;

  public static foam.core.Property BUF =
    init_BUF();

  public static foam.cross_platform.FoamClass CLS_ =
    initClassInfo_();


  public foam.core.Slot getBuf$() {

    if ( buf_$ == null ) {
      buf_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
        .setObj(this)
        .setProp(BUF)
        .build();
    }
    return buf_$;
  }

  public Object getBuf() {

    if ( ! buf_isSet_ ) {
      return null;
    }
    return buf_;
  }

  private Object buf_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

    return (Object) newValue;
  }

  public void setBuf(Object value) {

    boolean hasOldValue = hasPropertySet("buf");
    Object oldValue = hasOldValue ?
      getBuf() :
      null;
    Object castedValue = buf_adapt(oldValue, value, hasOldValue);
    
    buf_isSet_ = true;
    buf_ = castedValue;
    Object[] args = new Object[] { "propertyChange", "buf", null };
    if ( hasListeners(args) ) {
      args[2] = getBuf$();
      pub(args);
    }
  }

  private static foam.core.Property init_BUF() {

    return foam.core.Property.PropertyBuilder(null) // TODO give context
      .setName("buf")
      .setFactory(null)
      .setForClass_("foam.templates.TemplateOutput")
      .build();
  }

  public void output() {

    throw new RuntimeException("output is not implemented");
  }

  public String toString() {

    throw new RuntimeException("toString is not implemented");
  }

  public void clearProperty(String name) {

    switch(name) {
    
      case "buf":
        buf_isSet_ = false;
        Object[] bufArgs = new Object[] { "propertyChange", "buf", null };
        if ( hasListeners(bufArgs) ) {
          bufArgs[2] = getBuf$();
          pub(bufArgs);
        }
        return;
    
    }
    
    super.clearProperty(name);
    
  }

  public Object getProperty(String name) {

    switch(name) {
    
      case "buf":
        return getBuf();
    
    }
    return super.getProperty(name);
  }

  public foam.core.Slot getSlot(String name) {

    switch(name) {
    
      case "buf":
        return getBuf$();
    
    }
    return super.getSlot(name);
  }

  public boolean hasPropertySet(String name) {

    switch(name) {
    
      case "buf":
        return buf_isSet_;
    
    }
    
    return super.hasPropertySet(name);
    
  }

  public void setProperty(String name, Object value) {

    switch(name) {
    
      case "buf":
        setBuf((Object) value);
        return;
    
    }
    
    super.setProperty(name, value);
    
  }

  protected TemplateOutput () {

  }

  public foam.cross_platform.FoamClass getCls_() {

    return CLS_;
  }

  public static foam.cross_platform.FoamClass initClassInfo_() {

    return foam.cross_platform.FoamClass.FoamClassBuilder(null) // TODO give context
      .setId("foam.templates.TemplateOutput")
      .setParent(foam.cross_platform.AbstractFObject.CLS_)
      .setAxioms(new Object[] {foam.templates.TemplateOutput.BUF, foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("output")
      .setCode(null)
      .setForClass_("foam.templates.TemplateOutput")
      .setArgs(new foam.core.Argument[] {  })
      .build()})
      .build();
  }

  public static Builder TemplateOutputBuilder(foam.cross_platform.Context x) {

    return new Builder();
  }
  public static class Builder {

    private boolean buf_isSet_ =
      false;

    private Object buf_;


    public Builder setBuf(Object value) {

      buf_isSet_ = true;
      buf_ = value;
      return this;
    }

    private Builder() {

    }

    public TemplateOutput build() {

      TemplateOutput o = new TemplateOutput();
      
      if ( buf_isSet_ ) {
        o.setBuf(buf_);
      }
      
      o.init();
      return o;
    }
  }
}