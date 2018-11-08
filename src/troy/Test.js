foam.CLASS({
  package: 'troy',
  name: 'Test',
  requires: [
    'troy.ModelWithTrait',
  ],
  exports: [
    'foo',
    'bar',
  ],
  properties: [
    {
      class: 'Boolean',
      name: 'foo',
    },
    {
      class: 'Boolean',
      name: 'bar',
    },
    {
      class: 'FObjectProperty',
      of: 'troy.ModelWithTrait',
      name: 'data',
      view: { class: 'foam.u2.DetailView', showActions: true },
      factory: function() {
        return this.ModelWithTrait.create();
      },
    },
  ],
});
