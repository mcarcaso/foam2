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
var root = dir + '/../..';
require(root + '/src/foam.js');

var platforms = {
  swift: {
    outputPath: dir + '/swift/foam_gen'
  },
  android: {
    outputPath: dir + '/android/project/app/src/foam_gen'
  }
};

if (process.argv.length != 3 || ! platforms[process.argv[2]] ) {
  console.log(`USAGE: gen.js PLATFORM`);
  console.log(`Where PLATFORM is one of ${Object.keys(platforms).join(',')}`);
  process.exit(1);
}

var platform = process.argv[2];
var platformArgs = platforms[platform];
var executorArgs = {
  classpaths: [
    root + '/demos/cross_platform/src/'
  ],
  modelId: 'foam.cross_platform.code_generation.GenCode',
  modelArgs: {
    platform: platform,
    classIds: [
      'demo.Tests'
    ],
    outputPath: platformArgs.outputPath
  }
};

foam.classloader.NodeJsModelExecutor.create(executorArgs).execute();