foam.CLASS({
  package: 'foam.cross_platform.deserialize.json',
  name: 'MapParser',
  extends: 'foam.cross_platform.deserialize.ProxyParser',
  requires: [
    'foam.cross_platform.deserialize.json.AnyKeyParser',
    'foam.cross_platform.deserialize.json.Whitespace',
    'foam.cross_platform.deserialize.Literal',
    'foam.cross_platform.deserialize.Repeat',
    'foam.cross_platform.deserialize.Seq0',
    'foam.cross_platform.deserialize.Seq1',
    'foam.cross_platform.deserialize.Seq2',
  ],
  axioms: [
    { class: 'foam.pattern.Singleton' }
  ],
  properties: [
    {
      name: 'delegate',
      androidFactory: `
        return
          Seq1_create()
            .setIndex(2)
            .setParsers(new foam.cross_platform.deserialize.Parser[] {
              Whitespace_create().build(),
              Literal_create().setString("{").build(),
              Repeat_create().setDelegate(
                Seq2_create()
                  .setIndex1(1)
                  .setIndex2(5)
                  .setParsers(new foam.cross_platform.deserialize.Parser[] {
                    Whitespace_create(),
                    AnyKeyParser_create(),
                    Whitespace_create(),
                    Literal_create(["string": ":"]),
                    Whitespace_create(),
                    __context__.create(foam.cross_platform.deserialize_json_AnyParser.self)!
                  })
              setDelim(
                Seq0_create().setParsers(new foam.cross_platform.deserialize.Parser[] {
                  Whitespace_create().build(),
                  Literal_create().setString(",").build()
                })
                .build()
              )
              .build()
            )
            .build(),
            Whitespace_create().build(),
            Literal_create().setString("}").build(),
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
        if ( ps != null ) {
          Object[] values = (Object[]) ps.value();
          java.util.Map map = java.util.HashMap();
          for ( Object item : values ) {
            Object[] itemA = (Object[]) item;
            map.put((String) item[0], item[1]);
          }
          return ps.setValue(map);
        }
        return ps;
      `
    },
  ],
});
