foam.CLASS({
  package: 'foam.android.tools.refines',
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
    }
  ]
});
