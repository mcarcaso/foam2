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
    'foam.cross_platform.ui.widget.DynamicCitationView',
  ],
  imports: [
    {
      name: 'theme',
      type: 'foam.cross_platform.ui.Theme',
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
      of: 'foam.cross_platform.ui.widget.DynamicCitationView',
      name: 'label',
      androidFactory: `
        foam.cross_platform.ui.widget.DynamicCitationView tf = DynamicCitationView_create().build();
        onDetach(tf.getData$().follow(getData$()));
        return tf;
      `,
      swiftFactory: `
        let tf = DynamicCitationView_create().build();
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
        android.widget.ImageButton v = new android.widget.ImageButton(getAndroidContext());
        ab.styleButton(v);
        v.setImageResource(getAndroidContext().getResources().getIdentifier(
            "dv_edit",
            "drawable",
            getAndroidContext().getPackageName()));
        v.setColorFilter(getTheme().getOnSecondary());
        ab.setView(v);
        return ab;
      `,
      swiftFactory: `
        let ab = ActionButton_create().build();
        onDetach(ab.bindData(self, Self.SELECT()));
        ab.setLabel("")
        let b = ab.getView() as! UIButton;
        let i = UIImage(named: "dv_edit")!
        b.setImage(i, for: .normal)
        b.imageView?.contentMode = .center
        b.tintColor = getTheme()!.getOnSecondary();
        b.widthAnchor.constraint(equalToConstant: 36).isActive = true;
        b.heightAnchor.constraint(equalToConstant: 36).isActive = true;
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
        v.setOrientation(android.widget.LinearLayout.HORIZONTAL);
        v.setGravity(android.view.Gravity.BOTTOM);
        v.addView(getLabel().getView());
        getLabel().getView().setLayoutParams(new android.widget.LinearLayout.LayoutParams(
            android.widget.LinearLayout.LayoutParams.WRAP_CONTENT,
            android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, 1));
        v.addView(getActionButton().getView());
        getActionButton().getView().setLayoutParams(new android.widget.LinearLayout.LayoutParams(
            android.widget.LinearLayout.LayoutParams.WRAP_CONTENT,
            android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, 0));
        return v;
      `,
      swiftFactory: `
        let views = [
          getLabel()!.getView()!,
          getActionButton()!.getView()!
        ]
        let v = UIStackView(arrangedSubviews: views)
        v.axis = .horizontal
        v.alignment = .bottom
        v.distribution = .equalSpacing
        v.spacing = 8;
        for sv in views {
          sv.translatesAutoresizingMaskIntoConstraints = false;
        }
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