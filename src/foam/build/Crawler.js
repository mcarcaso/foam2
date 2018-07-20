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
  ],
  implements: [
    'foam.mlang.Expressions',
  ],
  constants: [
    {
      name: 'CORE_FILES',
      value: [
        'foam/core/poly',
        'foam/core/lib',
        'foam/core/stdlib',
        'foam/core/events',
        'foam/core/Context',
        'foam/core/Boot',
        'foam/core/FObject',
        'foam/core/Model',
        'foam/core/Property',
        'foam/core/Method',
        'foam/core/Boolean',
        'foam/core/AxiomArray',
        'foam/core/EndBoot',
      ],
    }
  ],
  properties: [
    {
      name: 'flags',
      value: ['js', 'web', 'debug'],
    },
    {
      name: 'outDir',
      value: 'STRIPPED/src',
    },
    {
      name: 'srcDir',
      value: 'src',
    },
    {
      name: 'dirDAO',
      factory: function() { return this.DirCrawlModelDAO.create() },
    },
    {
      name: 'dao',
      expression: function(flags, dirDAO) {
        var self = this;
        return self.PromisedDAO.create({
          promise: new Promise(function(r) {
            var dest = self.EasyDAO.create({daoType: 'MDAO', of: 'foam.core.Model'});
            dirDAO 
              .where(self.FUNC(foam.util.flagFilter(flags)))
              .select(
                self.AxiomBuildHack.create({
                  delegate: self.FlagStripSink.create({
                    flags: flags,
                    delegate: self.DAOSink.create({dao: dest})
                  })
                })
              ).then(function() { r(dest) });
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
  classes: [
    {
      name: 'AxiomBuildHack',
      requires: [
        'foam.core.Model',
      ],
      extends: 'foam.dao.ProxySink',
      methods: [
        function put(o, s) {
          if ( this.Model.isInstance(o) ) {
            o.cls_.private_.axiomCache[''] = undefined;
          }
          this.delegate.put(o, s);
        },
      ],
    },
  ],
  methods: [
    function execute() {
      var self = this;

      self.writeToDir().then(function() {
        return Promise.all([
          self.getTreeHead(self.IN(self.Model.ID, [
            'foam.core.ConstantSlot',
            'foam.core.ModelConstantRefine',
            'foam.core.ImportExportModelRefine',
            'foam.core.ModelRequiresRefines',
            'foam.core.ImplementsModelRefine',
          ])),
          self.getTreeHead(self.IN(self.Model.ID, [
            'foam.core.DebugDescribeScript',
          ])),
          self.getTreeHead(self.IN(self.Model.ID, [
            'foam.core.WindowScript',
          ])),
          self.getTreeHead(self.IN(self.Model.ID, [
            'foam.net.WebLibScript',
          ])),
          self.getTreeHead(self.HAS(self.Script.CODE)),
          self.getTreeHead(self.HAS(self.Model.REFINES)),
          self.getTreeHead(self.HAS(self.Relationship.SOURCE_MODEL)),
        ])
      }).then(function(args) {
        return Promise.all([
          self.getLibs()
        ].concat(
          args.map(function(a) {
            return self.orderDepTree(a);
          })
        ));
      }).then(function(args) {
        args.unshift(self.CORE_FILES);
        var files = [].concat.apply([], args).map(function(o) {
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
        self.copyCoreFilesToOutDir();
      });
    },
    function getTreeHead(pred) {
      return this.dao
        .where(pred)
        .select(this.DepTreeSink.create({dao: this.dao}))
        .then(function(s) { return s.headPromise });
    },
    function copyCoreFilesToOutDir() {
      var self = this;
      self.CORE_FILES.concat('foam').forEach(function(f) {
        f = f + '.js';
        self.fs.writeFileSync(
          self.outDir + self.sep + f,
          self.fs.readFileSync(self.srcDir + self.sep + f, 'utf-8'),
          'utf-8',
        )
      });
    },
    function orderDepTree(head) {
      var self = this;
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
        return self.dao.find(id);
      })).then(function(models) {
        return models.filter(function(m) { return !!m }).map(function(m) { return m.id });
      });
    },
    function getLibs() {
      var self = this;
      return self.dao.where(self.OR(
        self.HAS(self.Lib.JSON),
      )).select().then(function(m) {
        return m.array.map(function(l) { return l.id });
      })
    },
    function writeToDir() {
      var self = this;
      return self.dao.select(self.FileTreeSink.create({
        dir: self.outDir,
      })).then(function(s) {
        console.log('Done writing to', self.outDir);
      });
    },
  ],
});
