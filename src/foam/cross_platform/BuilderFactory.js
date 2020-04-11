foam.INTERFACE({
  package: 'foam.cross_platform',
  name: 'BuilderFactory',
  methods: [
    {
      type: 'foam.cross_platform.Builder',
      name: 'createBuilder',
      args: [
        { type: 'Context', name: 'x' }
      ],
    },
  ]
});