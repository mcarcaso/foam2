/**
 * @license
 * Copyright 2018 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'foam.build',
  name: 'Crawler',
  requires: [
    'foam.build.DirCrawlModelDAO',
    'foam.build.FileTreeSink',
    'foam.build.FlagStripSink',
    'foam.build.Lib',
    'foam.core.Model',
    'foam.core.Script',
    'foam.dao.DAOSink',
    'foam.dao.EasyDAO',
    'foam.dao.PromisedDAO',
    'foam.dao.Relationship',
    'foam.build.DepTreeSink',
    'foam.classloader.OrDAO',
    'foam.dao.NullDAO',
  ],
  imports: [
    'classloader',
  ],
  implements: [
    'foam.mlang.Expressions',
  ],
  constants: [
    {
      name: 'CORE_MODELS',
      value: [
        'foam.core.polyScript',
        'foam.core.libScript',
        'foam.core.stdlibScript',
        'foam.core.eventsScript',
        'foam.core.ContextScript',
        'foam.core.BootScript',
        'foam.core.FObjectScript',
        'foam.core.ModelScript',
        'foam.core.Property',
        'foam.core.Simple',
        'foam.core.AbstractMethod',
        'foam.core.Method',
        'foam.core.MethodScript',
        'foam.core.BooleanScript',
        'foam.core.AxiomArrayScript',
        'foam.core.EndBootScript',
      ],
    }
  ],
  properties: [
    {
      name: 'required',
      value: [
        'foam.blob.AbstractBlobService',
        'foam.blob.RestBlobService',
        'foam.box.PromisedBox',
        'foam.box.RPCReturnBox',
        'foam.box.SocketConnectBox',
        'foam.dao.JDAO',
        'foam.dao.PromisedDAO',
        'foam.nanos.notification.Notification',
        'foam.u2.search.TextSearchView',
      ],
    },
    {
      name: 'flags',
      value: ['js', 'web', 'debug'],
    },
    {
      name: 'outDir',
      value: 'STRIPPED/src',
    },
    {
      name: 'srcDirs',
      value: [
        'src',
        '../nanopay/src',
      ],
    },
    {
      name: 'modelDAO',
      expression: function(srcDirs) {
        var self = this;
        var dao = self.NullDAO.create();
        srcDirs.forEach(function(srcDir) {
          dao = self.OrDAO.create({
            primary: dao,
            delegate: self.DirCrawlModelDAO.create({
              srcDir: srcDir,
            })
          })
        })
        return dao
      },
    },
    {
      name: 'strippedModelDAO',
      expression: function(flags, modelDAO) {
        var self = this;
        return self.PromisedDAO.create({
          promise: new Promise(function(r) {
            var dest = self.EasyDAO.create({daoType: 'MDAO', of: 'foam.core.Model'});
            modelDAO
              .where(self.FUNC(foam.util.flagFilter(flags)))
              .select(self.FlagStripSink.create({
                flags: flags,
                delegate: self.DAOSink.create({dao: dest})
              })).then(function() { r(dest) });
          })
        });
      },
    },
    {
      name: 'fs',
      factory: function() { return require('fs'); }
    },
    {
      name: 'sep',
      factory: function() { return require('path').sep; }
    },
  ],
  methods: [
    function execute() {
      var self = this;
      self.classloader.addClassPath('../nanopay/src');
      self.writeToDir().then(function() {
        return self.writeFilesJs()
      }).then(function() {
        self.copyCoreFilesToOutDir();
      });
    },
    function writeFilesJs() {
      var self = this;
      var getTreeHead = function(pred) {
        return self.strippedModelDAO
          .where(pred)
          .select(self.DepTreeSink.create({dao: self.strippedModelDAO}))
          .then(function(s) { return s.headPromise });
      };
      return Promise.all([
          getTreeHead(self.IN(self.Model.ID, self.CORE_MODELS)),
          getTreeHead(self.HAS(self.Lib.JSON)),
          getTreeHead(self.IN(self.Model.ID, [
            'foam.core.ContextMultipleInheritenceScript',
            'foam.core.DebugDescribeScript',
            'foam.core.ImplementsModelRefine',
            'foam.core.ImportExportModelRefine',
            'foam.core.ListenerModelRefine',
            'foam.core.MethodArgumentRefine',
            'foam.core.ModelConstantRefine',
            'foam.core.ModelRefinestopics',
            'foam.core.ModelRequiresRefines',
            'foam.core.Promised',
            'foam.core.__Class__',
            'foam.core.__Property__',
          ])),
          getTreeHead(self.IN(self.Model.ID, [
            'foam.core.WindowScript',
            'foam.net.WebLibScript',
            'foam.core.ModelRefinescss'
          ])),
          getTreeHead(self.HAS(self.Script.CODE)),
          getTreeHead(self.HAS(self.Model.REFINES)),
          getTreeHead(self.HAS(self.Relationship.SOURCE_MODEL)),
          getTreeHead(self.IN(self.Model.ID, self.required)),
      ]).then(function(args) {
        return Promise.all(
          args.map(function(head) {
            var order = [];
            var queue = [head];
            while ( queue.length ) {
              var n = queue.pop();
              Object.keys(n).forEach(function(k) {
                if ( order.indexOf(k) == -1 ) queue.unshift(n[k]);
                order.unshift(k)
              });
            }

            // Remove duplicates.
            order = order.filter(function(id, i) {
              return order.indexOf(id) == i;
            })

            // Remove anyting not in the DAO.
            return Promise.all(order.map(function(id) {
              return self.strippedModelDAO.find(id);
            })).then(function(models) {
              return models.filter(function(m) { return !!m }).map(function(m) { return m.id });
            });
          })
        );
      }).then(function(args) {
        var files = [].concat.apply([], self.CORE_MODELS.concat(args)).map(function(o) {
          return `{ name: "${o.replace(/\./g, '/')}" },`;
        });

        // Remove duplicates.
        files = files.filter(function(id, i) {
          return files.indexOf(id) == i;
        })

        var filesJs = `
if ( typeof window !== 'undefined' ) global = window;
FOAM_FILES([
${files.join('\n  ')}
]);
        `.trim();
        self.fs.writeFileSync(self.outDir + self.sep + 'files.js', filesJs, 'utf8');
      });
    },
    function copyCoreFilesToOutDir() {
      var self = this;
      self.fs.writeFileSync(
        self.outDir + self.sep + '/foam.js',
        self.fs.readFileSync(global.FOAM_ROOT + self.sep + 'foam.js', 'utf-8'),
        'utf-8')
    },
    function writeToDir() {
      var self = this;
      require('child_process').execSync('rm -rf ' + self.outDir)
      self.srcDirs.forEach(function(srcDir) {
        require('child_process').execSync(`rsync -a --exclude='*.js' ${srcDir}/ ${self.outDir}/`)
      })
      return self.strippedModelDAO.select(self.FileTreeSink.create({
        dir: self.outDir,
      })).then(function(s) {
        console.log('Done writing to', self.outDir);
      });
    },
  ],
});
