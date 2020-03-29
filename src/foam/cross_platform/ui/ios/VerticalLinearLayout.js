foam.CLASS({
  package: 'foam.cross_platform.ui.ios',
  name: 'VerticalLinearLayout',
  swiftImports: [
    'UIKit',
  ],
  axioms: [
    {
      class: 'foam.cross_platform.code_generation.Extras',
      swiftCode: `
        class View: UIView {
          let children: [UIView];
          init(_ children: [UIView]) {
            self.children = children;
            super.init(frame: CGRect.zero)
            for c in children { addSubview(c) }
          }
          required init ? (coder: NSCoder) {
            fatalError("init(coder:) has not been implemented")
          }
          override func layoutSubviews() {
            super.layoutSubviews();
            var y: CGFloat = 0;
            let size = CGSize(width: frame.width, height: CGFloat.greatestFiniteMagnitude);
            for c in children {
              let s = c.sizeThatFits(size)
              c.frame = CGRect(x: 0, y: y, width: frame.width, height: s.height)
              y = c.frame.maxY
            }
          }
          override func sizeThatFits(_ size: CGSize) -> CGSize {
            var h: CGFloat = 0;
            for c in children {
              let s = c.sizeThatFits(size)
              h += s.height
              if h > size.height {
                h = size.height
                break;
              }
            }
            return CGSize(width: size.width, height: h);
          }
        }      `
    },
  ],
});