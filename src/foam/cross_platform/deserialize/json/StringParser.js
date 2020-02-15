foam.CLASS({
  package: 'foam.cross_platform.deserialize.json',
  name: 'StringParser',
  implements: ['foam.cross_platform.deserialize.Parser'],
  axioms: [
    { class: 'foam.pattern.Singleton' },
  ],
  methods: [
    {
      name: 'parse',
      androidCode: `
        char escape_ = '\\\\\\\\';
        char delim_ = ps.head();
        if ( delim_ != '\\\\"' && delim_ != '\\\\'' ) return null;

        ps = ps.tail();
        char lastc = delim_;

        StringBuilder sb = new StringBuilder();
        while ( ps.valid() ) {
          char c = ps.head();
          if ( c == delim_ && lastc != escape_ ) break;
          if ( c != escape_ ) sb.append(c);
          lastc = c;
          ps = ps.tail();
        }
        return ps.tail().setValue(sb);
      `
    },
  ]
});
