/**
 * @license
 * Copyright 2019 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'foam.nanos.dig.exception',
  name: 'AuthorizationException',
  extends: 'foam.nanos.dig.exception.DigErrorMessage',

  documentation: `
    Thrown when a user tries to access a resource that they don't have
    permission to access.
  `,

  properties: [
    {
      class: 'StringProperty',
      name: 'status',
      value: '403'
    },
    {
      class: 'IntProperty',
      name: 'code',
      value: 1009
    },
    {
      class: 'StringProperty',
      name: 'type',
      value: 'Authorization Failed'
    }
  ]
});
