#!/usr/bin/env node

var dir = __dirname;
var root = dir + '/../..';

require(root + '/src/foam.js');

var classloader = foam.__context__.classloader;

classloader.addClassPath(dir + '/src');

Promise.all([
  classloader.load('foam.tools.Build'),
]).then(function() {
  var b = foam.tools.Build.create({
    appConfigId: 'demo.build.AppConfig',
    root: dir + '/build/',
  });
  b.execute();
});
