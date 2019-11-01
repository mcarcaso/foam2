#!/usr/bin/env node

global.FOAM_FLAGS = {
  android: true,
  debug: true,
  java: true,
  js: true,
  node: true,
  swift: true,
};

var dir = __dirname;
var root = dir + '/../../..';

require(root + '/src/foam.js');

foam.classloader.NodeJsModelExecutor.create({
  modelId: 'foam.android.tools.GenJava',
  modelArgs: {
    classIds: [
      'foam.android.Tests'
    ],
    outputPath: dir + '/project/app/src/foam_gen' 
  }
}).execute();
