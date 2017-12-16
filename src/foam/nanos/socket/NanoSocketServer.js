foam.CLASS({
  package: 'foam.nanos.socket',
  name: 'NanoSocketServer',
  implements: [
    'foam.nanos.NanoService',
  ],
  javaImports: [
    'foam.nanos.*',
    'foam.core.*',
    'foam.swift.core.*',
  ],
  properties: [
    {
      class: 'Int',
      name: 'port',
      value: 7000,
    },
    {
      class: 'Object',
      javaType: 'SocketServer',
      name: 'server',
    },
  ],
  methods: [
    {
      name: 'start',
      javaCode: `

System.out.println("Starting Socket Server on port " + getPort());

try {
  setServer(new SocketServer(getPort()));
  getServer().setX(getY());
  getServer().start();
} catch (java.io.IOException e) {
  System.out.println("Failed to start SocketServer:" + e.toString());
}
      `,
    },
  ],
});
