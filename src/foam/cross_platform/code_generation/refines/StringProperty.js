foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines',
  name: 'StringPropertyJavaRefinement',
  refines: 'foam.core.StringProperty',
  requires: [
    'foam.cross_platform.deserialize.json.StringParser',
    'foam.cross_platform.ui.widget.TextField',
  ],
  properties: [
    {
      name: 'cpView',
      crossPlatformFactoryValue: {
        class: 'foam.cross_platform.ui.widget.TextField'
      }
    },
    {
      name: 'crossPlatformJsonParser',
      crossPlatformFactoryValue: {
        class: 'foam.cross_platform.deserialize.json.StringParser'
      }
    },
  ]
});