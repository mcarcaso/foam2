foam.CLASS({
  package: 'foam.cross_platform.deserialize.json',
  name: 'FloatParser',
  implements: ['foam.cross_platform.deserialize.Parser'],
  axioms: [
    { class: 'foam.pattern.Singleton' }
  ],
  methods: [
    {
      name: 'parse',
      androidCode: `
        java.util.List n = new java.util.ArrayList();
        boolean decimalFound = false;

        if ( ! ps.valid() ) return null;

        char c = ps.head();

        if ( c == '-' ) {
          n.add(c);
          ps = ps.tail();
          if ( ps.valid() ) return null;
          c = ps.head();
        }

        // Float numbers must start with a digit: 0.1, 4.0
        if ( c.isDigit() ) n.add(c);
        else return null;

        ps = ps.tail();
        while ( ps.valid() ) {
          c = ps.head();
          if ( c.isDigit() ) {
            n.append(c);
          } else if (c == '.' ) {
            if ( decimalFound ) {
              return null;
            }
            decimalFound = true;
            n.add(c);
          } else {
            break;
          }
          ps = ps.tail();
        }

        if ( ! decimalFound ) return null;

        return ps.setValue(n.size() > 0 ? Float.parseFloat(String(n)) : null);
      `
    },
  ]
});
