foam.CLASS({
  package: 'foam.apploader',
  name: 'ModelRefines',
  refines: 'foam.core.Model',
  methods: [
    {
      name: 'getClassDeps',
      code: function() {
        var deps = this.requires ?
            this.requires.map(function(r) { return r.path }) :
            [];

        deps = deps.concat(this.implements ?
                           this.implements.map(function(i) { return i.path }) :
                           []);

        if ( this.extends ) deps.push(this.extends);

        if ( this.refines ) deps.push(this.refines);

        return deps.map(function(d) {
          if ( d.indexOf('.') == -1 ) return 'foam.core.' + d;
          return d;
        });
      }
    },
    {
      name: 'filterAxiomsByFlags',
      code: function(flags) {
        var filter = foam.util.flagFilter(flags);
        var self = this;

        var m = {};
        var queue = self.cls_.getAxiomsByClass(foam.core.Property).map(function(p) {
          return [self, m, p];
        });

        while ( queue.length ) {
          var o = queue.pop();
          var src = o[0];
          var dest = o[1];
          var a = o[2];

          if ( ! src.hasOwnProperty(a.name) ) continue;
          var type = foam.typeOf(src[a.name]);

          if ( type == foam.Array ) {
            dest[a.name] = src[a.name].filter(filter).map(function(o) {
              if ( ! foam.core.Model.isInstance(o) ) return o;
              return o.filterAxiomsByFlags(flags)
            });
          } else {
            dest[a.name] = src[a.name];
          }
        }
        return self.cls_.create(m);
      },
    },
  ],
});
