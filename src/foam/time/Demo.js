foam.CLASS({
  package: 'foam.time',
  name: 'Demo',
  requires: [
    'foam.time.UTCTimeZone',
    'foam.time.Timestamp',
  ],
  properties: [
    {
      class: 'FObjectProperty',
      of: 'foam.time.TimeZone',
      name: 'timeZone',
      factory: function() {
        return this.UTCTimeZone.create();
      },
    },
    {
      class: 'FObjectProperty',
      of: 'foam.time.Timestamp',
      name: 'timestamp',
      factory: function() {
        return this.Timestamp.create();
      },
    },
    {
      class: 'Short',
      name: 'year',
      visibility: 'RO',
      expression: function(timeZone, timestamp$epoch) {
        return timeZone.getYear(this.timestamp);
      },
    },
    {
      class: 'Short',
      name: 'month',
      visibility: 'RO',
      expression: function(timeZone, timestamp$epoch) {
        return timeZone.getMonth(this.timestamp);
      },
    },
    {
      class: 'Short',
      name: 'day',
      visibility: 'RO',
      expression: function(timeZone, timestamp$epoch) {
        return timeZone.getDay(this.timestamp);
      },
    },
    {
      class: 'Short',
      name: 'hour',
      visibility: 'RO',
      expression: function(timeZone, timestamp$epoch) {
        return timeZone.getHour(this.timestamp);
      },
    },
    {
      class: 'Short',
      name: 'minute',
      visibility: 'RO',
      expression: function(timeZone, timestamp$epoch) {
        return timeZone.getMinute(this.timestamp);
      },
    },
    {
      class: 'Short',
      name: 'second',
      visibility: 'RO',
      expression: function(timeZone, timestamp$epoch) {
        return timeZone.getSecond(this.timestamp);
      },
    },
  ],
});

