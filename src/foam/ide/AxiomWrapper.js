foam.CLASS({
  package: 'foam.ide',
  name: 'AxiomWrapper',
  label: 'Axiom',
  ids: ['parent', 'type', 'name'],
  tableColumns: ['parent', 'type', 'name'],
  properties: [
    'parent',
    {
      class: 'Class',
      name: 'type',
      visibilityExpression: function(type) {
        return type ? foam.u2.Visibility.RO : foam.u2.Visibility.HIDDEN;
      }
    },
    {
      class: 'String',
      name: 'name',
      visibilityExpression: function(name) {
        return name ? foam.u2.Visibility.RO : foam.u2.Visibility.HIDDEN;
      }
    },
    {
      class: 'FObjectProperty',
      of: 'foam.core.FObject',
      name: 'data'
    }
  ]
});

foam.RELATIONSHIP({
  cardinality: '1:*',
  sourceModel: 'foam.ide.AxiomWrapper',
  targetModel: 'foam.ide.AxiomWrapper',
  forwardName: 'children',
  inverseName: 'parent',
  targetProperty: {
    tableCellFormatter: function(o) {
      this.add(o ? o.name : '');
    }
  }
});