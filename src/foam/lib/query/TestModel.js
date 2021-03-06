/**
 * @license
 * Copyright 2018 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'foam.lib.query',
  name: 'TestModel',
  properties: [
    {
      class: 'StringProperty',
      name: 'name',
      shortName:'n',
      aliases:['fname','fn','first']
    },
    {
      class: 'IntProperty',
      name: 'age'
    },
    {
      class: 'DateTimeProperty',
      name: 'birthdate'
    },
    { class: 'Enum', of: 'foam.lib.query.FooEnum', name: 'foo' }
  ]
});
