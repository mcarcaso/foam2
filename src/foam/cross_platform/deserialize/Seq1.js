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
      `,
      swiftCode: `
        var ps = ps;
        var value: Any? = nil;
        for i in 0..<getParsers()!.count {
          ps = getParsers()![i].parse(ps, x);
          if ( ps == nil ) { return nil; }
          if ( i == getIndex() ) { value = ps!.value(); }
        }
        return ps?.setValue(value);
      `
    },
  ]
});
