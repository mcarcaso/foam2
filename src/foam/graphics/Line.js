/**
 * @license
 * Copyright 2018 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: "foam.graphics",
  name: "Line",
  extends: "foam.graphics.CView",
  documentation: "A CView for drawing a line.",
  properties: [
    {
      class: "Float",
      name: "startX",
      getter: function () { return this.x; },
      setter: function (v) { this.x = v; }
    },
    {
      class: "Float",
      name: "startY",
      getter: function () { return this.y; },
      setter: function (v) { this.y = v; }
    },
    {
      class: "Float",
      name: "endX"
    },
    {
      class: "Float",
      name: "endY"
    },
    {
      class: "Float",
      name: "lineWidth",
      value: 1
    },
    {
      class: "String",
      name: "color",
      value: "#000000"
    },
    {
      name: "lineDash",
      documentation: "An Array of numbers which specify distances to alternately draw lines and gaps. Full line if not set."
    }
  ],
  methods: [
    function paintSelf(x) {
      x.beginPath();
      if ( this.lineDash ) x.setLineDash(this.lineDash);
      x.moveTo(0, 0);
      x.lineTo(this.endX-this.x, this.endY-this.y);
      x.lineWidth = this.lineWidth;
      x.strokeStyle = this.color;
      x.stroke();
    },
    function hitTest(p) {
      // There is probably a better way to do this.
      // This checks if the given point is

      // A is the vector from the start of the line to point p
      var ax = p.x - this.startX;
      var ay = p.y - this.startY;

      // B a vector representing the line (from start to end).
      var bx = this.endX - this.startX;
      var by = this.endY - this.startY;
      var blen = Math.sqrt(bx * bx + by * by);

      // Project A onto B
      var scalarProj = (ax * bx + ay * by ) / blen;
      var factor = scalarProj / blen;
      var projX = bx * factor;
      var projY = by * factor;

      // Calculate vector rejection "perpendicular distance"
      var rejX = ax - projX;
      var rejY = ay - projY;

      // Hit's if the perpendicular distance is less than some factor,
      // and the point is within some factor of the line start/finish

      var distance = Math.sqrt(rejX * rejX + rejY * rejY);
      var pos = scalarProj;

      return distance < 5 && pos > -5 && pos < (blen + 5)

      return false;
    }
  ]
});