foam.CLASS({
  package: 'foam.cross_platform.ui.widget',
  name: 'ActionButton',
  requires: [
    'foam.util.ArrayDetachable',
    'foam.core.ExpressionSlot',
  ],
  implements: [
    'foam.cross_platform.ui.AxiomView',
    'foam.cross_platform.ui.LabelledView',
  ],
  swiftImports: [
    'UIKit'
  ],
  constants: [
    {
      type: 'Integer',
      name: 'padding',
      value: 8
    },
    {
      type: 'Integer',
      name: 'cornerRadius',
      value: 4
    },
  ],
  imports: [
    {
      name: 'theme',
      type: 'foam.cross_platform.ui.Theme',
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
      class: 'FunctionProperty',
      name: 'data'
    },
    {
      class: 'BooleanProperty',
      name: 'isAvailable',
      value: true
    },
    {
      class: 'BooleanProperty',
      name: 'isEnabled',
      value: true
    },
    {
      class: 'StringProperty',
      name: 'label'
    },
    {
      androidType: 'android.view.View',
      swiftType: 'UIView?',
      name: 'view',
      androidFactory: `
        android.widget.Button b = new android.widget.Button(getAndroidContext());
        styleButton(b);
        return b;
      `,
      androidPostSet: `
        if ( oldValue != null ) {
          ((android.view.View) oldValue).setOnClickListener(null);
        }
        if ( newValue != null ) {
          newValue.setOnClickListener(new android.widget.Button.OnClickListener() {
            public void onClick(android.view.View v) {
              callAction(v);
            }
          });
        }
      `,
      swiftFactory: `
        let b = UIButton()
        styleButton(b)
        return b;
      `,
      swiftPostSet: `
        if oldValue != nil {
          (oldValue as! UIButton).removeTarget(
            self,
            action: #selector(Self.callAction),
            for: .touchUpInside)
        }
        if newValue != nil {
          (newValue as! UIButton).addTarget(
            self,
            action: #selector(Self.callAction),
            for: .touchUpInside)
        }
      `
    },
  ],
  reactions: [
    ['', 'propertyChange.view', 'updateView'],
    ['', 'propertyChange.isAvailable', 'updateView'],
    ['', 'propertyChange.isEnabled', 'updateView'],
    ['', 'propertyChange.label', 'updateView'],
  ],
  methods: [
    {
      name: 'init',
      documentation: `
        Nulls out the view when detaching to prevent the view from being
        accessed in updateView because the clearProperty calls in bindData will
        trigger updateView and if the view is touched when this is being
        destroyed, things crash.
      `,
      androidCode: `
        onDetach(<%=detachable(\`
          setView(null);
        \`)%>);
        updateView(null, null);
      `,
      swiftCode: `
        updateView(nil, nil);
        onDetach(<%=detachable(\`
          self?.setView(nil);
        \`)%>);
       `,
    },
    {
      name: 'styleButton',
      args: [
        { name: 'b', androidType: 'android.view.View', swiftType: 'UIButton' }
      ],
      androidCode: `
        b.setBackgroundColor(getTheme().getSecondary());
        if ( b instanceof android.widget.Button ) {
          android.widget.Button b2 = (android.widget.Button) b;
          b2.setTextColor(getTheme().getOnSecondary());
          b2.setMinWidth(0);
          b2.setMinWidth(0);
          b2.setMinHeight(0);
        }

        float density = getAndroidContext().getResources().getDisplayMetrics().density;
        int p = (int)(density * PADDING());
        b.setPadding(p, p, p, p);

        b.setMinimumWidth(0);

        b.setMinimumHeight(0);

        android.graphics.drawable.GradientDrawable d = new android.graphics.drawable.GradientDrawable();
        d.setCornerRadius(density * CORNER_RADIUS());
        d.setColor(getTheme().getSecondary());
        b.setBackground(d);

        b.setOnTouchListener(new android.view.View.OnTouchListener() {
          public boolean onTouch(android.view.View v, android.view.MotionEvent event) {
            if (event.getAction() == android.view.MotionEvent.ACTION_DOWN) {
              v.getBackground().setColorFilter(0x70000000, android.graphics.PorterDuff.Mode.DARKEN);
              v.invalidate();
            }
            else if (event.getAction() == android.view.MotionEvent.ACTION_UP) {
              v.getBackground().clearColorFilter();
              v.invalidate();
            }
            return false;
          }
        });
      `,
      swiftCode: `
        b.backgroundColor = getTheme()!.getSecondary()
        b.setTitleColor(getTheme()!.getOnSecondary(), for: .normal);
        b.showsTouchWhenHighlighted = true;
        let i = CGFloat(Self.PADDING());
        b.contentEdgeInsets = UIEdgeInsets(top: i, left: i, bottom: i, right: i);
        b.layer.cornerRadius = CGFloat(Self.CORNER_RADIUS());
        b.clipsToBounds = true;
      `
    },
    {
      name: 'callAction',
      swiftAnnotations: [
        '@objc'
      ],
      androidArgs: [
        { type: 'android.view.View', name: 'v' }
      ],
      androidCode: `
        if ( getData() == null ) return;
        foam.cross_platform.Context x = getSubX().createSubContext(new java.util.HashMap<String, Object>() {{
          put("onClickView", v);
        }});
        getData().executeFunction(new Object[] { x });
      `,
      swiftCode: `
        _ = getData()?.executeFunction([getSubX()]);
      `
    },
    {
      name: 'bindData',
      androidCode: `
        foam.core.Action action = (foam.core.Action) axiom;
        final foam.cross_platform.GenericFunction fn = new foam.cross_platform.GenericFunction() {
          public Object executeFunction(Object[] args) {
            return action.call(data, args);
          }
        };
        setData(fn);

        foam.core.Slot isAvailable = action.createIsAvailableSlot(getX(), data);
        foam.core.Slot isEnabled = action.createIsEnabledSlot(data);

        setLabel(action.getI18nLabel());

        final ActionButton self = this;
        return ArrayDetachable_create()
          .setArray(new foam.core.Detachable[] {
            isEnabled == null ? null : getIsEnabled$().follow(isEnabled),
            isAvailable == null ? null : getIsAvailable$().follow(isAvailable),
            <%=detachable(\`
              self.clearProperty("label");
              self.clearProperty("isEnabled");
              self.clearProperty("isAvailable");
              if ( foam.cross_platform.Lib.equals(self.getData(), fn) ) {
                self.clearProperty("data");
              }
            \`)%>
          })
          .build();
      `,
      swiftCode: `
        let action = axiom as! foam_core_Action;
        let fn = foam_swift_AnonymousGenericFunction
          .foam_swift_AnonymousGenericFunctionBuilder(nil)
          .setFn({[weak data] (args: [Any?]?) -> Any? in
            return action.call(data, args);
          })
          .build();
        setData(fn);

        let isAvailable = action.createIsAvailableSlot(getX(), data);
        let isEnabled = action.createIsEnabledSlot(data);

        setLabel(action.getI18nLabel());

        return ArrayDetachable_create()
          .setArray([
            isEnabled == nil ? nil : getIsEnabled$().follow(isEnabled),
            isAvailable == nil ? nil : getIsAvailable$().follow(isAvailable),
            <%=detachable(\`
              self!.clearProperty("label");
              self!.clearProperty("isEnabled");
              self!.clearProperty("isAvailable");
              if ( foam_cross_platform_Lib.equals(self!.getData(), fn) ) {
                self!.clearProperty("data");
              }
            \`)%>
          ])
          .build();
      `
    }
  ],
  listeners: [
    {
      name: 'updateView',
      isFramed: true,
      androidCode: `
        if ( getView() == null ) return;
        getView().setVisibility(getIsAvailable() ?
          android.view.View.VISIBLE : android.view.View.GONE);
        getView().setEnabled(getIsEnabled());
        getView().setAlpha(getIsEnabled() ? 1 : 0.5f);
        if ( getView() instanceof android.widget.Button) {
          ((android.widget.Button) getView()).setText(getLabel());
        }
      `,
      swiftCode: `
        if getView() == nil { return }
        let b = getView() as? UIButton;
        b?.isHidden = !getIsAvailable();
        b?.isEnabled = getIsEnabled();
        b?.alpha = getIsEnabled() ? 1 : 0.5
        b?.setTitle(getLabel(), for: .normal)
      `
    }
  ]
});
