foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines',
  name: 'PropertyRefinement',
  refines: 'foam.core.Property',
  requires: [
    'foam.core.ExpressionSlot',
    'foam.cross_platform.Lib',
  ],
  properties: [
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
      class: 'FunctionProperty',
      name: 'viewInitializer'
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
    }
  ]
});
