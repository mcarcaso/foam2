foam.INTERFACE({
  package: 'foam.cross_platform',
  name: 'FObject',
  implements: [
    'foam.core.Detachable',
  ],
  methods: [
    {
      type: 'foam.cross_platform.Context',
      swiftOptional: false,
      name: 'getX'
    },
    {
      type: 'foam.cross_platform.Context',
      swiftOptional: false,
      name: 'getSubX'
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
      type: 'foam.core.SlotInterface',
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
    },
    {
      type: 'Integer',
      name: 'compareTo',
      args: [
        { type: 'Any', name: 'o' }
      ]
    },
    {
      type: 'Boolean',
      name: 'equals',
      args: [
        { type: 'Any', name: 'o' }
      ]
    },
    {
      name: 'pub',
      type: 'Integer',
      args: [
        {
          type: 'Any[]',
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
      name: 'clone',
      type: 'FObject',
      args: [
        { type: 'Context', name: 'x' }
      ]
    },
  ]
});
