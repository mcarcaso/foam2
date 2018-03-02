foam.CLASS({
  package: "demo.build",
  name: "AppConfig",
  extends: 'foam.tools.AppConfig',
  properties: [
    {
      name: 'refines',
      value: [
        'demo.build.ModelToBuildRefine',
      ],
    },
    {
      name: 'requires',
      value: [
        'demo.build.ModelToBuild',
      ],
    },
  ],
});
