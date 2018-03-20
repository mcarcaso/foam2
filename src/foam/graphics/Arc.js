/**
 * @license
 * Copyright 2018 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: "foam.graphics",
  name: "Arc",
  extends: "foam.graphics.CView",
  documentation: "A CView for drawing an arc.",
  properties: [
    {
      name: "radius",
      class: "Float",
      preSet: function (_, r) { return Math.max(0, r); }
    },
    {
      name: "start",
      class: "Float"
    },
    {
      name: "end",
      class: "Float"
    },
    {
      documentation: "TODO: rename this",
      name: "arcWidth",
      class: "Float"
    },
    {
      name: "border",
      value: "#000000"
    },
    {
      name: "top_",
      hidden: true,
      transient: true,
      getter: function () { return this.y-this.radius; }
    },
    {
      name: "left_",
      hidden: true,
      transient: true,
      getter: function () { return this.x-this.radius; }
    },
    {
      name: "bottom_",
      hidden: true,
      transient: true,
      getter: function () { return this.y+this.radius; }
    },
    {
      name: "right_",
      hidden: true,
      transient: true,
      getter: function () { return this.x+this.radius; }
    }
  ],
  methods: [
    function paintSelf(x) {
      x.beginPath();
      x.arc(0, 0, this.radius, this.start, this.end);
	  x.lineTo(0,0);

      if ( this.color ) x.fill();

      if ( this.border ) {
        x.lineWidth = this.arcWidth;
        x.stroke();
      }
    },
    function toE(X) {
      return this.Canvas.create({ cview: this }, X).attrs({
        width: this.x + this.radius + this.arcWidth,
        height: this.y + this.radius + this.arcWidth
      });
    }
  ]
});