#!/usr/bin/env node

var dir = __dirname;
var root = dir + '/../..';

FOAM_FLAGS = {
  web: true,
  loader: true,
  build: true,
}

require(root + '/src/foam.js');
require(root + '/src/foam/nanos/nanos.js');

var classloader = foam.__context__.classloader;
classloader.addClassPath(dir + '/src');

var configPath = dir + '/config.js';
var config = require('fs').readFileSync(configPath, 'utf8');
var deserializer = foam.json2.Deserializer.create();

Promise.all([
  classloader.load('foam.tools.Build'),
  deserializer.aparseString(foam.__context__, config),
]).then(function(args) {
  return args[0].create({
    appConfig: args[1],
  }).execute();
}).then(function(output) {
  console.log(dir + 'dao.js');
  require('fs').writeFileSync(dir + '/dao.js', output, 'utf8');
});
