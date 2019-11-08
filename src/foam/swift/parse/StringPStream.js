/**
 * @license
 * Copyright 2017 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'foam.swift.parse',
  name: 'StringPStream',
  implements: [
    'foam.swift.parse.PStream',
  ],
  properties: [
    {
      swiftType: '[Character]',
      name: 'str',
      swiftAdapt: function() {/*
if let s = newValue as? String {
  return Array(s)
}
return newValue as! [Character]
      */},
    },
    {
      name: 'value_',
    },
    {
      class: 'IntProperty',
      name: 'pos',
    },
    {
      class: 'FObjectProperty',
      of: 'foam.swift.parse.StringPStream',
      required: false,
      name: 'tail_',
    },
  ],
  methods: [
    {
      name: 'head',
      swiftCode_DELETE: function() {/*
return str[pos]
      */},
    },
    {
      name: 'valid',
      swiftCode_DELETE: function() {/*
return pos < str.count
      */},
    },
    {
      name: 'tail',
      swiftCode_DELETE: function() {/*
if tail_ == nil {
  tail_ = foam_swift_parse_StringPStream([
    "str": str,
    "pos": pos + 1,
  ])
}
return tail_!
      */},
    },
    {
      name: 'substring',
      swiftCode_DELETE: function() {/*
let startIndex = pos
let endIndex = (end as! foam_swift_parse_StringPStream).pos
return String(str[startIndex..<endIndex])
      */},
    },
    {
      name: 'value',
      swiftCode_DELETE: function() {/*
return value_
      */},
    },
    {
      name: 'setValue',
      swiftCode_DELETE: function() {/*
let ps = foam_swift_parse_StringPStream([
  "str": str,
  "pos": pos,
  "value_": value,
])
return ps
      */},
    },
  ]
});
