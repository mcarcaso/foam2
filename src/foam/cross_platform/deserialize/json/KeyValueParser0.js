foam.CLASS({
  package: 'foam.cross_platform.deserialize.json',
  name: 'KeyValueParser0',
  extends: 'foam.cross_platform.deserialize.ProxyParser',
  requires: [
    'foam.cross_platform.deserialize.json.AnyKeyParser',
    'foam.cross_platform.deserialize.json.AnyParser',
    'foam.cross_platform.deserialize.json.Whitespace',
    'foam.cross_platform.deserialize.Literal',
    'foam.cross_platform.deserialize.Seq0',
  ],
  properties: [
    {
      name: 'delegate',
      androidFactory: `
        return Seq0_create()
          .setParsers(new foam.cross_platform.deserialize.Parser[] {
            Whitespace_create().build(),
            AnyKeyParser_create().build(),
            Whitespace_create().build(),
            Literal_create().setString(":").build(),
            AnyParser_create().build()
          })
          .build();
      `,
      swiftFactory: `
        return Seq0_create()
          .setParsers([
            Whitespace_create().build(),
            AnyKeyParser_create().build(),
            Whitespace_create().build(),
            Literal_create().setString(":").build(),
            AnyParser_create().build()
          ])
          .build();
      `
    },
  ],
});
