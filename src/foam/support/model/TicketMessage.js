/**
 * @license
 * Copyright 2018 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'foam.support.model',
  name: 'TicketMessage',

  documentation: 'Message Model Class and Properties',

  properties: [
    {
      class: 'LongProperty',
      name: 'id',
      visibility: foam.u2.Visibility.RO,
      label: 'Ticket Message Id'
    },
    {
      class: 'LongProperty',
      name: 'senderId'
    },
    {
      class: 'LongProperty',
      name: 'receiverId'
    },
    {
      class: 'DateProperty',
      name: 'dateCreated'
    },
    {
      class: 'StringProperty',
      name: 'message'
    },
    {
      class: 'StringProperty',
      name: 'type'
    }
  ]
});
