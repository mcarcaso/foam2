foam.CLASS({
  package: 'foam.lib',
  name: 'AndPropertyPredicate',
  implements: [ 'foam.lib.PropertyPredicate'],
  javaImports: [
    'foam.nanos.auth.AuthService'
  ],
  properties: [
    {
      class: 'ArrayProperty',
      type: 'foam.lib.PropertyPredicate[]',
      name: 'delegates'
    }
  ],

  methods: [
    {
      name: 'propertyPredicateCheck',
      javaCode: `
  for ( foam.lib.PropertyPredicate p : getDelegates() ) {
    if ( ! p.propertyPredicateCheck(x, of, prop) ) {
      return false;
    }
  }

  return true;
`
    }
  ]
});
