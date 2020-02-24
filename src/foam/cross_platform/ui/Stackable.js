foam.INTERFACE({
  package: 'foam.cross_platform.ui',
  name: 'Stackable',
  swiftImports: ['UIKit'],
  methods: [
    {
      type: 'String',
      name: 'getTitle',
    },
    {
      name: 'toStackableView',
      androidType: 'androidx.fragment.app.Fragment',
      swiftType: 'UIViewController',
    }
  ]
});
