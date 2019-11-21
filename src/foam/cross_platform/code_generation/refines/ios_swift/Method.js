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
      expression: function(type) {
        return foam.swift.toSwiftType(type, true);
      },
    },
    {
      class: 'StringArrayProperty',
      name: 'swiftAnnotations'
    },
    {
      class: 'StringProperty',
      name: 'swiftCode',
      value: 'fatalError()'
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

      var parentMethod = parentCls.getSuperAxiomByName(this.name);

      if ( this.InterfaceMethod.isInstance(parentMethod) ) {
        return false;
      }

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
