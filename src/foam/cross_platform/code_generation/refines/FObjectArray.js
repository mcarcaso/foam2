foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines',
  name: 'ArrayPropertyRefinement',
  refines: 'foam.core.FObjectArray',
  requires: [
    'foam.cross_platform.ui.widget.FObjectArrayView',
    'foam.cross_platform.deserialize.json.FObjectArrayParser',
  ],
  properties: [
    {
      name: 'cpView',
      crossPlatformFactoryValue: {
        class: 'foam.cross_platform.ui.widget.FObjectArrayView'
      }
    },
    {
      name: 'cpCloneProperty',
      androidValue: `
        (foam.cross_platform.GenericFunction) args -> {
          foam.cross_platform.FObject from = (foam.cross_platform.FObject) args[0];
          foam.cross_platform.FObject to = (foam.cross_platform.FObject) args[1];
          foam.cross_platform.Context x = (foam.cross_platform.Context) args[2];
          Object[] a = (Object[]) from.getProperty(getName());
          Object[] clone = a == null ? null : a.clone();
          if ( clone != null ) {
            for ( int i = 0 ; i < clone.length ; i++ ) {
              foam.cross_platform.FObject o = (foam.cross_platform.FObject) clone[i];
              clone[i] = o == null ? null : o.clone(x);
            }
          }
          to.setProperty(getName(), clone);
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
            var clone = from.getProperty(self!.getName()) as? [foam_cross_platform_FObject?];
            if ( clone != nil ) {
              for i in 0..<clone!.count {
                let o = clone![i];
                clone![i] = o?.clone(x);
              }
            }
            to.setProperty(self!.getName(), clone);
            return nil;
          })
          .build()
      `
    },
    {
      name: 'crossPlatformJsonParser',
      crossPlatformFactoryValue: {
        class: 'foam.cross_platform.deserialize.json.FObjectArrayParser',

      }
    },
  ],
  methods: [
    {
      name: 'getDeps',
      code: function (flagFilter, deps) {
        if (!flagFilter(this)) return;
        if (!this.of) return;
        deps[this.of] = true;
      }
    }
  ]
});