foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines',
  name: 'ArrayPropertyRefinement',
  refines: 'foam.core.FObjectArray',
  requires: [
    'foam.cross_platform.ui.widget.FObjectArrayView'
  ],
  properties: [
    {
      name: 'cpView',
      crossPlatformFactoryValue: {
        class: 'foam.cross_platform.ui.widget.FObjectArrayView'
      }
    },
  ],
  methods: [
    {
      name: 'getDeps',
      code: function (flagFilter, deps) {
        if (!flagFilter(this)) return;
        if (!this.of) return;
        deps[this.of] = true;
      }
    }
  ]
});