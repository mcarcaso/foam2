foam.CLASS({
  package: 'foam.cross_platform.ui.stack',
  name: 'DAOCRUView',
  description: `
    A detail view that can either create, update, or read a single object from a DAO
  `,
  implements: [
    'foam.cross_platform.ui.Stackable'
  ],
  requires: [
    'foam.cross_platform.ui.stack.DetailView',
    'foam.intent.DAOUpdateIntent',
    'foam.mlang.predicate.Eq',
    'foam.mlang.Constant',
    'foam.dao.ListenerSink',
  ],
  imports: [
    {
      name: 'theme',
      type: 'foam.cross_platform.ui.Theme',
    },
    {
      name: 'intentManager',
      type: 'foam.intent.IntentManager',
    },
    {
      name: 'stack',
      type: 'foam.cross_platform.ui.stack.Stack',
    },
    {
      name: 'androidContext',
      key: 'androidContext',
      androidType: 'android.content.Context',
      flags: ['android']
    }
  ],
  exports: [
    'controllerMode',
  ],
  axioms: [
    {
      class: 'foam.cross_platform.code_generation.Resource',
      androidPath: 'drawable/dv_edit.xml',
      androidCode: `
<vector xmlns:android="http://schemas.android.com/apk/res/android"
        android:width="24dp"
        android:height="24dp"
        android:viewportWidth="24.0"
        android:viewportHeight="24.0">
    <path
        android:fillColor="#FF000000"
        android:pathData="M3,17.25V21h3.75L17.81,9.94l-3.75,-3.75L3,17.25zM20.71,7.04c0.39,-0.39 0.39,-1.02 0,-1.41l-2.34,-2.34c-0.39,-0.39 -1.02,-0.39 -1.41,0l-1.83,1.83 3.75,3.75 1.83,-1.83z"/>
</vector>
      `
    },
    {
      class: 'foam.cross_platform.code_generation.Resource',
      androidPath: 'drawable/dv_save.xml',
      androidCode: `
<vector xmlns:android="http://schemas.android.com/apk/res/android"
        android:width="24dp"
        android:height="24dp"
        android:viewportWidth="24.0"
        android:viewportHeight="24.0">
    <path
        android:fillColor="#FF000000"
        android:pathData="M17,3L5,3c-1.11,0 -2,0.9 -2,2v14c0,1.1 0.89,2 2,2h14c1.1,0 2,-0.9 2,-2L21,7l-4,-4zM12,19c-1.66,0 -3,-1.34 -3,-3s1.34,-3 3,-3 3,1.34 3,3 -1.34,3 -3,3zM15,9L5,9L5,5h10v4z"/>
</vector>
      `
    }
  ],
  properties: [
    {
      class: 'foam.dao.DAOProperty',
      name: 'dao'
    },
    {
      name: 'id'
    },
    {
      class: 'FObjectProperty',
      of: 'foam.core.Detachable',
      name: 'daoSub_'
    },
    {
      class: 'FObjectProperty',
      name: 'data'
    },
    {
      class: 'Enum',
      of: 'foam.u2.ControllerMode',
      name: 'controllerMode',
      value: 'VIEW'
    },
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.ui.stack.DetailView',
      name: 'dv',
      androidFactory: `
        foam.cross_platform.ui.stack.DetailView dv = DetailView_create().build();
        onDetach(dv.getTitle$().follow(getTitle$()));
        onDetach(dv.getData$().follow(getData$()));
        return dv;
      `,
      swiftOptional: false,
      swiftFactory: `
        let dv = DetailView_create().build();
        onDetach(dv.getTitle$().follow(getTitle$()));
        onDetach(dv.getData$().follow(getData$()));
        return dv;
      `,
    },
    {
      class: 'StringProperty',
      name: 'title',
      expressionArgs: ['controllerMode', 'dao$of'],
      androidExpression: `
        return controllerMode.getI18nLabel() + " " + ((foam.cross_platform.FoamClass)dao$of).getI18nLabel();
      `,
      swiftExpression: `
        return controllerMode!.getI18nLabel()! + " " + (dao$of as! foam_cross_platform_FoamClass).getI18nLabel()!;
      `
    }
  ],
  reactions: [
    ['', 'propertyChange.controllerMode', 'updateData'],
    ['', 'propertyChange.dao', 'updateData'],
    ['', 'propertyChange.id', 'updateData'],
  ],
  listeners: [
    {
      name: 'refreshData',
      isFramed: true,
      androidCode: `
        Object id = getId();
        foam.dao.DAO dao = getDao();
        foam.cross_platform.FObject fobj = id == null ?
          dao.getOf().createBuilder(getSubX()).builderBuild() :
          dao.find(id).clone(getSubX());
        if ( fobj == null ) {
          System.out.println("Warning! Object deleted");
          return;
        }
        onDetach(fobj);
        setData(fobj);
      `,
      swiftCode: `
        let id = getId();
        let dao = getDao()!;
        let fobj = id == nil ?
          dao.getOf().createBuilder(getSubX())?.builderBuild() :
          dao.find(id)?.clone(getSubX());
        if ( fobj == nil ) {
          print("Warning! Object deleted");
          return;
        }
        onDetach(fobj);
        setData(fobj);
      `
    },
    {
      name: 'updateData',
      isFramed: true,
      androidCode: `
        if ( getDaoSub_() != null ) getDaoSub_().detach();
        refreshData(null, null);
        if ( getControllerMode() != foam.u2.ControllerMode.VIEW ) return;
        setDaoSub_(getDao()
          .where(Eq_create()
            .setArg1(getDao().getOf().getAxiomByName("id"))
            .setArg2(Constant_create().setValue(getId()).build())
            .build())
          .listen(ListenerSink_create().setListener(refreshData_listener()).build()));
        onDetach(getDaoSub_());
      `,
      swiftCode: `
        getDaoSub_()?.detach();
        refreshData(nil, nil);
        if !foam_cross_platform_Lib.equals(getControllerMode(), foam_u2_ControllerMode.VIEW) { return }
        setDaoSub_(getDao()!
          .where(Eq_create()
            .setArg1(getDao()!.getOf().getAxiomByName("id"))
            .setArg2(Constant_create().setValue(getId()).build())
            .build())!
          .listen(ListenerSink_create().setListener(refreshData_listener()).build()));
        onDetach(getDaoSub_());
      `,
    }
  ],
  methods: [
    {
      name: 'onSavePressed',
      androidCode: `
        getDao().put(getData());
        getStack().pop();
      `,
      swiftAnnotations: ['@objc'],
      swiftCode: `
        _ = getDao()!.put(getData());
        getStack()!.pop();
      `,
    },
    {
      name: 'onUpdatePressed',
      androidCode: `
        getIntentManager().launchIntent(DAOUpdateIntent_create()
          .setDao(getDao())
          .setId(getId())
          .build());
      `,
      swiftAnnotations: ['@objc'],
      swiftCode: `
        _ = getIntentManager()!.launchIntent(DAOUpdateIntent_create()
          .setDao(getDao())
          .setId(getId())
          .build());
      `,
    },
    {
      name: 'toStackableView',
      androidCode: `
        foam.cross_platform.ui.stack.Stack.ToolbarFragment f = (foam.cross_platform.ui.stack.Stack.ToolbarFragment) getDv().toStackableView();
        if ( getControllerMode() == foam.u2.ControllerMode.VIEW ) {
          f.getToolbar().setActionButtonFn((foam.cross_platform.GenericFunction) args -> {
            onUpdatePressed();
            return null;
          });
          f.getToolbar().setActionButtonIcon(getAndroidContext().getResources().getIdentifier(
            "dv_edit",
            "drawable",
            getAndroidContext().getPackageName()));
        } else {
          f.getToolbar().setActionButtonFn((foam.cross_platform.GenericFunction) args -> {
            onSavePressed();
            return null;
          });
          f.getToolbar().setActionButtonIcon(getAndroidContext().getResources().getIdentifier(
            "dv_save",
            "drawable",
            getAndroidContext().getPackageName()));
        }
        return f;
      `,
      swiftCode: `
        let vc = getDv().toStackableView();
        if foam_cross_platform_Lib.equals(getControllerMode(), foam_u2_ControllerMode.VIEW) {
          vc.navigationItem.rightBarButtonItem = UIBarButtonItem(
            barButtonSystemItem: .edit,
            target: self,
            action: #selector(onUpdatePressed))
        } else {
          vc.navigationItem.rightBarButtonItem = UIBarButtonItem(
            barButtonSystemItem: .save,
            target: self,
            action: #selector(onSavePressed))
        }
        return vc;
      `
    }
  ]
});