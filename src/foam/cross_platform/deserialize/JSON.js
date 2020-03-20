foam.CLASS({
  package: 'foam.cross_platform.deserialize',
  name: 'JSON',
  axioms: [{ class: 'foam.pattern.Singleton' }],
  static: [
    {
      type: 'Any',
      name: 'parse',
      args: [
        { type: 'Any', name: 'o' },
        { type: 'foam.cross_platform.FoamClass', name: 'opt_class' },
        { type: 'Context', name: 'opt_x' },
      ],
      androidCode: `
        foam.cross_platform.type.Util u = foam.cross_platform.type.Util.INSTANCE();
        if ( u.getArrayType().isInstance(o) ) {
          Object[] a = u.getArrayType().toObjectArray(o);
          for ( int i = 0 ; i < a.length ; i++ ) {
            a[i] = parse(a[i], opt_class, opt_x);
          }
          return a;
        } else if ( u.getFObjectType().isInstance(o) ) {
          return o;
        } else if ( u.getMapType().isInstance(o) ) {
          java.util.Map m = (java.util.Map) o;
          if ( opt_class != null || m.get("class") != null ) {
            foam.cross_platform.Context x = opt_x == null ? foam.cross_platform.Context.GLOBAL() : opt_x;
            foam.cross_platform.FoamClass cls = opt_class;
            if ( m.containsKey("class") ) {
              Object ocls = m.get("class");
              if ( u.getStringType().isInstance(ocls) ) {
                cls = x.lookup((String) ocls);
              } else if ( foam.cross_platform.FoamClass.CLS_().isInstance(ocls) ) {
                cls = (foam.cross_platform.FoamClass) ocls;
              }
            }
            if ( cls != null ) {
              foam.cross_platform.Builder builder = cls.createBuilder(x);
              for ( Object ko : m.keySet() ) {
                String k = ko.toString();
                Object p = cls.getAxiomByName(k);
                if ( foam.core.Property.CLS_().isInstance(p) ) {
                  builder.setBuilderProperty(k, ((foam.core.Property) p).fromJson(m.get(k), x));
                }
              }
              return builder.builderBuild();
            }
          }
          java.util.Map ret = new java.util.HashMap();
          for ( Object k : m.keySet() ) {
            ret.put(k, parse(m.get(k), null, opt_x));
          }
          return ret;
        } else {
          return o;
        }
      `,
      swiftCode: `
        let u = foam_cross_platform_type_Util.INSTANCE();
        if ( u.getArrayType().isInstance(o) ) {
          let ao = o as! [Any?];
          var a: [Any?] = [];
          for i in 0..<ao.count {
            a.append(parse(ao[i], opt_class, opt_x));
          }
          return a;
        } else if ( u.getFObjectType().isInstance(o) ) {
          return o;
        } else if ( u.getMapType().isInstance(o) ) {
          let m = o as! [String:Any?];
          if ( opt_class != nil || m["class"] != nil ) {
            let x = opt_x ?? foam_cross_platform_Context.GLOBAL();
            var cls = opt_class;
            if ( m["class"] != nil ) {
              let ocls = m["class"]!;
              if ( u.getStringType().isInstance(ocls) ) {
                cls = x.lookup(ocls as? String);
              } else if ( foam_cross_platform_FoamClass.CLS_().isInstance(ocls) ) {
                cls = ocls as? foam_cross_platform_FoamClass;
              }
            }
            if ( cls != nil ) {
              let builder = cls!.createBuilder(x)!;
              for k in m.keys {
                let p = cls!.getAxiomByName(k);
                if ( foam_core_Property.CLS_().isInstance(p) ) {
                  _ = builder.setBuilderProperty(k, (p as! foam_core_Property).fromJson(m[k]!, x));
                }
              }
              return builder.builderBuild();
            }
          }
          var ret: [String:Any?] = [:];
          for k in m.keys {
            ret[k] = parse(m[k]!, nil, opt_x);
          }
          return ret;
        } else {
          return o;
        }
      `,
    }
  ]
});