/**
 * @license
 * Copyright 2018 The FOAM Authors. All Rights Reserved.
 */

foam.CLASS({
  package: 'foam.nanos.dig.exception',
  name: 'DigSuccessMessage',
  extends: 'foam.nanos.dig.exception.DigErrorMessage',

  properties: [
    {
      class: 'StringProperty',
      name: 'status',
      value: '200'
    },
    {
      class: 'IntProperty',
      name: 'code',
      value: 1006
    },
    {
      class: 'StringProperty',
      name: 'message'
    },
    {
      class: 'StringProperty',
      name: 'type',
      value: 'Success'
    }
  ]
});
