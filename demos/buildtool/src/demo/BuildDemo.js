foam.CLASS({
  package: 'demo',
  name: 'BuildDemo',
  extends: 'foam.u2.View',
  requires: [
    'foam.json2.Deserializer',
  ],
  imports: [
    'classloader',
  ],
  methods: [
    function initE() {
      var self = this;
      var d = self.Deserializer.create();
      var p = 'http://localhost:8000/demos/buildtool/dao.js';
      var c = self.classloader;
      d.aparseUrl(self, 'http://localhost:8000/demos/buildtool/dao.js').then(function(dao) {
        c.modelDAO = dao;
        return Promise.all([
          c.load('demo.ClassDisplayer'),
          c.load('foam.u2.DetailView'),
        ]);
      }).then(function(args) {
        self.add(args[1].create({
          data: args[0].create(),
          showActions: true,
        }));
      });;
    },
  ],
});
