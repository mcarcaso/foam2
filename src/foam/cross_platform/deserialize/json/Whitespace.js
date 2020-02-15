foam.CLASS({
  package: 'foam.cross_platform.deserialize.json',
  name: 'Whitespace',
  implements: ['foam.cross_platform.deserialize.Parser'],
  axioms: [
    { class: 'foam.pattern.Singleton' }
  ],
  methods: [
    {
      name: 'parse',
      androidCode: `
        while ( ps.valid() ) {
          char c = ps.head();
          if ( c == ' '  || c == '\\\\t' || c == '\\\\r' || c == '\\\\n' ) {
            ps = ps.tail();
          } else {
            return ps;
          }
        }
        return null;
      `
    },
  ],
});
