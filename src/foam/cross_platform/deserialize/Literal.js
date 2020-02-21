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
      androidExpression: 'return string;',
      swiftExpression: 'return string;'
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
      `,
      swiftCode: `
        let s = foam_cross_platform_type_StringType.INSTANCE();
        var ps = ps!;
        for i in 0..<getString()!.count {
          if ( !ps.valid() || ps.head() != s.charAt(getString(), i) ) {
            return nil;
          }
          ps = ps.tail()!;
        }
        return ps.setValue(getValue());
      `
    },
  ]
});
