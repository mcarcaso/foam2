foam.CLASS({
  package: 'foam.cross_platform',
  name: 'FacetedBuilder',
  implements: [
    'foam.cross_platform.Builder'
  ],
  properties: [
    {
      class: 'StringProperty',
      name: 'name'
    },
    {
      class: 'StringProperty',
      name: 'ofProperty'
    },
    {
      class: 'ClassProperty',
      name: 'defaultImpl'
    },
    {
      class: 'MapProperty',
      name: 'propMap_'
    },
  ],
  methods: [
    {
      name: 'setBuilderProperty',
      androidCode: `
        getPropMap_().put(name, value);
        return this;
      `,
      swiftCode: `
        getPropMap_()?[name!] = value;
        return self;
      `
    },
    {
      name: 'builderBuild',
      androidCode: `
        foam.cross_platform.FoamClass cls = null;
        foam.cross_platform.FoamClass of = getPropMap_().get(getOfProperty()) instanceof String ?
            getX().lookup((String) getPropMap_().get(getOfProperty())) :
            (foam.cross_platform.FoamClass) getPropMap_().get(getOfProperty());
        while ( of != null && cls == null ) {
          cls = getX().lookup(of.getId() + getName());
          of = of.getParent();
        }
        if ( cls == null ) cls = getDefaultImpl();
        foam.cross_platform.Builder b = cls.createBuilder(getSubX());
        for ( Object k : getPropMap_().keySet() ) {
          b.setBuilderProperty((String) k, getPropMap_().get(k));
        }
        return b.builderBuild();
      `,
      swiftCode: `
        var cls: foam_cross_platform_FoamClass? = nil;
        var of: foam_cross_platform_FoamClass? = getPropMap_()?[getOfProperty()!] is String ?
            getX().lookup(getPropMap_()?[getOfProperty()!] as? String) :
            getPropMap_()?[getOfProperty()!] as? foam_cross_platform_FoamClass;
        while ( of != nil && cls == nil ) {
          cls = getX().lookup(of!.getId()! + getName()!);
          of = of!.getParent();
        }
        if ( cls == nil ) { cls = getDefaultImpl(); }
        let b = cls!.createBuilder(getSubX());
        for k in getPropMap_()!.allKeys {
          _ = b!.setBuilderProperty(k as? String, getPropMap_()![k]!);
        }
        return b!.builderBuild();
      `,
    },
  ]
});