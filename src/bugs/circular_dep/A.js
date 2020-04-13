foam.CLASS({
  package: 'bugs.circular_dep',
  name: 'A',
  requires: [
    'bugs.circular_dep.B',
    'bugs.circular_dep.C',
  ],
  properties: [
    {
      class: 'FObjectProperty',
      of: 'bugs.circular_dep.B',
      name: 'b'
    },
    {
      class: 'FObjectProperty',
      of: 'bugs.circular_dep.C',
      name: 'c'
    },
  ],
  methods: [
    function execute() {
      console.log(bugs.circular_dep.A);
      console.log(bugs.circular_dep.B);
      console.log(bugs.circular_dep.C);
      console.log(bugs.circular_dep.D);
      console.log(bugs.circular_dep.E);
      console.log(bugs.circular_dep.F);
      console.log(bugs.circular_dep.G);
    }
  ]
});