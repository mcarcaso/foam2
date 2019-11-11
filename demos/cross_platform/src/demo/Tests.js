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
          name: 'anyProp',
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
        test.sub(null, ${foam.cpListener(`
            numPubs[0]++;
            sub.detach();
        `, 'android')});

        test.sub(null, ${foam.cpListener(`
            numPubs[1]++;
        `, 'android')});

        test.getFirstName$().slotSub(${foam.cpListener(`
            numPubs[2]++;
        `, 'android')});

        test.getFullName$().slotSub(${foam.cpListener(`
            numPubs[3]++;
        `, 'android')});
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
        _ = test.sub(nil, ${foam.cpListener(`
            numPubs[0] += 1;
            sub?.detach();
        `, 'swift')});

        _ = test.sub(nil, ${foam.cpListener(`
            numPubs[1] += 1;
        `, 'swift')});

        _ = test.getFirstName$().slotSub(${foam.cpListener(`
            numPubs[2] += 1;
        `, 'swift')});

        _ = test.getFullName$().slotSub(${foam.cpListener(`
            numPubs[3] += 1;
        `, 'swift')});

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
        slot.setCode(${foam.cpFn(`
            return args[0] + " " + args[1];
        `, 'android')});
        
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
        slot.setCode(${foam.cpFn(`
            return (args![0] as! String) + " " + (args![1] as! String);
        `, 'swift')})

        o.setFirstName("Mike");
        o.setLastName("C");
        assertEquals(slot.slotGet(), "Mike C", "Slot's value is as expected");

        o.setLastName("D");
        assertEquals(slot.slotGet(), "Mike D", "Slot's value is as expected");

        o.detach();
        slot.detach();
      `
    },
    {
      name: 'testHasOwnProperty',
      androidCode: `
        Person o = Person_create().build();

        assertEquals(o.hasPropertySet("firstName"), false, "First name is not considered set.");
        o.setFirstName("Mike");
        assertEquals(o.hasPropertySet("firstName"), true, "First name is considered set.");
        assertEquals(o.getFirstName(), "Mike", "First name is as expected.");

        o.setLastName("C");
        assertEquals(o.getFullName(), "Mike C", "Full name is as expected.");
        assertEquals(o.hasPropertySet("fullName"), false, "Full name is not considered set.");

        o.clearProperty("firstName");
        assertEquals(o.hasPropertySet("firstName"), false, "First name is not considered set.");
        assertEquals(o.getFullName(), " C", "Full name is as expected.");

        o.detach();
      `,
      swiftCode: `
        let o = Person_create().build();

        assertEquals(o.hasPropertySet("firstName"), false, "First name is not considered set.");
        o.setFirstName("Mike");
        assertEquals(o.hasPropertySet("firstName"), true, "First name is considered set.");
        assertEquals(o.getFirstName(), "Mike", "First name is as expected.");

        o.setLastName("C");
        assertEquals(o.getFullName(), "Mike C", "Full name is as expected.");
        assertEquals(o.hasPropertySet("fullName"), false, "Full name is not considered set.");

        o.clearProperty("firstName");
        assertEquals(o.hasPropertySet("firstName"), false, "First name is not considered set.");
        assertEquals(o.getFullName(), " C", "Full name is as expected.");

        o.detach();
      `
    },
    {
      name: 'testSubSlot',
      androidCode: `
        Person t = Person_create().build();
        Person t2 = Person_create().build();
        t2.setFirstName("YO");
        t.setAnyProp(t2);
        
        foam.core.SlotInterface s = t.getAnyProp$().dot("firstName");
        assertEquals(s.slotGet(), "YO", "Slot value is as expected");
        
        final int[] i = {0};
        final Tests self = this;
        s.slotSub(${foam.cpListener(`
          i[0] += 1;
          self.assertEquals(s.slotGet(), "YO2", "Slot value is as expected.");
        `, 'android')});
        t2.setFirstName("YO2");
        assertEquals(s.slotGet(), "YO2", "Slot value is as expected.");
        assertEquals(i[0], 1, "Slot listener fired.");
      `,
      swiftCode: `
        let t = Person_create().build();
        let t2 = Person_create().build();
        t2.setFirstName("YO");
        t.setAnyProp(t2);

        let s = t.getAnyProp$().dot("firstName")!;
        assertEquals(s.slotGet(), "YO", "Slot value is as expected");

        var i = 0;
        _ = s.slotSub(${foam.cpListener(`
            i += 1;
            self.assertEquals(s.slotGet(), "YO2", "Slot value is as expected.");
        `, 'swift')});
        t2.setFirstName("YO2");
        assertEquals(s.slotGet(), "YO2", "Slot value is as expected.");
        assertEquals(i, 1, "Slot listener fired.");
      `
    },
    {
      name: 'testSubSlot2',
      androidCode: `
        Person t = Person_create()
          .setFirstName("a")
          .build();

        final int[] slotCount = new int[2];
        foam.core.Detachable s1 = t.getFirstName$().slotSub(${foam.cpListener(`
            slotCount[0] += 1;
        `, 'android')});

        Person t2 = Person_create()
          .setAnyProp(t)
          .build();
        foam.core.Detachable s2 = t2.getAnyProp$().dot("firstName").slotSub(${foam.cpListener(`
            slotCount[1] += 1;
        `, 'android')});

        assertEquals(t2.getAnyProp$().dot("firstName").slotGet(), "a", "t2's anyProp slot has the correct value.");
        assertEquals(slotCount[0], 0, "Slot has not fired.");
        assertEquals(slotCount[1], 0, "SubSlot has not fired.");

        t.setFirstName("B");

        assertEquals(t2.getAnyProp$().dot("firstName").slotGet(), "B", "t2's anyProp slot has the correct value.");
        assertEquals(slotCount[0], 1, "Slot has fired.");
        assertEquals(slotCount[1], 1, "SubSlot has fired.");

        s1.detach();
        s2.detach();
        t.detach();
        t2.detach();
      `,
      swiftCode: `
        let t = Person_create()
          .setFirstName("a")
          .build();

        var slot = 0;
        let s1 = t.getFirstName$().slotSub(${foam.cpListener(`
            slot += 1;
        `, 'swift')});

        var subSlot = 0;
        let t2 = Person_create()
          .setAnyProp(t)
          .build();
        let s2 = t2.getAnyProp$().dot("firstName")!.slotSub(${foam.cpListener(`
            subSlot += 1;
        `, 'swift')});

        assertEquals(t2.getAnyProp$().dot("firstName")!.slotGet(), "a", "t2's anyProp slot has the correct value.");
        assertEquals(slot, 0, "Slot has not fired.");
        assertEquals(subSlot, 0, "SubSlot has not fired.");

        t.setFirstName("B");

        assertEquals(t2.getAnyProp$().dot("firstName")!.slotGet(), "B", "t2's anyProp slot has the correct value.");
        assertEquals(slot, 1, "Slot has fired.");
        assertEquals(subSlot, 1, "SubSlot has fired.");

        s1?.detach();
        s2?.detach();
        t.detach();
        t2.detach();
      `
    },
  ]
});
