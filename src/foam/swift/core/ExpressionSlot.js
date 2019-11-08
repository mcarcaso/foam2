/**
 * @license
 * Copyright 2017 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'foam.swift.core',
  name: 'ExpressionSlot',
  extends: 'foam.swift.core.Slot',

  properties: [
    {
      swiftType: '[foam_swift_core_Slot]',
      name: 'args',
      swiftPostSet_DELETE: 'subToArgs_(newValue)',
    },
    {
      swiftType: '(([Any?]) -> Any?)',
      swiftRequiresEscaping: true,
      name: 'code',
    },
    {
      name: 'value',
      swiftFactory_DELETE: function() {/*
return code(args.map { (slot) -> Any? in return slot.swiftGet() })
      */}
    },
    {
      name: 'cleanup_', // detachable to cleanup old subs when obj changes
      swiftType: 'Subscription?',
    },
  ],

  methods: [
    {
      name: 'swiftGet',
      swiftCode_DELETE: 'return value',
    },
    {
      name: 'swiftSet',
      swiftCode_DELETE: '// NOP',
    },
    {
      name: 'swiftSub',
      swiftCode_DELETE: function() {/*
return sub(topics: ["propertyChange", "value"], listener: listener)
      */},
    },
    {
      name: 'subToArgs_',
      args: [
        {
          name: 'slots',
          swiftType: '[foam_swift_core_Slot]',
        },
      ],
      swiftCode_DELETE: function() {/*
cleanup();
let subs = slots.map { (slot) -> Subscription in
  return slot.swiftSub(invalidate_listener)
}
cleanup_ = Subscription(detach: { for sub in subs { sub.detach() } })
      */},
    }
  ],

  listeners: [
    {
      name: 'cleanup',
      swiftCode_DELETE: 'cleanup_?.detach()',
    },
    {
      name: 'invalidate',
      swiftCode_DELETE: 'clearProperty("value")',
    },
  ]
});
