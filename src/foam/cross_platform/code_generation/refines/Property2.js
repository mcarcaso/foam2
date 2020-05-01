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
      name: 'i18nLabel',
    },
    {
      class: 'StringProperty',
      name: 'i18nLabelDescription',
      expression: function(forClass_, name) {
        return `Label for the ${forClass_}.${name} property`;
      }
    },
    {
      class: 'StringProperty',
      name: 'i18nHelp',
    },
    {
      class: 'StringProperty',
      name: 'i18nHelpDescription',
      expression: function (forClass_, name) {
        return `Help text for the ${forClass_}.${name} property`;
      }
    },
    {
      class: 'MapProperty',
      name: 'cpView',
      crossPlatformFactoryValue: {
        class: 'foam.cross_platform.ui.widget.Label'
      }
    },
    {
      class: 'FObjectProperty',
      name: 'crossPlatformJsonParser',
      crossPlatformFactoryValue: {
        class: 'foam.cross_platform.deserialize.json.AnyParser'
      }
    },
    {
      class: 'FunctionProperty',
      name: 'cpCloneProperty',
      androidValue: `
        (foam.cross_platform.GenericFunction) args -> {
          foam.cross_platform.FObject from = (foam.cross_platform.FObject) args[0];
          foam.cross_platform.FObject to = (foam.cross_platform.FObject) args[1];
          to.setProperty(getName(), from.getProperty(getName()));
          return null;
        }
      `,
      swiftValue: `
        AnonymousGenericFunction_create()
          .setFn({[weak self] (args: [Any?]?) -> Any? in
            if self == nil { return nil }
            let from = args![0] as! foam_cross_platform_FObject;
            let to = args![1] as! foam_cross_platform_FObject;
            to.setProperty(self!.getName(), from.getProperty(self!.getName()));
            return nil;
          })
          .build()
      `
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
