foam.CLASS({
  package: 'foam.cross_platform.ui.stack',
  name: 'DAOBrowseView',
  implements: [
    'foam.cross_platform.ui.Stackable'
  ],
  requires: [
    'foam.cross_platform.ui.widget.DefaultCitationView',
    'foam.intent.DAOCreateIntent',
    'foam.intent.DAOReadIntent',
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
    {
      name: 'stack',
      type: 'foam.cross_platform.ui.stack.Stack',
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
      class: 'BooleanProperty',
      name: 'isCreateEnabled',
      value: true
    },
    {
      class: 'BooleanProperty',
      name: 'isDeleteEnabled',
      value: true
    },
    {
      class: 'foam.dao.DAOProperty',
      name: 'data',
    },
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.ui.stack.DAOListView',
      name: 'daoListView',
      expressionArgs: ['data', 'isDeleteEnabled'],
      androidExpression: `
        foam.cross_platform.ui.stack.DAOListView sv = DAOListView_create()
          .setData(data)
          .setTitle$(getTitle$())
          .build();
        if ( isDeleteEnabled ) {
          sv.setActions(new Object[] {
            DAODeleteRowAction_create()
              .setDao(data)
              .build()
          });
        }
        onDetach(sv.onRowSelected().sub(null, onRowSelected_listener()));
        return sv;
      `,
      swiftExpression: `
        let sv = DAOListView_create()
          .setData(data)
          .setTitle$(getTitle$())
          .build();
        if ( isDeleteEnabled ) {
          sv.setActions([
            DAODeleteRowAction_create()
              .setDao(data)
              .build()
          ])
        }
        onDetach(sv.onRowSelected().sub(nil, onRowSelected_listener()))
        return sv;
      `
    },
    {
      name: 'title',
      expressionArgs: ['data'],
      androidExpression: `
        return BROWSE + " " + data.getOf().getI18nPlural();
      `,
      swiftExpression: `
        return Self.BROWSE + " " + data!.getOf().getI18nPlural()!;
      `
    },
    {
      type: 'foam.core.Detachable',
      name: 'titleSub_'
    }
  ],
  reactions: [
    ['', 'propertyChange.data', 'updateCustomTitle']
  ],
  listeners: [
    {
      name: 'updateCustomTitle',
      androidCode: `
        if ( getTitleSub_() != null ) getTitleSub_().detach();
        setTitleSub_(null);
        if ( getData() == null ) return;
        foam.cross_platform.FoamClass cls = getData().getOf();
        Object[] axioms = cls.getAxiomsByClass(foam.cross_platform.ui.stack.dao.CustomBrowseTitleAxiom.CLS_());
        if ( axioms.length == 0 ) return;
        foam.cross_platform.ui.stack.dao.CustomBrowseTitleAxiom a =
          (foam.cross_platform.ui.stack.dao.CustomBrowseTitleAxiom) axioms[0];
        foam.core.Detachable s = getTitle$().follow(a.createTitleSlot(getX()));
        onDetach(s);
        setTitleSub_(s);
      `,
      swiftCode: `
        getTitleSub_()?.detach();
        setTitleSub_(nil);
        if ( getData() == nil ) { return; }
        let cls = getData()!.getOf();
        let axioms = cls.getAxiomsByClass(foam_cross_platform_ui_stack_dao_CustomBrowseTitleAxiom.CLS_())!;
        if ( axioms.count == 0 ) { return; }
        let a = axioms[0] as! foam_cross_platform_ui_stack_dao_CustomBrowseTitleAxiom
        let s = getTitle$().follow(a.createTitleSlot(getX()));
        onDetach(s);
        setTitleSub_(s);
      `
    },
    {
      name: 'onRowSelected',
      androidCode: `
        foam.cross_platform.FObject o = args[args.length - 1] instanceof foam.cross_platform.FObject ?
          (foam.cross_platform.FObject) args[args.length - 1] : null;
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
      name: 'toStackableView',
      androidCode: `
        foam.cross_platform.ui.stack.Stack.ToolbarFragment f =
          (foam.cross_platform.ui.stack.Stack.ToolbarFragment) getDaoListView().toStackableView();
        if ( getIsCreateEnabled() ) {
          f.getToolbar().setActionButtonFn((foam.cross_platform.GenericFunction) args -> {
            onCreatePressed();
            return null;
          });
          f.getToolbar().setActionButtonIcon(getAndroidContext().getResources().getIdentifier(
            "dv_create",
            "drawable",
            getAndroidContext().getPackageName()));
        }
        return f;
      `,
      swiftCode: `
        let vc = getDaoListView()!.toStackableView();
        if ( getIsCreateEnabled() ) {
          vc.navigationItem.rightBarButtonItem = UIBarButtonItem(
            barButtonSystemItem: .add,
            target: self,
            action: #selector(onCreatePressed));
        }
        return vc;
      `
    },
    {
      name: 'backRequested',
      androidCode: 'return true;',
      swiftCode: 'return true;',
    }
  ]
});