foam.CLASS({
  package: 'foam.swift.refines',
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
            cls.field({
              visibility: 'public',
              static: true,
              type: self.id,
              name: v.name,
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
          }
          return cls
        };
      }
    }
  ]
});
