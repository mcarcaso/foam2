foam.CLASS({
  package: 'foam.cross_platform.deserialize',
  name: 'Alt',
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
          foam.cross_platform.deserialize.PStream ret = parser.parse(ps, x);
          if ( ret != null ) return ret;
        }
        return null;
      `
    },
  ]
});
