foam.CLASS({
  package: 'foam.cross_platform.ui.widget',
  name: 'ActionButton',
  requires: [
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
      name: 'isAvailable'
    },
    {
      class: 'BooleanProperty',
      name: 'isEnabled'
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
      swiftType: 'UIButton?',
      name: 'view',
      androidPostSet: `
        if ( oldValue != null ) {
          ((android.widget.Button) oldValue).setOnClickListener(null);
        }
        if ( newValue != null ) {
          final ActionButton self = this;
          newValue.setOnClickListener(new android.widget.Button.OnClickListener() {  
            public void onClick(android.view.View v) {
              self.callAction(self.getSubX().createSubContext(new java.util.HashMap<String, Object>() {
                {
                  put("onClickView", v);
                }
              }));
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
        newValue?.addTarget(
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
      androidCode: `updateView(null, null);`
    },
    {
      name: 'callAction',
      swiftAnnotations: [
        '@objc'
      ],
      args: [
        { type: 'Context', name: 'x' }
      ],
      androidCode: `
        if ( getAction() != null ) getAction().call(getData(), new Object[] {x});
      `,
      swiftCode: `
        _ = getAction()?.call(getData(), nil);
      `
    },
    {
      name: 'bindData',
      androidCode: `
        foam.core.Action action = (foam.core.Action) axiom;

        setAction(action);
        setData(data);

        foam.core.Slot isAvailable = action.createIsAvailableSlot(data);
        final foam.core.Detachable isAvailableSub = getIsAvailable$().follow(isAvailable);

        foam.core.Slot isEnabled = action.createIsEnabledSlot(data);
        final foam.core.Detachable isEnabledSub = getIsEnabled$().follow(isEnabled);

        final ActionButton self = this;
        return <%=detachable(\`
          isAvailableSub.detach();
          isEnabledSub.detach();
          if ( foam.cross_platform.Lib.equals(self.getAction(), axiom) ) {
            self.clearProperty("action");
          }
          if ( foam.cross_platform.Lib.equals(self.getData(), data) ) {
            self.clearProperty("data");
          }
        \`)%>;
      `,
      swiftCode: `
        setAction(axiom);
        setData(data);
        return <%=detachable(\`
          if foam_cross_platform_Lib.equals(self!.getAction(), axiom) {
            self!.clearProperty("action")
          }
          if foam_cross_platform_Lib.equals(self!.getData(), data) {
            self!.clearProperty("data")
          }
        \`)%>
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
        getView()!.isHidden = !getIsAvailable();
        getView()!.setTitle(getLabel(), for: .normal)
      `
    }
  ]
});
