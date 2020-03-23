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
          { class: 'foam.cross_platform.deserialize.Literal', value: '\\\\' },
          {
            class: 'foam.cross_platform.deserialize.Alt',
            parsers: [
              { class: 'foam.cross_platform.deserialize.Literal', value: 'n' },
              { class: 'foam.cross_platform.deserialize.Literal', value: 't' },
              { class: 'foam.cross_platform.deserialize.Literal', value: 'r' },
              { class: 'foam.cross_platform.deserialize.Literal', value: 'f' },
              { class: 'foam.cross_platform.deserialize.Literal', value: 'b' },
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
          return ps.tail().setValue(c);
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
          return ps!.tail()!.setValue(c);
        }
        return ps;
      `
    }
  ]
});