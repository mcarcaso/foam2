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
    'foam.build.Lib',
    'foam.core.Script',
    'foam.dao.EasyDAO',
    'foam.dao.Relationship',
  ],
  imports: [
    'classloader',
  ],
  properties: [
    {
      name: 'unwrappedScripts',
      value: [
        'src/foam/core/poly\\.js',
        'src/foam/core/lib\\.js',
        'src/foam/core/stdlib\\.js',
        'src/foam/core/events\\.js',
        'src/foam/core/Boot\\.js',
        'src/foam/core/FObject\\.js',
        'src/foam/core/Model\\.js',
        'src/foam/core/Boolean\\.js',
        'src/foam/core/AxiomArray\\.js',
        'src/foam/core/EndBoot\\.js',
      ],
    },
    {
      name: 'blacklist',
      value: [
        // Not models.
        'src/foam/nanos/nanos\\.js',
        'src/files\\.js',

        'src/foam\\.js',

        // Dirs we don't care about.
        'src/com/*',
        'src/apps/*',

        // Test files.
        'src/lib/dao_test\\.js',
        'src/foam/box/node/forkScript\\.js',
      ],
    },
    {
      name: 'delegate',
      factory: function() { return this.EasyDAO.create({daoType: 'MDAO', of: 'foam.core.Model'}); },
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

      var libCnt = 0;
      context.foam.LIB = function(m) {
        promises.push(dao.put(self.Lib.create({
          package: 'lib',
          name: 'Lib' + libCnt,
          json: m,
        })));
        libCnt++;
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
        var r = self.Relationship.create(m);
        promises.push(Promise.all([
          self.classloader.load(r.sourceModel),
          self.classloader.load(r.targetModel)
        ]).then(function() {
          return dao.put(r);
        }))
      };

      var self = this;
      var blacklistExp = new RegExp(self.blacklist.join('|'));
      var scriptFilesExp = new RegExp(self.unwrappedScripts.join('|'));
      var files = require('child_process')
        .execSync('find src')
        .toString('utf-8')
        .split('\n');

      var jsFiles = files
        .filter(function(o) {
          return o.endsWith('.js');
        })

      var evalFiles = jsFiles
        .filter(function(o) {
          return !blacklistExp.exec(o) && !scriptFilesExp.exec(o)
        })

      var scriptFiles = jsFiles
        .filter(function(o) {
          return scriptFilesExp.exec(o)
        })

      // TODO: Do something with java files?
      var javaFiles = files
        .filter(function(o) {
          return o.endsWith('.java');
        })

      var fs = require('fs');
      var sep = require('path').sep;
      evalFiles.forEach(function(f) {
        var o = fs.readFileSync(f, 'utf-8');
        try {
          with ( context ) { eval(o) };
        } catch(e) {
          console.log(e);
        }
      });

      scriptFiles.forEach(function(f) {
        var o = fs.readFileSync(f, 'utf-8');
        var tokens = f.split(sep);

        // Remove extension and append 'Script' to name.
        var n = tokens.pop().split('.').shift() + 'Script';

        tokens.shift(); // Remove src.
        var p = tokens.join('.');

        with ( context ) {
          foam.SCRIPT({
            package: p,
            name: n,
            code: new Function(o),
          });
        }
      });

      return Promise.all(promises);
    },
  ],
});
