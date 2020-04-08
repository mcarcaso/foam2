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
      name: 'onPrimary',
      swiftValue: 'UIColor.label'
    },
    {
      class: 'ColorProperty',
      name: 'secondary'
    },
    {
      class: 'ColorProperty',
      name: 'onSecondary',
      swiftValue: 'UIColor.label'
    },
    {
      class: 'ColorProperty',
      name: 'background',
      swiftValue: 'UIColor.systemBackground'
    },
    {
      class: 'ColorProperty',
      name: 'onBackground',
      swiftValue: 'UIColor.label'
    },
    {
      class: 'ColorProperty',
      name: 'surface',
      swiftValue: 'UIColor.systemGroupedBackground',
    },
    {
      class: 'ColorProperty',
      name: 'onSurface',
      swiftValue: 'UIColor.label'
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
