foam.CLASS({
  package: 'foam.cross_platform.deserialize',
  name: 'Seq0',
  implements: ['foam.cross_platform.deserialize.Parser'],
  properties: [
    {
      class: 'FObjectArray',
      of: 'foam.cross_platform.deserialize.Parser',
      name: 'parsers',
    },
  ],
  methods: [
    {
      name: 'parse',
      androidCode: `
        for ( foam.cross_platform.deserialize.Parser parser : getParsers() ) {
          ps = parser.parse(ps, x);
          if ( ps == null ) return null;
        }
        return ps;
      `
    },
  ]
});
