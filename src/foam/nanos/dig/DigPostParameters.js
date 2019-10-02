/**
 * @license
 * Copyright 2018 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'foam.nanos.dig',
  name: 'DigPostParameters',

  documentation: 'PUT or POST parameters passed to DIG in the HTTP content which require explicit processing when the Content-Type is application/json or application/xml',

  properties: [
    {
      name: 'cmd',
      class: 'StringProperty'
    },
    {
      name: 'dao',
      class: 'StringProperty'
    },
    {
      name: 'data',
      class: 'Object'
    },
    {
      name: 'email',
      class: 'StringProperty'
    },
    {
      name: 'format',
      class: 'StringProperty'
    },
    {
      name: 'id',
      class: 'StringProperty'
    }
  ]
});
