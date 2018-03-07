foam.CLASS({
  package: 'foam.tools',
  name: 'WebAppConfigLoader',
  requires: [
    'foam.json2.Deserializer',
    'foam.net.HTTPRequest',
  ],
  properties: [
    {
      name: 'd',
      factory: function() { return this.Deserializer.create() },
    },
  ],
  methods: [
    function load(path) {
      var self = this;
      return self.HTTPRequest.create({
        method: 'GET',
        url: path
      }).send().then(function(payload) {
        return payload.resp.text();
      }).then(function(payload) {
        return self.d.aparseString(self, payload);
      }).then(function(config) {
        return config.load();
      });
    },
  ]
});
