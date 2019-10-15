foam.CLASS({
  package: 'foam.android.tools',
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
    {
      class: 'StringProperty',
      name: 'androidAxiomName',
      expression: function(name) {
        return foam.String.constantize(name);
      }
    },
  ],
  methods: [
    function buildAndroidClass(cls) {
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
  package: 'foam.android.tools',
  name: 'InterfaceMethodJavaRefinement',
  refines: 'foam.core.internal.InterfaceMethod',
  flags: ['android'],
  methods: [
    function buildAndroidClass(cls) {
      return cls;
    }
  ]
});

foam.CLASS({
  package: 'foam.android.tools',
  name: 'ArgumentJavaRefinement',
  refines: 'foam.core.Argument',
  flags: ['android'],
  properties: [
    { class: 'foam.android.tools.AndroidType' }
  ]
});
