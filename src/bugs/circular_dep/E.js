foam.CLASS({
  package: 'bugs.circular_dep',
  name: 'E',
  properties: [
    {
      class: 'FObjectProperty',
      of: 'bugs.circular_dep.F',
      name: 'a'
    }
  ],
  methods: [
    function execute() {
      console.log('yo');
    }
  ]
});