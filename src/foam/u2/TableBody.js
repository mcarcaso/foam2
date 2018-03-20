/**
 * @license
 * Copyright 2018 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: "foam.u2",
  name: "TableBody",
  extends: "foam.u2.Element",
  requires: [
    "foam.mlang.predicate.And",
    "foam.mlang.predicate.Eq",
    "foam.mlang.predicate.Not",
    "foam.mlang.predicate.Or",
    "foam.u2.CheckBox",
    "foam.u2.TableCellRefinement"
  ],
  imports: [
    "selectionQuery",
    "tableView"
  ],
  properties: [
    [
      "nodeName",
      "tbody"
    ],
    [
      "columns_"
    ],
    "selectionFeedback_",
    {
      name: "rows_",
      factory: function () { return {}; }
    }
  ],
  methods: [
    function initE() {
      var self = this;
      this.on('click', function(event) {
        var obj = self.eToObj(event);
        if ( obj ) self.tableView.selection = obj;
      }).
      on('dblclick', function(event) {
        var obj = self.eToObj(event);
        if ( obj ) 1;
      });
    },
    function eToObj(event) {
      /** Find the object associated with a DOM element. **/
      var me = this.el();
      var e = event.target;
      while ( e.nodeName !== 'TR' && e !== me )
        e = e.parentNode;

      // If we managed to click between rows, do nothing.
      if ( e === me ) return;

      // Otherwise, we found the tr.
      return this.rows_[e.id];
    },
    function addObj(obj) {
      var e = this.start('tr')
          .enableClass(this.tableView.myClass('selected'),
              this.tableView.selection$.map(function(sel) {
                return sel === obj;
              }));

      if ( this.selectionQuery$ ) {
        var cb;
        e.start('td')
            .start(this.CheckBox).call(function() { cb = this; }).end()
        .end();

        this.selectionQuery$.sub(foam.Function.bind(this.selectionUpdate, this,
            cb, obj));
        this.selectionUpdate(cb, obj);
        cb.data$.sub(foam.Function.bind(this.selectionClick, this, obj));
      }

      for ( var j = 0 ; j < this.columns_.length ; j++ ) {
        var prop = this.columns_[j];
        e = e.start('td').add(prop.tableCellView(obj, e)).end();
      }
      e.end();
      this.rows_[e.id] = obj;
    }
  ],
  listeners: [
    {
      name: "selectionUpdate",
      code: function (checkbox, obj) {
        var selected = this.selectionQuery.f(obj);
        if ( selected !== checkbox.data ) {
          // Need to prevent feedback between these two listeners.
          this.selectionFeedback_ = true;
          checkbox.data = selected;
          this.selectionFeedback_ = false;
        }
      }
    },
    {
      name: "selectionClick",
      code: function (obj, _, __, ___, slot) {
        if ( this.selectionFeedback_ ) return;

        var q = this.Eq.create({ arg1: obj.ID, arg2: obj.id });
        if ( slot.get() ) {
          this.selectionQuery = this.Or.create({
            args: [ q, this.selectionQuery ]
          }).partialEval();
        } else {
          this.selectionQuery = this.And.create({
            args: [ this.Not.create({ arg1: q }), this.selectionQuery ]
          }).partialEval();
        }
      }
    }
  ]
});