foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines',
  name: 'ImportRefinement',
  refines: 'foam.core.Import',
  properties: [
    {
      class: 'StringProperty',
      name: 'crossPlatformGetterName',
      expression: function(name) {
        return `get${foam.String.capitalize(name)}`;
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
      name: 'crossPlatformSetterName',
      expression: function(name) {
        return `set${foam.String.capitalize(name)}`;
      }
    },
  ]
});
