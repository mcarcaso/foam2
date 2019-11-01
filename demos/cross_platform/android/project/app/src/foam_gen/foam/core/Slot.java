// WARNING: GENERATED CODE, DO NOT MODIFY BY HAND!
package foam.core;


/**
*   Slots are observable values which can change over time.  Slots are simple single-value Model-View-Controller Models, but since  another meaning of 'Model' is 
* already heavily used in FOAM, Slot is  used to avoid overloading the term.  <ul>Types of Slots include:  <li>PropertySlot  <li>ConstantSlot  <li>ExpressionSlot 
*  </ul>   
*/
public class Slot extends foam.cross_platform.AbstractFObject implements foam.core.SlotInterface {

  public static foam.cross_platform.FoamClass CLS_ =
    initClassInfo_();


  protected foam.core.internal.SubSlot.Builder SubSlot_create() {

    return foam.core.internal.SubSlot.SubSlotBuilder(getSubX());
  }

  public void valueSub() {

    throw new RuntimeException("valueSub is not implemented");
  }

  public void dot() {

    throw new RuntimeException("dot is not implemented");
  }

  public void link() {

    throw new RuntimeException("link is not implemented");
  }

  public void linkFrom() {

    throw new RuntimeException("linkFrom is not implemented");
  }

  public void linkTo() {

    throw new RuntimeException("linkTo is not implemented");
  }

  public void follow() {

    throw new RuntimeException("follow is not implemented");
  }

  public void mapFrom() {

    throw new RuntimeException("mapFrom is not implemented");
  }

  public void mapTo() {

    throw new RuntimeException("mapTo is not implemented");
  }

  public void map() {

    throw new RuntimeException("map is not implemented");
  }

  public void relateTo() {

    throw new RuntimeException("relateTo is not implemented");
  }

  public void relateFrom() {

    throw new RuntimeException("relateFrom is not implemented");
  }

  public Object slotGet() {

    throw new RuntimeException("slotGet is not implemented");
  }

  public void slotSet(Object value) {

    throw new RuntimeException("slotSet is not implemented");
  }

  public foam.core.Detachable slotSub(foam.cross_platform.Listener listener) {

    throw new RuntimeException("slotSub is not implemented");
  }

  public void clearProperty(String name) {

    switch(name) {
    
    }
    
    super.clearProperty(name);
    
  }

  public Object getProperty(String name) {

    switch(name) {
    
    }
    return super.getProperty(name);
  }

  public foam.core.Slot getSlot(String name) {

    switch(name) {
    
    }
    return super.getSlot(name);
  }

  public boolean hasPropertySet(String name) {

    switch(name) {
    
    }
    
    return super.hasPropertySet(name);
    
  }

  public void setProperty(String name, Object value) {

    switch(name) {
    
    }
    
    super.setProperty(name, value);
    
  }

  protected Slot () {

  }

  public foam.cross_platform.FoamClass getCls_() {

    return CLS_;
  }

  public static foam.cross_platform.FoamClass initClassInfo_() {

    return foam.cross_platform.FoamClass.FoamClassBuilder(null) // TODO give context
      .setId("foam.core.Slot")
      .setParent(foam.cross_platform.AbstractFObject.CLS_)
      .setAxioms(new Object[] {foam.core.Requires.RequiresBuilder(null) // TODO give context
      .setName("SubSlot")
      .setPath("foam.core.internal.SubSlot")
      .build(), foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("valueSub")
      .setCode(null)
      .setForClass_("foam.core.Slot")
      .setArgs(new foam.core.Argument[] {  })
      .build(), foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("link")
      .setCode(null)
      .setForClass_("foam.core.Slot")
      .setArgs(new foam.core.Argument[] {  })
      .build(), foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("linkFrom")
      .setCode(null)
      .setForClass_("foam.core.Slot")
      .setArgs(new foam.core.Argument[] {  })
      .build(), foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("linkTo")
      .setCode(null)
      .setForClass_("foam.core.Slot")
      .setArgs(new foam.core.Argument[] {  })
      .build(), foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("follow")
      .setCode(null)
      .setForClass_("foam.core.Slot")
      .setArgs(new foam.core.Argument[] {  })
      .build(), foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("mapFrom")
      .setCode(null)
      .setForClass_("foam.core.Slot")
      .setArgs(new foam.core.Argument[] {  })
      .build(), foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("mapTo")
      .setCode(null)
      .setForClass_("foam.core.Slot")
      .setArgs(new foam.core.Argument[] {  })
      .build(), foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("map")
      .setCode(null)
      .setForClass_("foam.core.Slot")
      .setArgs(new foam.core.Argument[] {  })
      .build(), foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("relateTo")
      .setCode(null)
      .setForClass_("foam.core.Slot")
      .setArgs(new foam.core.Argument[] {  })
      .build(), foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("relateFrom")
      .setCode(null)
      .setForClass_("foam.core.Slot")
      .setArgs(new foam.core.Argument[] {  })
      .build(), foam.core.Implements.ImplementsBuilder(null) // TODO give context
      .setPath("foam.core.SlotInterface")
      .build(), foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("slotGet")
      .setCode(null)
      .setType("Any")
      .setForClass_("foam.core.Slot")
      .setArgs(new foam.core.Argument[] {  })
      .build(), foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("slotSet")
      .setCode(null)
      .setForClass_("foam.core.Slot")
      .setArgs(new foam.core.Argument[] { foam.core.Argument.ArgumentBuilder(null) // TODO give context
      .setName("value")
      .setType("Any")
      .build() })
      .build(), foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("slotSub")
      .setCode(null)
      .setType("foam.core.Detachable")
      .setForClass_("foam.core.Slot")
      .setArgs(new foam.core.Argument[] { foam.core.Argument.ArgumentBuilder(null) // TODO give context
      .setName("listener")
      .setType("foam.cross_platform.Listener")
      .build() })
      .build()})
      .build();
  }

  public static Builder SlotBuilder(foam.cross_platform.Context x) {

    return new Builder();
  }
  public static class Builder {


    private Builder() {

    }

    public Slot build() {

      Slot o = new Slot();
      
      o.init();
      return o;
    }
  }
}