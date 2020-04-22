foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines',
  name: 'ModelJavaRefinement',
  refines: 'foam.core.Model',
  properties: [
    {
      class: 'StringProperty',
      name: 'crossPlatformExtends',
      expression: function(extends$) {
        var e = extends$ == 'FObject' ? 'foam.cross_platform.AbstractFObject' : extends$;
        if ( e.indexOf('.') == -1 ) e = 'foam.core.' + e;
        return e;
      }
    },
    {
      class: 'ClassProperty',
      name: 'crossPlatformParentClass',
      expression: function(extends$) {
        if ( extends$ == 'FObject' ) return foam.cross_platform.AbstractFObject;
        return foam.lookup(extends$);
      }
    },
    {
      class: 'StringProperty',
      name: 'i18nLabelDescription',
      expression: function (id) {
        return `Label for the ${id} model`;
      }
    },
    {
      class: 'StringProperty',
      name: 'i18nPluralDescription',
      expression: function (id) {
        return `Pluralized label for the ${id} model`;
      }
    },
    {
      class: 'StringProperty',
      name: 'i18nDescriptionDescription',
      expression: function (id) {
        return `The description of the ${id} model`;
      }
    },

  ],
  methods: [
    {
      name: 'getMessages',
      flags: ['js'],
      code: function getMessages(flagFilter, map) {
        var id = this.id;
        var lid = `${id}.Label`;
        map[lid] = foam.i18n.Message.create({
          id: lid,
          description: this.i18nLabelDescription,
          translations: { en: this.label }
        });
        var pid = `${id}.Plural`;
        map[pid] = foam.i18n.Message.create({
          id: pid,
          description: this.i18nPluralDescription,
          translations: { en: this.plural }
        });
        var did = `${id}.Description`;
        map[did] = foam.i18n.Message.create({
          id: did,
          description: this.i18nDescriptionDescription,
          translations: { en: this.description }
        });
        return map;
      },
    },
    {
      name: 'getDeps',
      code: function(flagFilter, deps) {
        if ( this.extends != 'FObject' ) {
          deps[this.extends] = true;
          foam.lookup(this.extends).model_.getDeps(flagFilter, deps);
        }
      }
    }
  ]
});
