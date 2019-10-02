foam.CLASS({
  package: 'foam.nanos.geocode',
  name: 'GoogleMapsCredentials',

  axioms: [ foam.pattern.Singleton.create() ],

  properties: [
    {
      class: 'StringProperty',
      name: 'apiKey'
    }
  ]
});
