/**
 * @license
 * Copyright 2018 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'foam.support.model',
  name: 'Ticket',

  documentation: 'Ticket Model',

  javaImports: [
    'java.util.Date'
  ],

  tableColumns: [
    'id', 'requestorEmail', 'subject', 'createdAt', 'status'
  ],
  exports: [
    'subject'
  ],
  properties: [
    {
      class: 'LongProperty',
      name: 'id',
      visibility: foam.u2.Visibility.RO,
      label:'Ticket ID'
    },
    {
      class: 'StringProperty',
      name: 'requestorEmail'
    },
    {
      class: 'StringProperty',
      name: 'requestorName'
    },
    {
      class: 'StringProperty',
      name: 'subject',
      label: 'Subject',
    },
    {
      class: 'DateProperty',
      name: 'createdAt',
      visibility: foam.u2.Visibility.RO,
      label: 'Time',
      factory: function() {
          return new Date();
      },
      javaFactory: 'return new Date();',
      tableCellFormatter: function(state, obj, rel) {
        if ( ! state ) return;
        var locale = 'en-us';
        var month = state.toLocaleString(locale, { month: 'short' });
        var date = state.getDate();
        var year = state.getFullYear();
        this.start().add(month+' '+date+', '+year).end();
      }
    },
    {
      class: 'StringProperty',
      name: 'supportEmail'
    },
    {
      class: 'StringProperty',
      name: 'internalNote'
    },
    {
      class: 'StringProperty',
      name: 'status',
      label: 'Status',
      factory: function() {
        return 'New';
      },
      tableCellFormatter: function(state, obj, rel) {
        this.start()
          .start().add(state).addClass('generic-status').addClass(state).end()
        .end();
      }
    },
    {
      class: 'LongProperty',
      name: 'emailId'
    }
  ]
});


foam.RELATIONSHIP({
  sourceModel: 'foam.nanos.auth.User',
  targetModel: 'foam.support.model.Ticket',
  forwardName: 'tickets',
  inverseName: 'user'
});


foam.RELATIONSHIP({
  sourceModel: 'foam.support.model.Ticket',
  targetModel: 'foam.support.model.TicketMessage',
  forwardName: 'messages',
  inverseName: 'ticketId'
});
