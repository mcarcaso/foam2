/**
 * @license
 * Copyright 2018 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'foam.nanos.auth',
  name: 'HtmlDoc',

  documentation: 'Model to store html documents',

  javaImports: [
    'java.nio.charset.StandardCharsets',
    'java.util.Date',
  ],

  tableColumns: [ 'id', 'name', 'issuedDate' ],

  properties: [
    {
      class: 'LongProperty',
      name: 'id'
    },
    {
      class: 'StringProperty',
      name: 'name'
    },
    {
      class: 'DateProperty',
      name: 'issuedDate',
      label: 'Effective Date',
      tableCellFormatter: function(date) {
        this.add(date ? date.toISOString().substring(0, 10) : '');
      }
    },
    {
      class: 'StringProperty',
      name: 'body',
      documentation: 'Template body',
      view: { class: 'foam.u2.tag.TextArea', rows: 40, cols: 150 },
    },

  ]
});
