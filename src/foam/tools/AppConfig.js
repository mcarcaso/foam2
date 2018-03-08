/**
 * @license
 * Copyright 2018 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: "foam.tools",
  name: "AppConfig",
  imports: [
    'classloader',
  ],
  properties: [
    ['refines', []],
    ['requires', []],
  ],
  methods: [
    function load() {
      var self = this;

      var load = function(r) {
        return self.classloader.load(r);
      };

      return Promise.all(self.refines.map(load)).then(function() {
        return Promise.all(self.requires.map(load));
      }).then(function(models) {
        return self.refines.concat(self.requires, self.model_.id);
      });
    },
    function concat(appConfig) {
      return this.cls_.create({
        refines: this.refines.concat(appConfig.refines),
        requires: this.requires.concat(appConfig.requires),
      });
    },
  ]
});
