/**
 * @license
 * Copyright 2018 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: "foam.graphics",
  name: "Transform",
  documentation: `
    Affine transform.
    /*
    a : 1 // H scale
    b : 0 // V skew
    c : 3821.142407877334 // H move
    d : 0 // H skew
    e : 1 // V scale
    f : -6796.176219640322 // V move
    g : 0
    h : 0
    i : 1
    */
  `,
  properties: [
    {
      class: "Simple",
      name: "a"
    },
    {
      class: "Simple",
      name: "b"
    },
    {
      class: "Simple",
      name: "c"
    },
    {
      class: "Simple",
      name: "d"
    },
    {
      class: "Simple",
      name: "e"
    },
    {
      class: "Simple",
      name: "f"
    },
    {
      class: "Simple",
      name: "g"
    },
    {
      class: "Simple",
      name: "h"
    },
    {
      class: "Simple",
      name: "i"
    },
    {
      name: "inverse_",
      factory: function () { return this.cls_.create(); },
      compare: function () { return 0; }
    }
  ],
  methods: [
    function initArgs() {
      this.a = 1; this.b = 0; this.c = 0;
      this.d = 0; this.e = 1; this.f = 0;
      this.g = 0; this.h = 0; this.i = 1;
    },
    function mul(a, b, c, d, e, f, g, h, i) {
      var ta = this.a, tb = this.b, tc = this.c,
          td = this.d, te = this.e, tf = this.f,
          tg = this.g, th = this.h, ti = this.i;

      this.a = ta * a + tb * d + tc * g;
      this.b = ta * b + tb * e + tc * h;
      this.c = ta * c + tb * f + tc * i;

      this.d = td * a + te * d + tf * g;
      this.e = td * b + te * e + tf * h;
      this.f = td * c + te * f + tf * i;

      this.g = tg * a + th * d + ti * g;
      this.h = tg * b + th * e + ti * h;
      this.i = tg * c + th * f + ti * i;

      return this;
    },
    function mulT(t) {
      return this.mul(t.a, t.b, t.c, t.d, t.e, t.f, t.g, t.h, t.i);
    },
    function mulP(p) {
      var ta = this.a, tb = this.b, tc = this.c,
          td = this.d, te = this.e, tf = this.f,
          tg = this.g, th = this.h, ti = this.i;

      var a = p.x;
      var d = p.y;
      var g = p.w;

      p.x = ta * a + tb * d + tc * g;
      p.y = td * a + te * d + tf * g;
      p.w = tg * a + th * d + ti * g;

      return this;
    },
    function affine(m) {
      return this.mul(m.a, m.b, m.c, m.d, m.e, m.f, m.g, m.h, m.i);
    },
    function transpose() {
      // a b c    a d g
      // d e f -> b e h
      // g h i    c f i
      var tmp = this.b;
      this.b = this.d;
      this.d = tmp;

      tmp = this.c;
      this.c = this.g;
      this.g = tmp;

      tmp = this.f;
      this.f = this.h;
      this.h = tmp;
      return this;
    },
    function invert() {
      var ta = this.a, tb = this.b, tc = this.c,
          td = this.d, te = this.e, tf = this.f,
          tg = this.g, th = this.h, ti = this.i;

      var det = ta*(te*ti  - tf*th) - tb*(td*ti - tf*tg) + tc*(td*th-te*tg);
      var detinv = 1 / det;

      var inv = this.inverse_;

      inv.a = detinv * (te*ti - tf*th);
      inv.b = detinv * (tc*th - tb*ti);
      inv.c = detinv * (tb*tf - tc*te);

      inv.d = detinv * (tf*tg - td*ti);
      inv.e = detinv * (ta*ti - tc*tg);
      inv.f = detinv * (tc*td - ta*tf);

      inv.g = detinv * (td*th - te*tg);
      inv.h = detinv * (tb*tg - ta*th);
      inv.i = detinv * (ta*te - tb*td);

      return inv;
    },
    function det() {
      // Compute the determinant
      var a = this.a, b = this.b, c = this.c,
          d = this.d, e = this.e, f = this.f,
          g = this.g, h = this.h, i = this.i;

      return a*(e*i  - f*h) - b*(d*i - f*g) + c*(d*h-e*g);
    },
    function reset() {
      this.initArgs();
      return this;
    },
    function translate(dx, dy) {
      if ( dx || dy ) this.mul(1, 0, dx, 0, 1, dy, 0, 0, 1);
      return this;
    },
    function skew(x, y) {
      if ( x || y ) this.mul(1, x, 0, y, 1, 0, 0, 0, 1);
      return this;
    },
    function scale(x, y) {
      if ( y === undefined ) y = x;
      if ( x != 1 || y != 1 ) this.mul(x, 0, 0, 0, y, 0, 0, 0, 1);
      return this;
    },
    function rotate(a) {
      if ( a ) this.mul(Math.cos(a), Math.sin(a), 0, -Math.sin(a), Math.cos(a), 0, 0, 0, 1);
      return this;
    },
    function rotateAround(a, x, y) {
      return this.translate(-x, -y).rotate(a).translate(x, y);
    }
  ]
});