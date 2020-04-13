foam.CLASS({
  package: 'bugs.circular_dep',
  name: 'F',
  requires: [
    'bugs.circular_dep.G',
    'bugs.circular_dep.B',
  ],
});