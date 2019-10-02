/**
 * @license
 * Copyright 2017 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

foam.CLASS({
  package: 'foam.nanos.auth',
  name: 'Hours',

  documentation: 'Represents open and closing time',

  properties: [
    {
      class: 'Enum',
      of: 'foam.nanos.auth.DayOfWeek',
      name: 'day'
    },
    {
      class: 'BooleanProperty',
      name: 'open'
    },
    {
      // TODO: Time isn't modeled properly yet and used to be stored as a String in java.
      // class: 'Time',
      class: 'StringProperty',
      name: 'startTime'
    },
    {
      // class: 'Time',
      class: 'StringProperty',
      name: 'endTime'
    }
  ]
});
