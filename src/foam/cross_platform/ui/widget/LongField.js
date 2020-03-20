foam.CLASS({
  package: 'foam.cross_platform.ui.widget',
  name: 'LongField',
  extends: 'foam.cross_platform.ui.widget.TextField',
  properties: [
    {
      class: 'LongProperty',
      name: 'min',
      androidValue: 'Long.MIN_VALUE',
      swiftValue: 'Int.min'
    },
    {
      class: 'LongProperty',
      name: 'max',
      androidValue: 'Long.MAX_VALUE',
      swiftValue: 'Int.max'
    },
    {
      name: 'data',
      androidAdapt: `
        if ( newValue == null ) return 0;
        if ( newValue instanceof Number ) return newValue;
        String str = newValue.toString();
        if ( str.equals("") ) return 0;
        try {
          long l = Long.parseLong(str);
          return getMin() < l && l < getMax() ? l : oldValue;
        }
        catch ( Exception e ) { return oldValue; }
      `,
      swiftAdapt: `
        if newValue == nil { return 0 }
        if newValue is Int { return newValue }
        let str = newValue as? String ?? String(describing: newValue!);
        if str == "" { return 0 }
        if let l = Int(str) {
          return getMin() < l && l < getMax() ? l : oldValue;
        }
        return oldValue;
      `,
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