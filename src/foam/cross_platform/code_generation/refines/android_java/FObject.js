foam.LIB({
  name: 'foam.core.FObject',
  flags: ['android'],
  methods: [
    function buildAndroidResources(resources, parentCls) {
      var flagFilter = foam.util.flagFilter(['android']);
      this.getAxioms()
        .filter(flagFilter)
        .filter(a => a.buildAndroidResources)
        .forEach(a => a.buildAndroidResources(resources, this));
      resources.sources.push(this.buildAndroidClass());
      return resources;
    },
    function buildAndroidClass(cls) {
      cls = cls || foam.java.Class.create();

      cls.name = this.model_.name;
      cls.package = this.model_.package;
      cls.abstract = this.model_.abstract;
      cls.documentation = this.model_.documentation;
      cls.extends = this.model_.crossPlatformExtends;
      cls.implements = this.model_.androidImplements;

      var flagFilter = foam.util.flagFilter(['android']);

      if ( ! this.model_.abstract ) {
        var builder = foam.cross_platform.code_generation.android_java.BuilderClass.create({
          clsName: cls.name,
          properties: this.getAxiomsByClass(foam.core.Property)
            .filter(flagFilter)
        });
        cls.classes.push(builder);
        cls.method({
          visibility: 'public',
          static: true,
          type: builder.name,
          name: cls.name + 'Builder',
          args: [
            { type: 'foam.cross_platform.Context', name: 'x' }
          ],
          body: `
            return ${builder.name}.getInstance(x);
          `
        });
      }

      this.getAxioms()
        .filter(flagFilter)
        .filter(a => a.buildAndroidClass)
        .forEach(a => a.buildAndroidClass(cls, this));

      var genAxioms = this.getOwnAxioms()
        .filter(flagFilter);

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
genAxioms
  .filter(a => a.androidClearProperty)
  .map(a => `
          case "${a.name}":
            ${a.androidClearProperty}
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
genAxioms
  .filter(a => a.androidGetProperty)
  .map(a => `
          case "${a.name}":
            ${a.androidGetProperty}
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
genAxioms
  .filter(a => a.androidGetSlot)
  .map(a => `
          case "${a.name}":
            ${a.androidGetSlot}
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
genAxioms
  .filter(a => a.androidHasPropertySet)
  .map(a => `
          case "${a.name}":
            ${a.androidHasPropertySet}
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
genAxioms
  .filter(a => a.androidSetPropertyMap)
  .map(a => Object.keys(a.androidSetPropertyMap).map(k => `
          case "${k}":
            ${a.androidSetPropertyMap[k]}
            return;
  `))
  .flat()
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

      return cls;
    },
    function androidBuilderString(cls) {
      return this.model_.abstract ? '' : `
        initClassInfo_.setBuilderFactory_(new foam.cross_platform.GenericFunction() {
          public Object executeFunction(Object[] args) {
            return ${cls.name}Builder_.getInstance((foam.cross_platform.Context) args[0]);
          }
        });
      `;
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
            foam.cross_platform.Context x = foam.cross_platform.Context.GLOBAL();
            initClassInfo_.setI18nLabel(x.getLocalizedString("${this.id.replace(/\./g, '_')}_Label"));
            ${this.model_.description ? `
            initClassInfo_.setI18nDescription(x.getLocalizedString("${this.id.replace(/\./g, '_')}_Description"));
            ` : ''}
            initClassInfo_.setI18nPlural(x.getLocalizedString("${this.id.replace(/\./g, '_')}_Plural"));
            ${this.androidBuilderString(cls)}
            ${cInfo.cls_.getAxiomsByClass(foam.core.Property)
                .filter(flagFilter)
                .filter(p => cInfo.hasOwnProperty(p.name))
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
      code: function(x) {
        x = x || null;
        var body = `${this.cls_.id}.${this.model_.name}Builder(${x})\n`;
        this.cls_.getAxiomsByClass(foam.core.Property)
          .filter(foam.util.flagFilter(['android']))
          .filter(p => this.hasOwnProperty(p.name))
          .forEach(p => {
            body += `  .${p.crossPlatformSetterName}(${p.androidFAsAndroidValue(this, p.javaType, x)})\n`;
          });
        body += `  .build()`;
        return body;
      },
    }
  ]
});
