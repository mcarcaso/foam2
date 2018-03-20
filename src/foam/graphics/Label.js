/**
 * @license
 * Copyright 2018 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: "foam.graphics",
  name: "Label",
  extends: "foam.graphics.CView",
  documentation: "A CView drawing text.",
  properties: [
    {
      class: "String",
      name: "text",
      view: {
        class: "foam.u2.TextField",
        onKey: true
      }
    },
    {
      name: "align",
      label: "Alignment",
      value: "start",
      view: {
        class: "foam.u2.view.RadioView",
        choices: [
          "start",
          "center",
          "end"
        ]
      }
    },
    {
      class: "String",
      name: "font"
    },
    {
      class: "Color",
      name: "color",
      value: "#000000"
    },
    {
      class: "Color",
      name: "border",
      label: "Border Color"
    },
    {
      class: "Float",
      name: "maxWidth",
      label: "Maximum Width",
      value: -1
    }
  ],
  methods: [
    function paintSelf(c) {
      if ( this.font ) c.font = this.font;

      c.textAlign = this.align;
      c.fillStyle = this.color;

      c.fillText(
        this.text,
          this.align === 'start'  ? 0 :
          this.align === 'center' ? this.width/2 :
          this.width,
        this.height/2+10);

      if ( this.border ) {
        c.strokeStyle = this.border;
        c.strokeRect(0, 0, this.width-1, this.height-1);
      }
    }
  ]
});