foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines',
  name: 'ActionRefine',
  refines: 'foam.core.Action',
  requires: [
    'foam.cross_platform.ui.widget.ActionButton'
  ],
  properties: [
    {
      class: 'StringProperty',
      name: 'i18nLabel'
    },
    {
      class: 'StringProperty',
      name: 'i18nLabelDescription',
      expression: function (forClass_, name) {
        return `Label for the ${forClass_}.${name} action`;
      }
    },
    {
      class: 'StringProperty',
      name: 'crossPlatformFnVarName',
      expression: function(name) {
        return `${name}_fn_`;
      }
    },
    {
      class: 'StringArrayProperty',
      name: 'isEnabledExpressionArgs',
    },
    {
      class: 'FunctionProperty',
      name: 'isEnabledSlotInitializer'
    },
    {
      class: 'StringArrayProperty',
      name: 'isAvailableExpressionArgs',
    },
    {
      class: 'FunctionProperty',
      name: 'isAvailableSlotInitializer'
    },
    {
      class: 'StringProperty',
      name: 'crossPlatformCode',
    },
    {
      class: 'StringProperty',
      name: 'crossPlatformFnGetterName',
      expression: function(name) {
        return `${name}_fn`;
      }
    },
    {
      class: 'StringProperty',
      name: 'crossPlatformAxiomName',
      expression: function(name) {
        return foam.String.constantize(name);
      }
    },
    {
      class: 'StringProperty',
      name: 'crossPlatformPrivateAxiom',
      expression: function(crossPlatformAxiomName) {
        return crossPlatformAxiomName + '_var_';
      }
    },
  ],
  methods: [
    {
      name: 'createIsEnabledSlot',
      type: 'foam.core.Slot',
      args: [
        { type: 'FObject', name: 'o' },
      ],
      androidCode: `
        return (foam.core.Slot) getIsEnabledSlotInitializer()
          .executeFunction(new Object[] {o});
      `,
      swiftCode: `
        return getIsEnabledSlotInitializer()!.executeFunction([o]) as? foam_core_Slot
      `,
    },
    {
      name: 'createIsAvailableSlot',
      type: 'foam.core.Slot',
      args: [
        { type: 'Context', name: 'x' },
        { type: 'FObject', name: 'o' },
      ],
      androidCode: `
        return (foam.core.Slot) getIsAvailableSlotInitializer()
          .executeFunction(new Object[] {x, o});
      `,
      swiftCode: `
        return getIsAvailableSlotInitializer()!.executeFunction([x, o]) as? foam_core_Slot
      `,
    },
    {
      name: 'call',
      type: 'Any',
      args: [
        { type: 'FObject', name: 'obj' },
        { type: 'Any[]', name: 'args' }
      ],
      androidCode: `
        return ((foam.cross_platform.GenericFunction) obj.getProperty(getName()))
          .executeFunction(args);
      `,
      swiftCode: `
        return (obj!.getProperty(getName()) as! foam_cross_platform_GenericFunction)
          .executeFunction(args);
      `,
    },
    function getMessages(flagFilter, map) {
      var id = `${this.forClass_}.${this.name}`;
      var lid = `${id}.Label`;
      map[lid] = foam.i18n.Message.create({
        id: lid,
        description: `Label for the ${id} action`,
        translations: {en: this.label}
      });
      if (this.help) {
        var hid = `${id}.Help`;
        map[hid] = foam.i18n.Message.create({
          id: hid,
          description: `Help text for the ${id} action`,
          translations: {en: this.help}
        });
      }
      return map;
    }
  ],
});
