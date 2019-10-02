/**ß
 * @license
 * Copyright 2018 The FOAM Authors. All Rights Reserved.
 */

foam.CLASS({
  package: 'foam.nanos.dig.exception',
  name: 'EmptyDataException',
  extends: 'foam.nanos.dig.exception.DigErrorMessage',

  properties: [
    {
      class: 'StringProperty',
      name: 'status',
      value: '400'
    },
    {
      class: 'Int',
      name: 'code',
      value: 1002
    },
    {
      class: 'StringProperty',
      name: 'type',
      value: 'DAOReject'
    },
    {
      class: 'StringProperty',
      name: 'message',
      value: 'PUT|POST expecting data, non received.'
    }
  ]
});
