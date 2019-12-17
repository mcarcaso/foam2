foam.INTERFACE({
  package: 'foam.cross_platform.ui',
  name: 'AxiomView',
  methods: [
    {
      type: 'foam.core.Detachable',
      name: 'bindData',
      args: [
        { name: 'data', type: 'FObject' },
        { name: 'axiom', type: 'FObject' }
      ]
    },
    {
      name: 'getView',
      androidType: 'android.view.View'
    },
    {
      name: 'setView',
      args: [
        { name: 'value', type: 'Object' },
      ]
    }
  ]
});
