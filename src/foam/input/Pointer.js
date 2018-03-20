/**
 * @license
 * Copyright 2018 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: "foam.input",
  name: "Pointer",
  requires: [
    "foam.input.Mouse",
    "foam.input.Touch"
  ],
  topics: [
    "touch"
  ],
  properties: [
    {
      name: "element",
      required: true
    },
    {
      name: "mouseInput",
      factory: function () {
        var m = this.Mouse.create();
        this.onDetach(m.element$.follow(this.element$));
        this.onDetach(m.touch.sub(this.onTouch));
        return m;
      }
    },
    {
      name: "touchInput",
      factory: function () {
        var t = this.Touch.create();
        this.onDetach(t.element$.follow(this.element$));
        this.onDetach(t.touch.sub(this.onTouch));
        return t;
      }
    }
  ],
  methods: [
    function init() {
      // Assigning to unused variables to make Closure happy.
      var mi = this.mouseInput;
      var ti = this.touchInput;
    }
  ],
  listeners: [
    function onTouch(e, _, t) {
      this.touch.pub(t);
    }
  ]
});