/**
 * @license
 * Copyright 2018 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'foam.nanos.servlet',
  name: 'ServletMapping',

  properties: [
    {
      class: 'StringProperty',
      name: 'className'
    },
    {
      class: 'FObjectProperty',
      of: 'foam.nanos.servlet.Servlet',
      name: 'servletObject'
    },
    {
      class: 'StringProperty',
      name: 'pathSpec'
    },
    {
      class: 'MapProperty',
      name: 'initParameters'
    }
  ]
});
