// WARNING: GENERATED CODE, DO NOT MODIFY BY HAND!
package foam.cross_platform;


public class NullFunction extends foam.cross_platform.AbstractFObject implements foam.cross_platform.GenericFunction {

  public static foam.cross_platform.FoamClass CLS_ =
    initClassInfo_();


  public Object executeFunction(Object[] args) {

    return null;
  }

  public void clearProperty(String name) {

    switch(name) {
    
    }
    
    super.clearProperty(name);
    
  }

  public Object getProperty(String name) {

    switch(name) {
    
    }
    return super.getProperty(name);
  }

  public foam.core.Slot getSlot(String name) {

    switch(name) {
    
    }
    return super.getSlot(name);
  }

  public boolean hasPropertySet(String name) {

    switch(name) {
    
    }
    
    return super.hasPropertySet(name);
    
  }

  public void setProperty(String name, Object value) {

    switch(name) {
    
    }
    
    super.setProperty(name, value);
    
  }

  protected NullFunction () {

  }

  public foam.cross_platform.FoamClass getCls_() {

    return CLS_;
  }

  public static foam.cross_platform.FoamClass initClassInfo_() {

    return foam.cross_platform.FoamClass.FoamClassBuilder(null) // TODO give context
      .setId("foam.cross_platform.NullFunction")
      .setParent(foam.cross_platform.AbstractFObject.CLS_)
      .setAxioms(new Object[] {foam.core.Implements.ImplementsBuilder(null) // TODO give context
      .setPath("foam.cross_platform.GenericFunction")
      .build(), foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("executeFunction")
      .setType("Any")
      .setForClass_("foam.cross_platform.NullFunction")
      .setArgs(new foam.core.Argument[] { foam.core.Argument.ArgumentBuilder(null) // TODO give context
      .setName("args")
      .setType("Any[]")
      .setSwiftAnnotations(new String[] {  })
      .build() })
      .setAndroidCode("return null;")
      .build()})
      .build();
  }

  public static Builder NullFunctionBuilder(foam.cross_platform.Context x) {

    return new Builder();
  }
  public static class Builder {


    private Builder() {

    }

    public NullFunction build() {

      NullFunction o = new NullFunction();
      
      o.init();
      return o;
    }
  }
}