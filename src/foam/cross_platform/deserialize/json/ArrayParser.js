foam.CLASS({
  package: 'foam.cross_platform.deserialize.json',
  name: 'ArrayParser',
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
      androidFactory: `
        return Seq1_create()
          .setIndex(3)
          .setParsers(new foam.cross_platform.deserialize.Parser[] {
            Whitespace_create().build(),
            Literal_create().setString("[").build(),
            Whitespace_create().build(),
            Repeat_create()
              .setDelegate(AnyParser_create().build())
              .setDelim(
                Seq0_create().setParsers(new foam.cross_platform.deserialize.Parser[] {
                  Whitespace_create().build(),
                  Literal_create().setString(",").build(),
                  Whitespace_create().build(),
                })
                .build()
              )
              .build(),
            Whitespace_create().build(),
            Literal_create().setString("]").build()
          })
          .build();
      `,
      swiftFactory: `
        return Seq1_create()
          .setIndex(3)
          .setParsers([
            Whitespace_create().build(),
            Literal_create().setString("[").build(),
            Whitespace_create().build(),
            Repeat_create()
              .setDelegate(AnyParser_create().build())
              .setDelim(
                Seq0_create().setParsers([
                  Whitespace_create().build(),
                  Literal_create().setString(",").build(),
                  Whitespace_create().build(),
                ])
                .build()
              )
              .build(),
            Whitespace_create().build(),
            Literal_create().setString("]").build()
          ])
          .build();
      `
    },
  ],
});
