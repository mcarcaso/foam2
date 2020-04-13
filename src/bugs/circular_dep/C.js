foam.CLASS({
  package: 'bugs.circular_dep',
  name: 'C',
  requires: [
    'bugs.circular_dep.D',
    'bugs.circular_dep.E',
  ],
});