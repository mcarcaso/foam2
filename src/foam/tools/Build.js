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
    'foam.json2.Deserializer',
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
      name: 'FindInDAO',
      extends: 'foam.dao.ProxyDAO',
      requires: [
        'foam.mlang.predicate.In',
      ],
      methods: [
        function select_(x, sink, _, _, _, predicate) {
          if ( ! this.In.isInstance(predicate) ) {
            throw 'Only supports selecting with an "In" predicate';
          }
          var self = this;
          var promises = predicate.arg2.value.map(function(id) {
            return self.find_(x, id).then(function(m) {
              if ( ! m ) {
                console.log('Could not find ' + id + ' in modelDAO');
                return;
              }
              sink.put(m);
            });
          });
          return Promise.all(promises).then(function() { return sink });
        }
      ]
    },
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
        }
      ]
    },
    {
      name: 'RelationshipLookupDAO',
      extends: 'foam.dao.AbstractDAO',
      methods: [
        {
          name: 'find_',
          code: function(x, id) {
            return Promise.resolve(foam.RELATIONSHIPS[id]);
          }
        }
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
        }
      ]
    },
    {
      name: 'ModelFlagStripDAODecorator',
      extends: 'foam.dao.AbstractDAODecorator',
      requires: [
        'foam.core.Model'
      ],
      documentation: `
        A decorator that serializes and deserializes objects that are read. This
        is useful for stripping objects based on flags.
      `,
      properties: [
        'flags',
      ],
      methods: [
        function read(X, dao, obj) {
          return this.Model.isInstance(obj) ? obj.filterAxiomsByFlags(this.flags) : obj;
        },
      ],
    },
    {
      name: 'DepPutModelDAO',
      extends: 'foam.dao.ProxyDAO',
      requires: [
        'foam.core.Model',
        'foam.dao.DAOSink',
        'foam.dao.Relationship',
      ],
      implements: [
        'foam.mlang.Expressions',
      ],
      properties: [
        {
          name: 'modelDAO',
        },
        {
          name: 'puts',
          factory: function() { return {} },
        },
      ],
      methods: [
        function put_(x, o) {
          if ( ! this.puts[o.id] ) {
            var self = this;
            this.puts[o.id] = this.delegate.put_(x, o).then(function(o) {
              if ( self.Model.isInstance(o) ) {
                var json = JSON.parse(x.json2Serializer.stringify(x, o));
                var deps = json['$DEPS$'].concat(o.getClassDeps());
                return self.modelDAO.where(self.IN(self.Model.ID, deps))
                    .select(self.DAOSink.create({dao: self}))
              } else if ( self.Relationship.isInstance(o) ) {
                return self.modelDAO.where(self.IN(self.Model.ID, [o.targetModel, o.sourceModel]))
                    .select(self.DAOSink.create({dao: self}))
              }
            }).then(function() {
              return o;
            });
          }
          return this.puts[o.id];
        },
      ],
    },
  ],

  methods: [
    function log(_, m) {
      var s = m.id;
      this.output = this.output ? this.output + '\n' + s : s
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

      var srcDAO = self.FindInDAO.create({
        delegate: self.DecoratedDAO.create({
          decorator: self.ModelFlagStripDAODecorator.create({flags: self.flags}),
          delegate: orDAO,
        })
      });

      var destDAO = self.DepPutModelDAO.create({
        modelDAO: srcDAO,
        delegate: self.JSON2MapDAO.create(),
      })

      var ac = self.appConfig;
      return Promise.all(ac.refines.map(function(r) {
        return self.classloader.load(r);
      })).then(function() {
        var ms = {};
        [].concat(
          ac.refines,
          ac.relationships,
          ac.requires,
          Object.keys(foam.USED),
          Object.keys(foam.UNUSED),
          Object.keys(foam.RELATIONSHIPS),
          Object.keys(foam.REFINES)).forEach(function(m) {
            ms[m] = true;
          })
        return srcDAO.where(self.IN(self.Model.ID, Object.keys(ms)))
            .select(self.DAOSink.create({dao: destDAO}))
      }).then(function() {
        return self.json2Serializer.stringify(self, destDAO.delegate);
      });
    }
  ]
});
