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
    'displayWidth',
  ],
  imports: [
    {
      name: 'androidContext',
      androidType: 'android.content.Context',
      flags: ['android']
    }
  ],
  properties: [
    {
      class: 'Enum',
      of: 'foam.u2.layout.DisplayWidth',
      name: 'displayWidth',
      value: 'XXS'
    },
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
  ],
  methods: [
    {
      flags: ['android'],
      type: 'foam.core.Detachable',
      name: 'bindToActivity',
      args: [
        { androidType: 'androidx.appcompat.app.AppCompatActivity', name: 'a' },
        { type: 'Integer', name: 'contentId' },
      ],
      androidCode: `
        if ( getAndroidContext() == null ) {
          throw new RuntimeException("You should call foam.cross_platform.Context.setGlobalAndroidContext before touching any other FOAM entities.");
        }

        android.util.DisplayMetrics dm = new android.util.DisplayMetrics();
        a.getWindowManager().getDefaultDisplay().getMetrics(dm);
        setDisplayWidth(foam.u2.layout.DisplayWidth.valueForWidth(dm.widthPixels));

        getStack().setContentId(contentId);
        getStack().setFragmentManager(a.getSupportFragmentManager());

        a.findViewById(contentId).setBackgroundColor(getTheme().getBackground());

        // Be sure to call finish when everything from the Stack is popped. Without
        // this, a white screen will show if the Activity changed throughout the App's
        // life.
        return getStack().onPop().sub(null, (sub, args) -> {
          if ( getStack().getStack().size() == 0 ) a.finish();
        });
      `
    }
  ]
});