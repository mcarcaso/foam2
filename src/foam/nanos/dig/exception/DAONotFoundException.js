/**
 * @license
 * Copyright 2018 The FOAM Authors. All Rights Reserved.
 */

foam.CLASS({
  package: 'foam.nanos.dig.exception',
  name: 'DAONotFoundException',
  extends: 'foam.nanos.dig.exception.DigErrorMessage',

  properties: [
    {
      class: 'StringProperty',
      name: 'status',
      value: '404'
    },
    {
      class: 'IntProperty',
      name: 'code',
      value: 1000
    },
    {
      class: 'StringProperty',
      name: 'type',
      value: 'NotFound'
    }
  ]
});
