/**
 * @license
 * Copyright 2017 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'foam.swift',
  name: 'SwiftClass',
  flags: ['swift'],

  requires: [
    'foam.swift.Argument',
    'foam.swift.Field',
    'foam.swift.Method',
    'foam.swift.Outputter'
  ],

  properties: [
    {
      class: 'StringProperty',
      name: 'visibility'
    },
    {
      class: 'StringProperty',
      name: 'name'
    },
    {
      class: 'StringArrayProperty',
      name: 'implements'
    },
    {
      class: 'StringArrayProperty',
      name: 'imports'
    },
    {
      class: 'FObjectArray',
      of: 'foam.swift.Field',
      name: 'fields',
    },
    {
      name: 'classes',
      factory: function() { return []; },
    },
    {
      class: 'FObjectArray',
      of: 'foam.swift.Method',
      name: 'methods',
      factory: function() { return []; }
    },
    {
      class: 'StringProperty',
      name: 'code',
    },
    {
      class: 'StringProperty',
      name: 'type',
      value: 'class',
    },
    {
      class: 'StringArrayProperty',
      name: 'annotations',
    },
  ],

  methods: [
    function method(m) {
      if ( ! foam.core.FObject.isInstance(m) ) m = this.Method.create(m)
      this.methods.push(m);
      return this;
    },
    function getMethod(name) {
      return this.methods.find(function(m) {
        return m.name === name;
      });
    },
    function getClass(name) {
      return this.classes.find(function(m) {
        return m.name === name;
      });
    },
    function field(f) {
      if ( ! foam.core.FObject.isInstance(f) ) f = this.Field.create(f);
      this.fields.push(f);
      return this;
    },
    function outputSwift(o) {
      o.indent();
      o.out('// GENERATED CODE. DO NOT MODIFY BY HAND.\n');
      this.imports.forEach(function(i) { o.out('import ', i, '\n') });
      o.indent();
      o.out(this.annotations.join('\n'), '\n');
      o.indent();
      o.out(this.visibility ? this.visibility + ' ' : '');
      o.out(this.type, ' ', this.name);
      if (this.implements.length) o.out(': ', this.implements.join(', '));
      o.out(' {\n');
      o.indent();

      o.increaseIndent();

      this.fields.forEach(function(f) { o.out('\n', f, '\n'); });
      this.methods.forEach(function(f) { o.out('\n', f, '\n'); });
      this.classes.forEach(function(f) { o.out('\n', f, '\n'); });
      o.out(this.code, '\n');

      o.decreaseIndent();
      o.indent();
      o.out('}');
    },
    function toSwiftSource() {
      var output = this.Outputter.create({outputMethod: 'outputSwift'});
      output.out(this);
      return output.buf_;
    }
  ]
});
