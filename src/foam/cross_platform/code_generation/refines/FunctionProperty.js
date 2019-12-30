foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines',
  name: 'FunctionPropertyRefines',
  refines: 'foam.core.FunctionProperty',
  requires: [
    'foam.cross_platform.NullFunction'
  ],
  properties: [
    {
      name: 'type',
      value: 'foam.cross_platform.GenericFunction'
    },
    {
      name: 'androidValue',
      value: 'foam.cross_platform.NullFunction.NullFunctionBuilder(null).build()'
    },
    {
      name: 'swiftValue',
      value: 'foam_cross_platform_NullFunction.foam_cross_platform_NullFunctionBuilder(nil).build()'
    }
  ]
});
