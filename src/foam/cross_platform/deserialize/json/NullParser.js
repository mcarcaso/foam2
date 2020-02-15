foam.CLASS({
  package: 'foam.cross_platform.deserialize.json',
  name: 'NullParser',
  extends: 'foam.cross_platform.deserialize.ProxyParser',
  requires: [
    'foam.cross_platform.deserialize.Literal',
  ],
  axioms: [
    { class: 'foam.pattern.Singleton' }
  ],
  properties: [
    {
      name: 'delegate',
      androidFactory: `
        return Literal_create().setString("null").setValue(null).build();
      `
    },
  ],
});
