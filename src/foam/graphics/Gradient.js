/**
 * @license
 * Copyright 2018 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: "foam.graphics",
  name: "Gradient",
  documentation: `
    // TODO: where/how is this used?
  `,
  properties: [
    "x0",
    "y0",
    "r0",
    "x1",
    "y1",
    "r1",
    {
      name: "radial",
      class: "Boolean",
      value: false
    },
    {
      name: "colors",
      factory: function () {
        return [];
      }
    }
  ],
  methods: [
    function toCanvasStyle(x) {
      var t = this;
      var g = this.radial ?
        x.createRadialGradient(t.x0, t.y0, t.r0, t.x1, t.y1, t.r1) :
        x.createLinearGradient(t.x0, t.y0, t.x1, t.y1) ;

      for ( var i = 0 ; i < t.colors.length ; i++ )
        g.addColorStop(t.colors[i][0], t.colors[i][1]);

      return g;
    }
  ]
});