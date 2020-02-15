foam.CLASS({
  package: 'foam.cross_platform.deserialize',
  name: 'Seq1',
  implements: [
    'foam.cross_platform.deserialize.Parser'
  ],
  properties: [
    {
      class: 'FObjectArray',
      of: 'foam.cross_platform.deserialize.Parser',
      name: 'parsers',
    },
    {
      class: 'IntProperty',
      name: 'index',
    },
  ],
  methods: [
    {
      name: 'parse',
      androidCode: `
        Object value = null;
        for ( int i = 0 ; i < getParsers().length ; i++ ) {
          ps = getParsers()[i].parse(ps, x);
          if ( ps == null ) return null;
          if ( i == getIndex() ) value = ps.value();
        }
        return ps.setValue(value);
      `
    },
  ]
});
