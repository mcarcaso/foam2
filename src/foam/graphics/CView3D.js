/**
 * @license
 * Copyright 2018 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: "foam.graphics",
  name: "CView3D",
  requires: [
    "foam.graphics.Transform3D"
  ],
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
      class: "Float",
      name: "z"
    },
    {
      class: "Float",
      name: "rotateX"
    },
    {
      class: "Float",
      name: "rotateY"
    },
    {
      class: "Float",
      name: "rotateZ"
    },
    {
      class: "Float",
      name: "scaleX",
      value: 1
    },
    {
      class: "Float",
      name: "scaleY",
      value: 1
    },
    {
      class: "Float",
      name: "scaleZ",
      value: 1
    },
    {
      name: "transform_",
      factory: function () {
        return this.Transform3D.create();
      }
    },
    {
      name: "transform",
      getter: function () {
        var t = this.transform_.reset();

        t.translate(this.x, this.y, this.z);
        t.rotateX(this.rotateX);
        t.rotateY(this.rotateY);
        t.rotateZ(this.rotateZ);
        t.scale(this.scaleX, this.scaleY, this.scaleZ);

        return t;
      }
    }
  ],
  methods: [
    function paint3D(gl) {
      // TODO: transform
      this.paintSelf(gl);
    },
    function paintSelf(gl) {
      gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
      gl.enableVertexAttribArray(this.positionAttribute);
      gl.vertexAttribPoint(this.positionAttribute);
      gl.drawArrays(this.drawType, 0, this.vertexCount);
    }
  ]
});