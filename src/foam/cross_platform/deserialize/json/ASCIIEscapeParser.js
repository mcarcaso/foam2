foam.CLASS({
  package: 'foam.cross_platform.deserialize.json',
  name: 'ASCIIEscapeParser',
  extends: 'foam.cross_platform.deserialize.ProxyParser',
  requires: [
    'foam.cross_platform.deserialize.Literal',
    'foam.cross_platform.deserialize.Seq1',
    'foam.cross_platform.deserialize.json.Whitespace',
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
          { class: 'foam.cross_platform.deserialize.Literal', string: '\\\\' },
          {
            class: 'foam.cross_platform.deserialize.Alt',
            parsers: [
              { class: 'foam.cross_platform.deserialize.Literal', string: 'n' },
              { class: 'foam.cross_platform.deserialize.Literal', string: 't' },
              { class: 'foam.cross_platform.deserialize.Literal', string: 'r' },
              { class: 'foam.cross_platform.deserialize.Literal', string: 'f' },
              { class: 'foam.cross_platform.deserialize.Literal', string: 'b' },
            ]
          },
        ]
      }
    },
  ],
  methods: [
    {
      name: 'parse',
      androidCode: `
        ps = super.parse(ps, x);
        if ( ps != null ) {
          char c = ((String) ps.value()).charAt(0);
          switch ( c ) {
            case '\\\\\\\\': c = '\\\\\\\\';
              break;
            case 'n' : c = '\\\\n';
              break;
            case 't' : c = '\\\\t';
              break;
            case 'r' : c = '\\\\r';
              break;
            default:
              break;
          }
          return ps.setValue(c);
        }
        return ps;

      `,
      swiftCode: `
        let ps = super.parse(ps, x);
        if ( ps != nil ) {
          var c = foam_cross_platform_type_StringType.INSTANCE().charAt(ps!.value() as? String, 0);
          switch ( c ) {
            case "\\\\\\\\": c = "\\\\\\\\";
              break;
            case "n" : c = "\\\\n"
              break;
            case "t" : c = "\\\\t"
              break;
            case "r" : c = "\\\\r"
              break;
            default:
              break;
          }
          return ps!.setValue(c);
        }
        return ps;
      `
    }
  ]
});