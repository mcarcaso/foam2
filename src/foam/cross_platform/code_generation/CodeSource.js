foam.CLASS({
  package: 'foam.cross_platform.code_generation',
  name: 'CodeSource',
  properties: [
    {
      name: 'name',
      expression: function(path) { return path }
    },
    'flags',
    'body',
    'path',
  ],
  methods: [
    function buildAndroidResources(resources, parentCls) {
      resources.sources.push({
        toSource: () => ({
          body: this.body,
          path: this.path,
        })
      });
    },
    function buildSwiftResources(resources, parentCls) {
      resources.sources.push({
        toSource: () => ({
          body: this.body,
          path: this.path,
        })
      });
    },
  ]
});