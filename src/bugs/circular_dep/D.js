foam.CLASS({
  package: 'bugs.circular_dep',
  name: 'D',
  requires: [
    'bugs.circular_dep.F',
  ]
});