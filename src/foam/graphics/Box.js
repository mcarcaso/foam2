/**
 * @license
 * Copyright 2018 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: "foam.graphics",
  name: "Box",
  extends: "foam.graphics.CView",
  documentation: "A CView for drawing a rectangular box.",
  properties: [
    {
      class: "Float",
      name: "width"
    },
    {
      class: "Float",
      name: "height"
    },
    {
      class: "Float",
      name: "borderWidth",
      value: 1
    },
    {
      name: "border",
      value: "#000000"
    }
  ],
  methods: [
    function paintSelf(x) {
      x.beginPath();
      x.rect(0, 0, this.width, this.height);
      if ( this.border && this.borderWidth ) {
        x.lineWidth = this.borderWidth;
        x.stroke();
      }
      if ( this.color  ) x.fill();
    }
  ]
});