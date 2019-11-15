foam.LIB({
  name: 'foam.core.FObject',
  flags: ['android'],
  methods: [
    function buildAndroidClass(cls) {
      cls = cls || foam.java.Class.create();

      cls.name = this.model_.name;
      cls.package = this.model_.package;
      cls.abstract = this.model_.abstract;
      cls.documentation = this.model_.documentation;
      cls.extends = this.model_.crossPlatformExtends;

      var flagFilter = foam.util.flagFilter(['android']);

      var builder = foam.cross_platform.code_generation.android_java.Builder.create({
        clsName: cls.name,
        properties: this.getAxiomsByClass(foam.core.Property)
          .filter(flagFilter)
      });
      cls.classes.push(builder);
      builder.addBuilderMethod(cls);

      this.getAxioms()
        .filter(flagFilter)
        .filter(a => a.buildAndroidClass)
        .forEach(a => a.buildAndroidClass(cls, this));

      var genProperties = this.getAxiomsByClass(foam.core.Property)
        .filter(flagFilter)
        .filter(p => this.hasOwnAxiom(p.name));

      cls.method({
        visibility: 'public',
        type: 'void',
        name: 'clearProperty',
        args: [
          { type: 'String', name: 'name' }
        ],
        body: `
        switch(name) {
${
genProperties
  .map(a => `
          case "${a.name}":
            ${a.crossPlatformIsSetVarName} = false;
            Object[] ${a.name}Args = new Object[] { "propertyChange", "${a.name}", null };
            if ( hasListeners(${a.name}Args) ) {
              ${a.name}Args[2] = ${a.crossPlatformSlotGetterName}();
              pub(${a.name}Args);
            }
            ${a.androidExpression ? `
            if ( ${a.crossPlatformExpressionSubName} != null ) ${a.crossPlatformExpressionSubName}.detach();
            ${a.crossPlatformExpressionSubName} = null;
            ` : ``}
            return;
  `)
  .join('\n')
}
        }
${cls.extends ? `
        super.clearProperty(name);
` : ''}
        `
      });

      cls.method({
        visibility: 'public',
        type: 'Object',
        name: 'getProperty',
        args: [
          { type: 'String', name: 'name' }
        ],
        body: `
          switch(name) {
${
genProperties
  .map(a => `
            case "${a.name}":
              return ${a.crossPlatformGetterName}();
  `)
  .join('\n')
}
          }
          return ${cls.extends ? 'super.getProperty(name)' : 'null'};
        `
      });

      cls.method({
        visibility: 'public',
        type: 'foam.core.SlotInterface',
        name: 'getSlot',
        args: [
          { type: 'String', name: 'name' }
        ],
        body: `
          if ( name.contains("$") ) {
            String[] names = name.split("\\\\$");
            foam.core.SlotInterface slot = getSlot(names[0]);
            for ( int i = 1 ; i < names.length ; i++ ) {
              slot = slot.dot(names[i]);
            }
            return slot;
          }

          switch(name) {
${
genProperties
  .map(a => `
            case "${a.name}":
              return ${a.crossPlatformSlotGetterName}();
  `)
  .join('\n')
}
          }
          return ${cls.extends ? 'super.getSlot(name)' : 'null'};
        `
      });

      cls.method({
        visibility: 'public',
        type: 'boolean',
        name: 'hasPropertySet',
        args: [
          { type: 'String', name: 'name' }
        ],
        body: `
          switch(name) {
${
genProperties
  .map(a => `
            case "${a.name}":
              return ${a.crossPlatformIsSetVarName};
  `)
  .join('\n')
}
          }
${cls.extends ? `
          return super.hasPropertySet(name);
` : `
          return false;
`}
        `
      });

      cls.method({
        visibility: 'public',
        type: 'void',
        name: 'setProperty',
        args: [
          { type: 'String', name: 'name' },
          { type: 'Object', name: 'value' }
        ],
        body: `
          switch(name) {
${
genProperties
  .map(a => `
            case "${a.name}":
              ${a.crossPlatformSetterName}(value);
              return;
  `)
  .join('\n')
}
          }
${cls.extends ? `
          super.setProperty(name, value);
` : ''}
        `
      });

      cls.method({
        visibility: 'protected',
        type: cls.name,
        name: '',
        body: ''
      });

      cls.method({
        visibility: 'public',
        type: 'foam.cross_platform.FoamClass',
        name: 'getCls_',
        body: 'return CLS_();'
      });

      this.addAndroidStaticClassInfo(cls);

      var tests = this
        .getOwnAxiomsByClass(foam.cross_platform.code_generation.refines.TestAxiom);
      if ( tests.length ) {
        var testCls = foam.java.Class.create({
          package: 'tests.' + cls.package,
          name: cls.name + 'Tests',
          imports: [
            this.id,
            'static org.junit.Assert.*',
            'org.junit.Test',
          ]
        });
        testCls.method({
          name: 'getSubX',
          type: 'foam.cross_platform.Context',
          body: 'return null;'
        });
        testCls.method({
          type: this.name + '.' + this.name + 'Builder_',
          name: this.name + '_create',
          body: `return ${this.name}.${this.name}Builder(getSubX());`
        });
        tests.forEach(t => t.addToAndroidTestClass(testCls, this));
        cls = foam.swift.ArraySwiftSource.create({
          sources: [cls, testCls]
        });
      }

      return cls;
    },
    function addAndroidStaticClassInfo(cls) {
      var flagFilter = foam.util.flagFilter(['android']);
      var cInfo = this.toCrossPlatformClass(flagFilter);
      cls.method({
        visibility: 'public',
        static: true,
        type: 'foam.cross_platform.FoamClass',
        name: 'CLS_',
        body: `
          if ( initClassInfo_ == null ) {
            initClassInfo_ = foam.cross_platform.FoamClass
              .FoamClassBuilder(null)
              .build();
            ${cInfo.cls_.getAxiomsByClass(foam.core.Property)
                .filter(flagFilter)
                .map(a => `
            initClassInfo_.${a.crossPlatformSetterName}(${foam.android.tools.asAndroidValue(cInfo[a.name])});
                `)
                .join('\n')
            }
          }
          return initClassInfo_;
        `
      });
      cls.field({
        visibility: 'private',
        static: true,
        type: 'foam.cross_platform.FoamClass',
        name: 'initClassInfo_',
      });
    }
  ]
});

foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines',
  name: 'FObjectJavaRefinement',
  refines: 'foam.core.FObject',
  flags: ['android'],
  methods: [
    {
      name: 'asAndroidValue',
      code: function() {
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
