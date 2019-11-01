// WARNING: GENERATED CODE, DO NOT MODIFY BY HAND!
package foam.cross_platform;


public class Lib extends foam.cross_platform.AbstractFObject {

  public static foam.cross_platform.FoamClass CLS_ =
    initClassInfo_();


  public static boolean equals(Object o1, Object o2) {

    return compare(o1, o2) == 0;
  }

  public static int compare(Object o1, Object o2) {

    if ( o1 == null && o2 == null ) return 0;
    if ( o2 == null ) return  1;
    if ( o1 == null ) return -1;
    
    if ( o1 instanceof Number && o2 instanceof Number ) {
      double d1 = ((Number) o1).doubleValue();
      double d2 = ((Number) o2).doubleValue();
      if ( d1 == d2 ) return  0;
      if ( d1  > d2 ) return  1;
      if ( d1  < d2 ) return -1;
    }
    
    if ( ! (o1 instanceof Comparable && o2 instanceof Comparable) ) {
      compare(o1.hashCode(), o2.hashCode());
    }
    if ( ! (o2 instanceof Comparable) ) return 1;
    if ( ! (o1 instanceof Comparable) ) return -1;
    
    return ((Comparable) o1).compareTo(o2);
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

  protected Lib () {

  }

  public foam.cross_platform.FoamClass getCls_() {

    return CLS_;
  }

  public static foam.cross_platform.FoamClass initClassInfo_() {

    return foam.cross_platform.FoamClass.FoamClassBuilder(null) // TODO give context
      .setId("foam.cross_platform.Lib")
      .setParent(foam.cross_platform.AbstractFObject.CLS_)
      .setAxioms(new Object[] {foam.core.Static.StaticBuilder(null) // TODO give context
      .setName("equals")
      .setType("Boolean")
      .setForClass_("foam.cross_platform.Lib")
      .setArgs(new foam.core.Argument[] { foam.core.Argument.ArgumentBuilder(null) // TODO give context
      .setName("o1")
      .setType("Any")
      .build(), foam.core.Argument.ArgumentBuilder(null) // TODO give context
      .setName("o2")
      .setType("Any")
      .build() })
      .setAndroidCode("\n        return compare(o1, o2) == 0;\n      ")
      .build(), foam.core.Static.StaticBuilder(null) // TODO give context
      .setName("compare")
      .setType("Integer")
      .setForClass_("foam.cross_platform.Lib")
      .setArgs(new foam.core.Argument[] { foam.core.Argument.ArgumentBuilder(null) // TODO give context
      .setName("o1")
      .setType("Any")
      .build(), foam.core.Argument.ArgumentBuilder(null) // TODO give context
      .setName("o2")
      .setType("Any")
      .build() })
      .setAndroidCode("\n        if ( o1 == null && o2 == null ) return 0;\n        if ( o2 == null ) return  1;\n        if ( o1 == null ) return -1;\n\n        if ( o1 instanceof Number && o2 instanceof Number ) {\n          double d1 = ((Number) o1).doubleValue();\n          double d2 = ((Number) o2).doubleValue();\n          if ( d1 == d2 ) return  0;\n          if ( d1  > d2 ) return  1;\n          if ( d1  < d2 ) return -1;\n        }\n\n        if ( ! (o1 instanceof Comparable && o2 instanceof Comparable) ) {\n          compare(o1.hashCode(), o2.hashCode());\n        }\n        if ( ! (o2 instanceof Comparable) ) return 1;\n        if ( ! (o1 instanceof Comparable) ) return -1;\n\n        return ((Comparable) o1).compareTo(o2);\n      ")
      .build()})
      .build();
  }

  public static Builder LibBuilder(foam.cross_platform.Context x) {

    return new Builder();
  }
  public static class Builder {


    private Builder() {

    }

    public Lib build() {

      Lib o = new Lib();
      
      o.init();
      return o;
    }
  }
}