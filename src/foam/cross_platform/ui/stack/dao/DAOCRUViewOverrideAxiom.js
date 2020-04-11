foam.CLASS({
  package: 'foam.cross_platform.ui.stack.dao',
  name: 'DAOCRUViewOverrideAxiom',
  properties: [
    {
      name: 'name',
      factory: function() {
        return 'DAOCRUViewOverrideAxiom' + this.controllerMode.name;
      }
    },
    {
      class: 'Enum',
      of: 'foam.u2.ControllerMode',
      name: 'controllerMode'
    },
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.BuilderFactory',
      name: 'viewBuilder'
    },
  ]
});