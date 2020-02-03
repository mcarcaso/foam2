foam.CLASS({
  package: 'foam.cross_platform.ui.layout',
  name: 'EmailCitationView',
  swiftImports: [
    'UIKit'
  ],
  axioms: [
    {
      class: 'foam.cross_platform.code_generation.Extras',
      swiftCode: `
        class View: UIView {
          var o: foam_cross_platform_ui_layout_EmailCitationView? = nil;
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
      name: 'avatarText',
    },
    {
      swiftType: 'UIView?',
      name: 'from',
    },
    {
      swiftType: 'UIView?',
      name: 'subject',
    },
    {
      swiftType: 'UIView?',
      name: 'body',
    },
    {
      swiftType: 'UIView?',
      name: 'time',
    },

    {
      class: 'IntProperty',
      name: 'parentX',
      expressionArgs: ['parent'],
      swiftExpression: `return Int(parent?.frame.minX ?? 0)`
    },
    {
      class: 'IntProperty',
      name: 'parentY',
      expressionArgs: ['parent'],
      swiftExpression: `return Int(parent?.frame.minY ?? 0)`
    },
    {
      class: 'IntProperty',
      name: 'parentW',
      expressionArgs: ['parent'],
      swiftExpression: `return Int(parent?.frame.width ?? 0)`
    },
    {
      class: 'IntProperty',
      name: 'parentH',
      expressionArgs: ['avatarTextY', 'avatarTextH', 'bodyY', 'bodyH', 'timeY', 'timeH'],
      swiftExpression: `
        return max(avatarTextY + avatarTextH, bodyY + bodyH, timeY + timeH);
      `
    },

    {
      swiftType: 'CGSize?',
      name: 'avatarTextSize',
      expressionArgs: ['avatarText', 'parentW'],
      swiftExpression: `
        return avatarText?.sizeThatFits(CGSize(
          width: parentW, height: Int.max
        )) ?? nil;
      `
    },
    {
      class: 'IntProperty',
      name: 'avatarTextW',
      expressionArgs: ['avatarTextSize'],
      swiftExpression: `return Int(avatarTextSize?.width ?? 0)`
    },
    {
      class: 'IntProperty',
      name: 'avatarTextH',
      expressionArgs: ['avatarTextSize'],
      swiftExpression: `return Int(avatarTextSize?.height ?? 0)`
    },

    {
      class: 'IntProperty',
      name: 'fromX',
      expressionArgs: ['avatarTextW'],
      swiftExpression: `return avatarTextW`
    },
    {
      class: 'IntProperty',
      name: 'fromW',
      expressionArgs: ['parentW', 'fromX', 'timeW'],
      swiftExpression: `return parentW - fromX - timeW`
    },
    {
      class: 'IntProperty',
      name: 'fromH',
      expressionArgs: ['from', 'fromW'],
      swiftExpression: `
        return Int(from?.sizeThatFits(CGSize(
          width: fromW, height: Int.max
        )).height ?? 0);
      `
    },


    {
      class: 'IntProperty',
      name: 'subjectX',
      expressionArgs: ['fromX'],
      swiftExpression: `return fromX`
    },
    {
      class: 'IntProperty',
      name: 'subjectY',
      expressionArgs: ['fromH'],
      swiftExpression: `return fromH`
    },
    {
      class: 'IntProperty',
      name: 'subjectW',
      expressionArgs: ['fromW'],
      swiftExpression: `return fromW`
    },
    {
      class: 'IntProperty',
      name: 'subjectH',
      expressionArgs: ['subject', 'subjectW'],
      swiftExpression: `
        return Int(subject?.sizeThatFits(CGSize(
          width: subjectW, height: Int.max
        )).height ?? 0);
      `
    },

    {
      class: 'IntProperty',
      name: 'bodyX',
      expressionArgs: ['fromX'],
      swiftExpression: `return fromX`
    },
    {
      class: 'IntProperty',
      name: 'bodyY',
      expressionArgs: ['subjectY', 'subjectH'],
      swiftExpression: `return subjectY + subjectH`
    },
    {
      class: 'IntProperty',
      name: 'bodyW',
      expressionArgs: ['fromW'],
      swiftExpression: `return fromW`
    },
    {
      class: 'IntProperty',
      name: 'bodyH',
      expressionArgs: ['body', 'bodyW'],
      swiftExpression: `
        return Int(body?.sizeThatFits(CGSize(
          width: bodyW, height: Int.max
        )).height ?? 0);
      `
    },

    {
      class: 'IntProperty',
      name: 'timeX',
      expressionArgs: ['fromX', 'fromW'],
      swiftExpression: `return fromX + fromW`
    },
    {
      swiftType: 'CGSize?',
      name: 'timeSize',
      expressionArgs: ['time', 'parentW'],
      swiftExpression: `
        return time?.sizeThatFits(CGSize(
          width: parentW, height: Int.max
        ));
      `
    },
    {
      class: 'IntProperty',
      name: 'timeW',
      expressionArgs: ['timeSize'],
      swiftExpression: `return Int(timeSize?.width ?? 0)`
    },
    {
      class: 'IntProperty',
      name: 'timeH',
      expressionArgs: ['timeSize'],
      swiftExpression: `return Int(timeSize?.height ?? 0)`
    },
  ],
  constants: [
    {
      type: 'String[]',
      name: 'views',
      swiftValue: `[
        "parent",
        "avatarText",
        "from",
        "subject",
        "body",
        "time",
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
