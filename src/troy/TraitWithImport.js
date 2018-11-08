foam.INTERFACE({
  package: 'troy',
  name: 'TraitWithImport',
  imports: [
    'foo',
  ],
  properties: [
    {
      class: 'String',
      name: 'fooDesc',
      expression: function(foo) {
        return foo ? 'FooTrue :)' : 'FooFalse :(';
      },
    },
  ],
  actions: [
    {
      name: 'traitAction',
      isEnabled: function(foo) {
        return foo;
      },
      code: function() {
        alert('hello world');
      },
    },
  ],
});
