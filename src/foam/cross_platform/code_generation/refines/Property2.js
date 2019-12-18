foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines.android_java',
  name: 'PropertyJavaRefinement2',
  refines: 'foam.core.Property',
  requires: [
    'foam.cross_platform.ui.widget.Label'
  ],
  properties: [
    {
      class: 'StringProperty',
      name: 'label',
      expressionArgs: ['name'],
      androidExpression: `
        return name.substring(0, 1).toUpperCase() + name.substring(1);
      `,
      swiftExpression: `
        return name;
      `,
    },
    {
      class: 'FunctionProperty',
      name: 'viewInitializer',
      androidValue: `
        (foam.cross_platform.GenericFunction) args -> {
          foam.cross_platform.Context x = (foam.cross_platform.Context) args[0];
          return foam.cross_platform.ui.widget.Label.LabelBuilder(x).build();
        }
      `
    },
  ]
});
