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
          if ( getDelim() != null && ! first ) {
            result = getDelim().parse(ps, x);
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
      `,
      swiftCode: `
        var ps = ps!;
        var first = true;
        var result: foam_cross_platform_deserialize_PStream? = nil;

        var i = 0;
        while ( getMax() == -1 || i < getMax() ) {
          if ( getDelim() != nil && !first ) {
            result = getDelim()!.parse(ps, x);
            if ( result == nil ) { break; }
            ps = result!;
          }

          result = getDelegate()!.parse(ps, x);
          if ( result == nil ) { break; }
          ps = result!;
          first = false;

          i+=1;
        }

        if ( getMin() != -1 && i < getMin() ) { return nil; }
        return ps;
      `
    },
  ]
});
