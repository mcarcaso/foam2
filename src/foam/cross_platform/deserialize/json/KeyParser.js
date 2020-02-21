foam.CLASS({
  package: 'foam.cross_platform.deserialize.json',
  name: 'KeyParser',
  extends: 'foam.cross_platform.deserialize.ProxyParser',
  requires: [
    'foam.cross_platform.deserialize.Alt',
    'foam.cross_platform.deserialize.Literal',
  ],
  axioms: [
    { class: 'foam.pattern.Multiton', property: 'key' }
  ],
  properties: [
    {
      class: 'StringProperty',
      name: 'key',
    },
    {
      name: 'delegate',
      expressionArgs: ['key'],
      androidExpression: `
        return Alt_create()
          .setParsers(new foam.cross_platform.deserialize.Parser[] {
            Literal_create().setString("\\"" + key + "\\"").build(),
            Literal_create().setString(key).build()
          })
          .build();
      `,
      swiftExpression: `
        return Alt_create()
          .setParsers([
            Literal_create().setString("\\"" + key! + "\\"").build(),
            Literal_create().setString(key).build()
          ])
          .build();
      `
    },
  ],
});
