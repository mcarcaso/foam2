foam.CLASS({
  package: 'foam.android.tools',
  name: 'AndroidType',
  extends: 'StringProperty',
  flags: ['android'],
  properties: [
    {
      name: 'flags',
      value: ['android']
    },
    {
      name: 'expression',
      expression: function(value) {
        return function(type) {
          return value || foam.core.type.toType(type).toAndroidType();
        }
      }
    },
    {
      name: 'name',
      value: 'androidType'
    }
  ]
});
