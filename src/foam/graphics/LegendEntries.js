/**
 * @license
 * Copyright 2018 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'foam.graphics',
  name: 'LegendEntries',
  extends: 'foam.core.Property',

  documentation: 'LegendEntries  [ name ,  value [ float ] ]',

  properties: [ {
      class: 'StringProperty',
      name: 'seriesName'
    },
    {
      class: 'ArrayProperty',
      of: 'FloatProperty',
      name: 'seriesValues'
    },
    {
      name: 'total',
      factory: function () {
        return this.seriesValues.reduce( ( prev, curr ) => prev + curr );
      }
    }
  ]
});
