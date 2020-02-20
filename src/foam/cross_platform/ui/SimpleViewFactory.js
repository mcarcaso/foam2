foam.CLASS({
  package: 'foam.cross_platform.ui',
  name: 'SimpleViewFactory',
  implements: [
    'foam.cross_platform.ui.ViewFactory'
  ],
  properties: [
    {
      class: 'ClassProperty',
      name: 'viewClass'
    },
    {
      class: 'MapProperty',
      name: 'viewArgs'
    },
  ],
  methods: [
    {
      name: 'createView',
      androidCode: `
        foam.cross_platform.Builder builder = getViewClass().createBuilder(x);
        for ( Object name : getViewArgs().keySet() ) {
          builder.setBuilderProperty(name.toString(), getViewArgs().get(name));
        }
        return (foam.cross_platform.ui.View) builder.builderBuild();
      `,
      swiftCode: `
        let builder = getViewClass()!.createBuilder(x)!;
        for name in getViewArgs()!.allKeys {
          let n = name as! String
          _ = builder.setBuilderProperty(n, getViewArgs()![n]!);
        }
        return builder.builderBuild() as? foam_cross_platform_ui_View;
      `,
    },
  ],
});
