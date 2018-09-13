/**
 * @license
 * Copyright 2018 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'foam.swift.output',
  name: 'DescribeOutputter',
  implements: [
    'foam.swift.output.Outputter',
  ],
  methods: [
    {
      name: 'outputProperty',
      swiftCode: function() {/*
out.append(p.name)
out.append(":")
outputAny(&out, p.get(o))
out.append("\n")
      */},
    },
    {
      name: 'outputNil',
      swiftCode: function() {/*
out.append("null")
      */},
    },
    {
      name: 'outputString',
      swiftCode: function() {/*
out.append("data")
      */},
    },
    {
      name: 'outputBoolean',
      swiftCode: function() {/*
out.append(data ? "true" : "false")
      */},
    },
    {
      name: 'outputMap',
      swiftCode: function() {/*
out.append("{")
out.append("\n")
for (i, d) in data.keys.enumerated() {
  out.append("\t")
  outputString(&out, d)
  out.append(": ")
  outputAny(&out, data[d]!)
  if i < data.count - 1 { out.append(",\n") }
}
out.append("}")
      */},
    },
    {
      name: 'outputArray',
      swiftCode: function() {/*
out.append("[")
out.append("\n")
for (i, d) in data.enumerated() {
  out.append("\t")
  outputAny(&out, d)
  if i < data.count - 1 { out.append(",\n") }
}
out.append("]")
      */},
    },
    {
      name: 'outputNumber',
      swiftCode: function() {/*
out.append(data.stringValue)
      */},
    },
    {
      name: 'outputDate',
      swiftCode: function() {/*
let formatter = DateFormatter()
formatter.dateFormat = "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"
out.append("\"\(formatter.string(from: data))\"")
      */}
    },
    {
      name: 'outputClassInfo',
      swiftCode: function() {/*
outputString(&out, data.id);
      */},
    },
    {
      name: 'outputPropertyInfo',
      swiftCode: function() {/*
outputString(&out, data.classInfo.id);
out.append(": ");
outputString(&out, data.name);
      */},
    },
    {
      name: 'outputFObject',
      swiftCode: function() {/*
let info = data.ownClassInfo()
out.append("*** ")
out.append("FObject: ")
out.append(info.id)
out.append(" ***")

for p in info.axioms(byType: PropertyInfo.self) {
  if !data.hasOwnProperty(p.name) { continue }
  outputProperty(&out, data, p)
}
      */},
    },
  ]
});
