/**
 * @license
 * Copyright 2018 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'foam.build',
  name: 'FilesJsGen',
  requires: [
    'foam.build.DepTreeSink',
    'foam.build.DirCrawlModelDAO',
    'foam.build.Lib',
    'foam.build.StrippedModelDAO',
    'foam.core.Model',
    'foam.core.Script',
    'foam.dao.Relationship',
  ],
  implements: [
    'foam.mlang.Expressions',
  ],
  constants: [
    {
      name: 'CORE_MODELS',
      documentation: `
        The following models must be added to files.js first and in this
        specific order.
      `,
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
    },
    {
      name: 'PHASE_1',
      documentation: `
        The following models must be added to files.js second but their order
        does not matter and all of their dependencies will be automatically
        added first.
      `,
      value: [
        'foam.core.ContextMultipleInheritenceScript',
        'foam.core.DebugDescribeScript',
        'foam.core.ImplementsModelRefine',
        'foam.core.ImportExportModelRefine',
        'foam.core.ListenerModelRefine',
        'foam.core.MethodArgumentRefine',
        'foam.core.ModelConstantRefine',
        'foam.core.ModelRefinestopics',
        'foam.core.ModelRequiresRefines',
        'foam.core.ModelActionRefine',
        'foam.core.Promised',
        'foam.core.__Class__',
        'foam.core.__Property__',
      ],
    },
    {
      name: 'PHASE_2',
      documentation: `
        The following models must be added to files.js after PHASE_1. Their
        order doesn't matter as long as they're added after PHASE_1. Their
        dependencies will automatically be added first.
      `,
      value: [
        'foam.core.ModelRefinescss',
        'foam.core.WindowScript',
        'foam.net.WebLibScript',
      ],
    },
    {
      name: 'NANOS_MODELS',
      documentation: `
        These are the models needed for booting nanos.
      `,
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
  ],
  properties: [
    {
      name: 'required',
      documentation: `
        These are the models to be loaded when files.js is finished loading.
      `,
      factory: function() { return this.NANOS_MODELS },
    },
    {
      name: 'srcDir',
      value: 'STRIPPED/src',
    },
    {
      name: 'modelDAO',
      expression: function(srcDir) {
        return this.DirCrawlModelDAO.create({srcDir: srcDir})
      },
    },
  ],
  methods: [
    function execute() {
      this.getFilesJs().then(console.log);
    },
    function getFilesJs() {
      var self = this;
      var getTreeHead = function(pred) {
        return self.modelDAO
          .where(pred)
          .select(self.DepTreeSink.create({dao: self.modelDAO}))
          .then(function(s) { return s.headPromise });
      };
      return Promise.all([
          getTreeHead(self.IN(self.Model.ID, self.CORE_MODELS)),
          getTreeHead(self.HAS(self.Lib.JSON)),
          getTreeHead(self.IN(self.Model.ID, self.PHASE_1)),
          getTreeHead(self.IN(self.Model.ID, self.PHASE_2)),
          getTreeHead(self.HAS(self.Script.CODE)),
          getTreeHead(self.HAS(self.Relationship.SOURCE_MODEL)),
          getTreeHead(self.HAS(self.Model.REFINES)),
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
            // Remove anyting not in the DAO.
            return Promise.all(order.map(function(id) {
              return self.modelDAO.find(id);
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
        return filesJs
      });
    },
  ],
});
