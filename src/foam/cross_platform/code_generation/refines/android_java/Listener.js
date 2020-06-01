foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines.android_java',
  name: 'ListenerRefinement',
  refines: 'foam.core.Listener',
  flags: ['android'],
  methods: [
    function buildAndroidClass(cls, parentCls) {
      if ( ! parentCls.hasOwnAxiom(this.name) ) return;
      this.SUPER(cls, parentCls);

      if ( this.isFramed ) {
        cls.field({
          type: 'Object[]',
          name: this.name + '_framedArgs',
          initializer: 'null'
        });
        var framedMethod = cls.getMethod(this.name);
        framedMethod.body = `
          if ( ${this.name}_framedArgs == null ) {
            ${this.name}_framedArgs = new Object[] { sub, args };
            new android.os.Handler(android.os.Looper.getMainLooper()).post(() -> {
              foam.core.Detachable s = (foam.core.Detachable) ${this.name}_framedArgs[0];
              Object[] a = (Object[]) ${this.name}_framedArgs[1];
              ${this.name}_framedArgs = null;
              ${this.name}_private(s, a);
            });
          } else {
            ${this.name}_framedArgs[0] = sub;
            ${this.name}_framedArgs[1] = args;
          }
        `;

        var method = framedMethod.clone();
        method.name = method.name + '_private';
        method.body = this.androidCode;
        cls.method(method);
      }

      var fieldName = this.crossPlatformListenerName + '_var';
      cls.field({
        visibility: 'private',
        type: 'foam.cross_platform.Listener',
        name: fieldName
      });
      cls.method({
        visibility: 'public',
        type: 'foam.cross_platform.Listener',
        name: this.crossPlatformListenerName,
        body: `
          if ( ${fieldName} == null ) {
            final ${cls.name} obj = this;
            ${fieldName} = new foam.cross_platform.Listener() {
              public void executeListener(foam.core.Detachable sub, Object[] args) {
                obj.${this.name}(sub, args);
              }
            };
          }
          return ${fieldName};
        `
      });
    }
  ]
});
