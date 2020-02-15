foam.CLASS({
  package: 'foam.cross_platform.deserialize.json',
  name: 'AnyKeyParser',
  extends: 'foam.cross_platform.deserialize.ProxyParser',
  requires: [
    'foam.cross_platform.deserialize.Alt',
    'foam.cross_platform.deserialize.Literal',
    'foam.cross_platform.deserialize.NotChars',
    'foam.cross_platform.deserialize.Repeat0',
    'foam.cross_platform.deserialize.Seq1',
    'foam.cross_platform.deserialize.Substring',
  ],
  axioms: [
    { class: 'foam.pattern.Singleton' }
  ],
  properties: [
    {
      name: 'delegate',
      androidFactory: `
        return Alt_create()
          .setParsers(new foam.cross_platform.deserialize.Parser[] {
            Seq1_create()
              .setIndex(1)
              .setParsers(new foam.cross_platform.deserialize.Parser[] {
                Literal_create().setString("\\"").build(),
                Substring_create().setDelegate(
                  Repeat0_create().setDelegate(
                    NotChars_create().setChars("\\"").build()
                  )
                  .build())
                .build(),
                Literal_create().setString("\\"").build()
              })
              .build(),
            Seq1_create()
              .setIndex(0)
              .setParsers(new foam.cross_platform.deserialize.Parser[] {
                Substring_create().setDelegate(
                  Repeat0_create().setDelegate(
                    NotChars_create().setChars("{}, :").build()
                  )
                  .build()
                )
                .build()
              })
              .build()
            })
            .build();
      `
    },
  ],
});
