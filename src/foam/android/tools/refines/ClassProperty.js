foam.CLASS({
  package: 'foam.android.tools',
  name: 'ClassPropertyJavaRefinement',
  refines: 'foam.core.ClassProperty',
  flags: ['android'],
  properties: [
    {
      name: 'generateAndroid',
      factory: function() { return false }
    }
  ]
});
