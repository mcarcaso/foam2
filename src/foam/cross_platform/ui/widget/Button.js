foam.CLASS({
  package: 'foam.cross_platform.ui.widget',
  name: 'Button',
  swiftImports: [
    'UIKit'
  ],
  properties: [
    {
      class: 'BooleanProperty',
      name: 'isAvailable',
      value: true
    },
    {
      class: 'StringProperty',
      name: 'label'
    },
    {
      class: 'FunctionProperty',
      name: 'action'
    },
    {
      swiftType: 'UIButton?',
      name: 'view',
      postSet: `
        if oldValue != nil {
          oldValue.removeTarget(
            self,
            action: #selector(Self.callAction),
            for: .touchUpInside)
        }
        newValue.addTarget(
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
        _ = getAction()?.executeFunction(nil);
      `
    }
  ],
  listeners: [
    {
      name: 'updateView',
      swiftCode: `
        if getView() == nil { return }
        getView()!.isHidden = !getIsAvailable();
        getView()!.titleLabel = getLabel();
        getView()!.text = getData() as? String ?? String(describing: getData());
      `
    }
  ]
});
