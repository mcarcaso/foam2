foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines.ios_swift',
  name: 'ModelJavaRefinement',
  refines: 'foam.core.Model',
  flags: ['swift'],
  properties: [
    {
      class: 'StringProperty',
      name: 'swiftName',
      expression: function(id) {
        return id.replace(/\./g, '_');
      }
    },
    {
      class: 'StringProperty',
      name: 'swiftExtends',
      expression: function(crossPlatformExtends) {
        return crossPlatformExtends ?
          foam.swift.toSwiftType(crossPlatformExtends) :
          '';
      }
    }
  ],
});
