foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines',
  name: 'AbstractMethodJavaRefinement',
  refines: 'foam.core.AbstractMethod',
  flags: ['android'],
  properties: [
    {
      class: 'BooleanProperty',
      name: 'crossPlatformIsStatic',
      expression: function() {
        return this.isStatic();
      }
    }
  ]
});
