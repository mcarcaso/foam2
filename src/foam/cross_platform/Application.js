foam.CLASS({
  package: 'foam.cross_platform',
  name: 'Application',
  requires: [
    'foam.cross_platform.ui.Theme',
    'foam.cross_platform.ui.stack.Stack',
    'foam.intent.BasicIntentManager',
  ],
  exports: [
    'intentManager',
    'stack',
    'theme',
    {
      flags: ['android'],
      key: 'androidContext',
      exportName: 'androidContext',
    }
  ],
  properties: [
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.ui.Theme',
      name: 'theme',
      crossPlatformFactory: `return Theme_create().build();`
    },
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.ui.stack.Stack',
      name: 'stack',
      crossPlatformFactory: `return Stack_create().build();`
    },
    {
      class: 'FObjectProperty',
      of: 'foam.intent.IntentManager',
      name: 'intentManager',
      crossPlatformFactory: `
        return BasicIntentManager_create().build();
      `
    },

    {
      flags: ['android'],
      androidType: 'android.content.Context',
      name: 'androidContext'
    }
  ]
});
