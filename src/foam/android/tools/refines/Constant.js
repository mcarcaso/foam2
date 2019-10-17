foam.CLASS({
  package: 'foam.android.tools',
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
      name: 'androidAxiomName',
      expression: function(name) {
        return foam.String.constantize(name);
      }
    },
    {
      class: 'StringProperty',
      name: 'androidAxiomInitializerName',
      expression: function(androidAxiomName) {
        return 'init_' + androidAxiomName;
      }
    },
  ],
  methods: [
    function buildAndroidClass(cls) {
      cls.field({
        visibility: 'public',
        static: true,
        type: this.androidType,
        name: this.androidAxiomName,
        initializer: this.androidAxiomInitializerName + '()'
      });
      cls.method({
        visibility: 'private',
        static: true,
        type: this.androidType,
        name: this.androidAxiomInitializerName,
        body: `return ${this.androidValue};`
      });
      return cls;
    }
  ]
});
