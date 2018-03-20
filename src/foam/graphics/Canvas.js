/**
 * @license
 * Copyright 2018 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: "foam.graphics",
  name: "Canvas",
  extends: "foam.u2.Element",
  documentation: "A Canvas U2 Element for drawing CViews in. Don't create directly, use CView.toE() instead.",
  requires: [
    "foam.input.Pointer"
  ],
  properties: [
    [
      "nodeName",
      "CANVAS"
    ],
    {
      name: "context",
      factory: function () {
        return this.el().getContext('2d');
      }
    },
    {
      name: "context3D",
      factory: function () {
        return this.el().getContext('webgl');
      }
    },
    {
      name: "cview",
      postSet: function (o, n) {
        n.canvas = this;

        if ( this.attributeMap.width === undefined || this.attributeMap.height === undefined ) {
          this.setAttribute('width',  n.width);
          this.setAttribute('height', n.height);
        }

        this.paint();
      }
    },
    {
      name: "pointer",
      factory: function () {
        return this.Pointer.create({ element: this });
      }
    }
  ],
  methods: [
    function initE() {
      this.SUPER();
      this.on('load', this.paint);
      this.cview$.valueSub('invalidated', this.paint);
    },
    function erase() {
      this.el().width = this.el().width;
    }
  ],
  listeners: [
    {
      name: "paint",
      isFramed: true,
      code: function paintCanvas() {
        // Only paint after being loaded
        if ( this.state !== this.LOADED || ! this.cview ) return;

        var ctx = this.cview.paint3D ? this.context3D : this.context;
        this.erase(ctx);
        if ( this.cview.paint3D ) {
          this.cview.paint3D(ctx);
        } else {
          this.cview.paint(ctx);
        }
      }
    }
  ]
});