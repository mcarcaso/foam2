/**
 * @license
 * Copyright 2018 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: "foam.graphics",
  name: "Point",
  documentation: `
    // TODO: where/how is this used?
  `,
  properties: [
    {
      class: "Simple",
      name: "x"
    },
    {
      class: "Simple",
      name: "y"
    },
    {
      class: "Simple",
      name: "w"
    }
  ],
  methods: [
    function clone() {
      var p = this.cls_.create();
      p.x = this.x;
      p.y = this.y;
      p.w = this.w;
      return p;
    },
    function toCartesian() {
      // TODO: What is the right name for this function?
      // It's related to perspective transformations
      // It transforms this point from the homogeneous coordinate space
      // to the cartesian coordiate space.

      this.x = this.x / this.w;
      this.y = this.y / this.w;
      this.w = 1;
    }
  ]
});