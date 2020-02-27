foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines.android_java',
  name: 'PropertyJavaRefinement2',
  refines: 'foam.core.Property',
  requires: [
    'foam.cross_platform.deserialize.json.AnyParser',
    'foam.cross_platform.ui.widget.Label',
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
      `,
      swiftValue: `
        AnonymousGenericFunction_create()
          .setFn({(args: [Any?]?) -> Any? in
            let x = args![0] as! foam_cross_platform_Context;
            return foam_cross_platform_ui_widget_Label.foam_cross_platform_ui_widget_LabelBuilder(x).build();
          })
          .build()
      `
    },
    {
      class: 'FObjectProperty',
      name: 'crossPlatformJsonParser',
      androidValue: `AnyParser_create().build()`,
      swiftValue: `AnyParser_create().build()`,
    },
    {
      class: 'FunctionProperty',
      name: 'cloneProperty',
      androidValue: `
        (foam.cross_platform.GenericFunction) args -> {
          foam.cross_platform.FObject from = (foam.cross_platform.FObject) args[0];
          foam.cross_platform.FObject to = (foam.cross_platform.FObject) args[1];
          to.setProperty(getName(), from.getProperty(getName()));
          return null;
        }
      `,
      value: function(
        /* any // The value to clone */         value,
        /* object // Add values to this map to
           have them installed on the clone. */ cloneMap
        ) {
          /** Override to provide special deep cloning behavior. */
          cloneMap[this.name] = ( value && value.clone ) ? value.clone() :
            foam.util.clone(value);
      }
    },
  ],
  methods: [
    {
      name: 'toString',
      androidCode: `
        return super.toString();
      `,
      swiftCode: `
        return super.toString();
      `
    },
  ]
});
