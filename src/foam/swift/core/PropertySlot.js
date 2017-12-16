/**
 * @license
 * Copyright 2017 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'foam.swift.core',
  name: 'PropertySlot',
  extends: 'foam.swift.core.Slot',
  properties: [
    {
      class: 'FObjectProperty',
      name: 'object',
      swiftType: 'FObject?',
      swiftWeak: true,
    },
    {
      class: 'String',
      name: 'propertyName',
    },
  ],
  methods: [
    {
      name: 'slotGet',
      swiftCode: function() {/*
return object?.get(key: propertyName) ?? nil
      */},
      javaCode: function() {/*
return getObject().getProperty(getPropertyName());
      */},
    },
    {
      name: 'slotSet',
      swiftCode: function() {/*
object?.set(key: propertyName, value: value)
      */},
      javaCode: function() {/*
getObject().setProperty(getPropertyName(), value);
      */},
    },
    {
      name: 'slotSub',
      swiftCode: function() {/*
return object?.sub(topics: ["propertyChange", propertyName], listener: listener) ?? Subscription(detach: {})
      */},
    },
  ]
});
