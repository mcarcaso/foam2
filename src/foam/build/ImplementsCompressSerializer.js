foam.CLASS({
  package: 'foam.build',
  name: 'ImplementsCompressSerializer',
  extends: 'foam.build.ProxySerializer',
  implements: [
    'foam.mlang.Expressions'
  ],
  requires: [
    'foam.core.Model',
    'foam.core.Property',
    'foam.core.Implements',
    'foam.core.Requires',
  ],
  properties: [
    {
      class: 'Array',
      name: 'chain',
    },
    {
      name: 'rules',
      factory: function() {
        var self = this;
        var isType = function(cls) {
          return self.FUNC(function(v) {
            return v && v.cls_ && v.cls_.id == cls.id
          })
        };
        var hasOnlyProperties = function(keys) {
          var keyMap = {};
          keys.forEach(function(k) { keyMap[k] = true });
          return self.FUNC(function(v) {
            var axioms = v.cls_.getAxiomsByClass(foam.core.Property);
            for ( var i = 0 ; i < axioms.length ; i++ ) {
              if ( v.hasOwnProperty(axioms[i].name) &&
                   ! keyMap[axioms[i].name] )
                return false;
            }
            return true;
          })
        }
        return [
          {
            where: [
              self.AND(
                isType(self.Property),
                hasOnlyProperties(['name'])
              ),
              self.FUNC(foam.Array.isInstance),
              self.AND(
                self.INSTANCE_OF(self.Model),
                self.FUNC(function(v) {
                  return v.properties == self.chain[self.chain.length-2]
                })
              )
            ],
            adapt: function(v) { return v.name },
          },
          {
            where: [
              self.AND(
                isType(self.Implements),
                hasOnlyProperties(['path'])
              ),
              self.FUNC(foam.Array.isInstance),
              self.AND(
                self.INSTANCE_OF(self.Model),
                self.FUNC(function(v) {
                  return v.implements == self.chain[self.chain.length-2]
                })
              )
            ],
            adapt: function(v) { return v.path },
          },
          {
            where: [
              self.AND(
                isType(self.Requires),
                hasOnlyProperties(['path', 'name']),
                self.FUNC(function(v) {
                  return v.name == v.path.split('.').pop();
                })
              ),
              self.FUNC(foam.Array.isInstance),
              self.AND(
                self.INSTANCE_OF(self.Model),
                self.FUNC(function(v) {
                  return v.requires == self.chain[self.chain.length-2]
                })
              )
            ],
            adapt: function(v) { return v.path },
          },
          /*
          {
            where: [
              self.FUNC(foam.core.FObject.isInstance),
              self.FUNC(foam.Array.isInstance),
              self.AND(
                self.INSTANCE_OF(self.Model),
                self.FUNC(function(v) {
                  return false;
                  var axiomArray = v.cls_.getAxiomsByClass(foam.core.AxiomArray).find(function(a) {
                    return v.hasOwnProperty(a.name) && v[a.name].indexOf(self.chain[self.chain.length-1]) != -1
                  });
                  if ( ! axiomArray ) return false;
                  debugger;
                  console.log(axiomArray);
                  return false;
                })
              )
            ],
            adapt: function(v) { return v.path },
          },
          */
        ];
      },
    },
  ],
  methods: [
    function output(x, v) {
      this.chain.push(v)

      var c = this.chain;
      var r = this.rules.filter(function(r) {
        return c.length >= r.where.length
      }).find(function(r) {
        for ( var i = 0 ; i < r.where.length ; i++ ) {
          if ( ! r.where[i].f(c[c.length - 1 - i]) ) return false;
        }
        return true;
      })
      if ( r ) v = r.adapt(v);

      this.delegate.output(x, v);
      this.chain.pop()
    },
  ],
});
