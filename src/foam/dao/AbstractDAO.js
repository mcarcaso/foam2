/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
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
  package: 'foam.dao',
  name: 'AbstractDAO',
  implements: [ 'foam.dao.DAO' ],
  abstract: true,

  documentation: 'Abstract base class for implementing DAOs.',

  requires: [
    'foam.dao.ExternalException',
    'foam.dao.FilteredDAO',
    'foam.dao.InternalException',
    'foam.dao.LimitedDAO',
    'foam.dao.LimitedSink',
    'foam.dao.OrderedDAO',
    'foam.dao.OrderedSink',
    'foam.dao.PipeSink',
    'foam.dao.PredicatedSink',
    'foam.dao.ProxyDAO',
    'foam.dao.ResetListener',
    'foam.dao.SkipDAO',
    'foam.dao.SkipSink'
  ],

  topics: [
    {
      name: 'on',
      topics: [
        'put',
        'remove',
        'reset'
      ]
    }
  ],

  constants: {
    RESET_CMD: 'RESET_CMD'
  },

  properties: [
    {
      /**
        Set to the name or class instance of the type of object the DAO
        will store.
      */
      class: 'ClassProperty',
      javaInfoType: 'foam.core.AbstractObjectPropertyInfo',
      javaType: 'foam.core.ClassInfo',
      required: true,
      name: 'of',
    },
    {
      class: 'FObjectProperty',
      of: 'foam.core.Property',
      javaType: 'foam.core.PropertyInfo',
      javaInfoType: 'foam.core.AbstractObjectPropertyInfo',
      name: 'primaryKey',
      expressionArgs: ['of'],
      androidFactory: null,
      androidExpression: `
        return (foam.core.Property) of.getAxiomByName("id");
      `,
      swiftFactory: null,
      swiftExpression: `
        return of.getAxiomByName("id") as? foam_core_Property;
      `,
      javaFactory: `
return getOf() == null ? null : (foam.core.PropertyInfo) getOf().getAxiomByName("id");
      `,
    },
  ],

  methods: [
    {
      /**
        Returns a filtered DAO that only returns objects which match the
        given predicate.
      */
      name: 'inX',
      code: function(x) {
        return this.ProxyDAO.create({delegate: this}, x);
      },
      androidCode: `return ProxyDAO_create(x).setDelegate(this).build();`,
      swiftCode: `return ProxyDAO_create(x!).setDelegate(self).build();`,
      javaCode: `return new ProxyDAO.Builder(x).setDelegate(this).build();`,
    },

    {
      /**
        Returns a filtered DAO that only returns objects which match the
        given predicate.
      */
      name: 'where',
      code: function where(p) {
        return this.FilteredDAO.create({
          delegate: this,
          predicate: p
        });
      },
      androidCode: `
        return FilteredDAO_create()
          .setDelegate(this)
          .setPredicate(predicate)
          .build();
      `,
      swiftCode: `
        return FilteredDAO_create()
          .setDelegate(self)
          .setPredicate(predicate)
          .build();
      `,
      javaCode: 'return new FilteredDAO.Builder(getX()).setPredicate(predicate).setDelegate(this).build();'
    },

    {
      /**
        Returns a filtered DAO that orders select() by the given
        ordering.
      */
      name: 'orderBy',
      code: function orderBy() {
        return this.OrderedDAO.create({
          delegate: this,
          comparator: foam.compare.toCompare(Array.from(arguments))
        });
      },
      androidCode: `
        return OrderedDAO_create()
          .setDelegate(this)
          .setComparator(comparator)
          .build();
      `,
      swiftCode: `
        return OrderedDAO_create()
          .setDelegate(self)
          .setComparator(comparator)
          .build();
      `,
      javaCode: `
return new OrderedDAO(this.getX(), comparator, this);
      `,
    },

    {
      /**
        Returns a filtered DAO that skips the given number of items
        on a select()
      */
      name: 'skip',
      code: function skip(/* Number */ s) {
        return this.SkipDAO.create({
          delegate: this,
          skip_: s
        });
      },
      androidCode: `
        return SkipDAO_create()
          .setDelegate(this)
          .setSkip_(count)
          .build();
      `,
      swiftCode: `
        return SkipDAO_create()
          .setDelegate(self)
          .setSkip_(count)
          .build();
      `,
      javaCode: `
return new SkipDAO(this.getX(), count, this);
      `,
    },

    {
      /**
        Returns a filtered DAO that stops producing items after the
        given count on a select().
      */
      name: 'limit',
      code: function limit(/* Number */ l) {
        return this.LimitedDAO.create({
          delegate: this,
          limit_: l
        });
      },
      androidCode: `
        return LimitedDAO_create()
          .setDelegate(this)
          .setLimit_(count)
          .build();
      `,
      swiftCode: `
        return LimitedDAO_create()
          .setDelegate(self)
          .setLimit_(count)
          .build();
      `,
      javaCode: `
return new LimitedDAO(this.getX(), count, this);
      `,
    },

    {
      name: 'put',
      code: function(obj) {
        return this.put_(this.__context__, obj);
      },
      androidCode: 'return put_(getX(), obj);',
      swiftCode: 'return put_(getX(), obj);',
      javaCode: `return this.put_(this.getX(), obj);`,
    },

    /**
      Selects the contents of this DAO into a sink, then listens to keep
      the sink up to date. Returns a promise that resolves with the subscription.
      TODO: This will probably miss events that happen during the select but before the
      listen call.  We should check if this is the case and fix it if so.
    */
    {
      name: 'pipe',
      code: function(sink) {//, skip, limit, order, predicate) {
        return this.pipe_(this.__context__, sink, undefined);
      },
      androidCode: 'return pipe_(getX(), sink, null);',
      swiftCode: 'return pipe_(getX(), sink, nil);',
      javaCode: `return this.pipe_(this.getX(), sink, null);`,
    },

    {
      name: 'pipe_',
      code: function(x, sink, predicate) {
        var sink2 = this.PipeSink.create({
          delegate: sink,
          dao: this
        });

        var sub = this.listen(sink2); //, skip, limit, order, predicate);
        sink2.reset();

        return sub;
      },
      androidCode: `
        foam.dao.PipeSink sink2 = PipeSink_create()
          .setDelegate(sink)
          .setDao(this)
          .build();

        foam.core.Detachable sub = listen(sink2, null);
        sink2.reset(sub);

        return sub;
      `,
      swiftCode: `
        let sink2 = PipeSink_create()
          .setDelegate(sink)
          .setDao(self)
          .build();

        let sub = listen(sink2, nil);
        sink2.reset(sub);

        return sub;
      `,
      javaCode: `
throw new UnsupportedOperationException();
      `,
    },

    {
      name: 'listen',
      code: function(sink) {
        if ( ! foam.core.FObject.isInstance(sink) ) {
          sink = foam.dao.AnonymousSink.create({ sink: sink }, this);
        }
        return this.listen_(this.__context__, sink, undefined);
      },
      swiftCode_DELETE: 'return try listen_(__context__, sink)',
      javaCode: `this.listen_(this.getX(), sink, predicate);`,
    },

    /**
      Keeps the given sink up to date with changes to this DAO.
    */
    {
      name: 'listen_',
      code: function(x, sink, predicate) {
        var mySink = this.decorateListener_(sink, predicate);

        var sub = foam.core.FObject.create();

        sub.onDetach(this.on.sub(function(s, on, e, obj) {
          switch(e) {
            case 'put':
              mySink.put(obj, sub);
              break;
            case 'remove':
              mySink.remove(obj, sub);
              break;
            case 'reset':
              mySink.reset(sub);
              break;
          }
        }));

        return sub;
      },
      androidCode: `
foam.dao.Sink mySink = decorateListener_(sink, predicate);
return on().sub(null, <%=listener(\`
  if ( args.length <= 1 || args[1] instanceof String == false ) return;
  String topic = (String)args[1];
  switch(topic) {
    case "put":
      mySink.put(args[args.length - 1], sub);
      break;
    case "remove":
      mySink.remove(args[args.length - 1], sub);
      break;
    case "reset":
      mySink.reset(sub);
      break;
    default:
      break;
  }
\`)%>);
      `,
      swiftCode: `
let mySink = decorateListener_(sink, predicate);
return on().sub(nil, <%=listener(\`
  if args!.count <= 1 || !(args![1] is String) { return; }
  let topic = args![1] as! String;
  switch(topic) {
    case "put":
      mySink?.put(args![args!.count - 1], sub);
      break;
    case "remove":
      mySink?.remove(args![args!.count - 1], sub);
      break;
    case "reset":
      mySink?.reset(sub);
      break;
    default:
      break;
  }
\`)%>);
      `,
      javaCode: `
sink = decorateListener_(sink, predicate);
listeners_.add(new DAOListener(sink, listeners_));
      `,
    },

    {
      name: 'decorateListener_',
      type: 'foam.dao.Sink',
      args: [
        {
          name: 'sink',
          type: 'foam.dao.Sink'
        },
        {
          name: 'predicate',
          type: 'foam.mlang.predicate.Predicate',
        },
      ],
      code: function decorateListener_(sink, predicate) {
        if ( predicate ) {
          return this.ResetListener.create({ delegate: sink });
        }

        return sink;
      },
      crossPlatformCode: `
// TODO: There are probably optimizations we can make here
// but every time I try it comes out broken.  So for the time being,
// if you have any sort of skip/limit/order/predicate we will just
// issue reset events for everything.
if ( predicate != <%=nul()%> ) {
  return ResetListener_create()
    .setDelegate(sink)
    .build();
}
return sink;
      `,
      javaCode: `
if ( predicate != null ) {
  sink = new PredicatedSink(predicate, sink);
}

return sink;
      `,
    },

    /**
      Used by DAO implementations to apply filters to a sink, often in a
      select() or removeAll() implementation.
      @private
    */
    {
      name: 'decorateSink_',
      type: 'foam.dao.Sink',
      args: [
        {
          name: 'sink',
          type: 'foam.dao.Sink'
        },
        {
          name: 'skip',
          type: 'Long'
        },
        {
          name: 'limit',
          type: 'Long'
        },
        {
          name: 'order',
          type: 'foam.mlang.order.Comparator',
        },
        {
          name: 'predicate',
          type: 'foam.mlang.predicate.Predicate',
        },
      ],
      code: function decorateSink_(sink, skip, limit, order, predicate) {
        if ( limit != undefined ) {
          sink = this.LimitedSink.create({
            limit: limit,
            delegate: sink
          });
        }

        if ( skip != undefined ) {
          sink = this.SkipSink.create({
            skip: skip,
            delegate: sink
          });
        }

        if ( order != undefined ) {
          sink = this.OrderedSink.create({
            comparator: order,
            delegate: sink
          });
        }

        if ( predicate != undefined ) {
          sink = this.PredicatedSink.create({
            predicate: predicate.partialEval ?
              predicate.partialEval() :
              predicate,
            delegate: sink
          });
        }

        return sink;
      },
      androidCode: `
foam.dao.Sink s = sink;
if ( limit > 0 ) {
  s = LimitedSink_create()
    .setLimit(limit)
    .setDelegate(s)
    .build();
}
if ( skip > 0 ) {
  s = SkipSink_create()
    .setSkip(skip)
    .setDelegate(s)
    .build();
}
if ( order != null ) {
  s = OrderedSink_create()
    .setComparator(order)
    .setDelegate(s)
    .build();
}
if ( predicate != null ) {
  s = PredicatedSink_create()
    .setPredicate(predicate)
    .setDelegate(s)
    .build();
}
return s;
      `,
      swiftCode: `
var s = sink;
if limit > 0 {
  s = LimitedSink_create()
    .setLimit(limit)
    .setDelegate(s)
    .build();
}
if skip > 0 {
  s = SkipSink_create()
    .setSkip(skip)
    .setDelegate(s)
    .build();
}
if order != nil {
  s = OrderedSink_create()
    .setComparator(order)
    .setDelegate(s)
    .build();
}
if predicate != nil {
  s = PredicatedSink_create()
    .setPredicate(predicate)
    .setDelegate(s)
    .build();
}
return s;
      `,
      javaCode: `
return decorateSink(getX(), sink, skip, limit, order, predicate);
      `,
    },

    {
      name: 'remove',
      code: function remove(obj) {
        return this.remove_(this.__context__, obj);
      },
      crossPlatformCode: 'return remove_(getX(), obj);',
      javaCode: `return this.remove_(this.getX(), obj);`,
    },

    {
      name: 'removeAll',
      code: function removeAll() {
        return this.removeAll_(this.__context__, undefined, undefined, undefined, undefined);
      },
      crossPlatformCode: 'removeAll_(getX(), 0, 0, <%=nul()%>, <%=nul()%>);',
      javaCode: `
this.removeAll_(this.getX(), 0, this.MAX_SAFE_INTEGER, null, null);
      `,
    },

    function compareTo(other) {
      if ( ! other ) return 1;
      return this === other ? 0 : foam.util.compare(this.$UID, other.$UID);
    },

    function prepareSink_(sink) {
      if ( ! sink ) return foam.dao.ArraySink.create();

      if ( foam.Function.isInstance(sink) )
        sink = {
          put: sink,
          eof: function() {}
        };
      else if ( sink == console || sink == console.log )
        sink = {
          put: function(o) { console.log(o, foam.json.Pretty.stringify(o)); },
          eof: function() {}
        };
      else if ( sink == global.document )
        sink = {
          put: function(o) { foam.u2.DetailView.create({data: o}).write(document); },
          eof: function() {}
        };

      if ( ! foam.core.FObject.isInstance(sink) ) {
        sink = foam.dao.AnonymousSink.create({ sink: sink });
      }

      return sink;
    },

    {
      name: 'select',
      code: function select(sink) {
        return this.select_(this.__context__, this.prepareSink_(sink), undefined, undefined, undefined, undefined);
      },
      androidCode: 'return select_(getX(), sink, 0, 0, null, null);',
      swiftCode: 'return select_(getX(), sink, 0, 0, nil, nil);',
      javaCode: `
sink = prepareSink(sink);
return this.select_(this.getX(), sink, 0, this.MAX_SAFE_INTEGER, null, null);
      `,
    },

    {
      name: 'find',
      code: function find(id) {
        // Temporary until DAO supports find_(Predicate) directly
        if ( foam.mlang.predicate.Predicate.isInstance(id) ) {
          var self = this;
          return new Promise(function (resolve) {
            self.where(id).limit(1).select().then(function (a) {
              resolve(a.array.length ? a.array[0] : null);
            });
          });
        }

        return this.find_(this.__context__, id);
      },
      crossPlatformCode: 'return find_(getX(), id);',
      javaCode: `
// Temporary until DAO supports find_(Predicate) directly
if ( id instanceof foam.mlang.predicate.Predicate ) {
  java.util.List l = ((ArraySink) where((foam.mlang.predicate.Predicate) id).limit(1).select(new ArraySink())).getArray();
  return l.size() == 1 ? (foam.core.FObject) l.get(0) : null;
}

return this.find_(this.getX(), id);
      `,
    },

    {
      name: 'cmd_',
      code: function cmd_(x, obj) {
        /** Force the DAO to publish a 'reset' notification. **/
        if ( this.RESET_CMD == obj ) {
          this.on.reset.pub();
          return true;
        }
        return undefined;
      },
      javaCode: `
// TODO
return null;
      `,
    },

    {
      name: 'cmd',
      code: function cmd(obj) {
        return this.cmd_(this.__context__, obj);
      },
      javaCode: `
return this.cmd_(this.getX(), obj);
      `,
    },

    // Placeholder functions to that selecting from DAO to DAO works.
    /** @private */
    function eof() {},

    /** @private */
    function reset() {},

    {
      name: 'removeAll_',
      javaCode: `
this.select_(x, new RemoveSink(x, this), skip, limit, order, predicate);
      `,
    },
  ],
  static: [
    {
      name: 'decorateSink',
      type: 'foam.dao.Sink',
      args: [
        {
          name: 'x',
          type: 'Context'
        },
        {
          name: 'sink',
          type: 'foam.dao.Sink',
        },
        {
          name: 'skip',
          type: 'Long'
        },
        {
          name: 'limit',
          type: 'Long'
        },
        {
          name: 'order',
          type: 'foam.mlang.order.Comparator'
        },
        {
          name: 'predicate',
          type: 'foam.mlang.predicate.Predicate'
        },
      ],
      javaCode: `
if ( ( limit > 0 ) && ( limit < AbstractDAO.MAX_SAFE_INTEGER ) ) {
  sink = new LimitedSink(limit, 0, sink);
}

if ( ( skip > 0 ) && ( skip < AbstractDAO.MAX_SAFE_INTEGER ) ) {
  sink = new SkipSink(skip, 0, sink);
}

if ( order != null ) {
  sink = new OrderedSink(order, null, sink);
}

if ( predicate != null && predicate.partialEval() != null && ! ( predicate instanceof foam.mlang.predicate.True) ) {
  sink = new PredicatedSink(predicate, sink);
}

return sink;
      `,
    },
  ],
  axioms: [
    {
      class: 'foam.core.AnonymousAxiom',
      buildJavaClass: function(cls) {
        cls.extras.push(`
public final static long MAX_SAFE_INTEGER = 9007199254740991l;

public Object getPK(foam.core.FObject obj) {
  return getPrimaryKey().get(obj);
}

protected class DAOListener implements foam.core.Detachable {
  protected Sink sink;
  protected java.util.Collection listeners;

  public DAOListener(Sink sink, java.util.Collection listeners) {
    this.sink = sink;
    this.listeners = listeners;
  }

  public void detach() {
    listeners.remove(this);
  }

  public void put(foam.core.FObject obj) {
    try {
      sink.put(obj, this);
    } catch (java.lang.Exception e) {
      detach();
    }
  }

  public void remove(foam.core.FObject obj) {
    try {
      sink.remove(obj, this);
    } catch (java.lang.Exception e) {
      detach();
    }
  }

  public void reset() {
    try {
      sink.reset(this);
    } catch (java.lang.Exception e) {
      detach();
    }
  }
}

protected java.util.List<DAOListener> listeners_ = new java.util.concurrent.CopyOnWriteArrayList<DAOListener>();

protected void onPut(foam.core.FObject obj) {
  java.util.Iterator<DAOListener> iter = listeners_.iterator();

  while ( iter.hasNext() ) {
    DAOListener s = iter.next();
    s.put(obj);
  }
}

protected void onRemove(foam.core.FObject obj) {
  java.util.Iterator<DAOListener> iter = listeners_.iterator();

  while ( iter.hasNext() ) {
    DAOListener s = iter.next();
    s.remove(obj);
  }
}

protected void onReset() {
  java.util.Iterator<DAOListener> iter = listeners_.iterator();

  while ( iter.hasNext() ) {
    DAOListener s = iter.next();
    s.reset();
  }
}

protected Sink prepareSink(Sink s) {
  return s == null ? new ArraySink() : s;
}

public Sink select() {
  return select(null);
}

public static Sink decorateDedupSink_(Sink sink) {
  sink = new DedupSink(new java.util.HashSet(), sink);
  return sink;
}
        `);
      },
    },
  ],
});


foam.CLASS({
  package: 'foam.dao',
  name: 'InternalException',
  implements: ['foam.core.Exception']
});


foam.CLASS({
  package: 'foam.dao',
  name: 'ExternalException',
  implements: ['foam.core.Exception']
})

foam.CLASS({
  package: 'foam.dao',
  name: 'OrderedDAO',
  extends: 'foam.dao.ProxyDAO',

  properties: [
    {
      class: 'FObjectProperty',
      type: 'foam.mlang.order.Comparator',
      name: 'comparator'
    }
  ],

  methods: [
    {
      name: 'select_',
      code: function (x, sink, skip, limit, order, predicate) {
        return this.delegate.select_(x, sink, skip, limit, order || this.comparator, predicate);
      },
      androidCode: `
        return super.select_(x, sink, skip, limit, order == null ? getComparator() : order, predicate);
      `,
      swiftCode: `
        return super.select_(x, sink, skip, limit, order == nil ? getComparator() : order, predicate);
      `
    },
    {
      name: 'removeAll_',
      code: function (x, skip, limit, order, predicate) {
        return this.delegate.removeAll_(x, skip, limit, order || this.comparator, predicate);
      },
      androidCode: `
        super.removeAll_(x, skip, limit, order == null ? getComparator() : order, predicate);
      `,
      swiftCode: `
        super.removeAll_(x, skip, limit, order == nil ? getComparator() : order, predicate);
      `
    },
  ]
});


foam.CLASS({
  package: 'foam.dao',
  name: 'SkipDAO',
  extends: 'foam.dao.ProxyDAO',

  properties: [
    {
      class: 'IntProperty',
      name: 'skip_',
    }
  ],

  methods: [
    {
      name: 'select_',
      code: function select_(x, sink, skip, limit, order, predicate) {
        return this.delegate.select_(x, sink, this.skip_, limit, order, predicate);
      },
      swiftCode_DELETE: function() {/*
return try delegate.select_(x, sink, skip_, limit, order, predicate)
      */},
    },
    function removeAll_(x, skip, limit, order, predicate) {
      return this.delegate.removeAll_(x, this.skip_, limit, order, predicate);
    }
  ]
});


foam.CLASS({
  package: 'foam.dao',
  name: 'LimitedDAO',
  extends: 'foam.dao.ProxyDAO',

  properties: [
    {
      class: 'IntProperty',
      name: 'limit_'
    }
  ],

  methods: [
    {
      name: 'select_',
      code: function select_(x, sink, skip, limit, order, predicate) {
        return this.delegate.select_(
          x, sink, skip,
          limit !== undefined ? Math.min(this.limit_, limit) : this.limit_,
          order, predicate);
      },
      swiftCode_DELETE: function() {/*
return try delegate.select_(
    x, sink, skip,
    min(limit_, limit),
    order, predicate);
      */},
    },

    function removeAll_(x, skip, limit, order, predicate) {
      return this.delegate.removeAll_(
        x, skip,
        limit !== undefined ? Math.min(this.limit_, limit) : this.limit_,
        order, predicate);
    }
  ]
});
