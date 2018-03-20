/**
 * @license
 * Copyright 2018 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: "foam.u2",
  name: "TableView",
  extends: "foam.u2.Element",
  requires: [
    "foam.mlang.order.Desc",
    "foam.u2.TableBodySink",
    "foam.u2.TableHeader"
  ],
  exports: [
    "as tableView"
  ],
  css: `
    ^sorting {
      font-weight: bold;
    }

    ^sort-direction {
      display: none;
      margin-right: 8px;
    }
    ^sorting ^sort-direction {
      display: initial;
    }
  `,
  properties: [
    {
      class: "Class",
      name: "of",
      factory: function () { return this.data.of; }
    },
    [
      "nodeName",
      "table"
    ],
    {
      name: "columns_",
      expression: function (columns, of) {
        var cls = this.of;
        return columns.map(function(p) {
          // Lookup String values as Axiom names, otherwise,
          // treat the object as the column object itself.
          return typeof p === 'string' ?
              cls.getAxiomByName(p) :
              p ;
        });
      }
    },
    {
      name: "properties",
      setter: function (_, ps) {
        // TODO: remove when all code ported
        console.warn("Deprecated use of TableView.properties. Use 'columns' instead.");
        this.columns = ps;
      }
    },
    {
      name: "columns",
      expression: function (of) {
        if ( ! this.of ) return [];

        var tableColumns = this.of.getAxiomByName('tableColumns');

        if ( tableColumns ) return tableColumns.columns;

        return this.of.getAxiomsByClass(foam.core.Property)
            .filter(function(p) { return ! p.hidden; })
            .map(foam.core.Property.NAME.f);
      }
    },
    {
      name: "config",
      documentation: `
        Map of property-name: {map of property overrides} for configuring properties
        values include 'label', 'units', and 'view'
      `
    },
    {
      class: "foam.dao.DAOProperty",
      name: "data"
    },
    {
      name: "header",
      expression: function (columns_) {
        return this.TableHeader.create({
          columns_: columns_,
          sortOrder$: this.sortOrder$
        });
      }
    },
    {
      name: "body",
      factory: function () { return this.E('tbody'); }
    },
    {
      name: "sortOrder"
    },
    {
      name: "selection"
    }
  ],
  methods: [
    function init() {
      this.SUPER();

      console.log('Deprecated use of foam.u2.TableView. Use foam.u2.view.TableView instead.');
    },
    function initE() {
      // Configure columns if 'config' set.
      if ( this.config ) {
        for ( var i = 0 ; i < this.columns_.length ; i++ ) {
          var col = this.columns_[i];
          var cfg = this.config[col.name];

          if ( cfg ) this.columns_[i] = col.clone().copyFrom(cfg);
        }
      }

      this.onDAOUpdate();
      this.data$proxy.sub('on', this.onDAOUpdate);

      return this.
          addClass(this.myClass()).
          add(this.header$, this.body$);
    },
    function sortBy(prop) {
      // Two cases: same as the current prop, or different.
      var sortName = this.sortOrder ?
          (this.Desc.isInstance(this.sortOrder) ? this.sortOrder.arg1.name :
              this.sortOrder.name) :
          '';
      if ( sortName === prop.name ) {
        // Invert the previous order.
        this.sortOrder = this.Desc.isInstance(this.sortOrder) ?
            prop : this.Desc.create({ arg1: prop });
      } else {
        // Set it to the new column.
        this.sortOrder = prop;
      }
      this.onDAOUpdate();
    }
  ],
  listeners: [
    {
      name: "onDAOUpdate",
      isFramed: true,
      code: function () {
        var dao = this.data;
        if ( this.sortOrder ) {
          dao = dao.orderBy(this.sortOrder);
        }
        dao.select(this.TableBodySink.create({
          columns_: this.columns_
        })).then(function(a) {
          this.body = a.body;
        }.bind(this));
      }
    }
  ]
});