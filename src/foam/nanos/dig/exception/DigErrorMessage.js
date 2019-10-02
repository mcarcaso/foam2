/**
 * @license
 * Copyright 2018 The FOAM Authors. All Rights Reserved.
 */

foam.CLASS({
  package: 'foam.nanos.dig.exception',
  name: 'DigErrorMessage',
  implements: ['foam.core.Exception'],

  properties: [
    {
      class: 'StringProperty',
      name: 'status'
    },
    {
      class: 'IntProperty',
      name: 'code'
    },
    {
      class: 'StringProperty',
      name: 'message'
    },
    {
     class: 'StringProperty',
     name: 'type'
    },
    {
      class: 'StringProperty',
      name: 'developerMessage'
    },
    {
      class: 'StringProperty',
      name: 'moreInfo'
    }
  ]
});
