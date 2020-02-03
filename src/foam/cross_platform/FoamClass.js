foam.CLASS({
  package: 'foam.cross_platform',
  name: 'FoamClass',
  requires: [
    'foam.cross_platform.type.ArrayType'
  ],
  properties: [
    {
      class: 'StringProperty',
      name: 'id'
    },
    {
      class: 'ClassProperty',
      name: 'parent'
    },
    {
      class: 'ArrayProperty',
      name: 'ownAxioms',
      androidPostSet: `
        clearProperty("axioms");
        clearProperty("ownAxiomMap_");
        clearProperty("axiomMap_");
      `,
      swiftPostSet: `
        clearProperty("axioms");
        clearProperty("ownAxiomMap_");
        clearProperty("axiomMap_");
      `
    },
    {
      class: 'MapProperty',
      name: 'ownAxiomMap_',
      androidFactory: `
        java.util.Map m = new java.util.LinkedHashMap();
        for ( Object aO : getOwnAxioms() ) {
          foam.cross_platform.FObject a = (foam.cross_platform.FObject) aO;
          m.put(a.getProperty("name"), a);
        }
        return m;
      `,
      swiftFactory: `
        var m: [AnyHashable:Any?] = [:];
        for aO in getOwnAxioms()! {
          let a = aO as! foam_cross_platform_FObject;
          m[a.getProperty("name") as! String] = a;
        }
        return m;
      `
    },
    {
      class: 'MapProperty',
      name: 'axiomMap_',
      androidFactory: `
        if ( getParent() == null ) return getOwnAxiomMap_();
        java.util.Map m = new java.util.LinkedHashMap(getOwnAxiomMap_());
        for ( Object k : getParent().getAxiomMap_().keySet() ) {
          if ( ! m.containsKey(k) ) m.put(k, getParent().getAxiomMap_().get(k));
        }
        return m;
      `,
      swiftFactory: `
        if getParent() == nil { return getOwnAxiomMap_(); }
        var m: [AnyHashable:Any?] = getOwnAxiomMap_()!;
        for k in getParent()!.getAxiomMap_()!.keys {
          if m[k] == nil { m[k] = getParent()!.getAxiomMap_()![k]; }
        }
        return m;
      `
    },
    {
      class: 'ArrayProperty',
      name: 'axioms',
      androidFactory: `
        return getAxiomMap_().values().toArray();
      `,
      swiftFactory: `
        let own: [foam_cross_platform_FObject] = getOwnAxioms()?
          .map({ (a) -> foam_cross_platform_FObject in
            return a as! foam_cross_platform_FObject
          }) ?? [];
        let sup: [foam_cross_platform_FObject] = getParent()?.getAxioms()?
          .map({ (a) -> foam_cross_platform_FObject in
            return a as! foam_cross_platform_FObject
          })
          .filter({ (a) -> Bool in
            return self.getOwnAxiomMap_()![a.getProperty("name") as! String] == nil;
          }) ?? [];
        return own + sup;
      `
    },
    {
      class: 'FunctionProperty',
      name: 'builderFactory_',
    },
  ],
  methods: [
    {
      type: 'foam.cross_platform.Builder',
      name: 'createBuilder',
      args: [
        { type: 'Context', name: 'x' }
      ],
      androidCode: `
        return (foam.cross_platform.Builder) getBuilderFactory_().executeFunction(new Object[] {x});
      `,
      swiftCode: `
        return getBuilderFactory_()?.executeFunction([x]) as? foam_cross_platform_Builder;
      `,
    },
    {
      type: 'Boolean',
      name: 'isSubClass',
      args: [
        { type: 'Any', name: 'o' }
      ],
      androidCode: `
        if ( o instanceof foam.cross_platform.FoamClass == false ) return false;
        foam.cross_platform.FoamClass cls = (foam.cross_platform.FoamClass) o;
        if ( cls == this ) return true;
        if ( cls.getAxiomByName("implements_" + getId()) != null ) return true;
        return isSubClass(cls.getParent());
      `,
      swiftCode: `
        if !(o is foam_cross_platform_FoamClass) { return false; }
        let cls = o as! foam_cross_platform_FoamClass;
        if cls === self { return true; }
        if cls.getAxiomByName("implements_" + getId()!) != nil { return true; }
        return isSubClass(cls.getParent());
      `
    },
    {
      type: 'Boolean',
      name: 'isInstance',
      args: [
        { type: 'Any', name: 'o' }
      ],
      androidCode: `
        if ( o instanceof foam.cross_platform.FObject ) {
          foam.cross_platform.FObject fobj = (foam.cross_platform.FObject) o;
          return isSubClass(fobj.getCls_());
        }
        return false;
      `,
      swiftCode: `
        if o is foam_cross_platform_FObject {
          let fobj = o as! foam_cross_platform_FObject;
          return isSubClass(fobj.getCls_());
        }
        return false;
      `
    },
    {
      type: 'foam.cross_platform.FObject[]',
      name: 'getAxiomsByClass',
      args: [
        { type: 'foam.cross_platform.FoamClass', name: 'type' }
      ],
      androidCode: `
        java.util.List<foam.cross_platform.FObject> axioms = new java.util.ArrayList<>();
        for ( Object a : getAxioms() ) {
          if ( type.isInstance(a) ) axioms.add((foam.cross_platform.FObject) a);
        }
        foam.cross_platform.FObject[] a = new foam.cross_platform.FObject[axioms.size()];
        axioms.toArray(a);
        return a;
      `,
      swiftCode: `
        var axioms: [foam_cross_platform_FObject] = [];
        for a in getAxioms()! {
          if type!.isInstance(a) { axioms.append(a as! foam_cross_platform_FObject) }
        }
        return axioms;
      `
    },
    {
      type: 'foam.cross_platform.FObject',
      name: 'getAxiomByName',
      args: [
        { type: 'String', name: 'name' }
      ],
      androidCode: `
        return (foam.cross_platform.FObject) getAxiomMap_().get(name);
      `,
      swiftCode: `
        return getAxiomMap_()![name!] as? foam_cross_platform_FObject;
      `,
    }
  ]
});
