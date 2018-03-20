/**
 * @license
 * Copyright 2018 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: "foam.graphics",
  name: "Polygon",
  extends: "foam.graphics.CView",
  documentation: "A CView for drawing a polygon.",
  properties: [
    {
      class: "Array",
      of: "Float",
      name: "xCoordinates"
    },
    {
      class: "Array",
      of: "Float",
      name: "yCoordinates"
    },
    {
      class: "String",
      name: "color",
      value: "#000"
    },
    {
      class: "Float",
      name: "lineWidth",
      value: 1
    }
  ],
  methods: [
    function paintSelf(x) {
      x.beginPath();
      x.moveTo(this.xCoordinates[0], this.yCoordinates[0]);
      for ( var i = 1; i < this.xCoordinates.length; i++ ) {
        x.lineTo(this.xCoordinates[i], this.yCoordinates[i]);
      }
      x.lineWidth = this.lineWidth;
      x.strokeStyle = this.color;
      x.stroke();
    }
  ]
});