import Foundation
import UIKit

class VerticalLayout: UIView {
  override func layoutSubviews() {
    super.layoutSubviews();
    backgroundColor = .systemGray
    var y: CGFloat = 0;
    for v in subviews {
      if v.isHidden { continue }
      let f = v.frame;
      let size = v.sizeThatFits(CGSize(width: Int(frame.width), height: Int.max))
      v.frame = CGRect(
        x: f.minX,
        y: y,
        width: frame.width,
        height: size.height);
      y = v.frame.maxY + 1
    }
  }
}
