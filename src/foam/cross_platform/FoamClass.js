foam.CLASS({
  package: 'foam.cross_platform',
  name: 'FoamClass',
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
      name: 'axioms'
    }
  ],
  methods: [
    {
      type: 'Boolean',
      name: 'isSubClass',
      args: [
        { type: 'Any', name: 'o' }
      ],
      androidCode: `
        if ( o instanceof foam.cross_platform.FoamClass == false ) return false;
        foam.cross_platform.FoamClass cls = (foam.cross_platform.FoamClass) o;
        while ( cls != null ) {
          if ( cls == this ) return true;
          cls = cls.getParent();
        }
        return false;
      `,
      swiftCode: `
        if !(o is foam_cross_platform_FoamClass) { return false }
        var cls = o as! foam_cross_platform_FoamClass?
        while cls != nil {
          if cls === self { return true; }
          cls = cls!.getParent()
        }
        return false;
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
    }
  ]
});
