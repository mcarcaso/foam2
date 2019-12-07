foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines',
  name: 'AbstractMethodJavaRefinement',
  refines: 'foam.core.AbstractMethod',
  properties: [
    {
      class: 'BooleanProperty',
      name: 'crossPlatformIsStatic',
      expression: function() {
        return this.isStatic();
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
      class: 'StringProperty',
      name: 'crossPlatformFnGetterName',
      expression: function(name) {
        return `${name}_fn`;
      }
    },
    {
      class: 'StringProperty',
      name: 'crossPlatformCode'
    }
  ]
});
