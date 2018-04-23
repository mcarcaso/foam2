foam.CLASS({
  package: 'foam.json2',
  name: 'JSON2MapDAO',
  extends: 'foam.dao.AbstractDAO',
  requires: [
    'foam.dao.ArraySink',
    'foam.json2.Deserializer',
    'foam.json2.Serializer',
  ],
  properties: [
    {
      class: 'Map',
      name: 'map',
    },
    {
      name: 's',
      hidden: true,
      factory: function() {
        return this.Serializer.create()
      },
    },
    {
      name: 'd',
      hidden: true,
      factory: function() {
        return this.Deserializer.create({parseFunctions: true})
      },
    },
  ],
  methods: [
    function put_(x, o) {
      this.map[o.id] = this.s.stringify(x, o);
      return Promise.resolve(o);
    },
    function find_(x, id) {
      return this.map[id] ?
        this.d.aparseString(x, this.map[id]) :
        Promise.resolve();
    },
    function select_(x, sink, skip, limit, order, predicate) {
      var self = this;
      return new Promise(function(resolve, reject) {
        sink = sink || self.ArraySink.create();
        dSink= self.decorateSink_(sink, skip, limit, order, predicate);

        var detached = false;
        var sub = { detach: function() { detached = true } };

        var ks = Object.keys(self.map);
        var i = 0;
        var next = function() {
          self.find_(x, ks[i]).then(function(m) {
            dSink.put(m, sub);
            i++;
            if ( detached || i == ks.length ) {
              dSink.eof();
              resolve(sink);
            } else {
              next();
            }
          });
        }
        next();
      });
    },
  ]
});
