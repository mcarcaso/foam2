// WARNING: GENERATED CODE, DO NOT MODIFY BY HAND!
package foam.mlang.predicate;


/**
* Predicate interface: f(obj) -> boolean. 
*/
public interface Predicate extends foam.dao.SQLStatement {

  public static foam.cross_platform.FoamClass CLS_ =
    initClassInfo_();


  public static foam.cross_platform.FoamClass initClassInfo_() {

    return foam.cross_platform.FoamClass.FoamClassBuilder(null) // TODO give context
      .setId("foam.mlang.predicate.Predicate")
      .setParent(foam.core.AbstractInterface.CLS_)
      .setAxioms(new Object[] {foam.core.Implements.ImplementsBuilder(null) // TODO give context
      .setPath("foam.dao.SQLStatement")
      .build(), foam.core.internal.InterfaceMethod.InterfaceMethodBuilder(null) // TODO give context
      .setName("f")
      .setType("Boolean")
      .setForClass_("foam.mlang.predicate.Predicate")
      .setArgs(new foam.core.Argument[] { foam.core.Argument.ArgumentBuilder(null) // TODO give context
      .setName("obj")
      .setType("Any")
      .build() })
      .build(), foam.core.internal.InterfaceMethod.InterfaceMethodBuilder(null) // TODO give context
      .setName("partialEval")
      .setType("foam.mlang.predicate.Predicate")
      .setForClass_("foam.mlang.predicate.Predicate")
      .build()})
      .build();
  }
  public boolean f(Object obj);

  public foam.mlang.predicate.Predicate partialEval();

}