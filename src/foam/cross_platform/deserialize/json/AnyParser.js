foam.CLASS({
  package: 'foam.cross_platform.deserialize.json',
  name: 'AnyParser',
  extends: 'foam.cross_platform.deserialize.ProxyParser',
  requires: [
    'foam.cross_platform.deserialize.json.ArrayParser',
    'foam.cross_platform.deserialize.json.BooleanParser',
    'foam.cross_platform.deserialize.json.FObjectParser',
    'foam.cross_platform.deserialize.json.FloatParser',
    'foam.cross_platform.deserialize.json.IntParser',
    'foam.cross_platform.deserialize.json.LongParser',
    'foam.cross_platform.deserialize.json.MapParser',
    'foam.cross_platform.deserialize.json.NullParser',
    'foam.cross_platform.deserialize.json.StringParser',
    'foam.cross_platform.deserialize.Alt',
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
            NullParser_create().build(),
            StringParser_create().build(),
            FloatParser_create().build(),
            LongParser_create().build(),
            IntParser_create().build(),
            BooleanParser_create().build(),
            FObjectParser_create().build(),
            ArrayParser_create().build(),
            MapParser_create().build(),
          })
          .build();
      `,
      swiftFactory: `
        return Alt_create()
          .setParsers([
            NullParser_create().build(),
            StringParser_create().build(),
            FloatParser_create().build(),
            LongParser_create().build(),
            IntParser_create().build(),
            BooleanParser_create().build(),
            FObjectParser_create().build(),
            ArrayParser_create().build(),
            MapParser_create().build(),
          ])
          .build();
      `
    },
  ],
});
