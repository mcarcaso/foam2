foam.CLASS({
  package: 'foam.nanos.demo',
  name: 'DemoBuild',
  requires: [
    'foam.tools.Build',
    'foam.json2.Deserializer',
  ],
  methods: [
    function execute() {
      var self = this;
      var configPath = global.FOAM_ROOT + '/foam/nanos/demo/DemoConfig.js';
      var config = require('fs').readFileSync(configPath, 'utf8');
      var deserializer = self.Deserializer.create();
      deserializer.aparseString(self.__context__, config).then(function(config) {
        var dir = __dirname + '/../../../NANO_BUILD/';
        self.Build.create({
          flags: ['web', 'js'],
          appConfig: config,
          root: dir,
        }).execute();
      });
    },
  ],
});
