foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines',
  name: 'ClassPropertyJavaRefinement',
  refines: 'foam.core.ClassProperty',
  flags: ['swift'],
  properties: [
    {
      name: 'swiftType',
      expression: function() {
        return foam.cross_platform.FoamClass.model_.swiftName + '?';
      }
    },
    {
      name: 'swiftValue',
      expression: function(value) {
        var cls = foam.String.isInstance(value) ? foam.lookup(value) : value;
        return foam.swift.asSwiftValue(cls);
      }
    }
  ]
});
