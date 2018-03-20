/**
 * @license
 * Copyright 2018 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: "foam.graphics",
  name: "Circle",
  extends: "foam.graphics.Arc",
  documentation: "A CView for drawing a Circle.",
  properties: [
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
    }
  ],
  methods: [
    function hitTest(p) {
      var r = this.radius + this.arcWidth/2 - 1;
      return p.x*p.x + p.y*p.y <= r*r;
    },
    function intersects(c) {
      if ( ! c.radius ) return c.intersects(this);
      var r = this.radius + c.radius;
      if ( this.border ) r += this.arcWidth/2-1;
      if ( c.border    ) r += c.arcWidth/2-1;
      var dx = this.x-c.x;
      var dy = this.y-c.y;
      return dx * dx + dy * dy <= r * r;
    }
  ]
});