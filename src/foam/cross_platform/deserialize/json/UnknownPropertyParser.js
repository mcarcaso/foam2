foam.CLASS({
  package: 'foam.cross_platform.deserialize.json',
  name: 'UnknownPropertyParser',
  extends: 'foam.cross_platform.deserialize.ProxyParser',
  requires: [
    'foam.cross_platform.deserialize.json.KeyValueParser0',
  ],
  properties: [
    {
      name: 'delegate',
      androidFactory: 'return KeyValueParser0_create().build();',
    },
  ],
});
