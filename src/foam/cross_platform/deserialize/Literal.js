foam.CLASS({
  package: 'foam.cross_platform.deserialize',
  name: 'Literal',
  implements: [
    'foam.cross_platform.deserialize.Parser'
  ],
  properties: [
    {
      class: 'StringProperty',
      name: 'string',
    },
    {
      name: 'value',
      expressionArgs: ['string'],
      androidExpression: 'return string;'
    },
  ],
  methods: [
    {
      name: 'parse',
      androidCode: `
        for ( int i = 0 ; i < getString().length() ; i++ ) {
          if ( ! ps.valid() || ps.head() != getString().charAt(i) ) {
            return null;
          }
          ps = ps.tail();
        }
        return ps.setValue(getValue());
      `
    },
  ]
});
