foam.CLASS({
  package: 'foam.tools.timer',
  name: 'ProxyTimer',
  properties: [
    {
      class: 'Proxy',
      of: 'foam.tools.timer.Timer',
      name: 'delegate',
    },
  ],
});
