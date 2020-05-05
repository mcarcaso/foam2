foam.CLASS({
  package: 'foam.cross_platform.ui.widget',
  name: 'CardView',
  implements: [
    'foam.cross_platform.ui.View'
  ],
  swiftImports: [
    'UIKit'
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
  axioms: [
    {
      class: 'foam.cross_platform.code_generation.Extras',
      swiftCode: `
        class CardView: UIView {
          var cornerRadius: CGFloat = 2
          var shadowOffsetWidth: Int = 0
          var shadowOffsetHeight: Int = 0
          var shadowColor: UIColor? = nil;
          var shadowOpacity: Float = 0.1

          override func layoutSubviews() {
            layer.cornerRadius = cornerRadius
            let shadowPath = UIBezierPath(roundedRect: bounds, cornerRadius: cornerRadius)
            layer.masksToBounds = false
            layer.shadowColor = shadowColor?.cgColor
            layer.shadowOffset = CGSize(width: shadowOffsetWidth, height: shadowOffsetHeight);
            layer.shadowOpacity = shadowOpacity
            layer.shadowPath = shadowPath.cgPath
          }
        }
      `
    }
  ],
  properties: [
    {
      class: 'ColorProperty',
      name: 'shadowColor',
      expressionArgs: ['theme$onSurface'],
      androidExpression: `return (int) theme$onSurface;`,
      swiftExpression: `return theme$onSurface as! UIColor`
    },
    {
      class: 'ColorProperty',
      name: 'backgroundColor',
      expressionArgs: ['theme$surface'],
      androidExpression: `return (int) theme$surface;`,
      swiftExpression: `return theme$surface as! UIColor`
    },
    {
      androidType: 'androidx.cardview.widget.CardView',
      swiftType: 'UIView?',
      name: 'view',
      androidFactory: `
        androidx.cardview.widget.CardView v = new androidx.cardview.widget.CardView(getAndroidContext());
        styleView(v);
        return v;
      `,
      swiftFactory: `
        let c = CardView();
        styleView(c);
        return c;
      `
    },
    {
      class: 'FObjectProperty',
      of: 'foam.core.Detachable',
      name: 'sub_'
    },
  ],
  reactions: [
    ['', 'propertyChange.view', 'updateView'],
    ['', 'propertyChange.shadowColor', 'updateView'],
    ['', 'propertyChange.backgroundColor', 'updateView'],
  ],
  listeners: [
    {
      name: 'updateView',
      androidCode: `
        styleView(getView());
      `,
      swiftCode: `
        styleView(getView());
      `,
    }
  ],
  methods: [
    {
      name: 'styleView',
      args: [
        {
          androidType: 'androidx.cardview.widget.CardView',
          swiftType: 'UIView?',
          name: 'c'
        }
      ],
      androidCode: `
        c.setCardBackgroundColor(getShadowColor());
        c.setBackgroundColor(getBackgroundColor());
      `,
      swiftCode: `
        let c = c as? CardView;
        c?.shadowColor = getShadowColor();
        c?.backgroundColor = getBackgroundColor();
        c?.setNeedsLayout();
      `
    },
    {
      name: 'wrapView',
      args: [
        { androidType: 'android.view.View', swiftType: 'UIView', name: 'v' },
        { type: 'Integer', name: 'padding' },
      ],
      androidCode: `
        float d = getAndroidContext().getResources().getDisplayMetrics().density;
        androidx.cardview.widget.CardView c = getView();
        c.addView(v);
        int p = (int) (padding * d);
        c.setContentPadding(p, p, p, p);
      `,
      swiftCode: `
        let p = CGFloat(padding);
        let c = getView()!;
        c.addSubview(v);
        v.translatesAutoresizingMaskIntoConstraints = false;
        v.widthAnchor.constraint(equalTo: c.widthAnchor, constant: -2*p).isActive = true;
        c.heightAnchor.constraint(greaterThanOrEqualTo: v.heightAnchor, constant: 2*p).isActive = true;
        v.topAnchor.constraint(equalTo: c.topAnchor, constant: p).isActive = true;
        v.leadingAnchor.constraint(equalTo: c.leadingAnchor, constant: p).isActive = true;
      `
    }
  ]
});