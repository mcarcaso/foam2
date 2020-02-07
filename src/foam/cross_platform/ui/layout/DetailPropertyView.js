foam.CLASS({
  package: 'foam.cross_platform.ui.layout',
  name: 'DetailPropertyView',
  swiftImports: [
    'UIKit'
  ],
  axioms: [
    {
      class: 'foam.cross_platform.code_generation.Extras',
      swiftCode: `
        class View: UIView {
          var o: foam_cross_platform_ui_layout_DetailPropertyView? = nil;
          override func layoutSubviews() {
            o?.doLayout();
          }
          override func sizeThatFits(_ size: CGSize) -> CGSize {
            o!.setParentW(Int(size.width));
            let s = CGSize(
              width: o!.getParentW(),
              height: o!.getParentH()
            )
            o!.clearProperty("parentW");
            return s;
          }
        }
      `,
    }
  ],
  properties: [
    {
      swiftType: 'UIView?',
      name: 'parent',
    },
    {
      swiftType: 'UIView?',
      name: 'label',
    },
    {
      swiftType: 'UIView?',
      name: 'help',
    },
    {
      swiftType: 'UIView?',
      name: 'propData',
    },
    {
      swiftType: 'UIView?',
      name: 'validation',
    },
    {
      class: 'IntProperty',
      name: 'parentX',
      expressionArgs: ['parent'],
      swiftExpression: `return parent == nil ? 0 : Int(parent!.frame.minX)`
    },
    {
      class: 'IntProperty',
      name: 'parentY',
      expressionArgs: ['parent'],
      swiftExpression: `return parent == nil ? 0 : Int(parent!.frame.minY)`
    },
    {
      class: 'IntProperty',
      name: 'parentW',
      expressionArgs: ['parent'],
      swiftExpression: `return parent == nil ? 0 : Int(parent!.frame.width)`
    },
    {
      class: 'IntProperty',
      name: 'parentH',
      expressionArgs: ['validationY', 'validationH'],
      swiftExpression: `return validationY + validationH + Self.PADDING()`
    },
    {
      class: 'IntProperty',
      name: 'labelX',
      swiftValue: `Self.PADDING()`
    },
    {
      class: 'IntProperty',
      name: 'labelY',
      swiftValue: `Self.PADDING()`
    },
    {
      class: 'IntProperty',
      name: 'labelW',
      expressionArgs: ['helpW', 'parentW'],
      swiftExpression: `return parentW - helpW - 3 * Self.PADDING()`
    },
    {
      class: 'IntProperty',
      name: 'labelH',
      expressionArgs: ['label', 'labelW'],
      swiftExpression: `
        return label == nil ? 0 : Int(label!.sizeThatFits(CGSize(
          width: labelW, height: Int.max
        )).height)
      `
    },
    {
      class: 'IntProperty',
      name: 'helpX',
      expressionArgs: ['labelW'],
      swiftExpression: `return labelW + 2 * Self.PADDING();`
    },
    {
      class: 'IntProperty',
      name: 'helpY',
      swiftValue: 'Self.PADDING()'
    },
    {
      swiftType: 'CGSize?',
      name: 'helpSize',
      expressionArgs: ['help', 'parentW'],
      swiftExpression: `
        return help == nil ? nil : help!.sizeThatFits(CGSize(
          width: parentW, height: Int.max
        ));
      `
    },
    {
      class: 'IntProperty',
      name: 'helpW',
      expressionArgs: ['helpSize'],
      swiftExpression: `return helpSize == nil ? 0 : Int(helpSize!.width)`
    },
    {
      class: 'IntProperty',
      name: 'helpH',
      expressionArgs: ['helpSize'],
      swiftExpression: `return helpSize == nil ? 0 : Int(helpSize!.height)`
    },
    {
      class: 'IntProperty',
      name: 'propDataX',
      swiftValue: `Self.PADDING()`
    },
    {
      class: 'IntProperty',
      name: 'propDataY',
      expressionArgs: ['labelH'],
      swiftExpression: `
        return labelH + 2 * Self.PADDING();
      `
    },
    {
      class: 'IntProperty',
      name: 'propDataW',
      expressionArgs: ['helpW', 'parentW'],
      swiftExpression: `return parentW - helpW - 3 * Self.PADDING()`
    },
    {
      class: 'IntProperty',
      name: 'propDataH',
      expressionArgs: ['propData', 'propDataW'],
      swiftExpression: `
        return propData == nil ? 0 : Int(propData!.sizeThatFits(CGSize(
          width: propDataW, height: Int.max
        )).height)
      `
    },
    {
      class: 'IntProperty',
      name: 'validationX',
      swiftValue: `Self.PADDING()`
    },
    {
      class: 'IntProperty',
      name: 'validationY',
      expressionArgs: ['propDataY', 'propDataH'],
      swiftExpression: `return propDataY + propDataH + Self.PADDING()`
    },
    {
      class: 'IntProperty',
      name: 'validationW',
      expressionArgs: ['helpW', 'parentW'],
      swiftExpression: `return parentW - helpW - 3 * Self.PADDING()`
    },
    {
      class: 'IntProperty',
      name: 'validationH',
      expressionArgs: ['validation', 'validationW'],
      swiftExpression: `
        return validation == nil ? 0 : Int(validation!.sizeThatFits(CGSize(
          width: validationW, height: Int.max
        )).height)
      `
    },
  ],
  constants: [
    {
      type: 'Int',
      name: 'padding',
      value: 12
    },
    {
      type: 'String[]',
      name: 'views',
      swiftValue: `[
        "parent",
        "label",
        "help",
        "propData",
        "validation",
      ]`
    }
  ],
  methods: [
    {
      name: 'doLayout',
      swiftCode: `
        for name in Self.VIEWS() {
          // By clearing and re-setting the views, any expressions that use them
          // will get re-evaluated.
          let v = getProperty(name) as! UIView;
          clearProperty(name);
          setProperty(name, v);
        }
        for name in Self.VIEWS() {
          let v = getProperty(name) as! UIView;
          v.frame = CGRect(
            x: getProperty(name + "X") as? Int ?? 0,
            y: getProperty(name + "Y") as? Int ?? 0,
            width: getProperty(name + "W") as? Int ?? 0,
            height: getProperty(name + "H") as? Int ?? 0
          )
        }
      `
    }
  ]
});
