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
