foam.INTERFACE({
  package: 'foam.cross_platform.ui.widget',
  name: 'DetailView',
  implements: [
    'foam.cross_platform.ui.View'
  ],
  swiftImports: [
    'UIKit'
  ],
  axioms: [
    {
      class: 'foam.cross_platform.code_generation.Faceted',
      defaultImpl: 'foam.cross_platform.ui.widget.DefaultDetailView',
      property: 'of'
    }
  ],
  methods: [
    {
      type: 'foam.cross_platform.FoamClass',
      name: 'getOf'
    }
  ]
});