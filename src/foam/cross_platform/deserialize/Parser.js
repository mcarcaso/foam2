foam.INTERFACE({
  package: 'foam.cross_platform.deserialize',
  name: 'Parser',
  methods: [
    {
      name: 'parse',
      type: 'foam.cross_platform.deserialize.PStream',
      args: [
        {
          type: 'foam.cross_platform.deserialize.PStream',
          name: 'ps',
        },
        {
          type: 'foam.cross_platform.deserialize.ParserContext',
          name: 'x',
        },
      ],
    },
  ]
});
