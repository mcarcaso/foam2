foam.CLASS({
  package: 'foam.cross_platform.deserialize.json',
  name: 'Whitespace',
  implements: ['foam.cross_platform.deserialize.Parser'],
  axioms: [
    { class: 'foam.pattern.Singleton' }
  ],
  constants: [
    {
      type: 'String',
      name: 'WS',
      value: ' \t\r\n'
    }
  ],
  methods: [
    {
      name: 'parse',
      androidCode: `
        while ( ps.valid() ) {
          char c = ps.head();
          if ( WS().indexOf(c) != -1 ) {
            ps = ps.tail();
          } else {
            return ps;
          }
        }
        return null;
      `,
      swiftCode: `
        var ps = ps;
        while ( ps?.valid() ?? false ) {
          let c = ps!.head();
          if Self.WS().firstIndex(of: c) != nil {
            ps = ps!.tail();
          } else {
            return ps;
          }
        }
        return nil;
      `
    },
  ],
});
