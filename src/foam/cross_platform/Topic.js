foam.INTERFACE({
  package: 'foam.cross_platform',
  name: 'Topic',
  methods: [
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
  ]
});
