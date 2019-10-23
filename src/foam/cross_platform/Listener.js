foam.INTERFACE({
  package: 'foam.cross_platform',
  name: 'Listener',
  methods: [
    {
      name: 'executeListener',
      args: [
        {
          type: 'foam.core.Detachable',
          name: 'sub'
        },
        {
          type: 'Any[]',
          name: 'args'
        }
      ]
    }
  ]
});
