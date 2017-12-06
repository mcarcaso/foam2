/**
 * @license
 * Copyright 2017 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'foam.swift.core',
  name: 'Slot',
  methods: [
    {
      name: 'slotGet',
      swiftReturns: 'Any?',
      swiftCode: 'fatalError()',
    },
    {
      name: 'swiftSet',
      args: [
        {
          swiftType: 'Any?',
          name: 'value',
        },
      ],
      swiftCode: 'fatalError()',
    },
    {
      name: 'swiftSub',
      args: [
        {
          swiftAnnotations: ['@escaping'],
          swiftType: 'Listener',
          name: 'listener',
        },
      ],
      swiftReturns: 'Subscription',
      swiftCode: 'fatalError()',
    },
    {
      name: 'linkFrom',
      args: [
        {
          swiftType: 'Slot',
          name: 's2',
        },
      ],
      swiftReturns: 'Subscription',
      swiftCode: function() {/*
let s1 = self
var feedback1 = false
var feedback2 = false

let l1 = { () -> Void in
  if feedback1 { return }

  if !FOAM_utils.equals(s1.slotGet(), s2.slotGet()) {
    feedback1 = true
    s2.swiftSet(s1.slotGet())
    if !FOAM_utils.equals(s1.slotGet(), s2.slotGet()) { s1.swiftSet(s2.slotGet()) }
    feedback1 = false
  }
}

let l2 = { () -> Void in
  if feedback2 { return }

  if !FOAM_utils.equals(s1.slotGet(), s2.slotGet()) {
    feedback2 = true
    s1.swiftSet(s2.slotGet())
    if !FOAM_utils.equals(s1.slotGet(), s2.slotGet()) { s2.swiftSet(s1.slotGet()) }
    feedback2 = false
  }
}

var sub1: Subscription? = s1.swiftSub { (_, _) in l1() }
var sub2: Subscription? = s2.swiftSub { (_, _) in l2() }

l2()

return Subscription {
  sub1?.detach()
  sub2?.detach()
  sub1 = nil
  sub2 = nil
}
      */},
    },
    {
      name: 'linkTo',
      args: [
        {
          swiftType: 'Slot',
          name: 'other',
        },
      ],
      swiftReturns: 'Subscription',
      swiftCode: function() {/*
return other.linkFrom(self)
      */},
    },
    {
      name: 'follow',
      args: [
        {
          swiftType: 'Slot',
          name: 'other',
        },
      ],
      swiftReturns: 'Subscription',
      swiftCode: function() {/*
let l = { () -> Void in
  if !FOAM_utils.equals(self.slotGet(), other.slotGet()) {
    self.swiftSet(other.slotGet())
  }
}
l()
return other.swiftSub { (_, _) in l() }
      */},
    },
    {
      name: 'mapFrom',
      args: [
        {
          swiftType: 'Slot',
          name: 'other',
        },
        {
          swiftAnnotations: ['@escaping'],
          swiftType: '(Any?) -> Any?',
          name: 'f',
        },
      ],
      swiftReturns: 'Subscription',
      swiftCode: function() {/*
let l = { () -> Void in
  self.swiftSet(f(other.slotGet()))
}
l()
return other.swiftSub { (_, _) in l() }
      */},
    },
    {
      name: 'mapTo',
      args: [
        {
          swiftType: 'Slot',
          name: 'other',
        },
        {
          swiftAnnotations: ['@escaping'],
          swiftType: '(Any?) -> Any?',
          name: 'f',
        },
      ],
      swiftReturns: 'Subscription',
      swiftCode: function() {/*
return other.mapFrom(self, f)
      */},
    },
    {
      name: 'map',
      args: [
        {
          swiftAnnotations: ['@escaping'],
          swiftType: '(Any?) -> Any?',
          name: 'f',
        },
      ],
      swiftReturns: 'ExpressionSlot',
      swiftCode: function() {/*
return ExpressionSlot([
  "code": { (args: [Any?]) -> Any? in f(args[0]) },
  "args": [self]
])
      */},
    },
    {
      name: 'dot',
      args: [
        {
          swiftType: 'String',
          name: 'name',
        },
      ],
      swiftReturns: 'SubSlot',
      swiftCode: function() {/*
let s = SubSlot([
  "parentSlot": self,
  "name": name,
])
onDetach(Subscription(detach: {
  s.detach()
}))
return s
      */},
    },
  ]
});
