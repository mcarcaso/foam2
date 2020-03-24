foam.CLASS({
  package: 'foam.cross_platform.deserialize.json',
  name: 'UnicodeParser',
  extends: 'foam.cross_platform.deserialize.ProxyParser',
  requires: [
    'foam.cross_platform.deserialize.Literal',
    'foam.cross_platform.deserialize.Seq1',
    'foam.cross_platform.deserialize.json.Whitespace',
    'foam.cross_platform.deserialize.json.HexCharParser',
  ],
  axioms: [
    { class: 'foam.pattern.Singleton' }
  ],
  properties: [
    {
      name: 'delegate',
      crossPlatformFactoryValue: {
        class: 'foam.cross_platform.deserialize.Seq1',
        index: 2,
        parsers: [
          { class: 'foam.cross_platform.deserialize.json.Whitespace' },
          { class: 'foam.cross_platform.deserialize.Literal', string: '\\\\u' },
          {
            class: 'foam.cross_platform.deserialize.Repeat',
            min: 4,
            max: 4,
            delegate: { class: 'foam.cross_platform.deserialize.json.HexCharParser' }
          }
        ]
      }
    },
  ],
  methods: [
    {
      name: 'parse',
      androidCode: `
        ps = super.parse(ps, x);
        if ( ps == null ) return null;
        Object[] values = (Object[]) ps.value();
        char hexChar = (char) ( hexToInt(values[0], 3) +
                hexToInt(values[1], 2) +
                hexToInt(values[2], 1) +
                hexToInt(values[3], 0) );
        return ps.setValue(Character.valueOf(hexChar));

      }
      public static int hexToInt(Object o, int power) {
        char c = o.toString().charAt(0);
        if ( c >= 'a' && c <= 'z' ) {
          c = Character.toUpperCase(c);
        }
        return ( c <= '9' ? c - '0' : 10 + c - 'A' ) * (int) Math.pow(16, power);
      `,
      swiftCode: `
        var ps = super.parse(ps, x);
        if ps == nil { return nil }
        let hex = String(ps!.value() as! [Character])
        let hexToInt = Int(hex, radix: 16)!
        var us = UnicodeScalar(hexToInt);
        if us == nil {
          // Check if it's unicode pair.
          ps = super.parse(ps, x);
          if ps == nil { return nil }

          let hex2 = String(ps!.value() as! [Character])
          let hexToInt2 = Int(hex2, radix: 16)!

          let C = (hexToInt - 0xD800) * 0x400 + hexToInt2 - 0xDC00 + 0x10000
          us = UnicodeScalar(C)
          if us == nil { return nil }
        }
        let c = Character(us!)
        return ps?.setValue(c)
      `
    }
  ]
});