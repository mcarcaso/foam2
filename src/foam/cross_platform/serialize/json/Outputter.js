foam.CLASS({
  package: 'foam.cross_platform.serialize.json',
  name: 'Outputter',
  requires: [
    'foam.cross_platform.serialize.json.internal.Outputter',
    'foam.cross_platform.type.Util',
    'foam.mlang.Constant',
    'foam.mlang.predicate.Eq',
  ],
  constants: [
    {
      name: 'DEFAULT',
      type: 'foam.cross_platform.serialize.json.Outputter',
      androidFactory: `return OutputterBuilder(null).build();`
    },
  ],
  properties: [
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.serialize.json.internal.Outputter',
      name: 'outputter',
      androidFactory: `return Outputter_create().build();`
    },
    {
      class: 'FObjectProperty',
      of: 'foam.mlang.predicate.Predicate',
      name: 'propertyPredicate',
      androidFactory: `
        return Eq_create()
          .setArg1(foam.core.Property.TRANSIENT())
          .setArg2(Constant_create().setValue(false).build())
          .build();
      `
    },
  ],
  methods: [
    {
      name: 'output',
      args: [
        {
          type: 'foam.cross_platform.serialize.json.internal.Outputter',
          name: 'out',
        },
        {
          name: 'data',
        },
      ],
      androidCode: `
        foam.cross_platform.type.Util u = Util_create().build();
        if ( foam.cross_platform.FoamClass.CLS_().isInstance(data) ) {
          out.obj()
            .key("class")
            .s("__Class__")
            .key("forClass_")
            .s(((foam.cross_platform.FoamClass) data).getId())
            .end();
        } else if ( foam.core.Property.CLS_().isInstance(data) ) {
          out.obj()
            .key("class")
            .s("__Property__")
            .key("forClass_")
            .s(((foam.core.Property) data).getCls_().getId())
            .key("name")
            .s(((foam.core.Property) data).getName())
            .end();
        } else if ( u.getStringType().isInstance(data) ) {
          out.s((String) data);
        } else if ( u.getBooleanType().isInstance(data) ) {
          out.b((boolean) data);
        } else if ( u.getNumberType().isInstance(data) ) {
          out.n((Number) data);
        } else if ( u.getArrayType().isInstance(data) ) {
          out.array();
          for ( Object d : u.getArrayType().toObjectArray(data) ) {
            output(out, d);
          }
          out.end();
        } else if ( u.getMapType().isInstance(data) ) {
          out.obj();
          for ( Object d : ((java.util.Map) data).keySet() ) {
            out.key(d.toString());
            output(out, ((java.util.Map) data).get(d.toString()));
          };
          out.end();
        } else if ( u.getDateType().isInstance(data) ) {
          out.n(((java.util.Date) data).getTime());
        } else if ( u.getFObjectType().isInstance(data) ) {
          outputFObject(out, (foam.cross_platform.FObject) data);
        } else if ( u.getNullType().isInstance(data) ) {
          out.nul();
        } else {
          System.out.println("Unable to output " + data.toString());
          out.nul();
        }
      `,
    },
    {
      name: 'outputFObject',
      args: [
        {
          type: 'foam.cross_platform.serialize.json.internal.Outputter',
          name: 'out',
        },
        {
          type: 'FObject',
          name: 'data',
        },
      ],
      androidCode: `
        foam.cross_platform.FoamClass info = data.getCls_();
        out.obj();

        out.key("class").s(info.getId());

        for ( foam.cross_platform.FObject po : info.getAxiomsByClass(foam.core.Property.CLS_()) ) {
          foam.core.Property p = (foam.core.Property) po;
          if ( ! data.hasPropertySet(p.getName()) ) continue;
          if ( getPropertyPredicate().f(p) ) {
            out.key(p.getName());
            output(out, p.f(data));
          }
        }

        out.end();
      `,
    },
    {
      type: 'String',
      name: 'stringify',
      args: [
        {
          type: 'FObject',
          name: 'data',
        },
      ],
      androidCode: `
        foam.cross_platform.serialize.json.internal.Outputter s = getOutputter();
        s.reset();
        output(s, data);
        return s.toString();
      `,
    },
  ]
});
