foam.INTERFACE({
  package: 'foam.cross_platform.ui',
  name: 'AxiomView',
  implements: ['foam.cross_platform.ui.View'],
  methods: [
    {
      type: 'foam.core.Detachable',
      name: 'bindData',
      args: [
        { name: 'data', type: 'FObject' },
        { name: 'axiom', type: 'FObject' }
      ]
    },
  ]
});
