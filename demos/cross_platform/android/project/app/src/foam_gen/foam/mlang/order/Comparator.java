// WARNING: GENERATED CODE, DO NOT MODIFY BY HAND!
package foam.mlang.order;


/**
* Interface for comparing two values: -1: o1 < o2, 0: o1 == o2, 1: o1 > o2. 
*/
public interface Comparator extends foam.dao.SQLStatement {

  public static foam.cross_platform.FoamClass CLS_ =
    initClassInfo_();


  public static foam.cross_platform.FoamClass initClassInfo_() {

    return foam.cross_platform.FoamClass.FoamClassBuilder(null) // TODO give context
      .setId("foam.mlang.order.Comparator")
      .setParent(foam.core.AbstractInterface.CLS_)
      .setAxioms(new Object[] {foam.core.Implements.ImplementsBuilder(null) // TODO give context
      .setPath("foam.dao.SQLStatement")
      .build(), foam.java.JavaImplements.JavaImplementsBuilder(null) // TODO give context
      .setName("java.util.Comparator")
      .build(), foam.core.internal.InterfaceMethod.InterfaceMethodBuilder(null) // TODO give context
      .setName("compare")
      .setType("Integer")
      .setForClass_("foam.mlang.order.Comparator")
      .setArgs(new foam.core.Argument[] { foam.core.Argument.ArgumentBuilder(null) // TODO give context
      .setName("o1")
      .setType("Any")
      .build(), foam.core.Argument.ArgumentBuilder(null) // TODO give context
      .setName("o2")
      .setType("Any")
      .build() })
      .build()})
      .build();
  }
  public int compare(Object o1, Object o2);

}