foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines',
  name: 'ListenerRefinement',
  refines: 'foam.core.Listener',
  properties: [
    {
      class: 'StringProperty',
      name: 'crossPlatformListenerName',
      expression: function(name) { return name + '_listener'; },
    }
  ]
});
