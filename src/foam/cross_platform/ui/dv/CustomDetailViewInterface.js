foam.INTERFACE({
  package: 'foam.cross_platform.ui.dv',
  name: 'CustomDetailViewInterface',
  swiftImports: ['UIKit'],
  methods: [
    {
      name: 'setData',
      args: [
        { name: 'data', type: 'FObject' }
      ]
    }
  ]
});
