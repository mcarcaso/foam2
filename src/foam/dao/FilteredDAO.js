/**
 * @license
 * Copyright 2019 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'foam.dao',
  name: 'FilteredDAO',
  extends: 'foam.dao.ProxyDAO',

  requires: [
    'foam.mlang.predicate.And'
  ],

  properties: [
    {
      class: 'FObjectProperty',
      of: 'foam.mlang.predicate.Predicate',
      name: 'predicate'
    }
  ],

  methods: [
    {
      name: 'find_',
      code: function find_(x, key) {
        var predicate = this.predicate;
        return this.delegate.find_(x, key).then(function(o) {
          return predicate.f(o) ? o : null;
        });
      },
      androidCode: `
        foam.cross_platform.FObject fo = super.find_(x, id);
        return getPredicate().f(fo) ? fo : null;
      `,
      swiftCode: `
        let fo = super.find_(x, id);
        return getPredicate()!.f(fo) ? fo : nil;
      `,
      javaCode: `foam.core.FObject ret = super.find_(x, id);
if ( ret != null && getPredicate().f(ret) ) return ret;
return null;`
    },


    {
      name: 'select_',
      code: function(x, sink, skip, limit, order, predicate) {
        return this.delegate.select_(
          x, sink, skip, limit, order,
          predicate ?
            this.And.create({ args: [this.predicate, predicate] }) :
            this.predicate);
      },
      androidCode: `
        foam.mlang.predicate.Predicate p = predicate == null ? getPredicate() :
          And_create()
            .setArgs(new Object[] { predicate, getPredicate() })
            .build();
        return super.select_(x, sink, skip, limit, order, p);
      `,
      swiftCode: `
        let p = predicate == nil ? getPredicate() :
          And_create()
            .setArgs([predicate, getPredicate()])
            .build();
        return super.select_(x, sink, skip, limit, order, p);
      `,
      javaCode: 'return super.select_(x, sink, skip, limit, order, predicate == null ? getPredicate() : foam.mlang.MLang.AND(getPredicate(), predicate));'
    },

    {
      name: 'removeAll_',
      code: function removeAll_(x, skip, limit, order, predicate) {
        return this.delegate.removeAll_(
          x, skip, limit, order,
          predicate ?
            this.And.create({ args: [this.predicate, predicate] }) :
          this.predicate);
      },
      javaCode: 'super.removeAll_(x, skip, limit, order, predicate == null ? getPredicate() : foam.mlang.MLang.AND(getPredicate(), predicate));'
    },

    {
      name: 'listen',
      code: function listen_(x, sink, predicate) {
        return this.delegate.listen_(
          x, sink,
          predicate ?
            this.And.create({ args: [this.predicate, predicate] }) :
            this.predicate);
      },
      androidCode: `
        return listen_(getSubX(), sink, getPredicate());
      `,
      swiftCode: `
        return listen_(getSubX(), sink, getPredicate());
      `,
      javaCode: 'super.listen_(x, sink, predicate == null ? getPredicate() : foam.mlang.MLang.AND(getPredicate(), predicate));'
    },
  ]
});
