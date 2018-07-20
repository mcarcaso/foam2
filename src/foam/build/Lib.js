foam.CLASS({
  package: 'foam.build',
  name: 'Lib',
  properties: [
    {
      class: 'String',
      name: 'id',
      expression: function(package, name) {
        return package ? package + '.' + name : name;
      },
    },
    {
      class: 'String',
      name: 'package'
    },
    {
      class: 'String',
      name: 'name'
    },
    'json'
  ],
});
