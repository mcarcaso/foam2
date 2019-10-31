foam.CLASS({
  package: 'foam.cross_platform',
  name: 'Lib',
  axioms: [
    { class: 'foam.pattern.Singleton' }
  ],
  static: [
    {
      type: 'Boolean',
      name: 'equals',
      args: [
        { type: 'Any', name: 'o1' },
        { type: 'Any', name: 'o2' }
      ],
      androidCode: `
        return compare(o1, o2) == 0;
      `
    },
    {
      type: 'Integer',
      name: 'compare',
      args: [
        { type: 'Any', name: 'o1' },
        { type: 'Any', name: 'o2' }
      ],
      androidCode: `
        if ( o1 == null && o2 == null ) return 0;
        if ( o2 == null ) return  1;
        if ( o1 == null ) return -1;

        if ( o1 instanceof Number && o2 instanceof Number ) {
          double d1 = ((Number) o1).doubleValue();
          double d2 = ((Number) o2).doubleValue();
          if ( d1 == d2 ) return  0;
          if ( d1  > d2 ) return  1;
          if ( d1  < d2 ) return -1;
        }

        if ( ! (o1 instanceof Comparable && o2 instanceof Comparable) ) {
          compare(o1.hashCode(), o2.hashCode());
        }
        if ( ! (o2 instanceof Comparable) ) return 1;
        if ( ! (o1 instanceof Comparable) ) return -1;

        return ((Comparable) o1).compareTo(o2);
      `
    }
  ]
});
