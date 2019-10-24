/**
 * @license
 * Copyright 2019 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.INTERFACE({
  package: 'foam.core',
  name: 'Detachable',
  methods: [
    {
      name: 'detach',
      type: 'Void',
      async: true
    }
  ]
});

foam.CLASS({
  package: 'foam.core',
  name: 'AnonymousDetachable',
  implements: [
    'foam.core.Detachable'
  ],
  properties: [
    {
      class: 'ClassProperty',
      name: 'src'
    },
    {
      class: 'FunctionProperty',
      name: 'detachFn'
    }
  ],
  methods: [
    function detach() { this.detachFn() }
  ]
});
