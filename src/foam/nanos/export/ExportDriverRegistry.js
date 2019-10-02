/**
 * @license
 * Copyright 2017 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'foam.nanos.export',
  name: 'ExportDriverRegistry',

  documentation: 'Export driver registry model',

  properties: [
    { class: 'StringProperty', name: 'id' },
    { class: 'StringProperty', name: 'driverName' },
    { class: 'StringProperty', name: 'targetModel' }
  ]
});
