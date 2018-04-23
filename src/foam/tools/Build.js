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

      var destDAO = self.JSON2MapDAO.create()

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
        return Object.keys(ms);
      }).then(function(models) {
        return Promise.all(models.map(function(m) {
          return orDAO.find(m);
        }));
      }).then(function(models) {
        return models.filter(foam.util.flagFilter(self.flags));
      }).then(function(models) {
        return models.map(function(obj) {
          return self.Model.isInstance(obj) ? obj.filterAxiomsByFlags(self.flags) : obj;
        });
      }).then(function(models) {
        return Promise.all(models.map(function(m) {
          return destDAO.put(m);
        }));
      }).then(function() {
        return self.json2Serializer.stringify(self, destDAO);
      });
    }
  ]
});
