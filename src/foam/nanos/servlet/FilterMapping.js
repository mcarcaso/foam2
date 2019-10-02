/**
 * @license
 * Copyright 2019 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'foam.nanos.servlet',
  name: 'FilterMapping',
  properties: [
    {
      class: 'StringProperty',
      name: 'filterClass',
    },
    {
      class: 'Map',
      name: 'initParameters'
    },
    {
      class: 'StringProperty',
      name: 'pathSpec'
    }
  ]
});
