foam.INTERFACE({
  package: 'foam.cross_platform',
  name: 'Builder',
  methods: [
    {
      type: 'foam.cross_platform.Builder',
      name: 'setBuilderProperty',
      args: [
        { type: 'String', name: 'name', swiftOptional: false },
        { type: 'Any', name: 'value' }
      ]
    },
    {
      type: 'foam.cross_platform.FObject',
      name: 'builderBuild',
    },
  ]
});
