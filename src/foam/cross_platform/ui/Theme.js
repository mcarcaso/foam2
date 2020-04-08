foam.CLASS({
  package: 'foam.cross_platform.ui',
  name: 'Theme',
  exports: [
    'as theme'
  ],
  imports: [
    {
      flags: ['android'],
      name: 'androidContext',
      androidType: 'android.content.Context',
      required: false
    }
  ],
  swiftImports: [
    'UIKit'
  ],
  properties: [
    {
      flags: ['android'],
      class: 'BooleanProperty',
      name: 'isDarkMode',
      androidFactory: `
        if ( getAndroidContext() == null ) return false;
        int flags = getAndroidContext().getResources().getConfiguration().uiMode &
          android.content.res.Configuration.UI_MODE_NIGHT_MASK;
        return flags == android.content.res.Configuration.UI_MODE_NIGHT_YES;
      `
    },
    {
      class: 'ColorProperty',
      name: 'primary'
    },
    {
      class: 'ColorProperty',
      name: 'onPrimary',
      androidFactory: `
        return getIsDarkMode() ? android.graphics.Color.WHITE : android.graphics.Color.BLACK;
      `,
      swiftValue: 'UIColor.label'
    },
    {
      class: 'ColorProperty',
      name: 'secondary'
    },
    {
      class: 'ColorProperty',
      name: 'onSecondary',
      androidFactory: `
        return getIsDarkMode() ? android.graphics.Color.WHITE : android.graphics.Color.BLACK;
      `,
      swiftValue: 'UIColor.label'
    },
    {
      class: 'ColorProperty',
      name: 'background',
      androidFactory: `
        return getIsDarkMode() ? android.graphics.Color.BLACK : android.graphics.Color.WHITE;
      `,
      swiftValue: 'UIColor.systemBackground'
    },
    {
      class: 'ColorProperty',
      name: 'onBackground',
      androidFactory: `
        return getIsDarkMode() ? android.graphics.Color.WHITE : android.graphics.Color.BLACK;
      `,
      swiftValue: 'UIColor.label'
    },
    {
      class: 'ColorProperty',
      name: 'surface',
      androidFactory: `
        return getIsDarkMode() ? android.graphics.Color.BLACK : android.graphics.Color.WHITE;
      `,
      swiftValue: 'UIColor.systemGroupedBackground',
    },
    {
      class: 'ColorProperty',
      name: 'onSurface',
      androidFactory: `
        return getIsDarkMode() ? android.graphics.Color.WHITE : android.graphics.Color.BLACK;
      `,
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
