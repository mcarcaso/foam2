/**
 * @license
 * Copyright 2018 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: "foam.input",
  name: "TouchEvent",
  properties: [
    {
      class: "Float",
      name: "x"
    },
    {
      class: "Float",
      name: "y"
    },
    {
      class: "Boolean",
      name: "claimed",
      value: false
    }
  ]
});