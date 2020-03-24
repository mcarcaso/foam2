foam.CLASS({
  package: 'foam.cross_platform.deserialize',
  name: 'ProxyPStream',
  implements: [
    'foam.cross_platform.deserialize.PStream',
  ],
  properties: [
    {
      class: 'Proxy',
      of: 'foam.cross_platform.deserialize.PStream',
      name: 'delegate',
    },
  ]
});