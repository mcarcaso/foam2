/**
 * @license
 * Copyright 2019 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'foam.u2.layout',
  name: 'GridColumns',
  properties: [
    {
      class: 'IntProperty',
      name: 'xxs',
      value: 8
    },
    {
      class: 'IntProperty',
      name: 'xs',
      expressionArgs: ['xxs'],
      expression: function (xxs) { return xxs },
      androidExpression: 'return xxs;',
      swiftExpression: 'return xxs;',
    },
    {
      class: 'IntProperty',
      name: 'sm',
      expressionArgs: ['xs'],
      expression: function (xs) { return xs },
      androidExpression: 'return xs;',
      swiftExpression: 'return xs;',
    },
    {
      class: 'IntProperty',
      name: 'md',
      expressionArgs: ['sm'],
      expression: function (sm) { return sm },
      androidExpression: 'return sm;',
      swiftExpression: 'return sm;',
    },
    {
      class: 'IntProperty',
      name: 'lg',
      expressionArgs: ['md'],
      expression: function (md) { return md },
      androidExpression: 'return md;',
      swiftExpression: 'return md;',
    },
    {
      class: 'IntProperty',
      name: 'xl',
      expressionArgs: ['lg'],
      expression: function (lg) { return lg },
      androidExpression: 'return lg;',
      swiftExpression: 'return lg;',
    }
  ],
});

foam.CLASS({
  package: 'foam.u2.layout',
  name: 'PropertyGridRefinement',
  refines: 'foam.core.Property',
  properties: [
    {
      class: 'FObjectProperty',
      of: 'foam.u2.layout.GridColumns',
      name: 'gridColumns',
      adapt: function(_, v) {
        if ( foam.Number.isInstance(v) ) v = { xxs: v };
        if ( foam.Object.isInstance(v) ) v = foam.u2.layout.GridColumns.create(v);
        return v;
      },
    }
  ]
});

foam.CLASS({
  package: 'foam.u2.layout',
  name: 'ActionGridRefinement',
  refines: 'foam.core.Action',
  properties: [
    {
      class: 'FObjectProperty',
      of: 'foam.u2.layout.GridColumns',
      name: 'gridColumns',
      adapt: function (_, v) {
        if (foam.Number.isInstance(v)) v = { xxs: v };
        if (foam.Object.isInstance(v)) v = foam.u2.layout.GridColumns.create(v);
        return v;
      }
    }
  ]
});