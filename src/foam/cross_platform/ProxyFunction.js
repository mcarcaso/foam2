foam.CLASS({
  package: 'foam.cross_platform',
  name: 'ProxyFunction',
  implements: [
    'foam.cross_platform.GenericFunction'
  ],
  properties: [
    {
      class: 'Proxy',
      of: 'foam.cross_platform.GenericFunction',
      name: 'delegate'
    }
  ]
});
