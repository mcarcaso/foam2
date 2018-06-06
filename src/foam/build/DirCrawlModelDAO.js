/**
 * @license
 * Copyright 2018 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'foam.build',
  name: 'DirCrawlModelDAO',
  extends: 'foam.dao.PromisedDAO',
  requires: [
    'foam.core.Script',
    'foam.dao.ArrayDAO',
    'foam.dao.Relationship',
    'foam.build.DepComparator',
    'foam.build.JsCodeFileSink',
  ],
  properties: [
    {
      name: 'blacklist',
      value: [
        // TODO this is blacklisted because it encounters https://github.com/foam-framework/foam2/issues/1169
        // Fix issue and uncomment.
        'src/foam/java/Class.js',

        'src/foam/nanos/nanos.js',
        'src/files.js',

        'src/foam/core/poly.js',
        'src/foam/core/lib.js',
        'src/foam/core/stdlib.js',
        'src/foam/core/events.js',
        'src/foam/core/Context.js',
        'src/foam/core/Boot.js',
        'src/foam/core/FObject.js',
        'src/foam/core/Model.js',
        'src/foam/core/Property.js',
        'src/foam/core/Method.js',
        'src/foam/core/Boolean.js',
        'src/foam/core/AxiomArray.js',
        'src/foam/core/EndBoot.js',
        'src/foam.js',

        'src/com/*',
        'src/apps/*',

        'src/foam/box/pipeline/PipelineManagerNonRPC.js',
        'src/foam/box/pipeline/RunnableRPCBox.js',
        'src/foam/box/pipeline/PipelineBuilder.js',
        'src/foam/box/pipeline/PipelineManager.js',
        'src/foam/box/pipeline/PipelineNode.js',

        'src/lib/dao_test.js',
        'src/foam/core/lib.js',

        // TODO Move this to test dir?
        'src/foam/box/node/forkScript.js',
      ],
    },
    {
      name: 'delegate',
      factory: function() { return this.ArrayDAO.create(); },
    },
    {
      name: 'promise',
      factory: function() {
        var self = this;
        return self.fillDAO(self.delegate).then(function() {
          return self.delegate;
        });
      },
    },
  ],
  methods: [
    function fillDAO(dao) {
      var self = this;

      var promises = [];

      var context = {
        foam: Object.create(foam)
      };

      context.foam.LIB = function(m) {
        console.log('LIB ENCOUNTERED');
      };

      context.foam.SCRIPT = function(m) {
        promises.push(dao.put(self.Script.create(m)));
      };

      context.foam.ENUM = function(m) {
        m.class = m.class || 'foam.core.EnumModel',
        context.foam.CLASS(m);
      };

      context.foam.INTERFACE = function(m) {
        m.class = m.class || 'foam.core.InterfaceModel',
        context.foam.CLASS(m);
      };

      context.foam.CLASS = function(m) {
        promises.push(Promise.all(foam.json.references(self.__context__, m)).then(function(p) {
          var cls = self.lookup(m.class || 'foam.core.Model')
          return dao.put(cls.create(m));
        }))
      };

      context.foam.RELATIONSHIP = function(m) {
        //promises.push(dao.put(self.Relationship.create(m)));
      };

      var self = this;
      var blacklistExp = new RegExp(self.blacklist.join('|'));
      var files = require('child_process')
        .execSync('find src')
        .toString('utf-8')
        .split('\n')
        .filter(function(o) {
          return o.endsWith('.js');
        })
        .filter(function(o) {
          return !blacklistExp.exec(o)
        })

      var fs = require('fs');
      files.forEach(function(f) {
        var o = fs.readFileSync(f, 'utf-8');
        try {
          with ( context ) { eval(o) };
        } catch(e) {
          console.log(e);
        }
      });

      return Promise.all(promises);
    },
  ],
});
