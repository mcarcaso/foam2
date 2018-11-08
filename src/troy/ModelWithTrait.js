foam.CLASS({
  package: 'troy',
  name: 'ModelWithTrait',
  implements: [
    'troy.TraitWithImport',
  ],
  properties: [
    {
      class: 'String',
      name: 'modelWithTraitFooDesc',
      expression: function(foo) {
        return foo ? 'Foo is true!' : 'Foo is false.';
      },
    },
  ],
});
