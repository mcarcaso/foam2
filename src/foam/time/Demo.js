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
      expression: function(timeZone, timestamp$epoch) {
        return timeZone.getYear(this.timestamp);
      },
      postSet: function(_, n, p) {
        this.timeZone.setYear(this.timestamp, n);
        this.clearProperty(p.name);
      },
    },
    {
      class: 'Byte',
      name: 'month',
      expression: function(timeZone, timestamp$epoch) {
        return timeZone.getMonth(this.timestamp);
      },
      postSet: function(_, n, p) {
        this.timeZone.setMonth(this.timestamp, n);
        this.clearProperty(p.name);
      },
    },
    {
      class: 'Byte',
      name: 'day',
      expression: function(timeZone, timestamp$epoch) {
        return timeZone.getDay(this.timestamp);
      },
      postSet: function(_, n, p) {
        this.timeZone.setDay(this.timestamp, n);
        this.clearProperty(p.name);
      },
    },
    {
      class: 'Byte',
      name: 'hour',
      expression: function(timeZone, timestamp$epoch) {
        return timeZone.getHour(this.timestamp);
      },
      postSet: function(_, n, p) {
        this.timeZone.setHour(this.timestamp, n);
        this.clearProperty(p.name);
      },
    },
    {
      class: 'Byte',
      name: 'minute',
      expression: function(timeZone, timestamp$epoch) {
        return timeZone.getMinute(this.timestamp);
      },
      postSet: function(_, n, p) {
        this.timeZone.setMinute(this.timestamp, n);
        this.clearProperty(p.name);
      },
    },
    {
      class: 'Byte',
      name: 'second',
      expression: function(timeZone, timestamp$epoch) {
        return timeZone.getSecond(this.timestamp);
      },
      postSet: function(_, n, p) {
        this.timeZone.setSecond(this.timestamp, n);
        this.clearProperty(p.name);
      },
    },
  ],
  actions: [
    function now() {
      this.timestamp.epoch = Date.now() / 1000;
    },
  ],
});
