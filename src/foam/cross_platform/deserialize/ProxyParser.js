foam.CLASS({
  package: 'foam.cross_platform.deserialize',
  name: 'ProxyParser',
  implements: [
    'foam.cross_platform.deserialize.Parser'
  ],
  properties: [
    {
      class: 'Proxy',
      of: 'foam.cross_platform.deserialize.Parser',
      name: 'delegate',
    },
  ],
});
