foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines',
  name: 'AbstractEnumSwiftRefinement',
  refines: 'foam.core.AbstractEnum',
  flags: ['swift'],
  axioms: [
    {
      class: 'foam.core.AnonymousAxiom',
      installInClass: function(cls) {
        var buildSwiftClass = cls.buildSwiftClass;
        cls.buildSwiftClass = function() {
          var self = this;
          var cls = buildSwiftClass.call(self);
          self.VALUES.forEach(function(v) {
            cls.field({
              visibility: 'public',
              static: true,
              type: self.model_.swiftName,
              name: v.name,
              defaultValue: foam.core.FObject.getAxiomByName('asSwiftValue').code.call(v)
            });
          });
          if ( this.model_.id != 'foam.core.AbstractEnum' ) {
            cls.method({
              visibility: 'public',
              static: true,
              type: self.model_.swiftName + '?',
              name: 'fromOrdinal',
              args: [
                { type: 'Int', localName: 'o' }
              ],
              body: `
                switch o {
${self.VALUES.map(v => `
                  case ${v.ordinal}:
                    return ${v.name};
`).join('')}
                  default:
                    break;
                }
                return nil;
              `,
            });
          }
          return cls
        };
      }
    }
  ],
  methods: [
    function asSwiftValue() {
      return this.model_.swiftName + '.' + this.name;
    }
  ]
});