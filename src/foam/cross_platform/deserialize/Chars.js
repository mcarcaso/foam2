foam.CLASS({
  package: 'foam.cross_platform.deserialize',
  name: 'Chars',
  implements: [
    'foam.cross_platform.deserialize.Parser'
  ],
  axioms: [
    foam.pattern.Multiton.create({ property: 'chars' })
  ],
  properties: [
    {
      class: 'StringProperty',
      name: 'chars',
    },
  ],
  methods: [
    {
      name: 'parse',
      androidCode: `
        if ( ps.valid() && getChars().indexOf(ps.head()) != -1 ) {
          return ps.tail().setValue(ps.head());
        }
        return null;
      `
    },
  ]
});
