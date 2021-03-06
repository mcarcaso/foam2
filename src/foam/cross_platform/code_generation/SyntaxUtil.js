foam.LIB({
  name: 'foam',
  flags: ['swift', 'android'],
  methods: [
    function cpTemplate(value, language) {
      var args;
      switch(language) {
        case 'swift':
          args = {
            "nul": function() { return 'nil' },
            assertEqual: function(expected, actual, msg) {
              return `
XCTAssertEqual(${expected}, ${actual}${msg ? `, ${msg}` : ''});
              `
            },
            "vr": function(type, name, value, args) {
              args = args || {};
              return `
${args.mutable ? 'var' : 'let'} ${name}: ${foam.core.type.toType(type).toSwiftType(args.required)} = ${value};
              `
            },
            v: foam.swift.asSwiftValue,
            detachable: function(code) {
              return `
AnonymousDetachable_create()
  .setDetachFn({[weak self] () -> Void in
    if self == nil { return }
    ${code}
    self = nil;
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
            fn: function(code, argsName) {
              return `
foam_swift_AnonymousGenericFunction.foam_swift_AnonymousGenericFunctionBuilder(nil)
  .setFn({[weak self] (${argsName || 'args'}: [Any?]?) -> Any? in
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
            "nul": function() { return 'null' },
            assertEqual: function(expected, actual, msg) {
              return `
assertEquals(${expected}, ${actual}${msg ? `, ${msg}` : ''});
              `
            },
            "vr": function(type, name, value, args) {
              args = args || {};
              return `
${type} ${name} = ${value};
              `
            },
            v: foam.android.tools.asAndroidValue,
            detachable: function(code) {
              return `
(foam.core.Detachable) () -> {
  ${code}
}
              `;
            },
            listener: function(code) {
              return `
(foam.cross_platform.Listener) (sub, args) -> {
  ${code}
}
              `;
            },
            fn: function(code, argsName) {
              return `
(foam.cross_platform.GenericFunction) (${argsName || 'args'}) -> {
  ${code}
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
