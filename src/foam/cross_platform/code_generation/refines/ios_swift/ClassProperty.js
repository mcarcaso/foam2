foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines',
  name: 'ClassPropertyJavaRefinement',
  refines: 'foam.core.ClassProperty',
  flags: ['swift'],
  properties: [
    {
      name: 'swiftType',
      expression: function(required) {
        return foam.core.type.toType('foam.cross_platform.FoamClass').toSwiftType(!required);
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
