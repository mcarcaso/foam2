/**
 * @license
 * Copyright 2018 The FOAM Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

foam.CLASS({
  package: 'foam.tools',
  name: 'Build',

  requires: [
    'foam.classloader.OrDAO',
    'foam.core.Model',
    'foam.dao.DAOSink',
    'foam.dao.DecoratedDAO',
    'foam.json2.Serializer',
    'foam.tools.AppConfig',
    'foam.json2.JSON2MapDAO',
  ],

  implements: [
    'foam.mlang.Expressions',
  ],

  imports: [
    'classloader',
  ],

  exports: [
    'json2Serializer',
  ],

  properties: [
    {
      class: 'FObjectProperty',
      of: 'foam.tools.AppConfig',
      name: 'appConfig',
      factory: function() { return this.AppConfig.create() },
    },
    {
      class: 'StringArray',
      name: 'flags',
      factory: function() { return ['js', 'web'] },
    },
    {
      class: 'String',
      flags: ['web'],
      name: 'output',
      visibility: 'RO',
      view: { class: 'foam.u2.tag.TextArea', rows: 16, css: { 'white-space': 'pre-wrap' } },
    },
    {
      name: 'json2Serializer',
      hidden: true,
      factory: function() {
        return this.Serializer.create()
      },
    },
  ],

  classes: [
    {
      name: 'ModelLookupDAO',
      extends: 'foam.dao.AbstractDAO',
      methods: [
        {
          name: 'find_',
          code: function(x, id) {
            var cls = foam.lookup(id, true);
            return Promise.resolve(cls && cls.model_);
          }
        },
      ]
    },
    {
      name: 'RelationshipLookupDAO',
      methods: [
        {
          name: 'find_',
          code: function(x, id) {
            return Promise.resolve(foam.RELATIONSHIPS[id]);
          }
        },
      ]
    },
    {
      name: 'RefineLookupDAO',
      extends: 'foam.dao.AbstractDAO',
      methods: [
        {
          name: 'find_',
          code: function(x, id) {
            return Promise.resolve(foam.REFINES[id]);
          }
        },
      ]
    },
    {
      name: 'DependencySelectDAO',
      extends: 'foam.dao.ProxyDAO',
      requires: [
        'foam.core.Model',
        'foam.dao.Relationship',
      ],
      methods: [
        function select_(x, sink, skip, limit, order, predicate) {
          var self = this;
          return new Promise(function(resolve) {
            var queue = [].concat(
              Object.keys(foam.RELATIONSHIPS),
              Object.keys(foam.USED),
              Object.keys(foam.UNUSED),
              Object.keys(foam.REFINES),
            );
            var models = {};
            var next = function() {
              if ( ! queue.length ) {
                sink = sink || self.ArraySink.create();
                dSink= self.decorateSink_(sink, skip, limit, order, predicate);

                var detached = false;
                var sub = { detach: function() { detached = true } };
                models = Object.values(models);
                while ( models.length ) {
                  dSink.put(models.pop(), sub);
                  if ( detached ) {
                    break;
                  }
                }
                dSink.eof();
                resolve(sink);
                return;
              }
              var id = queue.pop();
              if ( models[id] ) {
                next();
                return;
              }
              self.delegate.find(id).then(function(m) {
                models[id] = m;
                // Don't include dependencies for models that will be filtered
                // out by the predicate later.
                if ( predicate && predicate.f(m) ) {
                  var deps;
                  if ( self.Model.isInstance(m) ) {
                    deps = m.getClassDeps();
                  } else if ( self.Relationship.isInstance(m) ) {
                    deps = [m.targetModel, m.sourceModel];
                  }
                  queue = queue.concat(deps);
                }
                next();
              });
            }
            next();
          })
        }
      ]
    },
    {
      name: 'ModelFlagStripDAODecorator',
      extends: 'foam.dao.AbstractDAODecorator',
      requires: [
        'foam.core.Model'
      ],
      properties: [
        'flags',
      ],
      methods: [
        function read(X, dao, obj) {
          return this.Model.isInstance(obj) ?
              obj.filterAxiomsByFlags(this.flags) :
              obj;
        },
      ],
    },
  ],

  actions: [
    {
      name: 'build',
      flags: ['web'],
      code: function build() {
        var self = this;
        self.execute().then(function(out) {
          self.output = out;
        });
      },
    },
  ],

  methods: [
    function execute() {
      var self = this;

      var daos = [
        self.RefineLookupDAO.create(),
        self.RelationshipLookupDAO.create(),
        self.ModelLookupDAO.create(),
        self.classloader.modelDAO,
      ];
      var orDAO = daos.pop();
      while ( daos.length ) {
        orDAO = self.OrDAO.create({
          primary: daos.pop(),
          delegate: orDAO,
        });
      }
      var srcDAO = self.DependencySelectDAO.create({
        delegate: self.DecoratedDAO.create({
          decorator: self.ModelFlagStripDAODecorator.create({flags: self.flags}),
          delegate: orDAO,
        })
      });

      var destDAO = self.JSON2MapDAO.create();

      return srcDAO
        .where(self.FUNC(foam.util.flagFilter(self.flags)))
        .select(self.DAOSink.create({dao: destDAO})).then(function() {
          return self.json2Serializer.stringify(self, destDAO);
        })
    }
  ]
});
