foam.CLASS({
  package: 'demo.build',
  name: 'ModelToBuildRefine',
  refines: 'demo.build.ModelToBuild',
  properties: [
    {
      name: 'refinedProperty',
      value: 'I am refined!',
    },
  ],
});
