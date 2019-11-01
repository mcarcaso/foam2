// WARNING: GENERATED CODE, DO NOT MODIFY BY HAND!
package foam.core;


public interface Detachable {

  public static foam.cross_platform.FoamClass CLS_ =
    initClassInfo_();


  public static foam.cross_platform.FoamClass initClassInfo_() {

    return foam.cross_platform.FoamClass.FoamClassBuilder(null) // TODO give context
      .setId("foam.core.Detachable")
      .setParent(foam.core.AbstractInterface.CLS_)
      .setAxioms(new Object[] {foam.core.internal.InterfaceMethod.InterfaceMethodBuilder(null) // TODO give context
      .setName("detach")
      .setType("Void")
      .setAsync(true)
      .setForClass_("foam.core.Detachable")
      .build()})
      .build();
  }
  public void detach();

}