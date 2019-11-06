foam.LIB({
  name: 'foam.core.FObject',
  flags: ['swift'],
  methods: [
    function buildSwiftClass(cls) {
      cls = cls || foam.swift.SwiftClass.create();

      cls.name = this.model_.swiftName;
      cls.extends = this.model_.swiftExtends;
      cls.documentation = this.model_.documentation;

      var flagFilter = foam.util.flagFilter(['swift']);

      this.getAxioms()
        .filter(flagFilter)
        .filter(a => a.buildSwiftClass)
        .forEach(a => a.buildSwiftClass(cls, this));

      var genProperties = this.getAxiomsByClass(foam.core.Property)
        .filter(flagFilter)
        .filter(p => this.hasOwnAxiom(p.name));

      cls.method({
        override: !! cls.extends,
        visibility: 'public',
        type: 'Void',
        name: 'clearProperty',
        args: [
          { type: 'String', localName: 'name' }
        ],
        body: `
        switch name {
${
genProperties
  .map(a => `
          case "${a.name}":
            ${a.crossPlatformIsSetVarName} = false;
            var searchViewArgs: [Any?] = ["propertyChange", "${a.name}", nil];
            /*
            if ( hasListeners(${a.name}Args) ) {
              ${a.name}Args[2] = ${a.crossPlatformSlotGetterName}();
              pub(${a.name}Args);
            }
            */
            return;
  `)
  .join('\n')
}
          default:
            break;
        }
${cls.extends ? `
        super.clearProperty(name);
` : ''}
        `
      });

      return cls;
    }
  ]
});

foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines',
  name: 'FObjectJavaRefinement',
  refines: 'foam.core.FObject',
  flags: ['swift'],
  methods: [
    {
      name: 'asSwiftValue',
      code: function () {
        return 'nil';
        var body = `${this.cls_.id}.${this.model_.name}Builder(null) // TODO give context\n`;
        this.cls_.getAxiomsByClass(foam.core.Property)
          .filter(foam.util.flagFilter(['android']))
          .filter(p => this.hasOwnProperty(p.name))
          .forEach(p => {
            body += `  .${p.crossPlatformSetterName}(${p.androidFAsAndroidValue(this)})\n`;
          });
        body += `  .build()`;
        return body;
      },
    }
  ]
});
