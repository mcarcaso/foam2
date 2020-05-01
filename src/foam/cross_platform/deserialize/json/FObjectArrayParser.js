foam.CLASS({
  package: 'foam.cross_platform.deserialize.json',
  name: 'FObjectArrayParser',
  extends: 'foam.cross_platform.deserialize.ProxyParser',
  requires: [
    'foam.cross_platform.deserialize.Literal',
    'foam.cross_platform.deserialize.Repeat',
    'foam.cross_platform.deserialize.Seq0',
    'foam.cross_platform.deserialize.Seq1',
    'foam.cross_platform.deserialize.json.AnyParser',
    'foam.cross_platform.deserialize.json.Whitespace',
  ],
  axioms: [
    { class: 'foam.pattern.Singleton' }
  ],
  properties: [
    {
      name: 'delegate',
      crossPlatformFactoryValue: {
        class: 'foam.cross_platform.deserialize.Seq1',
        index: 3,
        parsers: [
          { class: 'foam.cross_platform.deserialize.json.Whitespace' },
          { class: 'foam.cross_platform.deserialize.Literal', string: '[' },
          { class: 'foam.cross_platform.deserialize.json.Whitespace' },
          {
            class: 'foam.cross_platform.deserialize.Repeat',
            delegate: { class: 'foam.cross_platform.deserialize.json.FObjectParser' },
            delim: {
              class: 'foam.cross_platform.deserialize.Seq0',
              parsers: [
                { class: 'foam.cross_platform.deserialize.json.Whitespace' },
                { class: 'foam.cross_platform.deserialize.Literal', string: ',' },
                { class: 'foam.cross_platform.deserialize.json.Whitespace' },
              ]
            }
          },
          { class: 'foam.cross_platform.deserialize.json.Whitespace' },
          { class: 'foam.cross_platform.deserialize.Literal', string: ']' },
        ]
      }
    },
  ],
});
