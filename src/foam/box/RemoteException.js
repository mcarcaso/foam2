/**
 * @license
 * Copyright 2017 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'foam.box',
  name: 'RemoteException',
  implements: ['foam.core.Exception'],
  properties: [
    {
      class: 'StringProperty',
      name: 'id'
    },
    {
      class: 'StringProperty',
      name: 'message'
    }
  ],

  methods: [
    {
      name: 'toString',
      type: 'String',
      javaCode: 'return getMessage();',
      code: function() {
        return this.message;
      }
    }
  ]
});
