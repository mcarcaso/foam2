/**
 * @license
 * Copyright 2018 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'foam.json2',
  name: 'SimpleOutputterOutput',
  implements: [
    'foam.json2.OutputterOutput'
  ],
  properties: [
    {
      class: 'StringProperty',
      name: 'str',
    },
  ],
  methods: [
    {
      name: 'startObj',
      code: function() { this.out('{') },
      swiftCode_DELETE: `out("{")`,
    },
    {
      name: 'endObj',
      code: function() { this.out('}') },
      swiftCode_DELETE: `out("}")`,
    },
    {
      name: 'startArray',
      code: function() { this.out('[') },
      swiftCode_DELETE: `out("[")`,
    },
    {
      name: 'endArray',
      code: function() { this.out(']') },
      swiftCode_DELETE: `out("]")`,
    },
    {
      name: 'keySep',
      code: function() { this.out(':') },
      swiftCode_DELETE: `out(":")`,
    },
    {
      name: 'out',
      code: function(s) { this.str += s },
      swiftCode_DELETE: `str += s!`,
    },
    {
      name: 'comma',
      code: function(s) { this.out(',') },
      swiftCode_DELETE: `out(",")`,
    },
    {
      name: 'output',
      code: function(s) { return this.str },
      swiftCode_DELETE: `return str`,
    },
  ],
})
