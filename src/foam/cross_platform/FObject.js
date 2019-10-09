foam.INTERFACE({
  package: 'foam.cross_platform',
  name: 'FObject',
  methods: [
    {
      name: 'setProperty',
      args: [
        {
          type: 'String',
          name: 'name'
        },
        {
          type: 'Any',
          name: 'value'
        }
      ]
    }
  ]
});
