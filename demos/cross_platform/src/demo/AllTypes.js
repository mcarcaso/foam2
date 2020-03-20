foam.CLASS({
  package: 'demo',
  name: 'AllTypes',
  messages: [
    {
      name: 'BOOLEAN_VALIDATION',
      description: `Validation text for the boolean property.`,
      message: 'Please make this true.'
    }
  ],
  properties: [
    {
      class: 'StringProperty',
      name: 'id',
      help: `You can only set this when creating. If you don't set it, it will be set for you.`,
      visibility: 'FINAL'
    },
    {
      class: 'BooleanProperty',
      name: 'booleanProperty',
      validationExpressionArgs: ['booleanProperty'],
      androidValidationExpression: `
        return booleanProperty ? null : BOOLEAN_VALIDATION;
      `,
      swiftValidationExpression: `
        return booleanProperty ? nil : Self.BOOLEAN_VALIDATION;
      `
    },
    {
      class: 'LongProperty',
      name: 'longProperty',
      help: 'By default, this is equal to the value of "Int Property"',
      expressionArgs: ['intProperty'],
      androidExpression: `return intProperty;`,
      swiftExpression: `return intProperty;`,
    },
    {
      class: 'IntProperty',
      name: 'intProperty',
      help: 'By default, this is the count of characters in the string property',
      expressionArgs: ['stringProperty'],
      androidExpression: `return stringProperty.length();`,
      swiftExpression: `return stringProperty!.count;`,
    },
    {
      class: 'StringProperty',
      name: 'stringProperty',
    },
    {
      class: 'FObjectProperty',
      name: 'fobject',
      crossPlatformFactoryValue: {
        class: 'demo.Person',
        firstName: 'Mike',
        lastName: 'Car',
        isMale: true
      }
    },
  ]
});