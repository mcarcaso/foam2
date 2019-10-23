foam.CLASS({
  package: 'foam.android.tools',
  name: 'InnerClassRefine',
  refines: 'foam.core.InnerClass',
  flags: ['android'],
  methods: [
    function buildAndroidClass(cls, parentCls) {
      if ( ! parentCls.hasOwnAxiom(this.name) ) return;
      var innerClass = this.model.buildClass().buildAndroidClass();
      innerClass.innerClass = true;
      innerClass.static = true;
      cls.classes.push(innerClass);

      cls.method({
        visibility: 'protected',
        type: this.name + '.' + 'Builder',
        name: this.name + '_create',
        body: `return ${this.name}.${this.name}Builder(getSubX());`
      });

      return cls;
    }
  ]
});
