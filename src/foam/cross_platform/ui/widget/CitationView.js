foam.INTERFACE({
  package: 'foam.cross_platform.ui.widget',
  name: 'CitationView',
  implements: [
    'foam.cross_platform.ui.AxiomView'
  ],
  swiftImports: [
    'UIKit'
  ],
  axioms: [
    {
      class: 'foam.cross_platform.code_generation.Faceted',
      defaultImpl: 'foam.cross_platform.ui.widget.DefaultCitationView',
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