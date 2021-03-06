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
        
        boolean negate = false;
        
        if ( !ps.valid() ) return null;
        
        char c = ps.head();
        
        if ( c == '-' ) {
          negate = true;
          ps = ps.tail();
          if ( ! ps.valid() ) return null;
          c = ps.head();
        }
        
        if ( Character.isDigit(c) ) n = Character.getNumericValue(c);
        else return null;
        
        ps = ps.tail();
        
        while ( ps.valid() ) {
          c = ps.head();
          if ( Character.isDigit(c) ) {
            n *= 10;
            n += Character.getNumericValue(c);
            if ( n < 0 ) return null;
          } else {
            break;
          }
          ps = ps.tail();
        }
        
        if ( negate ) n *= -1;
        
        return ps.setValue(n);
      `,
      swiftCode: `
        let s = foam_cross_platform_type_StringType.INSTANCE();
        var n: Int32 = 0;
        
        var negate = false;
        
        var ps = ps!;
        if ( !ps.valid() ) { return nil; }
        
        var c = ps.head();
        
        if ( c == "-" ) {
          negate = true;
          ps = ps.tail()!;
          if ( !ps.valid() ) { return nil; }
          c = ps.head();
        }
        
        if ( s.isDigit(c) ) { n = Int32(String(c))! }
        else { return nil; }
        
        ps = ps.tail()!;
        
        while ( ps.valid() ) {
          c = ps.head();
          if ( s.isDigit(c) ) {
            n *= 10;
            n += Int32(String(c))!
            if ( n < 0 ) { return nil; }
          } else {
            break;
          }
          ps = ps.tail()!;
        }
        
        if ( negate ) { n *= -1; }
        
        return ps.setValue(n);
      `
    },
  ]
});
