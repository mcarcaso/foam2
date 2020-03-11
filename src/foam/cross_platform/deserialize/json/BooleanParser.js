foam.CLASS({
  package: 'foam.cross_platform.deserialize.json',
  name: 'BooleanParser',
  extends: 'foam.cross_platform.deserialize.ProxyParser',
  requires: [
    'foam.cross_platform.deserialize.Alt',
    'foam.cross_platform.deserialize.Literal',
  ],
  axioms: [
    { class: 'foam.pattern.Singleton' }
  ],
  properties: [
    {
      name: 'delegate',
      crossPlatformFactoryValue: {
        class: 'foam.cross_platform.deserialize.Alt',
        parsers: [
          {
            class: 'foam.cross_platform.deserialize.Literal',
            string: 'true',
            value: true
          },
          {
            class: 'foam.cross_platform.deserialize.Literal',
            string: 'false',
            value: false
          },
        ]
      }
    },
  ],
});
