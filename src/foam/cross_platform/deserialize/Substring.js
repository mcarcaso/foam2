foam.CLASS({
  package: 'foam.cross_platform.deserialize',
  name: 'Substring',
  extends: 'foam.cross_platform.deserialize.ProxyParser',
  methods: [
    {
      name: 'parse',
      androidCode: `
        foam.cross_platform.deserialize.PStream start = ps;
        ps = super.parse(ps, x);
        if ( ps != null ) {
          return ps.setValue(start.substring(ps));
        }
        return ps;
      `
    },
  ]
});
