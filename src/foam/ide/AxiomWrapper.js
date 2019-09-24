foam.CLASS({
  package: 'foam.ide',
  name: 'AxiomWrapper',
  label: 'Axiom',
  ids: ['parent', 'type', 'name'],
  tableColumns: ['parent', 'type', 'name'],
  sections: [
    {
      name: 'info'
    },
    {
      name: 'dataSection',
      title: 'Data',
      gridColumns: 6
    },
    {
      name: 'axioms',
      gridColumns: 6,
      isAvailable: function(data) {
        return !! data.axioms_;
      }
    },
  ],
  properties: [
    'parent',
    {
      class: 'Class',
      name: 'type',
      section: 'info',
      gridColumns: 4,
      visibilityExpression: function(type) {
        return type ? foam.u2.Visibility.RO : foam.u2.Visibility.HIDDEN;
      }
    },
    {
      class: 'String',
      name: 'name',
      section: 'info',
      gridColumns: 4,
      visibilityExpression: function(name) {
        return name ? foam.u2.Visibility.RO : foam.u2.Visibility.HIDDEN;
      }
    },
    {
      class: 'FObjectProperty',
      of: 'foam.core.FObject',
      view: { class: 'foam.u2.detail.VerticalDetailView' },
      section: 'dataSection',
      name: 'data',
      label: ''
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
    section: 'info',
    gridColumns: 4,
    tableCellFormatter: function(o) {
      this.add(o ? o.name : '');
    }
  },
  sourceProperty: {
    section: 'axioms'
  }
});