foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines',
  name: 'ConstantRefine',
  refines: 'foam.core.Constant',
  flags: ['android'],
  properties: [
    { class: 'foam.android.tools.AndroidType' },
    {
      class: 'StringProperty',
      name: 'androidValue',
      expression: function(value) {
        return foam.android.tools.asAndroidValue(value);
      }
    },
    {
      class: 'StringProperty',
      name: 'crossPlatformAxiomName',
      expression: function(name) {
        return foam.String.constantize(name);
      }
    },
    {
      class: 'StringProperty',
      name: 'crossPlatformAxiomInitializerName',
      expression: function(crossPlatformAxiomName) {
        return 'init_' + crossPlatformAxiomName;
      }
    },
  ],
  methods: [
    function buildAndroidClass(cls) {
      cls.field({
        visibility: 'public',
        static: true,
        type: this.androidType,
        name: this.crossPlatformAxiomName,
        initializer: this.crossPlatformAxiomInitializerName + '()'
      });
      cls.method({
        visibility: 'private',
        static: true,
        type: this.androidType,
        name: this.crossPlatformAxiomInitializerName,
        body: `return ${this.androidValue};`
      });
      return cls;
    }
  ]
});
