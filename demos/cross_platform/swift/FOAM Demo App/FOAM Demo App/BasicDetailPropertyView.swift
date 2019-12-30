//
//  BasicDetailPropertyView.swift
//  FOAM Demo App
//
//  Created by Michael Carcasole on 2019-12-28.
//

import Foundation
import UIKit

class BasicDetailPropertyView: foam_cross_platform_ui_DetailPropertyViewDetailView {
  var layout: foam_cross_platform_ui_layout_DetailPropertyView? = nil;
  func maybeInitViews() {
    if layout != nil { return }
    backgroundColor = .blue

    let label = UILabel()
    label.backgroundColor = .white;
    label.numberOfLines = 0;
    label.lineBreakMode = .byWordWrapping;
    self.label = label;
    addSubview(label);

    validation = UILabel();
    validation?.backgroundColor = .white;
    addSubview(validation!);

    help = UIButton();
    addSubview(help!);

    propData = ProxyView();
    propData?.backgroundColor = .white;
    addSubview(propData!);

    layout = foam_cross_platform_ui_layout_DetailPropertyView
      .foam_cross_platform_ui_layout_DetailPropertyViewBuilder(x_!)
      .setParent(self)
      .setLabel(label)
      .setHelp(help)
      .setPropData(propData)
      .setValidation(validation)
      .build()

    let props = [
      "label",
      "validation",
      "propData",
      "prop$help"
    ]
    let l = foam_swift_AnonymousListener.foam_swift_AnonymousListenerBuilder(x_)
      .setFn({[weak self] (sub: foam_core_Detachable?, args: [Any?]?) -> Void in
        self?.setNeedsLayout();
      })
      .build();
    for name in props {
      let s = _model_data_?.getSlot(name)
      _ = s?.slotSub(l); // TODO store and unsub.
    }
  }
  override func layoutSubviews() {
    super.layoutSubviews();
    maybeInitViews();
    layout?.doLayout();
  }
  override func sizeThatFits(_ size: CGSize) -> CGSize {
    maybeInitViews();
    layout!.setParentW(Int(size.width));
    let s = CGSize(
      width: layout!.getParentW(),
      height: layout!.getValidationY() + layout!.getValidationH()
    )
    layout!.clearProperty("parentW");
    return s;
  }
}

class VerticalLayout: UIView {
  override func layoutSubviews() {
    super.layoutSubviews();
    var y: CGFloat = 0;
    for v in subviews {
      if v.isHidden { continue }
      let f = v.frame;
      let size = v.sizeThatFits(CGSize(width: Int(frame.width), height: Int.max))
      v.frame = CGRect(
        x: f.minX,
        y: y,
        width: size.width,
        height: size.height);
      y = v.frame.maxY + 1
    }
  }
}

class ProxyView: UIView {
  private var delegate: UIView?
  func setDelegate(_ d: UIView) {
    delegate = d
    for v in subviews {
      v.removeFromSuperview()
    }
    addSubview(d)
  }
  override func sizeThatFits(_ size: CGSize) -> CGSize {
    return delegate!.sizeThatFits(size);
  }
  override func layoutSubviews() {
    super.layoutSubviews();
    delegate!.frame = CGRect(x: 0, y: 0, width: frame.width, height: frame.height);
  }
}
