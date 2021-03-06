foam.CLASS({
  package: 'foam.cross_platform.deserialize.json',
  name: 'FObjectParser',
  extends: 'foam.cross_platform.deserialize.ProxyParser',
  requires: [
    'foam.cross_platform.deserialize.Literal',
    'foam.cross_platform.deserialize.ParserContext',
    'foam.cross_platform.deserialize.Seq1',
    'foam.cross_platform.deserialize.StringPStream',
    'foam.cross_platform.deserialize.json.FObjectParser_',
    'foam.cross_platform.deserialize.json.Whitespace',
  ],
  axioms: [
    { class: 'foam.pattern.Singleton' }
  ],
  properties: [
    {
      name: 'delegate',
      androidFactory: `
        return Seq1_create()
          .setIndex(3)
          .setParsers(new foam.cross_platform.deserialize.Parser[] {
            Whitespace_create().build(),
            Literal_create().setString("{").build(),
            Whitespace_create().build(),
            FObjectParser__create().build(),
            Whitespace_create().build(),
            Literal_create().setString("}").build()
          })
          .build();
      `,
      swiftFactory: `
        return Seq1_create()
          .setIndex(3)
          .setParsers([
            Whitespace_create().build(),
            Literal_create().setString("{").build(),
            Whitespace_create().build(),
            FObjectParser__create().build(),
            Whitespace_create().build(),
            Literal_create().setString("}").build()
          ])
          .build();
      `
    },
  ],
  methods: [
    {
      name: 'parseString',
      type: 'FObject',
      args: [
        {
          type: 'String',
          name: 'str',
        },
        {
          type: 'Context',
          name: 'x',
        },
      ],
      androidCode: `
        foam.cross_platform.deserialize.StringPStream ps = StringPStream_create()
          .setStr(str)
          .build();
        foam.cross_platform.deserialize.ParserContext parserContext = ParserContext_create().build();
        parserContext.pxSet("X", x != null ? x : getSubX());
        foam.cross_platform.deserialize.PStream result = parse(ps, parserContext);
        return result != null ? (foam.cross_platform.FObject) result.value() : null;
      `,
      swiftCode: `
        let ps = foam_cross_platform_deserialize_StringPStream.Instance(str: str ?? "");
        let parserContext = ParserContext_create().build();
        parserContext.pxSet("X", x != nil ? x : getSubX());
        let result = parse(ps, parserContext);
        return result?.value() as? foam_cross_platform_FObject;
      `
    },
  ],
});
