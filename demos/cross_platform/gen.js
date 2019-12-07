#!/usr/bin/env node

(async function() {

  var dir = __dirname;
  var root = dir + '/../..';

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

  if ( process.argv[2] == 'clean' ) {
    var child_process = require('child_process');
    var cmd = `rm -rf \\
      "${platforms.swift.sourcePath}" \\
      "${platforms.android.sourcePath}" \\
      "${platforms.swift.testPath}" \\
      "${platforms.android.testPath}"`;
    console.log(cmd);
    console.log(child_process.execSync(cmd).toString());
    return;
  }

  global.FOAM_FLAGS = {
    android: true,
    debug: true,
    java: true,
    js: true,
    node: true,
    swift: true,
  };
  require(root + '/src/foam.js');

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
        'demo.ArrayDAO',
        'demo.Compare',
        'demo.ImportExport',
        'demo.MLang',
        'demo.Method',
        'demo.Person',
        'demo.Reaction',
        'demo.Slot',
        'foam.cross_platform.ui.DetailPropertyViewModel',
      ],
      sourcePath: platformArgs.sourcePath,
      testPath: platformArgs.testPath,
      swiftAppName: platformArgs.swiftAppName,
    }
  };

  await foam.classloader.NodeJsModelExecutor.create(executorArgs).execute();
  console.log('Code generation complete!');
})();
