foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines.ios_swift',
  name: 'InnerClassRefine',
  refines: 'foam.core.InnerClass',
  flags: ['swift'],
  methods: [
    function getDeps(flagFilter, deps) {
      this.model.buildClass().getDeps(flagFilter, deps);
    },
    function buildSwiftClass(cls, parentCls) {
      if ( ! parentCls.hasOwnAxiom(this.name) ) return;
      var innerClass = this.model.buildClass().buildSwiftClass();
      cls.classes.push(innerClass);

      cls.method({
        type: this.name + '.' + this.name + 'Builder_',
        name: this.name + '_create',
        body: `return ${this.name}.${this.name}Builder(getSubX());`
      });

      return cls;
    }
  ]
});

