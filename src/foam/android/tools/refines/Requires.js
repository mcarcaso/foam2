foam.CLASS({
  package: 'foam.android.tools',
  name: 'RequiresRefinement',
  refines: 'foam.core.Requires',
  flags: ['android'],
  properties: [
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
        type: this.cls_.id,
        name: this.androidAxiomName,
        initializer: this.androidAxiomInitializerName + '()'
      });
      cls.method({
        visibility: 'private',
        static: true,
        type: this.cls_.id,
        name: this.androidAxiomInitializerName,
        body: `return ${foam.core.FObject.getAxiomByName('asAndroidValue').code.call(this)};`
      });
      return cls;
    },
    {
      name: 'getDeps',
      code: function(flagFilter, deps) {
        if ( ! flagFilter(this) ) return;
        deps[this.path] = true;
      }
    },
    function asAndroidValue() {
      return this.forClass_ + '.' + this.androidAxiomName;
    },
  ]
});
