foam.CLASS({
  package: 'demo',
  name: 'App',
  requires: [
    'foam.cross_platform.Application',
    'foam.cross_platform.ui.Theme',
  ],
  constants: [
    {
      type: 'foam.cross_platform.Application',
      name: 'defaultApp',
      factory: function() {
        return foam.cross_platform.Application.create({
          theme: {
            primary: '#F27931',
            onPrimary: '#000000',
            secondary: '#253080',
            onSecondary: '#FFFFFF',
            background: '#FAFAFA',
            onBackground: '#000000',
            surface: '#FFFFFF',
            onSurface: '#000000',
            error: '#D50000',
            onError: '#FFFFFF',
            widgetTextStyle: {
              size: 18
            },
            subtitle1: {
              size: 16,
              bold: true
            },
          }
        });
      }
    }
  ]
});
