foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines',
  name: 'LongPropertyJavaRefinement',
  refines: 'foam.core.LongProperty',
  requires: [
    'foam.cross_platform.deserialize.json.LongParser'
  ],
  properties: [
    {
      name: 'cpView',
      crossPlatformFactoryValue: {
        class: 'foam.cross_platform.ui.widget.LongField'
      }
    },
    {
      name: 'crossPlatformJsonParser',
      crossPlatformFactoryValue: {
        class: 'foam.cross_platform.deserialize.json.LongParser'
      }
    },
  ]
});