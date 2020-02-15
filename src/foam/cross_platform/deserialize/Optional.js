foam.CLASS({
  package: 'foam.cross_platform.deserialize',
  name: 'Optional',
  extends: 'foam.cross_platform.deserialize.ProxyParser',
  methods: [
    {
      name: 'parse',
      androidCode: `
        foam.cross_platform.deserialize.PStream ret = getDelegate().parse(ps, x);
        if ( ret != null ) return ret;
        return ps.setValue(null);
      `
    },
  ]
});
