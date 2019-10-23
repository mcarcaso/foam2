foam.CLASS({
  package: 'foam.android',
  name: 'Tests',
  classes: [
    {
      name: 'Person',
      properties: [
        {
          class: 'StringProperty',
          name: 'name'
        }
      ],
      methods: [
        {
          type: 'String',
          name: 'greetString',
          args: [
            {
              type: 'String',
              name: 'name'
            },
          ],
          androidCode: `
            return "Hello " + name + " from " + getName();
          `
        }
      ]
    }
  ],
  methods: [
    {
      name: 'testListen',
      androidCode: `
        Person test = Person_create().build();

        final int[] numPubs = new int[] { 0, 0, 0 };
        test.sub(new String[] {}, new foam.cross_platform.Listener() {
          public void executeListener(foam.core.Detachable sub, Object[] args) {
            numPubs[0]++;
            sub.detach();
          }
        });

        test.sub(new String[] {}, new foam.cross_platform.Listener() {
          public void executeListener(foam.core.Detachable sub, Object[] args) {
            numPubs[1]++;
          }
        });

        test.getName$().slotSub(new foam.cross_platform.Listener() {
          public void executeListener(foam.core.Detachable sub, Object[] args) {
            numPubs[2]++;
          }
        });

        test.setName("1");
        test.setName("2");
        assert test.greetString("3").equals("Hello 3 from 2");

        assert numPubs[0] == 1;
        assert numPubs[1] == 2;
        assert numPubs[2] == 2;

        test.detach();
      `
    }
  ]
});
