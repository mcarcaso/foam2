/**
 * @license
 * Copyright 2019 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'foam.nanos.app',
  name: 'EmailConfig',

  properties: [
    {
      class: 'StringProperty',
      name: 'from'
    },
    {
      class: 'StringProperty',
      name: 'displayName'
    },
    {
      class: 'StringProperty',
      name: 'replyTo'
    }
  ]
});
