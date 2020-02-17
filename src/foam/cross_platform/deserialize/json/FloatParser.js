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
        StringBuilder n = new StringBuilder();
        boolean decimalFound = false;
        
        if ( ! ps.valid() ) return null;
        
        char c = ps.head();
        
        if ( c == '-' ) {
          n.append(c);
          ps = ps.tail();
          if ( ps.valid() ) return null;
          c = ps.head();
        }
        
        // Float numbers must start with a digit: 0.1, 4.0
        if ( Character.isDigit(c) ) n.append(c);
        else return null;
        
        ps = ps.tail();
        while ( ps.valid() ) {
          c = ps.head();
          if ( Character.isDigit(c) ) {
            n.append(c);
          } else if (c == '.' ) {
            if ( decimalFound ) {
              return null;
            }
            decimalFound = true;
            n.append(c);
          } else {
            break;
          }
          ps = ps.tail();
        }
        
        if ( ! decimalFound ) return null;
        
        return ps.setValue(n.length() > 0 ? Float.parseFloat(n.toString()) : null);
      `
    },
  ]
});
