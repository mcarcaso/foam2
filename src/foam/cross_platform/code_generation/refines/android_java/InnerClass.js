foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines.android_java',
  name: 'InnerClassRefine',
  refines: 'foam.core.InnerClass',
  flags: ['android'],
  methods: [
    function getDeps(flagFilter, deps) {
      this.model.buildClass().getDeps(flagFilter, deps);
    },
    function buildAndroidClass(cls, parentCls) {
      if ( ! parentCls.hasOwnAxiom(this.name) ) return;
      var innerClass = this.model.buildClass().buildAndroidClass();
      innerClass.innerClass = true;
      innerClass.static = true;
      cls.classes.push(innerClass);

      cls.method({
        visibility: 'protected',
        type: this.name + '.' + this.name + 'Builder_',
        name: this.name + '_create',
        body: `return ${this.name}.${this.name}Builder(getSubX());`
      });

      return cls;
    }
  ]
});
