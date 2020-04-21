foam.INTERFACE({
  package: 'foam.cross_platform.ui',
  name: 'Stackable',
  swiftImports: ['UIKit'],
  methods: [
    {
      name: 'toStackableView',
      androidType: 'androidx.fragment.app.Fragment',
      swiftType: 'UIViewController',
    },
    {
      name: 'onBackPressed'
    },
  ]
});
