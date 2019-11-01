// WARNING: GENERATED CODE, DO NOT MODIFY BY HAND!
package foam.cross_platform;


public interface Context {

  public static foam.cross_platform.FoamClass CLS_ =
    initClassInfo_();


  public static foam.cross_platform.FoamClass initClassInfo_() {

    return foam.cross_platform.FoamClass.FoamClassBuilder(null) // TODO give context
      .setId("foam.cross_platform.Context")
      .setParent(foam.core.AbstractInterface.CLS_)
      .setAxioms(new Object[] {foam.core.internal.InterfaceMethod.InterfaceMethodBuilder(null) // TODO give context
      .setName("put")
      .setType("foam.cross_platform.Context")
      .setForClass_("foam.cross_platform.Context")
      .setArgs(new foam.core.Argument[] { foam.core.Argument.ArgumentBuilder(null) // TODO give context
      .setName("name")
      .setType("String")
      .build(), foam.core.Argument.ArgumentBuilder(null) // TODO give context
      .setName("value")
      .setType("Any")
      .build() })
      .build()})
      .build();
  }
  public foam.cross_platform.Context put(String name, Object value);

}