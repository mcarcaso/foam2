foam.CLASS({
  package: 'foam.cross_platform.deserialize',
  name: 'Seq2',
  implements: ['foam.cross_platform.deserialize.Parser'],
  properties: [
    {
      class: 'FObjectArray',
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
          if ( i == getIndex1() ) values[0] = ps.value();
          if ( i == getIndex2() ) values[1] = ps.value();
        }
        return ps.setValue(values);
      `,
      swiftCode: `
        var ps = ps;
        var values: [Any?] = [nil, nil];
        for i in 0..<getParsers()!.count {
          let parser = getParsers()![i];
          ps = parser.parse(ps, x);
          if ( ps == nil ) { return nil; }
          if ( i == getIndex1() ) { values[0] = ps!.value(); }
          if ( i == getIndex2() ) { values[1] = ps!.value(); }
        }
        return ps!.setValue(values);
      `
    },
  ]
});
