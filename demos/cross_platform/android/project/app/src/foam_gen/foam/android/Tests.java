// WARNING: GENERATED CODE, DO NOT MODIFY BY HAND!
package foam.android;


public class Tests extends foam.cross_platform.AbstractFObject {

  public static foam.cross_platform.FoamClass CLS_ =
    initClassInfo_();


  protected Person.Builder Person_create() {

    return Person.PersonBuilder(getSubX());
  }

  public void init() {

    System.out.println("Tests initialized!");
  }

  public void assertEquals(Object o1, Object o2, String msg) {

    if ( ! foam.cross_platform.Lib.equals(o1, o2) ) {
      throw new RuntimeException("FAILED: " + msg);
    } else {
      System.out.println("PASSED: " + msg);
    }
  }

  public void testListen() {

    Person test = Person_create().build();
    
    final int[] numPubs = new int[] { 0, 0, 0, 0 };
    test.sub(null, new foam.cross_platform.Listener() {
      public void executeListener(foam.core.Detachable sub, Object[] args) {
        numPubs[0]++;
        sub.detach();
      }
    });
    
    test.sub(null, new foam.cross_platform.Listener() {
      public void executeListener(foam.core.Detachable sub, Object[] args) {
        numPubs[1]++;
      }
    });
    
    test.getFirstName$().slotSub(new foam.cross_platform.Listener() {
      public void executeListener(foam.core.Detachable sub, Object[] args) {
        numPubs[2]++;
      }
    });
    
    test.getFullName$().slotSub(new foam.cross_platform.Listener() {
      public void executeListener(foam.core.Detachable sub, Object[] args) {
        numPubs[3]++;
      }
    });
    // Must touch the fullName to initialize its value and have it react to
    // changes in the args it subscribes to.
    test.getFullName();
    
    test.setFirstName("1");
    test.setLastName("2");
    assert test.sayHi("3").equals("Hello 3 from 1 2");
    
    for ( int i = 0 ; i < numPubs.length ; i++ ) {
      System.out.println(numPubs[i]);
    }
    
    assertEquals(numPubs[0], 1, "Listener detached after first change");
    assertEquals(numPubs[1], 4, "All events fired: firstName -> fullName + lastName -> fullName");
    assertEquals(numPubs[2], 1, "firstName listener only fired once");
    assertEquals(numPubs[3], 2, "fullName listener fired twice");
    
    test.detach();
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

  protected Tests () {

  }

  public foam.cross_platform.FoamClass getCls_() {

    return CLS_;
  }

  public static foam.cross_platform.FoamClass initClassInfo_() {

    return foam.cross_platform.FoamClass.FoamClassBuilder(null) // TODO give context
      .setId("foam.android.Tests")
      .setParent(foam.cross_platform.AbstractFObject.CLS_)
      .setAxioms(new Object[] {foam.core.InnerClass.InnerClassBuilder(null) // TODO give context
      .setModel(foam.core.Model.ModelBuilder(null) // TODO give context
      .setName("Person")
      .setAxioms_(new Object[] {Person.FIRST_NAME, Person.LAST_NAME, Person.FULL_NAME, Person.DATE_OF_BIRTH, foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("sayHi")
      .setType("String")
      .setForClass_("Person")
      .setArgs(new foam.core.Argument[] { foam.core.Argument.ArgumentBuilder(null) // TODO give context
      .setName("name")
      .setType("String")
      .build() })
      .setAndroidCode("\n            System.out.println(\"Hello \" + name + \" from \" + getFullName());\n            return \"Hello \" + name + \" from \" + getFullName();\n          ")
      .build()})
      .setProperties(new Object[] {Person.FIRST_NAME, Person.LAST_NAME, Person.FULL_NAME, Person.DATE_OF_BIRTH})
      .setMethods(new Object[] {foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("sayHi")
      .setType("String")
      .setForClass_("Person")
      .setArgs(new foam.core.Argument[] { foam.core.Argument.ArgumentBuilder(null) // TODO give context
      .setName("name")
      .setType("String")
      .build() })
      .setAndroidCode("\n            System.out.println(\"Hello \" + name + \" from \" + getFullName());\n            return \"Hello \" + name + \" from \" + getFullName();\n          ")
      .build()})
      .build())
      .build(), foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("assertEquals")
      .setForClass_("foam.android.Tests")
      .setArgs(new foam.core.Argument[] { foam.core.Argument.ArgumentBuilder(null) // TODO give context
      .setName("o1")
      .setType("Any")
      .build(), foam.core.Argument.ArgumentBuilder(null) // TODO give context
      .setName("o2")
      .setType("Any")
      .build(), foam.core.Argument.ArgumentBuilder(null) // TODO give context
      .setName("msg")
      .setType("String")
      .build() })
      .setAndroidCode("\n        if ( ! foam.cross_platform.Lib.equals(o1, o2) ) {\n          throw new RuntimeException(\"FAILED: \" + msg);\n        } else {\n          System.out.println(\"PASSED: \" + msg);\n        }\n      ")
      .build(), foam.core.Method.MethodBuilder(null) // TODO give context
      .setName("testListen")
      .setForClass_("foam.android.Tests")
      .setArgs(new foam.core.Argument[] {  })
      .setAndroidCode("\n        Person test = Person_create().build();\n\n        final int[] numPubs = new int[] { 0, 0, 0, 0 };\n        test.sub(null, new foam.cross_platform.Listener() {\n          public void executeListener(foam.core.Detachable sub, Object[] args) {\n            numPubs[0]++;\n            sub.detach();\n          }\n        });\n\n        test.sub(null, new foam.cross_platform.Listener() {\n          public void executeListener(foam.core.Detachable sub, Object[] args) {\n            numPubs[1]++;\n          }\n        });\n\n        test.getFirstName$().slotSub(new foam.cross_platform.Listener() {\n          public void executeListener(foam.core.Detachable sub, Object[] args) {\n            numPubs[2]++;\n          }\n        });\n\n        test.getFullName$().slotSub(new foam.cross_platform.Listener() {\n          public void executeListener(foam.core.Detachable sub, Object[] args) {\n            numPubs[3]++;\n          }\n        });\n        // Must touch the fullName to initialize its value and have it react to\n        // changes in the args it subscribes to.\n        test.getFullName();\n\n        test.setFirstName(\"1\");\n        test.setLastName(\"2\");\n        assert test.sayHi(\"3\").equals(\"Hello 3 from 1 2\");\n\n        for ( int i = 0 ; i < numPubs.length ; i++ ) {\n          System.out.println(numPubs[i]);\n        }\n\n        assertEquals(numPubs[0], 1, \"Listener detached after first change\");\n        assertEquals(numPubs[1], 4, \"All events fired: firstName -> fullName + lastName -> fullName\");\n        assertEquals(numPubs[2], 1, \"firstName listener only fired once\");\n        assertEquals(numPubs[3], 2, \"fullName listener fired twice\");\n\n        test.detach();\n      ")
      .build()})
      .build();
  }

  public static Builder TestsBuilder(foam.cross_platform.Context x) {

    return new Builder();
  }
  public static class Person extends foam.cross_platform.AbstractFObject {

    private boolean fullName_isSet_ =
      false;

    protected String firstName_;

    private foam.core.Slot firstName_$;

    public static foam.core.StringProperty FIRST_NAME =
      init_FIRST_NAME();

    protected String lastName_;

    private boolean lastName_isSet_ =
      false;

    private foam.core.Slot lastName_$;

    public static foam.core.StringProperty LAST_NAME =
      init_LAST_NAME();

    protected String fullName_;

    private boolean firstName_isSet_ =
      false;

    private foam.core.Slot fullName_$;

    private foam.core.Detachable fullName_expression_sub_;

    public static foam.core.StringProperty FULL_NAME =
      init_FULL_NAME();

    protected java.util.Date dateOfBirth_;

    private boolean dateOfBirth_isSet_ =
      false;

    private foam.core.Slot dateOfBirth_$;

    public static foam.core.DateProperty DATE_OF_BIRTH =
      init_DATE_OF_BIRTH();

    public static foam.cross_platform.FoamClass CLS_ =
      initClassInfo_();


    public foam.core.Slot getFirstName$() {

      if ( firstName_$ == null ) {
        firstName_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
          .setObj(this)
          .setProp(FIRST_NAME)
          .build();
      }
      return firstName_$;
    }

    public String getFirstName() {

      if ( ! firstName_isSet_ ) {
        return "";
      }
      return firstName_;
    }

    private String firstName_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

      return (String) newValue;
    }

    public void setFirstName(Object value) {

      boolean hasOldValue = hasPropertySet("firstName");
      Object oldValue = hasOldValue ?
        getFirstName() :
        null;
      String castedValue = firstName_adapt(oldValue, value, hasOldValue);
      
      firstName_isSet_ = true;
      firstName_ = castedValue;
      Object[] args = new Object[] { "propertyChange", "firstName", null };
      if ( hasListeners(args) ) {
        args[2] = getFirstName$();
        pub(args);
      }
    }

    private static foam.core.StringProperty init_FIRST_NAME() {

      return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
        .setName("firstName")
        .setForClass_("Person")
        .build();
    }

    public foam.core.Slot getLastName$() {

      if ( lastName_$ == null ) {
        lastName_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
          .setObj(this)
          .setProp(LAST_NAME)
          .build();
      }
      return lastName_$;
    }

    public String getLastName() {

      if ( ! lastName_isSet_ ) {
        return "";
      }
      return lastName_;
    }

    private String lastName_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

      return (String) newValue;
    }

    public void setLastName(Object value) {

      boolean hasOldValue = hasPropertySet("lastName");
      Object oldValue = hasOldValue ?
        getLastName() :
        null;
      String castedValue = lastName_adapt(oldValue, value, hasOldValue);
      
      lastName_isSet_ = true;
      lastName_ = castedValue;
      Object[] args = new Object[] { "propertyChange", "lastName", null };
      if ( hasListeners(args) ) {
        args[2] = getLastName$();
        pub(args);
      }
    }

    private static foam.core.StringProperty init_LAST_NAME() {

      return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
        .setName("lastName")
        .setForClass_("Person")
        .build();
    }

    public foam.core.Slot getFullName$() {

      if ( fullName_$ == null ) {
        fullName_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
          .setObj(this)
          .setProp(FULL_NAME)
          .build();
      }
      return fullName_$;
    }

    protected String fullName_expression_(String firstName, String lastName) {

      return firstName + " " + lastName;
    }

    public String getFullName() {

      if ( ! fullName_isSet_ && fullName_expression_sub_ == null ) {
        final Person obj = this;
        final foam.core.ExpressionSlot eSlot = foam.core.ExpressionSlot.ExpressionSlotBuilder(getSubX())
          .setArgs(new foam.core.Slot[] {
            getSlot("firstName"),getSlot("lastName")
          })
          .setCode(new foam.cross_platform.GenericFunction() {
            public Object executeFunction(Object[] args) {
              return obj.fullName_expression_(
      
                  (String) args[0]
                ,
                  (String) args[1]
      
              );
            }
          })
          .build();
        fullName_ = (String) eSlot.slotGet();
        fullName_expression_sub_ = eSlot.slotSub(new foam.cross_platform.Listener() {
          public void executeListener(foam.core.Detachable sub, Object[] args) {
            if ( foam.cross_platform.Lib.compare(eSlot.slotGet(), obj.fullName_) != 0 ) {
              obj.fullName_ = (String) eSlot.slotGet();
              obj.pub(new Object[] { "propertyChange", "fullName", obj.fullName_ });
            }
          }
        });
      }
      return fullName_;
    }

    private String fullName_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

      return (String) newValue;
    }

    public void setFullName(Object value) {

      boolean hasOldValue = hasPropertySet("fullName");
      Object oldValue = hasOldValue ?
        getFullName() :
        null;
      String castedValue = fullName_adapt(oldValue, value, hasOldValue);
      
      if ( fullName_expression_sub_ != null ) fullName_expression_sub_.detach();
      
      fullName_isSet_ = true;
      fullName_ = castedValue;
      Object[] args = new Object[] { "propertyChange", "fullName", null };
      if ( hasListeners(args) ) {
        args[2] = getFullName$();
        pub(args);
      }
    }

    private static foam.core.StringProperty init_FULL_NAME() {

      return foam.core.StringProperty.StringPropertyBuilder(null) // TODO give context
        .setName("fullName")
        .setForClass_("Person")
        .setAndroidExpressionArgs(new String[] { "firstName", "lastName" })
        .setAndroidExpression("return firstName + \" \" + lastName;")
        .build();
    }

    public foam.core.Slot getDateOfBirth$() {

      if ( dateOfBirth_$ == null ) {
        dateOfBirth_$ = foam.core.internal.PropertySlot.PropertySlotBuilder(getX())
          .setObj(this)
          .setProp(DATE_OF_BIRTH)
          .build();
      }
      return dateOfBirth_$;
    }

    public java.util.Date getDateOfBirth() {

      if ( ! dateOfBirth_isSet_ ) {
        return null;
      }
      return dateOfBirth_;
    }

    private java.util.Date dateOfBirth_adapt(Object oldValue, Object newValue, boolean oldValueSet) {

      return (java.util.Date) newValue;
    }

    public void setDateOfBirth(Object value) {

      boolean hasOldValue = hasPropertySet("dateOfBirth");
      Object oldValue = hasOldValue ?
        getDateOfBirth() :
        null;
      java.util.Date castedValue = dateOfBirth_adapt(oldValue, value, hasOldValue);
      
      dateOfBirth_isSet_ = true;
      dateOfBirth_ = castedValue;
      Object[] args = new Object[] { "propertyChange", "dateOfBirth", null };
      if ( hasListeners(args) ) {
        args[2] = getDateOfBirth$();
        pub(args);
      }
    }

    private static foam.core.DateProperty init_DATE_OF_BIRTH() {

      return foam.core.DateProperty.DatePropertyBuilder(null) // TODO give context
        .setName("dateOfBirth")
        .setForClass_("Person")
        .build();
    }

    public String sayHi(String name) {

      System.out.println("Hello " + name + " from " + getFullName());
      return "Hello " + name + " from " + getFullName();
    }

    public void clearProperty(String name) {

      switch(name) {
      
        case "firstName":
          firstName_isSet_ = false;
          Object[] firstNameArgs = new Object[] { "propertyChange", "firstName", null };
          if ( hasListeners(firstNameArgs) ) {
            firstNameArgs[2] = getFirstName$();
            pub(firstNameArgs);
          }
          return;
      
      
        case "lastName":
          lastName_isSet_ = false;
          Object[] lastNameArgs = new Object[] { "propertyChange", "lastName", null };
          if ( hasListeners(lastNameArgs) ) {
            lastNameArgs[2] = getLastName$();
            pub(lastNameArgs);
          }
          return;
      
      
        case "fullName":
          fullName_isSet_ = false;
          Object[] fullNameArgs = new Object[] { "propertyChange", "fullName", null };
          if ( hasListeners(fullNameArgs) ) {
            fullNameArgs[2] = getFullName$();
            pub(fullNameArgs);
          }
          return;
      
      
        case "dateOfBirth":
          dateOfBirth_isSet_ = false;
          Object[] dateOfBirthArgs = new Object[] { "propertyChange", "dateOfBirth", null };
          if ( hasListeners(dateOfBirthArgs) ) {
            dateOfBirthArgs[2] = getDateOfBirth$();
            pub(dateOfBirthArgs);
          }
          return;
      
      }
      
      super.clearProperty(name);
      
    }

    public Object getProperty(String name) {

      switch(name) {
      
        case "firstName":
          return getFirstName();
      
      
        case "lastName":
          return getLastName();
      
      
        case "fullName":
          return getFullName();
      
      
        case "dateOfBirth":
          return getDateOfBirth();
      
      }
      return super.getProperty(name);
    }

    public foam.core.Slot getSlot(String name) {

      switch(name) {
      
        case "firstName":
          return getFirstName$();
      
      
        case "lastName":
          return getLastName$();
      
      
        case "fullName":
          return getFullName$();
      
      
        case "dateOfBirth":
          return getDateOfBirth$();
      
      }
      return super.getSlot(name);
    }

    public boolean hasPropertySet(String name) {

      switch(name) {
      
        case "firstName":
          return firstName_isSet_;
      
      
        case "lastName":
          return lastName_isSet_;
      
      
        case "fullName":
          return fullName_isSet_;
      
      
        case "dateOfBirth":
          return dateOfBirth_isSet_;
      
      }
      
      return super.hasPropertySet(name);
      
    }

    public void setProperty(String name, Object value) {

      switch(name) {
      
        case "firstName":
          setFirstName((String) value);
          return;
      
      
        case "lastName":
          setLastName((String) value);
          return;
      
      
        case "fullName":
          setFullName((String) value);
          return;
      
      
        case "dateOfBirth":
          setDateOfBirth((java.util.Date) value);
          return;
      
      }
      
      super.setProperty(name, value);
      
    }

    protected Person () {

    }

    public foam.cross_platform.FoamClass getCls_() {

      return CLS_;
    }

    public static foam.cross_platform.FoamClass initClassInfo_() {

      return foam.cross_platform.FoamClass.FoamClassBuilder(null) // TODO give context
        .setId("Person")
        .setParent(foam.cross_platform.AbstractFObject.CLS_)
        .setAxioms(new Object[] {Person.FIRST_NAME, Person.LAST_NAME, Person.FULL_NAME, Person.DATE_OF_BIRTH, foam.core.Method.MethodBuilder(null) // TODO give context
        .setName("sayHi")
        .setType("String")
        .setForClass_("Person")
        .setArgs(new foam.core.Argument[] { foam.core.Argument.ArgumentBuilder(null) // TODO give context
        .setName("name")
        .setType("String")
        .build() })
        .setAndroidCode("\n            System.out.println(\"Hello \" + name + \" from \" + getFullName());\n            return \"Hello \" + name + \" from \" + getFullName();\n          ")
        .build()})
        .build();
    }

    public static Builder PersonBuilder(foam.cross_platform.Context x) {

      return new Builder();
    }
    public static class Builder {

      private boolean firstName_isSet_ =
        false;

      private String firstName_;

      private boolean lastName_isSet_ =
        false;

      private String lastName_;

      private boolean fullName_isSet_ =
        false;

      private String fullName_;

      private boolean dateOfBirth_isSet_ =
        false;

      private java.util.Date dateOfBirth_;


      public Builder setFirstName(String value) {

        firstName_isSet_ = true;
        firstName_ = value;
        return this;
      }

      public Builder setLastName(String value) {

        lastName_isSet_ = true;
        lastName_ = value;
        return this;
      }

      public Builder setFullName(String value) {

        fullName_isSet_ = true;
        fullName_ = value;
        return this;
      }

      public Builder setDateOfBirth(java.util.Date value) {

        dateOfBirth_isSet_ = true;
        dateOfBirth_ = value;
        return this;
      }

      private Builder() {

      }

      public Person build() {

        Person o = new Person();
        
        if ( firstName_isSet_ ) {
          o.setFirstName(firstName_);
        }
        
        if ( lastName_isSet_ ) {
          o.setLastName(lastName_);
        }
        
        if ( fullName_isSet_ ) {
          o.setFullName(fullName_);
        }
        
        if ( dateOfBirth_isSet_ ) {
          o.setDateOfBirth(dateOfBirth_);
        }
        
        o.init();
        return o;
      }
    }
  }
  public static class Builder {


    private Builder() {

    }

    public Tests build() {

      Tests o = new Tests();
      
      o.init();
      return o;
    }
  }
}