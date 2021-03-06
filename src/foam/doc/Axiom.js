/**
 * @license
 * Copyright 2018 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'foam.doc',
  name: 'Axiom',
  ids: ['name', 'parentId'],
  properties: [
    {
      name: 'axiom',
    },
    {
      class: 'StringProperty',
      name: 'parentId',
    },
    {
      class: 'StringProperty',
      name: 'name',
      factory: function() {
        return this.axiom.name;
      },
    },
    {
      class: 'BooleanProperty',
      name: 'hasPermission',
      value: true,
    },
  ],
});
