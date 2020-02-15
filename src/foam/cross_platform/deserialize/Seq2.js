foam.CLASS({
  package: 'foam.cross_platform.deserialize',
  name: 'Seq2',
  implements: ['foam.cross_platform.deserialize.Parser'],
  properties: [
    {
      class: 'ArrayProperty',
      of: 'foam.cross_platform.deserialize.Parser',
      name: 'parsers',
    },
    {
      class: 'IntProperty',
      name: 'index1',
    },
    {
      class: 'IntProperty',
      name: 'index2',
    },
  ],
  methods: [
    {
      name: 'parse',
      androidCode: `
Object[] values = new Object[] { null, null };
for ( int i = 0 ; i < getParsers().length ; i++ ) {
  foam.cross_platform.deserialize.Parser parser = getParsers()[i];
  ps = parser.parse(ps, x);
  if ( ps == null ) return null;
  if ( i == index1 ) values[0] = ps.value();
  if ( i == index2 ) values[1] = ps.value();
}
return ps.setValue(values);
      `
    },
  ]
});
