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
    },
  ],
});
