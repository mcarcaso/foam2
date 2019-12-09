import UIKit
import Foundation

class BasicDetailPropertyView: UIView {

  @IBOutlet var label: UILabel? {
    didSet { updateView() }
  };
  @IBOutlet var propertyContainer: UIView? {
    didSet { updateView() }
  };
  @IBOutlet var helpButton: UIView? {
    didSet { updateView() }
  };
  @IBOutlet var validation: UILabel? {
    didSet { updateView() }
  };
  var data: foam_cross_platform_ui_DefaultDetailPropertyView? = nil {
    didSet { updateView() }
  }

  required init?(coder: NSCoder) {
    super.init(coder: coder);
  }

  private func updateView() {
    data?.setLabelTextView(label);
    data?.setPropertyViewContainer(propertyContainer);
    data?.setHelpButtonView(helpButton);
  }
}
