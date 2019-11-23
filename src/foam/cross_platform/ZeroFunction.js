foam.CLASS({
  package: 'foam.cross_platform',
  name: 'ZeroFunction',
  implements: [
    'foam.cross_platform.GenericFunction'
  ],
  axioms: [
    { class: 'foam.pattern.Singleton' }
  ],
  methods: [
    {
      name: 'executeFunction',
      androidCode: 'return 0;'
    }
  ]
});
