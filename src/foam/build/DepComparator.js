/**
 * @license
 * Copyright 2018 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'foam.build',
  name: 'DepComparator',

  implements: [
    'foam.mlang.order.Comparator',
  ],

  requires: [
    'foam.core.Model',
    'foam.json2.Serializer',
  ],

  properties: [
    {
      name: 's',
      factory: function() { return this.Serializer.create() },
    },
  ],

  methods: [
    function compare(o1, o2) {
      var o1o2 = this.hasDep(o1, o2)
      var o2o1 = this.hasDep(o2, o1)
      if ( o1o2 && o2o1 ) return 0; // Circular dep.
      if ( o1o2 ) return  1;
      if ( o2o1 ) return -1;
      return o1.id < o2.id ? -1 : o1.id > o2.id ? 1 : 0;
    },
    function getDeps(o) {
      var deps = {};
      var queue = o.cls_.getAxioms();
      while ( queue.length ) {
        var o = queue.pop();
        var type = foam.typeOf(o);
        if ( type == foam.Array ) {
          queue = queue.concat(o);
        } else if ( type == foam.Object ) {
          if ( foam.core.FObject.isSubClass(o) ) { // Is an actual class
            if ( o.id.indexOf('AnonymousClass') == 0 ) {
              debugger;
            } else {
              deps[o.id] = true;
            }
          } else {
            queue.push(Object.values(o));
          }
        } else if ( type == foam.core.FObject ) {
          queue.push(o.cls_);
        }
      }
      return Object.keys(deps);
    },
    function hasDep(o1, o2) {
      if ( this.Model.isInstance(o1) ) {
        if ( o1.getClassDeps().includes(o2.id) ) {
          return true;
        }
        if ( this.getDeps(o1).includes(o2.id) ) {
          debugger;
          return true;
        }
      }
      return false;
    }
  ]
});
