foam.CLASS({
  package: 'foam.cross_platform.ui.widget',
  name: 'IntField',
  extends: 'foam.cross_platform.ui.widget.TextField',
  properties: [
    {
      name: 'data',
      swiftAdapt: `
        if newValue is Int { return newValue }
        let str = newValue == nil ? "0" :
          newValue as? String ?? String(describing: newValue!);
        return Int(str) ?? 0;
      `,
      swiftPostSet: `
        let dataStr = String(describing: newValue!);
        let str = (getView() as! UITextView).text!
        if str != dataStr {
          (getView() as! UITextView).text = dataStr;
        }
      `
    }
  ],
  reactions: [
    ['', 'propertyChange.view', 'updateKeyboard']
  ],
  listeners: [
    {
      name: 'updateKeyboard',
      swiftCode: `
        (getView() as? UITextView)?.keyboardType = .numberPad;
      `
    }
  ]
});