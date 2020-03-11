foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines',
  name: 'PropertyRefinement',
  refines: 'foam.core.Property',
  requires: [
    'foam.core.ExpressionSlot',
    'foam.cross_platform.Lib',
  ],
  ids: [
    'forClass_',
    'name'
  ],
  properties: [
    'crossPlatformFactoryValue',
    {
      class: 'StringArrayProperty',
      name: 'validationExpressionArgs'
    },
    {
      class: 'FunctionProperty',
      name: 'validationSlotInitializer'
    },
    {
      class: 'StringArrayProperty',
      name: 'visibilityExpressionArgs'
    },
    {
      class: 'FunctionProperty',
      name: 'visibilitySlotInitializer'
    },
    {
      class: 'StringArrayProperty',
      name: 'expressionArgs'
    },
    {
      class: 'BooleanProperty',
      name: 'weak'
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
    {
      class: 'StringProperty',
      name: 'crossPlatformSlotVarName',
      expression: function(crossPlatformPrivateVarName) {
        return crossPlatformPrivateVarName + '$';
      }
    },
    {
      class: 'StringProperty',
      name: 'crossPlatformSlotGetterName',
      expression: function(crossPlatformGetterName) {
        return crossPlatformGetterName + '$';
      }
    },
    {
      class: 'StringProperty',
      name: 'crossPlatformFactory'
    },
    {
      class: 'StringProperty',
      name: 'crossPlatformPrivateVarName',
      expression: function(name) {
        return `${name}_`;
      }
    },
    {
      class: 'StringProperty',
      name: 'crossPlatformIsSetVarName',
      expression: function(name) {
        return `${name}_isSet_`;
      }
    },
    {
      class: 'StringProperty',
      name: 'crossPlatformGetterName',
      expression: function(name) {
        return `get${foam.String.capitalize(name)}`;
      }
    },
    {
      class: 'StringProperty',
      name: 'crossPlatformSetterName',
      expression: function(name) {
        return `set${foam.String.capitalize(name)}`;
      }
    },
    {
      class: 'StringProperty',
      name: 'crossPlatformExpressionSubName',
      expression: function(name) {
        return name + '_expression_sub_';
      }
    },
  ],
  methods: [
    {
      name: 'createView',
      type: 'foam.cross_platform.ui.AxiomView',
      args: [
        { type: 'Context', name: 'x' },
      ],
      androidCode: `
        return (foam.cross_platform.ui.AxiomView) getViewInitializer()
          .executeFunction(new Object[] {x});
      `,
      swiftCode: `
        return getViewInitializer()!.executeFunction([x]) as? foam_cross_platform_ui_AxiomView;
      `,
    },
    {
      name: 'createVisibilitySlot',
      type: 'foam.core.Slot',
      args: [
        { type: 'FObject', name: 'o' },
      ],
      androidCode: `
        return (foam.core.Slot) getVisibilitySlotInitializer()
          .executeFunction(new Object[] {o});
      `,
      swiftCode: `
        return getVisibilitySlotInitializer()?.executeFunction([o]) as? foam_core_Slot;
      `,
    },
    {
      name: 'createValidationSlot',
      type: 'foam.core.Slot',
      args: [
        { type: 'FObject', name: 'o' },
      ],
      androidCode: `
        foam.cross_platform.GenericFunction f = getValidationSlotInitializer();
        return f == null ? null :
          (foam.core.Slot) f.executeFunction(new Object[] {o});
      `,
      swiftCode: `
        let f = getValidationSlotInitializer();
        return f?.executeFunction([o]) as? foam_core_Slot;
      `,
    },
    {
      name: 'f',
      type: 'Any',
      args: [
        { type: 'Any', name: 'o' }
      ],
      androidCode: `
        return ((foam.cross_platform.FObject) o).getProperty(getName());
      `,
      swiftCode: `
        return (o as! foam_cross_platform_FObject?)?.getProperty(getName());
      `
    },
    function getMessages(flagFilter, map) {
      var id = `${ this.forClass_}.${this.name}`;
      var lid = `${id}.Label`;
      map[lid] = foam.i18n.Message.create({
        id: lid,
        description: `Label for the ${id} property`,
        translations: {en: this.label}
      });
      if ( this.help ) {
        var hid = `${id}.Help`;
        map[hid] = foam.i18n.Message.create({
          id: hid,
          description: `Help text for ${id} property`,
          translations: {en: this.help}
        });
      }
      return map;
    }
  ]
});