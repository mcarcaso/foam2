foam.INTERFACE({
  package: 'foam.cross_platform',
  name: 'FObject',
  implements: [
    'foam.core.Detachable'
  ],
  methods: [
    {
      type: 'foam.cross_platform.Context',
      name: 'getX'
    },
    {
      type: 'foam.cross_platform.Context',
      name: 'getSubX'
    },
    {
      name: 'pub',
      type: 'Integer',
      args: [
        {
          type: 'Object[]',
          name: 'args'
        }
      ]
    },
    {
      name: 'sub',
      type: 'foam.core.Detachable',
      args: [
        {
          type: 'String[]',
          name: 'topics'
        },
        {
          type: 'foam.cross_platform.Listener',
          name: 'listener'
        }
      ]
    },
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
