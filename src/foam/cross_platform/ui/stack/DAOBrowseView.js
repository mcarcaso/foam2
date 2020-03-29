foam.CLASS({
  package: 'foam.cross_platform.ui.stack',
  name: 'DAOBrowseView',
  implements: [
    'foam.cross_platform.ui.Stackable'
  ],
  requires: [
    'foam.cross_platform.ui.widget.DefaultCitationView',
    'foam.dao.ArraySink',
    'foam.dao.ListenerSink',
    'foam.intent.DAOCreateIntent',
    'foam.intent.DAOReadIntent',
    'foam.mlang.sink.Count',
    'foam.cross_platform.ui.stack.dao.DAODeleteRowAction',
    'foam.cross_platform.ui.stack.DAOListView',
  ],
  messages: [
    {
      name: 'BROWSE',
      message: 'Browse',
      description: `
        The text shown in the top toolbar before the name of the entity that's being browsed.
      `
    }
  ],
  imports: [
    {
      name: 'androidContext',
      androidType: 'android.content.Context',
      flags: ['android'],
    },
    {
      name: 'intentManager',
      type: 'foam.intent.IntentManager',
    },
  ],
  axioms: [
    {
      class: 'foam.cross_platform.code_generation.Resource',
      androidPath: 'drawable/dv_delete.xml',
      androidCode: `
<vector xmlns:android="http://schemas.android.com/apk/res/android"
        android:width="24dp"
        android:height="24dp"
        android:viewportWidth="24.0"
        android:viewportHeight="24.0">
    <path
        android:fillColor="#FF000000"
        android:pathData="M6,19c0,1.1 0.9,2 2,2h8c1.1,0 2,-0.9 2,-2V7H6v12zM19,4h-3.5l-1,-1h-5l-1,1H5v2h14V4z"/>
</vector>
      `
    },
    {
      class: 'foam.cross_platform.code_generation.Resource',
      androidPath: 'drawable/dv_create.xml',
      androidCode: `
<vector xmlns:android="http://schemas.android.com/apk/res/android"
        android:width="24dp"
        android:height="24dp"
        android:viewportWidth="24.0"
        android:viewportHeight="24.0">
    <path
        android:fillColor="#FF000000"
        android:pathData="M19,13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
</vector>
      `
    },
  ],
  properties: [
    {
      class: 'foam.dao.DAOProperty',
      name: 'data',
    },
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.ui.stack.DAOListView',
      name: 'daoListView',
      expressionArgs: ['data'],
      androidExpression: `
        foam.cross_platform.ui.stack.DAOListView sv = DAOListView_create()
          .setData(data)
          .setActions(new Object[] {
            DAODeleteRowAction_create()
              .setDao(data)
              .build()
          })
          .build();
        onDetach(sv.onRowSelected().sub(null, onRowSelected_listener()));
        return sv;
      `,
      swiftExpression: `
        let sv = DAOListView_create()
          .setData(data)
          .setActions([
            DAODeleteRowAction_create()
              .setDao(data)
              .build()
          ])
          .build();
        onDetach(sv.onRowSelected().sub(nil, onRowSelected_listener()))
        return sv;
      `
    },
  ],
  listeners: [
    {
      name: 'onRowSelected',
      androidCode: `
        foam.cross_platform.FObject o = (foam.cross_platform.FObject) args[args.length - 1];
        if ( o == null ) return;
        getIntentManager().launchIntent(DAOReadIntent_create()
          .setDao(getData())
          .setId(o.getProperty("id"))
          .build());
      `,
      swiftCode: `
        let o = args?.last as? foam_cross_platform_FObject
        if o == nil { return }
        _ = getIntentManager()?.launchIntent(DAOReadIntent_create()
          .setDao(getData())
          .setId(o!.getProperty("id"))
          .build());
      `
    }
  ],
  methods: [
    {
      name: 'onCreatePressed',
      androidCode: `
        getIntentManager().launchIntent(DAOCreateIntent_create()
          .setDao(getData())
          .build());
      `,
      swiftAnnotations: ['@objc'],
      swiftCode: `
        _ = getIntentManager()!.launchIntent(DAOCreateIntent_create()
          .setDao(getData())
          .build());
      `
    },
    {
      type: 'String',
      name: 'getTitle',
      androidCode: `
        return BROWSE + " " + getData().getOf().getI18nPlural();
      `,
      swiftCode: `
        return Self.BROWSE + " " + getData()!.getOf().getI18nPlural()!;
      `
    },
    {
      name: 'toStackableView',
      androidCode: `
        foam.cross_platform.ui.stack.Stack.ToolbarFragment f =
          (foam.cross_platform.ui.stack.Stack.ToolbarFragment) getDaoListView().toStackableView();
        f.getToolbar().setTitle(getTitle());
        f.getToolbar().setActionButtonFn((foam.cross_platform.GenericFunction) args -> {
          onCreatePressed();
          return null;
        });
        f.getToolbar().setActionButtonIcon(getAndroidContext().getResources().getIdentifier(
          "dv_create",
          "drawable",
          getAndroidContext().getPackageName()));
        return f;
      `,
      swiftCode: `
        let vc = getDaoListView()!.toStackableView();
        vc.title = getTitle();
        vc.navigationItem.rightBarButtonItem = UIBarButtonItem(
          barButtonSystemItem: .add,
          target: self,
          action: #selector(onCreatePressed));
        return vc;
      `
    }
  ]
});