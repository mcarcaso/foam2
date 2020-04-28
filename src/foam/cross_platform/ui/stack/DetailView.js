foam.CLASS({
  package: 'foam.cross_platform.ui.stack',
  name: 'DetailView',
  implements: [
    'foam.cross_platform.ui.Stackable'
  ],
  topics: [
    'onSave'
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
  properties: [
    {
      class: 'FObjectProperty',
      name: 'data',
      androidPostSet: `
        setWorkingData(newValue.clone(null));
      `,
      swiftPostSet: `
        setWorkingData(newValue?.clone(nil));
      `,
    },
    {
      class: 'FObjectProperty',
      name: 'workingData'
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
              put("data$", getWorkingData$());
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
              "data$": getWorkingData$()
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
      expressionArgs: ['controllerMode', 'workingData'],
      androidExpression: `
        return workingData == null ? null : controllerMode.getI18nLabel() + " " + workingData.getCls_().getI18nLabel();
      `,
      swiftExpression: `
        return workingData == nil ? nil : controllerMode!.getI18nLabel()! + " " + workingData!.getCls_()!.getI18nLabel()!;
      `
    },
    {
      type: 'foam.core.Detachable',
      name: 'titleSub_'
    }
  ],
  reactions: [
    ['', 'propertyChange.workingData', 'updateTitle'],
  ],
  listeners: [
    {
      name: 'updateTitle',
      androidCode: `
        if ( getTitleSub_() != null ) getTitleSub_().detach();
        setTitleSub_(null);

        if ( hasPropertySet("title") ) clearProperty("title");

        if ( getWorkingData() instanceof foam.cross_platform.ui.TitleSlotCreator ) {
          setTitleSub_(setTitle$(((foam.cross_platform.ui.TitleSlotCreator) getWorkingData()).createTitleSlot(getSubX())));
          onDetach(getTitleSub_());
        }
      `,
      swiftCode: `
        getTitleSub_()?.detach();
        setTitleSub_(nil);

        if ( hasPropertySet("title") ) { clearProperty("title"); }

        if ( getWorkingData() is foam_cross_platform_ui_TitleSlotCreator ) {
          setTitleSub_(setTitle$((getWorkingData() as! foam_cross_platform_ui_TitleSlotCreator).createTitleSlot(getSubX())));
          onDetach(getTitleSub_());
        }
      `,
    },
  ],
  methods: [
    {
      name: 'onSavePressed',
      androidCode: `
        setData(getWorkingData());
        getStack().pop();
      `,
      swiftAnnotations: ['@objc'],
      swiftCode: `
        setData(getWorkingData());
        getStack()?.pop();
      `,
    },
    {
      name: 'toStackableView',
      androidCode: `
        foam.cross_platform.ui.stack.Stack.ToolbarFragment f = (foam.cross_platform.ui.stack.Stack.ToolbarFragment) getDv().toStackableView();
        if ( getControllerMode() != foam.u2.ControllerMode.VIEW ) {
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
        if !foam_cross_platform_Lib.equals(getControllerMode(), foam_u2_ControllerMode.VIEW) {
          vc.navigationItem.rightBarButtonItem = UIBarButtonItem(
            barButtonSystemItem: .save,
            target: self,
            action: #selector(onSavePressed))
        }
        return vc;
      `
    },
    {
      name: 'backRequested',
      androidCode: `
        boolean hasDiff = !foam.cross_platform.Lib.equals(getWorkingData(), getData());
        if ( hasDiff ) {
          DetailView self = this;
          new androidx.appcompat.app.AlertDialog
            .Builder(getAndroidContext())
            .setMessage(foam.cross_platform.ui.stack.DAOCRUView.CONFIRM_BACK)
            .setPositiveButton(foam.cross_platform.ui.stack.DAOCRUView.CONFIRM_NEGATIVE, null)
            .setNegativeButton(foam.cross_platform.ui.stack.DAOCRUView.CONFIRM_POSITIVE, (dialog, id) -> {
              self.getStack().pop();
            })
            .create()
            .show();
          return false;
        }
        return true;
      `,
      swiftCode: `
        let hasDiff = !foam_cross_platform_Lib.equals(getWorkingData(), getData());
        if ( hasDiff ) {
          let alertController = UIAlertController(title: foam_cross_platform_ui_stack_DAOCRUView.CONFIRM_BACK, message: "", preferredStyle: .alert)
          alertController.addAction(UIAlertAction(title: foam_cross_platform_ui_stack_DAOCRUView.CONFIRM_NEGATIVE, style: .default, handler: nil))
          alertController.addAction(UIAlertAction(title: foam_cross_platform_ui_stack_DAOCRUView.CONFIRM_POSITIVE, style: .default, handler: { _ in
            self.getStack()?.pop();
          }))
          getStack()?.getNavController().present(alertController, animated: true, completion: nil)
          return false;
        }
        return true;
      `
    }
  ]
});