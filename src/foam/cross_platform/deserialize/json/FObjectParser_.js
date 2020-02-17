foam.CLASS({
  package: 'foam.cross_platform.deserialize.json',
  name: 'FObjectParser_',
  extends: 'foam.cross_platform.deserialize.ProxyParser',
  requires: [
    'foam.cross_platform.deserialize.json.KeyParser',
    'foam.cross_platform.deserialize.json.StringParser',
    'foam.cross_platform.deserialize.json.Whitespace',
    'foam.cross_platform.deserialize.json.ModelParserFactory',
    'foam.cross_platform.deserialize.Literal',
    'foam.cross_platform.deserialize.Optional',
    'foam.cross_platform.deserialize.Seq1',
  ],
  axioms: [
    { class: 'foam.pattern.Singleton' }
  ],
  properties: [
    {
      name: 'delegate',
      androidFactory: `
        return Seq1_create()
          .setIndex(4)
          .setParsers(new foam.cross_platform.deserialize.Parser[] {
            KeyParser_create().setKey("class").build(),
            Whitespace_create().build(),
            Literal_create().setString(":").build(),
            Whitespace_create().build(),
            StringParser_create().build(),
            Optional_create().setDelegate(
              Literal_create().setString(",").build()
            ).build()
          })
          .build();
      `
    },
  ],
  methods: [
    {
      name: 'parse',
      androidCode: `
        foam.cross_platform.deserialize.PStream ps1 = getDelegate().parse(ps, x);
        if ( ps1 == null ) return null;
        foam.cross_platform.FoamClass c = getSubX().lookup((String) ps1.value());
        if ( c == null ) return null;
        ps = ps1;

        foam.cross_platform.deserialize.ParserContext subx = x.pxSubContext();
        java.util.Map args = new java.util.HashMap();
        subx.pxSet("obj", args);
        ps = ModelParserFactory_create().build().getInstance(c).parse(ps, subx);

        if ( ps != null ) {
          foam.cross_platform.Builder b = c.createBuilder((foam.cross_platform.Context) x.pxGet("X"));
          for ( Object k : args.keySet() ) {
            b.setBuilderProperty((String) k, args.get(k));
          }
          return ps.setValue(b.builderBuild());
        }

        return null;
      `
    },
  ],
});
