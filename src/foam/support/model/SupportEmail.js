/**
 * @license
 * Copyright 2018 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'foam.support.model',
  name: 'SupportEmail',

  properties:[
    {
      class: 'LongProperty',
      name: 'id'
    },
    {
      class: 'StringProperty',
      name: 'email'
    },
    {
      class: 'PasswordProperty',
      name: 'password'
    },
    {
      class: 'StringProperty',
      name: 'status',
      value: 'Pending'
    },
    {
      class: 'DateTimeProperty',
      name: 'connectedTime'
    }
  ]
});

foam.RELATIONSHIP({
  sourceModel: 'foam.nanos.auth.User',
  targetModel: 'foam.support.model.SupportEmail',
  forwardName: 'supportEmails',
  inverseName: 'user'
});
