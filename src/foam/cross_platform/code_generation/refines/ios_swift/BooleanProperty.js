foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines.ios_swift',
  name: 'BooleanPropertyRefine',
  refines: 'foam.core.BooleanProperty',
  flags: ['swift'],
  requires: [
    'foam.cross_platform.ui.widget.ToggleSwitch'
  ],
  properties: [
    {
      name: 'viewInitializer',
      swiftValue: `
        foam_swift_AnonymousGenericFunction.foam_swift_AnonymousGenericFunctionBuilder(nil)
          .setFn({(args: [Any?]?) -> Any? in
            let x = args![0] as! foam_cross_platform_Context;
            return foam_cross_platform_ui_widget_ToggleSwitch.foam_cross_platform_ui_widget_ToggleSwitchBuilder(x).build();
          })
          .build()
      `
    },
  ]
});
