foam.CLASS({
  package: 'foam.android.tools',
  name: 'ModelJavaRefinement',
  refines: 'foam.core.Model',
  flags: ['android'],
  properties: [
    {
      class: 'StringProperty',
      name: 'androidPackage',
      expression: function(package) {
        return package;
      }
    },
    {
      class: 'StringProperty',
      name: 'androidExtends',
      expression: function(extends$) {
        var e = extends$ == 'FObject' ? 'foam.cross_platform.AbstractFObject' : extends$;
        if ( e.indexOf('.') == -1 ) e = 'foam.core.' + e;
        return e;
      }
    }
  ],
  methods: [
    {
      name: 'getDeps',
      code: function(flagFilter, deps) {
        if ( this.extends != 'FObject' ) {
          deps[this.extends] = true;
          foam.lookup(this.extends).model_.getDeps(flagFilter, deps);
        }
      }
    }
  ]
});
