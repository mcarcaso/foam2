// WARNING: GENERATED CODE, DO NOT MODIFY BY HAND!
package foam.core;


public interface SlotInterface {

  public static foam.cross_platform.FoamClass CLS_ =
    initClassInfo_();


  public static foam.cross_platform.FoamClass initClassInfo_() {

    return foam.cross_platform.FoamClass.FoamClassBuilder(null) // TODO give context
      .setId("foam.core.SlotInterface")
      .setParent(foam.core.AbstractInterface.CLS_)
      .setAxioms(new Object[] {foam.core.internal.InterfaceMethod.InterfaceMethodBuilder(null) // TODO give context
      .setName("slotGet")
      .setType("Any")
      .setForClass_("foam.core.SlotInterface")
      .build(), foam.core.internal.InterfaceMethod.InterfaceMethodBuilder(null) // TODO give context
      .setName("slotSet")
      .setForClass_("foam.core.SlotInterface")
      .setArgs(new foam.core.Argument[] { foam.core.Argument.ArgumentBuilder(null) // TODO give context
      .setName("value")
      .setType("Any")
      .build() })
      .build(), foam.core.internal.InterfaceMethod.InterfaceMethodBuilder(null) // TODO give context
      .setName("slotSub")
      .setType("foam.core.Detachable")
      .setForClass_("foam.core.SlotInterface")
      .setArgs(new foam.core.Argument[] { foam.core.Argument.ArgumentBuilder(null) // TODO give context
      .setName("listener")
      .setType("foam.cross_platform.Listener")
      .build() })
      .build()})
      .build();
  }
  public Object slotGet();

  public void slotSet(Object value);

  public foam.core.Detachable slotSub(foam.cross_platform.Listener listener);

}