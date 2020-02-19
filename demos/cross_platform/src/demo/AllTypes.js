foam.CLASS({
  package: 'demo',
  name: 'AllTypes',
  properties: [
    {
      class: 'BooleanProperty',
      name: 'boolean',
    },
    {
      class: 'LongProperty',
      name: 'long',
    },
    {
      class: 'StringProperty',
      name: 'string',
    },
    {
      class: 'ArrayProperty',
      name: 'array',
    },
    {
      class: 'StringArrayProperty',
      name: 'stringArray',
    },
    {
      class: 'MapProperty',
      name: 'map',
    },
    {
      class: 'ListProperty',
      name: 'list',
    },
    {
      class: 'FObjectProperty',
      name: 'fobject',
    },
    {
      class: 'FObjectArray',
      of: 'demo.Person',
      name: 'fobjectArray',
    },
    {
      class: 'DateProperty',
      name: 'date',
    },
  ]
});
