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
    'foam.cross_platform.ui.stack.ScrollingWidgetView',
    'foam.intent.DAOUpdateIntent',
    'foam.mlang.predicate.Eq',
    'foam.mlang.Constant',
    'foam.dao.ListenerSink',
    'foam.cross_platform.FObjectBuilder',
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
  messages: [
    {
      name: 'CONFIRM_BACK',
      message: 'You have unsaved changes that will be lost. Are you sure you want to go back?'
    },
    {
      name: 'CONFIRM_POSITIVE',
      message: 'Yes'
    },
    {
      name: 'CONFIRM_NEGATIVE',
      message: 'No'
    },
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
      class: 'BooleanProperty',
      name: 'isUpdateEnabled',
      value: true
    },
    {
      class: 'BooleanProperty',
      name: 'isSaveEnabled',
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
      of: 'foam.cross_platform.ui.stack.ScrollingWidgetView',
      name: 'dv',
      androidFactory: `
        foam.cross_platform.ui.stack.ScrollingWidgetView dv = ScrollingWidgetView_create()
          .setHorizontalPadding(foam.cross_platform.ui.widget.DefaultDetailView.ITEM_HORIZONTAL_PADDING())
          .setVerticalPadding(foam.cross_platform.ui.widget.DefaultDetailView.ITEM_VERTICAL_PADDING())
          .setViewBuilder(FObjectBuilder_create()
            .setCls(foam.cross_platform.ui.widget.DynamicDetailView.CLS_())
            .setArgs(new java.util.HashMap() {{
              put("data$", getData$());
            }})
            .build())
          .build();
        onDetach(dv.getTitle$().follow(getTitle$()));
        return dv;
      `,
      swiftOptional: false,
      swiftFactory: `
        let dv = ScrollingWidgetView_create()
          .setHorizontalPadding(foam_cross_platform_ui_widget_DefaultDetailView.ITEM_HORIZONTAL_PADDING())
          .setVerticalPadding(foam_cross_platform_ui_widget_DefaultDetailView.ITEM_VERTICAL_PADDING())
          .setViewBuilder(FObjectBuilder_create()
            .setCls(foam_cross_platform_ui_widget_DynamicDetailView.CLS_())
            .setArgs([
              "data$": getData$()
            ])
            .build())
          .build();
        onDetach(dv.getTitle$().follow(getTitle$()));
        return dv;
      `,
    },
    {
      class: 'StringProperty',
      name: 'title',
      expressionArgs: ['controllerMode', 'data'],
      androidExpression: `
        return data == null ? null : controllerMode.getI18nLabel() + " " + data.getCls_().getI18nLabel();
      `,
      swiftExpression: `
        return data == nil ? nil : controllerMode!.getI18nLabel()! + " " + data!.getCls_()!.getI18nLabel()!;
      `
    },
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.BuilderFactory',
      name: 'createBuilder',
      androidFactory: `
        foam.cross_platform.FoamClass cls = getDao().getOf();
        Object[] axioms = cls.getAxiomsByClass(foam.cross_platform.ui.stack.dao.CustomCreateAxiom.CLS_());
        if ( axioms.length == 0 ) return cls;
        return (foam.cross_platform.ui.stack.dao.CustomCreateAxiom) axioms[0];
      `,
      swiftOptional: false,
      swiftFactory: `
        let cls = getDao()!.getOf();
        let axioms = cls.getAxiomsByClass(foam_cross_platform_ui_stack_dao_CustomCreateAxiom.CLS_())!;
        if ( axioms.count == 0 ) { return cls; }
        return axioms[0] as! foam_cross_platform_ui_stack_dao_CustomCreateAxiom;
      `
    },
    {
      type: 'foam.core.Detachable',
      name: 'titleSub_'
    }
  ],
  reactions: [
    ['', 'propertyChange.controllerMode', 'updateData'],
    ['', 'propertyChange.dao', 'updateData'],
    ['', 'propertyChange.id', 'updateData'],

    ['', 'propertyChange.id', 'updateIsSaveEnabled'],
    ['data', 'propertyChange', 'updateIsSaveEnabled'],

    ['', 'propertyChange.data', 'updateTitle'],
  ],
  listeners: [
    {
      name: 'updateTitle',
      androidCode: `
        if ( getTitleSub_() != null ) getTitleSub_().detach();
        setTitleSub_(null);

        if ( hasPropertySet("title") ) clearProperty("title");

        if ( getData() instanceof foam.cross_platform.ui.TitleSlotCreator ) {
          setTitleSub_(setTitle$(((foam.cross_platform.ui.TitleSlotCreator) getData()).createTitleSlot(getSubX())));
          onDetach(getTitleSub_());
        }
      `,
      swiftCode: `
        getTitleSub_()?.detach();
        setTitleSub_(nil);

        if ( hasPropertySet("title") ) { clearProperty("title"); }

        if ( getData() is foam_cross_platform_ui_TitleSlotCreator ) {
          setTitleSub_(setTitle$((getData() as! foam_cross_platform_ui_TitleSlotCreator).createTitleSlot(getSubX())));
          onDetach(getTitleSub_());
        }
      `,
    },
    {
      name: 'updateIsSaveEnabled',
      isMerged: true,
      mergeDelay: 300,
      androidCode: `
        foam.cross_platform.FObject o = getId() == null ? null : getDao().find(getId());
        setIsSaveEnabled(!foam.cross_platform.Lib.equals(o, getData()));
      `,
      swiftCode: `
        let o = getId() == nil ? nil : getDao()?.find(getId());
        setIsSaveEnabled(!foam_cross_platform_Lib.equals(o, getData()));
      `,
    },
    {
      name: 'refreshData',
      androidCode: `
        Object id = getId();
        foam.dao.DAO dao = getDao();
        foam.cross_platform.FObject fobj = id == null ?
          getCreateBuilder().createBuilder(getSubX()).builderBuild() :
          dao.find(id);
        if ( fobj == null ) {
          System.out.println("Warning! Object deleted");
          return;
        } else if ( id != null ){
          fobj = fobj.clone(getSubX());
        }
        onDetach(fobj);
        setData(fobj);
      `,
      swiftCode: `
        let id = getId();
        let dao = getDao()!;
        let fobj = id == nil ?
          getCreateBuilder().createBuilder(getSubX())?.builderBuild() :
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
      androidCode: `
        if ( getDaoSub_() != null ) getDaoSub_().detach();
        if ( getDao() == null ) return;
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
        if ( getDao() == nil ) { return; }
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
          if ( getIsUpdateEnabled() ) {
            f.getToolbar().setActionButtonFn((foam.cross_platform.GenericFunction) args -> {
              onUpdatePressed();
              return null;
            });
            f.getToolbar().setActionButtonIcon(getAndroidContext().getResources().getIdentifier(
              "dv_edit",
              "drawable",
              getAndroidContext().getPackageName()));
          }
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
          if ( getIsUpdateEnabled() ) {
            vc.navigationItem.rightBarButtonItem = UIBarButtonItem(
              barButtonSystemItem: .edit,
              target: self,
              action: #selector(onUpdatePressed))
          }
        } else {
          vc.navigationItem.rightBarButtonItem = UIBarButtonItem(
            barButtonSystemItem: .save,
            target: self,
            action: #selector(onSavePressed))
        }
        return vc;
      `
    },
    {
      name: 'onBackPressed',
      androidCode: `
        if ( getIsSaveEnabled() ) {
          DAOCRUView self = this;
          new androidx.appcompat.app.AlertDialog
            .Builder(getAndroidContext())
            .setMessage(CONFIRM_BACK)
            .setPositiveButton(CONFIRM_NEGATIVE, null)
            .setNegativeButton(CONFIRM_POSITIVE, (dialog, id) -> {
              self.getStack().pop();
            })
            .create()
            .show();
        } else {
          getStack().pop();
        }
      `,
      swiftCode: `
        if ( getIsSaveEnabled() ) {
          let alertController = UIAlertController(title: Self.CONFIRM_BACK, message: "", preferredStyle: .alert)
          alertController.addAction(UIAlertAction(title: Self.CONFIRM_NEGATIVE, style: .default, handler: nil))
          alertController.addAction(UIAlertAction(title: Self.CONFIRM_POSITIVE, style: .default, handler: { _ in
            self.getStack()?.pop();
          }))
          getStack()?.getNavController().present(alertController, animated: true, completion: nil)
        } else {
          getStack()?.pop();
        }      `
    }
  ]
});
