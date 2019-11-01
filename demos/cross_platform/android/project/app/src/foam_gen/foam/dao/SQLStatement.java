// WARNING: GENERATED CODE, DO NOT MODIFY BY HAND!
package foam.dao;


public interface SQLStatement {

  public static foam.cross_platform.FoamClass CLS_ =
    initClassInfo_();


  public static foam.cross_platform.FoamClass initClassInfo_() {

    return foam.cross_platform.FoamClass.FoamClassBuilder(null) // TODO give context
      .setId("foam.dao.SQLStatement")
      .setParent(foam.core.AbstractInterface.CLS_)
      .setAxioms(new Object[] {foam.core.internal.InterfaceMethod.InterfaceMethodBuilder(null) // TODO give context
      .setName("createStatement")
      .setType("String")
      .setForClass_("foam.dao.SQLStatement")
      .build(), foam.core.internal.InterfaceMethod.InterfaceMethodBuilder(null) // TODO give context
      .setName("prepareStatement")
      .setType("Void")
      .setForClass_("foam.dao.SQLStatement")
      .setArgs(new foam.core.Argument[] { foam.core.Argument.ArgumentBuilder(null) // TODO give context
      .setName("stmt")
      .build() })
      .setJavaThrows(new String[] { "java.sql.SQLException" })
      .build()})
      .build();
  }
  public String createStatement();

  public void prepareStatement(Object stmt);

}