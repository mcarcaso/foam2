foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines',
  name: 'ListenerRefinement',
  refines: 'foam.core.Listener',
  properties: [
    {
      class: 'StringProperty',
      name: 'androidListenerName',
      expression: function(name) { return name + '_listener'; },
    }
  ],
  methods: [
    function buildAndroidClass(cls, parentCls) {
      if ( ! parentCls.hasOwnAxiom(this.name) ) return;
      this.SUPER(cls, parentCls);
      var fieldName = this.androidListenerName + '_var';
      cls.field({
        visibility: 'private',
        type: 'foam.cross_platform.Listener',
        name: fieldName
      });
      cls.method({
        visibility: 'public',
        type: 'foam.cross_platform.Listener',
        name: this.androidListenerName,
        body: `
          if ( ${fieldName} == null ) {
            final ${cls.name} obj = this;
            ${fieldName} = new foam.cross_platform.Listener() {
              public void executeListener(foam.core.Detachable sub, Object[] args) {
                obj.${this.name}(sub, args);
              }
            };
          }
          return ${fieldName};
        `
      });
    }
  ]
});
