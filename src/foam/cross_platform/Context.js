foam.INTERFACE({
  package: 'foam.cross_platform',
  name: 'Context',
  methods: [
    {
      type: 'foam.cross_platform.Context',
      name: 'put',
      args: [
        { type: 'String', name: 'name' },
        { type: 'Any', name: 'value'}
      ]
    }
  ]
});
