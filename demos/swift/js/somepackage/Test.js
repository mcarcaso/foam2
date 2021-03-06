/**
 * @license
 * Copyright 2017 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  name: 'Test',
  package: 'somepackage',
  requires: [
    'somepackage.RequiredClass',
  ],
  imports: [
    'testImport?',
    'testImport2? as testImportTwo',
  ],
  exports: [
    'firstName',
  ],
  messages: [
    {
      name: 'greeting',
      message: 'Hello there ${first} ${last}',
      description: 'Greeting where ${last} is last name and ${first} is first.',
    }
  ],
  properties: [
    {
      name: 'id',
      hidden: true,
      swiftExpressionArgs: ['firstName'],
      swiftExpression_DELETE: 'return firstName',
      expression: function(firstName) { return firstName },
    },
    {
      class: 'StringProperty',
      name: 'description',
    },
    {
      name: 'anyProp',
    },
    {
      class: 'StringProperty',
      name: 'exprProp',
      swiftExpressionArgs: ['firstName', 'lastName'],
      swiftExpression_DELETE: function() {/*
return firstName + " " + lastName
      */},
    },
    {
      class: 'IntProperty',
      name: 'intProp',
    },
    {
      class: 'BooleanProperty',
      name: 'boolProp',
    },
    {
      class: 'StringProperty',
      name: 'prevFirstName',
      visibility: 'RO',
    },
    {
      class: 'StringProperty',
      name: 'prevLastName',
      visibility: 'RO',
    },
    {
      class: 'StringProperty',
      name: 'firstName',
      value: 'John',
      swiftPreSet_DELETE: function() {/*
self.prevFirstName = oldValue as? String ?? ""
return newValue
      */},
    },
    {
      class: 'StringProperty',
      name: 'lastName',
      value: 'Smith',
      swiftPostSet_DELETE: 'self.prevLastName = oldValue as? String ?? ""'
    },
    {
      name: 'factoryProp',
      swiftFactory_DELETE: function() {/*
return ["Hello", "World"]
      */},
    },
    {
      class: 'Enum',
      of: 'foam.u2.Visibility',
      name: 'enumProp',
    },
    {
      class: 'DateTimeProperty',
      name: 'dateProp',
    },
    {
      class: 'FObjectArray',
      of: 'foam.core.FObject',
      name: 'fobjArr',
    },
  ],
  actions: [
    {
      name: 'swapFirstAndLast',
      code: function() {},
      swiftCode_DELETE: function() {/*
let firstName = self.firstName
self.firstName = self.lastName
self.lastName = firstName
      */},
    },
    {
      name: 'startLogger',
      code: function() {},
      swiftCode_DELETE: function() {/*
myListener()
      */},
    },
  ],
  methods: [
    {
      name: 'methodWithAnArgAndReturn',
      type: 'String',
      args: [
        {
          name: 'name',
          type: 'String',
        },
      ],
      code: function() {},
      swiftCode_DELETE: function() {/*
return String(format: type(of: self).greeting, name!, "LASTNAME")
      */},
    }
  ],
  listeners: [
    {
      name: 'myListener',
      isMerged: true,
      mergeDelay: 500,
      code: function() {},
      swiftCode_DELETE: function() {/*
NSLog("Hey")
myListener()
      */},
    },
  ],
});
