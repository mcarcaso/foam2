foam.CLASS({
  package: 'foam.cross_platform',
  name: 'AsyncFunction',
  extends: 'foam.cross_platform.ProxyFunction',
  requires: [
    'foam.cross_platform.Promise'
  ],
  methods: [
    {
      name: 'executeFunction',
      androidCode: `
        final foam.cross_platform.Promise p = Promise_create().build();

        // TODO: Do this async!
        p.set(getDelegate().executeFunction(args));

        return p;
      `
    }
  ]
});
