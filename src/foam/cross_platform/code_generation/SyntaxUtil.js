foam.LIB({
  name: 'foam',
  flags: ['swift', 'android'],
  methods: [
    function cpListener(code, language) {
      switch(language) {
        case 'swift':
          return `
AnonymousListener_create()
  .setFn({(sub: foam_core_Detachable?, args: [Any?]?) -> Void in
    ${code}
  })
  .build()
          `;
        case 'android':
          return `
new foam.cross_platform.Listener() {
  public void executeListener(foam.core.Detachable sub, Object[] args) {
    ${code}
  }
}
          `;
      }
    },
    function cpFn(code, language) {
      switch(language) {
        case 'swift':
          return `
AnonymousGenericFunction_create()
  .setFn({(args: [Any?]?) -> Any? in
    ${code}
  })
  .build()
          `;
        case 'android':
          return `
new foam.cross_platform.GenericFunction() {
  public Object executeFunction(Object[] args) {
    ${code}
  }
}
          `;
      }
    }
  ]
});
