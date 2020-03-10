foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines',
  name: 'MessageAxiomRefinement',
  refines: 'foam.i18n.MessageAxiom',
  properties: [
    {
      class: 'StringProperty',
      name: 'id',
      factory: function() {
        return `${this.forClass_}.${this.name}`;
      }
    }
  ],
  methods: [
    {
      name: 'buildSwiftClass',
      flags: ['swift'],
      code: function(cls, parentCls) {
        if (!parentCls.hasOwnAxiom(this.name)) return;
        cls.field({
          visibility: 'public',
          static: true,
          final: true,
          type: 'String',
          name: this.name,
          defaultValue: `
            NSLocalizedString(
              ${foam.swift.asSwiftValue(this.message)},
              comment: ${foam.swift.asSwiftValue(this.description)})`
        })
        return cls;
      }
    },
    {
      name: 'buildAndroidClass',
      flags: ['android'],
      code: function(cls, parentCls) {
        if (!parentCls.hasOwnAxiom(this.name)) return;
        cls.field({
          visibility: 'public',
          static: true,
          final: true,
          type: 'String',
          name: this.name,
          initializer: `
            foam.cross_platform.Context.GLOBAL()
              .getLocalizedString("${this.id.replace(/\./g, '_')}")
          `
        })
        return cls;
      }
    },
    function getMessages(flagFilter, map) {
      map[this.id] = foam.i18n.Message.create({
        id: this.id,
        description: this.description,
        translations: {en: this.message}
      });
      return map;
    }
  ]
});