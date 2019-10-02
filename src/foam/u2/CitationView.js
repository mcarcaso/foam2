/**
 * @license
 * Copyright 2019 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'foam.u2',
  name: 'CitationView',
  extends: 'foam.u2.View',
  axioms: [
    foam.pattern.Faceted.create()
  ],
  properties: [
    {
      class: 'Class',
      name: 'of'
    },
    {
      class: 'StringProperty',
      name: 'summary'
    }
  ],
  reactions: [
    ['', 'propertyChange.data', 'updateSummary'],
    ['data', 'propertyChange', 'updateSummary']
  ],
  listeners: [
    {
      name: 'updateSummary',
      isFramed: true,
      code: function() {
        this.summary = this.data ? this.data.toSummary() : undefined;
      }
    }
  ],
  methods: [
   function initE() {
      this.SUPER();
      this.add(this.summary$);
    }
  ]
});

foam.CLASS({
  package: 'foam.u2.view',
  name: 'AxiomArrayView',
  extends: 'foam.u2.View',
  requires: [
    'foam.comics.v2.DAOBrowserView',
    'foam.dao.MDAO',
    'foam.dao.PromisedDAO',
  ],
  classes: [
    {
      name: 'AxiomWrapper',
      ids: ['name'],
      properties: [
        {
          class: 'StringProperty',
          name: 'type',
          expression: function(data) { return data.cls_.id }
        },
        {
          class: 'StringProperty',
          name: 'name',
          expression: function(data) { return data.name }
        },
        {
          name: 'data',
          hidden: true
        },
      ]
    }
  ],
  properties: [
    {
      class: 'foam.dao.DAOProperty',
      name: 'dao',
      expression: function(data) {
        var dao = this.MDAO.create({ of: this.AxiomWrapper });
        return this.PromisedDAO.create({
          of: this.AxiomWrapper,
          promise: Promise.all(
            data.map(a => dao.put(this.AxiomWrapper.create({ data: a })))
          ).then(_ => dao)
        });
      }
    }
  ],
  methods: [
    function initE() {
      this.SUPER();
      this.tag(this.DAOBrowserView, { data: this.dao$proxy });
    }
  ]
});