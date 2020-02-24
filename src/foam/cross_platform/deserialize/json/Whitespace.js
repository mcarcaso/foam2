foam.CLASS({
  package: 'foam.cross_platform.deserialize.json',
  name: 'Whitespace',
  implements: ['foam.cross_platform.deserialize.Parser'],
  axioms: [
    { class: 'foam.pattern.Singleton' }
  ],
  constants: [
    {
      type: 'Map',
      name: 'WS',
      androidValue: `new java.util.HashMap() {{
        put(' ', true);
        put('\\t', true);
        put('\\n', true);
        put('\\r', true);
      }}`,
      swiftValue: `[
        Character(" "): true,
        Character("\\t"): true,
        Character("\\n"): true,
        Character("\\r"): true,
        Character("\\r\\n"): true,
      ]`
    }
  ],
  methods: [
    {
      name: 'parse',
      androidCode: `
        while ( ps.valid() ) {
          char c = ps.head();
          if ( WS().containsKey(c) ) {
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
          if Self.WS()[c] != nil {
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
