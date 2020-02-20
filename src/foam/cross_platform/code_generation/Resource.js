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
    {
      class: 'StringProperty',
      name: 'swiftCode'
    },
    {
      class: 'StringProperty',
      name: 'swiftPath'
    },
  ],
  methods: [
    function buildAndroidResources(resources, parentCls) {
      if ( ! this.androidPath || ! this.androidCode ) return;
      resources.resources.push({
        toSource: () => ({
          body: this.androidCode,
          path: this.androidPath,
        })
      });
    },
    function buildSwiftResources(resources, parentCls) {
      if ( ! this.swiftPath || ! this.swiftCode ) return;
      resources.resources.push({
        toSource: () => ({
          body: this.swiftCode,
          path: this.swiftPath,
        })
      });
    },
  ]
});
