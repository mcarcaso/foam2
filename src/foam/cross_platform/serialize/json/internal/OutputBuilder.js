foam.INTERFACE({
  package: 'foam.cross_platform.serialize.json.internal',
  name: 'OutputBuilder',
  methods: [
    {
      name: 'startObj',
    },
    {
      name: 'endObj',
    },
    {
      name: 'startArray',
    },
    {
      name: 'endArray',
    },
    {
      name: 'keySep',
    },
    {
      name: 'out',
      args: [ { name: 's', type: 'String' } ],
    },
    {
      name: 'comma',
    },
    {
      name: 'output',
      type: 'String',
    },
    {
      name: 'reset',
    },
  ],
});
