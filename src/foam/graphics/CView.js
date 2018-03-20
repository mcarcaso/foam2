/**
 * @license
 * Copyright 2018 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: "foam.graphics",
  name: "CView",
  documentation: "A Canvas-View; base-class for all graphical view components.",
  requires: [
    "foam.graphics.Canvas",
    "foam.graphics.Transform"
  ],
  topics: [
    {
      documentation: `
        Fires when this CView is invalidated and needs a repaint.
        Is listened to a foam.u2.Canvas() if one was created for
        this CView.
      `,
      name: "invalidated"
    }
  ],
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
      name: "rotation",
      preSet: function (_, r) {
        if ( r > 2 * Math.PI  ) return r - 2 * Math.PI;
        if ( r < -2 * Math.PI ) return r + 2 * Math.PI;
        return r;
      },
      view: {
        class: "foam.u2.view.DualView",
        viewa: {
          class: "foam.u2.FloatView",
          precision: 4,
          onKey: true
        },
        viewb: {
          class: "foam.u2.RangeView",
          step: 0.00001,
          minValue: -6.283185307179586,
          maxValue: 6.283185307179586,
          onKey: true
        }
      }
    },
    {
      name: "originX",
      class: "Float"
    },
    {
      name: "originY",
      class: "Float"
    },
    {
      name: "scaleX",
      class: "Float",
      value: 1
    },
    {
      name: "scaleY",
      class: "Float",
      value: 1
    },
    {
      name: "skewX",
      class: "Float",
      hidden: true
    },
    {
      name: "skewY",
      class: "Float",
      hidden: true
    },
    {
      name: "x",
      class: "Float"
    },
    {
      name: "y",
      class: "Float"
    },
    {
      name: "alpha",
      class: "Float",
      view: {
        class: "foam.u2.view.DualView",
        viewa: {
          class: "foam.u2.FloatView",
          precision: 4,
          onKey: true
        },
        viewb: {
          class: "foam.u2.RangeView",
          step: 0.0001,
          maxValue: 1,
          onKey: true
        }
      },
      value: 1
    },
    {
      class: "Color",
      name: "border"
    },
    {
      class: "Color",
      name: "color"
    },
    {
      class: "Color",
      name: "shadowColor"
    },
    {
      class: "Int",
      name: "shadowBlur",
      units: "pixels"
    },
    {
      name: "children",
      factory: function () { return []; },
      postSet: function (o, n) {
        for ( var i = 0 ; o && i < o.length ; i++ ) this.removeChild_(o[i]);
        for ( var i = 0 ; n && i < n.length ; i++ ) this.addChild_(n[i]);
      },
      hidden: true
    },
    {
      name: "state",
      value: "initial",
      hidden: "true",
      transient: true
    },
    {
      name: "parent",
      hidden: "true",
      transient: true
    },
    {
      name: "canvas",
      hidden: "true",
      transient: true
    },
    {
      name: "transform_",
      hidden: "true",
      transient: true,
      factory: function () { return this.Transform.create(); }
    },
    {
      name: "transform",
      hidden: "true",
      expression: function getTransform(x, originX, y, originY, rotation, skewX, skewY, scaleX, scaleY) {
        var t = this.transform_.reset();

        t.translate(x+originX, y+originY);
        t.rotate(rotation);
        t.skew(skewX, skewY);
        t.scale(scaleX, scaleY);
        t.translate(-originX, -originY);

        return t;
      }
    },
    {
      documentation: `
        If set to true, then this CView will automatically repaint
        whenever a child is added or removed, a property changes, or
        a property of a child changes. Only works if this CView has
        an associated Canvas (by calling toE()).
      `,
      class: "Boolean",
      name: "autoRepaint",
      hidden: true,
      value: true
    },
    {
      name: "top_",
      hidden: true,
      transient: true,
      getter: function () { return this.y; }
    },
    {
      name: "left_",
      hidden: true,
      transient: true,
      getter: function () { return this.x; }
    },
    {
      name: "bottom_",
      hidden: true,
      transient: true,
      getter: function () { return this.y+this.height; }
    },
    {
      name: "right_",
      hidden: true,
      transient: true,
      getter: function () { return this.x+this.width; }
    },
    {
      name: "invalidate_",
      transient: true,
      hidden: true,
      getter: function () {
        // TODO: Would be more efficient to be a factory, but doesn't work. Investigate.
        return this.parent ? this.parent.invalidate_ :
          this.autoRepaint ? this.invalidated.pub    :
          null ;
      }
    }
  ],
  methods: [
    function initCView() {
      this.invalidate_ && this.propertyChange.sub(this.invalidate_);
    },
    function invalidate() {
      this.invalidate_ && this.invalidate_();
    },
    function parentToLocalCoordinates(p) {
      this.transform.invert().mulP(p);
      p.x /= p.w;
      p.y /= p.w;
      p.w = 1;
    },
    function globalToLocalCoordinates(p) {
      if ( this.parent ) this.parent.globalToLocalCoordinates(p);
      this.parentToLocalCoordinates(p);
    },
    function findFirstChildAt(p) {
      if ( arguments.length > 1 ) {
        var tmp = foam.graphics.Point.create();
        tmp.x = arguments[0];
        tmp.y = arguments[1];
        tmp.w = 1;
        p = tmp;
      }

      this.parentToLocalCoordinates(p);

      if ( this.children.length ) {
        var p2 = foam.graphics.Point.create();

        for ( var i = 0 ; i < this.children.length ; i++ ) {
          p2.x = p.x;
          p2.y = p.y;
          p2.w = p.w;

          var c = this.children[i].findFirstChildAt(p2);
          if ( c ) return c;
        }
      }

      if ( this.hitTest(p) ) return this;
    },
    function hitTest(p) {
      // p must be in local coordinates.
      return p.x >= 0 && p.y >= 0 && p.x < this.width && p.y < this.height;
    },
    function maybeInitCView(x) {
      if ( this.state === 'initial' ) {
        this.state = 'initailized'
        this.initCView(x);
      }
    },
    function paint(x) {
      this.maybeInitCView(x);

      x.save();

      var
        alpha       = this.alpha,
        border      = this.border,
        color       = this.color,
        shadowColor = this.shadowColor,
        shadowBlur  = this.shadowBlur;

      if ( alpha !== 1 ) {
        x.globalAlpha *= alpha;
      }

      if ( border ) {
        x.strokeStyle = border.toCanvasStyle ?
          border.toCanvasStyle(x) :
          border ;
      }

      if ( color ) {
        x.fillStyle = color.toCanvasStyle ?
          color.toCanvasStyle(x) :
          color ;
      }

      this.doTransform(x);

      if ( shadowColor && shadowBlur ) {
        x.shadowColor = shadowColor;
        x.shadowBlur  = shadowBlur;
      }

      this.paintSelf(x);
      this.paintChildren(x);

      x.restore();
    },
    function doTransform(x) {
      var t = this.transform;
      x.transform(t.a, t.d, t.b, t.e, t.c, t.f);
    },
    function paintChildren(x) {
      for ( var i = 0 ; i < this.children.length ; i++ ) {
        this.children[i].paint(x);
      }
    },
    function remove(c) {
      for ( var i = 0 ; i < this.children.length ; i++ ) {
        if ( this.children[i] === c ) {
          this.children.splice(i, 1);
          this.removeChild_(c);
          return;
        }
      }
    },
    function removeAllChildren() {
      var children = this.children;
      this.children = [];
      for ( var i = 0 ; i < children.length ; i++ ) {
        this.removeChild_(children[i]);
      }
    },
    function removeChild(c) {
      console.log('Deprecated use of CView.removeChild(). Use .remove() instead.');
      this.remove(c);
    },
    function addChild_(c) {
      c.parent = this;
      c.canvas = this.canvas;
      return c;
    },
    function removeChild_(c) {
      c.parent = undefined;
      c.canvas = undefined;
      this.invalidate();
      return c;
    },
    function add() {
      for ( var i = 0 ; i < arguments.length ; i++ ) {
        this.children.push(arguments[i]);
        this.addChild_(arguments[i]);
      }
      this.invalidate();
      return this;
    },
    function addChildren() {
      console.warn('Deprecated use of CView.addChildren(). Use add() instead.');
      return this.add.apply(this, arguments);
    },
    function paintSelf(x) {},
    function hsl(h, s, l) {
      return 'hsl(' + h + ',' + s + '%,' + l + '%)';
    },
    function write() {
      return this.toE().write();
    },
    function toE(args, X) {
      return this.Canvas.create({ cview: this }, X).attrs({
        width:  this.slot(function(x, width,  scaleX) { return x + width*scaleX; }),
        height: this.slot(function(y, height, scaleY) { return y + height*scaleY; })
      });
    },
    function intersects(c) {
      if ( c.radius ) {
        return ! (
            this.x + this.width  < c.x - c.radius ||
            this.y + this.height < c.y - c.radius ||
            c.x    + c.radius    < this.x         ||
            c.y    + c.radius    < this.y );
      }
      return ! (
          this.x + this.width  < c.x ||
          this.y + this.height < c.y ||
          c.x    + c.width  < this.x ||
          c.y    + c.height < this.y );
    },
    function equals(b) { return this === b; }
  ]
});