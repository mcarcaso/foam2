foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines.android_java',
  name: 'StringPropertyJavaRefinement',
  refines: 'foam.core.StringProperty',
  flags: ['android'],
  requires: [
    'foam.cross_platform.ui.widget.TextField'
  ],
  properties: [
    {
      name: 'detailPropertyViewResource',
      androidValue: `"text_detail_property_view"`
    },
    {
      name: 'viewInitializer',
      androidValue: `
        (foam.cross_platform.GenericFunction) args -> {
          foam.cross_platform.Context x = (foam.cross_platform.Context) args[0];
          return foam.cross_platform.ui.widget.TextField.TextFieldBuilder(x).build();
        }
      `
    },
  ]
});
