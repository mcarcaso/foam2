foam.INTERFACE({
  package: 'foam.cross_platform',
  name: 'FObject',
  implements: [
    'foam.core.Detachable',
    'foam.cross_platform.Topic',
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
    }
  ]
});
