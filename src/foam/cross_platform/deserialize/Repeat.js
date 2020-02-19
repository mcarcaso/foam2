foam.CLASS({
  package: 'foam.cross_platform.deserialize',
  name: 'Repeat',
  extends: 'foam.cross_platform.deserialize.ProxyParser',
  properties: [
    {
      class: 'FObjectProperty',
      of: 'foam.cross_platform.deserialize.Parser',
      name: 'delim',
    },
    {
      class: 'IntProperty',
      name: 'min',
      value: -1,
    },
    {
      class: 'IntProperty',
      name: 'max',
      value: -1,
    },
  ],
  methods: [
    {
      name: 'parse',
      androidCode: `
        java.util.List values = new java.util.ArrayList();
        foam.cross_platform.deserialize.PStream result;

        int i = 0;
        while ( getMax() == -1 || i < getMax() ) {
          if ( getDelim() != null && values.size() != 0 ) {
            result = getDelim().parse(ps, x);
            if ( result == null ) break;
            ps = result;
          }
          result = getDelegate().parse(ps, x);
          if ( result == null ) break;
          
          values.add(result.value());
          ps = result;
          
          i++;
        }
        
        if ( getMin() != -1 && values.size() < getMin() ) return null;
        return ps.setValue(values.toArray());
      `
    },
  ]
});
