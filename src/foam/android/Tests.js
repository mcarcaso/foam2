foam.CLASS({
  package: 'foam.android',
  name: 'Tests',
  classes: [
    {
      name: 'Person',
      properties: [
        {
          class: 'StringProperty',
          name: 'firstName'
        },
        {
          class: 'StringProperty',
          name: 'lastName'
        },
        {
          class: 'StringProperty',
          name: 'fullName',
          androidExpressionArgs: ['firstName', 'lastName'],
          androidExpression: `return firstName + " " + lastName;`
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
            System.out.println("Hello " + name + " from " + getFullName());
            return "Hello " + name + " from " + getFullName();
          `
        }
      ]
    }
  ],
  methods: [
    {
      name: 'init',
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
        assert test.sayHi("3").equals("Hello 3 from 1 2");

        for ( int i = 0 ; i < numPubs.length ; i++ ) {
          System.out.println(numPubs[i]);
        }

        assertEquals(numPubs[0], 1, "Listener detached after first change");
        assertEquals(numPubs[1], 4, "All events fired: firstName -> fullName + lastName -> fullName");
        assertEquals(numPubs[2], 1, "firstName listener only fired once");
        assertEquals(numPubs[3], 2, "fullName listener fired twice");

        test.detach();
      `
    }
  ]
});
