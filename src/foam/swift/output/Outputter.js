/**
 * @license
 * Copyright 2018 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.INTERFACE({
  package: 'foam.swift.output',
  name: 'Outputter',
  methods: [
    {
      name: 'outputProperty',
      args: [
        {
          swiftMutable: true,
          swiftType: 'String',
          name: 'out',
        },
        {
          of: 'FObject',
          name: 'o',
        },
        {
          swiftType: 'PropertyInfo',
          name: 'p',
        },
      ],
    },
    {
      name: 'outputNil',
      args: [
        {
          swiftMutable: true,
          swiftType: 'String',
          name: 'out',
        },
      ],
    },
    {
      name: 'outputString',
      args: [
        {
          swiftMutable: true,
          swiftType: 'String',
          name: 'out',
        },
        {
          swiftType: 'String',
          name: 'data',
        },
      ],
    },
    {
      name: 'outputBoolean',
      args: [
        {
          swiftMutable: true,
          swiftType: 'String',
          name: 'out',
        },
        {
          swiftType: 'Bool',
          name: 'data',
        },
      ],
    },
    {
      name: 'outputMap',
      args: [
        {
          swiftMutable: true,
          swiftType: 'String',
          name: 'out',
        },
        {
          swiftType: '[String:Any?]',
          name: 'data',
        },
      ],
    },
    {
      name: 'outputArray',
      args: [
        {
          swiftMutable: true,
          swiftType: 'String',
          name: 'out',
        },
        {
          swiftType: '[Any?]',
          name: 'data',
        },
      ],
    },
    {
      name: 'outputNumber',
      args: [
        {
          swiftMutable: true,
          swiftType: 'String',
          name: 'out',
        },
        {
          swiftType: 'NSNumber',
          name: 'data',
        },
      ],
    },
    {
      name: 'outputDate',
      args: [
        {
          swiftMutable: true,
          swiftType: 'String',
          name: 'out'
        },
        {
          swiftType: 'Date',
          name: 'data'
        }
      ],
    },
    {
      name: 'outputAny',
      args: [
        {
          swiftMutable: true,
          swiftType: 'String',
          name: 'out',
        },
        {
          swiftType: 'Any?',
          name: 'data',
        },
      ],
      swiftCode: function() {/*
if let data = data as? ClassInfo {
  outputClassInfo(&out, data)
} else if let data = data as? PropertyInfo {
  outputPropertyInfo(&out, data)
} else if let data = data as? foam_core_FObject {
  outputFObject(&out, data)
} else if let data = data as? String {
  outputString(&out, data)
} else if let data = data as? Bool {
  outputBoolean(&out, data)
} else if let data = data as? NSNumber {
  outputNumber(&out, data)
} else if let data = data as? [Any?] {
  outputArray(&out, data)
} else if let data = data as? [String:Any?] {
  outputMap(&out, data)
} else if let data = data as? Date {
  outputDate(&out, data)
} else if data == nil {
  outputNil(&out)
} else {
  NSLog("Unable to output %@", (data as AnyObject).description)
  outputNil(&out)
}
      */},
    },
    {
      name: 'outputClassInfo',
      args: [
        {
          swiftMutable: true,
          swiftType: 'String',
          name: 'out',
        },
        {
          swiftType: 'ClassInfo',
          name: 'data',
        },
      ],
    },
    {
      name: 'outputPropertyInfo',
      args: [
        {
          swiftMutable: true,
          swiftType: 'String',
          name: 'out',
        },
        {
          swiftType: 'PropertyInfo',
          name: 'data',
        },
      ],
    },
    {
      name: 'outputFObject',
      args: [
        {
          swiftMutable: true,
          swiftType: 'String',
          name: 'out',
        },
        {
          of: 'FObject',
          name: 'data',
        },
      ],
    },
    {
      // Can't call it stringify because that method is actually inherited so
      // hacks are required to not have the args clobbered.
      name: 'swiftStringify',
      args: [
        {
          of: 'FObject',
          name: 'data',
        },
      ],
      swiftReturns: 'String',
      swiftCode: function() {/*
var s = ""
outputAny(&s, data)
return s
      */},
    },
  ]
});
