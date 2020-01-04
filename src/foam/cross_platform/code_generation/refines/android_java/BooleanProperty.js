foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines.android_java',
  name: 'BooleanPropertyRefine',
  refines: 'foam.core.BooleanProperty',
  flags: ['android'],
  requires: [
    'foam.cross_platform.ui.widget.ToggleSwitch'
  ],
  properties: [
    {
      name: 'detailPropertyViewResource',
      androidValue: `"toggle_detail_property_view"`
    },
    {
      name: 'viewInitializer',
      androidValue: `
        (foam.cross_platform.GenericFunction) args -> {
          foam.cross_platform.Context x = (foam.cross_platform.Context) args[0];
          return foam.cross_platform.ui.widget.ToggleSwitch.ToggleSwitchBuilder(x).build();
        }
      `
    },
  ]
});
