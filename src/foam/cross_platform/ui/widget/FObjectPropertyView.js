foam.CLASS({
  package: 'foam.cross_platform.ui.widget',
  name: 'FObjectPropertyView',
  implements: [
    'foam.cross_platform.ui.AxiomView',
  ],
  swiftImports: [
    'UIKit',
  ],
  requires: [
    'foam.cross_platform.FObjectBuilder',
    'foam.cross_platform.ui.widget.DynamicCitationView',
    'foam.cross_platform.ui.widget.DynamicDetailView',
    'foam.cross_platform.ui.stack.DetailView',
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
    },
    {
      name: 'controllerMode',
      type: 'foam.u2.ControllerMode'
    },
    {
      name: 'theme',
      type: 'foam.cross_platform.ui.Theme',
    },
  ],
  properties: [
    {
      class: 'FObjectProperty',
      name: 'data'
    },
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.ui.View',
      name: 'citationView',
      androidFactory: `
        foam.cross_platform.ui.widget.DynamicCitationView v = DynamicCitationView_create()
          .setData$(getData$())
          .build();
        onDetach(v);
        return v;
      `,
      swiftFactory: `
        let v = DynamicCitationView_create()
          .setData$(getData$())
          .build();
        onDetach(v);
        return v;
      `,
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
            getControllerMode() == foam.u2.ControllerMode.VIEW ? "dv_view" : "dv_edit",
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
        let i = UIImage(named: getControllerMode() === foam_u2_ControllerMode.VIEW ? "dv_view" : "dv_edit")!
        b.setImage(i, for: .normal)
        b.imageView?.contentMode = .center
        b.tintColor = getTheme()!.getOnSecondary();
        b.widthAnchor.constraint(equalToConstant: 36).isActive = true;
        b.heightAnchor.constraint(equalToConstant: 36).isActive = true;
        return ab;
      `,
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

        v.addView(getCitationView().getView());
        getCitationView().getView().setLayoutParams(new android.widget.LinearLayout.LayoutParams(
            android.widget.LinearLayout.LayoutParams.WRAP_CONTENT,
            android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, 1));

        v.addView(getActionButton().getView());
        android.widget.LinearLayout.LayoutParams lp = new android.widget.LinearLayout.LayoutParams(
            android.widget.LinearLayout.LayoutParams.WRAP_CONTENT,
            android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, 0);
        getActionButton().getView().setLayoutParams(lp);
        float d = getAndroidContext().getResources().getDisplayMetrics().density;
        lp.leftMargin = (int) (8 * d);
        getActionButton().getView().setLayoutParams(lp);

        return v;
      `,
      swiftFactory: `
        let lv = getCitationView()!.getView()!;
        let bv = getActionButton()!.getView()!
        let v = UIStackView(arrangedSubviews: [lv, bv])
        v.axis = .horizontal
        v.alignment = .bottom
        v.distribution = .fill
        v.spacing = 8;
        lv.translatesAutoresizingMaskIntoConstraints = false;
        bv.translatesAutoresizingMaskIntoConstraints = false;
        return v;
      `,
    },
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.ui.stack.DetailView',
      name: 'dv',
      swiftOptional: false,
      androidFactory: `
        return DetailView_create()
          .setData$(getData$())
          .setControllerMode$(getControllerMode$())
          .build();
      `,
      swiftFactory: `
        return DetailView_create()
          .setData$(getData$())
          .setControllerMode$(getControllerMode$())
          .build();
      `,
    }
  ],
  actions: [
    {
      name: 'select',
      androidCode: `
        getStack().push(getDv());
      `,
      swiftCode: `
        getStack()!.push(getDv());
      `
    },
  ],
  methods: [
    {
      name: 'bindData',
      androidCode: `
        foam.core.Property p = (foam.core.Property) axiom;
        return getData$().linkFrom(data.getSlot(p.getName()));
      `,
      swiftCode: `
        let p = axiom as! foam_core_Property;
        return getData$().linkFrom(data?.getSlot(p.getName()));
      `,
    },
  ]
});