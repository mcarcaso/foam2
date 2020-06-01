foam.CLASS({
  refines: 'foam.core.internal.Errors',
  package: 'foam.cross_platform.code_generation.refines',
  name: 'ErrorsRefines',
  flags: [
    'android'
  ],
  properties: [
    [ 'androidType', 'String[]' ]
  ],
});
