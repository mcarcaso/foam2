/**
 * @license
 * Copyright 2017 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'foam.swift',
  name: 'Protocol',
  flags: ['swift'],

  requires: [
    'foam.swift.Field',
    'foam.swift.Method',
    'foam.swift.ProtocolField',
    'foam.swift.ProtocolMethod',
    'foam.swift.Outputter'
  ],

  properties: [
    {
      class: 'StringProperty',
      name: 'name'
    },
    {
      class: 'StringProperty',
      name: 'visibility',
      value: 'public'
    },
    {
      class: 'StringArrayProperty',
      name: 'implements',
    },
    {
      class: 'FObjectArray',
      of: 'foam.swift.ProtocolField',
      name: 'fields',
      factory: function() { return []; }
    },
    {
      class: 'StringArrayProperty',
      name: 'imports'
    },
    {
      class: 'FObjectArray',
      of: 'foam.swift.ProtocolMethod',
      name: 'methods',
      factory: function() { return []; }
    }
  ],

  methods: [
    function method(m) {
      if ( m.class ) return;
      if ( m.visibility == 'private' ) return;
      if ( ! this.ProtocolMethod.isInstance(m) ) {
        m = this.ProtocolMethod.create().copyFrom(m);
      }
      this.methods.push(m);
      return this;
    },

    function field(m) {
      return;
      if ( ! this.ProtocolField.isInstance(m) ) {
        m = this.ProtocolField.create().copyFrom(m);
      }
      this.fields.push(m);
      return this;
    },

    function toSource() {
      return [{
        body: this.toSwiftSource(),
        path: `${this.name}.swift`
      }];
    },

    function toSwiftSource() {
      var output = this.Outputter.create({outputMethod: 'outputSwift'});
      output.out(this);
      return output.buf_;
    },

    function outputSwift(o) {
      o.indent();
      o.out('// GENERATED CODE. DO NOT MODIFY BY HAND.\n');
      this.imports.forEach(function(i) { o.out('import ', i, '\n') });
      o.out(
        this.visibility,
        this.visibility ? ' ' : '',
        'protocol ',
        this.name,
        this.implements.length ? ': ' : '',
        this.implements.join(', '),
        ' {\n'
      );

      o.increaseIndent();
      this.methods.concat(this.fields)
        .forEach(m => {
          o.indent();
          o.out(m);
          o.out('\n');
        });
      o.decreaseIndent();
      o.out('}');
    }
  ]
});
