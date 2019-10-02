/**
 * @license
 * Copyright 2018 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'foam.nanos.auth',
  name: 'ServiceProvider',

  implements: ['foam.nanos.auth.EnabledAware'],

  documentation: 'Service Provider',

  tableColumns: ['id', 'description'],

  properties: [
    {
      class: 'StringProperty',
      name: 'id',
      documentation: 'Service provider name'
    },
    {
      class: 'Boolean',
      name: 'enabled'
    },
    {
      class: 'StringProperty',
      name: 'description',
      documentation: 'Service provider description'
    }
  ]
});
