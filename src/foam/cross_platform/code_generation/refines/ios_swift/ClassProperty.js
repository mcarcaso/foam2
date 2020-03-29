foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines',
  name: 'ClassPropertyJavaRefinement',
  refines: 'foam.core.ClassProperty',
  flags: ['swift'],
  properties: [
    {
      name: 'swiftAdapt',
      expression: function (required) {
        return `
          if newValue is String {
            return getX().lookup(newValue as? String)${required ? '!' : ''}
          }
          return newValue as${required ? '!' : '?'} foam_cross_platform_FoamClass;
        `
      }
    },
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
