foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines',
  name: 'ConstantRefine',
  refines: 'foam.core.Constant',
  properties: [
    {
      class: 'StringProperty',
      name: 'crossPlatformAxiomName',
      expression: function(name) {
        return foam.String.constantize(name);
      }
    },
    {
      class: 'StringProperty',
      name: 'crossPlatformVarName',
      expression: function(crossPlatformAxiomName) {
        return 'init_' + crossPlatformAxiomName;
      }
    }
  ]
});
