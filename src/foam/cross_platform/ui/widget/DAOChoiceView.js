foam.CLASS({
  package: 'foam.cross_platform.ui.widget',
  name: 'DAOChoiceView',
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
        onDetach(tf.getData$().follow(getData$()));
        return tf;
      `,
      swiftFactory: `
        let tf = Label_create().build();
        onDetach(tf.getData$().follow(getData$()));
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
        let lv = getLabel()!.getView()!;
        let bv = getActionButton()!.getView()!
        let v = UIStackView(arrangedSubviews: [lv, bv])
        v.axis = .vertical
        lv.translatesAutoresizingMaskIntoConstraints = false;
        bv.translatesAutoresizingMaskIntoConstraints = false;
        lv.widthAnchor.constraint(equalTo: v.widthAnchor, multiplier: 1).isActive = true;
        bv.widthAnchor.constraint(equalTo: v.widthAnchor, multiplier: 1).isActive = true;
        return v;
      `,
    },
    {
      class: 'StringProperty',
      name: 'selectionTitle',
      expressionArgs: ['dao'],
      androidExpression: `
        return dao.getOf().getI18nPlural();
      `
    },
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.ui.stack.DAOListView',
      name: 'daoList',
      expressionArgs: ['dao'],
      androidExpression: `
        foam.cross_platform.ui.stack.DAOListView sv = DAOListView_create()
          .setData(dao)
          .setTitle$(getSelectionTitle$())
          .build();
        onDetach(sv.onRowSelected().sub(null, onRowSelected_listener()));
        onDetach(sv);
        return sv;
      `,
      swiftOptional: false,
      swiftExpression: `
        let dlv = DAOListView_create()
          .setData(dao)
          .setTitle$(getSelectionTitle$())
          .build();
        onDetach(dlv.onRowSelected().sub(nil, onRowSelected_listener()));
        onDetach(dlv);
        return dlv;
      `,
    }
  ],
  actions: [
    {
      name: 'select',
      isAvailableArgs: ['controllerMode'],
      androidIsAvailable: 'return controllerMode != foam.u2.ControllerMode.VIEW;',
      swiftIsAvailable: 'return controllerMode !== foam_u2_ControllerMode.VIEW;',
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
        clearProperty("daoList");
      `,
      swiftCode: `
        setData(args?.last ?? nil);
        getStack()?.getNavController().dismiss(animated: true, completion: nil);
        clearProperty("daoList");
      `
    }
  ],
  methods: [
    {
      name: 'bindData',
      androidCode: `
        foam.core.Property p = (foam.core.Property) axiom;
        setSelectionTitle(p.getI18nLabel());
        return getData$().linkFrom(data.getSlot(p.getName()));
      `,
      swiftCode: `
        let p = axiom as! foam_core_Property;
        setSelectionTitle(p.getI18nLabel());
        return getData$().linkFrom(data?.getSlot(p.getName()));
      `,
    },
  ]
});