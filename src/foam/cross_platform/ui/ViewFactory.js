foam.INTERFACE({
  package: 'foam.cross_platform.ui',
  name: 'ViewFactory',
  methods: [
    {
      type: 'foam.cross_platform.ui.View',
      name: 'createView',
      args: [{ type: 'Context', name: 'x' }]
    }
  ]
});
