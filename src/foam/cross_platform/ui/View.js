foam.INTERFACE({
  package: 'foam.cross_platform.ui',
  name: 'View',
  swiftImports: ['UIKit'],
  methods: [
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
