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
      factory: function () {
        return foam.cross_platform.serialize.json.Outputter.create();
      }
    },
  ],
  properties: [
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.serialize.json.internal.Outputter',
      name: 'outputter',
      androidFactory: `return Outputter_create().build();`,
      swiftFactory: `return Outputter_create().build();`
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
      `,
      swiftFactory: `
        return Eq_create()
          .setArg1(foam_core_Property.TRANSIENT())
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
      swiftCode: `
        let out = out!;
        let u = Util_create().build();
        if ( foam_cross_platform_FoamClass.CLS_().isInstance(data) ) {
          _ = out.obj()!
            .key("class")!
            .s("__Class__")!
            .key("forClass_")!
            .s((data as! foam_cross_platform_FoamClass).getId())!
            .end();
        } else if ( foam_core_Property.CLS_().isInstance(data) ) {
          _ = out.obj()!
            .key("class")!
            .s("__Property__")!
            .key("forClass_")!
            .s((data as! foam_core_Property).getCls_()!.getId())!
            .key("name")!
            .s((data as! foam_core_Property).getName())!
            .end();
        } else if ( u.getStringType().isInstance(data) ) {
          _ = out.s(data as? String);
        } else if ( u.getBooleanType().isInstance(data) ) {
          _ = out.b(data as! Bool);
        } else if ( u.getNumberType().isInstance(data) ) {
          _ = out.n(data as! NSNumber);
        } else if ( u.getArrayType().isInstance(data) ) {
          _ = out.array();
          for d in u.getArrayType().toObjectArray(data)! {
            output(out, d);
          }
          _ = out.end();
        } else if ( u.getMapType().isInstance(data) ) {
          _ = out.obj();
          for d in (data as! [String:Any?]).keys {
            _ = out.key(d);
            output(out, (data as! [String:Any?])[d]!);
          };
          _ = out.end();
        } else if ( u.getDateType().isInstance(data) ) {
          _ = out.n(NSNumber(value: (data as! Date).timeIntervalSince1970));
        } else if ( u.getFObjectType().isInstance(data) ) {
          outputFObject(out, data as? foam_cross_platform_FObject);
        } else if ( u.getNullType().isInstance(data) ) {
          _ = out.nul();
        } else {
          print("Unable to output " + String(describing: data));
          _ = out.nul();
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
      swiftCode: `
        let out = out!;
        let data = data!;
        let info = data.getCls_()!;
        _ = out.obj();

        _ = out.key("class")!.s(info.getId());

        for po in info.getAxiomsByClass(foam_core_Property.CLS_())! {
          let p = po as! foam_core_Property;
          if ( !data.hasPropertySet(p.getName()) ) { continue; }
          if ( getPropertyPredicate()!.f(p) ) {
            _ = out.key(p.getName());
            output(out, p.f(data));
          }
        }

        _ = out.end();
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
      swiftCode: `
        let s = getOutputter()!;
        s.reset();
        output(s, data);
        return s.toString();
      `,
    },
  ]
});
