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
  name: 'ProxyDAO',
  extends: 'foam.dao.AbstractDAO',

  requires: [
    'foam.dao.NullDAO',
    'foam.dao.ProxyListener',
  ],

  documentation: 'Proxy implementation for the DAO interface.',

  properties: [
    {
      class: 'Proxy',
      of: 'foam.dao.DAO',
      name: 'delegate',
      forwards: [ 'put_', 'remove_', 'find_', 'select_', 'removeAll_', 'cmd_', 'listen_' ],
      topics: [ 'on' ], // TODO: Remove this when all users of it are updated.
      factory: function() { return this.NullDAO.create() },
      postSet: function(old, nu) {
        if ( old ) this.on.reset.pub();
      },
      swiftFactory_DELETE: 'return NullDAO_create()',
      swiftPostSet_DELETE: `
if let oldValue = oldValue as? foam_dao_AbstractDAO {
  _ = oldValue.on["reset"].pub()
}
      `,
    },
    {
      name: 'of',
      factory: function() {
        return this.delegate.of;
      },
      swiftFactory: 'return getDelegate()!.getOf();',
      javaFactory: `return getDelegate().getOf();`,
    }
  ],

  methods: [
    {
      name: 'listen_',
      code: function listen_(context, sink, predicate) {
        var listener = this.ProxyListener.create({
          delegate: sink,
          predicate: predicate,
          dao: this
        }, context);

        listener.onDetach(this.sub('propertyChange', 'delegate', listener.update));
        listener.update();

        return listener;
      },
      androidCode: `
        foam.dao.ProxyListener listener = ProxyListener_create(x)
          .setDelegate(sink)
          .setPredicate(predicate)
          .build();
        listener.onDetach(listener.getDao$().follow(getDelegate$()));
        return listener;
      `,
      swiftCode: `
        let listener = ProxyListener_create(x)
          .setDelegate(sink)
          .setPredicate(predicate)
          .build();
        listener.onDetach(listener.getDao$().follow(getDelegate$()));
        return listener;
      `,
      javaCode: `
        // TODO: Support changing of delegate
        // TODO: Return a detachable
        getDelegate().listen_(getX(), sink, predicate);
      `
    }
  ],

  axioms: [
    {
      class: 'foam.core.AnonymousAxiom',
      buildJavaClass: function(cls) {
        cls.extras.push(`
public ProxyDAO(foam.core.X x, foam.dao.DAO delegate) {
  foam.nanos.logger.Logger log = (foam.nanos.logger.Logger)x.get("logger");
  log.warning("Direct constructor use is deprecated. Use Builder instead.");
  setX(x);
  setDelegate(delegate);
}
        `);
      },
    },
  ],
});


foam.CLASS({
  package: 'foam.dao',
  name: 'ProxyListener',
  requires: [
    'foam.util.SimpleDetachable'
  ],
  flags: ['js', 'swift', 'android'],

  implements: ['foam.dao.Sink'],

  properties: [
    {
      class: 'FObjectProperty',
      of: 'foam.mlang.predicate.Predicate',
      name: 'predicate',
    },
    {
      class: 'Proxy',
      of: 'foam.dao.Sink',
      name: 'delegate',
    },
    {
      class: 'FObjectProperty',
      of: 'foam.core.Detachable',
      weak: true,
      name: 'innerSub',
      postSet: function(_, s) {
        if (s) this.onDetach(s);
      },
      androidPostSet: 'if ( newValue != null ) onDetach(newValue);',
      swiftPostSet: 'if ( newValue != nil ) { onDetach(newValue); }',
    },
    {
      class: 'foam.dao.DAOProperty',
      name: 'dao',
      androidPostSet: `
        if ( getInnerSub() != null ) getInnerSub().detach();
        setInnerSub(newValue.listen_(getX(), this, getPredicate()));
        if ( oldValue != null ) {
          reset(SimpleDetachable_create().build());
        }
      `,
      swiftPostSet: `
        getInnerSub()?.detach();
        setInnerSub(newValue?.listen_(getX(), self, getPredicate()));
        if ( oldValue != nil ) {
          reset(SimpleDetachable_create().build());
        }
      `,
    }
  ],

  methods: [
    {
      name: 'put',
      code: function put(obj, s) {
        this.delegate.put(obj, this);
      },
      androidCode: `getDelegate().put(obj, this);`,
      swiftCode: `getDelegate()?.put(obj, self);`
    },

    function outputJSON(outputter) {
      outputter.output(this.delegate);
    },

    {
      name: 'remove',
      code: function remove(obj, s) {
        this.delegate.remove(obj, this);
      },
      androidCode: `getDelegate().remove(obj, this);`,
      swiftCode: `getDelegate()?.remove(obj, self);`,
    },

    {
      name: 'reset',
      code: function reset(s) {
        this.delegate.reset(this);
      },
      androidCode: `getDelegate().reset(this);`,
      swiftCode: `getDelegate()?.reset(self);`,
    },
  ],
  listeners: [
    {
      name: 'update',
      code: function() {
        var old = this.innerSub;
        old && old.detach();
        this.innerSub = this.dao &&
          this.dao.delegate &&
          this.dao.delegate.listen_(this.__context__, this, this.predicate);
        this.reset();
      }
    }
  ]
});


foam.CLASS({
  package: 'foam.dao',
  name: 'PromisedDAO',
  extends: 'foam.dao.AbstractDAO',

  properties: [
    {
      class: 'Promised',
      of: 'foam.dao.DAO',
      methods: [ 'put_', 'remove_', 'find_', 'select_', 'removeAll_', 'listen_', 'cmd_' ],
      name: 'promise'
    }
  ],

  methods: [
    {
      name: 'listen_',
      flags: ['js'],
      code: function(x, sink, predicate) {
        // TODO(adamvy): Temporary hack to fix regression.  listen_
        // didn't used to have a declared return type, as such it
        // would return void when Promised, but a detachable when not.
        //
        // This sort of worked in that ProxyListener and others
        // wouldn't throw an exception when undefined was returned,
        // but will throw if a Promise is return.
        //
        // To fix this we should automagically return a
        // PromisedDetachable as .detach() can be async since it has
        // no return value.
        this.promise.then(function(dao) {
          dao.listen_(x, sink, predicate);
        });
      }
    }
  ]
});


foam.CLASS({
  package: 'foam.dao',
  name: 'LocalStorageDAO',
  extends: 'foam.dao.ArrayDAO',

  properties: [
    {
      name:  'name',
      label: 'Store Name',
      class:  'foam.core.StringProperty'
    }
  ],

  methods: [
    function init() {
      var objs = localStorage.getItem(this.name);
      if ( objs ) this.array = foam.json.parseString(objs, this.__context__);

      this.on.put.sub(this.updated);
      this.on.remove.sub(this.updated);

      // TODO: base on an indexed DAO
    }
  ],

  listeners: [
    {
      name: 'updated',
      isMerged: true,
      mergeDelay: 100,
      code: function() {
        localStorage.setItem(this.name, foam.json.stringify(this.array));
      }
    }
  ]
});


foam.LIB({
  name: 'foam.String',
  methods: [
    {
      name: 'daoize',
      code: foam.Function.memoize1(function(str) {
        // Turns SomeClassName into someClassNameDAO,
        // of package.ClassName into package.ClassNameDAO
        return str.substring(0, 1).toLowerCase() + str.substring(1) + 'DAO';
      })
    }
  ]
});


foam.CLASS({
  package: 'foam.dao',
  name: 'InvalidArgumentException',
  extends: 'foam.dao.ExternalException',

  properties: [
    {
      class: 'StringProperty',
      name: 'message'
    }
  ]
});
