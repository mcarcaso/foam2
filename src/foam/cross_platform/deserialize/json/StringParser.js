foam.CLASS({
  package: 'foam.cross_platform.deserialize.json',
  name: 'StringParser',
  implements: ['foam.cross_platform.deserialize.Parser'],
  axioms: [
    { class: 'foam.pattern.Singleton' },
  ],
  requires: [
    'foam.cross_platform.deserialize.json.ASCIIEscapeParser',
    'foam.cross_platform.deserialize.AnyChar',
  ],
  properties: [
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.deserialize.Parser',
      name: 'escapeParser',
      crossPlatformFactoryValue: {
        class: 'foam.cross_platform.deserialize.Alt',
        parsers: [
          { class: 'foam.cross_platform.deserialize.json.ASCIIEscapeParser' },
          {
            class: 'foam.cross_platform.deserialize.Seq1',
            index: 1,
            parsers: [
              { class: 'foam.cross_platform.deserialize.Literal', value: '\\\\' },
              { class: 'foam.cross_platform.deserialize.AnyChar' },
            ]
          },
        ]
      }
    }
  ],
  methods: [
    {
      name: 'parse',
      androidCode: `
        char escape_ = '\\\\\\\\';
        char delim_ = ps.head();
        if ( delim_ != '\\\\"' && delim_ != '\\\\'' ) return null;

        ps = ps.tail();
        StringBuilder sb = new StringBuilder();
        while ( ps.valid() ) {
          char c = ps.head();
          if ( c == escape_ ) {
            ps = getEscapeParser().parse(ps, x);
            sb.append((char) ps.value());
          } else if ( c == delim_ ) {
            break;
          } else {
            sb.append(c);
          }
          ps = ps.tail();

        }
        return ps.tail().setValue(sb.toString());
      `,
      swiftCode: `
        let escape_: Character = "\\\\\\\\";
        let delim_ = ps!.head();
        if ( delim_ != "\\\\"" && delim_ != "\\\\'" ) { return nil; }

        var ps = ps!.tail()!;
        var sb = "";
        while ( ps.valid() ) {
          let c = ps.head();
          if ( c == escape_ ) {
            ps = getEscapeParser()!.parse(ps, x)!
            sb.append(ps.value() as! Character)
          } else if ( c == delim_ ) {
            break;
          } else {
            sb.append(c);
          }
          ps = ps.tail()!;
        }
        return ps.tail()!.setValue(sb);
      `,
    },
  ]
});
