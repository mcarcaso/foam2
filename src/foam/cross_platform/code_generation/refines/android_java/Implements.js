foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines.android_java',
  name: 'ImplementsRefinement',
  refines: 'foam.core.Implements',
  flags: ['android'],
  properties: [
    {
      name: 'name',
      androidGetter: 'return "implements_" + getPath();'
    }
  ],
  methods: [
    function buildAndroidClass(cls) {
      cls.implements = cls.implements.concat(this.path);
    }
  ]
});
