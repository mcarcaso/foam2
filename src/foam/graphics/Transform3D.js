/**
 * @license
 * Copyright 2018 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: "foam.graphics",
  name: "Transform3D",
  documentation: "Three-dimensional affine transform.",
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
      class: "Simple",
      name: "j"
    },
    {
      class: "Simple",
      name: "k"
    },
    {
      class: "Simple",
      name: "l"
    },
    {
      class: "Simple",
      name: "m"
    },
    {
      class: "Simple",
      name: "n"
    },
    {
      class: "Simple",
      name: "o"
    },
    {
      class: "Simple",
      name: "p"
    }
  ],
  methods: [
    function init() {
      this.a = 1; this.b = 0; this.c = 0; this.d = 0;
      this.e = 0; this.f = 1; this.g = 0; this.h = 0;
      this.i = 0; this.j = 0; this.k = 1; this.l = 0;
      this.m = 0; this.n = 0; this.o = 0; this.p = 1;
    },
    function mulM(o) {
      return this.mul(
        o.a, o.b, o.c, o.d,
        o.e, o.f, o.h, o.i,
        o.j, o.j, o.k, o.l,
        o.m, o.n, o.o, o.p);
    },
    function mulP(p) {
      var ta = this.a, tb = this.b, tc = this.c, td = this.d,
          te = this.e, tf = this.f, tg = this.g, th = this.h,
          ti = this.i, tj = this.j, tk = this.k, tl = this.l,
          tm = this.m, tn = this.n, to = this.o, tp = this.p;

      var a = p.x;
      var b = p.y;
      var c = p.z
      var d = p.w;

      p.x = ta * a + tb * b + tc * c + td * d;
      p.y = te * a + tf * b + tg * c + th * d;
      p.z = ti * a + tj * b + tk * c + tl * d;
      p.w = tm * a + tn * b + to * c + tp * d;

      return this;
    },
    function mul(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
      var ta = this.a, tb = this.b, tc = this.c, td = this.d,
          te = this.e, tf = this.f, tg = this.g, th = this.h,
          ti = this.i, tj = this.j, tk = this.k, tl = this.l,
          tm = this.m, tn = this.n, to = this.o, tp = this.p;

      this.a = ta * a + tb * e + tc * i + td * m;
      this.b = ta * b + tb * f + tc * j + td * n;
      this.c = ta * c + tb * g + tc * k + td * o;
      this.d = ta * d + tb * h + tc * l + td * p;

      this.e = te * a + tf * e + tg * i + th * m;
      this.f = te * b + tf * f + tg * j + th * n;
      this.g = te * c + tf * g + tg * k + th * o;
      this.h = te * d + tf * h + tg * l + th * p;

      this.i = ti * a + tj * e + tk * i + tl * m;
      this.j = ti * b + tj * f + tk * j + tl * n;
      this.k = ti * c + tj * g + tk * k + tl * o;
      this.l = ti * d + tj * h + tk * l + tl * p;

      this.m = tm * a + tn * e + to * i + tp * m;
      this.n = tm * b + tn * f + to * j + tp * n;
      this.o = tm * c + tn * g + to * k + tp * o;
      this.p = tm * d + tn * h + to * l + tp * p;

      return this;
    },
    function affine(m) {
      return this.mul(m.a, m.b, m.c, m.d,
                      m.e, m.f, m.g, m.h,
                      m.i, m.j, m.k, m.l,
                      m.m, m.n, m.o, m.p);
    },
    function invert() {
      // a b c d    a e i m
      // e f g h -> b f j n
      // i j k l    c g k o
      // m n o p    d h l p
      var tmp = this.b;
      this.b = this.e;
      this.e = tmp;

      tmp = this.c;
      this.c = this.i;
      this.i = tmp;

      tmp = this.d;
      this.d = this.m;
      this.m = tmp;

      tmp = this.g;
      this.g = this.j;
      this.j = tmp;

      tmp = this.h;
      this.h = this.n;
      this.n = tmp;

      tmp = this.l;
      this.l = this.o;
      this.o = tmp;

      return this;
    },
    function reset() {
      this.init();
      return this;
    },
    function translate(dx, dy, dz) {
      if ( ! dx && ! dy && ! dz ) return;
      this.mul(1, 0, 0, dx,
               0, 1, 0, dy,
               0, 0, 1, dz,
               0, 0, 0, 1);
    },
    function skew(x, y, z) {
      if ( ! x && ! y && ! z ) return;
      throw new Error('not implemented yet.');
    },
    function scale(x, y, z) {
      if ( x === 1 && y === 1 && z == 1 ) return;
      this.mul(x, 0, 0, 0,
               0, y, 0, 0,
               0, 0, z, 0,
               0, 0, 0, 1);
    },
    function rotateX(a) {
      if ( ! a ) return;
      var c = Math.cos(a);
      var s = Math.sin(a);

      this.mul(
        1,  0,  0,  0,
        0,  c, -s,  0,
        0,  s,  c,  0,
        0,  0,  0,  1);
    },
    function rotateY(a) {
      if ( ! a ) return;
      var c = Math.cos(a);
      var s = Math.sin(a);

      this.mul(
        c,  0,  s,  0,
        0,  1,  0,  0,
       -s,  0,  c,  0,
        0,  0,  0,  1);
    },
    function rotateZ(a) {
      if ( ! a ) return;
      var c = Math.cos(a);
      var s = Math.sin(a);

      this.mul(
        c, -s,  0,  0,
        s,  c,  0,  0,
        0,  0,  1,  0,
        0,  0,  0,  1);
    },
    function rotate(x, y, z, r) {
      var d = Math.sqrt(x*x + y*y + z*z);
      x /= d;
      y /= d;
      z /= d;

      var cos = Math.cos(r);
      var sin = Math.sin(r);

      this.mul(
        cos + x*x*(1 - cos),     x*y*(1 - cos) - z*sin,   x*z*(1 - cos) + y*sin,  0,
        y*x*(1 - cos) + z*sin,   cos + y*y*(1-cos),       y*z*(1 - cos) - x*sin,  0,
        z*x*(1 - cos) - y*sin,   z*y*(1 - cos) + x*sin,   cos + z*z*(1 - cos),    0,
        0,                       0,                       0,                      1);

    }
  ]
});