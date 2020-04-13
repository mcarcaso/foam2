foam.CLASS({
  package: 'bugs.circular_dep',
  name: 'G',
  requires: [
    'bugs.circular_dep.F',
  ],
});