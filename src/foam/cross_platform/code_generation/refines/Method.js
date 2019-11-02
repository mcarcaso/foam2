foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines',
  name: 'AbstractMethodJavaRefinement',
  refines: 'foam.core.AbstractMethod',
  flags: ['android'],
  properties: [
    {
      class: 'StringProperty',
      name: 'androidCode',
      expression: function(name) {
        return `throw new RuntimeException("${name} is not implemented");`
      }
    },
    {
      class: 'BooleanProperty',
      name: 'androidIsStatic',
      expression: function() {
        return this.isStatic();
      }
    },
    { class: 'foam.android.tools.AndroidType' },
  ],
  methods: [
    function buildAndroidClass(cls, parentCls) {
      var superAxiom = parentCls.getSuperAxiomByName(this.name);
      if ( superAxiom === this ) return;

      cls.method({
        visibility: 'public',
        static: this.androidIsStatic,
        type: this.androidType,
        name: this.name,
        args: this.args.map(a => ({
          name: a.name,
          type: a.androidType
        })),
        body: this.androidCode
      });

      return cls;
    }
  ]
});

foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines',
  name: 'ArgumentJavaRefinement',
  refines: 'foam.core.Argument',
  flags: ['android'],
  properties: [
    { class: 'foam.android.tools.AndroidType' }
  ]
});
