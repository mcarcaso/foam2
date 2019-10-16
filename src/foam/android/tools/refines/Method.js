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
    {
      class: 'StringProperty',
      name: 'androidAxiomInitializerName',
      expression: function(androidAxiomName) {
        return 'init_' + androidAxiomName;
      }
    },
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
    function asAndroidValue() {
      return this.forClass_ + '.' + this.androidAxiomName;
    },
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
