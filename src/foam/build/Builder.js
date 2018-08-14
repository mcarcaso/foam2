/**
 * @license
 * Copyright 2018 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'foam.build',
  name: 'Builder',
  requires: [
    'foam.build.DirWriter',
    'foam.build.FilesJsGen',
  ],
  properties: [
    {
      name: 'srcDirs',
      factory: function() {
        return [global.FOAM_ROOT]
      },
    },
    {
      name: 'outDir',
      value: 'STRIPPED/src',
    },
  ],
  methods: [
    function execute() {
      var self = this;

      // Clear the destination dir and copy all non-js files to it from the
      // srcDirs.
      var cp = require('child_process');
      cp.execSync('rm -rf ' + self.outDir)
      cp.execSync('mkdir -p ' + self.outDir)
      self.srcDirs.forEach(function(srcDir) {
        cp.execSync(`rsync -a --exclude='*.js' ${srcDir}/ ${self.outDir}/`)
      })

      Promise.all(self.srcDirs.map(function(srcDir) {
        return self.DirWriter.create({
          srcDir: srcDir,
          outDir: self.outDir,
        }).execute();
      })).then(function() {
        return self.FilesJsGen.create({
          // TODO: args.
        }).getFilesJs()
      }).then(function(filesJs) {
        // Write files.js and copy foam.js to destDir.
        var sep = require('path').sep;
        var fs = require('fs');
        fs.writeFileSync(self.outDir + sep + 'files.js', filesJs, 'utf8');
        fs.writeFileSync(
          self.outDir + sep + '/foam.js',
          fs.readFileSync(global.FOAM_ROOT + sep + 'foam.js', 'utf-8'),
          'utf-8')
      });
    },
  ],
});

