/**
 * @license
 * Copyright 2014 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'foam.dao',
  name: 'SequenceNumberDAO',
  extends: 'foam.dao.ProxyDAO',
  requires: [
    'foam.mlang.sink.Max',
  ],
  documentation: 'DAO Decorator which sets a specified property\'s value with an auto-increment sequence number on DAO.put() if the value is set to the default value.',
  properties: [
    {
      class: 'StringProperty',
      name: 'property',
      value: 'id'
    },
    {
      class: 'LongProperty',
      name: 'startingValue',
    },
    {
      class: 'LongProperty',
      name: 'value_',
      documentation: 'The next value to be used.',
      expressionArgs: ['delegate', 'property_', 'startingValue'],
      androidExpression: `
        foam.mlang.sink.Max max = Max_create()
          .setArg1(property_)
          .build();
        delegate.select(max);
        Object v = max.getValue();
        return v == null ? 1 : ((Number) v).longValue() + 1;
      `,
      swiftExpression: `
        let max = Max_create()
          .setArg1(property_)
          .build();
        _ = delegate?.select(max);
        let v = max.getValue();
        return v == nil ? 1 : (v as! Int) + 1;
      `,
    },
    {
      class: 'FObjectProperty',
      of: 'foam.core.Property',
      name: 'property_',
      hidden: true,
      expressionArgs: ['property', 'of'],
      androidExpression: `
        return (foam.core.Property) of.getAxiomByName(property);
      `,
      swiftExpression: `
        return of.getAxiomByName(property) as? foam_core_Property;
      `,
    }
  ],
  methods: [
    {
      name: 'put_',
      androidCode: `
        if ( ! obj.hasPropertySet(getProperty()) ) {
          obj.setProperty(getProperty(), getValue_());
          setValue_(getValue_()+1);
        }
        return getDelegate().put_(x, obj);
      `,
      swiftCode: `
        if ( !(obj?.hasPropertySet(getProperty()) ?? true) ) {
          obj?.setProperty(getProperty(), getValue_());
          setValue_(getValue_()+1);
        }
        return getDelegate()?.put_(x, obj);
      `,
    },
  ],
});