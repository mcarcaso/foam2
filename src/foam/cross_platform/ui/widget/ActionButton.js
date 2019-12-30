foam.CLASS({
  package: 'foam.cross_platform.ui.widget',
  name: 'ActionButton',
  requires: [
    'foam.util.ArrayDetachable',
    'foam.core.ExpressionSlot',
  ],
  implements: [
    'foam.cross_platform.ui.AxiomView'
  ],
  swiftImports: [
    'UIKit'
  ],
  properties: [
    {
      class: 'FObjectProperty',
      name: 'data'
    },
    {
      class: 'FObjectProperty',
      of: 'foam.core.Action',
      name: 'action'
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
      name: 'label',
      expressionArgs: ['action$name'],
      androidExpression: `return (String) action$name;`,
      swiftExpression: `return action$name as? String`
    },
    {
      androidType: 'android.widget.Button',
      swiftType: 'UIView?',
      name: 'view',
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
    ['', 'propertyChange.isAvailable', 'updateView'],
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
        if ( getAction() == null ) return;
        foam.cross_platform.Context x = getSubX().createSubContext(new java.util.HashMap<String, Object>() {{
          put("onClickView", v);
        }});
        getAction().call(getData(), new Object[] {x});
      `,
      swiftCode: `
        _ = getAction()?.call(getData(), [getSubX()]);
      `
    },
    {
      name: 'bindData',
      androidCode: `
        foam.core.Action action = (foam.core.Action) axiom;
        setAction(action);
        setData(data);

        foam.core.Slot isAvailable = action.createIsAvailableSlot(data);
        foam.core.Slot isEnabled = action.createIsEnabledSlot(data);

        final ActionButton self = this;
        return ArrayDetachable_create()
          .setArray(new foam.core.Detachable[] {
            isEnabled == null ? null : getIsEnabled$().follow(isEnabled),
            isAvailable == null ? null : getIsAvailable$().follow(isAvailable),
            <%=detachable(\`
              self.clearProperty("isEnabled");
              self.clearProperty("isAvailable");
              if ( foam.cross_platform.Lib.equals(self.getAction(), axiom) ) {
                self.clearProperty("action");
              }
              if ( foam.cross_platform.Lib.equals(self.getData(), data) ) {
                self.clearProperty("data");
              }
            \`)%>
          })
          .build();
      `,
      swiftCode: `
        let action = axiom as! foam_core_Action;
        setAction(action);
        setData(data);

        let isAvailable = action.createIsAvailableSlot(data);
        let isEnabled = action.createIsEnabledSlot(data);

        return ArrayDetachable_create()
          .setArray([
            isEnabled == nil ? nil : getIsEnabled$().follow(isEnabled),
            isAvailable == nil ? nil : getIsAvailable$().follow(isAvailable),
            <%=detachable(\`
              self!.clearProperty("isEnabled");
              self!.clearProperty("isAvailable");
              if ( foam_cross_platform_Lib.equals(self!.getAction(), axiom) ) {
                self!.clearProperty("action");
              }
              if ( foam_cross_platform_Lib.equals(self!.getData(), data) ) {
                self!.clearProperty("data");
              }
            \`)%>
          ].filter({o -> Bool in return o != nil }))
          .build();
      `
    }
  ],
  listeners: [
    {
      name: 'updateView',
      androidCode: `
        if ( getView() == null ) return;
        getView().setVisibility(getIsAvailable() ?
          android.view.View.VISIBLE : android.view.View.GONE);
        getView().setEnabled(getIsEnabled());
        getView().setText(getLabel());
      `,
      swiftCode: `
        if getView() == nil { return }
        let b = getView() as! UIButton;
        b.isHidden = !getIsAvailable();
        b.isEnabled = getIsEnabled();
        b.setTitle(getLabel(), for: .normal)
      `
    }
  ]
});
