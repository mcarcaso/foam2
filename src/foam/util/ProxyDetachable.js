foam.CLASS({
  package: 'foam.util',
  name: 'ProxyDetachable',
  implements: [
    'foam.core.Detachable'
  ],
  properties: [
    {
      class: 'Proxy',
      of: 'foam.core.Detachable',
      name: 'delegate'
    }
  ]
});
