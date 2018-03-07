#!/usr/bin/env node

var dir = __dirname;
var root = dir + '/../..';

require(root + '/src/foam.js');

var classloader = foam.__context__.classloader;
classloader.addClassPath(dir + '/src');

var configPath = dir + '/config.js';
var config = require('fs').readFileSync(configPath, 'utf8');
var deserializer = foam.json2.Deserializer.create();

Promise.all([
  classloader.load('foam.tools.Build'),
  deserializer.aparseString(foam.__context__, config),
]).then(function(args) {
  args[0].create({
    appConfig: args[1],
    root: dir + '/build/',
  }).execute();
});
