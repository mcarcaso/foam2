/**
 * @license
 * Copyright 2019 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  name: 'DateTest',

  properties: [
    {
      class: 'DateProperty',
      name: 'date'
    },
    {
      class: 'DateProperty',
      name: 'datePicker',
      view: 'foam.u2.md.DateField'
    }
  ]
});

var d = DateTest.create();
foam.u2.DetailView.create({ data: d }).write();
foam.u2.DetailView.create({ data: d }).write();
