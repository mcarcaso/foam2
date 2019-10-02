/**
 * @license
 * Copyright 2019 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'foam.nanos.analytics',
  name: 'Candlestick',
  ids: ['closeTime', 'key'],
  tableColumns: [
    'key',
    'openValueTime',
    'closeValueTime',
    'open',
    'close',
    'min',
    'max',
    'average'
  ],
  properties: [
    {
      class: 'Object',
      name: 'key',
      visibility: 'RO',
      tableWidth: '350'
    },
    {
      class: 'FloatProperty',
      name: 'min',
      visibility: 'RO'
    },
    {
      class: 'FloatProperty',
      name: 'max',
      visibility: 'RO'
    },
    {
      class: 'FloatProperty',
      name: 'open',
      visibility: 'RO'
    },
    {
      class: 'DateTimeProperty',
      name: 'openValueTime',
      visibility: 'RO',
      tableWidth: 150
    },
    {
      class: 'DateTimeProperty',
      name: 'closeTime',
      visibility: 'RO',
      tableWidth: 150
    },
    {
      class: 'FloatProperty',
      name: 'close',
      hidden: true
    },
    {
      class: 'DateTimeProperty',
      name: 'closeValueTime',
      visibility: 'RO',
      tableWidth: 150
    },
    {
      class: 'FloatProperty',
      name: 'total',
      visibility: 'RO'
    },
    {
      class: 'FloatProperty',
      name: 'count',
      visibility: 'RO'
    },
    {
      class: 'FloatProperty',
      name: 'average',
      visibility: 'RO',
      transient: true,
      javaGetter: 'return getCount() > 0 ? getTotal() / getCount() : 0;',
      expression: function(total, count) {
        return count ? total / count : 0;
      }
    }
  ],
  methods: [
    {
      name: 'add',
      args: [
        {
          type: 'Float',
          name: 'v'
        },
        {
          type: 'Date',
          name: 'time'
        }
      ],
      javaCode: `
setMin(isPropertySet("min") ? Math.min(v, getMin()) : v);
setMax(isPropertySet("max") ? Math.max(v, getMax()) : v);

if ( ! isPropertySet("openValueTime") || time.compareTo(getOpenValueTime()) < 0 ) {
  setOpenValueTime(time);
  setOpen(v);
}
if ( ! isPropertySet("closeValueTime") || time.compareTo(getCloseValueTime()) > 0 ) {
  setCloseValueTime(time);
  setClose(v);
}

setTotal(getTotal() + v);
setCount(getCount() + 1);
      `
    },
    {
      name: 'reduce',
      args: [
        {
          type: 'foam.nanos.analytics.Candlestick',
          name: 'c'
        }
      ],
      javaCode: `
setMin(isPropertySet("min") ? Math.min(c.getMin(), getMin()) : c.getMin());
setMax(isPropertySet("max") ? Math.max(c.getMax(), getMax()) : c.getMax());

if ( ! isPropertySet("openValueTime") || c.getOpenValueTime().compareTo(getOpenValueTime()) < 0 ) {
  setOpenValueTime(c.getOpenValueTime());
  setOpen(c.getOpen());
}
if ( ! isPropertySet("closeValueTime") || c.getCloseValueTime().compareTo(getCloseValueTime()) > 0 ) {
  setCloseValueTime(c.getCloseValueTime());
  setClose(c.getClose());
}

setTotal(getTotal() + c.getTotal());
setCount(getCount() + c.getCount());
      `
    }
  ]
});
