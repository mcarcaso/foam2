foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines',
  name: 'URLPropertyJavaRefinement',
  refines: 'foam.core.URLProperty',
  requires: [
    'foam.cross_platform.ui.widget.URLField'
  ],
  properties: [
    {
      name: 'cpView',
      crossPlatformFactoryValue: {
        class: 'foam.cross_platform.ui.widget.URLField'
      }
    },
  ]
});