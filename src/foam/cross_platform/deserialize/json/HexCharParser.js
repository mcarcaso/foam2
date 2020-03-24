foam.CLASS({
  package: 'foam.cross_platform.deserialize.json',
  name: 'HexCharParser',
  extends: 'foam.cross_platform.deserialize.ProxyParser',
  requires: [
    'foam.cross_platform.deserialize.Chars'
  ],
  axioms: [
    { class: 'foam.pattern.Singleton' }
  ],
  properties: [
    {
      name: 'delegate',
      crossPlatformFactoryValue: {
        class: 'foam.cross_platform.deserialize.Chars',
        chars: '0123456789ABCDEFabcdefg'
      }
    },
  ],
});