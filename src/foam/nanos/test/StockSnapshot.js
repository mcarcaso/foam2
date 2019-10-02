/**
 * @license
 * Copyright 2019 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'foam.nanos.test',
  name: 'StockSnapshot',
  implements: [
    'foam.nanos.analytics.Foldable'
  ],
  ids: ['time', 'symbol'],
  properties: [
    {
      class: 'DateTimeProperty',
      name: 'time'
    },
    {
      class: 'StringProperty',
      name: 'symbol'
    },
    {
      class: 'FloatProperty',
      name: 'price'
    }
  ],
  methods: [
    {
      name: 'doFolds',
      javaCode: `
fm.foldForState(getSymbol(), getTime(), getPrice());
      `
    }
  ]
});