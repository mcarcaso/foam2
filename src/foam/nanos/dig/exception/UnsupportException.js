/**ß
 * @license
 * Copyright 2018 The FOAM Authors. All Rights Reserved.
 */

foam.CLASS({
  package: 'foam.nanos.dig.exception',
  name: 'UnsupportException',
  extends: 'foam.nanos.dig.exception.DigErrorMessage',

  properties: [
    {
      class: 'StringProperty',
      name: 'status',
      value: '400'
    },
    {
      class: 'IntProperty',
      name: 'code',
      value: 1004
    },
    {
      class: 'StringProperty',
      name: 'type',
      value: 'Unsupport'
    },
    {
      class: 'StringProperty',
      name: 'message',
      value: 'Unsupported Accept'
    }
  ]
});
