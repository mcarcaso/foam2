foam.LIB({
  name: 'foam',
  flags: ['swift', 'android'],
  methods: [
    function cpTemplate(value, language) {
      var args;
      switch(language) {
        case 'swift':
          args = {
            v: foam.swift.asSwiftValue,
            detachable: function(code) {
              return `
AnonymousDetachable_create()
  .setDetachFn({[weak self] () -> Void in
    if self == nil { return }
    ${code}
    self.setDetachFn(nil);
  })
  .build()
              `;
            },
            listener: function(code) {
              return `
foam_swift_AnonymousListener.foam_swift_AnonymousListenerBuilder(nil)
  .setFn({[weak self] (sub: foam_core_Detachable?, args: [Any?]?) -> Void in
    if self == nil { return }
    ${code}
  })
  .build()
              `;
            },
            fn: function(code) {
              return `
foam_swift_AnonymousGenericFunction.foam_swift_AnonymousGenericFunctionBuilder(nil)
  .setFn({[weak self] (args: [Any?]?) -> Any? in
    if self == nil { return nil }
    ${code}
  })
  .build()
              `;
            }
          };
          break;
        case 'android':
          args = {
            v: foam.android.tools.asAndroidValue,
            detachable: function(code) {
              return `
new foam.core.Detachable() {
  public void detach() {
    ${code}
  }
}
              `;
            },
            listener: function(code) {
              return `
new foam.cross_platform.Listener() {
  public void executeListener(foam.core.Detachable sub, Object[] args) {
    ${code}
  }
}
              `;
            },
            fn: function(code) {
              return `
new foam.cross_platform.GenericFunction() {
  public Object executeFunction(Object[] args) {
    ${code}
  }
}
              `;
            }
          };
          break;
      }

      var t = foam.templates.TemplateUtil.create().lazyCompile(
        value, 'cpCode', Object.keys(args));
      return t.apply(t, Object.values(args));
    }
  ]
});
