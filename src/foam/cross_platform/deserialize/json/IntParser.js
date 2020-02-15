foam.CLASS({
  package: 'foam.cross_platform.deserialize.json',
  name: 'IntParser',
  implements: ['foam.cross_platform.deserialize.Parser'],
  axioms: [
    { class: 'foam.pattern.Singleton' }
  ],
  methods: [
    {
      name: 'parse',
      androidCode: `
        int n = 0;

        var negate = false;

        if ( !ps.valid() ) return null;

        char c = ps.head();

        if ( c == "-" ) {
          negate = true;
          ps = ps.tail();
          if ( ! ps.valid() ) return null;
          c = ps.head();
        }

        if ( c.isDigit() ) n = Integer.parseInt(c);
        else return null;

        ps = ps.tail();

        while ( ps.valid() ) {
          c = ps.head();
          if ( c.isDigit() ) {
            n *= 10;
            n += Integer.parseInt(c);
            if ( n > Integer.max() ) return null;
          } else {
            break;
          }
          ps = ps.tail();
        }

        if ( negate ) n *= -1;

        return ps.setValue(n);
      `
    },
  ]
});
