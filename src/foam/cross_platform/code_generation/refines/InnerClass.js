foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines',
  name: 'InnerClassRefine',
  refines: 'foam.core.InnerClass',
  methods: [
    function getDeps(flagFilter, deps) {
      this.model.buildClass().getDeps(flagFilter, deps);
    },
    function getMessages(flagFilter, map) {
      return this.model.buildClass().getMessages(flagFilter, map);
    }
  ]
});