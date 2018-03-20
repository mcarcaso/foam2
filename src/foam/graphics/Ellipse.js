/**
 * @license
 * Copyright 2018 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: "foam.graphics",
  name: "Ellipse",
  extends: "foam.graphics.CView",
  documentation: `
    A CView for drawing an ellipse.
    // TODO: implement intersects()
  `,
  properties: [
    {
      class: "Float",
      name: "radiusX",
      preSet: function (_, r) { return Math.max(0, r); }
    },
    {
      class: "Float",
      name: "radiusY",
      preSet: function (_, r) { return Math.max(0, r); }
    },
    {
      name: "start",
      value: 0,
      view: {
        class: "foam.u2.view.DualView",
        viewa: {
          class: "foam.u2.FloatView",
          precision: 4,
          onKey: true
        },
        viewb: {
          class: "foam.u2.RangeView",
          maxValue: 6.283185307179586,
          step: 0.01,
          onKey: true
        }
      }
    },
    {
      name: "end",
      value: 6.283185307179586,
      view: {
        class: "foam.u2.view.DualView",
        viewa: {
          class: "foam.u2.FloatView",
          precision: 4,
          onKey: true
        },
        viewb: {
          class: "foam.u2.RangeView",
          maxValue: 6.283185307179586,
          step: 0.01,
          onKey: true
        }
      }
    },
    {
      name: "borderWidth",
      class: "Float"
    },
    {
      name: "border",
      value: "#000000"
    },
    {
      class: "Float",
      name: "width",
      getter: function () { return 2 * this.radiusX; },
      setter: function (w) { this.radiusX = w / 2; }
    },
    {
      class: "Float",
      name: "height",
      getter: function () { return 2 * this.radiusY; },
      setter: function (h) { this.radiusY = h / 2; }
    },
    {
      name: "top_",
      hidden: true,
      transient: true,
      getter: function () { return this.y; }
    },
    {
      name: "left_",
      hidden: true,
      transient: true,
      getter: function () { return this.x; }
    },
    {
      name: "bottom_",
      hidden: true,
      transient: true,
      getter: function () { return this.y+2*this.radiusY; }
    },
    {
      name: "right_",
      hidden: true,
      transient: true,
      getter: function () { return this.x+2*this.radiusX; }
    }
  ],
  methods: [
    function paintSelf(x) {
      x.beginPath();
      x.ellipse(this.radiusX, this.radiusY, this.radiusX, this.radiusY, 0, this.start, this.end);

      if ( this.color ) x.fill();

      if ( this.border ) {
        x.lineWidth = this.borderWidth;
        x.stroke();
      }
    }
  ]
});