/**
 * @license
 * Copyright 2018 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'foam.json2',
  name: 'PrettyOutputterOutput',
  extends: 'foam.json2.ProxyOutputterOutput',
  requires: [
    'foam.json2.SimpleOutputterOutput',
  ],
  properties: [
    {
      name: 'delegate',
      factory: function() { return this.SimpleOutputterOutput.create() },
      swiftFactory: `return self.SimpleOutputterOutput_create()`,
    },
    {
      class: 'StringProperty',
      name: 'str',
      expression: function(delegate$str) { return delegate$str }
    },
    {
      class: 'IntProperty',
      name: 'indent',
    },
    {
      class: 'BooleanProperty',
      name: 'needsNewLine',
    },
  ],
  methods: [
    {
      name: 'e',
      code: function() {
        if ( this.needsNewLine ) {
          this.delegate.out('\n')
          this.delegate.out('  '.repeat(this.indent));
          this.needsNewLine = false
        }
      },
      swiftCode_DELETE: `
        if needsNewLine {
          delegate.out("\\n")
          delegate.out(String(repeating: "  ", count: indent))
          needsNewLine = false
        }
      `,
    },
    {
      name: 'startObj',
      code: function() {
        this.e()
        this.delegate.startObj()
        this.indent += 1
        this.needsNewLine = true
      },
      swiftCode_DELETE: `
        e()
        delegate.startObj()
        indent += 1
        needsNewLine = true
      `,
    },
    {
      name: 'endObj',
      code: function() {
        this.indent -= 1
        this.needsNewLine = true
        this.e()
        this.delegate.endObj()
      },
      swiftCode_DELETE: `
        indent -= 1
        needsNewLine = true
        e()
        delegate.endObj()
      `,
    },
    {
      name: 'startArray',
      code: function() {
        this.e()
        this.delegate.startArray()
        this.indent += 1
        this.needsNewLine = true
      },
      swiftCode_DELETE: `
        e()
        delegate.startArray()
        indent += 1
        needsNewLine = true
      `,
    },
    {
      name: 'endArray',
      code: function() {
        this.indent -= 1
        this.needsNewLine = true
        this.e()
        this.delegate.endArray()
      },
      swiftCode_DELETE: `
        indent -= 1
        needsNewLine = true
        e()
        delegate.endArray()
      `,
    },
    {
      name: 'keySep',
      code: function() { this.out(": ") },
      swiftCode_DELETE: `out(": ")`,
    },
    {
      name: 'out',
      code: function(s) {
        this.e()
        this.delegate.out(s)
      },
      swiftCode_DELETE: `
        e()
        delegate.out(s)
      `,
    },
    {
      name: 'comma',
      code: function() {
        this.delegate.comma()
        this.needsNewLine = true
      },
      swiftCode_DELETE: `
        delegate.comma()
        needsNewLine = true
      `,
    },
  ],
})
