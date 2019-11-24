#!/usr/bin/env node

(async function() {
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
      sourcePath: dir + '/swift/foam_gen',
      testPath: dir + '/swift/foam_gen_test',
      swiftAppName: 'FOAM_Demo_App',
    },
    android: {
      sourcePath: dir + '/android/project/app/src/foam_gen',
      testPath: dir + '/android/project/app/src/test/java',
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
        'demo.Compare',
        'demo.ImportExport',
        'demo.Method',
        'demo.Person',
        'demo.Reaction',
        'demo.Slot',
        'demo.MLang',
      ],
      sourcePath: platformArgs.sourcePath,
      testPath: platformArgs.testPath,
      swiftAppName: platformArgs.swiftAppName,
    }
  };

  await foam.classloader.NodeJsModelExecutor.create(executorArgs).execute();
  console.log('Code generation complete!');
})();
