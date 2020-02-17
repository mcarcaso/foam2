foam.CLASS({
  package: 'foam.cross_platform.deserialize',
  name: 'Repeat0',
  extends: 'foam.cross_platform.deserialize.ProxyParser',
  properties: [
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.deserialize.Parser',
      name: 'delim',
    },
    {
      class: 'IntProperty',
      name: 'min',
      value: -1,
    },
    {
      class: 'IntProperty',
      name: 'max',
      value: -1,
    },
  ],
  methods: [
    {
      name: 'parse',
      androidCode: `
        boolean first = true;
        foam.cross_platform.deserialize.PStream result = null;

        int i = 0;
        while ( getMax() == -1 || i < getMax() ) {
          if ( getDelegate() != null && ! first ) {
            result = getDelegate().parse(ps, x);
            if ( result == null ) break;
            ps = result;
          }

          result = getDelegate().parse(ps, x);
          if ( result == null ) break;
          ps = result;
          first = false;

          i+=1;
        }

        if ( getMin() != -1 && i < getMin() ) return null;
        return ps;
      `
    },
  ]
});
