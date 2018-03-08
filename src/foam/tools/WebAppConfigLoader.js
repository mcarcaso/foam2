foam.CLASS({
  package: 'foam.tools',
  name: 'WebAppConfigLoader',
  requires: [
    'foam.json2.Deserializer',
    'foam.net.web.HTTPRequest',
  ],
  properties: [
    {
      name: 'd',
      factory: function() { return this.Deserializer.create() },
    },
  ],
  methods: [
    function load() {
      var self = this;

      var promises = [];
      for ( var i = 0; i < arguments.length; i++ ) {
        promises.push(self.HTTPRequest.create({
          method: 'GET',
          url: arguments[i],
        }).send().then(function(p) {
          return p.resp.text();
        }).then(function(p) {
          return self.d.aparseString(self, p);
        }));
      }

      return Promise.all(promises).then(function(configs) {
        var c = configs.shift();
        while ( configs.length ) {
          c = c.concat(configs.shift());
        }
        return c.load();
      });
    },
  ]
});
