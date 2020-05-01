foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines',
  name: 'FObjectPropertyJavaRefinement',
  refines: 'foam.core.FObjectProperty',
  requires: [
    'foam.cross_platform.ui.widget.FObjectPropertyView',
    'foam.cross_platform.deserialize.json.FObjectParser'
  ],
  properties: [
    {
      name: 'cpView',
      crossPlatformFactoryValue: {
        class: 'foam.cross_platform.ui.widget.FObjectPropertyView'
      }
    },
    {
      name: 'cpCloneProperty',
      androidValue: `
        (foam.cross_platform.GenericFunction) args -> {
          foam.cross_platform.FObject from = (foam.cross_platform.FObject) args[0];
          foam.cross_platform.FObject to = (foam.cross_platform.FObject) args[1];
          foam.cross_platform.Context x = (foam.cross_platform.Context) args[2];
          foam.cross_platform.FObject o = (foam.cross_platform.FObject) from.getProperty(getName());
          to.setProperty(getName(), o == null ? null : o.clone(x));
          return null;
        }
      `,
      swiftValue: `
        AnonymousGenericFunction_create()
          .setFn({[weak self] (args: [Any?]?) -> Any? in
            if self == nil { return nil }
            let from = args![0] as! foam_cross_platform_FObject;
            let to = args![1] as! foam_cross_platform_FObject;
            let x = args![2] as! foam_cross_platform_Context;
            let o = from.getProperty(self!.getName()) as? foam_cross_platform_FObject;
            to.setProperty(self!.getName(), o?.clone(x));
            return nil;
          })
          .build()
      `
    },
    {
      name: 'crossPlatformJsonParser',
      crossPlatformFactoryValue: {
        class: 'foam.cross_platform.deserialize.json.FObjectParser'
      }
    },
  ],
  methods: [
    {
      name: 'fromJson',
      androidCode: `
        return foam.cross_platform.deserialize.JSON.parse(o, getOf(), x);
      `
    },
    {
      name: 'getDeps',
      code: function(flagFilter, deps) {
        if ( ! flagFilter(this) ) return;
        if ( ! this.of ) return;
        deps[this.of.id] = true;
        this.of.getDeps(flagFilter, deps);
      }
    }
  ]
});
