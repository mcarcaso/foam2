foam.CLASS({
  package: 'troy',
  name: 'ModelWithTrait',
  implements: [
    'troy.TraitWithImport',
  ],
  imports: [
    'bar',
  ],
  properties: [
    {
      class: 'String',
      name: 'modelWithTraitFooDesc',
      expression: function(foo, bar) {
        return `Foo ${foo}. Bar ${bar}`
      },
    },
  ],
});
