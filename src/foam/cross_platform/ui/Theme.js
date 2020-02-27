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
      //class: 'FontProperty',
      androidType: 'int',
      swiftType: 'UIFont',
      androidValue: 0,
      name: 'caption'
    },
    {
      //class: 'FontProperty',
      androidType: 'int',
      swiftType: 'UIFont',
      androidValue: 0,
      name: 'subtitle1'
    },
    {
      //class: 'FontProperty',
      androidType: 'int',
      androidValue: 0,
      name: 'button'
    },
  ]
});
