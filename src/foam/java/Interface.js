/**
 * @license
 * Copyright 2017 The FOAM Authors. All Rights Reserved.
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
  package: 'foam.java',
  name: 'Interface',

  properties: [
    {
      class: 'StringProperty',
      name: 'name'
    },
    {
      class: 'StringProperty',
      name: 'package'
    },
    {
      class: 'StringArrayProperty',
      name: 'extends'
    },
    {
      class: 'StringProperty',
      name: 'visibility',
      value: 'public'
    },
    {
      class: 'FObjectArray',
      of: 'foam.java.Constant',
      name: 'constants',
      factory: function() { return []; }
    },
    {
      class: 'FObjectArray',
      of: 'foam.java.Field',
      name: 'fields',
      factory: function() { return []; }
    },
    {
      class: 'FObjectArray',
      of: 'foam.java.InterfaceMethod',
      name: 'methods',
      factory: function() { return []; }
    },
    {
      name: 'imports',
      factory: function() { return []; }
    },
    {
      class: 'StringArrayProperty',
      name: 'implements'
    }
  ],

  methods: [
    function method(m) {
      if ( m.static ) {
        // static methods on an interface can't have a private visibility.
        if ( m.visibility == 'private' ) delete m.visibility;
        this.methods.push(foam.java.Method.create(m));
      } else {
        this.methods.push(foam.java.InterfaceMethod.create(m));
      }
      return this;
    },

    function getMethod(name) {
      return this.methods.find(function(m) { return m.name == name; });
    },

    function constant(c) {
      this.constants.push(foam.java.Constant.create(c));
      return this;
    },

    function getConstant(name) {
      return this.constant.find(function(c) { return c.name == name; });
    },

    function field(f) {
      if ( f.static ) {
        if ( f.visibility == 'private' ) f.visibility = '';
        if ( ! f.initializer ) f.initializer = 'null';
        this.fields.push(foam.java.Field.create(f));
      }
      return this;
    },

    function getField() {
      return null;
    },

    function toSource() {
      return {
        body: this.toJavaSource(),
        path: `${this.package}.${this.name}`
          .replace(/\./g, require('path').sep) + '.java'
      };
    },

    function toJavaSource() {
      var output = foam.java.Outputter.create();
      output.out(this);
      return output.buf_;
    },

    function outputJava(o) {
      o.out('// WARNING: GENERATED CODE, DO NOT MODIFY BY HAND!\n');

      if ( this.package ) o.out('package ', this.package, ';\n\n');

      this.imports.forEach(function(i) {
        o.out('import ' + i, ';\n');
      });

      o.out('\n');

      if ( this.documentation ) {
        str = foam.java.Util.removeSpacing(this.documentation);
        lines = foam.java.Util.limitSplit(str, 25);
        o.indent();
        o.out('/**\n');
        for ( i = 0 ; i < lines.length ; i++ ) {
          o.indent();
          o.out('* ' + lines[i]);
          o.out('\n');
        }
        o.indent();
        o.out('*/\n');
      }

      o.indent();
      o.out(this.visibility, this.visibility ? ' ' : '',
        'interface ', this.name);

      if ( this.implements.length > 0 ) {
        o.out(' extends ');
        o.out(Array.from(new Set(this.implements)).join(', '));
      }

      o.out(' {\n\n');

      o.increaseIndent();

      for ( var i = 0 ; i < this.constants.length ; i++ ) {
        o.indent();
        o.out(this.constants[i]);
        o.out('\n');
      }

      for ( var i = 0 ; i < this.fields.length ; i++ ) {
        o.out(this.fields[i]);
        o.out('\n');
      }

      for ( var i = 0 ; i < this.methods.length ; i++ ) {
        o.out(this.methods[i]);
        o.out('\n');
      }

      o.out('}');

    }
  ]
});
