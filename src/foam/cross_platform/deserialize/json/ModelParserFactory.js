foam.CLASS({
  package: 'foam.cross_platform.deserialize.json',
  name: 'ModelParserFactory',
  extends: 'foam.cross_platform.deserialize.ProxyParser',
  axioms: [
    { class: 'foam.pattern.Singleton' }
  ],
  requires: [
    'foam.cross_platform.deserialize.Alt',
    'foam.cross_platform.deserialize.Literal',
    'foam.cross_platform.deserialize.Repeat0',
    'foam.cross_platform.deserialize.Seq0',
    'foam.cross_platform.deserialize.json.PropertyParser',
    'foam.cross_platform.deserialize.json.UnknownPropertyParser',
    'foam.cross_platform.deserialize.json.Whitespace',
  ],
  properties: [
    {
      class: 'MapProperty',
      name: 'parsers',
    },
  ],
  methods: [
    {
      type: 'foam.cross_platform.deserialize.Parser',
      name: 'buildInstance_',
      args: [
        { type: 'foam.cross_platform.FoamClass', name: 'cls' }
      ],
      androidCode: `
        java.util.List parsers = new java.util.ArrayList();
        for ( foam.cross_platform.FObject p : cls.getAxiomsByClass(foam.core.Property.CLS_()) ) {
          if ( ((foam.core.Property) p).getCrossPlatformJsonParser() != null ) {
            parsers.add(PropertyParser_create().setProperty(p).build());
          }
        }
        parsers.add(UnknownPropertyParser_create().build());
        foam.cross_platform.deserialize.Parser[] parsersArray = new foam.cross_platform.deserialize.Parser[parsers.size()];
        parsers.toArray(parsersArray);
        return Repeat0_create()
          .setDelegate(Seq0_create()
            .setParsers(new foam.cross_platform.deserialize.Parser[] {
              Whitespace_create().build(),
              Alt_create().setParsers(parsersArray).build()
            })
            .build()
          )
          .setDelim(Literal_create().setString(",").build())
          .build();
      `,
      swiftCode: `
        var parsers: [Any] = [];
        for p in cls!.getAxiomsByClass(foam_core_Property.CLS_())! {
          if ( (p as! foam_core_Property).getCrossPlatformJsonParser() != nil ) {
            parsers.append(PropertyParser_create().setProperty(p).build());
          }
        }
        parsers.append(UnknownPropertyParser_create().build());
        return Repeat0_create()
          .setDelegate(Seq0_create()
            .setParsers([
              Whitespace_create().build(),
              Alt_create().setParsers(parsers).build()
            ])
            .build()
          )
          .setDelim(Literal_create().setString(",").build())
          .build();
      `
    },
    {
      type: 'foam.cross_platform.deserialize.Parser',
      name: 'getInstance',
      args: [
        { type: 'foam.cross_platform.FoamClass', name: 'cls' }
      ],
      androidCode: `
        if ( ! getParsers().containsKey(cls.getId()) ) {
          getParsers().put(cls.getId(), buildInstance_(cls));
        }
        return (foam.cross_platform.deserialize.Parser) getParsers().get(cls.getId());
      `,
      swiftCode: `
        if ( getParsers()![cls!.getId()!] == nil ) {
          getParsers()![cls!.getId()!] = buildInstance_(cls);
        }
        return getParsers()![cls!.getId()!] as? foam_cross_platform_deserialize_Parser
      `
    },
  ],
});
