/**
 * @license
 * Copyright 2018 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: "foam.u2",
  name: "TableHeader",
  extends: "foam.u2.Element",
  requires: [
    "foam.mlang.order.Desc",
    "foam.u2.Entity"
  ],
  imports: [
    "selectionQuery",
    "tableView"
  ],
  properties: [
    {
      name: "columns_",
      required: true
    },
    "sortOrder"
  ],
  methods: [
    function initE() {
      var self = this;
      this.nodeName = 'thead';

      var e = this.start('tr');
      if ( this.selectionQuery$ ) {
        e.tag('td');
      }

      for ( var i = 0 ; i < this.columns_.length ; i++ ) {
        var sorting$ = this.sortOrder$.map(function(prop, order) {
          if ( ! order ) return '';
          var desc = this.Desc.isInstance(order);
          var baseOrder = desc ? order.arg1 : order;
          return prop.name === baseOrder.name ?
              this.Entity.create({ name: desc ? 'darr' : 'uarr' }) : '';
        }.bind(this, this.columns_[i]));

        e.start('td')
            .enableClass(this.myClass('sorting'), sorting$)
            .start('span')
                .addClass(this.myClass('sort-direction'))
                .add(sorting$)
            .end()
            .add(this.columns_[i].columnLabel)
            .on('click', this.tableView.sortBy.bind(this.tableView, this.columns_[i]))
            .end();
      }
      e.end();
    }
  ]
});