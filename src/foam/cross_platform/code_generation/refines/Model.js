foam.CLASS({
  package: 'foam.cross_platform.code_generation.refines',
  name: 'ModelJavaRefinement',
  refines: 'foam.core.Model',
  flags: ['android'],
  properties: [
    {
      class: 'StringProperty',
      name: 'crossPlatformExtends',
      expression: function(extends$) {
        var e = extends$ == 'FObject' ? 'foam.cross_platform.AbstractFObject' : extends$;
        if ( e.indexOf('.') == -1 ) e = 'foam.core.' + e;
        return e;
      }
    },
    {
      class: 'ClassProperty',
      name: 'crossPlatformParentClass',
      expression: function(extends$) {
        if ( extends$ == 'FObject' ) return foam.cross_platform.AbstractFObject;
        return foam.lookup(extends$);
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
