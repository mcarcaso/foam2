foam.CLASS({
  package: 'foam.cross_platform.deserialize.json',
  name: 'PropertyParser',
  extends: 'foam.cross_platform.deserialize.ProxyParser',
  requires: [
    'foam.cross_platform.deserialize.json.AnyParser',

    'foam.cross_platform.deserialize.Literal',
    'foam.cross_platform.deserialize.Seq1',
    'foam.cross_platform.deserialize.json.KeyParser',
    'foam.cross_platform.deserialize.json.Whitespace',
  ],
  properties: [
    {
      class: 'FObjectProperty',
      of: 'foam.core.Property',
      name: 'property',
    },
    {
      name: 'delegate',
      androidFactory: `
        return Seq1_create()
          .setIndex(5)
          .setParsers(new foam.cross_platform.deserialize.Parser[] {
            Whitespace_create().build(),
            KeyParser_create().setKey(getProperty().getName()).build(),
            Whitespace_create().build(),
            Literal_create().setString(":").build(),
            Whitespace_create().build(),
            //getProperty().getJsonParser(),
            AnyParser_create().build(),
            Whitespace_create().build()
          })
        .build();
      `
    },
  ],
  methods: [
    {
      name: 'parse',
      androidCode: `
        ps = super.parse(ps, x);
        if ( ps == null ) return null;
        java.util.Map args = (java.util.Map) x.pxGet("obj");
        args.put(getProperty().getName(), ps.value());
        return ps;
      `
    },
  ],
});

