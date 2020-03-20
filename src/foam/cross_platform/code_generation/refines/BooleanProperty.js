foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines',
  name: 'BooleanPropertyJavaRefinement',
  refines: 'foam.core.BooleanProperty',
  requires: [
    'foam.cross_platform.ui.widget.ToggleSwitch'
  ],
  properties: [
    {
      name: 'cpView',
      crossPlatformFactoryValue: {
        class: 'foam.cross_platform.ui.widget.ToggleSwitch'
      }
    },
  ]
});