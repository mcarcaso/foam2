foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines',
  name: 'EnumPropertyRefine',
  refines: 'foam.core.Enum',
  methods: [
    {
      name: 'getDeps',
      code: function(flagFilter, deps) {
        if ( ! flagFilter(this) ) return;
        if ( ! this.of ) return;
        deps[this.of.id] = true;
      }
    }
  ]
});

foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines',
  name: 'AbstractEnumRefine',
  refines: 'foam.core.AbstractEnum',
  properties: [
    {
      class: 'StringProperty',
      name: 'i18nLabel'
    },
    {
      class: 'StringProperty',
      name: 'i18nLabelDescription',
      expression: function(name) {
        return `Label for the ${this.cls_.id}.${name} enum`
      }
    },
  ],
  methods: [
    {
      name: 'toString',
      androidCode: `
        return super.toString();
      `
    },
  ],
  axioms: [
    {
      class: 'foam.core.AnonymousAxiom',
      installInClass: function (cls) {
        cls.getMessages = function(flagFilter, map) {
          this.VALUES.forEach(v => {
            var id = `${this.id}.${v.name}.Label`;
            map[id] = foam.i18n.Message.create({
              id: id,
              description: v.i18nLabelDescription,
              translations: { en: v.label }
            })
          });
          return map;
        }
        return cls;
      }
    }
  ]
});

foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines',
  name: 'EnumValueAxiom',
  refines: 'foam.core.internal.EnumValueAxiom',
  properties: [
    {
      name: 'name',
      androidGetter: `
        return getDefinition().get("name");
      `,
      swiftGetter: `
        return getDefinition()!["name"]!;
      `
    }
  ]
});
