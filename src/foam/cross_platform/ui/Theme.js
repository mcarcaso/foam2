foam.CLASS({
  package: 'foam.cross_platform.ui',
  name: 'Theme',
  exports: [
    'as theme'
  ],
  swiftImports: [
    'UIKit'
  ],
  properties: [
    {
      class: 'ColorProperty',
      name: 'primary'
    },
    {
      class: 'ColorProperty',
      name: 'onPrimary'
    },
    {
      class: 'ColorProperty',
      name: 'secondary'
    },
    {
      class: 'ColorProperty',
      name: 'onSecondary'
    },
    {
      class: 'ColorProperty',
      name: 'background'
    },
    {
      class: 'ColorProperty',
      name: 'onBackground'
    },
    {
      class: 'ColorProperty',
      name: 'surface'
    },
    {
      class: 'ColorProperty',
      name: 'onSurface'
    },
    {
      class: 'ColorProperty',
      name: 'error'
    },
    {
      class: 'ColorProperty',
      name: 'onError'
    },
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.ui.TextStyle',
      name: 'subtitle1'
    },
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.ui.TextStyle',
      name: 'widgetTextStyle'
    },
  ]
});
