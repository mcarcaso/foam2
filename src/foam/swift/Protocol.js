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
      if ( ! foam.core.FObject.isInstance(m) ) m = this.ProtocolMethod.create(m)
      this.methods.push(m);
      return this;
    },
    function field(f) {
      this.fields.push(f);
      return this;
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
      for ( var i = 0 ; i < this.methods.length ; i++ ) {
        o.indent();
        o.out(this.methods[i]);
        o.out('\n');
      }
      for ( var i = 0 ; i < this.fields.length ; i++ ) {
        o.indent();
        o.out(this.fields[i]);
        o.out('\n');
      }

      o.decreaseIndent();
      o.out('}');
    }
  ]
});
