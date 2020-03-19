foam.CLASS({
  package: 'foam.cross_platform.ui.widget',
  name: 'IntField',
  extends: 'foam.cross_platform.ui.widget.TextField',
  properties: [
    {
      name: 'data',
      androidAdapt: `
        if ( newValue instanceof Number ) return newValue;
        try { return Long.parseLong(newValue == null ? "0" : newValue.toString()); }
        catch ( Exception e ) { return oldValue; }
      `,
      swiftAdapt: `
        if newValue is Int { return newValue }
        let str = newValue == nil ? "0" :
          newValue as? String ?? String(describing: newValue!);
        return Int(str) ?? oldValue;
      `,
      androidPostSet: `
        String dataStr = String.format("%d", newValue);
        String str = getView().getText().toString();
        if ( ! str.equals(dataStr) ) {
          getView().setText(dataStr);
        }
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
      androidCode: `
        getView().setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
      `,
      swiftCode: `
        (getView() as? UITextView)?.keyboardType = .numberPad;
      `
    }
  ]
});