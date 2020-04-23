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
    'foam.cross_platform.ui.stack.ScrollingWidgetView',
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
      name: 'viewButton',
      androidFactory: `
        foam.cross_platform.ui.widget.ActionButton ab = ActionButton_create().build();
        onDetach(ab.bindData(this, VIEW_ACTION()));
        return ab;
      `,
      swiftFactory: `
        let ab = ActionButton_create().build();
        onDetach(ab.bindData(self, Self.VIEW_ACTION()));
        return ab;
      `
    },
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.ui.widget.ActionButton',
      name: 'editButton',
      androidFactory: `
        foam.cross_platform.ui.widget.ActionButton ab = ActionButton_create().build();
        onDetach(ab.bindData(this, EDIT()));
        return ab;
      `,
      swiftFactory: `
        let ab = ActionButton_create().build();
        onDetach(ab.bindData(self, Self.EDIT()));
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
        v.addView(getCitationView().getView());
        v.addView(getViewButton().getView());
        v.addView(getEditButton().getView());
        return v;
      `,
      swiftFactory: `
        let views = [
          getCitationView()!.getView()!,
          getViewButton()!.getView()!,
          getEditButton()!.getView()!,
        ];
        let stack = UIStackView(arrangedSubviews: views)
        stack.axis = .vertical
        for v in views {
          v.translatesAutoresizingMaskIntoConstraints = false;
          v.widthAnchor.constraint(equalTo: stack.widthAnchor, multiplier: 1).isActive = true;
        }
        return stack;
      `,
    },
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.ui.stack.ScrollingWidgetView',
      name: 'dv',
      swiftOptional: false,
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
        return dv;
      `,
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
        return dv;
      `,
    }
  ],
  actions: [
    {
      name: 'viewAction',
      isAvailableArgs: ['controllerMode'],
      androidIsAvailable: 'return controllerMode == foam.u2.ControllerMode.VIEW;',
      swiftIsAvailable: 'return controllerMode === foam_u2_ControllerMode.VIEW;',
      androidCode: `
        getStack().push(getDv());
      `,
      swiftCode: `
        getStack()!.push(getDv());
      `
    },
    {
      name: 'edit',
      isAvailableArgs: ['controllerMode'],
      androidIsAvailable: 'return controllerMode != foam.u2.ControllerMode.VIEW;',
      swiftIsAvailable: 'return controllerMode !== foam_u2_ControllerMode.VIEW;',
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