#!/usr/bin/env node

var dir = __dirname;
var root = dir + '/../..';

FOAM_FLAGS = {
  web: true,
  loader: true,
  build: true,
}

require(root + '/src/foam.js');

var classloader = foam.__context__.classloader;
classloader.addClassPath(dir + '/src');

var buildPath = dir + '/build/';
require('child_process').execSync('rm -rf ' + buildPath, {stdio:[0,1,2]});

var configPath = dir + '/config.js';
var config = require('fs').readFileSync(configPath, 'utf8');
var deserializer = foam.json2.Deserializer.create();

Promise.all([
  classloader.load('foam.tools.Build'),
  deserializer.aparseString(foam.__context__, config),
]).then(function(args) {
  args[0].create({
    appConfig: args[1],
    root: buildPath,
  }).execute();
});
