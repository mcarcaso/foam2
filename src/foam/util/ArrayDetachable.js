foam.CLASS({
  package: 'foam.util',
  name: 'ArrayDetachable',
  implements: [
    'foam.core.Detachable'
  ],
  properties: [
    {
      class: 'FObjectArray',
      of: 'foam.core.Detachable',
      name: 'array'
    }
  ],
  methods: [
    {
      name: 'detach',
      androidCode: `
        for ( foam.core.Detachable d : getArray() ) {
          if ( d != null ) d.detach();
        }
      `
    }
  ]
});
