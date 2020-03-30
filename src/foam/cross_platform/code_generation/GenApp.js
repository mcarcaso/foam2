foam.CLASS({
  package: 'foam.cross_platform.code_generation',
  name: 'GenApp',
  imports: [
    'classloader'
  ],
  requires: [
    'foam.classloader.NodeJsModelExecutor'
  ],
  properties: [
    {
      class: 'StringProperty',
      name: 'appDir',
      required: true
    },
    {
      class: 'StringProperty',
      name: 'appName',
      required: true
    },
    {
      class: 'StringArrayProperty',
      name: 'modelIds',
      required: true
    },

    {
      class: 'StringProperty',
      name: 'swiftSourcePath',
      expression: function(appDir) {
        return appDir + '/swift/foam_gen';
      }
    },
    {
      class: 'StringProperty',
      name: 'swiftTestPath',
      expression: function (appDir) {
        return appDir + '/swift/foam_gen_test';
      }
    },
    {
      class: 'StringProperty',
      name: 'swiftResourcePath',
      expression: function (appDir) {
        return appDir + '/swift/foam_resources';
      }
    },
    {
      class: 'StringProperty',
      name: 'androidSourcePath',
      expression: function (appDir) {
        return appDir + '/android/project/app/src/foam_gen';
      }
    },
    {
      class: 'StringProperty',
      name: 'androidTestPath',
      expression: function (appDir) {
        return appDir + '/android/project/app/src/test/java';
      }
    },
    {
      class: 'StringProperty',
      name: 'androidResourcePath',
      expression: function (appDir) {
        return appDir + '/android/project/app/src/foam_res';
      }
    },
    {
      class: 'StringProperty',
      name: 'messagesPath',
      expression: function (appDir) {
        return appDir + '/messages.json';
      }
    },
    {
      class: 'StringProperty',
      name: 'arg'
    },
  ],
  methods: [
    async function execute() {
      if ( this.arg == 'clean' ) {
        var child_process = require('child_process');
        var cmd = `rm -rf \\
          "${this.swiftSourcePath}" \\
          "${this.swiftTestPath}" \\
          "${this.swiftResourcePath}" \\
          "${this.androidSourcePath}" \\
          "${this.androidTestPath}" \\
          "${this.androidResourcePath}"
        `
        console.log(cmd);
        console.log(child_process.execSync(cmd).toString());
        return;
      }

      if ( this.arg != 'swift' && this.arg != 'android' ) {
        console.log(`USAGE: gen.js <swift|android|clean>`);
        process.exit(1);
      }

      var executorArgs = {
        classpaths: this.classPaths,
        modelId: 'foam.cross_platform.code_generation.GenCode',
        modelArgs: {
          platform: this.arg,
          classIds: this.modelIds,
          sourcePath: this[this.arg + 'SourcePath'],
          testPath: this[this.arg + 'TestPath'],
          resourcePath: this[this.arg + 'ResourcePath'],
          swiftAppName: this.appName.replace(/ /g, '_'),
          translationsPath: this.messagesPath
        }
      };

      await this.NodeJsModelExecutor.create(executorArgs).execute();
      console.log('Code generation complete!');
    }
  ]
});