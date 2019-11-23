foam.CLASS({
  package: 'foam.cross_platform.ui.widget',
  name: 'ActionButton',
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
      class: 'StringProperty',
      name: 'label',
      expressionArgs: ['action$name'],
      swiftExpression: `return action$name as? String`
    },
    {
      swiftType: 'UIButton?',
      name: 'view',
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
    ['', 'propertyChange', 'updateView']
  ],
  methods: [
    {
      name: 'callAction',
      swiftAnnotations: [
        '@objc'
      ],
      swiftCode: `
        _ = getAction()?.call(getData(), nil);
      `
    },
    {
      name: 'bindData',
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
      swiftCode: `
        if getView() == nil { return }
        getView()!.isHidden = !getIsAvailable();
        getView()!.setTitle(getLabel(), for: .normal)
      `
    }
  ]
});
