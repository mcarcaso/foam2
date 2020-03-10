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
      class: 'ClassProperty',
      name: 'crossPlatformView',
      value: 'foam.cross_platform.ui.widget.ActionButton'
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
      class: 'FunctionProperty',
      name: 'viewInitializer',
      androidValue: `
        (foam.cross_platform.GenericFunction) args -> {
          foam.cross_platform.Context x = (foam.cross_platform.Context) args[0];
          return foam.cross_platform.ui.widget.ActionButton.ActionButtonBuilder(x).build();
        }
      `,
      swiftValue: `
        AnonymousGenericFunction_create()
          .setFn({[weak self] (args: [Any?]?) -> Any? in
            if self == nil { return nil }
            let x = args![0] as! foam_cross_platform_Context;
            return foam_cross_platform_ui_widget_ActionButton.foam_cross_platform_ui_widget_ActionButtonBuilder(x).build();
          })
          .build()
      `
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
        return getViewInitializer()!
          .executeFunction([x]) as? foam_cross_platform_ui_AxiomView
      `,
    },
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
        { type: 'FObject', name: 'o' },
      ],
      androidCode: `
        return (foam.core.Slot) getIsAvailableSlotInitializer()
          .executeFunction(new Object[] {o});
      `,
      swiftCode: `
        return getIsAvailableSlotInitializer()!.executeFunction([o]) as? foam_core_Slot
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
