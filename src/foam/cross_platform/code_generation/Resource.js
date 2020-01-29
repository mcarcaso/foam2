foam.CLASS({
  package: 'foam.cross_platform.code_generation',
  name: 'Resource',
  properties: [
    {
      class: 'StringProperty',
      name: 'name',
      value: 'cross_platform_resource'
    },
    {
      class: 'StringProperty',
      name: 'androidCode'
    },
    {
      class: 'StringProperty',
      name: 'androidPath'
    },
  ],
  methods: [
    function buildAndroidResources(resources, parentCls) {
      resources.resources.push({
        toSource: () => ({
          body: this.androidCode,
          path: this.androidPath,
        })
      });
    },
  ]
});
