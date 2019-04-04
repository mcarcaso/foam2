foam.CLASS({
  package: 'io.c9.ace',
  name: 'Config',
  properties: [
    {
      class: 'Int',
      name: 'height',
      value: 500
    },
    {
      class: 'Int',
      name: 'width',
      value: 700
    },
    {
      class: 'Enum',
      of: 'io.c9.ace.Theme',
      name: 'theme'
    },
    {
      class: 'Enum',
      of: 'io.c9.ace.Mode',
      name: 'mode',
      value: 'JAVA'
    },
    {
      class: 'Enum',
      of: 'io.c9.ace.KeyBinding',
      name: 'keyBinding',
      value: 'VIM'
    }
  ]
});