/**
 * @license
 * Copyright 2017 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'foam.swift.ui',
  name: 'FOAMUITextField',
  swiftImports: [
    'UIKit',
  ],
  swiftImplements: ['UITextFieldDelegate'],
  implements: ['foam.swift.ui.PropertyView'],
  properties: [
    {
      name: 'view',
      swiftType: 'UITextField',
      swiftFactory_DELETE: 'return UITextField()',
      swiftPostSet_DELETE: function() {/*
let updateTextField: Listener = { [weak self] _, _ in
  if self == nil { return }
  newValue.text = self!.data == nil ?
      self!.emptyValue : String(describing: self!.data!)
}
viewSub?.detach()
viewSub = data$.swiftSub(updateTextField)
updateTextField(viewSub!, [])
newValue.delegate = self
      */},
    },
    {
      swiftType: 'Subscription?',
      name: 'viewSub',
    },
    {
      name: 'data',
    },
    {
      class: 'StringProperty',
      name: 'emptyValue',
    },
  ],
  methods: [
    {
      name: 'fromProperty',
      swiftCode_DELETE: function() {/*
view.isEnabled = prop.visibility == foam_u2_Visibility.RW
if view.isEnabled {
  view.backgroundColor = UIColor(red: 0.97, green: 0.97, blue: 0.97, alpha: 1)
}
      */},
    },
    {
      name: 'textFieldDidEndEditing',
      args: [
        {
          name: 'textField',
          swiftType: 'UITextField',
        },
      ],
      swiftCode_DELETE: function() {/*
data = textField.text ?? ""
      */},
    },
    {
      name: 'textFieldShouldReturn',
      args: [
        {
          name: 'textField',
          swiftType: 'UITextField',
        },
      ],
      type: 'Boolean',
      swiftCode_DELETE: function() {/*
textField.resignFirstResponder()
return true
      */},
    },
  ],
});
