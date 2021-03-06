/**
 * @license
 * Copyright 20188 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'foam.nanos.auth.token',
  name: 'Token',

  documentation: 'Represents a one-time access code linked to a specific User',

  properties: [
    {
      class: 'LongProperty',
      name: 'id'
    },
    {
      class: 'ReferenceProperty',
      name: 'userId',
      of: 'foam.nanos.auth.User',
    },
    {
      class: 'BooleanProperty',
      name: 'processed',
      value: false
    },
    {
      class: 'DateProperty',
      name: 'expiry',
      documentation: 'The token expiry date'
    },
    {
      class: 'StringProperty',
      name: 'data',
      documentation: 'The token data'
    },
    {
      class: 'MapProperty',
      name: 'parameters',
      documentation: 'Additional token parameters'
    }
  ]
});
