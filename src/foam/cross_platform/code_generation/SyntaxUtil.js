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
  .setFn({() -> Void in
    ${code}
  })
  .build()
              `;
            },
            listener: function(code) {
              return `
AnonymousListener_create()
  .setFn({(sub: foam_core_Detachable?, args: [Any?]?) -> Void in
    ${code}
  })
  .build()
              `;
            },
            fn: function(code) {
              return `
AnonymousGenericFunction_create()
  .setFn({(args: [Any?]?) -> Any? in
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
