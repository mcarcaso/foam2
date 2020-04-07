foam.ENUM({
  package: 'foam.u2.layout',
  name: 'DisplayWidth',
  values: [
      {
        name: 'XXS',
        minWidth: 0
      },
      {
        name: 'XS',
        minWidth: 320
      },
      {
        name: 'SM',
        minWidth: 576
      },
      {
        name: 'MD',
        minWidth: 768
      },
      {
        name: 'LG',
        minWidth: 960
      },
      {
        name: 'XL',
        minWidth: 1280
      },
  ],
  static: [
    {
      type: 'foam.u2.layout.DisplayWidth',
      name: 'valueForWidth',
      args: [{ type: 'Integer', name: 'width' }],
      androidCode: `
        for ( int i = 1 ; i < VALUES.length ; i++ ) {
          if ( width < VALUES[i].getMinWidth() ) return VALUES[i-1];
        }
        return VALUES[VALUES.length-1];
      `,
      swiftCode: `
        for i in 1..<VALUES.count {
          if ( width < VALUES[i].getMinWidth() ) { return VALUES[i-1]; }
        }
        return VALUES[VALUES.count-1];
      `
    }
  ],
  properties: [
    {
      class: 'IntProperty',
      name: 'minWidth'
    }
  ]
});