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
      androidType: 'int',
      flags: ['android'],
      name: 'androidVisibility',
      expressionArgs: ['isAvailable'],
      androidExpression: `
        return isAvailable ?
          android.view.View.VISIBLE : android.view.View.GONE;
      `
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
        b.setBackgroundColor(getTheme().getSecondary());
        b.setTextColor(getTheme().getOnSecondary());
        b.setMinWidth(0);
        float density = getAndroidContext().getResources().getDisplayMetrics().density;
        int p = (int)(density * PADDING());
        b.setPadding(p, p, p, p);
        b.setMinWidth(0);
        b.setMinimumWidth(0);
        b.setMinHeight(0);
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

        return b;
      `,
      androidPostSet: `
        if ( oldValue != null ) {
          ((android.widget.Button) oldValue).setOnClickListener(null);
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
        b.backgroundColor = getTheme()!.getSecondary()
        b.setTitleColor(getTheme()!.getOnSecondary(), for: .normal);
        b.showsTouchWhenHighlighted = true;
        let i = CGFloat(Self.PADDING());
        b.contentEdgeInsets = UIEdgeInsets(top: i, left: i, bottom: i, right: i);
        b.layer.cornerRadius = CGFloat(Self.CORNER_RADIUS());
        b.clipsToBounds = true;
        return b;
      `,
      swiftPostSet: `
        if oldValue != nil {
          (oldValue as! UIButton).removeTarget(
            self,
            action: #selector(Self.callAction),
            for: .touchUpInside)
        }
        (newValue as! UIButton).addTarget(
          self,
          action: #selector(Self.callAction),
          for: .touchUpInside)
      `
    },
  ],
  reactions: [
    ['', 'propertyChange.view', 'updateView'],
    ['', 'propertyChange.isAvailable', 'updateView', ['swift']],
    ['', 'propertyChange.androidVisibility', 'updateView', ['android']],
    ['', 'propertyChange.isEnabled', 'updateView'],
    ['', 'propertyChange.label', 'updateView'],
  ],
  methods: [
    {
      name: 'init',
      androidCode: `updateView(null, null);`,
      swiftCode: `updateView(nil, nil);`,
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

        final ActionButton self = this;
        return ArrayDetachable_create()
          .setArray(new foam.core.Detachable[] {
            getLabel$().follow(action.getI18nLabel$()),
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
        let fn = <%=fn(\`
          return action.call(data, args);
        \`)%>;
        setData(fn);

        let isAvailable = action.createIsAvailableSlot(getX(), data);
        let isEnabled = action.createIsEnabledSlot(data);

        return ArrayDetachable_create()
          .setArray([
            getLabel$().follow(action.getI18nLabel$()),
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
        getView().setVisibility(getAndroidVisibility());
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
