#!/usr/bin/env node
(async function () {
  var dir = __dirname;
  var root = dir + '/../../';
  require(root + '/src/foam.js');
  var executorArgs = {
    classpaths: [
      dir + '/src/'
    ],
    modelId: 'foam.cross_platform.code_generation.GenApp',
    modelArgs: {
      appDir: dir,
      appName: 'FOAM Demo App',
      modelIds: [
        'demo.App',
        'demo.ArrayDAO',
        'demo.Reddit',
        'demo.Compare',
        'demo.ImportExport',
        'demo.Json',
        'demo.MLang',
        'demo.Method',
        'demo.Person',
        'demo.Reaction',
        'demo.Slot',
      ],
      arg: process.argv[2],
    }
  };
  await foam.classloader.NodeJsModelExecutor.create(executorArgs).execute();
  console.log('Code generation complete!');
})();