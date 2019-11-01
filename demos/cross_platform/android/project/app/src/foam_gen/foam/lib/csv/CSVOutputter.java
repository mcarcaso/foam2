// WARNING: GENERATED CODE, DO NOT MODIFY BY HAND!
package foam.lib.csv;


public interface CSVOutputter {

  public static foam.cross_platform.FoamClass CLS_ =
    initClassInfo_();


  public static foam.cross_platform.FoamClass initClassInfo_() {

    return foam.cross_platform.FoamClass.FoamClassBuilder(null) // TODO give context
      .setId("foam.lib.csv.CSVOutputter")
      .setParent(foam.core.AbstractInterface.CLS_)
      .setAxioms(new Object[] {foam.core.internal.InterfaceMethod.InterfaceMethodBuilder(null) // TODO give context
      .setName("outputValue")
      .setForClass_("foam.lib.csv.CSVOutputter")
      .setArgs(new foam.core.Argument[] { foam.core.Argument.ArgumentBuilder(null) // TODO give context
      .setName("value")
      .setSwiftAnnotations(new String[] {  })
      .build() })
      .build(), foam.core.internal.InterfaceMethod.InterfaceMethodBuilder(null) // TODO give context
      .setName("outputFObject")
      .setForClass_("foam.lib.csv.CSVOutputter")
      .setArgs(new foam.core.Argument[] { foam.core.Argument.ArgumentBuilder(null) // TODO give context
      .setName("x")
      .setType("Context")
      .setSwiftAnnotations(new String[] {  })
      .build(), foam.core.Argument.ArgumentBuilder(null) // TODO give context
      .setName("obj")
      .setType("FObject")
      .setSwiftAnnotations(new String[] {  })
      .build() })
      .build(), foam.core.internal.InterfaceMethod.InterfaceMethodBuilder(null) // TODO give context
      .setName("flush")
      .setForClass_("foam.lib.csv.CSVOutputter")
      .setArgs(new foam.core.Argument[] {  })
      .build()})
      .build();
  }
  public void outputValue(Object value);

  public void outputFObject(foam.cross_platform.Context x, foam.cross_platform.FObject obj);

  public void flush();

}