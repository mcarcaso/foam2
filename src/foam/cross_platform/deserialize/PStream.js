foam.INTERFACE({
  package: 'foam.cross_platform.deserialize',
  name: 'PStream',
  methods: [
    {
      name: 'head',
      type: 'Char',
    },
    {
      name: 'valid',
      type: 'Boolean',
    },
    {
      name: 'tail',
      type: 'foam.cross_platform.deserialize.PStream',
    },
    {
      name: 'substring',
      type: 'String',
      args: [
        {
          name: 'end',
          type: 'foam.cross_platform.deserialize.PStream',
        },
      ],
    },
    {
      name: 'value',
      type: 'Any',
    },
    {
      name: 'setValue',
      type: 'foam.cross_platform.deserialize.PStream',
      args: [
        {
          name: 'value',
        },
      ],
    },
  ]
});
