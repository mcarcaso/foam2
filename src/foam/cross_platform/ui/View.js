foam.INTERFACE({
  package: 'foam.cross_platform.ui',
  name: 'View',
  swiftImports: ['UIKit'],
  methods: [
    {
      name: 'getView',
      androidType: 'android.view.View',
      swiftType: 'UIView?',
    }
  ]
});
