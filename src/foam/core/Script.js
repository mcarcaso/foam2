/**
 * @license
 * Copyright 2018 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'foam.core',
  name: 'Script',

  properties: [
    {
      class: 'StringProperty',
      name: 'id',
      getter: function() {
        return this.package ? this.package + '.' + this.name : this.name;
      },
    },
    {
      class: 'StringProperty',
      name: 'package'
    },
    {
      class: 'StringProperty',
      name: 'name'
    },
    {
      class: 'FunctionProperty',
      name: 'code'
    },
    {
      name: 'flags'
    },
    {
      class: 'StringArray',
      name: 'requires'
    },
    'order'
  ]
});
