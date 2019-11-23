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
      name: 'expressionArgs',
    },
    {
      class: 'StringProperty',
      name: 'crossPlatformFnGetterName',
      expression: function(name) {
        return `${name}_fn`;
      }
    }
  ],
  methods: [
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
