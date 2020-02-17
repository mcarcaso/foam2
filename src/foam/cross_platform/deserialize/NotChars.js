foam.CLASS({
  package: 'foam.cross_platform.deserialize',
  name: 'NotChars',
  implements: ['foam.cross_platform.deserialize.Parser'],
  axioms: [
    { class: 'foam.pattern.Multiton', property: 'chars' }
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
        if ( ps.valid() && getChars().indexOf(ps.head()) == -1 ) {
          return ps.tail().setValue(ps.head());
        }
        return null;
      `
    },
  ]
});
