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
  name: 'ArrayDAO',
  extends: 'foam.dao.AbstractDAO',

  documentation: 'DAO implementation backed by an array.',

  requires: [
    'foam.dao.ArraySink',
    'foam.mlang.predicate.True',
    'foam.util.SimpleDetachable',
  ],

  properties: [
    {
      class: 'ClassProperty',
      name: 'of',
      factory: function() {
        if ( this.array.length === 0 ) return this.__context__.lookup('foam.core.FObject');
        return null;
      }
    },
    {
      class: 'ListProperty',
      name: 'array',
      factory: function() { return []; }
    }
  ],

  methods: [
    {
      name: 'put_',
      code: function put_(x, obj) {
        for ( var i = 0 ; i < this.array.length ; i++ ) {
          if ( obj.ID.compare(obj, this.array[i]) === 0 ) {
            this.array[i] = obj;
            break;
          }
        }

        if ( i == this.array.length ) this.array.push(obj);
        this.on.put.pub(obj);

        return Promise.resolve(obj);
      },
      androidCode: `
        foam.core.Property p = (foam.core.Property) obj.getCls_().getAxiomByName("id");
        int i;
        for ( i = 0 ; i < getArray().size() ; i++ ) {
          if ( p.compare(obj, getArray().get(i)) == 0 ) {
            getArray().set(i, obj);
            break;
          }
        }

        if ( i == this.getArray().size()) {
          getArray().add(obj);
        }
        
        on().getSubTopic("put").pub(new Object[] { obj });

        return obj;
      `,
      swiftCode: `
        let p = obj!.getCls_()!.getAxiomByName("id") as! foam_core_Property;
        var i = 0;
        while i < getArray()!.count {
          if p.compare(obj, getArray()![i]) == 0 {
            var a = getArray();
            a![i] = obj;
            setArray(a);
            break;
          }
          i+=1;
        }

        if i == getArray()!.count {
          var a = getArray();
          a!.append(obj);
          setArray(a);
        }

        _ = on().getSubTopic("put")!.pub([obj]);

        return obj;
      `
    },

    {
      name: 'remove_',
      code: function remove_(x, obj) {
        for ( var i = 0 ; i < this.array.length ; i++ ) {
          if ( foam.util.equals(obj.id, this.array[i].id) ) {
            var o2 = this.array.splice(i, 1)[0];
            this.on.remove.pub(o2);
            break;
          }
        }

        return Promise.resolve();
      },
      androidCode: `
        foam.cross_platform.FObject ret = null;
        foam.core.Property p = (foam.core.Property) obj.getCls_().getAxiomByName("id");
        for ( int i = 0 ; i < getArray().size() ; i++ ) {
          if ( p.compare(obj, getArray().get(i)) == 0 ) {
            ret = (foam.cross_platform.FObject) getArray().get(i);
            getArray().remove(i);
            on().getSubTopic("remove").pub(new Object[] {ret});
            break;
          }
        }
        return ret;
      `,
      swiftCode: `
        var ret: foam_cross_platform_FObject? = nil;
        let p = obj!.getCls_()!.getAxiomByName("id") as! foam_core_Property;
        for i in 0..<getArray()!.count {
          if p.compare(obj, getArray()![i]) == 0 {
            ret = getArray()![i] as? foam_cross_platform_FObject;
            var a = getArray()!;
            a.remove(at: i);
            setArray(a)
            _ = on().getSubTopic("remove")!.pub([ret]);
            break;
          }
        }
        return ret;
      `
    },

    {
      name: 'select_',
      code: function select_(x, sink, skip, limit, order, predicate) {
        var resultSink = sink || this.ArraySink.create({ of: this.of });
        sink = this.decorateSink_(resultSink, skip, limit, order, predicate);
        var sub = this.SimpleDetachable.create();
        var self = this;
        return new Promise(resolve => {
          for ( var i = 0 ; i < this.array.length ; i++ ) {
            if ( sub.isDetached ) break;
            sink.put(this.array[i], sub);
          }
          sink.eof();
          resolve(resultSink);
        });
      },
      androidCode: `
        foam.dao.Sink resultSink = sink == null ? ArraySink_create().build() : sink;
        foam.dao.Sink decoratedSink = decorateSink_(resultSink, skip, limit, order, predicate);
        foam.util.SimpleDetachable sub = SimpleDetachable_create().build();
        for ( int i = 0 ; i < getArray().size() ; i++ ) {
          if ( sub.getIsDetached() ) break;
          decoratedSink.put(getArray().get(i), sub);
        }
        decoratedSink.eof();
        return resultSink;
      `,
      swiftCode: `
        let resultSink = sink == nil ? ArraySink_create().build() : sink!;
        let decoratedSink = decorateSink_(resultSink, skip, limit, order, predicate);
        let sub = SimpleDetachable_create().build();
        for i in 0..<getArray()!.count {
          if sub.getIsDetached() { break; }
          decoratedSink!.put(getArray()![i], sub);
        }
        decoratedSink!.eof();
        return resultSink;
      `
    },

    function removeAll_(x, skip, limit, order, predicate) {
      predicate = predicate || this.True.create();
      skip = skip || 0;
      limit = foam.Number.isInstance(limit) ? limit : Number.MAX_SAFE_INTEGER;

      for ( var i = 0; i < this.array.length && limit > 0; i++ ) {
        if ( predicate.f(this.array[i]) ) {
          if ( skip > 0 ) {
            skip--;
            continue;
          }
          var obj = this.array.splice(i, 1)[0];
          i--;
          limit--;
          this.on.remove.pub(obj);
        }
      }

      return Promise.resolve();
    },

    {
      name: 'find_',
      code: function find_(x, key) {
        var id = this.of.isInstance(key) ? key.id : key;
        for ( var i = 0 ; i < this.array.length ; i++ ) {
          if ( foam.util.equals(id, this.array[i].id) ) {
            return Promise.resolve(this.array[i]);
          }
        }

        return Promise.resolve(null);
      },
      androidCode: `
        foam.core.Property p = (foam.core.Property) getOf().getAxiomByName("id");
        for ( Object o : getArray() ) {
          if ( p.compareValues(p.f(o), id) == 0 ) {
            return (foam.cross_platform.FObject) o;
          }
        }
        return null;
      `,
      swiftCode: `
        let p = getOf().getAxiomByName("id") as! foam_core_Property;
        for o in getArray()! {
          if p.compareValues(p.f(o), id) == 0 {
            return o as? foam_cross_platform_FObject;
          }
        }
        return nil;
      `
    },
  ]
});
