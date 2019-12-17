foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines',
  name: 'ActionRefine',
  refines: 'foam.core.Action',
  properties: [
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
      `
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
    }
  ],
});
