foam.INTERFACE({
  package: 'foam.cross_platform',
  name: 'FObject',
  implements: [
    'foam.core.Detachable'
  ],
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
