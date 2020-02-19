foam.CLASS({
  package: 'foam.cross_platform.serialize.json.internal',
  name: 'OutputterState',
  properties: [
    {
      class: 'BooleanProperty',
      name: 'endArray',
    },
    {
      class: 'BooleanProperty',
      name: 'endObj',
    },
    {
      class: 'BooleanProperty',
      name: 'comma',
    },
    {
      class: 'BooleanProperty',
      name: 'array',
    },
  ],
});
