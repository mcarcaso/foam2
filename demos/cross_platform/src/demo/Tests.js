foam.CLASS({
  package: 'demo',
  name: 'Tests',
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
    }
  ]
});
