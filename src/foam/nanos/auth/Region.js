/**
 * @license
 * Copyright 2017 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'foam.nanos.auth',
  name: 'Region',

  documentation: 'Region (province/state) information.',

  ids: ['code'],

  searchColumns: [],

  properties: [
    {
      class: 'StringProperty',
      name: 'code'
    },
    {
      class: 'StringProperty',
      name: 'name'
    },
    {
      class: 'ReferenceProperty',
      targetDAOKey: 'countryDAO',
      name: 'countryId',
      of: 'foam.nanos.auth.Country'
    },
    {
      class: 'StringArrayProperty',
      name: 'alternativeNames'
    }
  ]
});
