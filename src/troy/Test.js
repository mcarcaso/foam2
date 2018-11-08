foam.CLASS({
  package: 'troy',
  name: 'Test',
  requires: [
    'troy.ModelWithTrait',
  ],
  exports: [
    'foo',
  ],
  properties: [
    {
      class: 'Boolean',
      name: 'foo',
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
