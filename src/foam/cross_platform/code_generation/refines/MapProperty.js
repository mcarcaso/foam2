foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines',
  name: 'MapRefinement',
  refines: 'foam.core.MapProperty',
  properties: [
    {
      name: 'swiftFactory',
      expression: function (crossPlatformFactoryValue, crossPlatformFactory, swiftType) {
        return foam.Undefined.isInstance(crossPlatformFactoryValue) ? crossPlatformFactory :
          foam.swift.asSwiftValue(crossPlatformFactoryValue, swiftType, 'getSubX()')
      }
    },
    {
      name: 'androidFactory',
      expression: function (crossPlatformFactoryValue, crossPlatformFactory, javaFactory, androidType) {
        return foam.Undefined.isInstance(crossPlatformFactoryValue) ? crossPlatformFactory || javaFactory :
          `return ${foam.android.tools.asAndroidValue(crossPlatformFactoryValue, androidType, 'getSubX()')};`
      }
    },
  ]
});