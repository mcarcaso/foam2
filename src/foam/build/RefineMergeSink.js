foam.CLASS({
  package: 'foam.build',
  name: 'RefineMergeSink',
  extends: 'foam.dao.ProxySink',
  requires: [
    'foam.core.Model',
  ],
  properties: [
    {
      class: 'Map',
      name: 'models',
    },
    {
      class: 'Array',
      name: 'refinements',
    },
  ],
  methods: [
    function put(o, s) {
      if ( this.Model.isInstance(o) ) {
        if ( o.hasOwnProperty('refines') ) this.refinements.push(o);
        else this.models[o.id] = o;
      } else {
        this.delegate.put(o, s);
      }
    },
    function eof() {
      debugger;
      var self = this;
      self.refinements.forEach(function(refine) {
        var model = self.models[refine.refines];
        if ( ! model ) return;
        model = model.clone();

        model.cls_.getAxiomsByClass(foam.core.Property).forEach(function(a) {
          if ( ! refine[a.name] ) return;
          if ( foam.Array.isInstance(refine[a.name]) ) {
            var arr = model[a.name] || [];
            model[a.name] = arr.concat(refine[a.name]);
          }
        });

        self.models[model.id] = model;
      });

      var detached = false;
      var sub = { detach: function() { detached = true; } }
      var models = Object.values(self.models);
      for ( var i = 0 ; ! detached && i < models.length ; i++ ) {
        self.delegate.put(models[i], sub);
      }
      self.delegate.eof();
    },
    function execute() {
      // This is just a demo.
      var self = this;
      var c = self.__context__.classloader
      return Promise.all([
        c.load('foam.build.DirCrawlModelDAO'),
        c.load('foam.build.FileTreeSink'),
      ]).then(function(cls) {
        var dao = cls[0].create();
        self.delegate = cls[1].create({ dir: 'STRIPPED/src' });
        return dao.select(self);
      }).then(function() {
        console.log('done');
      });
    },
  ],
});
