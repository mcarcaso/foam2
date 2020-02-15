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
      androidFactory: `
        return Alt_create()
          .setParsers(new foam.cross_platform.deserialize.Parser[] {
            Literal_create().setString("true").setValue(true).build(),
            Literal_create().setString("false").setValue(false).build()
          })
          .build();
      `
    },
  ],
});
