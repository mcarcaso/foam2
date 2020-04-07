foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines',
  name: 'AbstractEnumSwiftRefinement',
  refines: 'foam.core.AbstractEnum',
  flags: ['android'],
  axioms: [
    {
      class: 'foam.core.AnonymousAxiom',
      installInClass: function(cls) {
        var buildAndroidClass = cls.buildAndroidClass;
        cls.buildAndroidClass = function() {
          var self = this;
          var cls = buildAndroidClass.call(self);
          self.VALUES.forEach(function(v) {
            cls.method({
              visibility: 'private',
              static: true,
              type: self.id,
              name: v.name + '_',
              body: `
                foam.cross_platform.Context x = foam.cross_platform.Context.GLOBAL();
                ${self.id} v = ${foam.core.FObject.getAxiomByName('asAndroidValue').code.call(v)};
                v.setI18nLabel(x.getLocalizedString("${self.id.replace(/\./g, '_')}_${v.name}_Label"));
                return v;
              `
            });
            cls.field({
              visibility: 'public',
              static: true,
              type: self.id,
              name: v.name,
              initializer: `${v.name}_()`
            });
          });
          if ( this.model_.id != 'foam.core.AbstractEnum' ) {
            cls.method({
              visibility: 'public',
              static: true,
              type: self.id,
              name: 'fromOrdinal',
              args: [
                { type: 'int', name: 'o' }
              ],
              body: `
                switch(o) {
${self.VALUES.map(v => `
                  case ${v.ordinal}:
                    return ${v.name};
`).join('')}
                }
                return null;
              `,
            });
            cls.field({
              visibility: 'public',
              static: true,
              type: `${self.id}[]`,
              name: 'VALUES',
              initializer: `
                new ${self.id}[] {
                  ${self.VALUES.map(v => v.name).join(', ')}
                }
              `
            });
          }
          return cls
        };
      }
    }
  ],
  methods: [
    function asAndroidValue() {
      return this.cls_.id + '.' + this.name;
    }
  ]
});
