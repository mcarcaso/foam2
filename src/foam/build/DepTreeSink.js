foam.CLASS({
  package: 'foam.build',
  name: 'DepTreeSink',
  extends: 'foam.dao.AbstractSink',
  requires: [
    'foam.build.Lib',
    'foam.core.Model',
    'foam.core.Script',
    'foam.dao.Relationship',
  ],
  constants: [
    {
      name: 'DEP_KEYS',
      factory: function() {
        var specialKeys = {};
        [
          'of',
          'class',
          'view',
          'sourceModel',
          'targetModel',
          'refines',
        ].forEach(function(k) { specialKeys[k] = true; });
        return specialKeys;
      }
    },
  ],
  properties: [
    {
      class: 'Map',
      name: 'puts',
    },
    {
      class: 'foam.dao.DAOProperty',
      name: 'dao',
    },
    {
      name: 'headPromise',
      expression: function(puts) {
        return this.getDepsTree(puts);
      },
    },
  ],
  methods: [
    function put(o) {
      this.puts[o.id] = o;
      this.clearProperty('headPromise');
    },
    function remove(o) {
      delete this.puts[o.id];
      this.clearProperty('headPromise');
    },
    function getDepsTree(o, seen, head) {
      var self = this;
      seen = seen || {};
      head = head || {};

      if ( foam.Array.isInstance(o) ) {
        return Promise.all(o.map(function(i) {
          return self.getDepsTree(i, seen, head);
        })).then(function() { return head });
      } else if ( foam.Object.isInstance(o) ) {
        if ( foam.core.FObject.isSubClass(o) ) { // Is an actual class.
          return self.dao.find(o.id).then(function(m) {
            return self.getDepsTree(m, seen, head);
          });
        }
        var ps = [];
        return Promise.all(Object.keys(o).map(function(k) {
          if ( self.DEP_KEYS[k] && foam.String.isInstance(o[k]) ) {
            return self.dao.find(o[k]).then(function(m) {
              return self.getDepsTree(m, seen, head);
            });
          }
          return self.getDepsTree(o[k], seen, head);
        })).then(function() { return head });
      } else if ( foam.core.FObject.isInstance(o) ) {
        var oHead = head;
        if ( self.Model.isInstance(o) ||
             self.Relationship.isInstance(o) ||
             self.Lib.isInstance(o) ||
             self.Script.isInstance(o) ) {
          if ( seen[o.id] ) {
            head[o.id] = seen[o.id]
            return Promise.resolve(head);
          }
          head[o.id] = {};
          seen[o.id] = head[o.id];
          head = head[o.id];
        }

        var map = {};
        o.cls_.getAxiomsByClass(foam.core.Property)
          .filter(function(a) {
            return o.hasOwnProperty(a.name);
          })
          .forEach(function(a) {
            map[a.name] = o[a.name];
          });
        var ps = [
          self.getDepsTree(map, seen, head),
          self.getDepsTree(o.cls_, seen, head),
        ];

        if ( self.Script.isInstance(o) ) {
          o.requires.forEach(function(r) {
            ps.push(self.dao.find(r).then(function(m) {
              return self.getDepsTree(m, seen, head);
            }));
          });
        }

        if ( self.Model.isInstance(o) ) {
          o.getClassDeps().forEach(function(d) {
            ps.push(self.dao.find(d).then(function(m) {
              return self.getDepsTree(m, seen, head);
            }));
          });
        }

        return Promise.all(ps).then(function() { return oHead });
      }
      return Promise.resolve(head);
    },
  ],
});
