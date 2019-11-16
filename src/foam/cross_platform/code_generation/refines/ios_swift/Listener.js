foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines.ios_swift',
  name: 'ListenerRefinement',
  refines: 'foam.core.Listener',
  flags: ['swift'],
  methods: [
    function buildSwiftClass(cls, parentCls) {
      if ( ! parentCls.hasOwnAxiom(this.name) ) return;
      this.SUPER(cls, parentCls);
      var fieldName = this.crossPlatformListenerName + '_var';
      cls.field({
        visibility: 'private',
        type: foam.cross_platform.Listener.model_.swiftName + '?',
        name: fieldName
      });
      cls.method({
        override: this.swiftIsOverride(parentCls),
        visibility: 'public',
        type: foam.cross_platform.Listener.model_.swiftName,
        name: this.crossPlatformListenerName,
        body: `
          if ${fieldName} == nil {
            ${fieldName} = AnonymousListener_create()
              .setFn({ [weak self] (sub: foam_core_Detachable?, args: [Any?]?) -> Void in
                self?.${this.name}(sub, args);
              })
              .build();
          }
          return ${fieldName}!;
        `
      });
    }
  ]
});
