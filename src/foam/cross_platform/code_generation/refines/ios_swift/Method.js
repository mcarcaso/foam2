foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines.ios_swift',
  name: 'AbstractMethodJavaRefinement',
  refines: 'foam.core.AbstractMethod',
  flags: ['swift'],
  requires: [
    'foam.core.internal.InterfaceMethod'
  ],
  properties: [
    {
      class: 'foam.swift.SwiftTypeProperty',
      expression: function(type, swiftOptional) {
        return foam.swift.toSwiftType(type, swiftOptional);
      },
    },
    {
      class: 'StringArrayProperty',
      name: 'swiftAnnotations'
    },
    {
      class: 'BooleanProperty',
      name: 'swiftOptional',
      value: true
    },
    {
      class: 'StringProperty',
      name: 'swiftCode',
      expression: function(crossPlatformCode) {
        return crossPlatformCode || 'fatalError()';
      }
    },
    {
      class: 'StringProperty',
      name: 'swiftGetProperty',
      expression: function(forClass_, name, crossPlatformFnGetterName, crossPlatformIsStatic) {
        return foam.lookup(forClass_).getSuperAxiomByName(name) ||
               crossPlatformIsStatic ? '' :
          `return ${crossPlatformFnGetterName}();`
      }
    },
  ],
  methods: [
    function buildSwiftClass(cls, parentCls) {
      var superAxiom = parentCls.getSuperAxiomByName(this.name);
      if ( superAxiom === this ) return;

      cls.method({
        override: this.swiftIsOverride(parentCls),
        visibility: 'public',
        static: this.crossPlatformIsStatic,
        type: this.swiftType,
        name: this.name,
        args: this.args.map(a => a.toSwiftArg()),
        annotations: this.swiftAnnotations,
        body: foam.cpTemplate(this.swiftCode, 'swift')
      });

      if ( ! superAxiom &&
           ! this.crossPlatformIsStatic &&
           ! foam.core.internal.InterfaceMethod.isInstance(this) ) {
        cls.field({
          visibility: 'private',
          type: foam.cross_platform.GenericFunction.model_.swiftName + '?',
          name: this.crossPlatformFnVarName,
        });
        var methodCall =
          `self!.\`${this.name}\`(${this.args.map(a => a.name).join(', ')})`;
        cls.method({
          override: this.swiftIsOverride(parentCls),
          visibility: 'public',
          type: foam.cross_platform.GenericFunction.model_.swiftName + '?',
          name: this.crossPlatformFnGetterName,
          body: `
            if ${this.crossPlatformFnVarName} == nil {
              ${this.crossPlatformFnVarName} = AnonymousGenericFunction_create()
                .setFn({[weak self] (_fnArgs_: [Any?]?) -> Any? in
                  if self == nil { return nil }
                  ${this.args.map((a, i) => `
                  let ${a.name} = _fnArgs_![${i}]${a.swiftType != 'Any?' ? ` as! ${a.swiftType}` : ''};
                  `).join('\n')}
                  ${this.swiftType == 'Void' ? `
                  ${methodCall};
                  return nil;
                  ` : `
                  return ${methodCall};
                  `}
                })
                .build();
            }
            return ${this.crossPlatformFnVarName};
          `
        });
      }

      return cls;
    },
    function swiftIsOverride(parentCls) {
      if ( parentCls.id == 'foam.cross_platform.AbstractFObject' ) {
        // AbstractFObject is the base class for everything so it doesn't
        // override anything.
        return false;
      }

      var hasSameSignature = parentMethod => {
        return parentMethod &&
          parentMethod.swiftType == this.swiftType &&
          foam.util.compare(parentMethod.args, this.args) == 0 &&
          parentMethod.crossPlatformIsStatic == this.crossPlatformIsStatic;
      };

      // If no parentMethod is found, check if one exists on the
      // foam.cross_platform.AbstractFObject because the parentCls will
      // ultimately extend that.
      var parentMethod = foam.cross_platform.AbstractFObject
        .getOwnAxioms()
        .find(a => a.name == this.name);

      if ( hasSameSignature(parentMethod) ) return true;

      var parentMethod = parentCls.getSuperClass().getAxiomByName(this.name);

      if ( parentMethod && parentMethod.forClass_ == 'foam.core.FObject' ) {
        // If the parentMethod comes from foam.core.FObject we ignore it because
        // everything generated extends foam.cross_platform.AbstractFObject and
        // it doesn't generate methods from foam.core.FObject.
        parentMethod = null;
      }

      return hasSameSignature(parentMethod);
    }
  ],
});

foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines.ios_swift',
  name: 'ArgumentJavaRefinement',
  refines: 'foam.core.Argument',
  flags: ['swift'],
  requires: [
    'foam.swift.Argument',
  ],
  properties: [
    {
      class: 'StringProperty',
      name: 'swiftLocalName',
      expression: function(name) { return name; },
    },
    {
      class: 'StringProperty',
      name: 'swiftExternalName',
      value: '_',
    },
    {
      class: 'foam.swift.SwiftTypeProperty',
      expression: function(type) {
        return foam.swift.toSwiftType(type, true);
      }
    }
  ],
  methods: [
    function toSwiftArg() {
      var arg = this.Argument.create({
        localName: this.swiftLocalName,
        externalName: this.swiftExternalName,
        type: this.swiftType,
      });
      if (this.swiftDefaultValue) arg.defaultValue = this.swiftDefaultValue;
      return arg;
    },
  ]
});

foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines.ios_swift',
  name: 'InterfaceMethodRefine',
  refines: 'foam.core.internal.InterfaceMethod',
  flags: ['swift'],
  methods: [
    function buildSwiftClass(cls, parentCls) {
      this.SUPER(cls, parentCls);
      // If the model doesn't implement this method, fill it in with a
      // fatalError as the implementation. This is needed as a means to provide
      // abstract classes to swift.
      if ( parentCls.model_.abstract &&
           parentCls.getSuperClass().getAxiomByName(this.name) !== this &&
           parentCls.getAxiomByName(this.name) === this ) {
        cls.method({
          override: this.swiftIsOverride(parentCls),
          visibility: 'public',
          static: this.crossPlatformIsStatic,
          type: this.swiftType,
          name: this.name,
          args: this.args.map(a => a.toSwiftArg()),
          body: 'fatalError()'
        });
      }
    }
  ],
});
