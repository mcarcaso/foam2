foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines',
  name: 'PropertyRefinement',
  refines: 'foam.core.Property',
  requires: [
    'foam.cross_platform.Lib',
    'foam.core.ExpressionSlot'
  ],
  properties: [
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
    {
      class: 'ClassProperty',
      name: 'crossPlatformView',
      value: 'foam.cross_platform.ui.widget.Label',
    },
  ],
  methods: [
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
    {
      name: 'compareValues',
      type: 'Integer',
      args: [
        { type: 'Any', name: 'a' },
        { type: 'Any', name: 'b' },
      ],
      androidCode: `
        return (int) getComparePropertyValues().executeFunction(new Object[] {a, b});
      `,
      swiftCode: `
        return getComparePropertyValues()!.executeFunction([a, b]) as! Int;
      `,
    }
  ]
});
