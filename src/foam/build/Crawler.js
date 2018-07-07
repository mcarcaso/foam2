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
    'foam.core.Model',
    'foam.core.Script',
  ],
  implements: [
    'foam.mlang.Expressions',
  ],
  properties: [
    {
      name: 'flags',
      value: ['js', 'web'],
    },
    {
      name: 'outDir',
      value: 'STRIPPED',
    },
    {
      name: 'dao',
      factory: function() {
        return this.DirCrawlModelDAO.create();
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
      self.writeToDir();
      self.printRefines();
      self.printScripts();
    },
    function printRefines() {
      var self = this;
      return self.dao
        .where(self.AND(
          self.FUNC(foam.util.flagFilter(self.flags)),
          self.HAS(self.Model.REFINES),
        ))
        .select()
        .then(function(s) {
          self.fs.writeFileSync(
            self.outDir + self.sep + 'refines.txt',
            s.a.map(function(m) { return m.id }).join('\n')
          );
        });
    },
    function printScripts() {
      var self = this;
      return self.dao
        .where(self.AND(
          self.FUNC(foam.util.flagFilter(self.flags)),
          self.HAS(self.Script.CODE),
        ))
        .select()
        .then(function(s) {
          self.fs.writeFileSync(
            self.outDir + self.sep + 'scripts.txt',
            s.a.map(function(m) { return m.id }).join('\n')
          );
        });
    },
    function writeToDir() {
      var self = this;
      return self.dao
        .where(self.FUNC(foam.util.flagFilter(self.flags)))
        .select(
          self.AxiomBuildHack.create({
            delegate: self.FlagStripSink.create({
              flags: self.flags,
              delegate: self.FileTreeSink.create({
                dir: self.outDir,
              }),
            })
          })
        )
        .then(function(s) {
          console.log('Done writing to', self.outDir);
        });
    },
  ],
});
