foam.INTERFACE({
  package: 'foam.cross_platform.ui',
  name: 'AxiomView',
  swiftImports: ['UIKit'],
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
      androidType: 'android.view.View',
      swiftType: 'UIView?',
    },
    {
      name: 'setView',
      args: [
        { name: 'value', type: 'Object' },
      ]
    }
  ]
});
