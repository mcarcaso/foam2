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
      name: 'onDetach',
      args: [
        {
          type: 'foam.core.Detachable',
          name: 'detachable'
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
      name: 'hasPropertySet',
      type: 'Boolean',
      args: [
        {
          type: 'String',
          name: 'name'
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
    },
    {
      type: 'Any',
      name: 'getProperty',
      args: [
        {
          type: 'String',
          name: 'name'
        }
      ]
    },
    {
      type: 'foam.core.Slot',
      name: 'getSlot',
      args: [
        {
          type: 'String',
          name: 'name'
        }
      ]
    },
    {
      type: 'foam.cross_platform.FoamClass',
      name: 'getCls_'
    }
  ]
});
