foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines',
  name: 'MessageAxiomRefinement',
  refines: 'foam.i18n.MessageAxiom',
  methods: [
    function getMessages(flagFilter, map) {
      var id = `${this.forClass_}.${this.name}`;
      map[id] = foam.i18n.Message.create({
        id: id,
        description: this.description,
        translations: {en: this.message}
      });
      return map;
    }
  ]
});