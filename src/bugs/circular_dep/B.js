foam.CLASS({
  package: 'bugs.circular_dep',
  name: 'B',
  requires: [
    'bugs.circular_dep.G',
  ],
});