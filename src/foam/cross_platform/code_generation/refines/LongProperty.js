foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines',
  name: 'LongPropertyJavaRefinement',
  refines: 'foam.core.LongProperty',
  properties: [
    {
      name: 'cpView',
      crossPlatformFactoryValue: {
        class: 'foam.cross_platform.ui.widget.LongField'
      }
    },
  ]
});