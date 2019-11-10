foam.CLASS({
  package: 'demo',
  name: 'Tests',
  requires: [
    'foam.core.ExpressionSlot'
  ],
  classes: [
    {
      name: 'Person',
      properties: [
        {
          class: 'StringProperty',
          name: 'firstName',
          androidPostSet: `
            System.out.println("First name has been set to: " + newValue);
          `,
          swiftPostSet: `
            print("First name has been set to: " + newValue!);
          `
        },
        {
          class: 'StringProperty',
          name: 'lastName'
        },
        {
          class: 'StringProperty',
          name: 'fullName',
          expressionArgs: ['firstName', 'lastName'],
          androidExpression: `return firstName + " " + lastName;`,
          swiftExpression: `return firstName! + " " + lastName!;`
        },
        {
          class: 'DateProperty',
          name: 'dateOfBirth'
        },
      ],
      methods: [
        {
          type: 'String',
          name: 'sayHi',
          args: [
            {
              type: 'String',
              name: 'name'
            },
          ],
          androidCode: `
            return "Hello " + name + " from " + getFullName();
          `,
          swiftCode: `
            return "Hello " + name! + " from " + getFullName()!;
          `
        }
      ]
    }
  ],
  methods: [
    {
      name: 'init',
      swiftCode: `
        print("Tests initialized!");
      `,
      androidCode: `
        System.out.println("Tests initialized!");
      `
    },
    {
      name: 'assertEquals',
      args: [
        { type: 'Any', name: 'o1' },
        { type: 'Any', name: 'o2' },
        { type: 'String', name: 'msg' }
      ],
      androidCode: `
        if ( ! foam.cross_platform.Lib.equals(o1, o2) ) {
          throw new RuntimeException("FAILED: " + msg);
        } else {
          System.out.println("PASSED: " + msg);
        }
      `,
      swiftCode: `
        if !foam_cross_platform_Lib.equals(o1, o2) {
          fatalError("FAILED: " + msg!);
        } else {
          print("PASSED: " + msg!);
        }
      `
    },
    {
      name: 'testListen',
      androidCode: `
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

        assertEquals(test.sayHi("3"), "Hello 3 from 1 2", "sayHi works");

        assertEquals(numPubs[0], 1, "Listener detached after first change");
        assertEquals(numPubs[1], 4, "All events fired: firstName -> fullName + lastName -> fullName");
        assertEquals(numPubs[2], 1, "firstName listener only fired once");
        assertEquals(numPubs[3], 2, "fullName listener fired twice");

        test.detach();
      `,
      swiftCode: `
        let test = Person_create().build();

        var numPubs = [0, 0, 0, 0];
        _ = test.sub(nil, AnonymousListener_create()
          .setFn({(sub: foam_core_Detachable?, args: [Any?]?) -> Void in
            numPubs[0] += 1;
            sub?.detach();
          })
          .build()
        );

        _ = test.sub(nil, AnonymousListener_create()
          .setFn({(sub: foam_core_Detachable?, args: [Any?]?) -> Void in
            numPubs[1] += 1;
          })
          .build()
        );

        _ = test.getFirstName$().slotSub(AnonymousListener_create()
          .setFn({(sub: foam_core_Detachable?, args: [Any?]?) -> Void in
            numPubs[2] += 1;
          })
          .build()
        );

        _ = test.getFullName$().slotSub(AnonymousListener_create()
          .setFn({(sub: foam_core_Detachable?, args: [Any?]?) -> Void in
            numPubs[3] += 1;
          })
          .build()
        );

        // Must touch the fullName to initialize its value and have it react to
        // changes in the args it subscribes to.
        _ = test.getFullName();

        test.setFirstName("1");
        test.setLastName("2");

        assertEquals(test.sayHi("3"), "Hello 3 from 1 2", "sayHi works");

        assertEquals(numPubs[0], 1, "Listener detached after first change");
        assertEquals(numPubs[1], 4, "All events fired: firstName -> fullName + lastName -> fullName");
        assertEquals(numPubs[2], 1, "firstName listener only fired once");
        assertEquals(numPubs[3], 2, "fullName listener fired twice");

        test.detach();
      `
    },
    {
      name: 'testFollow',
      androidCode: `
        Person o1 = Person_create()
          .setFirstName("A")
          .build();
        Person o2 = Person_create()
          .build();

        o2.getFirstName$().linkFrom(o1.getFirstName$());
        assertEquals(o2.getFirstName(), "A", "o2 is following o1 firstName");

        o2.setFirstName("B");
        assertEquals(o1.getFirstName(), "B", "o1 is following o2 firstName");

        o1.detach();
        o2.detach();
      `,
      swiftCode: `
        let o1 = Person_create()
          .setFirstName("A")
          .build();
        let o2 = Person_create()
          .build();

        _ = o2.getFirstName$().linkFrom(o1.getFirstName$());
        assertEquals(o2.getFirstName(), "A", "o2 is following o1 firstName");

        o2.setFirstName("B");
        assertEquals(o1.getFirstName(), "B", "o1 is following o2 firstName");

        o1.detach();
        o2.detach();
      `
    },
    {
      name: 'testCompare',
      androidCode: `
        Person t1 = Person_create().build();
        Person t2 = Person_create().build();
        assertEquals(t1.compareTo(t2), 0, "t1 is equal to t2");
        t1.setFirstName("NOT T2");
        assertEquals(t1.compareTo(t2), 1, "t1 is not equal to t2");
        t2.setFirstName("NOT T2");
        assertEquals(t1.compareTo(t2), 0, "t1 is equal to t2");
        t1.clearProperty("firstName");
        assertEquals(t1.compareTo(t2), -1, "t1 is not equal to t2");
      `,
      swiftCode: `
        let t1 = Person_create().build();
        let t2 = Person_create().build();
        assertEquals(t1.compareTo(t2), 0, "t1 is equal to t2");
        t1.setFirstName("NOT T2")
        assertEquals(t1.compareTo(t2), 1, "t1 is not equal to t2");
        t2.setFirstName("NOT T2")
        assertEquals(t1.compareTo(t2), 0, "t1 is equal to t2");
        t1.clearProperty("firstName")
        assertEquals(t1.compareTo(t2), -1, "t1 is not equal to t2");
      `
    },
    {
      name: 'testExpression',
      androidCode: `
        Person t = Person_create().build();
        t.setFirstName("Mike");
        t.setLastName("C");
        assertEquals(t.getFullName(), "Mike C", "Full name is as expected.");
        t.setLastName("D");
        assertEquals(t.getFullName(), "Mike D", "Full name is as expected.");
        t.setFullName("OVERRIDE");
        assertEquals(t.getFullName(), "OVERRIDE", "Full name is as expected.");
        t.setFirstName("Nope");
        assertEquals(t.getFullName(), "OVERRIDE", "Full name is as expected.");
        t.detach();
      `,
      swiftCode: `
        let t = Person_create().build();
        t.setFirstName("Mike");
        t.setLastName("C");
        assertEquals(t.getFullName(), "Mike C", "Full name is as expected.");
        t.setLastName("D");
        assertEquals(t.getFullName(), "Mike D", "Full name is as expected.");
        t.setFullName("OVERRIDE");
        assertEquals(t.getFullName(), "OVERRIDE", "Full name is as expected.");
        t.setFirstName("Nope");
        assertEquals(t.getFullName(), "OVERRIDE", "Full name is as expected.");
        t.detach();
      `
    },
    {
      name: 'testExpressionSlot',
      androidCode: `
        Person o = Person_create().build();
        foam.core.ExpressionSlot slot = ExpressionSlot_create().build();
        slot.setArgs(new foam.core.SlotInterface[] {o.getFirstName$(), o.getLastName$()});
        slot.setCode(new foam.cross_platform.GenericFunction() {
          public Object executeFunction(Object[] args) {
            return args[0] + " " + args[1];
          }
        });
        
        o.setFirstName("Mike");
        o.setLastName("C");
        assertEquals(slot.slotGet(), "Mike C", "Slot's value is as expected");
        
        o.setLastName("D");
        assertEquals(slot.slotGet(), "Mike D", "Slot's value is as expected");
        
        o.detach();
        slot.detach();
      `,
      swiftCode: `
        let o = Person_create().build();
        let slot = ExpressionSlot_create().build();
        slot.setArgs([o.getFirstName$(), o.getLastName$()]);
        slot.setCode(AnonymousGenericFunction_create()
          .setFn({(args: [Any?]?) -> Any? in
            return (args![0] as! String) + " " + (args![1] as! String);
          })
          .build()
        )

        o.setFirstName("Mike");
        o.setLastName("C");
        assertEquals(slot.slotGet(), "Mike C", "Slot's value is as expected");

        o.setLastName("D");
        assertEquals(slot.slotGet(), "Mike D", "Slot's value is as expected");

        o.detach();
        slot.detach();
      `
    }
  ]
});
