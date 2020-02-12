foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines.ios_swift',
  name: 'ListenerRefinement',
  refines: 'foam.core.Listener',
  flags: ['swift'],
  methods: [
    function buildSwiftClass(cls, parentCls) {
      if ( ! parentCls.hasOwnAxiom(this.name) ) return;
      this.SUPER(cls, parentCls);

      if ( this.isFramed ) {
        cls.field({
          type: '[Any?]?',
          name: this.name + '_framedArgs',
          initializer: 'nil'
        });
        var framedMethod = cls.getMethod(this.name);
        framedMethod.body = `
          if ( ${this.name}_framedArgs == nil ) {
            ${this.name}_framedArgs = [sub, args];
            DispatchQueue.main.async {
              let s = self.${this.name}_framedArgs![0] as? foam_core_Detachable;
              let a = self.${this.name}_framedArgs![1] as? [Any?];
              self.${this.name}_framedArgs = nil;
              self.${this.name}_private(s, a);
            }
          } else {
            ${this.name}_framedArgs![0] = sub;
            ${this.name}_framedArgs![1] = args;
          }
        `;

        var method = framedMethod.clone();
        method.name = method.name + '_private';
        method.body = this.swiftCode;
        cls.method(method);
      }

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
