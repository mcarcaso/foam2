/**
 * @license
 * Copyright 2017 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'foam.swift.ui',
  name: 'FOAMUILabel',
  swiftImports: [
    'UIKit',
  ],
  properties: [
    {
      name: 'view',
      swiftType: 'UILabel',
      swiftFactory: 'return UILabel()',
      swiftPostSet_DELETE: function() {/*
updateLabel();
      */},
    },
    {
      name: 'data',
      swiftPostSet_DELETE: function() {/*
updateLabel();
      */},
    },
    {
      swiftType: 'UIColor?',
      name: 'textColor',
      swiftPostSet_DELETE: function() {/*
updateLabel();
      */},
    },
  ],
  listeners: [
    {
      name: 'updateLabel',
      swiftCode_DELETE: function() {/*
view.text = data == nil ? "nil" : String(describing: data!)
if let textColor = textColor { view.textColor = textColor }
      */},
    },
  ],
});
