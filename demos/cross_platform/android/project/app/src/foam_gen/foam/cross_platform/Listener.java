// WARNING: GENERATED CODE, DO NOT MODIFY BY HAND!
package foam.cross_platform;


public interface Listener {

  public static foam.cross_platform.FoamClass CLS_ =
    initClassInfo_();


  public static foam.cross_platform.FoamClass initClassInfo_() {

    return foam.cross_platform.FoamClass.FoamClassBuilder(null) // TODO give context
      .setId("foam.cross_platform.Listener")
      .setParent(foam.core.AbstractInterface.CLS_)
      .setAxioms(new Object[] {foam.core.internal.InterfaceMethod.InterfaceMethodBuilder(null) // TODO give context
      .setName("executeListener")
      .setForClass_("foam.cross_platform.Listener")
      .setArgs(new foam.core.Argument[] { foam.core.Argument.ArgumentBuilder(null) // TODO give context
      .setName("sub")
      .setType("foam.core.Detachable")
      .build(), foam.core.Argument.ArgumentBuilder(null) // TODO give context
      .setName("args")
      .setType("Any[]")
      .build() })
      .build()})
      .build();
  }
  public void executeListener(foam.core.Detachable sub, Object[] args);

}