// WARNING: GENERATED CODE, DO NOT MODIFY BY HAND!
package foam.cross_platform;


public interface FObject extends foam.core.Detachable {

  public static foam.cross_platform.FoamClass CLS_ =
    initClassInfo_();


  public static foam.cross_platform.FoamClass initClassInfo_() {

    return foam.cross_platform.FoamClass.FoamClassBuilder(null) // TODO give context
      .setId("foam.cross_platform.FObject")
      .setParent(foam.core.AbstractInterface.CLS_)
      .setAxioms(new Object[] {foam.core.Implements.ImplementsBuilder(null) // TODO give context
      .setPath("foam.core.Detachable")
      .build(), foam.core.internal.InterfaceMethod.InterfaceMethodBuilder(null) // TODO give context
      .setName("getX")
      .setType("foam.cross_platform.Context")
      .setForClass_("foam.cross_platform.FObject")
      .build(), foam.core.internal.InterfaceMethod.InterfaceMethodBuilder(null) // TODO give context
      .setName("getSubX")
      .setType("foam.cross_platform.Context")
      .setForClass_("foam.cross_platform.FObject")
      .build(), foam.core.internal.InterfaceMethod.InterfaceMethodBuilder(null) // TODO give context
      .setName("pub")
      .setType("Integer")
      .setForClass_("foam.cross_platform.FObject")
      .setArgs(new foam.core.Argument[] { foam.core.Argument.ArgumentBuilder(null) // TODO give context
      .setName("args")
      .setType("Object[]")
      .build() })
      .build(), foam.core.internal.InterfaceMethod.InterfaceMethodBuilder(null) // TODO give context
      .setName("onDetach")
      .setForClass_("foam.cross_platform.FObject")
      .setArgs(new foam.core.Argument[] { foam.core.Argument.ArgumentBuilder(null) // TODO give context
      .setName("detachable")
      .setType("foam.core.Detachable")
      .build() })
      .build(), foam.core.internal.InterfaceMethod.InterfaceMethodBuilder(null) // TODO give context
      .setName("sub")
      .setType("foam.core.Detachable")
      .setForClass_("foam.cross_platform.FObject")
      .setArgs(new foam.core.Argument[] { foam.core.Argument.ArgumentBuilder(null) // TODO give context
      .setName("topics")
      .setType("String[]")
      .build(), foam.core.Argument.ArgumentBuilder(null) // TODO give context
      .setName("listener")
      .setType("foam.cross_platform.Listener")
      .build() })
      .build(), foam.core.internal.InterfaceMethod.InterfaceMethodBuilder(null) // TODO give context
      .setName("hasPropertySet")
      .setType("Boolean")
      .setForClass_("foam.cross_platform.FObject")
      .setArgs(new foam.core.Argument[] { foam.core.Argument.ArgumentBuilder(null) // TODO give context
      .setName("name")
      .setType("String")
      .build() })
      .build(), foam.core.internal.InterfaceMethod.InterfaceMethodBuilder(null) // TODO give context
      .setName("setProperty")
      .setForClass_("foam.cross_platform.FObject")
      .setArgs(new foam.core.Argument[] { foam.core.Argument.ArgumentBuilder(null) // TODO give context
      .setName("name")
      .setType("String")
      .build(), foam.core.Argument.ArgumentBuilder(null) // TODO give context
      .setName("value")
      .setType("Any")
      .build() })
      .build(), foam.core.internal.InterfaceMethod.InterfaceMethodBuilder(null) // TODO give context
      .setName("getProperty")
      .setType("Any")
      .setForClass_("foam.cross_platform.FObject")
      .setArgs(new foam.core.Argument[] { foam.core.Argument.ArgumentBuilder(null) // TODO give context
      .setName("name")
      .setType("String")
      .build() })
      .build(), foam.core.internal.InterfaceMethod.InterfaceMethodBuilder(null) // TODO give context
      .setName("getSlot")
      .setType("foam.core.Slot")
      .setForClass_("foam.cross_platform.FObject")
      .setArgs(new foam.core.Argument[] { foam.core.Argument.ArgumentBuilder(null) // TODO give context
      .setName("name")
      .setType("String")
      .build() })
      .build(), foam.core.internal.InterfaceMethod.InterfaceMethodBuilder(null) // TODO give context
      .setName("getCls_")
      .setType("foam.cross_platform.FoamClass")
      .setForClass_("foam.cross_platform.FObject")
      .build()})
      .build();
  }
  public foam.cross_platform.Context getX();

  public foam.cross_platform.Context getSubX();

  public int pub(Object[] args);

  public void onDetach(foam.core.Detachable detachable);

  public foam.core.Detachable sub(String[] topics, foam.cross_platform.Listener listener);

  public boolean hasPropertySet(String name);

  public void setProperty(String name, Object value);

  public Object getProperty(String name);

  public foam.core.Slot getSlot(String name);

  public foam.cross_platform.FoamClass getCls_();

}