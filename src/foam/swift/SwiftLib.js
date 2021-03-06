/**
 * @license
 * Copyright 2018 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.LIB({
  name: 'foam.swift',
  flags: ['swift'],
  methods: [
    {
      name: 'asSwiftValue',
      code: foam.mmethod({
        String: function(s) {
          return JSON.stringify(s);
        },
        Boolean: function(b) {
          return b ? "true" : "false";
        },
        Number: function(n) {
          return '' + n;
          return '' + n + (n > Math.pow(2, 31) ? 'L' : '');
        },
        FObject: function(o, _, x) {
          return o.asSwiftValue(x);
        },
        Array: function(a, opt_type, x) {
          var type = opt_type || '[Any?]';
          return `[
            ${a.map(a => foam.swift.asSwiftValue(a, null, x)).join(',\n')}
          ] as ${type}`;
        },
        Object: function(o, opt_type, x) {
          if (foam.core.FObject.isSubClass(o)) {
            if ( foam.core.InterfaceModel.isInstance(o.model_) ) {
              return o.model_.swiftName + 'Class.CLS_()';
            }
            if ( o.id == 'foam.core.AbstractInterface' ) {
              return o.model_.swiftName + 'Class.CLS_()';
            }
            return (o.id == 'foam.core.FObject' ?
              foam.cross_platform.AbstractFObject.model_.swiftName :
              o.model_.swiftName)
              + '.CLS_()';
          }
          return `
[
${Object.keys(o).length == 0 ? ':' : Object.keys(o).map(k => `
  ${foam.swift.asSwiftValue(k, null, x)}: ${foam.swift.asSwiftValue(o[k], null, x)}
`).join(',\n')}
] as NSMutableDictionary
          `;
        },
        Date: function(o) {
          return `Date(timeIntervalSince1970: ${o.getTime()})`;
        },
        RegExp: function(o) {
          // TODO
          return 'nil';
        },
      }, function(v) {
        return 'nil';
      })
    },
    function isNullable(type) {
      return !! type.match(/[?!]$/);
    },
    function requiresCast(type) {
      debugger;
      return type != 'Any?' && type != 'Any!'
    },
    function toSwiftType(type, optional) {
      return foam.core.type.toType(type).toSwiftType(optional)
    },
    function toSwiftName(id) {
      debugger;
      return id.replace(/\./g, '_')
    },
  ],
});

foam.CLASS({
  package: 'foam.swift',
  name: 'SwiftTypeProperty',
  extends: 'StringProperty',
  flags: ['swift'],
  properties: [
    {
      name: 'flags',
      value: ['swift']
    },
    {
      name: 'expression',
      value: function(type) {
        return foam.swift.toSwiftType(type);
      }
    },
    {
      name: 'name',
      value: 'swiftType'
    }
  ]
});
