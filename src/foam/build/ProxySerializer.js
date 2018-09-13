foam.CLASS({
  package: 'foam.build',
  name: 'ProxySerializer',
  implements: [
    'foam.build.CodeSerializer',
  ],
  properties: [
    {
      class: 'Proxy',
      of: 'foam.build.CodeSerializer',
      name: 'delegate',
    }
  ],
});
