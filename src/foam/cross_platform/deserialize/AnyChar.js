foam.CLASS({
  package: 'foam.cross_platform.deserialize',
  name: 'AnyChar',
  implements: [
    'foam.cross_platform.deserialize.Parser'
  ],
  axioms: [
    { class: 'foam.pattern.Singleton' }
  ],
  methods: [
    {
      name: 'parse',
      androidCode: `
        if ( ps.valid() ) return ps.tail().setValue(ps.head());
        return null;
      `
    },
  ]
});
