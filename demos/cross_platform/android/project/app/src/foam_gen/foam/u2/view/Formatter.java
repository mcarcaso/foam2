// WARNING: GENERATED CODE, DO NOT MODIFY BY HAND!
package foam.u2.view;


public interface Formatter {

  public static foam.cross_platform.FoamClass CLS_ =
    initClassInfo_();


  public static foam.cross_platform.FoamClass initClassInfo_() {

    return foam.cross_platform.FoamClass.FoamClassBuilder(null) // TODO give context
      .setId("foam.u2.view.Formatter")
      .setParent(foam.core.AbstractInterface.CLS_)
      .setAxioms(new Object[] {foam.core.internal.InterfaceMethod.InterfaceMethodBuilder(null) // TODO give context
      .setName("format")
      .setForClass_("foam.u2.view.Formatter")
      .setArgs(new foam.core.Argument[] { foam.core.Argument.ArgumentBuilder(null) // TODO give context
      .setName("e")
      .build(), foam.core.Argument.ArgumentBuilder(null) // TODO give context
      .setName("value")
      .build(), foam.core.Argument.ArgumentBuilder(null) // TODO give context
      .setName("obj")
      .build(), foam.core.Argument.ArgumentBuilder(null) // TODO give context
      .setName("axiom")
      .build() })
      .build()})
      .build();
  }
  public void format(Object e, Object value, Object obj, Object axiom);

}