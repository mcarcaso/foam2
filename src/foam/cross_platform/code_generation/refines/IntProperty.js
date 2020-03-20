foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines',
  name: 'IntPropertyJavaRefinement',
  refines: 'foam.core.IntProperty',
  requires: [
    'foam.cross_platform.ui.widget.LongField'
  ],
  properties: [
    {
      name: 'cpView',
      crossPlatformFactoryValue: {
        class: 'foam.cross_platform.ui.widget.LongField',
        max: 2147483647,
        min: -2147483648
      }
    },
  ]
});