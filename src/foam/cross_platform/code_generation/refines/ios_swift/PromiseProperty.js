foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines',
  name: 'PromisePropertyJavaRefinement',
  refines: 'foam.core.PromiseProperty',
  flags: ['swift'],
  properties:[
    {
      name: 'swiftType',
      expression: function() {
        return foam.cross_platform.Promise.model_.swiftName + '?';
      }
    }
  ]
});
