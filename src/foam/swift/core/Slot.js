/**
 * @license
 * Copyright 2017 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'foam.swift.core',
  name: 'Slot',
  requires: [
    'foam.swift.core.ExpressionSlot',
  ],
  methods: [
    {
      name: 'slotGet',
      swiftReturns: 'Any?',
      javaReturns: 'Object',
      swiftCode: 'fatalError()',
      javaCode: 'throw new RuntimeException("slotGet not implemented");',
    },
    {
      name: 'slotSet',
      args: [
        {
          swiftType: 'Any?',
          javaType: 'Object',
          name: 'value',
        },
      ],
      swiftCode: 'fatalError()',
      javaCode: 'throw new RuntimeException("slotSet not implemented");',
    },
    {
      name: 'slotSub',
      args: [
        {
          swiftAnnotations: ['@escaping'],
          swiftType: 'Listener',
          javaType: 'foam.core.Listener',
          name: 'listener',
        },
      ],
      swiftReturns: 'Subscription',
      swiftCode: 'fatalError()',
      javaReturns: 'foam.core.Detachable',
      javaCode: 'throw new RuntimeException("slotSub not implemented");',
    },
    {
      name: 'linkFrom',
      args: [
        {
          swiftType: 'Slot',
          javaType: 'final Slot',
          name: 's2',
        },
      ],
      javaReturns: 'foam.core.Detachable',
      swiftReturns: 'Subscription',
      swiftCode: function() {/*
let s1 = self
var feedback1 = false
var feedback2 = false

let l1 = { () -> Void in
  if feedback1 { return }

  if !FOAM_utils.equals(s1.slotGet(), s2.slotGet()) {
    feedback1 = true
    s2.slotSet(s1.slotGet())
    if !FOAM_utils.equals(s1.slotGet(), s2.slotGet()) { s1.slotSet(s2.slotGet()) }
    feedback1 = false
  }
}

let l2 = { () -> Void in
  if feedback2 { return }

  if !FOAM_utils.equals(s1.slotGet(), s2.slotGet()) {
    feedback2 = true
    s1.slotSet(s2.slotGet())
    if !FOAM_utils.equals(s1.slotGet(), s2.slotGet()) { s2.slotSet(s1.slotGet()) }
    feedback2 = false
  }
}

var sub1: Subscription? = s1.slotSub { (_, _) in l1() }
var sub2: Subscription? = s2.slotSub { (_, _) in l2() }

l2()

return Subscription {
  sub1?.detach()
  sub2?.detach()
  sub1 = nil
  sub2 = nil
}
      */},
      javaCode: `
final Slot s1 = this;
final foam.util.Reference<Boolean> feedback1 = new foam.util.Reference<>(Boolean.FALSE);
final foam.util.Reference<Boolean> feedback2 = new foam.util.Reference<>(Boolean.FALSE);

final foam.core.Listener l1 = new foam.core.Listener() {
  public void apply(foam.core.Detachable sub, java.util.List args) {
    if ( feedback1.value ) return;

    if ( ! foam.util.SafetyUtil.equals(s1.slotGet(), s2.slotGet()) ) {
      feedback1.value = true;
      s2.slotSet(s1.slotGet());
      if ( ! foam.util.SafetyUtil.equals(s1.slotGet(), s2.slotGet()) ) {
        s1.slotSet(s2.slotGet());
      }
      feedback1.value = false;
    }
  }
};

final foam.core.Listener l2 = new foam.core.Listener() {
  public void apply(foam.core.Detachable sub, java.util.List args) {
    if ( feedback2.value ) return;

    
    if ( ! foam.util.SafetyUtil.equals(s1.slotGet(), s2.slotGet()) ) {
      feedback2.value = true;
      s1.slotSet(s2.slotGet());
      if ( ! foam.util.SafetyUtil.equals(s1.slotGet(), s2.slotGet()) ) {
        s2.slotSet(s1.slotGet());
      }
      feedback2.value = false;
    }
  }
};

final foam.util.Reference<foam.core.Detachable> sub1 = new foam.util.Reference<>(s1.slotSub(l1));
final foam.util.Reference<foam.core.Detachable> sub2 = new foam.util.Reference<>(s2.slotSub(l2));

l2.apply(null, null);

return new foam.core.Detachable() {
  public void detach() {
    if ( sub1.value != null ) sub1.value.detach();
    if ( sub2.value != null ) sub2.value.detach();
    sub1.value = null;
    sub2.value = null;
  }
};
      `,
    },
    {
      name: 'linkTo',
      args: [
        {
          swiftType: 'Slot',
          javaType: 'Slot',
          name: 'other',
        },
      ],
      swiftReturns: 'Subscription',
      javaReturns: 'foam.core.Detachable',
      swiftCode: function() {/*
return other.linkFrom(self)
      */},
      javaCode: `return other.linkFrom(this);`,
    },
    {
      name: 'follow',
      args: [
        {
          swiftType: 'Slot',
          javaType: 'final Slot',
          name: 'other',
        },
      ],
      swiftReturns: 'Subscription',
      javaReturns: 'foam.core.Detachable',
      swiftCode: function() {/*
let l = { () -> Void in
  if !FOAM_utils.equals(self.slotGet(), other.slotGet()) {
    self.slotSet(other.slotGet())
  }
}
l()
return other.slotSub { (_, _) in l() }
      */},
      javaCode: `
final Slot self = this;
final java.util.function.Function l = ${foam.java.CodeTools.t().f(`
  if ( ! foam.util.SafetyUtil.equals(self.slotGet(), other.slotGet()) ) {
    self.slotSet(other.slotGet());
  }
  return null;
`)};
l.apply(null);
return other.slotSub(new foam.core.Listener() {
  public void apply(foam.core.Detachable sub, java.util.List args) {
    l.apply(null);
  }
});
      `,
    },
    {
      name: 'mapFrom',
      args: [
        {
          swiftType: 'Slot',
          javaType: 'final Slot',
          name: 'other',
        },
        {
          swiftAnnotations: ['@escaping'],
          swiftType: '(Any?) -> Any?',
          javaType: 'final java.util.function.Function',
          name: 'f',
        },
      ],
      swiftReturns: 'Subscription',
      javaReturns: 'foam.core.Detachable',
      swiftCode: function() {/*
let l = { () -> Void in
  self.slotSet(f(other.slotGet()))
}
l()
return other.slotSub { (_, _) in l() }
      */},
      javaCode: `
final Slot self = this;
final java.util.function.Function l = ${foam.java.CodeTools.t().f(`
  self.slotSet(f.apply(other.slotGet()));
  return null;
`)};
l.apply(null);
return other.slotSub(new foam.core.Listener() {
  public void apply(foam.core.Detachable sub, java.util.List args) { l.apply(null); }
});
      `,
    },
    {
      name: 'mapTo',
      args: [
        {
          swiftType: 'Slot',
          javaType: 'Slot',
          name: 'other',
        },
        {
          swiftAnnotations: ['@escaping'],
          swiftType: '(Any?) -> Any?',
          javaType: 'java.util.function.Function',
          name: 'f',
        },
      ],
      javaReturns: 'foam.core.Detachable',
      swiftReturns: 'Subscription',
      swiftCode: function() {/*
return other.mapFrom(self, f)
      */},
      javaCode: `
return other.mapFrom(this, f);
      `,
    },
    {
      name: 'map',
      args: [
        {
          swiftAnnotations: ['@escaping'],
          swiftType: '(Any?) -> Any?',
          javaType: 'final java.util.function.Function',
          name: 'f',
        },
      ],
      javaReturns: 'ExpressionSlot',
      swiftReturns: 'ExpressionSlot',
      swiftCode: function() {/*
return ExpressionSlot([
  "code": { (args: [Any?]) -> Any? in f(args[0]) },
  "args": [self]
])
      */},
      javaCode: `
java.util.Map<String, Object> args = new java.util.HashMap<>();
args.put("code", ${foam.java.CodeTools.t().f(`
  f.apply(arg[0]);
  return null;
`, 'Object []')});
args.put("args", new Object[]{this});
return getX().create(ExpressionSlot.class, args);
      `,
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
