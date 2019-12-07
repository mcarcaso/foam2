foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines.ios_swift',
  name: 'ActionRefine',
  refines: 'foam.core.Action',
  flags: ['swift'],
  properties: [
    {
      class: 'StringProperty',
      name: 'swiftGetProperty',
      expression: function(forClass_, name, crossPlatformFnGetterName) {
        return foam.lookup(forClass_).getSuperAxiomByName(name) ? '' :
          `return ${crossPlatformFnGetterName}();`
      }
    },
    {
      class: 'StringProperty',
      name: 'swiftCode',
      value: 'fatalError()'
    },
    {
      class: 'StringProperty',
      name: 'swiftIsAvailable',
      value: 'return true;'
    },
  ],
  methods: [
    function buildSwiftClass(cls, parentCls) {
      var superAxiom = parentCls.getSuperAxiomByName(this.name);
      if ( superAxiom === this ) return;

      cls.method({
        override: this.swiftIsOverride(parentCls),
        visibility: 'public',
        name: this.name,
        body: foam.cpTemplate(this.swiftCode, 'swift')
      });

      if ( ! superAxiom ) {
        cls.field({
          visibility: 'private',
          type: foam.cross_platform.GenericFunction.model_.swiftName + '?',
          name: this.crossPlatformFnVarName,
        });
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
                  self!.\`${this.name}\`();
                  return nil;
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

      // If no parentMethod is found, check if one exists on the
      // foam.cross_platform.AbstractFObject because the parentCls will
      // ultimately extend that.
      var parentMethod = foam.cross_platform.AbstractFObject
        .getOwnAxioms()
        .find(a => a.name == this.name);

      if ( parentMethod ) return true;

      parentMethod = parentCls.getSuperAxiomByName(this.name);

      if ( parentMethod && parentMethod.forClass_ == 'foam.core.FObject' ) {
        // If the parentMethod comes from foam.core.FObject we ignore it because
        // everything generated extends foam.cross_platform.AbstractFObject and
        // it doesn't generate methods from foam.core.FObject.
        parentMethod = null;
      }

      return parentMethod;
    }
  ],
});
