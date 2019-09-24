/**
 * @license
 * Copyright 2019 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'foam.u2.layout',
  name: 'Grid',
  extends: 'foam.u2.Element',
  documentation: `
    A grid of responsive elements
  `,

  imports: [
    'displayWidth?'
  ],

  requires: [
    'foam.u2.layout.GUnit'
  ],

  css: `
    ^ {
      display: grid;
    }
  `,

  properties: [
    ['subs_', []]
  ],

  listeners: [
    {
      name: 'resizeChildren',
      isFramed: true,
      code: function() {
        this.subs_.forEach(s => s.detach());
        this.subs_ = this.childNodes
          .map(c => c.shown$)
          .map(s => this.onDetach(s.sub(this.resizeChildren)));

        this.shown = false;
        var currentWidth = 0;
        this.childNodes.forEach(ret => {
          if ( ! ret.shown ) {
            ret.style({
              'grid-column-start': 0,
              'grid-column-end': 0
            });
            return;
          }
          var width = this.GUnit.isInstance(ret) && ret.columns &&
            ret.columns[`${this.displayWidth.name.toLowerCase()}Columns`] ||
            this.displayWidth.cols;

          var startCol = currentWidth + 1;
          currentWidth += width;

          if ( currentWidth > this.displayWidth.cols ) {
            startCol = 1;
            currentWidth = width;
          }

          var endCol = startCol + width;

          ret.style({
            'grid-column-start': startCol,
            'grid-column-end': endCol
          });
        });
        this.childNodes.forEach((a, i) => {
          if ( ! a.shown ) return;
          var b = this.childNodes.find((v, i2) => {
            return i2 > i && v.shown;
          });
          if ( ! b || b.css['grid-column-start'] == 1 ) {
            a.style({
              'grid-column-end': this.displayWidth.cols + 1
            });
          }
        });
        this.shown = true;
      }
    }
  ],

  methods: [
    function initE() {
      this.SUPER();
      this.addClass(this.myClass());
      
      if ( this.displayWidth ){
        this.onDetach(this.displayWidth$.sub(this.resizeChildren));
        this.style(
          { 'grid-template-columns': this.displayWidth$.map(dw => {
              dw = dw || foam.u2.layout.DisplayWidth.XL;
              return `repeat(${dw.cols}, 1fr)`;
            })
          }
        )
        this.shown = false;
      }
    },

    function onAddChildren() {
      this.resizeChildren();
    }
  ]
});