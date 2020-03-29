foam.CLASS({
  package: 'foam.cross_platform.ui.widget',
  name: 'PickerField',
  implements: [
    'foam.cross_platform.ui.AxiomView',
  ],
  swiftImports: [
    'UIKit',
  ],
  requires: [
    'foam.cross_platform.ui.stack.DAOListView',
    'foam.cross_platform.ui.widget.ActionButton',
    'foam.cross_platform.ui.widget.Label',
    {
      path: 'foam.cross_platform.ui.ios.VerticalLinearLayout',
      flags: ['swift']
    }
  ],
  imports: [
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
  properties: [
    {
      name: 'data'
    },
    {
      class: 'foam.dao.DAOProperty',
      name: 'dao'
    },
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.ui.widget.Label',
      name: 'label',
      androidFactory: `
        foam.cross_platform.ui.widget.Label tf = Label_create().build();
        onDetach(getData$().linkFrom(tf.getData$()));
        return tf;
      `,
      swiftFactory: `
        let tf = Label_create().build();
        onDetach(getData$().linkFrom(tf.getData$()));
        return tf;
      `
    },
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.ui.widget.ActionButton',
      name: 'actionButton',
      androidFactory: `
        foam.cross_platform.ui.widget.ActionButton ab = ActionButton_create().build();
        onDetach(ab.bindData(this, SELECT()));
        return ab;
      `,
      swiftFactory: `
        let ab = ActionButton_create().build();
        onDetach(ab.bindData(self, Self.SELECT()));
        return ab;
      `
    },
    {
      androidType: 'android.widget.LinearLayout',
      swiftType: 'UIView?',
      name: 'view',
      androidFactory: `
        android.widget.LinearLayout v = new android.widget.LinearLayout(getAndroidContext());
        v.setLayoutParams(new android.widget.LinearLayout.LayoutParams(
            android.widget.LinearLayout.LayoutParams.WRAP_CONTENT,
            android.widget.LinearLayout.LayoutParams.WRAP_CONTENT));
        v.setOrientation(android.widget.LinearLayout.VERTICAL);
        v.addView(getLabel().getView());
        v.addView(getActionButton().getView());
        return v;
      `,
      swiftFactory: `
        let v = foam_cross_platform_ui_ios_VerticalLinearLayout.View([
          getLabel()!.getView()!,
          getActionButton()!.getView()!
        ]);
        return v;
      `,
    },
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.ui.stack.DAOListView',
      name: 'daoList',
      expressionArgs: ['dao'],
      androidExpression: `
        foam.cross_platform.ui.stack.DAOListView sv = DAOListView_create()
          .setData(dao)
          .build();
        onDetach(sv.onRowSelected().sub(null, onRowSelected_listener()));
        return sv;
      `,
      swiftOptional: false,
      swiftExpression: `
        let dlv = DAOListView_create()
          .setData(dao)
          .build();
        onDetach(dlv.onRowSelected().sub(nil, onRowSelected_listener()));
        return dlv;
      `,
    }
  ],
  actions: [
    {
      name: 'select',
      androidCode: `
        getStack().push(getDaoList());
      `,
      swiftCode: `
        let vc = getDaoList().toStackableView();
        vc.modalPresentationStyle = .pageSheet
        getStack()?.getNavController().present(vc, animated: true, completion: nil)
      `
    }
  ],
  listeners: [
    {
      name: 'onRowSelected',
      androidCode: `
        setData(args.length > 0 ? args[args.length-1] : null);
        getStack().pop();
      `,
      swiftCode: `
        setData(args?.last ?? nil);
        getStack()?.getNavController().dismiss(animated: true, completion: nil);
      `
    }
  ],
  methods: [
    {
      name: 'bindData',
      androidCode: `
        return getLabel().bindData(data, axiom);
      `,
      swiftCode: `
        return getLabel()?.bindData(data, axiom);
      `,
    },
  ]
});