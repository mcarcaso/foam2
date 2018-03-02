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

      var refineModels;
      return Promise.all(self.refines.map(load)).then(function(ms) {
        refineModels = ms;
        return Promise.all(self.requires.map(load));
      }).then(function(models) {
        return refineModels.concat(models);
      });
    }
  ]
});
