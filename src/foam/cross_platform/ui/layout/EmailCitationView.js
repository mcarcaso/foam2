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
            o!.setParentW(size.width);
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
      swiftType: 'CGFloat',
      name: 'parentX',
      expressionArgs: ['parent'],
      swiftExpression: `return parent?.frame.minX ?? 0`
    },
    {
      swiftType: 'CGFloat',
      name: 'parentY',
      expressionArgs: ['parent'],
      swiftExpression: `return parent?.frame.minY ?? 0`
    },
    {
      swiftType: 'CGFloat',
      name: 'parentW',
      expressionArgs: ['parent'],
      swiftExpression: `return parent?.frame.width ?? 0`
    },
    {
      swiftType: 'CGFloat',
      name: 'parentH',
      expressionArgs: ['parent', 'avatarTextH', 'bodyY', 'bodyH', 'timeH'],
      swiftExpression: `
        return max(avatarTextH, bodyY + bodyH, timeH);
      `
    },

    {
      swiftType: 'CGSize?',
      name: 'avatarTextSize',
      expressionArgs: ['avatarText', 'parentW'],
      swiftExpression: `
        return avatarText?.sizeThatFits(CGSize(
          width: parentW, height: CGFloat.greatestFiniteMagnitude
        )) ?? nil;
      `
    },
    {
      swiftType: 'CGFloat',
      name: 'avatarTextW',
      expressionArgs: ['avatarTextSize'],
      swiftExpression: `return avatarTextSize?.width ?? 0`
    },
    {
      swiftType: 'CGFloat',
      name: 'avatarTextH',
      expressionArgs: ['avatarTextSize'],
      swiftExpression: `return avatarTextSize?.height ?? 0`
    },

    {
      swiftType: 'CGFloat',
      name: 'fromX',
      expressionArgs: ['avatarTextW'],
      swiftExpression: `return avatarTextW`
    },
    {
      swiftType: 'CGFloat',
      name: 'fromW',
      expressionArgs: ['parentW', 'fromX', 'timeW'],
      swiftExpression: `return parentW - fromX - timeW`
    },
    {
      swiftType: 'CGFloat',
      name: 'fromH',
      expressionArgs: ['from', 'fromW'],
      swiftExpression: `
        return from?.sizeThatFits(CGSize(
          width: fromW, height: CGFloat.greatestFiniteMagnitude
        )).height ?? 0;
      `
    },


    {
      swiftType: 'CGFloat',
      name: 'subjectX',
      expressionArgs: ['fromX'],
      swiftExpression: `return fromX`
    },
    {
      swiftType: 'CGFloat',
      name: 'subjectY',
      expressionArgs: ['fromH'],
      swiftExpression: `return fromH`
    },
    {
      swiftType: 'CGFloat',
      name: 'subjectW',
      expressionArgs: ['fromW'],
      swiftExpression: `return fromW`
    },
    {
      swiftType: 'CGFloat',
      name: 'subjectH',
      expressionArgs: ['subject', 'subjectW'],
      swiftExpression: `
        return subject?.sizeThatFits(CGSize(
          width: subjectW, height: CGFloat.greatestFiniteMagnitude
        )).height ?? 0;
      `
    },

    {
      swiftType: 'CGFloat',
      name: 'bodyX',
      expressionArgs: ['fromX'],
      swiftExpression: `return fromX`
    },
    {
      swiftType: 'CGFloat',
      name: 'bodyY',
      expressionArgs: ['subjectY', 'subjectH'],
      swiftExpression: `return subjectY + subjectH`
    },
    {
      swiftType: 'CGFloat',
      name: 'bodyW',
      expressionArgs: ['fromW'],
      swiftExpression: `return fromW`
    },
    {
      swiftType: 'CGFloat',
      name: 'bodyH',
      expressionArgs: ['body', 'bodyW'],
      swiftExpression: `
        return body?.sizeThatFits(CGSize(
          width: bodyW, height: CGFloat.greatestFiniteMagnitude
        )).height ?? 0;
      `
    },

    {
      swiftType: 'CGFloat',
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
          width: parentW, height: CGFloat.greatestFiniteMagnitude
        ));
      `
    },
    {
      swiftType: 'CGFloat',
      name: 'timeW',
      expressionArgs: ['timeSize'],
      swiftExpression: `return timeSize?.width ?? 0`
    },
    {
      swiftType: 'CGFloat',
      name: 'timeH',
      expressionArgs: ['timeSize'],
      swiftExpression: `return timeSize?.height ?? 0`
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
          let v = getProperty(name) as? UIView;
          if v == nil { return }
          clearProperty(name);
          setProperty(name, v);
        }
        for name in Self.VIEWS() {
          let v = getProperty(name) as! UIView;
          v.frame = CGRect(
            x: getProperty(name + "X") as? CGFloat ?? 0,
            y: getProperty(name + "Y") as? CGFloat ?? 0,
            width: getProperty(name + "W") as? CGFloat ?? 0,
            height: getProperty(name + "H") as? CGFloat ?? 0
          )
        }
      `
    }
  ]
});
