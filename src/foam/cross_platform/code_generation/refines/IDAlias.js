foam.CLASS({
  package: 'foam.cross_platform.refines',
  name: 'IDAliasRefine',
  refines: 'foam.core.IDAlias',
  properties: [
    {
      name: 'swiftGetter',
      expression: function(propName) {
        return `return getProperty("${propName}");`
      }
    },
    {
      name: 'androidGetter',
      expression: function(propName) {
        return `return getProperty("${propName}");`
      }
    },
  ]
});
